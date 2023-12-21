# Weathery - An AnnieCannons Project

Weathery is a project for students at AnnieCannons.. The finished app allows users to search for locations and get the matching weather forecasts.

This project brings together all the skills needed for the Advanced Modules, so that staff and student alike can know the student is ready to proceed with confidence, or know with confidence what skills gaps need addressing.

## Goal

The purpose of this assignment is to bring together everything you have learned so far in 'Intro to Programming' into one project.

## Learning Objectives

To complete this project, students will need to demonstrate skills in:

- manipulating a user interface with the JS DOM API
- making API calls with `fetch`
- laying out a user interface with CSS Grid and CSS Flexbox

## Rubric

#### Functionality

The app meets all of the following user stories:

- The user can enter a city name in an input box and press a submit button to see the following information for the searched city:
  - the name of the city
  - the country for the city
  - the current temperature
  - the high temperature
  - the low temperature
  - the chance of precipitation
  - the high, low, and chance of precipitation for each of the following 3 days
- When the user searches, _one_ of the following is displayed as well:
  - The app will display "It's Hot Today!" if it is above 75 degrees.
  - The app will display "It's Moderate Today!" if it is between 45 - 74 degrees.
  - The app will display "It's Cold Today!" if it is below 45 degrees.
- When the user searches, they see which day out of the next three days will be hottest.

