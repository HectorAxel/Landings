$(".close").click(function(e) {
  e.preventDefault();
  $(".popup, .contain-popup,.contain-close .close").css("display", "none");  
  $("html").css("overflow", "inherit");
  $('#player').attr('src', $('iframe').attr('src'));
});



$(".historys > .info").click(function(e) {
  e.preventDefault();
  $(".popup, .one").css("display", "flex");
  $("html").css("overflow", "hidden");
  $(".historys > .infos .mini-popup").removeClass("visible");
});
$(".historys > .gallery").click(function(e) {
  e.preventDefault();
  $(".popup, .two").css("display", "block");
  $("html").css("overflow", "hidden");
  $(".historys > .infos .mini-popup").removeClass("visible");
});
$(".historys > .interview").click(function(e) {
  e.preventDefault();
  $(".popup, .three").css("display", "flex");
  $("html").css("overflow", "hidden");
  $(".historys > .infos .mini-popup").removeClass("visible");
});

$(".historys > .video").click(function(e) {
  e.preventDefault();
  $(".popup, .four").css("display", "block");
  $('#player').css("display", "block");
  $("html").css("overflow", "hidden");
  $(".historys > .infos .mini-popup").removeClass("visible");
});


$(".historys > .infos").click(function(e) {
  $(".historys > .infos .mini-popup").toggleClass("visible");
});


