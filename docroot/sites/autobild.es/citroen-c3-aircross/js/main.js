$( ".play" ).click(function(e) {
  e.preventDefault();
  var ref = $(this).attr('src');
  $( ".modal-vi iframe" ).attr('src',ref);
  $("body").addClass('modal-visible');
  console.log("video");
});

$( ".gallery" ).click(function(e) {
  e.preventDefault();
  $("body").addClass('modal-visible-gal');
  console.log("gallery");

});

$( ".close" ).click(function(e) {
  e.preventDefault();
  $("body").removeClass('modal-visible');
  $("body").removeClass('modal-visible-gal');
  $( ".modal-vi iframe" ).attr('src','');
  console.log("cierro");

});
