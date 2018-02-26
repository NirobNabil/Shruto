function em(input) {
    var emSize = parseFloat($("body").css("font-size"));
    return (parseInt(emSize) * input);
}


    var synth = window.speechSynthesis;

$(function(){

    $(".mail").hover(function(){
       // $(this).addClass("active");;
        //alert($(this).position().left);
        /*var mail_pos_left = $(this).position().left;
        var mail_pos_top = $(this).position().top;
        
        $(".mail_box").css({
            left: parseInt(mail_pos_left) - ((parseInt($(this).width())/100)*70) + 'px',
            top: parseInt($(this).offset().top) - parseInt($(".mail_box").height())  + 'px'
        })*/
    });
    
})