$(".flip-action").click(function () {
    $(this).parent().parent().addClass("flip");
  });
  
  $((".flip-card .close")).click(function () {
    
    $(this).parent().parent().removeClass("flip");
  });