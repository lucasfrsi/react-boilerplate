#!/usr/bin/env bash

set -e
set -x

echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin

docker push $DOCKER_USERNAME/react-boilerplate:latest
docker push $DOCKER_USERNAME/react-boilerplate:$SHA
