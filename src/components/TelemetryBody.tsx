//
// Copyright (c) Microsoft.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
//

'use client';

import { CookieConsentWrapper } from './CookieConsentIsland';

export default function TelemetryBody() {
  return (
    <>
      <CookieConsentWrapper />

      {/* This was equivalent to the production-telemetry.html include */}
      {/*
      <script
        dangerouslySetInnerHTML={{
          __html: `
            <div id="cookiebanner"></div>
          `
        }}
      />
      */}
    </>
  )
}
