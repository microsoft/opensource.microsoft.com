//
// Copyright (c) Microsoft.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
//

'use client';

import { useLocationHash } from '../../../hooks/useLocationHash';

export const TABS = {
  'overview': 'Overview',
  'faq': 'FAQ',
  'apply': 'Apply',
};

const FIRST_TAB = Object.keys(TABS)[0];

const AzureCreditsTabs = () => {
  const activeTab = useLocationHash(FIRST_TAB);

  return (
    <div className="tabs__tabs" role="tablist">
      {Object.entries(TABS).map(([key, label]) => (
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

export default AzureCreditsTabs;
