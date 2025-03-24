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
# RUN mv node_modules production_node_modules
# RUN rm -f .npmrc

# the site will show up in the dist folder

FROM nginx:alpine
COPY --from=build /build/out /usr/share/nginx/html
