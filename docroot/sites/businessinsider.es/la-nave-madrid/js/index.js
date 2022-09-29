$(".box.orange").click(function () {
  $(".group-photos .orange").addClass("visible");
  $(".group-photos .yellow").removeClass("visible");
  $(".group-photos .green").removeClass("visible");
  console.log("hola");
});
$(".box.yellow").click(function () {
  $(".group-photos .yellow").addClass("visible");
  $(".group-photos .green").removeClass("visible");
  $(".group-photos .orange").removeClass("visible");
});
$(".box.green").click(function () {
  $(".group-photos .green").addClass("visible");
  $(".group-photos .yellow").removeClass("visible");
  $(".group-photos .orange").removeClass("visible");
});
