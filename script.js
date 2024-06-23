const reelCursor = document.querySelector(".cursor");
const viewText = document.querySelector("#viewText")
var tl = gsap.timeline();

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
    trigger: "#wrapper",
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
    trigger: "#wrapper",
   
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
    trigger: "#wrapper",
   
    scroller: "body",
    start: "top .3%",
    end: "bottom 50%",
    scrub: 3,
    pin: true,
  },
});
