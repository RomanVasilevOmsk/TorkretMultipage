$(document).ready(function(){
    //Якорь
        $("#jsArrowLink").on("click", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1500);
        });





    //------------Catalog------------//

    $(".js-catalog__block-title").on("click", function(e) {
        e.preventDefault();
        var $thisIco = this.nextElementSibling;// ищем нужные картинки
        var $this = $(this),
            answerId = $this.attr("href");

        if( !$this.hasClass("active-block") ) {//если не активный айтем, скрываем все нах
            $(".js-catalog__content").slideUp(100,function(){
                var plansOffset = $this.offset().top;// узнаем скольк расстояния до заголовка самого большого

                $("html, body").animate({
                    scrollTop: plansOffset// собстна скролим до этого заголовка
                }, 50);
            });
            $(".js-catalog__block-title").removeClass("active-block");
            $(".catalog__ico").removeClass("active-block-ico");
        }

        $this.toggleClass("active-block");// переключатель активного айтема
        $($thisIco).toggleClass("active-block-ico");// переключатель активного айтема для картинок
        $(answerId).slideToggle();


        var plansOffset = $this.offset().top;// узнаем скольк расстояния до заголовка самого большого

        $("html, body").animate({
            scrollTop: plansOffset// собстна скролим до этого заголовка
        }, 500);
    });


    $(".js-catalog__product-item-title").on("click", function(e) {

        e.preventDefault();
        var $thisIco = this.nextElementSibling;
        var $this = $(this),
            answerId = $this.attr("href");

        if( !$this.hasClass("active-block") ) {
            $(".js-catalog__product-content").slideUp();
            $(".js-catalog__product-item-title").removeClass("active-block");
            $(".catalog__ico").removeClass("active-block-ico");
        }

        $this.toggleClass("active-block");
        $($thisIco).toggleClass("active-block-ico");
        $(answerId).slideToggle();

    });

//------------Catalog------------//

    // console.log(window.location);
    var utmLink = window.location.search.toString();

    $(".menu a").on('click',function (event) {
        event.preventDefault();
        var newLink = $(this).attr('href');
        if (utmLink) {
            newLink += utmLink ;
        }
        window.location = newLink;
    });

    // console.log(utmLink);
    //------------INFOBLOCK------------//


    $('#plan area').click(function(e){
        e.preventDefault();
    });
    $('.joints').mouseover(function(){
        $('#js-joints').css({'display' : 'block'});
        $('.info-block__pulse--joints').css({'-webkit-animation' : 'none'});

    });
    $('.joints').mouseout(function(){
        $('#js-joints').css({'display' : 'none'});
        $('.info-block__pulse--joints').css({'-webkit-animation' : 'pulses 1s infinite cubic-bezier(0.6, 0, 0, 1)'});
    });


    $('.overlapping').mouseover(function(){
        $('#js-overlapping').css({'display' : 'block'});
        $('.info-block__pulse--overlapping').css({'-webkit-animation' : 'none'});

    });
    $('.overlapping').mouseout(function(){
        $('#js-overlapping').css({'display' : 'none'});
        $('.info-block__pulse--overlapping').css({'-webkit-animation' : 'pulses 1s infinite cubic-bezier(0.6, 0, 0, 1)'});
    });


    $('.bricks').mouseover(function(){
        $('#js-bricks').css({'display' : 'block'});
        $('.info-block__pulse--bricks').css({'-webkit-animation' : 'none'});

    });
    $('.bricks').mouseout(function(){
        $('#js-bricks').css({'display' : 'none'});
        $('.info-block__pulse--bricks').css({'-webkit-animation' : 'pulses 1s infinite cubic-bezier(0.6, 0, 0, 1)'});
    });

    $('.cutOff').mouseover(function(){
        $('#js-cutOff').css({'display' : 'block'});
        $('.info-block__pulse--cutOff').css({'-webkit-animation' : 'none'});

    });
    $('.cutOff').mouseout(function(){
        $('#js-cutOff').css({'display' : 'none'});
        $('.info-block__pulse--cutOff').css({'-webkit-animation' : 'pulses 1s infinite cubic-bezier(0.6, 0, 0, 1)'});
    });

    $('.floor').mouseover(function(){
        $('#js-floor').css({'display' : 'block'});
        $('.info-block__pulse--floor').css({'-webkit-animation' : 'none'});

    });
    $('.floor').mouseout(function(){
        $('#js-floor').css({'display' : 'none'});
        $('.info-block__pulse--floor').css({'-webkit-animation' : 'pulses 1s infinite cubic-bezier(0.6, 0, 0, 1)'});
    });

    $('.flow').mouseover(function(){
        $('#js-flow').css({'display' : 'block'});
        $('.info-block__pulse--flow').css({'-webkit-animation' : 'none'});

    });
    $('.flow').mouseout(function(){
        $('#js-flow').css({'display' : 'none'});
        $('.info-block__pulse--flow').css({'-webkit-animation' : 'pulses 1s infinite cubic-bezier(0.6, 0, 0, 1)'});
    });

    $('.seams').mouseover(function(){
        $('#js-seams').css({'display' : 'block'});
        $('.info-block__pulse--seams').css({'-webkit-animation' : 'none'});

    });
    $('.seams').mouseout(function(){
        $('#js-seams').css({'display' : 'none'});
        $('.info-block__pulse--seams').css({'-webkit-animation' : 'pulses 1s infinite cubic-bezier(0.6, 0, 0, 1)'});
    });

    $('.concrete').mouseover(function(){
        $('#js-concrete').css({'display' : 'block'});
        $('.info-block__pulse--concrete').css({'-webkit-animation' : 'none'});

    });
    $('.concrete').mouseout(function(){
        $('#js-concrete').css({'display' : 'none'});
        $('.info-block__pulse--concrete').css({'-webkit-animation' : 'pulses 1s infinite cubic-bezier(0.6, 0, 0, 1)'});

    });
    //------------INFOBLOCK------------//

