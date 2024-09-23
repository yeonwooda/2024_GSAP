// gsap.fromTo(".box1", {}, { x: 350, duration: 1 });
// gsap.fromTo(".box3", {}, { x: -350, duration: 1 });
// gsap.fromTo("body", {}, { backgroundColor: "white", delay: 1, duration: 1 });
// gsap.fromTo(
//   ".box1",
//   {},
//   { color: "black", duration: 0.5, delay: 1.5, ease: "power4.in" }
// );
// gsap.fromTo(
//   ".box2",
//   {},
//   { color: "black", duration: 0.5, delay: 1.5, ease: "power4.in" }
// );
// gsap.fromTo(
//   ".box3",
//   {},
//   { color: "black", duration: 0.5, delay: 1.5, ease: "power4.in" }
// );

const t1 = gsap.timeline();

t1.fromTo(".box1", {}, { x: 350, duration: 1 })
  .fromTo("box3", {}, { x: -350, duration: 1 }, "<")
  .fromTo("body", {}, { backgroundColor: "white", delay: 1, duration: 1 })
  .fromTo(
    "box1",
    {},
    { color: "black", duration: 0.5, ease: "power4.in" },
    "<0.2"
  )
  .fromTo("box2", {}, { color: "black", duration: 0.5, ease: "power4.in" }, "<")
  .fromTo(
    "box3",
    {},
    { color: "black", duration: 0.5, ease: "power4.in" },
    "<"
  );
