//
// Copyright (c) Microsoft.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
//

'use client';

import { useLocationHash } from '../../hooks/useLocationHash';
import Contributing from './Contributing';
import Overview from './Overview';
import Releasing from './Releasing';
import Tools from './Tools';
import Using from './Using';

const FIRST_TAB = 'program-overview';

// If no JavaScript, no content at all.
// Otherwise, show the active content appropriately.

const ProgramDynamicContent = () => {
  const activeTab = useLocationHash(FIRST_TAB);

  return (
    <div className="col-md-10 col-lg-7 mx-auto">
      <div className={['tabs__content', activeTab === 'program-overview' ? 'is-active' : ''].filter(x => x).join(' ')} data-tab="program-overview">
        <Overview />
      </div>
      <div className={['tabs__content', activeTab === 'program-tools' ? 'is-active' : ''].filter(x => x).join(' ')} data-tab="program-tools">
        <Tools />
      </div>
      <div className={['tabs__content', activeTab === 'program-using' ? 'is-active' : ''].filter(x => x).join(' ')} data-tab="program-using">
        <Using />
      </div>
      <div className={['tabs__content', activeTab === 'program-contributing' ? 'is-active' : ''].filter(x => x).join(' ')} data-tab="program-contributing">
        <Contributing />
      </div>
      <div className={['tabs__content', activeTab === 'program-releasing' ? 'is-active' : ''].filter(x => x).join(' ')} data-tab="program-releasing">
        <Releasing />
      </div>
    </div>
  );
}

export default ProgramDynamicContent;
