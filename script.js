var tl = gsap.timeline();
const reelCursor = document.querySelector(".cursor");
const scroll = new LocomotiveScroll({
  el: document.querySelector("#wrapper"),
  smooth: true,
});
gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#wrapper"),
  smooth: true,
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#wrapper" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#wrapper", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#wrapper").style.transform
    ? "transform"
    : "fixed",
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

document
  .querySelector(".hero-section .left-side video")
  .addEventListener("mousemove", function (e) {
    reelCursor.style.top = e.clientY + "px";
    reelCursor.style.left = e.clientX + "px";
  });
document
  .querySelector(".hero-section .left-side video")
  .addEventListener("mouseleave", function (e) {
    reelCursor.style.top = `${30}%`;
    reelCursor.style.left = `${30}%`;
  });
tl.from(".hero-section .left-side video", { opacity: 0, duration: 0.3 })
  .from(".hero-section .right-side .section-1 h3", {
    opacity: 0,
    duration: 0.3,
  })
  .from(".hero-section .right-side .section-2 h4", {
    opacity: 0,
    duration: 0.3,
  })
  .from(".hero-section .right-side .section-3 .before", {
    width: 0,
    duration: 0.3,
  })
  .from(".hero-section .right-side .section-3 h1", {
    opacity: 0,
    duration: 0.3,
  })
  .from(".hero-section .right-side .section-2 .before", {
    width: 0,
    duration: 0.3,
  });
gsap.to(".hero-section .right-side .section-3 h1", {
  transform: "translateX(70%)",

  scrollTrigger: {
    trigger: ".hero-section",
    scroller: "body",
    start: "top 0",
    end: "top -150%",
    scrub: 3,
    pin: true,
  },
});

gsap.to(".hero-section .right-side .section-2 .before", {
  left: 0,
  duration: 2,
  scrollTrigger: {
    trigger: ".hero-section",
    scroller: "body",
    start: "top .2%",
    end: "bottom 50%",
    scrub: 3,
    pin: true,
  },
});
gsap.to(".hero-section .right-side .section-3 .before", {
  left: 0,
  duration: 2,
  scrollTrigger: {
    trigger: ".hero-section",
    scroller: "body",
    start: "top .3%",
    end: "bottom 50%",
    scrub: 3,
    pin: true,
  },
});
