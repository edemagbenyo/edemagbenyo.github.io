---
layout: post
title:  "NodeJs & Authentication  with Http Basic Access (Part 1)"
date:   2019-07-29 08:26:14 +0000
categories: nodejs, authentication, http
---

## Introduction

Every developer at any point of his development process is faced with the unescapable, which is to implement an authentication feature for his application. This task, though has been made easier for us with the abundance of third party applications, dependencies and in-built authentication features in most frameworks, we easily forget to take a look at how the whole authentication process works and looks like. In this series of posts we will go over the various authentication possibilities available for us in NodeJS. We will first start with HTTP Basic Auth, then move to use Cookies, Session, JWT and passport to implement the same authentication. Though all accomplish the same goal, one is much more secure than the other. While treating each of them, we will look at the pros and cons of using each method.

In this post, we will look at how to implement authentication using the most basic authentication tool available for us in the browser which is the HTTP Basic Access.

## About HTTP Basic Authentication

HTTP Basic Authentication is a mechanism in which the server challenges anyone requesting for information and get a response in the form of a username and password. The information the server receives is encoded with base-64 and passed into the Authorization header.

When the client makes a request to a resource on the server that required authorization, the server sends a response with a `401` status code accompanied with a `WWW-Authenticate Basic` header. Most browsers handle this response by requesting a username and a password from the user.
When the web client obtains the username and password, it sends a response back to the server with a Authorization header in the for `Authorization : Basic username:password`.
However as i mentioned earlier, the username and the password provided by the client is only encrypted with base-64. This approach of authenticating users is not recommended, since information exchanged between both parties could be intercepted when the connection between the two is not secured. The HTTP Basic authentication is only secure when the connection between the client and the server is secure.

For more detailed information on the HTTP Basic Authentication see [RFC 2617, HTTP Authentication: Basic and Digest Access Authentication](http://www.ietf.org/rfc/rfc2617.txt)

Now that we have had an introduction on how basic authentication works  let's implement it in NodeJs. 

## Setting up the development stage

Before we go ahead and write any code, we will first install all the dependencies for our application. The first dependency to install is obviously expressjs, then we will add morgan.

A quick note about morgan and body-parser; morgan is a HTTP request logger middleware for nodejs which you can read more about [here](https://github.com/expressjs/morgan).

We then install all the dependencies in one line with this ` $ npm install express morgan body-parser --save` .

## Bootstrap Server

After installing all the dependencies, let's add a new file `index.js` in our working folder. This is where we will run the show.
First let's bootstrap the server. We do this with the following lines of code.

```javascript

const http = require('http');
const express = require('express');
const morgan = require('morgan');
const app = express();


app.use(morgan('dev'));


const server = http.createServer(app);

server.listen(3001,'localhost',()=>{
    console.log("Server is live at localhost:3001");
});
```

Save the file and with your terminal, make sure you are in the working folder run `$ node index`. You should see `Server is live at localhost:3001` in your terminal. This is a sign that the server is up and running  but we do not have any route yet. So that is what we will do next.

```javascript
...

app.use(morgan('dev'));

app.get('/',(req,res)=>{
    res.statusCode=200;
    res.end("Welcome to your express app!")
})

const server = http.createServer(app);

...

```
The code above adds a default route to our application, which display a message when we navigates to it. Stop the server in your terminal and start it again. This time around we should be able to navigate to our localhost at the port 3001 in our web browser `http://localhost:3001` and see the message `Welcome to your express app`.
 Let's add another route, where we will put a secret code for only members who are authenticated. The route of our secret code will be `http://localhost:3001/secret`

```javascript
...

app.use(morgan('dev'));

 ...

app.get('/secret',(req,res)=>{
    res.statusCode=200;
    res.end("******")
});
 ...

const server = http.createServer(app);

...

```

Since this is a secret information we do not want everyone to access to it, but only users who can authenticate themselves. 
We will go ahead and implement our authentication in the next section.

## Add HTTP Basic Access Authentication

Adding the authentication to a route is quite simple. We add it to as a middleware, which is then checked before proceeding to the route.

We add middleware in express with the `use()` method. Hence any route that resides after the call to the `use()` method is only access if the request passes the checks in the middleware.

To add our middleware, we will create a `auth.js` file in our working directory where we will implement our authentication.

Add the following code to the `auth.js` file.

```javascript
function auth (req, res, next){
    var authHeader = req.headers.authorization;
    if(!authHeader){
        var err = new Error('You are not authenticated')

        res.setHeader('WWW-Authenticate','Basic');
        err.status = 401
        next(err)
    }

    var auth = new Buffer(authHeader.split(' ')[1], 'base64').toString().split(':')
    var username = auth[0]
    var password = auth[1]

    if(username == 'edemone' && password =='secret'){
        next();
    }else{
        var err = new Error('You are not authenticated')

        res.setHeader('WWW-Authenticate','Basic');
        err.status = 401
        next(err)
    }

}

module.exports = auth;

```

The portion of code above first checks for the Authorization header, and responds with a 401 status code and a WWW-Authenticate Basic header when the request coming from the client has no Authorizatin header. 
We however continue to check the Authorization header in case we have one, to see if it contains a username and password and check it against the expected username and password. In this case we are using a hardcoded username and password, but we could have implement a check against information in a database.
When the check is OK the user is granted access, otherwise, we throw an error accompanied with the WWW-Authentication Basic header and a 401 status code.

There is now the need to attach our authentication check to the `/secret` route. We do this in the `index.js` file.

```javascript
...
const morgan = require('morgan');
const auth = require('./auth');

...

app.use(auth)
app.get('/secret',(req,res)=>{
    res.statusCode=200;
    res.end("******")
});

...

``` 

Adding the `app.use(auth)` before the `/secret` route ensures that no access is granted unless the user passes the above middleware.

After restarting our server, when we try to access `http://localhost/secret` we will be presented with a prompt in the browser requesting for the user to provide a username and a password. When the user enters a username and password that match the expected, the user is sent to the to the resource requested.

## Conclusion

In this first post of a series on Authentication in NodeJS, we looked at using HTTP Basic Authentication to check for users who try to access protected resource on the server. Information sent from the web client is encoded with Base-64. Though using HTTP Basic Authentication is not recommended, because information exchanged between the client and the server could be intercepted. In our next post we will look at how to implement the same authentication using cookies and sessions.

Thanks for reading. Kindly put your thoughts in the comment section. This post is also available on [dev.to](https://dev.to/edemagbenyo)

