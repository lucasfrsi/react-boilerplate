#!/usr/bin/env bash

set -e
set -x

docker build -t $DOCKER_USERNAME/${REPO_INFO[1]}:latest -t $DOCKER_USERNAME/${REPO_INFO[1]}:$SHA 
