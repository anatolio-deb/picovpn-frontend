# build stage
FROM node:lts-alpine as build-stage
ENV API_HOST="api"
RUN npm install -g pnpm@latest-10
WORKDIR /app
COPY . .
RUN pnpm install
RUN npm run build

# production stage
FROM nginx:latest as production-stage
RUN apt update
RUN apt install certbot python3-certbot-nginx -y
# RUN certbot --nginx -d picovpn.ru -d www.picovpn.ru
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY ./nginx/* /etc/nginx/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;", "-c", "/etc/nginx/nginx.conf"]