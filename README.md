# My node.js journey

### module

- CommonJS, every file is module (by default)
- Modules - Encapsulated Code (only share minimum)
- if we console.log(module) we will get the module object
- we can import the module by using require()
- we can export the module by using module.exports
- if we import module without assigning it to a variable, we will get the default export
- if immediately invoked function expression (IIFE) is used or the module is imported without assigning it to a variable, the module will be executed immediately
- built in modules in node.js- OS, PATH, FS , HTTP
- OS module - provides a way to interact with the operating system

```js
const os = require("os");

// info about current user
const user = os.userInfo();
console.log(user);

// method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOS);
```

- PATH module - provides a way to interact with the file system
- FS module - provides a way to interact with the file system
- both async and sync methods are available
- HTTP module - provides a way to interact with the HTTP protocol

```js
//just a basic server
const http = require("http");

const server = http.createServer((req, res) => {
  res.write("welcome to our page");
  res.end();
});

server.listen(3000);
```

- req.url - returns the url of the request
- npx is package runner
- why package.lock file?
- force other user use the exact version of the package
- semantically versioning - versioning that is based on the order of changes
- major.minor.patch

# Event loop

- event loop allows node to perform non-blocking i/o operations- despite the fact htat js is single threaded
- by offloading oprations to the
  https://nodejs.dev/learn/the-nodejs-event-loop
  https://www.youtube.com/watch?v=PNa9OMajw9w

  - js read line by line

```js
console.log("first task");
console.time();
setTimeout(() => {
  console.log("second task");
}, 0);
console.timeEnd();
console.log("third task");
```

- in setInterval it will run every given time and it will run forever
- in setTimeout it will run after given time and it will run only once

- always try to setup assynchronous while making server / rest api routes

-
