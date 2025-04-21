//
// Copyright (c) Microsoft.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
//

export function isTelemetryEnabled() {
  return process.env.NEXT_ENABLE_TELEMETRY === '1' || process.env.NODE_ENV === 'production';
}
