// requires
var express = require( 'express' );
var app = express();

// listen
app.listen( 5678, function(){
  console.log( 'server up on 5678' );
});

// base url
app.get( '/', function( req, res ){
  console.log( 'base url hit' );
  res.send( 'I came from the server!!!!' );
}); // end base url
