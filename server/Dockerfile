FROM node:14.17.1 as builder
WORKDIR '/app'
COPY ./package.json ./
RUN yarn install
COPY . .
CMD [ "yarn", "run", "start" ]