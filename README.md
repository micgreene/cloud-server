# Lab 16 - AWS: Cloud Servers

Codefellows 401 JavaScript

## Deploy a Node.js server to AWS EC2

**Overview**
- Deploy a simple Node.js server to EC2, using Elastic Beanstalk

- Choose a server you’ve built previously
  - A simple API or Web Server
  - The server should not require a database
  - Check in your server to GitHub

- Task 1:
  - Create a new environment, using Elastic Beanstalk from the AWS Control Panel (GUI)
  - Manually deploy your application to this environment by uploading a .zip file

-Task 2:
  - Using the same server, create a new environment using Elastic Beanstalk from your terminal
  - Manually deploy your application to this environment by using eb deploy

- Task 3:
  - Automatically deploy your app to either (or both) environments on check-ins to your main branch using a github action

### Authors

- Mike Greene

### Links and Resources

- local server: http://localhost:3000/
- elastic beanstalk app: http://cloud-server-dev.us-west-2.elasticbeanstalk.com/

### Setup

1. Assign the server.js a host server route
2. Assign a 'username' in client.js and ensure the host being connected to matches the route provided to server.js


#### `.env` requirements (where applicable)

- N/A

#### How to initialize/run your application
 
1. npm start to begin local server
2. use /data and a post to send an object and check for changes at the '/' route
3. run eb deploy in the terminal to spin up a new eb server and add changes
4. Ensure to ACP after each change to index.js and the changes will automatically be deployed via the elastic beanstalk workflow in github actions
