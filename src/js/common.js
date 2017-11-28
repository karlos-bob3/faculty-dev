$(function() {
    //при нажатии на кнопку с id="save"
    $('#save').click(function() {
        //переменная formValid
        var formValid = true;
        //перебрать все элементы управления input
        $('input').each(function() {
            //найти предков, которые имеют класс .form-group, для установления success/error
            var formGroup = $(this).parents('.form-group');
            //найти glyphicon, который предназначен для показа иконки успеха или ошибки
            var glyphicon = formGroup.find('.form-control-feedback');
            //для валидации данных используем HTML5 функцию checkValidity
            if (this.checkValidity()) {
                //добавить к formGroup класс .has-success, удалить has-error
                formGroup.addClass('has-success').removeClass('has-error');
                //добавить к glyphicon класс glyphicon-ok, удалить glyphicon-remove
                glyphicon.addClass('glyphicon-ok').removeClass('glyphicon-remove');
            } else {
                //добавить к formGroup класс .has-error, удалить .has-success
                formGroup.addClass('has-error').removeClass('has-success');
                //добавить к glyphicon класс glyphicon-remove, удалить glyphicon-ok
                glyphicon.addClass('glyphicon-remove').removeClass('glyphicon-ok');
                //отметить форму как невалидную
                formValid = false;
            }
        });
        //если форма валидна, то
        if (formValid) {
            //сркыть модальное окно
            $('#myModal').modal('hide');
            //отобразить сообщение об успехе
            $('#success-alert').removeClass('hidden');
        }
    });

});



$(document).ready(function(){
    $(".owl-carousel").owlCarousel( {
        loop:true,
        nav:false,
        navText:false,
        dots: true,
        pagination: false,
        lazyLoad: false,
        autoplay:true,
        animateOut: 'fadeOut',
        slideSpeed : 200,
        autoplayTimeout: 19000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    if (screen.width <= 767) {
        $('.dropdown-toggle').onclick(
            function(){ $('.dropdown').addClass('open') },
            function(){ $('.dropdown').removeClass('open') })
    }
    else {
            $('.dropdown').hover(
                function(){ $(this).addClass('open') },
                function(){ $(this).removeClass('open') }
            )
        }
    });









