//
// Copyright (c) Microsoft.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
//

'use client';

import { useLocationHash } from '../../../hooks/useLocationHash';
import AzureCreditsOverview from './Overview';
import AzureCreditsQuestions from './FAQ';
import AzureCreditsApply from './Apply';

const FIRST_TAB = 'overview';
// tabs are overview, faq, apply

// If no JavaScript, no content at all.
// Otherwise, show the active content appropriately.

const AzureCreditsDynamicContent = () => {
  const activeTab = useLocationHash(FIRST_TAB);

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
