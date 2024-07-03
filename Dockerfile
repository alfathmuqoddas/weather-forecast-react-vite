FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

FROM docker.io/nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

#COPY nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
