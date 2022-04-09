let navLine = document.querySelector('.nav-line'),
    menuBurger = document.querySelector('.nav-menu-burger'),
    closeMenu = document.querySelector('.close-menu'),
    menuItem = document.querySelector('.menu-item'),
    sliders = document.querySelectorAll('.slider-item')



menuBurger.addEventListener('click', () => {
    menuItem.classList.add('showMenu')
});

closeMenu.addEventListener('click', () => {
    menuItem.classList.remove('showMenu')
});

$('.slider-left').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false, 
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 2000,
    asNavFor: '.slider-right'
})


$('.slider-right').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true, 
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 2000,
    asNavFor: '.slider-left',
});



const reliability = document.querySelector('.reliability-right');
const stability = document.querySelector('.stability-left');


if (window.matchMedia("(min-width: 992px)").matches) {
    setTimeout(() => {
        navLine.classList.add('showLine')
    }, 500);

    window.addEventListener('scroll', () => {
        const positionReliability = reliability.getBoundingClientRect().top;
        const positionStability = stability.getBoundingClientRect().top;
    
        const screenPosition = window.innerHeight;
    
        if(screenPosition > positionReliability) {
            reliability.classList.add('showReliability')
          }
          if(screenPosition > positionStability) {
            stability.classList.add('showStability')
          }
    });
}

