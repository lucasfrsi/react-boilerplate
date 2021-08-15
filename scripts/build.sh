#!/usr/bin/env bash

set -e
set -x

docker build -t $DOCKER_USERNAME/react-boilerplate:latest -t $DOCKER_USERNAME/react-boilerplate:$SHA .
