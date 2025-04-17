//
// Copyright (c) Microsoft.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
//

import fs from 'fs';

const telemetryJavaScript = fs.readFileSync('./src/app/components/telemetry.js', 'utf8');

export default function TelemetryScript() {
  return (
    <>
      {/* This is equivalent to the production-telemetry-script.html include */}
      <script
        id="uhf-footer-ccpa"
        dangerouslySetInnerHTML={{
          __html: telemetryJavaScript,
        }}
      />
    </>
  )
}