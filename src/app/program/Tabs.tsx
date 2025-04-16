//
// Copyright (c) Microsoft.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
//

'use client';

import { useState, useEffect } from 'react';

const FIRST_TAB = 'program-overview';

const ProgramTabs = () => {
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
      <a className={['tabs__tab', activeTab === 'program-overview' ? 'is-active' : ''].filter(x => x).join(' ')} role="tab" href="#program-overview" data-tab="program-overview">Overview</a>
      <a className={['tabs__tab', activeTab === 'program-tools' ? 'is-active' : ''].filter(x => x).join(' ')} role="tab" href="#program-tools" data-tab="program-tools">Tools &amp; resources</a>
      <a className={['tabs__tab', activeTab === 'program-using' ? 'is-active' : ''].filter(x => x).join(' ')} role="tab" href="#program-using" data-tab="program-using">Using open source</a>
      <a className={['tabs__tab', activeTab === 'program-contributing' ? 'is-active' : ''].filter(x => x).join(' ')} role="tab" href="#program-contributing" data-tab="program-contributing">Contributing</a>
      <a className={['tabs__tab', activeTab === 'program-releasing' ? 'is-active' : ''].filter(x => x).join(' ')} role="tab" href="#program-releasing" data-tab="program-releasing">Releasing projects</a>
    </div>
  );
}

export default ProgramTabs;
