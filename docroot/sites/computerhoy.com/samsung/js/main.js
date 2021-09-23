$( ".video-button" ).click(function(e) {
  e.preventDefault();
  var ref = $(this).attr('src');
  $( ".video-modal iframe" ).attr('src',ref);
  $("body").addClass('modal');
});
$( ".button-close" ).click(function(e) {
  e.preventDefault();
  $("body").removeClass('modal');
  $( ".video-modal iframe" ).attr('src','');
});
