# Continuous Integration Project

## Overview
This project aims to dockerize a website using continuous integration workflows. The website content is containerized with Docker and then implemented using GitHub Actions.

## Project Structure
The project consists of the following components:
- **Website Files**: The content of the website, located in the 'website' folder.
- **Dockerfile**: Defines the instructions to build the Docker image containing the website files and necessary dependencies.
- **GitHub Actions Workflow**: Configured to trigger on code pushes to the main branch.

## Continuous Integration Process Diagram
![Continuous Integration Process Diagram](s24cicd-IckyWuv/DIAGRAM.png)

## Run Project Locally

To run the project locally, follow these steps:
### Prerequisites
    Docker Desktop installed on your machine.
Clone this repository to your local device.
Navigate to the root directory of the cloned repo.
Build the Docker image by running the following command in your terminal:
  *docker build -t <your-image-name>*

## DockerHub Integration

To integrate with DockerHub, follow these steps:

    Create a Public/Private Repo in DockerHub
    Authenticate with DockerHub via CLI using a command like:
      *docker login -u exampleUsername*
    Push Container Image to DockerHub via a command like:
      *docker push userName/exampleProject:tagname*
      https://hub.docker.com/repository/docker/ickyramer/project4-5/general

## Also, make sure to use and configure GitHub Secrets

To configure GitHub Secrets you can:

  Set a Secret in your GitHub repo's settings
  The two secrets you need to set are the DOCKER_USERNAME and DOCKER_PASSWORD

## Behavior of GitHub Workflow

The GitHub workflow is triggered on pushes to the main branch of the repository. GH workflow automatically checks out the latest code, builds the Docker image, and pushes it to DockerHub.
