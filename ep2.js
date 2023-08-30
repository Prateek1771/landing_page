var tl=gsap.timeline()

gsap.from(".logo, .nav_2 h3, .nav_3",{
    y:-100,
    duration:1,
    delay:0.5,
    opacity:0,
    stagger:0.2
})

tl.from(".body h1",{
    y:200,
    opacity:0,
    stagger:0.3,
    delay:1,
    duration:1.8,
})

gsap.from(".img1,.img2,.img3,.img4",{
    scale:0,
    opacity:0,
    delay:2,
    duration:1,
})

tl.from("h5",{
    scale:0,
    opacity:0,
})

tl.to("h5",{
    y:20,
    repeat:5,
    duration:1,
    yoyo:true,
})