let navLine = document.querySelector('.nav-line'),
    menuBurger = document.querySelector('.nav-menu-burger'),
    closeMenu = document.querySelector('.close-menu'),
    menuItem = document.querySelector('.menu-item'),
    sliders = document.querySelectorAll('.slider-item')


// window.onload = function() {
    setTimeout(() => {
        navLine.classList.add('showLine')
    }, 500);
// }


menuBurger.addEventListener('click', () => {
    menuItem.classList.add('showMenu')
});

closeMenu.addEventListener('click', () => {
    menuItem.classList.remove('showMenu')
});


let i = 0;

function sliderMove() {
    if (i == sliders.length - 1) {
        sliders[i].style.display = "none";
        i = 0;
        sliders[i].style.display = "block";
    } else {
        sliders[i].style.display = "none";
        sliders[i + 1].style.display = "block";
        i++
    }
}



setInterval(function () {
    sliderMove();
}, 2000)
