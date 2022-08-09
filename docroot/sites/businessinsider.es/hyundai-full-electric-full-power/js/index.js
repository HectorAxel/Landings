$(".block-info .plus").click(function (e) {
  e.preventDefault();
  $(".popup").addClass("visible");
  console.log("hola");
});

$(".popup .close").click(function (e) {
  e.preventDefault();
  $(".popup").removeClass("visible");
  console.log("adios");
});
