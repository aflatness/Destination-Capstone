FROM node:12-alpine
 WORKDIR /FEC
 RUN npm install
 COPY . .
 ENV MONGODBURL='mongodb://mongodb:27017/fec'
 CMD ["node", "Server/index.js"]