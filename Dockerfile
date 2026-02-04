FROM node:alpine AS build

WORKDIR /app

RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml .

RUN --mount=type=cache,target=/root/.local/share/pnpm/store \
    pnpm install --frozen-lockfile --ignore-scripts

COPY . .

RUN pnpm run build

FROM nginx:alpine

COPY --from=build /app/.nginx/nginx.conf /etc/nginx/conf.d/default.conf

WORKDIR /usr/share/nginx/html
# Remove default nginx static assets
RUN rm -rf ./*

COPY --from=build /app/dist ./resume-maker/

ENTRYPOINT ["nginx", "-g", "daemon off;"]

EXPOSE 80
