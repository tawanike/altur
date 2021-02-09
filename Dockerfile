FROM node:12.19.0-alpine3.10

WORKDIR /app

COPY package*.json ./

# RUN apk add npm
RUN npm install

# RUN npm install --no-package-lock

# ENV PATH="./node_modules/.bin:$PATH"

# ENV PATH $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH

COPY . /app

RUN npm build

EXPOSE 3000

CMD ["npm", "run", "start"]