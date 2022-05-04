# Cab-search-application-system
Cab Search Application System is a platform where drivers can register and update their location. Users can also get available cabs within a 4km range

## Features
- Drivers can register
- Drivers can save locations
- Users can get available cabs within 4km range

### Dev Tools
- Nodejs/ExpressJS
- TypeScript
- Mocha

### Documentation
- [Swagger](https://cab-search-app.herokuapp.com/docs)

### How to setup project on your local machine (Step 1)
#### Pre-requisite
- [Node.js](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com/)
- [Postman](https://www.getpostman.com/downloads/)

#### Installing 
- Clone the repository
- CD into the project folder
- Rename .env.example to .env
##### N.B
- If you like, you can change the DATABASE_URL to your own moongodb connection uri
- Pass in your SENDGRID_API_KEY
- Pass in your SENDGRID_EMAIL_FROM address

- Open your terminal
- Run `npm install` 

#### Run the app
- Run `npm run dev`

#### Run test cases
- Run `npm test`

#### Run the linter
- Run `npm run lint`

### How to setup project on your local machine (Step 2) via docker
#### Pre-requisite
- [Docker](https://www.docker.com/)

#### Installing
- Download the docker image
- Run `docker pull youngprinnce/cabsearchapp:latest`

#### Run the app
- Run `docker run -p 5000:5000 youngprinnce/cabsearchapp`

