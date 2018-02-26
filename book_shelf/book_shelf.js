$(function () {
    $(window).click(function () {
        $(".wrapper").fadeOut(500);
    });
    $('.wrapper').click(function (event) {
        event.stopPropagation();
    });
    $('.book').click(function (event) {
        event.stopPropagation();
    });
    const nav_height = $(".nav_actual").css("height");
    $(window).scroll(function () {
        if ($(window).scrollTop() > parseInt($(".navbar").css('height')) / 2) {
            //console.log(nav_height);
            $(".nav_actual").css({
                zIndex: '10',
                opacity: '0',
                position: 'fixed',
                width: '100%',
                //height: '3.5em',
                //backgroundColor: '#f2f2f2',
            });
            $(".nav_actual > span").addClass("nav_link_back");
            //$(".nav_link").addClass(".links_fixed");
            $(".nav_actual").animate({
                opacity: '1',
                //height: nav_height,
            }, 200);


        }
        if ($(window).scrollTop() < parseInt($(".navbar").css('height')) / 2) {
            $(".nav_links").removeClass("links_fixed");
            $(".nav_actual").css({
                opacity: '1',
                //backgroundColor: 'transparent',
                position: 'relative'
            });
        };
    });
    const nav_links_marginLeft = $(".nav_link_back").css("margin-left");
    console.log(nav_links_marginLeft);
    $(".nav_link").hover(function () {
        //$(".nav_links > span").addClass("nav_link_back");
        $(".nav_link_back").stop();
        $(".nav_link_back").animate({
            opacity: '1',
            width: $(this).css('width'),
            opacity: '1',
            marginLeft: parseInt(nav_links_marginLeft) + parseInt($(this).offset().left) - parseInt($(".nav_links").offset().left) + parseInt($(this).css('width')) + 'px'
        }, 300);
    })



    $(".book").click(function () {
        $(this).addClass("active");
        $(".active-book h2")[0].innerHTML = $(this).children().next().children().html();
        var ter = $(this).children().children();
        $(".content-container > .bookimg").attr("src", $('.active > .book-img > .bookimg')[0].getAttribute('src'));
        let i = $(this).offset().left;
        let x = parseInt($(this).css("width"));
        let z = parseInt($(".wrapper").css("width"))
        let y = $(this).position().left - $(this).position().left * 30 / 100;
        if (y + z < $(window).width()) {
            $(".wrapper").css('left', y + 'px').css('top', $(this).position().top + parseInt($(this).css("height")) - 15 + 'px');
            $(".arrow-up").css('margin-left', (i - y) + (x / 2.3) + 'px');
        } else {
            $(".wrapper").css('left', y / 1.6 /*i -(z-x)*/ + 'px').css('top', $(this).position().top + parseInt($(this).css("height")) - 15 + 'px');
            //alert(y/1.6);
            $(".arrow-up").css('margin-left', (i - $(".wrapper").position().left) + 10 + 'px');
            //alert(i-y);
        }
        $(".wrapper").fadeIn(500);
        $(this).removeClass('active');
    })


//////////////////////////////////////////////////////////
/////// making the tip container come into view //////////
	$(".tip_container").click(function(){
		if($(".tip_content").hasClass("hide")){
			$(".tip_content").removeClass("hide");
			$(".tip_content").addClass("show");	
		}else if($(".tip_content").hasClass("show")){
			$(".tip_content").removeClass("show");
			$(".tip_content").addClass("hide");
		}
	})


    ////////////////////////////////////////////////////////////////////////
    //                          books                                    //
    //////////////////////////////////////////////////////////////////////
    $(".button").click(function () {
        $(".detailscontainer").css("height", "250px");
        var x = 180;
        console.log(x);
        let i = $(this).parent();
        if (i.height() < 251) {
            $(this).css({
                WebkitTransform: 'rotate(180deg)'
            });
            $($(this).parent()).animate({
                height: '650px'
            }, 700);
        } else {
            $($(this).parent()).animate({
                height: '250px'
            }, 700);
            $(this).css({
                WebkitTransform: 'rotate(0deg)'
            });
        }
    })
    
    
    ////////////////////////////////////////////////////////////////////////////
    //                  changing active-book on click                         //
    ////////////////////////////////////////////////////////////////////////////
    
    $(".book").click(function(){
        //console.log("sdbjsdbjsbd");
        let book_title = $(this).find("h2").text();
        $(".tx").text(book_title);
        book_title = book_title.replace(/\s+/g, '');
        //alert($(this).find("h6").text());
        $(".book-description >  .writer_ab").text($(this).find("h6").text());
        clicked(book_title);
        //alert(book_title);
        /*if(book_title == "ছোটদেরমুক্তিযুদ্ধেরইতিহাস" ){}
            
            rep_html = '<li> <h1 class="liname">পর্ব ১</h1> <div class="iframe"><iframe width="200" height="500" src="https://www.youtube.com/embed/VC3vKVAeDZw?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li>';
            $(".list > li").replaceWith(rep_html);
            
        };*/
                     
        
        
        
    })
    
    
    
    
    
    
    
    
    
    
    $(".gg").text("sdshfvshvdfhjsdfhsdvfdsvfdfjhsdfjhdsafbfjkswbfksd hsvdfudsy");
    
    console.log("dhfvhdvfhd");
        
        var convert0 ='';
        $(".button2").click(function(){
            console.log("button0");
            let convertn = document.getElementById("convert0").value;
            convertn = convertn.replace('?list=PL0GkN0RJBI3Q1sGaW5HDbH6f7ggtY5ArK" frameborder="0" allowfullscreen></iframe>', '');
            convertn = convertn.replace('<iframe width="560" height="315" src="', '');
            convert0+='<li> <h1 class="liname">পর্ব ১</h1> <div class="iframe"><iframe src="' + convertn + '?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> ';
            $(".gg0").text(convert0);
            console.log(convert0);
        });
    
        $(".button1").click(function(){
            console.log("done");
            var convert = document.getElementById("convert").value;
            convert = convert.replace(/\r?\n/g, '');
            $(".gg").text(convert);
        })
    
    
    var shift = new Audio('click.mp3');
    
    
    /*document.onkeydown = checkKey;

    function checkKey(e) {
        var i=0;
        e = e || window.event;

        if (e.keyCode == '38') {
            // up arrow
        }
        else if (e.keyCode == '40') {
            // down arrow
        }
        else if (e.keyCode == '37') {
           // left arrow
            console.log('left '+i);
            button_controll_trigger(i);
            i=i+1;
        }
        else if (e.keyCode == '39') {
           // right arrow
        }

    }*/

    
    //audio.play();
    //audio.pause();
    
    //button_controll_trigger();
    $(window).keydown(function(e){
        console.log("being fired over and over");
        if(e.ctrlKey){
            //alert("ctrl fired!");
            if( tts_turner < 3 ){
                tts_turner += 1;
            }
        }
        if( tts_turner == 3 ){
            //alert("turned on");
            bool_tts_mode = true;
            goto_tts(bool_tts_mode);
            tts_turner = 0;
        }
        if(e.shiftKey){
            tts_turner = 0;
            //alert("shift fired!")
            console.log("shift fired");
            bool_tts_mode = false;  
            goto_tts(bool_tts_mode);
        }
    });

})
var bool_tts_mode = false;
var i=0;
var ii=0;
var synth = window.speechSynthesis;

