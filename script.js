var time = gsap.timeline()


time.from("#line-part1", {
    opacity: 0,
    delay: 0.5,
    onstart: function () {
        var h2timer = document.querySelector('#line-part1 h2')
        var inc = 0
        setInterval(function(){
            if (inc<100) {
                h2timer.innerHTML = inc++
            } else {
                h2timer.innerHTML = inc
            }

        },35)
    }

})


time.to(".line h4",{
    animationName:"anime",
    opacity:1,
})

time.from('.line h1', {
    y: 200,
    stagger: 0.25,
    duration: 0.6,
})

time.to("#loader", {
    opacity: 0,
    duration: 0.4,
    delay: 4,
    display:"none"
})
time.from("#page1",{
    delay:0.2,
    y:1600,
    opacity:0,
    ease:power4
})
