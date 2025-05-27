# build stage
FROM arm64v8/node as build-stage
RUN npm install --global corepack@latest
RUN corepack enable pnpm
RUN pnpm -v 
WORKDIR /app
COPY . .
RUN pnpm install
RUN npm run build

# production stage
FROM arm64v8/nginx as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]