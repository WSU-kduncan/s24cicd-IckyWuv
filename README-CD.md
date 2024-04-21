# CD Project Overview

**Objective:** Implement a Continuous Deployment (CD) pipeline for a Dockerized application. The pipeline automates the deployment process whenever a new Docker image is pushed to Docker Hub, utilizing GitHub Actions for CI/CD, Docker Hub for Docker image repository, and an AWS EC2 instance for deployment.

**Tools Used:**
- GitHub & GitHub Actions
- Docker & Docker Hub
- AWS EC2 and Ubuntu instances
- Lucid Charts
- [`adnanh/webhook`](https://github.com/adnanh/webhook) for webhook handling

## Part 1 - Semantic Versioning

### Semantic Versioning Implementation

- **Tagging Practice:** Use semantic versioning for git tags. Example: `git tag -a v1.0.1 -m "Release v1.0.1"`
- **GitHub Actions Workflow:** The workflow triggers on tag push events. It uses `docker/metadata-action` to generate Docker tags from the repository metadata, resulting in tags for `latest`, `major`, and `major.minor`.
  - **Using** semantic versioning is especially useful to have backward compatibility and to help users and developers better understand their version control.
**Docker Hub Repository:** [https://hub.docker.com/r/ickyramer/project4-5/tags](https://hub.docker.com/r/ickyramer/project4-5/tags)

## Part 2 - Deployment

### Deployment Setup

- **Docker Installation:** Detailed commands for Docker installation on an AWS EC2 instance.
- **Container Management Script:** [`updateContainer.sh`](https://github.com/WSU-kduncan/s24cicd-IckyWuv/blob/main/deployment/updateContainer.sh) manages Docker containers to ensure the server runs the latest version of the application.
  - **Location:** `/home/ec2-user/updateContainer.sh` on the EC2 instance.
  - **Operation:** The script manages Docker containers by stopping and removing existing containers before starting a new one with the latest image.
  
### Webhook Configuration

- **Webhook Installation:** Installation steps for `adnanh/webhook`.
- **Webhook Listener Setup:** Setting up the webhook listener with `webhook.json`, defining actions triggered by the webhook.
  - **Webhook Script:** [`webhook.json`](https://github.com/WSU-kduncan/s24cicd-IckyWuv/blob/main/deployment/webhook.json) details the webhook action, executing [`updateContainer.sh`](https://github.com/WSU-kduncan/s24cicd-IckyWuv/blob/main/deployment/updateContainer.sh) upon receiving a POST request.

### Automated Deployment

- **GitHub/Docker Hub Configuration:** Configuring a webhook in Docker Hub to notify the EC2 instance via a POST request when a new image is pushed.
- **Service Reliability:** Creating a service file for the webhook listener ensures it starts automatically. Instructions for service management are provided.

## Part 3 - Diagramming

### Deployment Diagram

![Project Diagram](https://github.com/WSU-kduncan/s24cicd-IckyWuv/blob/main/Diagrams/Project%205.png?raw=true "Project Overview Diagram")

**Tools Used for Diagramming:** Lucid Charts is what I used to make the aforementioned diagram.

## Submission Proof

### CI/CD Workflow Evidence

Demonstration of the CI/CD pipeline, including:
- [Watch the deployment proof of flow video here](https://youtu.be/KYr03Vocfa4)

- ![DockerHub](https://github.com/WSU-kduncan/s24cicd-IckyWuv/blob/main/Proof%20of%20Flow/dockerhub.png?raw=true)
- ![GithubActions](https://github.com/WSU-kduncan/s24cicd-IckyWuv/blob/main/Proof%20of%20Flow/githubActions.png?raw=true)
- ![Webhook](https://github.com/WSU-kduncan/s24cicd-IckyWuv/blob/main/Proof%20of%20Flow/webhooking.png?raw=true)
- ![WebsiteChanges](https://github.com/WSU-kduncan/s24cicd-IckyWuv/blob/main/Proof%20of%20Flow/website%20changes.png?raw=true)
