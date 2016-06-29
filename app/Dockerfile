FROM ubuntu:14.04

# Replace shell with bash so we can source files
RUN rm /bin/sh && ln -s /bin/bash /bin/sh

RUN apt-get update && apt-get install -y -q --no-install-recommends \
    build-essential \
    ca-certificates \
    curl

# Install nvm
ENV NVM_DIR /usr/local/nvm
ENV NODE_VERSION v4.4.4 

RUN curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.2/install.sh | bash \
    && source $NVM_DIR/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default

ENV NODE_PATH $NVM_DIR/$NODE_VERSION/lib/node_modules
ENV PATH      $NVM_DIR/$NODE_VERSION/bin:$PATH

# Create app directory
#RUN mkdir -p /usr/src/app
#WORKDIR /usr/src/app

# Install app dependencies
#COPY package.json /usr/src/app/
#RUN npm install

# Bundle app source
#COPY . /usr/src/app

EXPOSE 8080
#CMD [ "npm", "start" ]
