FROM node:20.10.0

WORKDIR /app

COPY package.json /app
COPY . .
RUN npm install

EXPOSE 3000

CMD [ "npm" , "run","dev"]