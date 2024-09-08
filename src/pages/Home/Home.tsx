import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import Astronaut from "../../../public/Astronaut Animation.json";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <>
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
              <img src="/images/python-svgrepo-com.svg" />
              <img src="/images/c-sharp-svgrepo-com.svg" />
              <img src="/images/java-svgrepo-com.svg" />
              <img src="/images/javascript-svgrepo-com.svg" />
              <img src="/images/typescript-svgrepo-com.svg" />
              <img src="/images/nodejs01-svgrepo-com.svg" />
              <img src="/images/react-svgrepo-com.svg" />
              <img src="/images/expressjs_logo_icon_169185.svg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
