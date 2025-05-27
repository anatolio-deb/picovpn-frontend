# build stage
FROM arm64v8/node as build-stage
WORKDIR /app
COPY . ./app
# SHELL ["/usr/bin/bash", "-c"]
RUN npm install
RUN npm run build

# production stage
FROM arm64v8/nginx as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]