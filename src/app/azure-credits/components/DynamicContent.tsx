//
// Copyright (c) Microsoft.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
//

'use client';

import { useState, useEffect } from 'react';
import AzureCreditsOverview from './Overview';
import AzureCreditsQuestions from './FAQ';
import AzureCreditsApply from './Apply';

const FIRST_TAB = 'overview';
// tabs are overview, faq, apply

// If no JavaScript, no content at all.
// Otherwise, show the active content appropriately.

const AzureCreditsDynamicContent = () => {
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
    <div className="col-md-10 col-lg-7 mx-auto">
      <div className={['tabs__content', activeTab === 'overview' ? 'is-active' : ''].filter(x => x).join(' ')} data-tab="overview">
        <AzureCreditsOverview />
      </div>
      <div className={['tabs__content', activeTab === 'faq' ? 'is-active' : ''].filter(x => x).join(' ')} data-tab="faq">
        <AzureCreditsQuestions />
      </div>
      <div className={['tabs__content', activeTab === 'apply' ? 'is-active' : ''].filter(x => x).join(' ')} data-tab="apply">
        <AzureCreditsApply />
      </div>
    </div>
  );
}

export default AzureCreditsDynamicContent;
