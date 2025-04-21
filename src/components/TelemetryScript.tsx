//
// Copyright (c) Microsoft.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
//

import fs from 'fs';

const telemetryJavaScript = fs.readFileSync('./src/components/telemetry.js', 'utf8');
const REPLACEMENT_KEY_CONST = "const oneDsTelemetryInstrumentationKey = '';";
const REPLACEMENT_ENV_CONST = "const oneDsEnvironmentDescriptor = '';";
const REPLACEMENT_IS_DEBUGGING_CONST = "const isDebugging = false;";

function get1dsInstrumentationKey() {
  return process.env.NEXT_ONE_DS_INSTRUMENTATION_KEY;
}

function getIsDebugging() {
  return process.env.NEXT_DEBUG === '1';
}

function getTelemetryEnvironmentDescriptor() {
  return process.env.NEXT_ENV_DESCRIPTOR || 'unknown';
}

function getTelemetryScript() {
  let script = telemetryJavaScript;
  const instrumentationKey = get1dsInstrumentationKey();
  const env = getTelemetryEnvironmentDescriptor();
  const isDebugging = getIsDebugging();
  if (isDebugging) {
    script = script.replace(REPLACEMENT_IS_DEBUGGING_CONST, `const isDebugging = true;`);
  }
  if (instrumentationKey) {
    script = script.replace(REPLACEMENT_KEY_CONST, `const oneDsTelemetryInstrumentationKey = '${instrumentationKey}';`);
  }
  if (env) {
    script = script.replace(REPLACEMENT_ENV_CONST, `const oneDsEnvironmentDescriptor = '${env}';`);
  }
  return script;
}

export default function TelemetryScript() {
  return (
    <>
      {/* This is equivalent to the production-telemetry-script.html include */}
      <script
        id="uhf-footer-ccpa"
        dangerouslySetInnerHTML={{
          __html: getTelemetryScript(),
        }}
      />
    </>
  )
}