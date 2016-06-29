# Vagrant Docker Node

Small example for a vagrant setup using docker provisioning

## Structure

Vagrant Box: "ubuntu/trusty64"

### Network

Node application runs on port 8080 on docker

Docker forwards port 8080 -> 49160 on vagrant

Vagrant forwards port 49160 -> 8080 on host

## Setup

> vagrant up

Go to `localhost:8080` on host
