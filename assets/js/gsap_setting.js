


if (window.matchMedia("(min-width: 992px)").matches) {
    gsap.from('.logo', { opacity: 0, duration: 1, delay: 1.5, y: 30 });
    gsap.from('.nav_phone', { opacity: 0, duration: 1, delay: 1.5, y: 30 });
    gsap.from('.nav-lang', { opacity: 0, duration: 1, delay: 1.8, y: 30 });
    gsap.from('.nav-menu-burger', { opacity: 0, duration: 1.5, delay: 1, });
    gsap.from('.wrapper__sub-title', { opacity: 0, duration: .5, delay: 1.8, y: 10});
    gsap.from('.wrapper__title1', { opacity: 0, duration: .5, delay: 2, y: 30});
    gsap.from('.wrapper__title2', { opacity: 0, duration: .5, delay: 2.2, y: 30});
    gsap.from('.wrapper__title3', { opacity: 0, duration: .5, delay: 2.3, y: 30});
    gsap.from('.wrapper__text1', { opacity: 0, duration: .5, delay: 2.4, y: 30});
    gsap.from('.wrapper__text2', { opacity: 0, duration: .5, delay: 2.5, y: 30});
    gsap.from('.wrapper__text3', { opacity: 0, duration: .5, delay: 2.6, y: 30});
    gsap.from('.wrapper__text4', { opacity: 0, duration: .5, delay: 2.7, y: 30});
  }