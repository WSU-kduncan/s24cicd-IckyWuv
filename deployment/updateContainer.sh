#!/bin/bash

lockfile="/tmp/updateContainer.lock"

# Check if the script is already running
if [ -f "$lockfile" ]; then
        echo "Update already in progress. Exiting..."
        exit 1
fi

# Create a lock file
touch "$lockfile"

echo "Received payload:"
echo "$1"

# Log the payload to a file for inspection
echo "$1" > /tmp/payload.log

# Docker Hub login using secure method
echo "dockerdocker" | sudo docker login -u "ickyramer" --password-stdin

# Pull the latest image
sudo docker pull ickyramer/project4-5:latest

# Check if a container with the name already exists and stop and remove it
container_id=$(sudo docker ps -aq -f name=projectfivecontainer)

if [ -n "$container_id" ]; then
        echo "Stopping existing container..."
        sudo docker stop projectfivecontainer

        echo "Waiting for container to stop..."
        while sudo docker ps -aq -f status=running -f name=projectfivecontainer | grep -q .; do
                sleep 1
        done
        echo "Removing existing container..."
        sudo docker rm projectfivecontainer
fi

# Waiting a bit longer
sleep 6


# Run the container with the updated image
echo "Starting new container..."
sudo docker run -d -p 80:80 --name projectfivecontainer ickyramer/project4-5:latest

# Remove the lock file
rm "$lockfile"
