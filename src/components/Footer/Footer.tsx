import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Karezma Inc. All rights reserved.</p>
      <div className={styles.content}>
        <span>Terms & Conditions</span>
        <span>Privacy Policy</span>
        <span>Cookie Policy</span>
      </div>
    </footer>
  );
};

export default Footer;
