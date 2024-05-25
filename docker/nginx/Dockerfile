FROM nginx:1.18-alpine

WORKDIR /var/www/nginx

COPY ./public public

COPY ./docker/nginx/default.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
