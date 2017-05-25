JEN Stack Start
===

Setup server
---

Install Noe/Express:

- Initialize npm: ```npm init```
- Install express for routes: ```npm install express --save```

Get our server up and listening:

- create 'server.js'
- require express
- setup an express app

```
var express = require( 'express' );
var app = express();
```

- tell app to listen on a port

```
// listen
app.listen( 5678, function(){
  console.log( 'server up on 5678' );
});
```

- start up server an make sure it is listening
- in terminal: ```node server.js```

Set up base url route:
```
// base url
app.get( '/', function( req, res ){
  console.log( 'base url hit' );
  res.send( 'I came from the server!!!!' );
}); // end base url
```

- open 'localhost:5678' in browser
- should see "I came from the server!!!!" in browser
- should see "base url hit" in the terminal
