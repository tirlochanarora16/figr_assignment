import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

// @ts-ignore
import HeaderImg from "../../assets/header.svg";

// @ts-ignore
import styles from "./styles.module.scss";

const Header = () => {
  const [rotateX, setRotateX] = useState<number>(0);

  const scrollListener = () => {
    setRotateX(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollListener);

    return () => window.removeEventListener("scroll", scrollListener);
  }, []);

  return (
    <header
      className={styles.header}
      style={{
        transform: `perspective(1000px) rotate3d(1, 0, 0, -${
          rotateX > 30 ? 30 : rotateX
        }deg)`,
      }}
    >
      <div className={styles.header__container}>
        <div className={styles.header__left}>
          <p>
            ✨ $7.5M seed raised with Accel & Square Peg <FaArrowRight />
          </p>
          <h1>
            Impactful stories. <br /> Made <br /> effortlessly
          </h1>
          <h3>
            Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </h3>
        </div>
        <div className={styles.header__right}>
          <div className={styles["header__right--img"]}>
            <img src={HeaderImg} alt="header img" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
