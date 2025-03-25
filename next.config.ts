//
// Copyright (c) Microsoft.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
//

import type { NextConfig } from 'next';

const isProduction = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = isProduction ? {
  output: 'export',
} : {};

if (!isProduction) {
  nextConfig.rewrites = async function rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://opensource.microsoft.com/api/:path*',
      },
    ]
  };
}

export default nextConfig;
