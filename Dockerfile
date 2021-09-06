FROM node:lts-slim

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build
WORKDIR ./dist

EXPOSE 4000

CMD ["npm", "run", "prod:server"]
