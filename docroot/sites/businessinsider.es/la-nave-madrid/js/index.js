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

$(document).ready(function () {
  var ancho = $(window).width();
  console.log(ancho);

  $(".scroll-1").click(function () {
    $(".web-desktop").css("right", ancho - 50);
    $(
      ".web-desktop section.yellow p, .web-desktop .group-box, .yellow .bar"
    ).addClass("visible");
  });

  $(".scroll-2").click(function () {
    $(".web-desktop ").css("right", ancho * 2 - 100);
    $(
      ".web-desktop .yellow.final-content section h2, .web-desktop .yellow.final-content section p, .web-desktop .yellow .contain-img"
    ).addClass("visible");

    $(".yellow .bar").addClass("max");

    setTimeout(function () {
      $(".orange .bar").addClass("visible");
    }, 2900);
  });

  $(".scroll-3").click(function () {
    $(".web-desktop").css("right", ancho * 3 - 150);
    $(
      ".web-desktop .orange.final-content section h2, .web-desktop .orange.final-content section p, .web-desktop .orange .contain-img"
    ).addClass("visible");
    $(".orange .bar").addClass("max");
    setTimeout(function () {
      $(".green .bar").addClass("visible");
    }, 2900);
  });

  $(".scroll-4").click(function () {
    $(".web-desktop").css("right", ancho * 4 - 250);
    $(
      ".green .bar, .web-desktop .green.final-content section h2, .web-desktop .green.final-content section p, .web-desktop .green .contain-img"
    ).addClass("visible");
  });

  $(".scroll-pre-1").click(function () {
    $(".web-desktop").css("right", ancho * 3 - 150);
  });
  $(".scroll-pre-2").click(function () {
    $(".web-desktop").css("right", ancho * 2 - 100);
  });
  $(".scroll-pre-3").click(function () {
    $(".web-desktop").css("right", ancho - 50);
  });
  $(".scroll-pre-4").click(function () {
    $(".web-desktop").css("right", 0);
    $(
      ".web-desktop section.yellow p, .web-desktop .group-box, .yellow .bar"
    ).removeClass("visible");
  });
});
