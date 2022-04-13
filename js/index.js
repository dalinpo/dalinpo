$(document).ready(function () {
    // 載入組件
    let headermenu = $('#header_meun');
    let footer = $('#footer');
    axios.get('./components/header_meun.html').then(function (res) {
        headermenu.html(res.data)
        togglelist();
    })
    axios.get('./components/footer.html').then(function (res) {
        footer.html(res.data)
        footerscroll();

    });

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

    function windowsize() {
        if ($(window).width() < 991) {
            $('.menu').addClass('menunavbar');
            $('.dropdown').css("display", "none");
        } else {
            $('.menu').removeClass('menunavbar');
            $('.dropdown').removeAttr("style");
        }

        if ($(window).width() < 1199 || $(window).width() < 767) {
            var minimized_elements = $('.food_contet_open');
            var max_str_length = 40;
            var max_found_index = 0;
            $('.food_contet_open').html()
            minimized_elements.each(function () {
                var t = $(this).text();
                $(this).html(t.slice(0, max_str_length));
            });
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




    $('.banner').slick({
        dots: false,
        fade: true,
        cssEase: 'linear',
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 2000,
        adaptiveHeight: true,
        appendArrows: false
    });

    $('.Food_row').slick({
        slidesToShow: 3,
        centerPadding: '120px',
        autoplay: true,
        infinite: true,
        speed: 1000,
        dots: false,
        useCSS: false,
        nextArrow: jQuery('.Food_leftdouble'),
        prevArrow: jQuery('.Food_rightdouble'),
        centerMode: true,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '0px',
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '0px',
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    centerPadding: '0px',
                }
            },
        ]
    });
    $('.responsive').slick({
        lazyLoad: 'ondemand',
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 2000,
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
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.responsives').slick({
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 2000,
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
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    // 關於大林浦
    $('.about_dalinpo_row').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        nextArrow: false,
        prevArrow: false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      });
    // 您好大林蒲
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        autoplay: true,
        infinite: true,
        speed: 1000,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        focusOnSelect: true,
        autoplay: true,
        infinite: true,
        speed: 1000,
        asNavFor: '.slider-for',
        dots: false,
        nextArrow: false,
        prevArrow: false,
        centerMode: false,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    });



    // loading
    var percent = 0;
    var timer = setInterval(function () {
        $('#app').addClass('complete');
        $('#audio').play();

        setTimeout(eatCount, 500)
    }, 4000)
    function eatCount() {
        $('#app').css('display', 'none');
   
    }

    $('.about_section2').mousemove(function (evt) {
        var pageY = evt.pageY;
        var pageX = evt.pageX;
        var scrollx = pageX - $('.about_section2').offset().left;
        var scrolly = pageY - $('.about_section2').offset().top;
        $('.section_cloud1').css("transform", "translateX(" + (scrolly / 25) + "px)");
        $('.section_cloud2').css("transform", "translateX(" + (scrolly / 20) + "px)");
        $('.section_cloud3').css("transform", "translateX(" + (scrolly / -20) + "px)");
    })
    $('.section1').mousemove(function (e) {
        var pageY = e.pageY;
        var pageX = e.pageX;
        var index_scrollx = pageX - $('.section1').offset().left;
        var index_scrolly = pageY - $('.section1').offset().top;
        $('.cloud_content_p1').css("transform", "translateX(" + (index_scrolly / 25) + "px)");
        $('.cloud_content_p2').css("transform", "translateX(" + (index_scrolly / 20) + "px)");
        $('.cloud_content_p3').css("transform", "translateX(" + (index_scrolly / -20) + "px)");
    })
});




