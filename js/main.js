$(document).ready(function(){

  $(".next").click(function(){
    var currentImg = $("img.active");
    var currentCircle = $("i.active");
    var nextImg = currentImg.next("img");
    var nextCircle = currentCircle.next("i");
    
    currentImg.removeClass("active");
    currentCircle.removeClass("active");

    if (currentImg.hasClass("last")){
      $("img.first").addClass("active");
      $("i.first").addClass("active");
    } else {
      nextImg.addClass("active");
      nextCircle.addClass("active");
    }
  });

  $(".prev").click(function(){
    var currentImg = $("img.active");
    var currentCircle = $("i.active");
    var prevImg = currentImg.prev("img");
    var prevCircle = currentCircle.prev("i");
    
    currentImg.removeClass("active");
    currentCircle.removeClass("active");

    if (currentImg.hasClass("first")){
      $("img.last").addClass("active");
      $("i.last").addClass("active");
    } else {
      prevImg.addClass("active");
      prevCircle.addClass("active");
    }
  });
});