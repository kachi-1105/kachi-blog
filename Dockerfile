FROM node:24-slim

WORKDIR /app

COPY package*.json ./

RUN npm install

EXPOSE 4321

CMD ["npm", "run", "dev"]
