FROM node:latest

WORKDIR /src

COPY package.json ./

RUN apt-get update

RUN apt-get install --yes apt-transport-https\
    && curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -\
    && echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list\
    && apt-get update && apt-get install --yes yarn\
    && echo 'yarn installed: ' && yarn --version

COPY . .

RUN yarn install && yarn build

EXPOSE 4000
CMD [ "yarn", "serve" ]
