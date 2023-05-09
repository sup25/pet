import { useEffect, useState } from "react";

export const useElementOnScreen = (ref, rootMargin = "0px") => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const current = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(entry.isIntersecting);
        }
      },
      { rootMargin }
    );
    if (current) {
      observer.observe(ref.current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [ref, rootMargin]);

  return isIntersecting;
};
