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


    //$(".navbar ul li").animate({top: '0em'},700);
    /*$(".book").hover(function(){
      let i=getcomputedvalue($(this),null).getPropertyValue("margin-left");
      alert(i);
      //$(".nav_border").animate({margin-left: ''})
    });*/

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
        let rep_html;
        //alert(book_title);
        
        switch(book_title){
                 
            case "ছোটদেরমুক্তিযুদ্ধেরইতিহাস":
                $(".book-description > h2").text("লেখক");
                $(".book-description > h3").text("মুহম্মদ জাফর ইকবাল");
                rep_html = '<li> <h1 class="liname"> পুরো পর্ব </h1> <div class="iframe"><iframe src="https://www.youtube.com/embed/VC3vKVAeDZw?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li>';
                $(".list > li").replaceWith(rep_html);
                break;
                
            case "বাংলারশ্রেষ্ঠসন্তানেরা":
                $(".book-description > h2").text("লেখিকাঃ");
                $(".book-description > h3").text("প্রফেসর ফিরোজা বেগম");
                rep_html = '<ul class="list"><li>                                 <h1 class="liname">বীরশ্রেষ্ঠ মোস্তফা কামালঃ-</h1>                                 <div class="iframe"><iframe src="https://www.youtube.com/embed/uZuzPrQ9X_w?&theme=dark&autohide=2&fs=0&rel=0"frameborder="0"></iframe></div>                             </li>                             <li>                                 <h1 class="liname">বীরশ্রেষ্ঠ মতিউর রহমান:-</h1>                                 <div class="iframe"><iframe   src="https://www.youtube.com/embed/u1thP64dhrk?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div>                             </li>                             <li>                                 <h1 class="liname">বীরশ্রেষ্ঠ নূর মোহাম্মদ:-</h1>                                 <div class="iframe"><iframe src="https://www.youtube.com/embed/Xjf6CO2bWW8?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div>                             </li>                             <li>                                 <h1 class="liname">বীরশ্রেষ্ঠ মোহাম্মদ রুহুল আমিন :-</h1>                                 <div class="iframe"><iframe src="https://www.youtube.com/embed/CpDdMNNkkck?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div>                             </li>                             <li>                                 <h1 class="liname">বীরশ্রেষ্ঠ মুন্সী আবদুর রউফ:-</h1>                                 <div class="iframe"><iframe src="https://www.youtube.com/embed/oUgsJSUHZlM?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div>                             </li>                             <li>                                 <h1 class="liname">বীরশ্রেষ্ঠ হামিদুর রহমান :-</h1>                                 <div class="iframe"><iframe src="https://www.youtube.com/embed/74hSM6rGwq4?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div>                             </li>                             <li>                                 <h1 class="liname">বীরশ্রেষ্ঠ জাহাঙ্গীর :-</h1>                                 <div class="iframe"><ifram src="https://www.youtube.com/embed/ctVFVaAmG7w?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div>                             </li></ul>';
                $(".list").replaceWith(rep_html);
                break;
                
            case "একাত্তরেরচিঠি":
                $(".book-description > h2").text("লেখিকাঃ");
                $(".book-description > h3").text("N/A");
                rep_html = '<ul class="list"><li> <h1 class="liname">চিঠি ১</h1> <div class="iframe"><iframe src="https://www.youtube.com/embed/uZuzPrQ9X_w?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li></ul>';
                $(".list").replaceWith(rep_html);
                break;
                
            case "একাত্তরেরদিনগুলি":
                $(".book-description > h2").text("লেখিকাঃ");
                $(".book-description > h3").text("জাহানারা ইমাম");
                rep_html = '<ul class="list"><li> <h1 class="liname">পর্ব ১</h1> <div class="iframe"><iframe  src="https://www.youtube.com/embed/_zuIO2BWdkc?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ২</h1> <div class="iframe"><iframe  src="https://www.youtube.com/embed/hWSyrlWDlIw?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ৩</h1> <div class="iframe"><iframe  src="https://www.youtube.com/embed/65cFfwQqeLo?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ৪</h1> <div class="iframe"><iframe  src="https://www.youtube.com/embed/6u6W1e3mE2M?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li></ul>';
                $(".list").replaceWith(rep_html);
                break;
                
            case "একাত্তরএবংআমারবাবা":
                $(".book-description > h2").text("লেখিকাঃ");
                $(".book-description > h3").text("জাহানারা ইমাম");
                rep_html = '<ul class="list"><li> <h1 class="liname">পর্ব ১</h1> <div class="iframe"><iframe  src="https://www.youtube.com/embed/gDq81JMdwSs?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ২</h1> <div class="iframe"><iframe  src="https://www.youtube.com/embed/sphqbxF90bc?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ৩</h1> <div class="iframe"><iframe  src="https://www.youtube.com/embed/IP2IXF6UmO4?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ৪</h1> <div class="iframe"><iframe  src="https://www.youtube.com/embed/TSUPFGkJ8tI?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ৫</h1> <div class="iframe"><iframe  src="https://www.youtube.com/embed/lKnxZicW3uE?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ৬</h1> <div class="iframe"><iframe  src="https://www.youtube.com/embed/Su8O5ldsrE8?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ৭</h1> <div class="iframe"><iframe  src="https://www.youtube.com/embed/olcgxdS4pB8?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ৮</h1> <div class="iframe"><iframe  src="https://www.youtube.com/embed/0GpyeTD6HrU?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ৯</h1> <div class="iframe"><iframe  src="https://www.youtube.com/embed/7dOnv_hnTG8?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ১০</h1> <div class="iframe"><iframe  src="https://www.youtube.com/embed/8Qkl6hiWAf4?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li></ul>';
                $(".list").replaceWith(rep_html);
                break;
                
            case "উইংসঅবফায়ার":
                $(".book-description > h2").text("লেখিকাঃ");
                $(".book-description > h3").text("জাহানারা ইমাম");
                rep_html = '<ul class="list"><li> <h1 class="liname">পর্ব ১</h1> <div class="iframe"><iframe src="https://www.youtube.com/embed/8THdIjO_1JQ?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ২</h1> <div class="iframe"><iframe src="https://www.youtube.com/embed/SMqqS6mlSsU?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ৩</h1> <div class="iframe"><iframe src="https://www.youtube.com/embed/SMqqS6mlSsU?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li></ul>';
                $(".list").replaceWith(rep_html);
                break;
                
            case "যখনছোটছিলাম":
                $(".book-description > h2").text("লেখিকাঃ");
                $(".book-description > h3").text("জাহানারা ইমাম");
                rep_html = '<ul class="list"><li> <h1 class="liname">পর্ব ১</h1> <div class="iframe"><iframe src="https://www.youtube.com/embed/0MR6p6fi5O8?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li></ul>';
                $(".list").replaceWith(rep_html);
                break;
                
            case "আনাফ্রাঙ্কেরডায়েরি":
                $(".book-description > h2").text("লেখিকাঃ");
                $(".book-description > h3").text("জাহানারা ইমাম");
                rep_html = '<ul class="list"><li> <h1 class="liname">পর্ব ১</h1> <div class="iframe"><iframe   src="https://www.youtube.com/embed/9d72uCqJWpo?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ২</h1> <div class="iframe"><iframe   src="https://www.youtube.com/embed/uYDDEtuIjVM?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ৩</h1> <div class="iframe"><iframe   src="https://www.youtube.com/embed/xUXbigR1O-Y?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ৪</h1> <div class="iframe"><iframe  src="https://www.youtube.com/embed/7S7gd_0Ryao?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ৫</h1> <div class="iframe"><iframe   src="https://www.youtube.com/embed/YHNMm0J9q6k?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li></ul>';
                $(".list").replaceWith(rep_html);
                break;
                
            case "তিতুনিএবংতিতুনি":
                $(".book-description > h2").text("লেখক");
                $(".book-description > h3").text("মুহম্মদ জাফর ইকবাল");
                rep_html = '<ul class="list"><li> <h1 class="liname">পর্ব ১</h1> <div class="iframe"><iframe  src="https://www.youtube.com/embed/768Tl_qSzqE?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ২</h1> <div class="iframe"><iframe  src="https://www.youtube.com/embed/DRfOKN_sv_0?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ৩</h1> <div class="iframe"><iframe src="https://www.youtube.com/embed/O0xrrTs6JOM?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ৪</h1> <div class="iframe"><iframe src="https://www.youtube.com/embed/H3OJ2Ms22ec?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li></ul>';
                $(".list").replaceWith(rep_html);
                break;
                
            case "ক্রেনিয়াল":
                $(".book-description > h2").text("লেখক");
                $(".book-description > h3").text("মুহম্মদ জাফর ইকবাল");
                rep_html = '<ul class="list"><li> <h1 class="liname">পর্ব ১</h1> <div class="iframe"><iframe src="https://www.youtube.com/embed/Uh0UlSoZIug?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ২</h1> <div class="iframe"><iframe src="https://www.youtube.com/embed/F4swXIv47L8?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ৩</h1> <div class="iframe"><iframe src="https://www.youtube.com/embed/AG9l0NVO9kc?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li></ul>';
                $(".list").replaceWith(rep_html);
                break;
            
            case "গাব্বু":
                $(".book-description > h2").text("লেখিকাঃ");
                $(".book-description > h3").text("মুহম্মদ জাফর ইকবাল");
                rep_html = '<ul class="list"><li> <h1 class="liname">পর্ব ১</h1> <div class="iframe"><iframe src="https://www.youtube.com/embed/vnErR3foXrI?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ২</h1> <div class="iframe"><iframe src="https://www.youtube.com/embed/8FL7URPh0Xg?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li></ul>';
                $(".list").replaceWith(rep_html);
                break;
                
            case "মহাজাগতিককিউরেটর":
                $(".book-description > h2").text("লেখিকাঃ");
                $(".book-description > h3").text("মুহম্মদ জাফর ইকবাল");
                rep_html = '<ul class="list"><li> <h1 class="liname">পর্ব ১</h1> <div class="iframe"><iframe  src="https://www.youtube.com/embed/xwLVpCGDQx8?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li></ul>';
                $(".list").replaceWith(rep_html);
                break;
                
            case "সেরিনা":
                $(".book-description > h2").text("লেখিকাঃ");
                $(".book-description > h3").text("মুহম্মদ জাফর ইকবাল");
                rep_html = '<ul class="list"><li> <h1 class="liname">পর্ব ১</h1> <div class="iframe"><iframe  src="https://www.youtube.com/embed/YUyQ23hFf34?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li></ul>';
                $(".list").replaceWith(rep_html);
                break;
                
            case "রামেরসুমতি":
                $(".book-description > h2").text("লেখিকাঃ");
                $(".book-description > h3").text("মুহম্মদ জাফর ইকবাল");
                rep_html = '<ul class="list"><li> <h1 class="liname">পর্ব ১</h1> <div class="iframe"><iframe  src="https://www.youtube.com/embed/W8piquwQBwk?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li></ul>';
                $(".list").replaceWith(rep_html);
                break;
                
            case "রহস্যওআতঙ্কেরগল্প":
                $(".book-description > h2").text("লেখিকাঃ");
                $(".book-description > h3").text("মুহম্মদ জাফর ইকবাল");
                rep_html = '<ul class="list"><li> <h1 class="liname">পর্ব ১</h1> <div class="iframe"><iframe  src="https://www.youtube.com/embed/71-GWCsE1eE?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li></ul>';
                $(".list").replaceWith(rep_html);
                break;
            
            case "ফটেং":
                $(".book-description > h2").text("লেখিকাঃ");
                $(".book-description > h3").text("মুহম্মদ জাফর ইকবাল");
                rep_html = '<ul class="list"><iframe src="https://www.youtube.com/embed/m9ylwy5dCp0?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></ul>';
                $(".list").replaceWith(rep_html);
                break;
            
            case "আমারবন্ধুরাশেদ":
                $(".book-description > h2").text("লেখিকাঃ");
                $(".book-description > h3").text("মুহম্মদ জাফর ইকবাল");
                rep_html = '<ul class="list"><li> <h1 class="liname">পর্ব ১</h1> <div class="iframe"><iframe  src="https://www.youtube.com/embed/I5LfhpXkjn8?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ২</h1> <div class="iframe"><iframe  src="https://www.youtube.com/embed/egWGBsv5YHQ?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ৩</h1> <div class="iframe"><iframe  src="https://www.youtube.com/embed/AG9l0NVO9kc?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ৪</h1> <div class="iframe"><iframe src="https://www.youtube.com/embed/6JdCXNV_s8U?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ৫</h1> <div class="iframe"><iframe src="https://www.youtube.com/embed/n5wfLQnJW9I?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ৬</h1> <div class="iframe"><iframe  src="https://www.youtube.com/embed/sQ02YmAyPeY?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ৭</h1> <div class="iframe"><iframe  src="https://www.youtube.com/embed/AykxGt83DVg?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ৮</h1> <div class="iframe"><iframe  src="https://www.youtube.com/embed/j9DmWCTZ7Fs?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ৯</h1> <div class="iframe"><iframe  src="https://www.youtube.com/embed/U7wxb1hXq8M?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ১০</h1> <div class="iframe"><iframe  src="https://www.youtube.com/embed/AJdFojrlJ3o?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ১১</h1> <div class="iframe"><iframe  src="https://www.youtube.com/embed/cjGln0WisAc?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ১২</h1> <div class="iframe"><iframe  src="https://www.youtube.com/embed/fqBs6fBwvSk?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ১৩</h1> <div class="iframe"><iframe  src="https://www.youtube.com/embed/Lofrlj3jWVk?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li> <li> <h1 class="liname">পর্ব ১৪</h1> <div class="iframe"><iframe  src="https://www.youtube.com/embed/9ZrWZJlcTjY?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li></ul>';
                $(".list").replaceWith(rep_html);
                break;
            
            case "":
                $(".book-description > h2").text("লেখিকাঃ");
                $(".book-description > h3").text("মুহম্মদ জাফর ইকবাল");
                rep_html = '<ul class="list"><li> <h1 class="liname">পর্ব ১</h1> <div class="iframe"><iframe src="https://www.youtube.com/embed/XnABOsfS_Yo?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li></ul>';
                $(".list").replaceWith(rep_html);
                break;

        }
        /*if(book_title == "ছোটদেরমুক্তিযুদ্ধেরইতিহাস" ){}
            
            rep_html = '<li> <h1 class="liname">পর্ব ১</h1> <div class="iframe"><iframe width="200" height="500" src="https://www.youtube.com/embed/VC3vKVAeDZw?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li>';
            $(".list > li").replaceWith(rep_html);
            
        };*/
                     
        
        
        
    })
    
    
    
    
    
    
    
    
    
    
    $(".gg").text("sdshfvshvdfhjsdfhsdvfdsvfdfjhsdfjhdsafbfjkswbfksd hsvdfudsy");
    
    console.log("dhfvhdvfhd");
        
        $(".button2").click(function(){
            console.log("button0");
            let convert0 = document.getElementById("convert").value;
            convert0= '<li> <h1 class="liname">পর্ব ১</h1> <div class="iframe"><iframe src="' + convert0 + '?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"frameborder="0"></iframe></div> </li>';
            console.log(convert0);
        });
    
        $(".button1").click(function(){
            alert("done");
            var convert = document.getElementById("convert").value;
            convert = convert.replace(/\r?\n/g, '');
            //convert = convert.replace("width=\'500\' height=\'294\'")
            //convert= convert.replace("width=", '');
            //convert = convert.replace("height=", '');
            //convert= convert.replace("'500'", '');
            //convert= convert.replace("'294'", '');
            //console.log(convert);
            $(".gg").text(convert);
        })
    
    
    
    
    
    
    
    
    
    

})
