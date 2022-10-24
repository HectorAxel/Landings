$(".intro a")
  .mouseenter(function () {
    $(".volante").css("rotate", "40deg");
    $(this).css("width", "180px");
  })
  .mouseleave(function () {
    $(".volante").css("rotate", "0deg");
    $(this).css("width", "160px");
  });

$(".box a")
  .mouseenter(function () {
    $(this).css("width", "180px");
  })
  .mouseleave(function () {
    $(this).css("width", "160px");
  });
