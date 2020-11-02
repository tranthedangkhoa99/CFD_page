let menuIcon = document.querySelector(".menu-icon");
let closeIcon = document.querySelector(".button__close");
let featureProjects = document.querySelector(".feature-projects");
let closeProjects = document.querySelector(".btn-close-projects");
let openProjects = document.querySelector(".btn-view-all");
let headerBg = document.querySelector(".header-bg");

// function hoverItem(item) {
//     let tlIntroHover = new TimelineMax(),
//         svWrap = $('.intro-services'),
//         itemsv = $('.item', svWrap),
//         maskWrap = $('.mask'),
//         wItem = itemsv.outerWidth(),
//         hItem = itemsv.outerHeight(),
//         svgmask = $('.svgmask'),
//         mask = $('mask', maskWrap)
//     var _this = item,
//         offset = _this.offset(),
//         top = offset.top,
//         left = offset.left,
//         index = _this.index() + 1;
//     if (itemsv.hasClass('isShowContent')) {
//         return false;
//     }
//     mask.removeClass('active');
//     $('.mask mask.m' + index).addClass('active');
//     itemsv.removeClass('active');
//     _this.addClass('active');
//     tlIntroHover.add(
//         TweenMax.to(rect, 0, {
//             width: wItem,
//             height: hItem,
//             x: left,
//             y: top,
//             attr: {
//                 rx: "0%",
//                 ry: "0%"
//             },
//             ease: Power4.easeOut
//         })
//     );
// }

// hero carousel
var options = {
    cellAlign: 'left',
    contain: true,
    adaptiveHeight: true,
    prevNextButtons: false,
    draggable: '>1',
    pageDots: false,
    freeScroll: false,
    // wrapAround: true,
    lazyLoad: 2,
    selectedAttraction: 0.004,
    friction: 0.11,
    percentPosition: false,
    // autoPlay: 5000,
    imagesLoaded: true,
    arrowShape: {
        x0: 10,
        x1: 60,
        y1: 50,
        x2: 60,
        y2: 45,
        x3: 15
    }
};

var carousel = document.querySelector('[data-carousel]');
var slides = document.getElementsByClassName('carousel-cell');
var flkty = new Flickity(carousel, options);

// var flkty = new Flickity( '.carousel', {
//     on: {
//         ready: function() {
//             console.log('Flickity is ready');
//         },
//         change: function( index ) {
//             console.log( 'Slide changed to' + index );
//         }
//     }
// });

flkty.on('scroll', function () {
    flkty.slides.forEach(function (slide, i) {
        var image = slides[i];
        var x = (slide.target + flkty.x) * -1 / 3;
        image.style.backgroundPosition = x + 'px';
    });
});

flkty.on('change', function (index) {
    let elm = $(`.ct-index${index}`)
    $(`.slider .inner`).removeClass("active")
    elm.addClass("active")
});

var nextButton = document.querySelector('.button__next');
nextButton.addEventListener( 'click', function() {
    flkty.next();
});
var prevButton = document.querySelector('.button__prev');
prevButton.addEventListener( 'click', function() {
    flkty.previous();
});
let cc = document.querySelector(".carousel-cell");
if (cc.classList.contains('is-selected')){
}

//projects carousel//

var pjCarousel = document.querySelector('.projects-carousel');
var flkty2 = new Flickity( pjCarousel, {
    cellAlign: 'left',
    contain: true,
    adaptiveHeight: true,
    prevNextButtons: false,
    draggable: '>1',
    pageDots: false,
    freeScroll: false,
    // wrapAround: true,
    lazyLoad: 2,
    selectedAttraction: 0.004,
    friction: 0.11,
    percentPosition: false,
    // autoPlay: 5000,
    imagesLoaded: true,
});

var flkty2 = new Flickity( '.projects-carousel', {
    // options
});


// smooth scroll

function smoothScroll(){
    const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        // offset: ["5%", '20%']
    });
    scroll.on('scroll', (obj) => {
        // console.log(obj.scroll.y)
        if(obj.scroll.y > 200){
            headerBg.classList.add("slidebg");
        }
        else if(obj.scroll.y < 200){
            headerBg.classList.remove("slidebg");
        }
    });
}

// nav-expand
var timeline = new TimelineMax();
function navExpand() {
    timeline
        .add(TweenMax.to(".logo #logo", 0.8 ,{
                fill: "black"
            }, ))
        .add(TweenMax.fromTo(".expand-nav", 1 ,{
                y: "-100%",
                ease: Power4.easeInOut
            },
            {
                y:"0%",
                ease: Power4.easeInOut
            }), "0.1")
        .add(TweenMax.fromTo(".menu-icon", 0.8 ,{
                autoAlpha:1
            },
            {
                autoAlpha:0
            }), "-0.2")
        .add(TweenMax.fromTo(".logo",1 ,{
            css:{
                left: '50%'
                },
                ease: Power4.easeInOut
             },
            {
                css:{
                    left: "5%",
                },
                ease: Power4.easeInOut
            }), "0.01")
        .add(TweenMax.fromTo(".bg__lang",1 ,{
                y: -100,
                ease: Power4.easeInOut
            },
            {
                y:0,
                ease: Power4.easeInOut
            }), "0.2")
        .add(TweenMax.fromTo(".stagger", 0.5, {
            autoAlpha: 0,
            y: "-20px"
        }, {
            autoAlpha: 1,
            y: "0px"
        },), "1")
        .add(TweenMax.fromTo(".nav__close",1.5 ,{
                scaleX:0,
                ease: Power4.easeInOut
            },
            {
                scaleX:1,
                ease: Power4.easeInOut
            }),"0.1")
    timeline.reverse();
}

