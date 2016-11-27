Docker Commands:
- docker images : To view all docker repositories available on local
- docker ps : To view all containers running locally
- docker ps -l : To view last container created
- docker ps -a : To view all container created
- docker rm <name> : to remove docker container
- docker rmi <id> : To remove docker image

- docker run -p 27017:27017 -d --name db mongo : command to run dockerize mongo
- docker run -p 3000:3000 --link db:db_1 --name DockerizeMEANapp tavishagg/meanstack : Command to attach docker mongoDB and NodeJS app

Reference: https://blog.giantswarm.io/getting-started-with-docker-and-meanjs/

- docker push <Repository name> : Command to push docker image to docker hub

- docker-compose up: Commnd to start multiple docker files