// 視差滾動動畫
let tl = gsap.timeline({
    ease: Circ.easeOut,
    duration: 0.3,
    scrollTrigger: {
        trigger: '.top_cloud_1',
        start: "top center",
        end: "+=600"
    }
})
tl.from(".top_cloud_1", { x: -100, opacity: 0 })
    .from(".top_cloud_2", { x: 100, opacity: 0 }, "-=0.5")
    .from(".titleh1", { y: 100, opacity: 0 })
    .from(".content_h3", { y: 100, opacity: 0 })
    .from(".cloud_content_p1", { x: -100, opacity: 0 })
    .from(".cloud_content_p2", { x: 100, opacity: 0 }, "-=0.5")
    .from(".cloud_content_p3", { x: -100, opacity: 0 })

let t2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.sectioncontent',
        start: "top center",
        end: "+=600"
    }
})
t2.from(".c_title_en1", { x: -50, opacity: 0 })
    .from(".title1_tw1", { x: -50, opacity: 0 })
    .from(".wrappersss", { y: 100, opacity: 0 })

let t3 = gsap.timeline({
    ease: Circ.easeOut,
    scrollTrigger: {
        trigger: '#section2',
        start: "top center",
        end: "+=600"
    }
})
t3.from(".c_title_en2", { x: 50, opacity: 0 })
    .from(".title1_tw_left2", { x: 50, opacity: 0 })
    .from(".wrappers", { y: 50, opacity: 0 })



let t4 = gsap.timeline({
    scrollTrigger: {
        trigger: '.c_title_en3',
        start: "top center",
        end: "+=600"
    }
})
t4.from(".c_title_en3", { x: -50, opacity: 0, duration: 0.3 })
    .from(".title1_tw3", { x: -50, opacity: 0, duration: 0.3 })
    .from(".Food_row", { opacity: 0 })


let t5 = gsap.timeline({
    duration: 0.3,
    ease: Circ.easeOut,
    scrollTrigger: {
        trigger: '.c_title_en4',
        start: "bottom center",
        end: "+=100",
    }
})
t5.from(".c_title_en4", { x: -50, opacity: 0 })
    .from(".title1_tw4", { x: -50, opacity: 0 })
    .from(".card_content", { y: 50, opacity: 0 })


