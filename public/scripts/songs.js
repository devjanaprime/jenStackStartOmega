$( document ).ready( function(){
  $( '#addSongButton' ).on( 'click', function(){
    console.log( 'in addSongButton on click' );
    // get user input
    // create an object to send to server
    var objectToSend = {
      song: $( '#songIn' ).val(),
      artist: $( '#artistIn' ).val()
    }; // end objectToSend
    console.log( 'sending:', objectToSend );
    // use AJAX to send Object to server
    $.ajax({
      type: 'POST',
      url: '/newSong',
      data: objectToSend,
      success: function( response ){
        console.log( 'back from post:', response );
        // when back from server update display
        getSongs();
      } // end success
    }); //end ajax
  }); // end addSongButton on click
  // Initialize
  getSongs();
});

var getSongs = function(){
  // ajax call to get songs
  $.ajax({
    type: 'GET',
    url: '/allSongs',
    success: function( response ){
      console.log( 'back from server with:', response );
      $( '#outputDiv' ).empty();
      for (var i = 0; i < response.allSongs.length; i++) {
        $( '#outputDiv' ).append( '<p>' + response.allSongs[i].song + ' by ' + response.allSongs[i].artist + '</p>' );
      }
    }
  }); //end object
}; // end getSongs
