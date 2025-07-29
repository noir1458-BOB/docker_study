FROM ubuntu:latest

RUN apt update && \
    apt install nginx -y && \
    apt install curl -y

COPY nginx-bob.conf /etc/nginx/sites-available/default

CMD [ "nginx" , "-g", "daemon off;" ]