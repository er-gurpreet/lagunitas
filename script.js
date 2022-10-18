function loc(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
loc();

var tl = gsap.timeline();

tl
.to("#btl",{
    transform: "translate(-50%, -50%)",
    scrollTrigger:{
        trigger:"#btl",
        scroller:"#main",
        start:"top 0%",
        end:"top -640%",
        pin:true,
        scrub: true,
    },
    rotate: "-15deg",
  
})
.to("#btl",{
  // transform: "translate(-0%, -0%)",
  scrollTrigger:{
        trigger:"btl",
        scroller:"#main",
        start:"500% 0%",
        end:"620% 0%",
        // pin:true,
        scrub: 2,
        // markers:true,

    },
    // left: "40%",
    scale: 0.5

})
.from("#btl-1>img",{
  scrollTrigger:{
    trigger:".up",
    scroller:"#main",
    start:"top 40%",
    end:"top 30%",
    scrub: 2,
    // markers:true
  },
  stagger:.4,
  y:200
})
.to("#page2 h1",{
  scrollTrigger:{
    trigger:"#page2",
    scroller:"#main",
    start:"top 50%",
    end:"top 0%",
    scrub: 2,
    // markers:true
  },
  y:-200
})
.to("#page4 h1",{
  scrollTrigger:{
    trigger:"#page4",
    scroller:"#main",
    start:"top 50%",
    end:"top 0%",
    scrub: 2,
    // markers:true
  },
  y:-100
})
.to(".element,.element1,.element2",{
  scrollTrigger:{
    trigger:"#page6",
    scroller:"#main",
    start:"top 40%",
    end:"top 0%",
    scrub: 2,
    // markers:true
  },
  duration:2,
  delay:2,
  stagger:2,
  y:-100
})
.from("#p9-inner img",{
  scrollTrigger:{
    trigger:"#page9",
    scroller:"#main",
    start:"top 65%",
    end:"top 55%",
    scrub: 2,
    // markers:true
  },
  duration:2,
  opacity:0,
  x:40
})