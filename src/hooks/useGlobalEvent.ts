//
// Copyright (c) Microsoft Corporation. All rights reserved.
//

import { useEffect } from 'react';

export const useWindowEvent = (event: any, callback: any) => {
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

export const useGlobalScroll = (callback: any) => {
  return useWindowEvent('scroll', callback);
}

export default useWindowEvent;
