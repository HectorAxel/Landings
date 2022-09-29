$(".box.orange").click(function () {
  $(this).toggleClass("visible");
  $(".group-photos .orange").toggleClass("visible");
  $(
    ".group-photos .yellow, .group-photos .green,.box.green, box.yellow"
  ).removeClass("visible");
});
$(".box.yellow").click(function () {
  $(this).toggleClass("visible");
  $(".group-photos .yellow").toggleClass("visible");
  $(
    ".group-photos .green, .group-photos .orange, .box.orange, .box.green"
  ).removeClass("visible");
});
$(".box.green").click(function () {
  $(this).toggleClass("visible");
  $(".group-photos .green").toggleClass("visible");
  $(
    ".group-photos .yellow, .group-photos .orange, .box.orange, .box.yellow"
  ).removeClass("visible");
});

$(document).ready(function () {
  $(".scroll-1").click(function () {
    var ancho = $(window).width();
    $(".web-desktop").css("right", ancho - 50);
    $(
      ".web-desktop section.yellow p, .web-desktop .group-box, .yellow .bar"
    ).addClass("visible");
    $(window).resize(function () {
      var ancho = $(window).width();
      $(".web-desktop ").css("right", +ancho - 50);
    });
  });

  $(".scroll-2").click(function () {
    var ancho = $(window).width();
    $(".web-desktop ").css("right", ancho * 2 - 100);
    $(
      ".web-desktop .yellow.final-content section h2, .web-desktop .yellow.final-content section p, .web-desktop .yellow .contain-img"
    ).addClass("visible");

    $(".yellow .bar").addClass("max");

    setTimeout(function () {
      $(".orange .bar").addClass("visible");
    }, 2900);
    $(window).resize(function () {
      var ancho = $(window).width();
      $(".web-desktop ").css("right", +ancho * 2 - 100);
    });
  });

  $(".scroll-3").click(function () {
    var ancho = $(window).width();
    $(".web-desktop").css("right", ancho * 3 - 150);

    $(
      ".web-desktop .orange.final-content section h2, .web-desktop .orange.final-content section p, .web-desktop .orange .contain-img"
    ).addClass("visible");

    $(".orange .bar").addClass("max");

    setTimeout(function () {
      $(".green .bar").addClass("visible");
    }, 2900);
    $(window).resize(function () {
      var ancho = $(window).width();
      $(".web-desktop ").css("right", +ancho * 3 - 150);
    });
  });

  $(".scroll-4").click(function () {
    var ancho = $(window).width();
    $(".web-desktop").css("right", ancho * 4 - 250);

    $(".green .bar").addClass("max");

    $(
      ".web-desktop .green.final-content section h2, .web-desktop .green.final-content section p, .web-desktop .green .contain-img"
    ).addClass("visible");
    $(window).resize(function () {
      var ancho = $(window).width();
      $(".web-desktop ").css("right", +ancho * 4 - 250);
    });
  });

  $(".scroll-pre-1").click(function () {
    var ancho = $(window).width();
    $(".web-desktop").css("right", ancho * 3 - 150);
    $(window).resize(function () {
      var ancho = $(window).width();
      $(".web-desktop ").css("right", +ancho * 3 - 150);
    });
  });
  $(".scroll-pre-2").click(function () {
    var ancho = $(window).width();
    $(".web-desktop").css("right", ancho * 2 - 100);
    $(window).resize(function () {
      var ancho = $(window).width();
      $(".web-desktop ").css("right", +ancho * 2 - 100);
    });
  });
  $(".scroll-pre-3").click(function () {
    var ancho = $(window).width();
    $(".web-desktop").css("right", ancho - 50);
    $(window).resize(function () {
      var ancho = $(window).width();
      $(".web-desktop ").css("right", +ancho - 50);
    });
  });
  $(".scroll-pre-4").click(function () {
    var ancho = $(window).width();
    $(".web-desktop").css("right", 0);
    $(window).resize(function () {
      var ancho = $(window).width();
      $(".web-desktop ").css("right", 0);
    });
  });
});
