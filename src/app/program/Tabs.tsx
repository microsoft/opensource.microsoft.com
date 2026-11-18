//
// Copyright (c) Microsoft.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
//

'use client';

import { useLocationHash } from '../../hooks/useLocationHash';

const TABS = {
  'program-overview': 'Overview',
  'program-tools': 'Tools & resources',
  'program-using': 'Using open source',
  'program-contributing': 'Contributing',
  'program-releasing': 'Releasing projects',
};

const FIRST_TAB = Object.keys(TABS)[0];

const ProgramTabs = () => {
  const activeTab = useLocationHash(FIRST_TAB);

  return (
    <div className="tabs__tabs" role="tablist">
      {TABS && Object.entries(TABS).map(([key, label]) => (
        <a
          key={key}
          className={['tabs__tab', activeTab === key ? 'is-active' : ''].filter(x => x).join(' ')}
          role="tab"
          href={`#${key}`}
          data-tab={key}
        >
          {label}
        </a>
      ))}
    </div>
  );
}

export default ProgramTabs;
