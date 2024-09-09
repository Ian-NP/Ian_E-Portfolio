import styles from "./SourceCodeBtn.module.css";

type SourceCodeBtnProps = {
  linkTo: string;
};

export default function SourceCodeBtn({ linkTo }: SourceCodeBtnProps) {
  return (
    <>
      <a
        href={linkTo}
        className={styles.iconTextBtn}
        target="_blank" // Open link in a new tab
        rel="noopener noreferrer" // Security best practice
      >
        <img
          className={styles.btnIcon}
          src="/Ian_E-Portfolio/images/sourceCode.svg"
          alt="Icon"
        />
        <span className={styles.textIcon}>Source Code</span>
      </a>
    </>
  );
}
