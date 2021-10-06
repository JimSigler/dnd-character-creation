FROM node:16
# Create App directory
WORKDIR /usr/src/app

# install app dependencies
# a wildcard is used to ensure both package.json and package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# if you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .
EXPOSE 3004
CMD [ "node", "index.js"]