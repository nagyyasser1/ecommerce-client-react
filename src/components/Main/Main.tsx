import styles from "./Main.module.css";

const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <p>KAREZMA SPRING COLLECTION</p>
        <span>
          Find out our best spring collection, Offering our best quality <br />
          production a Karezma Spring Collection
        </span>
        <button>Explore</button>
      </div>
    </div>
  );
};

export default Main;
