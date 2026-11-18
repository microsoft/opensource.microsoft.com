//
// Copyright (c) Microsoft.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
//

import { useSyncExternalStore } from 'react';

function subscribe(onChange: () => void) {
  window.addEventListener('hashchange', onChange);
  return () => window.removeEventListener('hashchange', onChange);
}

// Returns the current URL hash (without '#'), or the fallback when there is no hash.
// The fallback is also used for server rendering and hydration.
export function useLocationHash(fallback: string) {
  return useSyncExternalStore(
    subscribe,
    () => window.location.hash.replace('#', '') || fallback,
    () => fallback,
  );
}

export default useLocationHash;
