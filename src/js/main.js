function showRandMent() {
  var ments = [
    '망언은 죽지 않아요. <b>대가</b>를 치를뿐.',
    '망언을 <b>포착</b>했다.',
    '아무도 <b>국민</b>들에게서 숨지 못해.',
    '대한민국에서 <b>망언</b>이 빗발친다!'
  ];

  var rnd = Math.floor((Math.random() * ments.length));
  $("header p").html(ments[rnd]);
}

function showNav() {
  navScrollCheck = $(document).scrollTop() >= $(window).height() - 64;

  if (navScrollCheck) {
    $("nav.fixed").addClass("activated");
  } else {
    $("nav.fixed").removeClass("activated");
  }
}

function fadeIntro() {
  introScrollCheck = $(document).scrollTop() >= $("section#intro").offset().top - ($("section#intro").height() * (4/5));
  introScrollFlag = true;

  if (introScrollCheck && introScrollFlag) {
    $("section#intro h1").fadeIn(1000);
    $("section#intro p").fadeIn(1000);

    introScrollFlag = false;
  }
}

$(document).ready(function() {
  setTimeout(function() {
    $("header .logo").addClass("activated");
    $("header p").addClass("activated");
  }, 500);

  setTimeout(function() {
    $("nav.non-fixed").addClass("activated");
  }, 1000);

  $("section#intro h1").hide();
  $("section#intro p").hide();

  showRandMent();

});

$(document).scroll(function() {

  showNav();
  fadeIntro();

});
