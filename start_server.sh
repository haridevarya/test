#!/bin/bash

#Remove the previous container
docker rm react-project  --force
docker container prune --force
docker image prune -a --force
# Start the Docker container with the pulled image
docker run -d --name react-project -p 80:3000 315819558409.dkr.ecr.us-east-1.amazonaws.com/react-project:latest
