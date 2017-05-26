$(document).ready(function(){

    $('.autoplay').slick({
        arrows:false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        loop:true
    });
    var $menu = $('#myPanelDefault');
    var $m=$('#overlay');
    $('#menu-btn-toggle').click(function(event){
        alert('++');
        event.preventDefault();
        $(this).toggleClass('active');
        $menu.toggleClass('active');
        $m.toggleClass('active');

    });

});