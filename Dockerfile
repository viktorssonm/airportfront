FROM node:14.16.0-alpine3.13 AS build-stage
WORKDIR /APP
COPY package*.json ./
RUN npm install
COPY . . 
RUN npm run build

FROM nginx:1.12-alpine
COPY --from=build-stage /APP/build /usr/share/nginx/html
COPY --from=build-stage /APP/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
ENTRYPOINT ["nginx","-g","daemon off;"]