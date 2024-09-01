import { useState } from "react";
import styles from "./NavigationMobile.module.css";

function NavigationMobile() {
  const [isOpen, setIsOpen] = useState(false);
  function handleOpen() {
    setIsOpen(!isOpen);
  }
  return (
    <nav className={styles.nav}>
      <img src="/images/logo.svg" alt="" />
      {isOpen ? (
        <img src="/images/icon-close.svg" alt="" onClick={handleOpen} />
      ) : (
        <img src="/images/icon-hamburger.svg" alt="" onClick={handleOpen} />
      )}
      {isOpen && <div className={styles.menu}>
        <p>how we work</p>
        <p>blog</p>
        <p>account</p>
        <button className="btn">view plans</button>
        </div>}
    </nav>
  );
}

export default NavigationMobile;
