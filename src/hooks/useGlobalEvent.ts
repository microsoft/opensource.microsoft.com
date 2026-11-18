//
// Copyright (c) Microsoft Corporation. All rights reserved.
//

import { useEffect } from 'react';

export const useWindowEvent = <K extends keyof WindowEventMap>(event: K, callback: (ev: WindowEventMap[K]) => void) => {
  useEffect(() => {
    window.addEventListener(event, callback);
    return () => window.removeEventListener(event, callback);
  }, [event, callback]);
};

//export const useGlobalMouseUp = (callback) => {
  //return useWindowEvent("mouseup", callback);
//};

//export const useGlobalMouseMove = (callback) => {
  //return useWindowEvent("mousemove", callback);
//};

export const useGlobalScroll = (callback: (ev: Event) => void) => {
  return useWindowEvent('scroll', callback);
}

export default useWindowEvent;
