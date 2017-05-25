// requires
var express = require( 'express' );
var app = express();
var path = require( 'path' );
var bodyParser = require( 'body-parser' );

// uses
app.use( express.static( 'public' ) );
app.use( bodyParser.urlencoded( { extended: true } ) );

// globals
var songs = [];

// listen
app.listen( 5678, function(){
  console.log( 'server up on 5678' );
});

// base url
app.get( '/', function( req, res ){
  console.log( 'base url hit' );
  // send file at resolved path
  res.sendFile( path.resolve( 'views/index.html' ) );
}); // end base url

app.get( '/allSongs', function( req, res ){
  console.log( 'get /allSongs hit' );
  //create to send
  var responseObject = {
    allSongs: songs
  };
  res.send( responseObject );
}); // end get /songs

app.post( '/newSong', function( req, res ){
  console.log( 'post hit to /newSong:', req.body );
  songs.push( req.body );
  res.send( 'meow' );
});
