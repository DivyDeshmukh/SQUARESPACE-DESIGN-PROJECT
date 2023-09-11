gsap.from("#nav1 #img, #nav2 h6, #nav3 h6, #nav3 button", {
    y: -100,
    duration: 1,
    delay: 1,
    stagger: 0.2,
    opacity: 0
}) 

gsap.from("#main h4", {
    y: 100,
    duration: 1,
    delay: 3,
    stagger: 0.3,
    opacity: 0
})

gsap.from("#main .img", {
    y: 100,
    duration: 1,
    delay: 4,
    stagger: 0.2,
    opacity: 0
})

gsap.from("#main #h5", {
    scale: 0,
    opacity: 0 
})

gsap.to("#main #h5", {
    y:30,
    repeat: -1,
    yoyo: true,
    duration: 0.7
})

