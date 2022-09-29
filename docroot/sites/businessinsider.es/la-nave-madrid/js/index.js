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
