import { tlEnter, tlLeave } from "./Timeline";

export function AnimationExitStart(route: string, element: HTMLElement) {
  if (route === "/") {
    const headerHome = element.querySelector(".animate-headerHome");
    const designTable = element.querySelector(".animate-designTable");
    const heroSection = element.querySelector(".animate-heroSection");
    tlLeave.fromTo(
      headerHome,
      {
        opacity: 1,
        y: 0,
      },
      { opacity: 0, y: 100 }
    );
    tlLeave.fromTo(
      designTable,
      {
        opacity: 1,
        y: 0,
      },
      { opacity: 0, y: -100 }
    );

    tlLeave.fromTo(
      heroSection,
      {
        opacity: 1,
        y: 0,
      },
      { opacity: 0, y: 100 }
    );
  }

  if (route === "/locations") {
    const locationMap = element.querySelectorAll(".animate-LocationMap");

    tlLeave.fromTo(
      locationMap,
      { y: 0, opacity: 1 },
      {
        y: -200,
        opacity: 0,
        stagger: 0.15,
        ease: "back.out(1.7)",
        duration: 1,
      }
    );
  }

  if (route === "/contact") {
    const contactComponent = element.querySelector(".animate-contactComponent");
    const locationCity = element.querySelector(".animate-locationCity");
    tlLeave.fromTo(
      contactComponent,
      {
        opacity: 1,
        y: 0,
      },
      { opacity: 0, y: 100 }
    );
    tlLeave.fromTo(
      locationCity,
      {
        opacity: 1,
        y: 0,
      },
      { opacity: 0, y: -100 }
    );
  }

  if (route === "/about") {
    const headerAbout = element.querySelector(".animate-headerAbout");
    tlLeave.fromTo(
      headerAbout,
      {
        opacity: 1,
        y: 0,
      },
      { opacity: 0, y: 100 }
    );
  }

  if (
    route === "/web-design" ||
    route === "/app-design" ||
    route === "/graphic-design"
  ) {
    const headerDesign = element.querySelector(".animate-headerDesign");
    const cardDesign = element.querySelectorAll(".animate-cardDesign");
    const tableDesign = element.querySelectorAll(".animate-designTable");

    tlLeave.fromTo(
      headerDesign,
      { opacity: 1, y: 0 },
      {
        opacity: 0,
        y: 100,
      }
    );

    tlLeave.fromTo(
      cardDesign,
      { opacity: 1, y: 0 },
      {
        opacity: 0,
        y: 50,
        stagger: 0.1,
      }
    );

    tlLeave.fromTo(
      tableDesign,
      { opacity: 1, y: 0 },
      {
        opacity: 0,
        y: 100,
        stagger: 0.1,
      }
    );
  }
}
