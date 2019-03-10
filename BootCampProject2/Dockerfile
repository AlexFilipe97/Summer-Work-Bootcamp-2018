FROM postgres:11

ENV POSTGRES_USER=node
ENV POSTGRES_PASSWORD=node
ENV POSTGRES_DB=documents

RUN mkdir -p /docker-entrypoint-initdb.d
ADD documents.sql /docker-entrypoint-initdb.d/
