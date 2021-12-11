# pull the base image - https://github.com/nimmis/docker-alpine-apache
FROM httpd:2.4

COPY ./build /usr/local/apache2/htdocs/
COPY ./security/www_au-confluent-des-jeux_fr.cer /usr/local/apache2/conf
COPY ./security/www.au-confluent-des-jeux.fr.key /usr/local/apache2/conf
COPY ./install/httpd.conf /usr/local/apache2/conf/
COPY ./install/httpd-ssl.conf /usr/local/apache2/conf/extra

LABEL maintainer="Christophe Nigaud"
MAINTAINER <cni78.2021@free.com>
