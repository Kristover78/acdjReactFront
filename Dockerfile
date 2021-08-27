# pull the base image
FROM node:12.13.1-alpine
RUN mkdir -p /usr/src/acdj
WORKDIR /usr/src/acdj
COPY . /usr/src/acdj

RUN npm install -g npm@7.21.1

RUN apk add --no-cache --virtual .gyp \
        python \
        make \
        g++ \
    && npm install \
    && apk del .gyp

# Install yarn and other dependencies via apk
#RUN apk update && apk --no-cache --virtual build-dependencies add \
#    python3 py3-pip \
#    make \
#    g++ \
#    && npm --add-python-to-path='true' install \
#    && apk del build-dependencies

# add `/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/acdj/node_modules/.bin:$PATH

LABEL maintainer="Christophe Nigaud"
MAINTAINER <cni78.2021@free.com>

# start app
EXPOSE 3443
CMD ["npm", "start"]
