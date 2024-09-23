// gsap.to(".box", {
//   x: 500,
//   duration: 5,
//   rotation: 30,
// });

// gsap.fromTo(".box1", { opacity: 0 }, { opacity: 1, x: 300 });

// const timeLine = gsap.timeline();
// timeLine
//   .fromTo(".box1", { x: 0 }, { x: 100, duration: 1 })
//   .fromTo(".box1", { y: 0 }, { y: 100, duration: 1 })
//   .fromTo(
//     ".box1",
//     {},
//     { backgroundColor: "green", rotation: 180, duration: 1 }
//   );
// gsap.fromTo(
//   ".photo",
//   {},
//   {
//     width: "100%",
//     height: "100%",
//     delay: 0.5,
//     duration: 1.5,
//     ease: "power4.inOut",
//   }
// );

const t1 = gsap.timeline();

tl.fromTo(
  ".span",
  {},
  { display: "none", opacity: 0, duration: 1, ease: "power1.in" }
)
  .fromTo(
    ".photo",
    { y: 1000, opacity: 0 },
    { y: 0, opacity: 1, display: "block", duration: 1, ease: "power1.inOut" }
  )
  .fromTo(
    ".photo",
    {},
    {
      width: "100%",
      height: "100%",
      duration: 1.5,
      delay: 0.3,
      ease: "power1.inOut",
    }
  );
