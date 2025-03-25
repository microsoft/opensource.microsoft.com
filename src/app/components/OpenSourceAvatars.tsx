//
// Copyright (c) Microsoft.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
//

'use client';

import React, { Fragment, useEffect, useState } from 'react';
import { SquareFillIcon, TriangleRightIcon } from '@primer/octicons-react';

import OpenSourceSvg from './svg/OpenSourceSvg';

type AvatarHighlight = {
  grantedClicks: number;
  remainingClicks: number;
  avatarUrl: string;
};

type AvatarsResponse = {
  avatars: string[];
};

type HeroSquarePosition = {
  top: number;
  left: number;
  width: number;
  height: number;
};

const EMPTY_HIGHLIGHT: AvatarHighlight = {
  remainingClicks: 0,
  grantedClicks: 0,
  avatarUrl: '',
};

const AVATARS_ENDPOINT = '/api/avatars';
const MAX_HEROES = 6;
const MAX_RECENT_QUEUE_SIZE = 12;
const STARTUP_DELAY_MS = 50;
const WORKER_FREQUENCY_MS = 40;
// const FIRST_DISPLAY_DELAY_MS = 1700;
// const DISMISS_MS = 500;
// const INTRODUCE_MS = 800;
// const HOOK_RESIZE_HANDLER_MS = 5000;
const CLICK_MINIMUM_PER_AVATAR = 42;
const CLICK_MAXIMUM_PER_AVATAR = 95;

const EMPTY_HIGHLIGHTS: AvatarHighlight[] = new Array(MAX_HEROES).fill(EMPTY_HIGHLIGHT);

