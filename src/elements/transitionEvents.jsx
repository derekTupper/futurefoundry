

exports.clickScroll(event) {
    event.preventDefault();

    const href = event.target.href;
    const elementID = href.substr(href.indexOf('#'));
    const navHeight = $('.inside-nav').height();
    console.log($(elementID).offset().top);
    console.log($(elementID).offset().top - navHeight);

    $('html, body').animate({
        scrollTop: ($(elementID).offset().top - navHeight)
      }, 800, function(){
    });
  }
};
