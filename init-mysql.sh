docker exec db bash -c "chmod 0775 docker-entrypoint-initdb.d/init-database.sh"
docker exec -it 4712f6ee7074 bash