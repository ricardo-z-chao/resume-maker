FROM node:alpine AS build

WORKDIR /app

RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml ./

RUN --mount=type=cache,target=/root/.local/share/pnpm/store \
    pnpm install --frozen-lockfile --ignore-scripts

COPY . .

RUN pnpm run build

FROM nginx:alpine

COPY --from=build /app/dist /home/resume-maker

RUN cat > /etc/nginx/conf.d/default.conf <<EOF
server {
    listen 80;

    location = /favicon.svg {
        return 301 /resume-maker/favicon.svg;
    }

    location /resume-maker/ {
        root /home;
        index index.html;
    }
}
EOF

ENTRYPOINT ["nginx", "-g", "daemon off;"]

EXPOSE 80
