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
    // when back from server update display
  }); // end addSongButton on click
});
