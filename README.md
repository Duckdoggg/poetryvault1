# COMP3120 Individual Project: Poetry Vault

An application for viewing and submitting poems!

![Image Logo]('./../src/img/PV.png)

## Table of Contents

- [How to Use](#how-to-use)

- [Technologies](#technologies)

- [Setup](#setup)

- [Feature](#features)

- [Server](#server)

- [Componenets](#components)

- [Deployment](#deplopyment)

- [Features currently not working](#functions-not-working)


## How to Use


**A working demo can be found here: https://radiant-dusk-52779.herokuapp.com/**


The home page displays a list of existing poems, where the title, author, and preview(first 10 words of the poem text) is shown.

Users can view the full poem by clicking the title, and go back to the list by clicking "go back".

On the "Add Poem" page, users can submit their own poem by filling out the form. The contents of the poem can be written in MarkDown, upon submitting, the user is redirected back to the main list of poems.


## Technologies

- React 17.0.2
- Node 15.10.0
- Express 4.17.1
- Heroku 

## Setup

Install Node.js

To start the Project, clone the project to VSCode and run the following commands in the VSCode terminal

``` 
#install dependencies
npm install

#install Express
install express --save

#run the application
npm run server
```


## Features

- Ability to view poems
- Ability to submit poems



## Server

The back end is handled by Express, which contains the following endpooints:

- GET /api/poems - returns a list of poem records
  
- GET /api/poems/:id - returns the record for the poem with the given id
  
- POST /api/poems - adds a new poem to the collection, POST body is the poem JSON without 
  the id or votes fields, response includes the new poem id
  


## Components:
### App.js:

- App.js constains the routes to all pages and also the component Home, whcih displays a list of all poems.

### PoemForm.js

- PoemForm.js a a form used to submit Poems, allowing users to ente the Title, Author and Text of the poem.
### AddPoem.js

- AddPoem.js renders the page for submitting poems, it also contains the PoemForm component.

### PoemDetail.js

- PoemDetail.js is the page that displays all properties of a individual poem in MarkDown using ```ReactMarkdown```

### Nav.js

- Navigation bar. 
  


## Deployment

The application is currently deployed on Heroku 

Link: https://radiant-dusk-52779.herokuapp.com/

Deployment Steps:

1. Create Heroku Account


2. [Install Heroku CLI](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
3. Use command  `heroku login` in VSCode terminal  to login in to Heroku CL
   
4. Create a file named Procfile in project root directory and insert the line `web: node server/server.js` in the file, **make sure to commit after creating the file**
   
5. In `server.js`, change `PORT || 3001` to `process.env.PORT || 3001` 


6. Now in the VSCode terminal, type the following command one by one after each has been executed
   ```
   git push heroku master

   heroku ps:scale web=1
   
   heroku open
   ```

If deployment fails or any reason, make sure to try the following solutions

- Check that the Procfile is in the root directory
- Delete `package-lock.json`


## Features currently not working

- Upvoting is currently not connected to the api, therefore it is not saved and the numbers of voted will clear up after refreshing the page.

- Because the current voting system does not work, the poem will not be sorted.