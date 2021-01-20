$('.right-fix').click(function () {
  $('html , body').animate({scrollTop: 0},'slow');
})
$(document).scroll(() => {
  const scroBottom = $(window).scrollTop() + $(window).height();
  if ($(window).scrollTop() > 300) {
    $('header').addClass('lvTop')
    $('.right-fix').fadeIn(1000);
  } else {
    $('header').removeClass('lvTop')
    $('.right-fix').fadeOut(1000)
  }
  if (scroBottom >= $('.news-pic').offset().top) {
    $('.news-pic').addClass('animated slideInLeft')
    $('.news-inner').addClass('animated slideInRight')
  }
  if (scroBottom >= $('.pic').offset().top) {
    $('.pic').addClass('animated fadeInUp')
  }
  if (scroBottom >= $('.about-info').offset().top) {
    $('.about-info').addClass('animated slideInLeft')
    $('.about-pic').addClass('animated slideInRight')
  }
  if (scroBottom >= $('.pro-list').offset().top) {
    $('.pro-list li').addClass('animated slideInUp')
  }
  if (scroBottom >= $('.footer').offset().top) {
    $('.footer').addClass('animated slideInUp')
  }
})
