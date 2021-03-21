# pull the base image
FROM node:alpine
RUN mkdir -p /usr/src/acdj
WORKDIR /usr/src/acdj
COPY . /usr/src/acdj

# Install yarn and other dependencies via apk
RUN apk --no-cache --virtual build-dependencies add \
    python \
    make \
    g++ \
    && npm install \
    && apk del build-dependencies

# add `/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/acdj/node_modules/.bin:$PATH

LABEL maintainer="Christophe Nigaud"
MAINTAINER <cni78.2021@free.com>

# start app
EXPOSE 3443
CMD ["npm", "start"]
