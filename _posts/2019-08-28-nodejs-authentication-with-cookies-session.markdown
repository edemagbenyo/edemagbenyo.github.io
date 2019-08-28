---
layout: post
title:  "NodeJs & Authentication with Cookies and Session (Part 2)"
date:   2019-08-29 04:48:14 +0000
categories: nodejs authentication cookies session
---

## Introduction


In our previous article in this series, we look at how we could implement authentication using HTTP Basic Auth. It was quite a simple process. Resources that request authentication forced the user to enter their username and password before accessing them, each time they try to.
Though this is an excellent way to protected information, we could use another mechanism that would remember user credentials. This will prevent them from repeatedly entering their credentials. In this post, we will look at how we could use cookies and sessions to persist user's information on the browser and force the server to use them for subsequent requests.

## About Cookies and Session

An HTTP cookie (web cookie, browser cookie) is a small piece of data that is sent from the web server and saved on the browser, and is automatically included in a request that is sent to a specific server. Future request to the server will include the cookie in the header.
A cookie can contain an expiration time after which the cookie will no longer be valid. You can read more about cookie [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies) 

In this post, We will be using the express `cookie-parser` to set and retrieve cookies in the browser. You can read more on how express `cookie-parser` works [here](https://expressjs.com/en/resources/middleware/cookie-parser.html)

##Setting up the development stage
First off we will install the `cookie-parser` node package, which will be used to manage cookies on our express server. We do so by running the following command from the terminal(Make sure the terminal is opened in your working folder ). Since this a continuation of our previous post, we work from the same directory.  We will run ` $ npm install cookie-parser --save` to install our package.

### Authentication with cookie parser
After installing `cookie-parser`, we will include it as a middleware with the following line of code.

```javascript
const cookierParser = require('cookie-parser')

...

app.use(cookierParser('abcdef-12345'))

```
We passed in a string to the `cookieParser` method, because we want our cookie to be signed. The string passed is used the secret in signing a cookie. Once the server has set cookies in the browser, the cookies information will be contained in the `signedCookies` attribute of each subsequent request.
Our auth.js file now looks like this.

```javascript
function auth(req, res, next) {
  if (!req.signedCookies.user) {
    var authHeader = req.headers.authorization;
    if (!authHeader) {
      var err = new Error("You are not authenticated");

      res.setHeader("WWW-Authenticate", "Basic");
      err.status = 401;
      next(err);
    }

    var auth = new Buffer.from(authHeader.split(" ")[1], "base64")
      .toString()
      .split(":");
    var username = auth[0];
    var password = auth[1];

    if (username == "admin" && password == "p@ssword") {
        res.cookie('user','admin',{
            signed:true,

        });
      next();
    } else {
      var err = new Error("You are not authenticated");

      res.setHeader("WWW-Authenticate", "Basic");
      err.status = 401;
      next(err);
    }
  }else{
      if(req.signedCookies.user == 'admin'){
          next();
      }else{
        var err = new Error("You are not authenticated");
        err.status = 401;
        next(err);
      }
  }
}

module.exports = auth;

```

In the snippet of code above, we are checking if the `signedCookies` attribute of the request has a `user` attribute. The user is forced to provide a username and a password using HTTP Basic that we implemented in our previous post; otherwise, the user is granted access to the resource.

We could test our cookie-parser implementation by starting the server by executing the following command from the terminal `$ npm run start`. Any attempt to visit `localhost:3001/secret` would prompt the user to enter its credentials. When the credentials match the required ones, the user is taken to the secret page. One thing we will notice here is that a cookie has been set in the browser. Subsequent access to the /secret page will be granted without a prompt to enter user credentials.

### Authentication with session

Though cookie provides a way to retain user information on the browser and include it in any request, they have some limitations. One of them is their inability to hold a large amount of data.  We use cookies together with a session to track user information on the server-side. The cookie holds the session id, and whenever a request is made to the server, the server retrieves the session id and use it to get the user information on the server. By default, the session information is stored in memory and get wiped out whenever the server is restarted. To get around that, we use file storage or permanent database technology. Express makes use of the `express-session`  node package to manage the session and `session-file-store` to store session data in a session file. You can read more on `express-session` [here](https://expressjs.com/en/resources/middleware/session.html) and `session-file-store` [here](https://www.npmjs.com/package/session-file-store).


Before we set the ball rolling, we will continue from our previous codes which could be found [here](https://github.com/edemagbenyo/nodebasicauth). Fork the project and proceed to install the required packages.


In order for us to make use of `express-session` and `session-file-store`, we include them in the index.js file.
```javascript
...
// const cookierParser = require('cookie-parser')
const session = require('express-session')
const FileStore = require('session-file-store')(session)

...

app.use(session({
    name:'session-id',
    secret:'123456xxx',
    saveUninitialized:false,
    resave:false,
    store:new FileStore()
}))

...
```
In the snippet above, we initialize the session and made it use session-file-store are the mechanism to store session data. This is all we need to work with session. In our auth.js file, we replace the use of cookies with session. This will give us 
```javascript
...
  if (!req.session.user) {

...

if (username == "admin" && password == "p@ssword") {
        req.session.user = 'admin'
      next();
    } else {
      var err = new Error("You are not authenticated");

      res.setHeader("WWW-Authenticate", "Basic");
      err.status = 401;
      next(err);
    }
}else{
      if(req.session.user == 'admin'){
          next();
      }else{
        var err = new Error("You are not authenticated");
        err.status = 401;
        next(err);
      }
  }

```

Following these changes, restart the server and go to the `locahost:3001/secret`. You will be prompted to provide your credentials. Once that is done, you will notice a folder will be created in your working folder with the name `sessions`. This folder will contain the session data and help you access the page as long as the credentials are valid.

## Conclusion
In this post, we implemented a mechanism that will first retain users credentials on the browser using cookies, then we looked at how we could let the server remember the user information using session. This is a good way that prevents the user to keep entering the same credentials every time they try to access a protected resource. In the next post, We will focus on user registration, login using session.

Reference
[MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)

Thanks for reading. Kindly put your thoughts in the comment section. This post is also available on [dev.to](https://dev.to/edemagbenyo/nodejs-authentication-with-cookies-and-session-part-2-2752)

