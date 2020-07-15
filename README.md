# Express Project Skeleton
<h1 align="center">Welcome to Express Project Skeleton(Hillary Order) 👋</h1>

## Introduction

> This repository is designed to help anyone who is developing using the express framework to have a basic starting point in terms of the project structure.<br>
> The skeleton project is divided into 5 main folders and 1 .js file namely:-
<ul>
<li> <b>app.js</b>:  ( this is the entry point of the project)</li>
<li> <b>views folder</b>:  ( this folder contains the .ejs files)</li>
<li> <b>public folder</b>:  (this folder contains the static files for the project that is the .css, the images, and the scripts)</li>
<li> <b>routes folder</b>:  (this folder contains the route files that will be acting as a bridge between the user requests and the application)</li>
<li> <b>controller folder</b>:  (this folder contains the controller.js file which contains the controller functions that handle the user requests)</li>
<li><b>service folder</b>: ( this folder contains the service.js file which contains the functions that handle all the business logics and database interactions)</li>
</ul>
<br>
>A use case process flow is as follows:<br><br>
A user loads the application and requests for https://localhost:3000/,
the application will take that request and redirect the <b> / </b>  to <b> /apiGet/ </b> which points to the <b>indexGet file  in the routes folder </b>. In the routes folder there is a path that handles all /apiGet/ requests and passes the request to<b> controller.getIndex function in the controller.js file in the controllers folder</b>. Once the request is in the controller folder, there is that <b>getIndex function</b> that handles that request and <b>in turn renders the index.ejs file which is in the views folder</b>.
<br><br>
> Now if the index page was to show maybe some details from the <b>DB</b>, then the <b>function in the controller.js file would pass the request to service.js file in the service folder</b> that will <b>handle the database interaction and return the values</b> to the controller.js file for rendering to the index.ejs file for the user to view.

## Code Samples

> As the use case above here is an example of the steps

>user requests https://localhost:3000/ , the request is handled as below.<br>

<b>app.js</b><br>
//* path to the route files

var GetRouter = require('./routes/indexGet');


//* path to use when user makes a request<


app.use('/apiGet',GetRouter);



//* redirect all / requests to /apiGet

app.get('/', function(req, res) {

  res.redirect('/apiGet/');<br>

});

>the request is redirected to use the path <b>/apiGet</b> which calls the <b>file indexGet in the routes folder</b>

<b>indexGet.js</b><br>
//*calls the getIndex function in the controller file

router.get( '/', controller.getIndex);<br>

>the path calls the <b>getIndex function</b> in the <b>controllers.js file which is in the controller folder</b> this function will not render the index.ejs file which is in the views folder

<b>controller.js</b><br>
//*get index controller<br>

exports.getIndex = async (req, res) => {

    try {<br>
        res.render('index',{});<br>
    } catch (error) {<br>
        throw new Error(error.message);<br>
    }<br>
}

>When talking about business logic, this is where most of the database interaction happens. As you will see in the controller.js file there is a line of code written as <br>

//*call services file

const services  = require('../services/services');

const create  = services;

>This code calls the service file which will contain functions that actualize the business logic. For 
example, if we were handling login functionality. In the controller.js we could have something like<br>

//*Post user login controller

exports.postLogin = async (req, res, next) => {

    try {
       await create.loginuser(req.body);
    } catch(e) {
        throw new Error(e.message);
    }
}

> This code would call the <b>loginuser</b> function in the service file which would be something like below

//*post login users service

exports.loginuser = async (data) => {

    try {
        //* add you sql or mongo db statements here.
    } catch(e) {
        throw new Error(e.message)
    }
}

## Install

```sh
npm install
```

## Usage

```sh
npm start
```

## Author

👤 **Collins H. Munene**

* Website: collinsmunene.github.io/collinshillary.github.io/
* Twitter: [@Hillary Collins](https://twitter.com/HillaryCollns)
* Github: [@Collins Munene](https://github.com/CollinsMunene)
* LinkedIn: [@Collins Munene](https://linkedin.com/in/collins-hillary-munene)

## Show your support

Give a ⭐️ if this project helped you!
