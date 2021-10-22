let btnUp = $('#btn-up');

$(window).scroll(function() { 
    if ($(window).scrollTop () > 450) {
        btnUp.addClass('scroll-up-show');
      } else {
        btnUp.removeClass('scroll-up-show');
      }
});	 
  
btnUp.on('click', function(n) {
    n.preventDefault();
    $('html, body').animate({scrollTop: 0}, 300);
});