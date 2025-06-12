//
// Copyright (c) Microsoft.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
//

import { Metadata } from 'next';
import ExploreProjectsDynamic from './dynamic';

export const metadata: Metadata = {
  title: 'Explore Projects - Microsoft Open Source',
};

export default function ExploreProjects() {
  return (
    <>
      <noscript>This experience requires JavaScript.</noscript>
      <ExploreProjectsDynamic />
    </>
  );
}
