import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled from "styled-components";
import { v4 } from "uuid";
import { AnimationOnEntered } from "./Animations/AnimationOnEntered";
import { AnimationExitStart } from "./Animations/AnimationsOnExitStart";

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
    z-index: 99;
    opacity: 1;
    top: 7.35%;
    right: 0;
    width: 90%;
    max-width: 140rem;
    left: 50%;
    transform: translate(-50%, 0);
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
  const onExitStart = (element: HTMLElement) => {
    AnimationExitStart(route, element);
  };

  const onEnteredStart = () => {
    AnimationOnEntered(route);
  };

  return (
    <TransitionGroup>
      <CSSTransition
        key={v4()}
        classNames="page"
        timeout={2000}
        onEntered={onEnteredStart}
        onExit={onExitStart}
      >
        <MainComponent>{children}</MainComponent>
      </CSSTransition>
    </TransitionGroup>
  );
}
