function isMobile() {
  const userAgentInfo = navigator.userAgent;

  const mobileAgents = [ "Android", "iPhone", "SymbianOS", "Windows Phone", "iPad","iPod"];

  let mobile_flag = false;

  //根据userAgent判断是否是手机
  for (let v = 0; v < mobileAgents.length; v++) {
      if (userAgentInfo.indexOf(mobileAgents[v]) > 0) {
          mobile_flag = true;
          break;
      }
  }

   const screen_width = window.screen.width;
   const screen_height = window.screen.height;    

   //根据屏幕分辨率判断是否是手机
   if(screen_width < 500 && screen_height < 800){
       mobile_flag = true;
   }

   return mobile_flag;
}
let mobile_flag = isMobile();
// 返回顶部
$('.right-fix').click(function () {
  $('html , body').animate({scrollTop: 0},'slow');
})
if (!mobile_flag) {
  if ($(window).scrollTop() > 350) {
    $('header').addClass('lvTop')
    $('')
    $('.right-fix').fadeIn();
  } else {
    $('header').removeClass('lvTop')
    $('.right-fix').fadeOut()
  }
} else {
  if ($(window).scrollTop() > 0) {
    $('header').addClass('lvTop')
    $('')
    $('.right-fix').fadeIn();
  } else {
    $('header').removeClass('lvTop')
    $('.right-fix').fadeOut()
  }
}

// 手机导航按钮
$('.menu-button').click( function () {
  if ($('.menu-button').hasClass('cross')) {
    $(this).removeClass('cross');
    $('.header .logo').removeClass('display_none')
    $('.head-nav-menu').hide(800)
    $('.head-nav-menu .main-nav').removeClass('cross')
    $('body').css('overflow','auto');
  } else {
    $(this).addClass('cross');
    $('.head-nav-menu').show(800)
    $('.header .logo').addClass('display_none')
    $('.head-nav-menu .main-nav').addClass('cross')
    $('body').css('overflow','hidden');
  }
})
// 滚动条触发动画
$(document).scroll(() => {
  const scroBottom = $(window).scrollTop() + $(window).height();
  if (!mobile_flag) {
    if ($(window).scrollTop() > 350) {
      $('header').addClass('lvTop')
      $('')
      $('.right-fix').fadeIn(1000);
    } else {
      $('header').removeClass('lvTop')
      $('.right-fix').fadeOut(1000)
    }
  } else {
    if ($(window).scrollTop() > 0) {
      $('header').addClass('lvTop')
      $('')
      $('.right-fix').fadeIn(1000);
    } else {
      $('header').removeClass('lvTop')
      $('.right-fix').fadeOut(1000)
    }
  }
  if ($('.news-pic').length > 0 && scroBottom >= $('.news-pic').offset().top) {
    $('.news-pic').addClass('animated slideInLeft')
    $('.news-inner').addClass('animated slideInRight')
  }
  if ($('.pic').length > 0 && scroBottom >= $('.pic').offset().top) {
    $('.pic').addClass('animated fadeInUp')
  }
  if ($('.about-info').length>0 && scroBottom >= $('.about-info').offset().top) {
    $('.about-info').addClass('animated slideInLeft')
    $('.about-pic').addClass('animated slideInRight')
  }
  if ($('.pro-index .pro-list li.delay02').length > 0 && scroBottom >= $('.pro-index .pro-list li.delay02').offset().top) {
    $('.pro-index .pro-list li.delay02').addClass('animated slideInUp')
  }
  if ($('.pro-index .pro-list li.delay03').length > 0 && scroBottom >= $('.pro-index .pro-list li.delay03').offset().top) {
    $('.pro-index .pro-list li.delay03').addClass('animated slideInUp')
  }
  if ($('.pro-index .pro-list li.delay04').length > 0 && scroBottom >= $('.pro-index .pro-list li.delay04').offset().top) {
    $('.pro-index .pro-list li.delay04').addClass('animated slideInUp')
  }
  if ($('.about2 img').length > 0 && scroBottom >= $('.about2 img').offset().top) {
    $('.about2 img').addClass('animated fadeInUp')
  }
  if ($('.pro-inpro .series2').length > 0 && scroBottom >= $('.pro-inpro .series2').offset().top) {
    $('.pro-inpro .series2').addClass('animated fadeInLeft')
    $('.pro-inpro .series2').next().find('li').addClass('animated slideInUp')
  }
  if ($('.pro-inpro .series3').length > 0 && scroBottom >= $('.pro-inpro .series3').offset().top) {
    $('.pro-inpro .series3').addClass('animated fadeInLeft')
    $('.pro-inpro .series3').next().find('li').addClass('animated slideInUp')
  }
  if (scroBottom >= $('.footer').offset().top) {
    $('.footer').addClass('animated slideInUp')
  }
})
