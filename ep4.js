var tl=gsap.timeline()

tl.from(".nav",{
    opacity:0,
    delay:.3,
})

tl.from(".nav h1,.nav h4,.nav_part2",{
    y:-20,
    opacity:0,
    duration:.5,
    delay:.5,
    stagger:.3
})

tl.from(".left h1,.circle1 ",{
    x:-50,
    opacity:0,
    duration:.5,
    stagger:.3
})

tl.from(".right img",{
    scale:1.2,
    opacity:0,
    duration:.5,
})
 
var tl=gsap.timeline()
gsap.from(".box1, .box2, .box3",{
    scale:0,
    opacity:0,
    duration:1,
    delay:.5,
    scrollTrigger:{
        trigger:".box1, .box2, .box3",
        scroller:"body",
        start:"top 70%"
    }
})
