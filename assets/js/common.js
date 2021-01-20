$(document).scroll(() => {
  const scroBottom = $(window).scrollTop() + $(window).height();
  if ($(window).scrollTop() > 0) {
    $('header').addClass('lvTop')
  } else {
    $('header').removeClass('lvTop')
  }
})