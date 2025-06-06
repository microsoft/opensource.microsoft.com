//
// Copyright (c) Microsoft.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
//

import type { NextConfig } from 'next';

const isProduction = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = isProduction ? {
  output: 'export',
  trailingSlash: true,
} : {};

if (!isProduction) {
  nextConfig.rewrites = async function rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://opensource.microsoft.com/api/:path*',
      },
      {
        source: '/avatars/:path*',
        destination: 'https://opensource.microsoft.com/avatars/:path*',
      },
    ]
  };
}

export default nextConfig;
