$(document).ready(function () {
    function togglelist() {
        $('.menubar').click(function () {
            $(this).toggleClass('open');
            $('body').toggleClass('body-overflow');
            $('.menu').toggleClass('menunavbaroverflow');
            $('.togglelist').toggleClass('bodyoverflow');
            if ($('body').hasClass('body-overflow')) {
                $('body').removeAttr("style");
            } else {
                $('body').css("overflow", "hidden");
            }
        });
    }
    togglelist();

    function windowsize() {
        if ($(window).width() < 991) {
            $('.menu').addClass('menunavbar');
            $('.dropdown').css("display", "none");
        } else {
            $('.menu').removeClass('menunavbar');
            $('.dropdown').removeAttr("style");
        }
    }
    $(window).resize(function () {
        windowsize();
    });
    windowsize();

    function hasclass() {
        var hasChildMenu = $('.hasclass').find('li:has(ul)');
        hasChildMenu.children('a').after('<span class="btn-submenu">+</span>');
        $(document).on('click', '.btn-submenu', function (e) {
            $(this).toggleClass('active').next('ul').slideToggle(300);
            e.stopImmediatePropagation();
        });
    }
    hasclass();

    $('.your-class').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 2000,
        adaptiveHeight: true,
        appendArrows: false
    });

    $('.responsive').slick({
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: jQuery('.nextwrapper'),
        prevArrow: jQuery('.prevwrapper'),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    });
    $('.responsives').slick({
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: jQuery('.next'),
        prevArrow: jQuery('.prev'),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    });
    // 載入組件
    let headermenu = $('#header_meun');
    let footer = $('#footer');
    axios.get('./components/header_meun.html').then(function (res) {
        headermenu.html(res.data)
    })
    axios.get('./components/footer.html').then(function (res) {
        footer.html(res.data)
    });
    // loading
    var percent = 0;
    var timer = setInterval(function () {
        $('#app').addClass('complete');
        setTimeout(eatCount, 500)
    }, 3100)
    function eatCount() {
        $('#app').css('display', 'none')
    }

    $('.about_section2').mousemove(function(evt){
        var pageY = evt.pageY;
        var pageX = evt.pageX;
        var scrollx = pageX-$('.about_section2').offset().left;
        var scrolly = pageY-$('.about_section2').offset().top;
        $('.section_cloud1').css("transform","translateX("+ (scrolly/25) +"px)");
        $('.section_cloud2').css("transform","translateX("+ (scrolly/20) +"px)");
        $('.section_cloud3').css("transform","translateX("+ (scrolly/-20) +"px)");
    })
    $('.section1').mousemove(function(e){
        var pageY = e.pageY;
        var pageX = e.pageX;
        var index_scrollx = pageX-$('.section1').offset().left;
        var index_scrolly = pageY-$('.section1').offset().top;
        $('.cloud_content_p1').css("transform","translateX("+ (index_scrolly/25) +"px)");
        $('.cloud_content_p2').css("transform","translateX("+ (index_scrolly/20) +"px)");
        $('.cloud_content_p3').css("transform","translateX("+ (index_scrolly/-20) +"px)");
    })
});
// 視差滾動動畫
let tl = gsap.timeline({
    ease:Circ.easeOut,
    duration: 0.5,
    scrollTrigger: {
        trigger: '.top_cloud_1',
        start: "top center",
        end: "+=600"
    }
})
tl.from(".top_cloud_1", { x: -200, opacity: 0  })
    .from(".top_cloud_2", { x: 200, opacity: 0}, "-=0.5")
    .from(".titleh1", { y: 200, opacity: 0})
    .from(".content_h3", { y: 200, opacity: 0})

let t2 = gsap.timeline({
    ease:Circ.easeOut,
    duration: 0.3,
    scrollTrigger: {
        trigger: '.c_title_en1',
        start: "top center",
        end: "+=600"
    }
})
t2.from(".c_title_en1", { x: -100, opacity: 0})
    .from(".title1_tw1", { x: -100, opacity: 0})
    .from(".wrappersss", { y: 100, opacity: 0})
    .from(".c_title_en2", { x: 100, opacity: 0})
    .from(".title1_tw_left2", { x: 100, opacity: 0})
    .from(".wrappers", { y: 100, opacity: 0})


let t4 = gsap.timeline({
    scrollTrigger: {
        trigger: '.c_title_en3',
        start: "top center",
        end: "+=600"
    }
})
t4.from(".c_title_en3", { x: -100, opacity: 0,duration: 0.3})
    .from(".title1_tw3", { x: -100, opacity: 0,duration: 0.3})
    .from(".Food_img1", { scale: 0.3, rotation: 360, opacity: 0,duration: 0.3})
    .from(".Food_img2", { scale: 0.3, rotation: 360, opacity: 0,duration: 0.3})
    .from(".Food_img3", { scale: 0.3, rotation: 360, opacity: 0,duration: 0.3})


let t5 = gsap.timeline({
    duration: 0.3,
    ease:Circ.easeOut,
    scrollTrigger: {
        trigger: '.c_title_en4',
        start: "bottom center",
        end: "+=100",

    }
})
t5.from(".c_title_en4", { x: -100, opacity: 0})
    .from(".title1_tw4", { x: -100, opacity: 0})
    .from(".card_content", { y: 100, opacity: 0})



gsap.registerPlugin(ScrollTrigger);
let start = { val: 0 };
gsap.utils.toArray('.about_number').forEach( (label) => {
    start.val = 0;
    gsap.to( start, {
    duration: 3,

    scrollTrigger: {
        trigger: label,
        toggleActions: "play none none none",
        start: "top center",
        // markers: true,
    },
    val: label.dataset.end,
    onUpdate: (()=>{
        label.innerHTML=Math.floor( Number( start.val ) ) 
    } )
    });
});
let t6 = gsap.timeline({
    scrollTrigger: {
        trigger: '.about_section1',
        start: "top center",
        end: "+=600",
        // markers: true,
    }
})
t6.from(".about_content", { y: 100, opacity: 0, duration: 1 })

let t7 = gsap.timeline({
    scrollTrigger: {
        trigger: '.about_section2',
        start: "top center",
        end: "+=700",
        // markers: true,
    }
})
t7.from(".about_section2_title", { y: 100, opacity: 0, duration: 0.5 })
    .from(".about_h3", { y: 100, opacity: 0, duration: 0.5 })
    .from(".scroll_out_team", { y: 100, opacity: 0, duration: 0.5 })









