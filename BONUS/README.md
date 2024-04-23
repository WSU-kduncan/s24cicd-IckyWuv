# Bonus Project - Load Balanced Dockerized Web Application

## Overview
This project aims to deploy a containerized web application utilizing an EC2 instance behind a load balancer, using an updated CloudFormation template. The template is optimized to install Docker on EC2 instances and run the web application container directly from Docker Hub.

## Bonus Diagram
![Diagram](https://github.com/WSU-kduncan/s24cicd-IckyWuv/blob/main/BONUS/Proof%20Of%20Flow/diagramBonusOne.png?raw=true)
The diagram shows a load balancer distributing traffic to multiple EC2 instances. Each instance runs a Docker container hosting the web application.

## Deployment Process

1. Update the CloudFormation template to include the necessary changes for installing Docker and pulling the web application image from Docker Hub.
2. Use the updated CloudFormation template to deploy the AWS resources.
3. Validate that each EC2 instance is running the Docker container and accessible via the load balancer.

## Steps for Docker Container Deployment

- To deploy the **CloudFormation stack** via the AWS **CloudFormation console** use ![updated CF template](updatedCFTemplateBonusOne.yaml) when prompted for you to *specify template* and *upload a template file*.
  - The template will take care of downloading Docker, adding the *ubuntu* user to the Docker group, pulling the Docker image, running the Docker image, and tending to minor actions in the two instances.
- Now, use `ssh -i <keypair>.pem ubuntu@<IPForInstance1>` and `ssh -i .ssh/<keypair>.pem ubuntu@<IPForInstance2>` to log into each of the instances. 
  - Use `docker ps -a` to view what containers are running.
    - If a container is running use `docker stop <containerName>`.
      - Now use `docker rm <containerName>`.
    - If the container isn't running use `docker restart <containerName>`.
- Now, look towards the AWS console and find **Load balancers**.
- After seeing that the load balancer for two instances is running, then copy and paste the *DNS name* into your web browser.
  - It should look like this for example: `bonuso-LoadB-9Ed1mZOIZqH9-865695272.us-east-1.elb.amazonaws.com`.
  - If there is a *502: Bad Gateway* error, reload the page. It should work after a reload or two.
- Now, after accessing the page, you should be able to see the container running in browser.

## Proof of Flow

![First Instance](https://github.com/WSU-kduncan/s24cicd-IckyWuv/blob/main/BONUS/Proof%20Of%20Flow/InstanceOne.png?raw=true)
![Second Instance](https://github.com/WSU-kduncan/s24cicd-IckyWuv/blob/main/BONUS/Proof%20Of%20Flow/InstanceTwo.png?raw=true)
![Instances](https://github.com/WSU-kduncan/s24cicd-IckyWuv/blob/main/BONUS/Proof%20Of%20Flow/TwoInstances.png?raw=true)
![Load Balancer](https://github.com/WSU-kduncan/s24cicd-IckyWuv/blob/main/BONUS/Proof%20Of%20Flow/LoadBalancer.png?raw=true)
![Load Balancer DNS](https://github.com/WSU-kduncan/s24cicd-IckyWuv/blob/main/BONUS/Proof%20Of%20Flow/LoadBalancerDNSWorking.png?raw=true)
