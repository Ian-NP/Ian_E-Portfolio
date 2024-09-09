import styles from "./Projects.module.css";
import SourceCodeBtn from "../../components/SourceCodeBtn/SourceCodeBtn";
import { useEffect, useState } from "react";
import UnsupportedMobileView from "../../components/UnsupportedMobileView";

export default function Projects() {
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
      {isMobile ? (
        <UnsupportedMobileView message="Please view this page on a desktop or laptop for the best experience." />
      ) : (
        <div className={styles.bentoGridWrapper}>
          <div className={styles.bentoGridContainer}>
            {/* A+4BED Section */}
            <a 
              href="https://github.com/Ian-NP/BED2024Apr_P04_T6.git"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.bedContainer}
            >
              <div className={styles.bedHeader}>
                <h2>A+4BED</h2>
                <SourceCodeBtn linkTo="https://github.com/Ian-NP/BED2024Apr_P04_T6.git" />
              </div>
              <p className={styles.bedContent}>
                Built the{" "}
                <span className={styles.boldText}>
                  threaded comment section and AI chat features{" "}
                </span>
                for A+4BED, a platform that provides industrial trend updates,
                using the Gemini API.
              </p>
              <div className={styles.technologiesContainer}>
                <div><span>HTML</span></div>
                <div><span>CSS</span></div>
                <div><span>JavaScript</span></div>
                <div><span>NodeJs</span></div>
                <div><span>ExpressJs</span></div>
                <div><span>MSSQL</span></div>
              </div>
              <div className={styles.bedImages}>
                <img
                  src="/Ian_E-Portfolio/images/aiInstances.png"
                  alt="AI Instances"
                />
                <img
                  src="/Ian_E-Portfolio/images/threadedComments.png"
                  alt="Threaded Comments"
                />
              </div>
            </a>

            {/* ZenCraft Section */}
            <a 
              href="https://dallaschan1.github.io/FED-Assignment2/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.fedContainer}
            >
              <div className={styles.fedInfoWrapper}>
                <SourceCodeBtn linkTo="https://github.com/dallaschan1/FED-Assignment2.git" />
                <div className={styles.fedContentWrapper}>
                  <h2>ZenCraft</h2>
                  <div className={styles.technologiesContainer}>
                    <div><span>HTML</span></div>
                    <div><span>CSS</span></div>
                    <div><span>JavaScript</span></div>
                    <div><span>RestDB (NoSQL)</span></div>
                  </div>
                  <p>
                    ZenCraft blends online furniture e-shopping with gaming.{" "}
                    <span className={styles.boldText}>
                      Built key pages & features, such as filtering & cart
                      checkout.
                    </span>
                  </p>
                </div>
              </div>
              <div className={styles.fedImages}>
                <img
                  src="/Ian_E-Portfolio/images/shoppingCart.png"
                  alt="Shopping Cart"
                />
                <img
                  src="/Ian_E-Portfolio/images/shoppingCat.png"
                  alt="Shopping Categories"
                />
              </div>
            </a>
            
            <a 
              href="https://github.com/dallaschan1/PRG-ASSG2.git"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.prg2Container}
            >
              <div className={styles.sourceCodeBtnWrapper}>
                <SourceCodeBtn linkTo="https://github.com/dallaschan1/PRG-ASSG2.git" />
              </div>
              <div className={styles.prg2Image}>
                <img src="/Ian_E-Portfolio/images/iceCreamShop.png" alt="Ice Cream Shop" />
              </div>
              <h2>Ice Cream Shop</h2>
              <p>
                Ice Cream Shop System for customer orders and rewards in C#.
              </p>
            </a>
            
            <a 
              href="https://github.com/Ian-NP/Real-Time-Car-Park-Availability.git"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.prg1Container}
            >
              <div className={styles.sourceCodeBtnWrapper}>
                <SourceCodeBtn linkTo="https://github.com/Ian-NP/Real-Time-Car-Park-Availability.git" />
              </div>
              <div className={styles.prg2Image}>
                <img src="/Ian_E-Portfolio/images/carpark.jpg" alt="Carpark Status" />
              </div>
              <h2>Carpark Status</h2>
              <p>
                Designed a Python program to manage and filter HDB carpark data.
              </p>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
