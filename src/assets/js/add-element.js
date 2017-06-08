$(document).ready(function(){

    var $menu = $('#myPanelDefault');
    var $m=$('#overlay');
    $('#menu-btn-toggle').click(function(event){
        alert('++');
        event.preventDefault();
        $(this).toggleClass('active');
        $menu.toggleClass('active');
        $m.toggleClass('active');

    });
    $('.faq-item>div').click(function(event) {
        alert('++');
        event.preventDefault();
        $(this).toggleClass('active');
    });

});

//$('#mail').on('submit', function(e){
//    e.preventDefault();
//            console.log('qeqeq');
//    $.ajax({
//        url: apiUrl + 'http://tabletapp.nwdev.net/api/v1/feedback',
//        type: "POST",
//        dataType: 'json',
//        data:{
//            fio: $(this).find('input[name=fio]').val(),
//            email: $(this).find('input[name=email]').val(),
//            message: $(this).find('textarea[name=message]').val()
//        }
//    }).done(function(response){
//        console.log(response);
//    })
//})