//Mobile menu
    var main = function() {
        var nav = $('.menu'),
            iconClose = $('.header__icon-close'),
            iconMenu = $('.header__icon-menu'),
            body = $('body');
        iconMenu.click(function() {
            nav.animate({left: '0'}, 200);
            $(".button-application--top, .certificates__inner, .map").css({'display' : 'none'});
            iconClose.css({'display' : 'block'}).animate({left: '77%'}, 200);
            iconMenu.css({'display' : 'none'});
            body.css({'overflow-y' : 'hidden'}).animate({left: '100%'}, 200);
        });


        /* Close menu */
        $('.header__icon-close,.menu__all').click(function() { //выбираем класс icon-close и метод click
            nav.animate({left: '-100%'}, 200);
            $(".button-application--top").css({'display' : 'inline-block'});
            $(".certificates__inner, .map").css({'display' : 'block'});
            body.css({'overflow-y' : 'scroll'}).animate({left: '0px'}, 200);
            iconMenu.css({'display' : 'block'});
            iconClose.css({'display' : 'none'});
        });
    };
    $(document).ready(main);
    //Mobile menu

    //---------Modals-----------//

    // //Modal-phone
    $(".js-show-modal").on("click", function(e) {
        e.preventDefault();
        var currentModal = $(this).attr("href");
        $(currentModal + ", #js-overlay").fadeIn(500);
        $("body").addClass("open-modal");
        $(".modal-form__phone").focus();
    });

    $("#js-overlay, .js-modal-close").on("click", function(e) {
        e.preventDefault();
        $(".js-modal, .js-modal-features-approach, .js-modal-features-availability, .js-modal-features-quality, .js-modal-features-price, .js-modal-features-objects, .js-modal-features-destruction, #js-overlay").fadeOut(100);
        $("body").removeClass("open-modal");
    });

    //---------Modals-----------//

    //---------Mask-----------//
    $('input[name="phone"]').mask('+7 (999) 999-99-99');
    //---------Mask-----------//

    //---------Gallery-----------//
    $("#js-lightgallery1").lightGallery({
        mode: "lg-slide-skew-rev",
        download: false,
        thumbContHeight: 50
    });

    $("#js-lightgallery").lightGallery({
        mode: "lg-slide-skew-rev",
        download: false,
        thumbContHeight: 50
    });
    // //---------Gallery-----------//

    // //---------Carousel-----------//
    $('#js-testimonials-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 4000,
        fade: false
    });

    $(".js-slider-prev").on("click", function() {
        $('#js-testimonials-slider').slick("slickNext");
    });

    $(".js-slider-next").on("click", function() {
        $('#js-testimonials-slider').slick("slickPrev");
    });
    //---------Carousel-----------//

    $('form').submit(function(event) {
        var required = $(this).find('input[required]');
        var error = false;
        for (var i = 0; i <= (required.length - 1); i++) {
            if (required[i].value == '') {
                required[i].style.borderColor = 'red';
                error = true;
            } else
                required[i].style.borderColor = '#fcc500';
        }
        if (error) event.preventDefault();
        else { dataLayer.push({ 'event': 'sendaction' }); }
    });
    $('.js-phone-wrap').click(function() { dataLayer.push({ 'event': 'sendaction' }); });
    $('.js-email-link').click(function() { dataLayer.push({ 'event': 'sendaction' }); });

    //---------counterUp-----------//

    $('.js-counter-likes').counterUp({
        delay: 10,
        time: 3000
    });

    //---------counterUp-----------//
});


