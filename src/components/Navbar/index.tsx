import React, { useState } from "react";
// @ts-ignore
import Logo from "../../assets/icon.svg";

// @ts-ignore
import styles from "./styles.module.scss";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState<string>("Product");

  return (
    <nav className={styles.navbar}>
      {/* company logo and name */}
      <div className={styles.navbar__logo}>
        <img src={Logo} alt="logo" />
        <p>Chronicle</p>
      </div>

      {/* nav options */}
      <div className={styles.navbar__options}>
        {["Product", "Our Story", "Careers"].map((item, index) => {
          return (
            <div
              className={styles.navbar__item}
              key={index}
              style={
                activeTab === item ? { borderBottom: "1px solid white" } : {}
              }
            >
              <p
                style={activeTab === item ? { color: "#fff" } : {}}
                onClick={() => setActiveTab(item)}
              >
                {item}
              </p>
            </div>
          );
        })}
      </div>

      {/* join beta */}
      <button type="button" className={styles.navbar__btn}>
        Join Beta
      </button>
    </nav>
  );
};

export default Navbar;
