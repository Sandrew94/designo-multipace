import React, { useEffect } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled from "styled-components";
import { v4 } from "uuid";
import { AnimationOnEntered } from "./Animations/AnimationOnEntered";
import { AnimationExitStart } from "./Animations/AnimationsOnExitStart";
import { tlEnter } from "./Animations/Timeline";

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

type Props = {
  children: React.ReactNode;
  route: string;
};

export default function PageTransitions({ children, route }: Props) {
  useEffect(() => {
    AnimationOnEntered(route);
  }, []);

  const onExitStart = (element: HTMLElement) => {
    AnimationExitStart(route, element);
  };

  const onEnteredStart = () => {
    AnimationOnEntered(route);
  };

  const onExitingStart = (element: HTMLElement) => {};

  return (
    <TransitionGroup>
      <CSSTransition
        key={v4()}
        classNames="page"
        timeout={2000}
        onEntered={onEnteredStart}
        onExiting={onExitingStart}
        onExit={onExitStart}
      >
        <MainComponent>{children}</MainComponent>
      </CSSTransition>
    </TransitionGroup>
  );
}
