import React from "react";
import { FaArrowRight } from "react-icons/fa";

// @ts-ignore
import HeaderImg from "../../assets/header.svg";

// @ts-ignore
import styles from "./styles.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__left}>
          <p>
            ✨ $7.5M seed raised with Accel & Square Peg <FaArrowRight />
          </p>
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
