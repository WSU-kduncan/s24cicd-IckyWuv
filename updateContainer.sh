#!/bin/bash
sudo docker pull ickyramer/project4-5:latest
sudo docker stop $(sudo docker ps -aq)
sudo docker rm $(sudo docker ps -aq)
sudo docker run -d -p 80:80 ickyramer/project4-5:latest
