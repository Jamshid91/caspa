


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
    gsap.from('.wrapper__btn1', { opacity: 0, duration: .5, delay: .3, y: 20, scrollTrigger: '.wrapper__btn1'});
    gsap.from('.wrapper__btn2', { opacity: 0, duration: .5, delay: .6, y: 20, scrollTrigger: '.wrapper__btn2'});
    gsap.from('.reliability-right__title1', { opacity: 0, duration: .4, delay: .2, y: 40, scrollTrigger: '.reliability-left-item'});
    gsap.from('.reliability-right__title2', { opacity: 0, duration: .4, delay: .3, y: 40, scrollTrigger: '.reliability-left-item'});
    gsap.from('.reliability-right__title3', { opacity: 0, duration: .4, delay: .4, y: 40, scrollTrigger: '.reliability-left-item'});
    gsap.from('.reliability-right__text', { opacity: 0, duration: .4, delay: .5, y: 40, scrollTrigger: '.reliability-left-item'});
    gsap.from('.reliability-right-sub__btn', { opacity: 0, duration: .4, delay: .3, y: 20, scrollTrigger: '.reliability-right-sub__btn'});
    gsap.from('.stability-left__title1', { opacity: 0, duration: .4, delay: .2, y: 40, scrollTrigger: '.stability-right-item'});
    gsap.from('.stability-left__title2', { opacity: 0, duration: .4, delay: .3, y: 40, scrollTrigger: '.stability-right-item'});
    gsap.from('.stability-left__title3', { opacity: 0, duration: .4, delay: .4, y: 40, scrollTrigger: '.stability-right-item'});
    gsap.from('.stability-left__text', { opacity: 0, duration: .4, delay: .5, y: 40, scrollTrigger: '.stability-right-item'});
    gsap.from('.stability-left-sub__btn', { opacity: 0, duration: .4, delay: .3, y: 20, scrollTrigger: '.stability-left-sub__btn'});
    gsap.from('.stability2-right__title1', { opacity: 0, duration: .4, delay: .2, y: 40, scrollTrigger: '.stability2-left-item'});
    gsap.from('.stability2-right__title2', { opacity: 0, duration: .4, delay: .3, y: 40, scrollTrigger: '.stability2-left-item'});
    gsap.from('.stability2-right__title3', { opacity: 0, duration: .4, delay: .4, y: 40, scrollTrigger: '.stability2-left-item'});
    gsap.from('.stability2-right__text', { opacity: 0, duration: .4, delay: .5, y: 40, scrollTrigger: '.stability2-left-item'});
    gsap.from('.stability2-right-sub__btn', { opacity: 0, duration: .4, delay: .3, y: 20, scrollTrigger: '.stability2-right-sub__btn'});
    gsap.from('.completed-projects-left__title', { opacity: 0, duration: .4, delay: .2, y: 40, scrollTrigger: '.completed-projects-right-item'});
    gsap.from('.completed-projects-left__title2', { opacity: 0, duration: .4, delay: .3, y: 40, scrollTrigger: '.completed-projects-right-item'});
    gsap.from('.completed-projects-left__title3', { opacity: 0, duration: .4, delay: .4, y: 40, scrollTrigger: '.completed-projects-right-item'});
    gsap.from('.completed-projects-left-arrow', {duration: .8, delay: .5, y: -250, scrollTrigger: '.completed-projects-right-item'});
    gsap.from('.completed-projects-right__btn', { opacity: 0, duration: .4, delay: .3, y: 20, scrollTrigger: '.completed-projects-right__btn'});
  }