#stage 1
FROM node:lts-alpine3.17 as build
RUN mkdir -p /app
WORKDIR /app

COPY package.json /app/
RUN npm install

COPY . /app/

RUN npm run build --prod

#stage 2 

FROM nginx:alpine
COPY --from=build /app/dist/crm /usr/share/nginx/html
