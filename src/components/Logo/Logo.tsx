import styles from "./Logo.module.css";

export const Logo = () => {
  return (
    <div className={styles.Container}>
      <img className={styles.Logo} src="./assets/CompanyLogo.jpeg" alt="Company Logo" />
    </div>
  );
};