menuIcon.addEventListener("click", function (e){
    e.stopPropagation();
    if (!timeline.isActive()) {
        timeline.reversed() ? timeline.restart().timeScale(1) : timeline.reverse().timeScale(1.8);
    }
})
closeIcon.addEventListener("click", function (e){
    e.stopPropagation();
    if (!timeline.isActive()) {
        timeline.reversed() ? timeline.restart().timeScale(1.4) : timeline.reverse().timeScale(1.4);
    }
})
//end nav expand

// feature projects expand

var tlProjects = new TimelineMax();
function projectsExpand() {
    tlProjects
        .add(TweenMax.to(headerBg, 0.1 ,
            {
                top: 0,
                ease: Power4.easeInOut
            }), "-0.1")
        .add(TweenMax.fromTo(".feature-projects", 1 ,{
                y: "-100%",
                ease: Power4.easeInOut
            },
            {
                y:"0%",
                ease: Power4.easeInOut
            }), "0.1")
        .add(TweenMax.fromTo(".bg__yellow", 1 ,{
                y: "-100%",
                ease: Power4.easeInOut
            },
            {
                y:"0%",
                ease: Power4.easeInOut
            }), "0.4")
    tlProjects.reverse();
}
openProjects.addEventListener("click", function (e){
    e.stopPropagation();
    if (!tlProjects.isActive()) {
        tlProjects.reversed() ? tlProjects.restart().timeScale(1) : tlProjects.reverse().timeScale(1.4);
    }
})
closeProjects.addEventListener("click", function (e){
    e.stopPropagation();
    if (!tlProjects.isActive()) {
        tlProjects.reversed() ? tlProjects.restart().timeScale(1) : tlProjects.reverse().timeScale(0.9);
    }
})
menuIcon.addEventListener("click", function (e){
    e.stopPropagation();
    if (!tlProjects.isActive()) {
        console.log("isactive")
        tlProjects.reverse()
    }
})
window.addEventListener("click", function (e){
    e.stopPropagation();
    if (!tlProjects.isActive()) {
        // console.log("isactive")
        tlProjects.reverse()
    }
})
// end feature projects expand

//location animation slide//

function locateSlide(){
    let locate = document.querySelectorAll(".locate");
    let address = document.querySelector(".table .th p");
    let slideCurrent = 0;
    console.log(address.textContent)

    locate.forEach((e) =>{
        e.addEventListener("click", function (){
            let dataPos = this.getAttribute("data-text");
            console.log(dataPos)
            address.textContent = dataPos;
            this.classList.add("active");
            for (let sibling of this.parentNode.children) {
                if (sibling !== this) sibling.classList.remove("active");
            }
        })
        console.log(e.length)
    })

    document.querySelector(".market-col__left .inner .locate-prev").addEventListener("click", function(){
        locate.forEach((e) =>{
            let dataPos = document.
            console.log(dataPos)
            address.textContent = dataPos;
            this.classList.add("active");
            for (let sibling of this.parentNode.children) {
                if (sibling !== this) sibling.classList.remove("active");
            }
        })
        if (slideCurrent > 0){
            console.log(slideCurrent)
            // locate[slideCurrent].classList.remove("active");
            $(".locate").siblings().removeClass("active");
            locate[slideCurrent -1].classList.add("active");
            slideCurrent--
        }

    })

    document.querySelector(".market-col__left .inner .locate-next").addEventListener("click", function(){
        if (slideCurrent < locate.length -1){
            locate[slideCurrent].classList.remove("active");
            locate[slideCurrent +1].classList.add("active")
            slideCurrent++
            console.log(address.textContent)
        }

    })
}

// end locate slide

// back to top

function backTop(){
    let toTop = document.querySelector(".footer__to-top");
    toTop.addEventListener("click", function (e){
        e.preventDefault()
        console.log("lj0a")
        window.scrollBy({
            top: -document.body.offsetHeight,
            behavior:"smooth"
        })
    })
}

window.addEventListener("load", function () {
    smoothScroll();
    navExpand();
    projectsExpand();
    locateSlide();
    backTop();
})

// img to svg

$(document).ready(function () {
    jQuery('img.svg').each(function () {
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        jQuery.get(imgURL, function (data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');

            // Add replaced image's ID to the new SVG
            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass + ' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');




    });
    //scalize locate

    $('.scalize').scalize({
        selector: '.market .scalize .locate'
    });
});