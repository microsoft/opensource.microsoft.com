//
// Copyright (c) Microsoft.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
//

'use client';

import { useState, useEffect } from 'react';

export const TABS = {
  'overview': 'Overview',
  'faq': 'FAQ',
  'apply': 'Apply',
};

const FIRST_TAB = Object.keys(TABS)[0];

const AzureCreditsTabs = () => {
  // Initialize with a default value
  const [activeTab, setActiveTab] = useState(FIRST_TAB);
  
  // Update the active tab once the component mounts in the browser
  useEffect(() => {
    const hash = window.location.hash;
    const newActiveTab = hash ? hash.replace('#', '') : FIRST_TAB;
    setActiveTab(newActiveTab);

    const handleHashChange = () => {
      const newHash = window.location.hash;
      const newTab = newHash ? newHash.replace('#', '') : FIRST_TAB;
      setActiveTab(newTab);
    }
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    }
  }, [setActiveTab]);

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
