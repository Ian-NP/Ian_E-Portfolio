import Lottie from "lottie-react";
import Astronaut from "../../../public/Astronaut Animation.json";
import styles from "./Home.module.css";
import { useEffect, useState } from "react";

export default function Home() {
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
        <div className={styles.mobileMessage}>
          <p>Please view this page on a desktop or laptop for the best experience.</p>
        </div>
      ) : (
        <div className={styles.bentoGridWrapper}>
          <div className={styles.bentoGridContainer}>
            <div className={styles.whoAmIContainer}>
              <h2>Who am I?</h2>
              <p>
                Hey! My name is Ian, I'm an aspiring full stack developer & I am
                currently a student at Ngee Ann Polytechnic. I am passionate about
                building modern, scalable web applications. I'm constantly pushing
                myself to learn new technologies & improve my problem-solving
                skills.
              </p>
            </div>
            <div className={styles.designationContainer}>
              <h2>
                Student & <br />
                President of SCS@NP
              </h2>
            </div>
            <div className={styles.educationContainer}>
              <h2>Education</h2>
              <div className={styles.educationDetailsWrapper}>
                <div className={styles.educationDetails}>
                  <h3>Diploma in Info Tech</h3>
                  <p>Ngee Ann Polytechnic</p>
                  <p>2023-Current</p>
                </div>
                <div className={styles.verticalLine}></div>
                <div className={styles.educationDetails}>
                  <h3>GCE O-Levels</h3>
                  <p>Christ Church Sec Sch</p>
                  <p>2019-2022</p>
                </div>
              </div>
            </div>
            <div className={styles.centrePictureContainer}>
              <Lottie
                className={styles.lottieAnimation}
                animationData={Astronaut}
              />
            </div>
            <div className={styles.rightPictureContainer}></div>
            <div className={styles.leftPictureContainer}></div>
            <div className={styles.skillsContainer}>
              <div className={styles.iconsContainer}>
                <img src="images/python.svg" />
                <img src="images/csharp.svg" />
                <img src="images/java.svg" />
                <img src="images/javascript.svg" />
                <img src="images/typescript.svg" />
                <img src="images/nodejs.svg" />
                <img src="images/react.svg" />
                <img src="images/expressjs.svg" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
