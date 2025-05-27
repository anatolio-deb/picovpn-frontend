# build stage
FROM arm64v8/node as build-stage
RUN corepack enable && corepack prepare pnpm@latest --activate
ENV PNPM_HOME=/usr/local/bin
RUN pnpm add --global @upleveled/preflight@latest
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