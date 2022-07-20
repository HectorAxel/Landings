$(".photos").click(function () {
  $(".wrapper-popup").addClass("visible");
  $("body").addClass("visible");
});

$(".close").click(function () {
  $(".wrapper-popup").removeClass("visible");
  $("body").removeClass("visible");
});

$(".select-buttons a").click(function (e) {
  e.preventDefault();
  var el = $(this).attr("data-href");
  $(".select").removeClass("show");
  $("#" + el).addClass("show");
  if (el == "store") {
    $(".selected").removeClass("selected");
    $(".store").addClass("selected");
  } else if (el == "valent") {
    $(".selected").removeClass("selected");
    $(".valent").addClass("selected");
  }
});

window.addEventListener(
  "load",
  () => {
    document.querySelector(".loader").classList.add("invisible");
    setTimeout(() => {
      document.querySelector(".loader").remove();
    }, 3000);
  },
  false
);
