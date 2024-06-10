/* eslint-disable react/prop-types */
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Routes, useLocation } from "react-router-dom";
import style from "./AnimateTransition.module.css";

export const AnimateTransition = ({ children }) => {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames={style.fade} timeout={300}>
        <div className={style.routeWrapper}>
          <Routes location={location}>{children}</Routes>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};
