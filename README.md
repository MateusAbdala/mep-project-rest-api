# mep-project-rest-api

Project management API.

## Running it locally

From inside the 'app' directory, install all node dependencies:

`npm install`

Install Nodemon which monitors for any changes in your node.js application and automatically restart the server - perfect for development


`npm install --global nodemon`

Make sure you have a mongo instance up and running on localhost:27017
Usually you can achieve this by running:

`mongod --dbpath /your/path/here`

Still inside the 'app' directory, let's run the api:

`nodemon index.js`

You should get a message like this

`
mepProject-rest-api is running on development environment on port 8080
`

I recommend Restlet for testing:

`https://chrome.google.com/webstore/detail/restlet-client-rest-api-t/aejoelaoggembcahagimdiliamlcdmfm`

Where you just paste localhost:8080 and it should give you a response like this: 

`The API is available on '/api'`

So you can call:

- [GET]  /api/project (To list all projects)
- [GET]  /api/project/projectId (i.e.: /api/project/59ea5b334372f2b4686a7731) (Views an specific project)
- [POST] /api/project (To create a new project sending the attributes on the body)
  - To provide a name for the project you will have to provide it as JSON like this:
  `{
     "name" : "Project 1"
   }`
- [DELETE] /api/project/projectId (i.e.: /api/project/59ea5b334372f2b4686a7731) (Deletes a project)
- [PATCH] /api/project/projectId (i.e.: /api/project/59ea5b334372f2b4686a7731) (Updates a project)
  - To provide a new name for the project you will have to provide it as JSON like this:
  `{
     "name" : "Project 1 - New Name"
   }`

