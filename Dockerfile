FROM node:lts-alpine
RUN npm install -g pnpm@latest-10 serve
WORKDIR /code
COPY . /code/
RUN pnpm install
RUN npm run build
