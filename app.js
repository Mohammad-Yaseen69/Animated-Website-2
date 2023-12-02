const homeVideo = document.querySelector('.video-container');
function homeVideoAnimation() {
    const playDiv = document.querySelector('.play-div')
    homeVideo.addEventListener('mouseenter', () => {
        gsap.to(playDiv, {
            opacity: 1,
            scale: 1,

        })
    })
    homeVideo.addEventListener('mouseleave', () => {
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


const scroll = new LocomotiveScroll({
    el: document.querySelector('main'),
    smooth: true
});


loadingAnimation()
homeVideoAnimation()