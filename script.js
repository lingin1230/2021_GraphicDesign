


window.addEventListener('scroll' , function () {

    let y = window.scrollY;
    let main = this.document.getElementById('main-cover').offsetHeight;
    console.log(main);

    console.log(y);

    if (y > main * 1/3) {
        document.getElementById('header-title').classList.add('active');
    } else if (y < main  * 1/3) {
        document.getElementById('header-title').classList.remove('active');
    }

    if (y > main * 1) {
        document.getElementById('header').classList.add('active');
        document.getElementById('up').classList.remove('hide');
    } else if (y < main  * 1) {
        document.getElementById('header').classList.remove('active');
        document.getElementById('up').classList.add('hide');
    }
    

})



$('.poster-carousel.owl-carousel').owlCarousel({
    loop:true,
    center:true,
    margin: 0,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        992: {
            items:3
        },
        // 1000:{
        //     items:5
        // }
    }
})

$('.graduation-carousel.owl-carousel').owlCarousel({
    loop:true,
    center:true,
    margin: 0,
    nav:true,
    dots:false,
    responsive:{
        // 0:{
        //     items:1
        // },
        600:{
            items:1
        },
        992: {
            items:2
        },
        // 1000:{
        //     items:5
        // }
    }
})

$('.banner-carousel.owl-carousel').owlCarousel({
    loop:true,
    center:true,
    margin: -40,
    nav:true,
    dots:false,
    responsive:{
        // 0:{
        //     items:1
        // },
        600:{
            items:1
        },
        992: {
            items:2
        },
        // 1000:{
        //     items:5
        // }
    }
})