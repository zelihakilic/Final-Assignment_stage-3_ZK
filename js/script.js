$( document ).ready(function(){

    $('.hidden').hide();

    $('.about').click(function(){
        $('#show-on-click').slideDown();
        $('.hidden').show();
        event.preventDefault();
    });

    function closeAll() {
        // $('.tile').slideUp();
        $('.tile').hide();
    }

    $('.close').click(function(){
        // $('#show-on-click').slideUp();
        $('.hidden').hide();
        closeAll();
        event.preventDefault();
    });

    // $('.hidden2').hide();

    $('.niki').click(function(){
        closeAll();
        // $('#reveal-on-click').slideDown();
        // $('.hidden2').show();
        $('.hidden2').slideDown();
        event.preventDefault();
    });

    // $('.close').click(function(){
    //     $('#reveal-on-click').slideUp();
    //     $('.hidden2').hide();
    //     event.preventDefault();
    // });


    // $('.hidden3').hide();

    $('.fortinberry').click(function(){
        closeAll();
        // $('#reveal-on-click').slideDown();
        // $('.hidden3').show();
        $('.hidden3').slideDown();
        event.preventDefault();
    });

    $('.lucas').click(function(){
        closeAll();
        // $('#reveal-on-click').slideDown();
        // $('.hidden3').show();
        $('.hidden4').slideDown();
        event.preventDefault();
    });

        $('.spa').click(function(){
        closeAll();
        // $('#reveal-on-click').slideDown();
        // $('.hidden3').show();
        $('.hidden5').slideDown();
        event.preventDefault();
    });

    // $('.close').click(function(){
    //     $('#reveal-on-click').slideUp();
    //     $('.hidden3').hide();
    //     event.preventDefault();
    // });
    
});