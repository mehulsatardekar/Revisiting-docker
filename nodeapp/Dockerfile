From node:alpine
WORKDIR /app
ADD package*.json /app/
RUN npm install
ADD . .
CMD node server.js

