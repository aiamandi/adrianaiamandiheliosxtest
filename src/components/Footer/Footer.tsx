import styles from "./Footer.module.css";

const footerContent = {
  footerContent: [
    {
      title: "About Us",
      items: ["Our mission", "Team", "Careers"],
    },
    {
      title: "Contact",
      items: ["Email", "Phone", "Address"],
    },
  ],
};

export const Footer = () => {
  return (
    <div className={styles.Container}>
      <footer className={styles.Footer}>
        {footerContent.footerContent.map((column, index) => (
          <div className={styles.Footer__column} key={index}>
            <h3 className={styles.Footer__title}>{column.title}</h3>
            {column.items.map((item, i) => (
              <a className={styles.Footer__link} href="#" key={i}>
                {item}
              </a>
            ))}
          </div>
        ))}
      </footer>
    </div>
  );
};
