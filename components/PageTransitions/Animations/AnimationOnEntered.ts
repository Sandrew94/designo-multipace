import { tlEnter } from "./Timeline";

export function AnimationOnEntered(route: string) {
  if (!document) return;

  if (route === "/") {
    const headerHome = document.querySelector(".animate-headerHome");
    const designTable = document.querySelector(".animate-designTable");
    const heroSection = document.querySelector(".animate-heroSection");
    tlEnter.fromTo(
      headerHome,
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
      }
    );

    tlEnter.fromTo(
      designTable,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
      }
    );

    tlEnter.fromTo(
      heroSection,
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
      }
    );
  }
  if (route === "/locations") {
    const locationMap = document.querySelectorAll(".animate-LocationMap");
    tlEnter.fromTo(
      locationMap,
      { y: -200, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        ease: "back.out(1.7)",
        duration: 1,
      }
    );
  }
  if (route === "/contact") {
    const contactComponent = document.querySelector(
      ".animate-contactComponent"
    );
    const locationCity = document.querySelector(".animate-locationCity");
    tlEnter.fromTo(
      contactComponent,
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
      }
    );

    tlEnter.fromTo(
      locationCity,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
      }
    );
  }

  if (route === "/about") {
    const headerAbout = document.querySelector(".animate-headerAbout");
    tlEnter.fromTo(
      headerAbout,
      { opacity: 0, y: 300 },
      {
        opacity: 1,
        y: 0,
      }
    );
  }

  if (
    route === "/web-design" ||
    route === "/app-design" ||
    route === "/graphic-design"
  ) {
    const headerDesign = document.querySelector(".animate-headerDesign");
    const cardDesign = document.querySelectorAll(".animate-cardDesign");
    const cardGallery = document.querySelector(".animate-cardGallery");
    const tableDesign = document.querySelectorAll(".animate-designTable");

    tlEnter.fromTo(
      headerDesign,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
      }
    );

    tlEnter.fromTo(cardGallery, { y: "100%" }, { y: "0%" });

    tlEnter.fromTo(
      cardDesign,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
      }
    );

    tlEnter.fromTo(
      tableDesign,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.4,
      }
    );
  }
}
