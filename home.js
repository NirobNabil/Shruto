function em(input) {
    var emSize = parseFloat($("body").css("font-size"));
    return (parseInt(emSize) * input);
}

$(function(){
    
    $(window).click(function () {
        $(".join_pop").removeClass('join_pop_sliding');
    });
    $(".go_back").click(function () {
        $(".join_pop").removeClass('join_pop_sliding');
    });
    $('.join_pop').click(function (event) {
        event.stopPropagation();
    });
    $('.join_button').click(function (event) {
        event.stopPropagation();
    });
    
    $(".join_button").click(function(){
        
        var height=$(window).height()-em(6);
        var pop_height=parseInt($(".join_pop").css('height'));
        //alert(pop_height);
        $(".join_pop_sliding").css({
            top: (height/2)-(pop_height/2)
        })
        $(".join_pop").toggleClass('join_pop_sliding');
    })
})

