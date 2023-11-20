import React, { useRef, useEffect, useState } from "react";
import styles from "./styles.module.scss";

const Text = () => {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const parallaxText = ref.current;

    if (parallaxText) {
      // Helper function to interpolate between two colors
      const interpolateColor = (colorStart: any, colorEnd: any, ratio: any) => {
        const start = colorStart
          .match(/\w{2}/g)
          .map((x: any) => parseInt(x, 16));
        const end = colorEnd.match(/\w{2}/g).map((x: any) => parseInt(x, 16));

        const result = start.map((channel: any, index: any) => {
          return Math.round(channel + ratio * (end[index] - channel));
        });

        return `#${result
          .map((x: any) => x.toString(16).padStart(2, "0"))
          .join("")}`;
      };

      const handleScroll = () => {
        const textContent = parallaxText.innerText;
        const letterCount = textContent.length;
        const scrollPercentage =
          (window.scrollY /
            (document.documentElement.scrollHeight - window.innerHeight)) *
          100;

        // Calculate the color change for each letter based on scroll percentage
        const colors = Array.from({ length: letterCount }, (_, index) => {
          const colorChange = Math.max(
            0,
            Math.min(100, scrollPercentage - (index / letterCount) * 100)
          );
          const interpolatedColor = interpolateColor(
            "#202020",
            "#ffffff",
            colorChange / 100
          );
          return interpolatedColor;
        });

        // Apply color change to each letter
        const coloredText = textContent
          .split("")
          .map(
            (letter, index) =>
              `<span style="color: ${colors[index]}">${letter}</span>`
          )
          .join("");

        parallaxText.innerHTML = coloredText;
      };

      // Add scroll event listener on mount
      document.addEventListener("scroll", handleScroll);

      // Remove scroll event listener on unmount
      return () => {
        document.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  const text = `Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
    libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
    sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
    Curabitur tempus urna at turpis condimentum lobortis. Ut commodo
    efficitur neque.`;

  return (
    <div className={styles.text}>
      {/* @ts-ignore */}

      <p ref={ref}>{text}</p>
    </div>
  );
};

export default Text;