gsap.registerPlugin(ScrollTrigger);
let start = { val: 0 };
gsap.utils.toArray('.about_number').forEach((label) => {
    start.val = 0;
    gsap.to(start, {
        duration: 3,
        scrollTrigger: {
            trigger: label,
            toggleActions: "play none none none",
            start: "top center",
            // markers: true,
        },
        val: label.dataset.end,
        onUpdate: (() => {
            label.innerHTML = Math.floor(Number(start.val))
        })
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
t6.from(".about_h4_title", { y: 50, opacity: 0 })
    .from(".about_content", { y: 50, opacity: 0 })

let t7 = gsap.timeline({
    scrollTrigger: {
        trigger: '.about_section2',
        start: "top center",
        end: "+=700",
        // markers: true,
    }
})
t7.from(".about_section2_title", { y: 50, opacity: 0, duration: 0.5 })
    .from(".about_h3", { y: 50, opacity: 0, duration: 0.5 })
    .from(".scroll_out_team", { y: 50, opacity: 0, duration: 0.5 })

let ferry = gsap.timeline({
    scrollTrigger: {
        trigger: '.section2',
        start: "top center",
        end: "+=1200",
        scrub: true,
    }
})
ferry.from(".ferry", { x: 1500, opacity: 0 })

function footerscroll() {
    let footer = gsap.timeline({
        ease: Back.inOut,
        scrollTrigger: {
            trigger: '.footercontent',
            start: "-=500 center",
            end: "+=300",
            scrub: true,
        }
    })
    footer.from(".footer_cloud", { x: -50, opacity: 0 }, "-=0.5")
        .from(".footer_people", { y: 50, opacity: 0 })
}

let aboutdalinpo1 = gsap.timeline({
    ease: Back.inOut,
    scrollTrigger: {
        trigger: '.about_dalinpo1',
        start: "top center",
        end: "+=500",
    }
})
aboutdalinpo1.from(".about_dalinpo_title", { x: -100, opacity: 0 })
    .from(".about_dalinpo_content1", { x: -100, opacity: 0 })
    .from(".about_dalinpo_cloud2", { x: 100, opacity: 0 })
    .from(".about_dalinpo_cloud1", { x: 100, opacity: 0 })

let aboutdalinpo2 = gsap.timeline({
    ease: Back.inOut,
    scrollTrigger: {
        trigger: '.about_dalinpo2',
        start: "top center",
        end: "+=500",
        // markers: true,
    }
})
aboutdalinpo2.from(".about_dalinpo_img1", { y: 100, opacity: 0 })
    .from(".about_dalinpo_content2", { y: 100, opacity: 0 })
    .from(".about_dalinpo_row", { y: 210, opacity: 0 })


let about_dalinpo3 = gsap.timeline({
    ease: Back.inOut,
    scrollTrigger: {
        trigger: '.about_dalinpo3',
        start: "top center",
        end: "+=500",
    }
})
about_dalinpo3.from(".about_dalinpo3_content", { y: -220, opacity: 0 })

let founding_section1 = gsap.timeline({
    ease: Back.inOut,
    scrollTrigger: {
        trigger: '.founding_section1',
        start: "top center",
        end: "+=500",
    }
})
founding_section1.from(".port_content", { y: 100, opacity: 0 })

let stroytiemline = gsap.timeline({
    ease: Back.inOut,
    scrollTrigger: {
        trigger: '.storycontent',
        start: "top center",
        end: "+=500",
    }
})
stroytiemline.from(".stroy_img", { y: 100, opacity: 0 })

// 響食記
var Food_content_img = document.getElementsByClassName("Food_content_img")
var food_title = document.getElementsByClassName('food_title');

for (var i = 0; i < Food_content_img.length; i++) {
    Food_content_img[i].addEventListener('click', showComment, false);
}

function showComment() {
    var food_title = this.children[1].children[0].children[0].innerText;
    var food_img = this.children[0].getAttribute("src");
    var food_contetn = this.children[1].children[0].children[3].innerHTML;
    var sw = new Food_Popup();
    sw.open(food_title, food_img, food_contetn);
    var master = gsap.timeline();
    master.from(".food_mid", { opacity: 0, scale: 0.2, ease: "expo.out" })
        .from('.food_content', { x: -100, opacity: 0, ease: "power4.out" })
        .from('.food_img', { x: 100, opacity: 0, ease: "power4.out" })
}

// 課程花絮
var ishover = document.getElementsByClassName("is-hover")
for (var i = 0; i < ishover.length; i++) {
    ishover[i].addEventListener('click', showTrivia, false);
}
function showTrivia() {
    var trivia = new Trivia();
    var Triviatitle = this.children[2].innerText;
    var iframe = this.children[3].getAttribute("src");
    trivia.trivia_open(Triviatitle, iframe);
    var iframe_master = gsap.timeline();
    iframe_master.from(".food_bg", { opacity: 0, scale: 0.2, ease: "power4.out" })
        .from(".trivia_h4", { opacity: 0, scale: 0.2, ease: "power4.out" })
        .from(".trivia_mid>iframe", { opacity: 0, rotate: 360, scale: 0.2, ease: "power4.out" })
}

// 課程花絮
var stroy_round = document.getElementsByClassName("stroy_round")
for (var i = 0; i < stroy_round.length; i++) {
    stroy_round[i].addEventListener('click', showstroy_round);
}
function showstroy_round() {
    var stroy = new Trivia();
    var stroy_round = this.children[0].innerText;
    var stroyiframe = this.children[1].getAttribute("src");
    stroy.trivia_open(stroy_round, stroyiframe);
    iframe_master.from(".food_bg", { opacity: 0, scale: 0.2, ease: "power4.out" })
        .from(".trivia_h4", { opacity: 0, scale: 0.2, ease: "power4.out" })
        .from(".trivia_mid>iframe", { opacity: 0, rotate: 360, scale: 0.2, ease: "power4.out" })


}

