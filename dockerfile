FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:20-alpine

WORKDIR /app


RUN npm install -g serve


COPY --from=build /app/build ./build


EXPOSE 3000


CMD ["serve", "-s", "build", "-p", "3000"]