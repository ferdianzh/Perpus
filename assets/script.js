$(document).ready(function () {
  // on document ready
  checkitemTwo();
  checkitemThree();
});

$("#carousel-two").on("slid.bs.carousel", "", checkitemTwo);
$("#carousel-three").on("slid.bs.carousel", "", checkitemThree);

$(window).scroll(function () {
  changeNavbarColor();
});

$(window).on("load", changeNavbarColor);

function changeNavbarColor() {
  var scroll = $(window).scrollTop();
  if (scroll > 180) {
    $(".navbar").css("border-bottom", "5px solid #c27e53");
  } else {
    $(".navbar").css("border-bottom", "none");
  }
}

function checkitemTwo() {
  // check function
  var $this = $("#carousel-two");
  if ($("#carousel-two .carousel-inner .carousel-item:first").hasClass("active")) {
    $this.children("#carousel-two .carousel-control-prev").hide();
    $this.children("#carousel-two .carousel-control-next").show();
  } else if ($("#carousel-two .carousel-inner .carousel-item:last").hasClass("active")) {
    $this.children("#carousel-two .carousel-control-next").hide();
    $this.children("#carousel-two .carousel-control-prev").show();
  } else {
    $this.children("#carousel-two .carousel-control-next").show();
    $this.children("#carousel-two .carousel-control-prev").show();
  }
}
function checkitemThree() {
  // check function
  var $this = $("#carousel-three");
  if ($("#carousel-three .carousel-inner .carousel-item:first").hasClass("active")) {
    $this.children("#carousel-three .carousel-control-prev").hide();
    $this.children("#carousel-three .carousel-control-next").show();
  } else if ($("#carousel-three .carousel-inner .carousel-item:last").hasClass("active")) {
    $this.children("#carousel-three .carousel-control-next").hide();
    $this.children("#carousel-three .carousel-control-prev").show();
  } else {
    $this.children("#carousel-three .carousel-control-next").show();
    $this.children("#carousel-three .carousel-control-prev").show();
  }
}
