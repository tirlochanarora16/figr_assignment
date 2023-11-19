import React, { useRef, useEffect, useState } from "react";
import styles from "./styles.module.scss";

const Text = () => {
  const ref = useRef<HTMLParagraphElement>(null);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Check if the target element is in the viewport
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    // Cleanup observer on component unmount
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  console.log("isVisible", isVisible);

  const text = `Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
    libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
    sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
    Curabitur tempus urna at turpis condimentum lobortis. Ut commodo
    efficitur neque.`;

  return (
    <div className={styles.text}>
      {/* @ts-ignore */}

      <p ref={ref} className={isVisible ? styles.visible : ""}>
        {text.split(" ").map((word, index) => (
          <span key={index}>{word} </span>
        ))}
      </p>
    </div>
  );
};

export default Text;