Please see [our wireframe](https://www.figma.com/file/9C3tbvQrT2EmKElg6ySJEF/Weathery-Website?type=design&node-id=0-1&mode=design) to see a visual depiction of these user stories. 

###### Functionality Stretch Goals

These are **_not_** a requirement, but are given so that you have a way to push yourself and practice more should you want to do so.

- Add a background image or emojis to represent the current weather.
- Add a drop-down for the user to choose Celsius or Fahrenheit temperatures, updating the display to match.
- When the user submits a search, that search and all previous searches are displayed under "Previous Searches." When the user clicks a previous search, that search is run again.

#### Code Quality

The code should:

- Use vanilla JS DOM manipulation and no other UI framework.
- Use `fetch` for an API call to the Weather API.
- Use CSS Grid to lay out the overall interface.
- Use CSS Flexbox to lay out at least one individual section.

#### User Interface Design

The app should:

- Be responsive to different screen sizes.
- Have an input box for users to type their searches in with a submit button.
- Have a design that follows [our wireframe](https://www.figma.com/file/9C3tbvQrT2EmKElg6ySJEF/Weathery-Website?type=design&node-id=0-1&mode=design).

## A Note On Using The API

Here is the link to sign up for the API service. This is free, but you will need to sign up to get an API Key: https://www.weatherapi.com/signup.aspx

Here is the documentation for the API: https://www.weatherapi.com/docs/

Here is a sample API call: `http://api.weatherapi.com/v1/current.json?key=<YOUR_API_KEY>&q=London`

## Getting Started

1. Fork this repository.
2. Clone your forked repository.
3. Create an HTML file named `index.html`.
4. Link your CSS file using a `link` tag in your HTML file.
5. Link your JavaScript file using a `script` tag in your HTML file.

## Suggested Tools

We suggest using Visual Studio Code as your editor. You can download it here: https://code.visualstudio.com/download

We also suggest using Visual Studio Code's Live Server extension to render your project in the browser. You can download it here: https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer

## Submitting Your Assignment

To submit your work, you will submit a Pull Request on GitHub from your fork to the original repo. If you're unsure how to do so, you can refer to [our guide to submitting assignments via Pull Request](https://github.com/AnnieCannons/intro-to-programming-curriculum/blob/main/git/resources/github-pull-request-guide.md)


# SQL Node Project

### Introduction

In this tutorial, we’ll learn how to build a REST API using PostgreSQL as our database and Node.js (JavaScript) as our programming language.

### Learning Objectives

Students should get **hands-on experience** with:

- Understanding REST Principles 
- HTTP Methods and CRUD Operations
- Connecting to a SQL database
- Building a fully functional backend system for user interactions

### Creating the Database

Follow the below steps and you'll be ready to get going on the codealong!

1. We will be using Render to create a database that will be hosted on a server. Render is a cloud computing platform that allows you to deploy your applications to the web. You can go to https://dashboard.render.com/billing#plan to sign up. You can connect to your Github or use your AC email.
2. Click on New Postgres Database. Add a name (sql_postgres_practice), select Free, and click Create Database. ** Note, these databases do expire. This is just for practice purposes.
3. Now, we have an empty database! Scroll to the Connections section. 


### Connecting to the Database
4. Open pgAdmin. Right click on Servers (or Server Groups) and click Register Server
5. We will now need to enter the information to connect to our database server. Under General, for the name of the server, use sql_postgres_practice. 
6. Switch to the Connection tab. For the user, enter sql_postgres_practice_user. This should be listed as the Username in the Connections section in Render. In Render, copy the password and add that to pgAdmin. Also, select the "Save Password" button. 
7. For the hostname/address, select the External Database URL. You will need to remove the first part of the URL as well as the path at the end. For example, if the copied URL from Render looks like postgres://sql_postgres_practice_user:HMoP9Guq0Y53ieEeccuDj453ybRNc4w7@dpg-clnlpe4g7mts73a6t65g-a.oregon-postgres.render.com/sql_postgres_practice. You will only use what is after the @ sign, and remove what is after the /. Your final URL should look like dpg-clnlpe4g7mts73a6t65g-a.oregon-postgres.render.com 
8. Enter the URL into the hostname/address and click Save. You should now see your Server!
9. Click on the Server, then Databases. Then click on the sql_postgres_practice database. You will then select Schemas, public, and then Tables. 
10. We have successful created a database that is running on a server, AND we have connected to that database securely using pgAdmin!

### Adding Data

 Let’s add the programming_languages table. First, right click on the Tables section in your DB in pgAdmin, and then select Query Tool. 

``` sql

CREATE TABLE programming_languages
(
  id            SERIAL NOT NULL,
  name          VARCHAR(255) NOT NULL ,
  released_year INT NOT NULL ,
  githut_rank   INT NULL ,
  pypl_rank     INT NULL ,
  tiobe_rank    INT NULL ,
  created_at    TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ,
  updated_at    TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ,
  PRIMARY KEY (id)
)

```

4. Click the Play button to run the query.
5. You should be able to right click on the programming_languages table and select View All Data to see all of your columns!
6. Next, we’ll add 16 popular programming languages to our programming_languages table. Right click on the programming_languages table and select Query tool to run the following:

``` sql

INSERT INTO programming_languages(id,name,released_year,githut_rank,pypl_rank,tiobe_rank) 
VALUES 
(1,'JavaScript',1995,1,3,7),
(2,'Python',1991,2,1,3),
(3,'Java',1995,3,2,2),
(4,'TypeScript',2012,7,10,42),
(5,'C#',2000,9,4,5),
(6,'PHP',1995,8,6,8),
(7,'C++',1985,5,5,4),
(8,'C',1972,10,5,1),
(9,'Ruby',1995,6,15,15),
(10,'R',1993,33,7,9),
(11,'Objective-C',1984,18,8,18),
(12,'Swift',2015,16,9,13),
(13,'Kotlin',2011,15,12,40),
(14,'Go',2009,4,13,14),
(15,'Rust',2010,14,16,26),
(16,'Scala',2004,11,17,34);

```

7. You should receive a message like “16 rows inserted.” Then, the data from our three sources is collected and added to the table in bulk by the INSERT statement, creating 16 rows, one for each programming language. We’ll return to this when we fetch data for the GET API endpoint. If we click on the programming_languages table, view all rows, we’ll see the rows that we just added. Note: You can learn more about language rankings: githut_rank(https://madnight.github.io/githut/#/pull_requests/2023/3), pypl_rank(https://pypl.github.io/), tiobe_rank (https://www.tiobe.com/tiobe-index/).



### Creating the Web Server and API

1. Open your project's code repository.
2. Run `npm init` to initialize the package.json.
3. Run the following command, `npm install express` to add Express.
4. Create the following file structure
![Project Structure](./images/projectStructureImage.png) 
5. Note: Inside the .gitignore file, you should add /node_modules. This will keep you from pushing the node modules to your github ever time. You can learn more here: https://www.freecodecamp.org/news/gitignore-what-is-it-and-how-to-add-to-repo/




### Linking the DB and the API
1. We will need to link our Node.js server with our database to create our API. We’ll use the node-postgres package to interact with the postgres database. More here: https://node-postgres.com/
2. We need to install the node-postgres module using the command below at the project root directory: `npm install pg`
3. Next, we’ll create the config.js file on the root of the project with the following contents:

``` javascript

const config = {
  user: 'sql_postgres_practice_user',
  host: 'dpg-cm0879ocmk4c7380k5a0-a.oregon-postgres.render.com',
  database: 'sql_postgres_practice',
  password: '8CVahIR45JMRcjguQBa8ZHDeD9prdnea',
  port: 5432,
  ssl: true
}
module.exports = config;

```

4. The `module.exports` is how you create your own module in Node! This gives you the opportunity to import this object into different files in your program. It is a reusable piece of code that you can use where you need. 
5. Add the `config.js` file to your `.gitignore` file. We don't want a file with passwords to be added to Github!



### Building the API

Now, let's write the code that starts our application. In the index.js file, add the following code:

``` javascript
const express = require('express'); //external module for using express

const app = express();
const port = 3000;

app.use(express.json());

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

```

1. This code should look familiar. We are adding express and building our application. Now we need to add the code that will allow us to connect to our database. 

``` javascript
const express = require('express'); //external module for using express
const Client = require('pg') //external module for using postgres with node
const config = require('./config.js'); // internal module for connecting to our config file

const app = express();
const port = 3000;

app.use(express.json());

const client = new Client(config); //creating our database Client with our config values
 
await client.connect() //connecting to our database


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

await client.end() //ending the connection to our database

```

2. This code uses a Client, which is an object that allows us to connect with our database. We have to enter the config object to securely connect to the proper database, and then we need to establish a connection.

3. Now, we need to build our route and helper function to get our data. We are going to create a GET request to get all of the programming languages.


``` javascript
const express = require('express'); //external module for using express
const { Client } = require('pg') //external module for using postgres with node
const config = require('./config.js'); // internal module for connecting to our config file

const app = express();
const port = 3000;

app.use(express.json());

const client = new Client(config); //creating our database Client with our config values

//NEW CODE
const getLanguages = async () => {
  await client.connect() //connecting to our database
  const result = await client.query('SELECT * FROM programming_languages');
  console.log(result.rows);
  await client.end() //ending the connection to our database
  return result.rows;
}

app.get('/get-languages', async (req, res) => {
  const languages = await getLanguages();
  res.send(languages);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
```

### Testing

Now we get to test our application with Postman! Let's open Postman and enter a GET request to `localhost:3000/get-languages`. We should see our list of languages!

### Getting a specific language in our database

``` javascript
const express = require('express'); //external module for using express
const { Client } = require('pg') //external module for using postgres with node
const config = require('./config.js'); // internal module for connecting to our config file

const app = express();
const port = 3000;

app.use(express.json());

const client = new Client(config); //creating our database Client with our config values

const getLanguages = async () => {
  await client.connect() //connecting to our database
  const result = await client.query('SELECT * FROM programming_languages');
  console.log(result.rows);
  await client.end() //ending the connection to our database
  return result.rows;
}

app.get('/get-languages', async (req, res) => {
  const languages = await getLanguages();
  res.send(languages);
});


//NEW CODE
const getLanguage = async (id) => {
  await client.connect() //connecting to our database
  const result = await client.query(`SELECT * FROM programming_languages WHERE id = ${id}`)
  console.log(result.rows);
  await client.end() //ending the connection to our database
  return result.rows;
}

app.get('/get-language/:id', async (req, res) => {
  const language = await getLanguage(req.params.id);
  res.send(language);
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

```

### Testing

Now we get to test our application with Postman! Let's open Postman and enter a GET request to `localhost:3000/get-language/:id`. We should see our list of languages!


cd src
node index.js

### Next Steps
For your lab, you will build on this project by adding a POST for adding a new language and a DELETE for removing a language. 
