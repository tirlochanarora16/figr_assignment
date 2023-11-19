import React, { useRef } from "react";
import styles from "./styles.module.scss";

const Text = () => {
  const ref = useRef<HTMLParagraphElement>(null);

  return (
    <div className={styles.text}>
      {/* @ts-ignore */}

      <p ref={ref}>
        Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        Curabitur tempus urna at turpis condimentum lobortis. Ut commodo
        efficitur neque.
      </p>
    </div>
  );
};

export default Text;
