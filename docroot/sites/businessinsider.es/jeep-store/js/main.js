$(".select-buttons a").click(function (e) {
  e.preventDefault();
  var el = $(this).attr("data-href");
  $(".select").removeClass("show");
  $("#" + el).addClass("show");
  if (el == "compass") {
    $(".selected").removeClass("selected");
    $(".compass").addClass("selected");
  } else if (el == "wrangler") {
    $(".selected").removeClass("selected");
    $(".wrangler").addClass("selected");
  } else {
    $(".selected").removeClass("selected");
    $(".renegade").addClass("selected");
  }
});
