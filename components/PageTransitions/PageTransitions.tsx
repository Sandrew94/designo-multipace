import React, { useEffect } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled from "styled-components";
import gsap from "gsap";
import { v4 } from "uuid";

type Props = {
  children: React.ReactNode;
  route: string;
};

const MainComponent = styled.div`
  &.page-enter {
    opacity: 0;
    backface-visibility: hidden;
  }

  &.page-enter-active {
    opacity: 0;
    backface-visibility: hidden;
  }

  &.page-exit {
  }

  &.page-exit-active {
    position: absolute;
    backface-visibility: hidden;
    z-index: 9999;
    opacity: 1;
    top: 0;
    right: 0;
    width: 100%;
  }

  &.page-enter-done {
    opacity: 1;
  }
`;

const tlEnter = gsap.timeline({
  defaults: {
    duration: 0.75,
    ease: "Power2.easeOut",
  },
});

const tlLeave = gsap.timeline({
  defaults: {
    duration: 0.75,
    ease: "Power2.easeOut",
  },
});

export default function PageTransitions({ children, route }: Props) {
  useEffect(() => {}, []);

  const onExitStart = (element: HTMLElement) => {
    const headerHome = element.querySelector(".animate-headerHome");
    const designTable = element.querySelector(".animate-designTable");
    const heroSection = element.querySelector(".animate-heroSection");
    const locationMap = element.querySelectorAll(".animate-LocationMap");

    if (route === "/") {
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
    } else if (route === "/locations") {
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
  };

  const onEnteredStart = (element: HTMLElement) => {
    const headerHome = element.querySelector(".animate-headerHome");
    const designTable = element.querySelector(".animate-designTable");
    const heroSection = element.querySelector(".animate-heroSection");
    const locationMap = element.querySelectorAll(".animate-LocationMap");

    if (route === "/") {
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
    } else if (route === "/locations") {
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
  };

  const onExitingStart = (element: HTMLElement) => {};

  return (
    <TransitionGroup>
      <CSSTransition
        key={route}
        // key={v4()}
        classNames="page"
        timeout={1500}
        onEntered={onEnteredStart}
        onExiting={onExitingStart}
        onExit={onExitStart}
      >
        <MainComponent>{children}</MainComponent>
      </CSSTransition>
    </TransitionGroup>
  );
}
