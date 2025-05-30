function loadingAnimation() {
    var tl = gsap.timeline();

    tl.from('.line h1', {
        y: 200,
        stagger: 0.25,
        duration: 0.6,
    })
    
    tl.from("#line-part1", {
        opacity: 0,
        onStart: function () {
            var h5timer = document.querySelector("#line-part1 h2");
            var grow = 0;
            setInterval(function () {
                if (grow < 100) {
                    h5timer.innerHTML = grow++;
                } else {
                    h5timer.innerHTML = grow;
                }
            },27);
        },
    });

    tl.from(".line h4", {
        y: 150,
        stagger: 0.25,
        duration: 0.6,

    })

    tl.to(".line h4", {
        animationName: "anime",
        opacity: 1,
    })
    tl.to("#loader", {
        opacity: 0,
        duration: 0.4,
        delay: 4,
        display: "none"
    })
    tl.from("#page1", {
        delay: 0.2,
        y: 1600,
        opacity: 0,
        // ease:power4
    })

    tl.from("#hero1 h1,#hero2 h1,#hero3 h2,#hero4 h1", {
        y:180,
        stagger: 0.2,
    })

}
function cursoranimation() {
    document.addEventListener("mousemove", function (dets) {

        gsap.to("#crsr", {
            left: dets.x,
            top: dets.y
        })
    })

    Shery.makeMagnet("#nav-part2 h4", {

    });

}





loadingAnimation();
cursoranimation();
