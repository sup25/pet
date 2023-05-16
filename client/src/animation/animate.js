import { useElementOnScreen } from "./useElementOnScreen";
import { useRef } from "react";

const Animation = ({
  from,
  to,
  delay = 0,
  rootMargin = "0px",
  children,
  className,
}) => {
  const ref = useRef(null);

  const onScreen = useElementOnScreen(ref, rootMargin);

  const defaultStyles = {
    transition: `600ms ease-in ${delay}ms`,
  };

  return (
    <div
      ref={ref}
      style={
        onScreen
          ? {
              ...defaultStyles,
              ...to,
            }
          : {
              ...defaultStyles,
              ...from,
            }
      }
      className={className}
    >
      {children}
    </div>
  );
};

const FadeIn = ({
  delay = 300,
  rootMargin = "10px",
  children = "",
  className,
}) => (
  <Animation
    className={className}
    delay={delay}
    rootMargin={rootMargin}
    from={{ opacity: 0 }}
    to={{ opacity: 1 }}
  >
    {children}
  </Animation>
);

const FadeUp = ({ delay, rootMargin, children, ...rest }) => (
  <Animation
    delay={delay}
    rootMargin={rootMargin}
    from={{ opacity: 0, translate: "0 2rem" }}
    to={{ opacity: 1, translate: "none" }}
    {...rest}
  >
    {children}
  </Animation>
);

const SlideInDown = ({ children, ...rest }) => (
  <Animation
    from={{ transform: "translate3d(0, -100%, 0)", visibility: "visible" }}
    to={{ transform: "translateZ(0)" }}
    {...rest}
  >
    {children}
  </Animation>
);

const SlideInLeft = ({ children, ...rest }) => (
  <Animation
    from={{ transform: "translate3d(-100%, 0,  0)", visibility: "visible" }}
    to={{ transform: "translateZ(0)" }}
    {...rest}
  >
    {children}
  </Animation>
);

const SlideInRight = ({ children, ...rest }) => (
  <Animation
    from={{ transform: "translate3d(100%, 0,  0)", visibility: "visible" }}
    to={{ transform: "translateZ(0)" }}
    {...rest}
  >
    {children}
  </Animation>
);

const SlideInUp = ({ children, ...rest }) => (
  <Animation
    from={{ transform: "translate3d( 0, 100%,  0)", visibility: "visible" }}
    to={{ transform: "translateZ(0)" }}
    {...rest}
  >
    {children}
  </Animation>
);

const SlideOutDown = ({ children, ...rest }) => (
  <Animation
    from={{ transform: "translateZ(0)" }}
    to={{ transform: "translate3d( 0, 100%,  0)", visibility: "hidden" }}
    {...rest}
  >
    {children}
  </Animation>
);

const SlideOutLeft = ({ children, ...rest }) => (
  <Animation
    from={{ transform: "translateZ(0)" }}
    to={{ transform: "translate3d(-100%, 0,   0)", visibility: "hidden" }}
    {...rest}
  >
    {children}
  </Animation>
);

const SlideOutRight = ({ children, ...rest }) => (
  <Animation
    from={{ transform: "translateZ(0)" }}
    to={{ transform: "translate3d(100%, 0,   0)", visibility: "hidden" }}
    {...rest}
  >
    {children}
  </Animation>
);

const SlideOutUp = ({ children, ...rest }) => (
  <Animation
    from={{ transform: "translateZ(0)" }}
    to={{ transform: "translate3d( 0, -100%,  0)", visibility: "hidden" }}
    {...rest}
  >
    {children}
  </Animation>
);

const ZoomOutUp = ({ children, ...rest }) => (
  <Animation
    from={{
      opacity: 1,
      transform: "scale3d(0.475, 0.465, 0.475) translate3d(0, 60px, 0)",
      animationTimingFunction: "cubic-bezier(0.55, 0.055, 0.675, 0.19)",
    }}
    to={{
      opacity: 0,
      transform: "scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)",
      animationTimingFunction: "cubic-bezier(0.175, 0.885, 0.32, 1)",
    }}
    {...rest}
  >
    {children}
  </Animation>
);

const RollOut = ({ children, ...rest }) => (
  <Animation
    from={{
      opacity: 1,
    }}
    to={{ opacity: 0, transform: "translate3d(100%, 0, 0) rotate(120deg)" }}
    {...rest}
  >
    {children}
  </Animation>
);

const RollIn = ({ children, ...rest }) => (
  <Animation
    from={{
      opacity: 0.5,
      transform: "translate3d(-100%, 0, 0) rotate(-120deg)",
    }}
    to={{ opacity: 1, transform: "translateZ(0)" }}
    {...rest}
  >
    {children}
  </Animation>
);
const ZoomIn = ({ children, ...rest }) => {
  return (
    <Animation
      from={{ transform: "scale(0.5)" }}
      to={{ transform: "scale(1)" }}
      {...rest}
    >
      {children}
    </Animation>
  );
};
const FadeDown = ({ children, ...rest }) => {
  return (
    <Animation
      from={{
        opacity: 0,
        transform: "translateY(-20px)",
      }}
      to={{
        opacity: 1,
        transform: "translateY(0)",
      }}
      {...rest}
    >
      {children}
    </Animation>
  );
};

export const Animate = {
  FadeIn,
  FadeUp,
  ZoomIn,
  SlideInLeft,
  SlideInRight,
  SlideInDown,
  SlideInUp,
  SlideOutLeft,
  SlideOutRight,
  SlideOutUp,
  SlideOutDown,
  ZoomOutUp,
  RollOut,
  RollIn,
  FadeDown,
};
