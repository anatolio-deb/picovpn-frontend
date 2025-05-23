# build stage
FROM node:lts-alpine as build-stage
RUN npm install -g pnpm@latest-10
WORKDIR /app
COPY . .
RUN pnpm install
RUN npm run build

# production stage
FROM nginx:latest as production-stage
COPY --from=build-stage /app/dist /var/www/html
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]