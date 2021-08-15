#!/usr/bin/env bash

set -e
set -x

echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin

docker push $DOCKER_USERNAME/${REPO_INFO[1]}:$SHA
docker push $DOCKER_USERNAME/${REPO_INFO[1]}:latest
