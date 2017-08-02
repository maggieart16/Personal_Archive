
$(window).ready(function(){ 

	$( document ).on( "mousemove", function( event ) {
		var browserHeight = $(window).height();
  		var mouseYPosition = event.pageY;
  		var mousePercentToBottom = mouseYPosition/browserHeight * 100;
  		console.log(mousePercentToBottom);

  		$('.printing-press').css("transform", "translateY(" + mousePercentToBottom + "vh)");
	});

  
});


$(document).ready(function() {
  
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 1) {
      $('.arrow').addClass('fade');
    } else{
      $('.arrow').removeClass('fade');
    }
  })
});
