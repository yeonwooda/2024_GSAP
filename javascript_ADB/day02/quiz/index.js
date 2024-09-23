gsap.registerPlugin(ScrollTrigger); 
gsap.registerPlugin(TextPlugin)
gsap.fromTo(
  ".box",
  {},
  {
    y: 200,
    ScrollTrigger: {
      trigger: ".box1",
      markers: true,
      start: "bottom -=200",
      end: "bottom 8-=200",
      scrub: true,
    },
  }
);
