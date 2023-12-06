const homeVideo = document.querySelector('.video-container');

function LocomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("main").style.transform ? "transform" : "fixed"
    });




    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}
function homeVideoAnimation() {
    const playDiv = document.querySelector('.play-div')
    homeVideo.addEventListener('mouseenter', () => {
        gsap.to(playDiv, {
            opacity: 1,
            scale: 1,

        })
    })
    homeVideo.addEventListener('mouseleave', (dets) => {
        gsap.to(playDiv, {
            opacity: 0,
            scale: 0,
        })
    })


    homeVideo.addEventListener('mousemove', (dets) => {
        gsap.to(playDiv, {
            top: dets.y - 100,
            left: dets.x - 50,
        })
    })
}
function loadingAnimation() {
    gsap.from('.page1 h1', {
        y: 50,
        opacity: 0,
        delay: 0.8,
        duration: 0.5,
        stagger: 0.2
    })
    gsap.from('nav', {
        y: -30,
        opacity: 0,
        delay: 0.3,
        duration: 0.8,
        stagger: 0.2
    })
    gsap.from(homeVideo, {
        y: 30,
        opacity: 0,
        delay: 0.8,
        duration: 0.9,
    })
    gsap.from('.page2', {
        y: 30,
        opacity: 0,
        delay: 1.2,
        duration: 0.9,
    })
}
function gsapNavbarAnimation() {
    gsap.to('.nav-icon svg', {
        transform: 'translateY(-100%)',
        scrollTrigger: {
            trigger: '.page1',
            scroller: 'main',
            start: 'top 10%',
            end: 'top -5%',
            scrub: true
        }
    })

    gsap.to('.links-main', {
        transform: 'translateY(-100%)',
        opacity: 0,
        scrollTrigger: {
            trigger: '.page1',
            scroller: 'main',
            start: 'top 10%',
            end: 'top -5%',
            scrub: true
        }
    })
}

LocomotiveAnimation()
homeVideoAnimation()
gsapNavbarAnimation()
loadingAnimation()