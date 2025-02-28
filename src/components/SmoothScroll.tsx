
import { useEffect } from "react";

const SmoothScroll = () => {
  useEffect(() => {
    const scrollElements = document.querySelectorAll(".scroll-reveal");

    const elementInView = (el: Element, scrollOffset = 100) => {
      const elementTop = el.getBoundingClientRect().top;
      return (
        elementTop <= (window.innerHeight || document.documentElement.clientHeight) - scrollOffset
      );
    };

    const displayScrollElement = (element: Element) => {
      element.classList.add("reveal");
    };

    const handleScrollAnimation = () => {
      scrollElements.forEach((el) => {
        if (elementInView(el)) {
          displayScrollElement(el);
        }
      });
    };

    window.addEventListener("scroll", handleScrollAnimation);
    // Trigger once on load
    handleScrollAnimation();

    return () => {
      window.removeEventListener("scroll", handleScrollAnimation);
    };
  }, []);

  return null;
};

export default SmoothScroll;
