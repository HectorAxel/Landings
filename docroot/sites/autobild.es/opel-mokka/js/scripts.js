$(".close").click(function(e) {
  e.preventDefault();
  $(".popup, .contain-popup, .mini-popup, .contain-close .close").css("display", "none");
  $("html").css("overflow", "inherit");
  console.log("cierro");
  $('#player').attr('src', $('iframe').attr('src'));
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
$(".historys > .interview").click(function(e) {
  e.preventDefault();
  $(".popup, .three").css("display", "flex");
  $("html").css("overflow", "hidden");
});

$(".historys > .video").click(function(e) {
  e.preventDefault();
  $(".popup, .four").css("display", "block");
  $('#player').css("display", "block");
  $("html").css("overflow", "hidden");
});


$(".historys > .infos").click(function(e) {
  console.log("abro");
  e.preventDefault();
  $(".mini-popup").css("display", "flex");
  $(".contain-close .close").css("display", "block");
  $("html").css("overflow", "hidden");
});


