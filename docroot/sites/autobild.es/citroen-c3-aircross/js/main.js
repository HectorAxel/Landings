$( ".play" ).click(function(e) {
  e.preventDefault();
  var ref = "https://www.youtube.com/embed/JEmeQ2m_iZA"
  $( ".modal-vi iframe" ).attr('src',ref);
  $("body").addClass('modal-visible');
});

$( ".gallery" ).click(function(e) {
  e.preventDefault();
  $("body").addClass('modal-visible-gal');

});

$( ".close" ).click(function(e) {
  e.preventDefault();
  $("body").removeClass('modal-visible');
  $("body").removeClass('modal-visible-gal');
  $( ".modal-vi iframe" ).attr('src','');

});