//load the IFrame Player API code asynchronously
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//declare an array to contain player objects
var players = [];
var bool_youtubeAPIready = false;

//define a function to be called when the API loads
function onYouTubeIframeAPIReady() {
    bool_youtubeAPIready = true;
    console.log("loaded")
}

var tts_turner = 0;

function goto_tts(bool_tts_mode){
    console.log("came in");
    if( bool_tts_mode && bool_youtubeAPIready ){
        //console.log("came in again");
        
//initializing th player
                button_controll_trigger(0);
                bring_active_book_up(0);
                make_object(0);
        console.log(player);

        
var tts_turner = 0;
document.onkeyup = function(e) {
    switch (e.keyCode) {
        case 37:
            //alert('left');
            i=i-1;
            ii=0;
            console.log('left '+i);
            if(i<0){
                msg = new SpeechSynthesisUtterance('you can\'t select books with negative index');
                synth.speak(msg);
                i++;
            }else{
                gg=i+1;
                msg = new SpeechSynthesisUtterance('selecting book '+ gg);
                synth.speak(msg);
                button_controll_trigger(i);
                bring_active_book_up(i);
                make_object(ii);
            }
            break;
        case 38:
            //alert('up');
            //console.log(players);
            console.log(episode_ids);
            if(ii>0){
                ii--;
            }else{}
            gg=ii+1;
            msg = new SpeechSynthesisUtterance('selecting episode '+ gg );
            synth.speak(msg);
            make_object(ii);
            break;
        case 39:
            //alert('right');
            i=i+1;
            ii=0;
            alert('right '+i);
            if(i>document.getElementsByClassName('book').length){
                msg = new SpeechSynthesisUtterance('there are only '+document.getElementsByClassName('book').length + ' books');
                synth.speak(msg);
                i--;
            }else{
                gg=i+1;
                msg = new SpeechSynthesisUtterance('selecting book '+ gg);
                synth.speak(msg);
                button_controll_trigger(i);
                bring_active_book_up(i);
                make_object(ii);
            }
            break;
        case 40:
            //alert('down');
            if(ii<episode_ids.length){
                ii++;
            }else{
                msg = new SpeechSynthesisUtterance('there are only ' + episode_ids.length + 'episodes');
                synth.speak(msg);
            }
            gg=ii+1;
            msg = new SpeechSynthesisUtterance('selecting episode '+ gg);
            synth.speak(msg);
            make_object(ii);
            console.log(player);
            break;
        case 32:
            e.preventDefault();
            if(bool_youtubeAPIready){
                //console.log("triggered");
                if(player_state == 2 || player_state == -1){
                    msg = new SpeechSynthesisUtterance("playing");
                    synth.speak(msg);
                    player.playVideo();
                }
                if( player_state == 3 ){
                    msg = new SpeechSynthesisUtterance("buffering");
                    synth.speak(msg);
                }
                if( player_state == 1 ){
                    msg = new SpeechSynthesisUtterance("pausing");
                    synth.speak(msg);
                    player.pauseVideo();
                }
            }else{
                msg = new SpeechSynthesisUtterance("player is loading");
                synth.speak(msg);
            }
        
    }
};

window.onkeydown = function(e) {
    var elem = e.target.nodename;
    if( elem !== 'TEXTAREA' && elem != 'INPUT' ) {
        return !(e.keyCode == 32);
    }
};

var bool_player_state;



var episode_ids = [];


function bring_active_book_up(xx){
        let book = document.getElementsByClassName('book')[xx];
        console.log("book is ");
        console.log(book);
        $(book).addClass("active");
        $(".active-book h2")[0].innerHTML = $(this).children().next().children().html();
        var ter = $(book).children().children();
        $(".content-container > .bookimg").attr("src", $('.active > .book-img > .bookimg')[0].getAttribute('src'));
        let i = $(book).offset().left;
        let x = parseInt($(book).css("width"));
        let z = parseInt($(".wrapper").css("width"))
        let y = $(book).position().left - $(book).position().left * 30 / 100;
        if (y + z < $(window).width()) {
            $(".wrapper").css('left', y + 'px').css('top', $(book).position().top + parseInt($(book).css("height")) - 15 + 'px');
            $(".arrow-up").css('margin-left', (i - y) + (x / 2.3) + 'px');
        } else {
            $(".wrapper").css('left', y / 1.6 /*i -(z-x)*/ + 'px').css('top', $(book).position().top + parseInt($(book).css("height")) - 15 + 'px');
            //alert(y/1.6);
            $(".arrow-up").css('margin-left', (i - $(".wrapper").position().left) + 10 + 'px');
            //alert(i-y);
        }
        $(".wrapper").fadeIn(500);
        $(book).removeClass('active');
}


function button_controll_trigger(i){
    let book = document.getElementsByClassName('book')[i];
    console.log(book);
    console.log(book.childNodes[3]);
    //console.log('selected' + books.childNodes[3].childNodes[1].innerHTML.replace(/\s+/g, ''));
    //console.log(books);
    let url,regExp, videoId;
        
    clicked(book.childNodes[3].childNodes[1].innerHTML.replace(/\s+/g, ''));
    
    console.log(document.getElementsByClassName('iframe'))
    setTimeout(populate_episode_ids(),100);
    
    
    console.log("done");
    
    //console.log(books.childNodes[3].childNodes[1].innerHTML.replace(/\s+/g, ''));
    }

function populate_episode_ids(){
    let i=0;
    episode_ids= [];
    while(i<document.getElementsByClassName('iframe').length){
        console.log("i is now - " + i);
        url = document.getElementsByClassName('iframe')[i].childNodes[0].src;
        regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
        videoId = url.match(regExp);

        console.log(videoId[1]);
        episode_ids.push(videoId[1]);
        i++;
    }
    
}


///////// working with the youtube API  here ///////////

//load the IFrame Player API code asynchronously
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//declare an array to contain player objects
var players = [];

function make_object(x){
    bool_doc_ready = 0;
    
    document.getElementsByClassName('keyonly_mode_player')[0].innerHTML = '<div class="player" id="main_player"></div>';
    console.log("inside make_objects - " + episode_ids[x]);
    console.log("ii = " + x);
        player = new YT.Player('main_player', {
          height: '360',
          width: '640',
          videoId: episode_ids[x],
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
}

function onPlayerReady(event) {
    console.log('ready');
    bool_doc_ready = 1;
    player_state = -1;
}


var player_state = -1;
function onPlayerStateChange(event) {
    /*
    -1 – unstarted
    0 – ended
    1 – playing
    2 – paused
    3 – buffering
    5 – video cued
    */
    player_state = player.getPlayerState();
    if(player_state == 3){
        msg = new SpeechSynthesisUtterance("buffering");
        synth.speak(msg);
    }
}


}else{ 
    // define what to do if we are not it tts mode
    document.onkeyup = null;
}

}




function clicked(book_title){
    let rep_html;
    switch(book_title){
                 
            case "ছোটদেরমুক্তিযুদ্ধেরইতিহাস":
                // 
                //$(".book-description >  .writer_ab").text("লেখক: মুহম্মদ জাফর ইকবাল");
                rep_html = '<li> <h1 class="liname"> পুরো পর্ব </h1> <div class="iframe"><iframe src="https://www.youtube.com/embed/VC3vKVAeDZw?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li>';
                $(".list > li").replaceWith(rep_html);
                break;
                
            case "বাংলারশ্রেষ্ঠসন্তানেরা":
                // 
                //$(".book-description >  .writer_ab").text("প্রফেসর ফিরোজা বেগম");
                rep_html = '<ul class="list"><li>                                 <h1 class="liname">বীরশ্রেষ্ঠ মোস্তফা কামালঃ-</h1>                                 <div class="iframe"><iframe src="https://www.youtube.com/embed/slDuhMsuXOQ?&theme=dark&autohide=2&fs=0&rel=0"frameborder="0"></iframe></div>                             </li>                             <li>                                 <h1 class="liname">বীরশ্রেষ্ঠ মতিউর রহমান:-</h1>                                 <div class="iframe"><iframe   src="https://www.youtube.com/embed/u1thP64dhrk?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div>                             </li>                             <li>                                 <h1 class="liname">বীরশ্রেষ্ঠ নূর মোহাম্মদ:-</h1>                                 <div class="iframe"><iframe src="https://www.youtube.com/embed/Xjf6CO2bWW8?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div>                             </li>                             <li>                                 <h1 class="liname">বীরশ্রেষ্ঠ মোহাম্মদ রুহুল আমিন :-</h1>                                 <div class="iframe"><iframe src="https://www.youtube.com/embed/CpDdMNNkkck?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div>                             </li>                             <li>                                 <h1 class="liname">বীরশ্রেষ্ঠ মুন্সী আবদুর রউফ:-</h1>                                 <div class="iframe"><iframe src="https://www.youtube.com/embed/oUgsJSUHZlM?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div>                             </li>                             <li>                                 <h1 class="liname">বীরশ্রেষ্ঠ হামিদুর রহমান :-</h1>                                 <div class="iframe"><iframe src="https://www.youtube.com/embed/74hSM6rGwq4?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div>                             </li>                             <li>                                 <h1 class="liname">বীরশ্রেষ্ঠ জাহাঙ্গীর</h1>                                 <div class="iframe"><iframe src="https://www.youtube.com/embed/ctVFVaAmG7w?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div>                             </li></ul>';
                $(".list").replaceWith(rep_html);
                break;
                
            case "একাত্তরেরচিঠি":

                rep_html = '<ul class="list"><li> <h1 class="liname">চিঠি ১</h1> <div class="iframe"><iframe src="https://www.youtube.com/embed/uZuzPrQ9X_w?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li></ul>';
                $(".list").replaceWith(rep_html);
                break;
                
            case "একাত্তরেরদিনগুলি":
                 
                rep_html = '<ul class="list"><li> <h1 class="liname">পর্ব ১</h1> <div class="iframe"><iframe  src="https://www.youtube.com/embed/_zuIO2BWdkc?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ২</h1> <div class="iframe"><iframe  src="https://www.youtube.com/embed/hWSyrlWDlIw?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ৩</h1> <div class="iframe"><iframe  src="https://www.youtube.com/embed/65cFfwQqeLo?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ৪</h1> <div class="iframe"><iframe  src="https://www.youtube.com/embed/6u6W1e3mE2M?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li></ul>';
                $(".list").replaceWith(rep_html);
                break;
                
            case "একাত্তরএবংআমারবাবা":
                 
                rep_html = '<ul class="list"><li> <h1 class="liname">পর্ব ১</h1> <div class="iframe"><iframe  src="https://www.youtube.com/embed/gDq81JMdwSs?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ২</h1> <div class="iframe"><iframe  src="https://www.youtube.com/embed/sphqbxF90bc?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ৩</h1> <div class="iframe"><iframe  src="https://www.youtube.com/embed/IP2IXF6UmO4?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ৪</h1> <div class="iframe"><iframe  src="https://www.youtube.com/embed/TSUPFGkJ8tI?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ৫</h1> <div class="iframe"><iframe  src="https://www.youtube.com/embed/lKnxZicW3uE?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ৬</h1> <div class="iframe"><iframe  src="https://www.youtube.com/embed/Su8O5ldsrE8?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ৭</h1> <div class="iframe"><iframe  src="https://www.youtube.com/embed/olcgxdS4pB8?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ৮</h1> <div class="iframe"><iframe  src="https://www.youtube.com/embed/0GpyeTD6HrU?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ৯</h1> <div class="iframe"><iframe  src="https://www.youtube.com/embed/7dOnv_hnTG8?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ১০</h1> <div class="iframe"><iframe  src="https://www.youtube.com/embed/8Qkl6hiWAf4?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li></ul>';
                $(".list").replaceWith(rep_html);
                break;
                
            case "যখনপলাতকমুক্তিযুদ্ধেরদিনগুলি":
                 
                 
                rep_html = '<ul class="list"><li> <h1 class="liname">পর্ব ১</h1> <div class="iframe"><iframe src="https://www.youtube.com/embed/2eEmrqXdt1Q?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ২</h1> <div class="iframe"><iframe src="https://www.youtube.com/embed/Hu6zeXtXBEU?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ৩</h1> <div class="iframe"><iframe src="https://www.youtube.com/embed/Yu3ZMV8ZN7E?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ৪</h1> <div class="iframe"><iframe src="https://www.youtube.com/embed/VSehNredZxU?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ৫</h1> <div class="iframe"><iframe src="https://www.youtube.com/embed/JcYB11xvwMY?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ৬</h1> <div class="iframe"><iframe src="https://www.youtube.com/embed/QomDkro0wDs?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ৭</h1> <div class="iframe"><iframe src="https://www.youtube.com/embed/5PB1-PEPDxM?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ৮</h1> <div class="iframe"><iframe src="https://www.youtube.com/embed/cymIMUzNoWs?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ৯</h1> <div class="iframe"><iframe src="https://www.youtube.com/embed/D5K4diMiIpE?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ১০</h1> <div class="iframe"><iframe src="https://www.youtube.com/embed/FcQedEU4eBE?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ১১</h1> <div class="iframe"><iframe src="https://www.youtube.com/embed/QqZO0Hov77Q?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ১২</h1> <div class="iframe"><iframe src="https://www.youtube.com/embed/Wv9IQ75Q4_M?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ১৩</h1> <div class="iframe"><iframe src="https://www.youtube.com/embed/vprP3gzVv6I?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ১৪</h1> <div class="iframe"><iframe src="https://www.youtube.com/embed/h1NDduhOOxg?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ১৫</h1> <div class="iframe"><iframe src="https://www.youtube.com/embed/yzUliJNKOY0?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ১৬</h1> <div class="iframe"><iframe src="https://www.youtube.com/embed/xhbh9p3Bk88?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ১৭</h1> <div class="iframe"><iframe src="https://www.youtube.com/embed/Ngm5aM9yDp0?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ১৮</h1> <div class="iframe"><iframe src="https://www.youtube.com/embed/VMYeuckJRpg?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ১৯</h1> <div class="iframe"><iframe src="https://www.youtube.com/embed/ZX2X_PtPvdQ?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ২০</h1> <div class="iframe"><iframe src="https://www.youtube.com/embed/ztQ7seBkPCY?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li></ul>';
                $(".list").replaceWith(rep_html);
                break;
                
            case "উইংসঅবফায়ার":
                 
                rep_html = '<ul class="list"><li> <h1 class="liname">পর্ব ১</h1> <div class="iframe"><iframe src="https://www.youtube.com/embed/8THdIjO_1JQ?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ২</h1> <div class="iframe"><iframe src="https://www.youtube.com/embed/SMqqS6mlSsU?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ৩</h1> <div class="iframe"><iframe src="https://www.youtube.com/embed/SMqqS6mlSsU?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li></ul>';
                $(".list").replaceWith(rep_html);
                break;
                
            case "যখনছোটছিলাম":
                 
                rep_html = '<ul class="list"><li> <h1 class="liname">পর্ব ১</h1> <div class="iframe"><iframe src="https://www.youtube.com/embed/0MR6p6fi5O8?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li></ul>';
                $(".list").replaceWith(rep_html);
                break;
                
            case "আনাফ্রাঙ্কেরডায়েরি":
                 
                rep_html = '<ul class="list"><li> <h1 class="liname">পর্ব ১</h1> <div class="iframe"><iframe   src="https://www.youtube.com/embed/9d72uCqJWpo?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ২</h1> <div class="iframe"><iframe   src="https://www.youtube.com/embed/uYDDEtuIjVM?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ৩</h1> <div class="iframe"><iframe   src="https://www.youtube.com/embed/xUXbigR1O-Y?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ৪</h1> <div class="iframe"><iframe  src="https://www.youtube.com/embed/7S7gd_0Ryao?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ৫</h1> <div class="iframe"><iframe   src="https://www.youtube.com/embed/YHNMm0J9q6k?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li></ul>';
                $(".list").replaceWith(rep_html);
                break;
                
            case "তিতুনিএবংতিতুনি":
                 
                 
                rep_html = '<ul class="list"><li> <h1 class="liname">পর্ব ১</h1> <div class="iframe"><iframe  src="https://www.youtube.com/embed/768Tl_qSzqE?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ২</h1> <div class="iframe"><iframe  src="https://www.youtube.com/embed/DRfOKN_sv_0?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ৩</h1> <div class="iframe"><iframe src="https://www.youtube.com/embed/O0xrrTs6JOM?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ৪</h1> <div class="iframe"><iframe src="https://www.youtube.com/embed/H3OJ2Ms22ec?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li></ul>';
                $(".list").replaceWith(rep_html);
                break;
                
            case "ক্রেনিয়াল":
                 
                 
                rep_html = '<ul class="list"><li> <h1 class="liname">পর্ব ১</h1> <div class="iframe"><iframe src="https://www.youtube.com/embed/Uh0UlSoZIug?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ২</h1> <div class="iframe"><iframe src="https://www.youtube.com/embed/F4swXIv47L8?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ৩</h1> <div class="iframe"><iframe src="https://www.youtube.com/embed/AG9l0NVO9kc?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li></ul>';
                $(".list").replaceWith(rep_html);
                break;
            
            case "গাব্বু":
                 
                 
                rep_html = '<ul class="list"><li> <h1 class="liname">পর্ব ১</h1> <div class="iframe"><iframe src="https://www.youtube.com/embed/vnErR3foXrI?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ২</h1> <div class="iframe"><iframe src="https://www.youtube.com/embed/8FL7URPh0Xg?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li></ul>';
                $(".list").replaceWith(rep_html);
                break;
                
            case "মহাজাগতিককিউরেটর":
                 
                 
                rep_html = '<ul class="list"><li> <h1 class="liname">পর্ব ১</h1> <div class="iframe"><iframe  src="https://www.youtube.com/embed/xwLVpCGDQx8?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li></ul>';
                $(".list").replaceWith(rep_html);
                break;
                
            case "সেরিনা":
                 
                 
                rep_html = '<ul class="list"><li> <h1 class="liname">পর্ব ১</h1> <div class="iframe"><iframe  src="https://www.youtube.com/embed/YUyQ23hFf34?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li></ul>';
                $(".list").replaceWith(rep_html);
                break;
                
            case "রামেরসুমতি":
                 
                 
                rep_html = '<ul class="list"><li> <h1 class="liname">পর্ব ১</h1> <div class="iframe"><iframe  src="https://www.youtube.com/embed/W8piquwQBwk?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li></ul>';
                $(".list").replaceWith(rep_html);
                break;
                
            case "রহস্যওআতঙ্কেরগল্প":
                 
                 
                rep_html = '<ul class="list"><li> <h1 class="liname">পর্ব ১</h1> <div class="iframe"><iframe  src="https://www.youtube.com/embed/71-GWCsE1eE?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li></ul>';
                $(".list").replaceWith(rep_html);
                break;
            
            case "ফটেং":
                 
                 
                rep_html = '<ul class="list"><li> <h1 class="liname">পর্ব ১</h1> <div class="iframe"><iframe src="https://www.youtube.com/embed/m9ylwy5dCp0?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li></ul>';
                $(".list").replaceWith(rep_html);
                break;
            
            case "আমারবন্ধুরাশেদ":
                 
                 
                rep_html = '<ul class="list"><li> <h1 class="liname">পর্ব ১</h1> <div class="iframe"><iframe  src="https://www.youtube.com/embed/I5LfhpXkjn8?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ২</h1> <div class="iframe"><iframe  src="https://www.youtube.com/embed/egWGBsv5YHQ?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ৩</h1> <div class="iframe"><iframe  src="https://www.youtube.com/embed/AG9l0NVO9kc?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ৪</h1> <div class="iframe"><iframe src="https://www.youtube.com/embed/6JdCXNV_s8U?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ৫</h1> <div class="iframe"><iframe src="https://www.youtube.com/embed/n5wfLQnJW9I?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ৬</h1> <div class="iframe"><iframe  src="https://www.youtube.com/embed/sQ02YmAyPeY?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ৭</h1> <div class="iframe"><iframe  src="https://www.youtube.com/embed/AykxGt83DVg?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ৮</h1> <div class="iframe"><iframe  src="https://www.youtube.com/embed/j9DmWCTZ7Fs?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ৯</h1> <div class="iframe"><iframe  src="https://www.youtube.com/embed/U7wxb1hXq8M?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ১০</h1> <div class="iframe"><iframe  src="https://www.youtube.com/embed/AJdFojrlJ3o?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ১১</h1> <div class="iframe"><iframe  src="https://www.youtube.com/embed/cjGln0WisAc?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ১২</h1> <div class="iframe"><iframe  src="https://www.youtube.com/embed/fqBs6fBwvSk?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ১৩</h1> <div class="iframe"><iframe  src="https://www.youtube.com/embed/Lofrlj3jWVk?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ১৪</h1> <div class="iframe"><iframe  src="https://www.youtube.com/embed/9ZrWZJlcTjY?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li></ul>';
                $(".list").replaceWith(rep_html);
                break;
            
            case "Allquiteonthewesternfront":
                 
                 
                rep_html = '<ul class="list"><li> <h1 class="liname">পর্ব ১</h1> <div class="iframe"><iframe src="https://www.youtube.com/embed/XnABOsfS_Yo?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ২</h1> <div class="iframe"><iframe src="https://www.youtube.com/embed/xaPKA6V4mmM?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ৩</h1> <div class="iframe"><iframe src="https://www.youtube.com/embed/gwIBgwjRZxI?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ৪</h1> <div class="iframe"><iframe src="https://www.youtube.com/embed/k3iqf5h7XDA?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ৫</h1> <div class="iframe"><iframe src="https://www.youtube.com/embed/zS5uEWX53ys?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ৬</h1> <div class="iframe"><iframe src="https://www.youtube.com/embed/iIomjo0F4Fw?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ৭</h1> <div class="iframe"><iframe src="https://www.youtube.com/embed/CjVNH8eOtDM?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ৮</h1> <div class="iframe"><iframe src="https://www.youtube.com/embed/KQdvFTSBx8o?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ৯</h1> <div class="iframe"><iframe src="https://www.youtube.com/embed/i42zbC_TTrk?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ১০</h1> <div class="iframe"><iframe src="https://www.youtube.com/embed/c11KNudrqKY?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ১১</h1> <div class="iframe"><iframe src="https://www.youtube.com/embed/0c22zoqEm_I?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ১২</h1> <div class="iframe"><iframe src="https://www.youtube.com/embed/LvjzFGSEvkk?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ১৩</h1> <div class="iframe"><iframe src="https://www.youtube.com/embed/aM-E7WDs1H8?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ১৪</h1> <div class="iframe"><iframe src="https://www.youtube.com/embed/guRU4h_wH4A?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ১৫</h1> <div class="iframe"><iframe src="https://www.youtube.com/embed/uXJ2xX7GUHY?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li></ul>';
                $(".list").replaceWith(rep_html);
                break;
               
            case 'BangladeshScienceSociety':
                 
                 
                rep_html = '<ul class="list"><li> <h1 class="liname">যে পাতা দুইটি ইতিহাস বদলে দিলো</h1> <div class="iframe"><iframe src="https://www.youtube.com/embed/9brIsrj43Vs?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">নাসার কিছু ব্যার্থ অভিযান পর্ব ১</h1> <div class="iframe"><iframe src="https://www.youtube.com/embed/TFecw0tLutQ?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">নাসার কিছু ব্যার্থ অভিযান পর্ব 2</h1> <div class="iframe"><iframe src="https://www.youtube.com/embed/48x7Ku7O8vA?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">নাসার কিছু ব্যার্থ অভিযান পর্ব 3</h1> <div class="iframe"><iframe src="https://www.youtube.com/embed/wN-xeWY6_2g?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">ডেঙ্গু ভ্যাকসিন</h1> <div class="iframe"><iframe src="https://www.youtube.com/embed/vkYT5rzU5rs?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">জন্ডিস নিয়ে যত কুসংস্কার</h1> <div class="iframe"><iframe src="https://www.youtube.com/embed/XNdV55FKOhA?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">ছোট ভাই বোনের সাথে স্থুলতার সম্পর্ক</h1> <div class="iframe"><iframe src="https://www.youtube.com/embed/2aH7ALFtigc?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">অ্যাসপিরিন</h1> <div class="iframe"><iframe src="https://www.youtube.com/embed/TbZzeo5OM7U?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">অসওয়াল্ড ভেব্লেন প্রাইজ শ্রুত</h1> <div class="iframe"><iframe src="https://www.youtube.com/embed/3SUIZXT0EnI?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">কার্ল আইনার হিলিভ শ্রুত</h1> <div class="iframe"><iframe src="https://www.youtube.com/embed/fE_GFE0jqBo?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">ডি মরগ্যান শ্রুত</h1> <div class="iframe"><iframe src="https://www.youtube.com/embed/X_LhVaHVndQ?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">রোনাল্ড মিচেল শ্রুত</h1> <div class="iframe"><iframe src="https://www.youtube.com/embed/Av2We0hPqV8?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">রোনাল্ড মিচেল শ্রুত</h1> <div class="iframe"><iframe src="https://www.youtube.com/embed/Av2We0hPqV8?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">শিক্ষণের মূল মন্ত্র শ্রুত</h1> <div class="iframe"><iframe src="https://www.youtube.com/embed/wJUy3Pa-wnI?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">সাইমিওন ডেনিস পয়সন শ্রুত</h1> <div class="iframe"><iframe src="https://www.youtube.com/embed/xvdzFI-IYbY?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li></ul>';
                $(".list").replaceWith(rep_html);
                break;
                
            

        }
}