export default function OpenSourceAvatars() {
  const [isPaused, setIsPaused] = useState(false);
  const [lastKnownWidth, setLastKnownWidth] = useState(0);
  const [highlighted, setHighlighted] = useState<AvatarHighlight[]>(EMPTY_HIGHLIGHTS);
  const [recentAvatarQueue, setRecentAvatarQueue] = useState<string[]>([]);
  const [avatars, setAvatars] = useState<string[]>([]);
  const [heroSquarePositions, setHeroSquarePositions] = useState<HeroSquarePosition[]>([]);

  const toggle = () => {
    setIsPaused(!isPaused);
    return false;
  };

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth !== lastKnownWidth) {
        console.log('Window resized, updating lastKnownWidth to ', window.innerWidth);
        setLastKnownWidth(window.innerWidth);
      }
      const heroContainer = document.getElementById('hero-figure');
      const newPositions: HeroSquarePosition[] = [];
      for (let i = 0; i < MAX_HEROES; i++) {
        const heroSquare = getHeroSquare(i + 1);
        if (heroSquare && heroContainer) {
          const position = getRelativeOffset(heroSquare, heroContainer);
          const size = getSize(heroSquare);
          newPositions[i] = {
            top: position[0],
            left: position[1],
            width: size[1],
            height: size[0],
          };
        }
      }
      setHeroSquarePositions(newPositions);      
    };
    window.addEventListener('resize', onResize);
    if (!heroSquarePositions || heroSquarePositions.length === 0) {
      onResize();
    }
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [
    lastKnownWidth, 
    heroSquarePositions,    
  ]);

  useEffect(() => {
    const fetchAvatars = async () => {
      try {
        const response = await fetch(AVATARS_ENDPOINT);
        const data: AvatarsResponse = await response.json();
        setAvatars(data.avatars);
      } catch (error) {
        console.error('Error fetching avatars:', error);
      }
    };

    const startupHandle = setTimeout(() => {
      if (!avatars.length) {
        fetchAvatars();
      }
    }, STARTUP_DELAY_MS);

    return () => {
      clearTimeout(startupHandle);
    };
  }, [avatars]);

  useEffect(() => {
    if (!avatars.length) {
      return;
    }
    const intervalId = setInterval(() => {
      // prune the recent avatar queue
      let updatedAvatarQueue = [...recentAvatarQueue]
      if (updatedAvatarQueue.length > MAX_RECENT_QUEUE_SIZE) {
        updatedAvatarQueue = updatedAvatarQueue.slice(recentAvatarQueue.length - MAX_RECENT_QUEUE_SIZE);
      }

      if (!isPaused) {
        // decrement any highlighted avatars
        let updatedHighlights = highlighted.map((highlight) => {
          if (highlight && highlight.remainingClicks > 0) {
            return {
              ...highlight,
              remainingClicks: highlight.remainingClicks - 1,
            };
          }
          return highlight;
        });
        // try and get an available highlight item
        const availableIndexes = updatedHighlights.map((highlight, index) => {
          if (!highlight || highlight.remainingClicks <= 0) {
            return index;
          }
          return -1;
        }).filter((index) => index !== -1);
        if (availableIndexes.length > 0) {
          // try and choose a random avatar not in the recent queue
          const randomAvatar = randomElement(avatars.filter((avatar) => !recentAvatarQueue.includes(avatar)));
          if (randomAvatar) {
            updatedAvatarQueue.push(randomAvatar);
            setRecentAvatarQueue(updatedAvatarQueue);
            const randomIndex = getRandomInt(0, availableIndexes.length);
            const directIndex = availableIndexes[randomIndex];
            const clicksToAssign = getRandomInt(CLICK_MINIMUM_PER_AVATAR, CLICK_MAXIMUM_PER_AVATAR);
            console.log(`Assigning ${clicksToAssign} clicks to avatar ${randomAvatar} at index ${directIndex}`);
            updatedHighlights[directIndex] = {
              grantedClicks: clicksToAssign,
              remainingClicks: clicksToAssign,
              avatarUrl: randomAvatar,
            };
          }
        }
        setHighlighted(updatedHighlights);
      }
    }, WORKER_FREQUENCY_MS);

    return () => clearInterval(intervalId);
  }, [
    isPaused,
    avatars,
    recentAvatarQueue,
    highlighted,
  ]);

  const isPauseVisible = !!isPaused;
  const isResumeVisible = !isPaused;

  return (
    <div
      className="col-12 col-md-5 col-lg-4 pl-md-4 pl-lg-2"
      style={
        { position: "relative" }
      }
      id="hero-figure"
    >
      <figure className="intro-svg" id="draw-svg">
        <OpenSourceSvg />
      </figure>
      <div id="hero-avatars" style={
        { position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }
      }>
        {highlighted.map((highlight, i) => {
          if (!highlight || !highlight.avatarUrl || highlight.remainingClicks <= 0) {
            return <Fragment key={i}></Fragment>;
          }
          const position = heroSquarePositions[i];
          // the opacity for the first 5 clicks is 0.0 to load the image
          // the opacity for clicks 5-10 goes from 0.0 to 1.0
          // the final 5 clicks approaching 0 go from 1.0 to 0.0
          let opacity: number;
          const clicksSinceGrant = highlight.grantedClicks - highlight.remainingClicks;
          if (clicksSinceGrant < 5) {
            opacity = 0.0;
          } else if (clicksSinceGrant < 10) {
            opacity = (clicksSinceGrant - 5) / 5;
          } else if (highlight.remainingClicks > 5) {
            opacity = 1.0;
          } else {
            opacity = highlight.remainingClicks / 5;
          }
          if (!position) {
            return <Fragment key={i}></Fragment>;
          }
          return (
            <img
              key={i}
              style={
                {
                  position: "absolute",
                  height: (Math.ceil(position.height) + .0) + "px",
                  width: (Math.ceil(position.width) + 0) + "px",
                  top: (Math.round(position.top) - 0) + "px",
                  left: (Math.round(position.left) - 0) + "px",
                  backgroundColor: '#000',
                  border: "1px solid #fff",
                  borderRadius: "50%",
                  opacity,
                }
              }
              src={highlight.avatarUrl}
              alt="A random photo or avatar of an open source contributor from Microsoft" />
          );
        })}
      </div>
      <div
        id="hero-accessibility-controls"
        style={
          { position: "absolute", right: 0, bottom: 0 }
        }
        data-require-javascript="yes"
        data-javascript-show="immediate"
      >
        <div
          style={
            { position: "relative", marginBottom: "-30px" }
          }
        >
          <a
            className="refresh"
            style={{ color: "#fff" }}
            id="toggle-graphics"
            href="#"
            onClick={toggle}
            title={isPaused ? "Resume animations" : "Pause animations"}>
              <span
                className="sr-only"
                id="toggle-text2"
              >
                {isPaused ? 'Resume animations and start showing new graphics' : 'Pause animations and stop showing new graphics'}
              </span>
              <span
                id="toggle-text"
                aria-hidden="true"
              >
                {isPaused ? "Resume" : "Pause"}
              </span>{' '}
              <span
                style={{ display: isPauseVisible ? 'inline' : 'none' }}
                id="pause-icon">
                <SquareFillIcon />
              </span>
              <span 
                style={{ display: isResumeVisible ? 'inline' : 'none' }}
                id="resume-icon">
                <TriangleRightIcon />
              </span>
            </a>
        </div>
      </div>
    </div>
  );
}

function getOffset(element: HTMLElement) {
  var item = element.getBoundingClientRect();
  return [item.top + window.pageYOffset - document.documentElement.clientTop, item.left + window.pageXOffset - document.documentElement.clientLeft];
}

function getSize(element: HTMLElement) {
  var item = element.getBoundingClientRect();
  return [item.height, item.width];
}

function getRelativeOffset(element: HTMLElement, container: HTMLElement) {
  var containerOffset = getOffset(container);
  var item = getOffset(element);
  var top = item[0] - containerOffset[0];
  var left = item[1] - containerOffset[1];
  return [top, left];
}

function getHeroSquare(i: number) {
  const element = document.getElementById('heroSquare' + i);
  if (!element) {
    return null;
  }
  return element;
}

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function randomElement(arr: any[]) {
  if (!arr || !arr.length) {
    return null;
  }
  return arr[getRandomInt(0, arr.length)];
}
