
# Data Science Web Application Tutorial

This repository is meant to demonstrate the use of Flask and Angular to build a simplevweb application which can be used for POCs.


## Build images and run containers with docker-compose

After cloning the repository go inside the project folder:

`cd ML-as-a-service`

Run `docker-compose up` which will start a Flask web application for the backend API (default port `8081`) and an Angular frontend served through a webpack development web server (default port `4200`).


## Access your app

In your browser navigate to: `http://localhost:4200` (or whatever port you defined for the frontend in `docker-compose.yml`).

For testing your backend API I recommend using [Postman](https://www.getpostman.com/).
  

## Working __without__ docker 

I highly recommend the use of docker and docker-compose as it is far simpler to get started than to run all of the following manually.


### Backend development

Navigate inside the backend directory: `cd mlbackend`

Install pip dependencies: `pip install -r requirements.txt`

Run `python app.py` in backend root (will watch files and restart server on port `8081` on change).

### Frontend development

Navigate inside the frontend directory: `cd mlfrontend`

Assure you have [Nodejs](https://nodejs.org/en/), npm and [angular-cli](https://cli.angular.io/) installed.

Install npm dependencies: `npm install` 

Run `npm start` in mlfrontend root (will watch files and restart dev-server on port `4200` on change).
All calls made to `/api` will be proxied to mlbackend server (default port for backend `8081`), this can be changed in `proxy.conf.json`.
