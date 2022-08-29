import gsap from "gsap";

export const tlEnter = gsap.timeline({
  defaults: {
    duration: 0.75,
    ease: "Power2.easeOut",
  },
});

export const tlFirstEnter = gsap.timeline({
  defaults: {
    duration: 3,
    ease: "Power2.easeOut",
  },
});

export const tlLeave = gsap.timeline({
  defaults: {
    duration: 0.75,
    ease: "Power2.easeOut",
  },
});
