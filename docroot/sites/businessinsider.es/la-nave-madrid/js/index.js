$(".box.orange").click(function () {
  $(this).addClass("visible");
  $(".group-photos .orange").addClass("visible");
  $(".group-photos .yellow, .group-photos .green").removeClass("visible");
  $(".box.green, box.yellow").removeClass("visible");
  console.log("hola");
});
$(".box.yellow").click(function () {
  $(this).addClass("visible");
  $(".group-photos .yellow").addClass("visible");
  $(".group-photos .green, .group-photos .orange").removeClass("visible");
  $(".box.orange, .box.green").removeClass("visible");
});
$(".box.green").click(function () {
  $(this).addClass("visible");
  $(".group-photos .green").addClass("visible");
  $(".group-photos .yellow, .group-photos .orange").removeClass("visible");
  $(".box.orange, .box.yellow").removeClass("visible");
});

$(".scroll-1").click(function () {
  $(".web-desktop").css("transform", "translate(-97vw, 0px)");
  $(".web-desktop section.yellow p, .web-desktop .group-box").addClass(
    "visible"
  );
});
$(".scroll-2").click(function () {
  $(".web-desktop").css("transform", "translate(-194vw, 0px)");
});
$(".scroll-3").click(function () {
  $(".web-desktop").css("transform", "translate(-291vw, 0px)");
});
$(".scroll-4").click(function () {
  $(".web-desktop").css("transform", "translate(-385vw, 0px)");
});

$(".scroll-pre-1").click(function () {
  $(".web-desktop").css("transform", "translate(-291vw, 0px)");
});
$(".scroll-pre-2").click(function () {
  $(".web-desktop").css("transform", "translate(-194vw, 0px)");
});
$(".scroll-pre-3").click(function () {
  $(".web-desktop").css("transform", "translate(-97vw, 0px)");
});
$(".scroll-pre-4").click(function () {
  $(".web-desktop").css("transform", "translate(0vw, 0px)");
});
