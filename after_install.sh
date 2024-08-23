#!/bin/bash
# Log in to ECR
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 315819558409.dkr.ecr.us-east-1.amazonaws.com

