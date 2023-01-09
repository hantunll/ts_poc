FROM node:lts-alpine as build

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build


FROM nginxinc/nginx-unprivileged

WORKDIR /app
COPY --from=build /app/dist ./dist/
COPY nginx.conf /etc/nginx/conf.d/default.conf