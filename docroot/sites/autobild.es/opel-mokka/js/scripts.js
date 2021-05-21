$(".close").click(function(e) {
  e.preventDefault();
  $(".popup, .contain-popup,.contain-close .close").css("display", "none");  
  $("html").css("overflow", "inherit");
  $('#player').attr('src', $('iframe').attr('src'));
  $('.popup').css('background-image','');
});



$(".historys > .info").click(function(e) {
  e.preventDefault();
  $(".popup, .one").css("display", "flex");
  $("html").css("overflow", "hidden");
});
$(".historys > .gallery").click(function(e) {
  e.preventDefault();
  $(".popup, .two").css("display", "block");
  $("html").css("overflow", "hidden");
});
$(".historys > .interview").click(function() {
  $('.popup').css('background-image','url(img/back2.jpg)');
  $(".popup, .three").css("display", "table");
  $("html").css("overflow", "hidden");
});

$(".historys > .video").click(function(e) {
  e.preventDefault();
  $(".popup, .four").css("display", "block");
  $('#player').css("display", "block");
  $("html").css("overflow", "hidden");
});


$(".historys > .infos").click(function(e) {
  $('.popup').css('background-image','url(img/back1.jpg)');
  $(".popup, .five").css("display", "flex");
  $("html").css("overflow", "hidden");
});


