# Dockerfile
FROM node:18-alpine AS build-stage

WORKDIR /app

COPY package*.json yarn.lock ./
RUN yarn install 

COPY . .

RUN yarn build


FROM nginx:stable-alpine as production-stage

COPY --from=build-stage /app/dist /usr/share/nginx/html

# Copy custom Nginx config to handle Vue router
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
