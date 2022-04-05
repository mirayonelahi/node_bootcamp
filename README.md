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
