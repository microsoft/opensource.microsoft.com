#
# Copyright (c) Microsoft.
# Licensed under the MIT license. See LICENSE file in the project root for full license information.
#

ARG IMAGE_NAME=mcr.microsoft.com/azurelinux/base/nodejs:20

FROM $IMAGE_NAME AS build

RUN tdnf -y update --quiet

WORKDIR /build

COPY . .

RUN npm install
RUN npm run build

FROM mcr.microsoft.com/azurelinux/base/core:3.0

# Install nginx
RUN tdnf install -y nginx --quiet && tdnf clean all

WORKDIR /usr/share/nginx/html
COPY --from=build /build/out .

# Configure nginx
RUN chmod -R 755 /usr/share/nginx/html

EXPOSE 80
HEALTHCHECK --interval=30s --timeout=3s --start-period=40s --retries=3 \
  CMD curl -f http://localhost/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
