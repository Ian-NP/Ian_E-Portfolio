import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    // Set initial state
    setIsMobile(window.innerWidth <= 768);

    // Add event listener for resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className={`${styles.navbarContainer} ${isMobile ? styles.mobileNav : ''}`}>
        <div className={`${styles.nameLogoContainer} ${isMobile ? styles.hideOnMobile : ''}`}>
          <h1 className={styles.nameLogo}>IL</h1>
          <p className={styles.nameText}>Ian Lim</p>
        </div>
        <nav className={styles.navContainer}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            Contact
          </NavLink>
        </nav>
        <div className={`${styles.contactContainer} ${isMobile ? styles.hideOnMobile : ''}`}>
          <a href="https://github.com/Ian-NP?tab=overview" target="_blank" rel="noopener noreferrer">
            <img src="/images/github-142-svgrepo-com.svg" alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/lim-wq-ian/" target="_blank" rel="noopener noreferrer">
            <img src="/images/linkedin-svgrepo-com.svg" alt="LinkedIn" />
          </a>
          <a href="mailto:iancheif117@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/mail-svgrepo-com.svg" alt="Email" />
          </a>
        </div>
      </div>
    </>
  );
}
