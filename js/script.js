$(function () {

  /* 헤더 */
  $(window).load(function () {
    $('#headerWrap').addClass('active');
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $('#headerWrap').addClass('scroll');
    } else {
      $('#headerWrap').removeClass('scroll');
    }
  });

  $('#headerWrap .menu a').click(function (e) {
    e.preventDefault();

    let target = $(this).attr('href');
    let moveTop = $(target).offset().top - 50;

    $('html, body').animate({
      scrollTop: moveTop
    }, 800);

    $('#mobileMenu').removeClass('active');
    $('.bg').removeClass('active');
    $('body').removeClass('of');

  });

  //모바일메뉴
  $('#headerWrap .mobileBtn').click(function () {
    $('#mobileMenu').addClass('active');
    $('.bg').addClass('active');
    $('body').addClass('of');
  });

  $('#headerWrap .mobileCloseBtn').click(function () {
    $('#mobileMenu').removeClass('active');
    $('.bg').removeClass('active');
    $('body').removeClass('of');
  });

});
