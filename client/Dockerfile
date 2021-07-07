FROM node:14.17.1
WORKDIR '/app'
COPY ./package.json ./
RUN yarn install
COPY . .
EXPOSE 3000 
CMD ["yarn", "start"]