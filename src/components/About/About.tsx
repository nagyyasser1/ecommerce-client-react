import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.left}>
        <p>Karezma</p>
        <span>
          Get newsletter update for upcomming product <br></br> and best
          discount for all items
        </span>
        <form>
          <input type="text" placeholder="Your Email" />
          <button>Submit</button>
        </form>
      </div>
      <div className={styles.right}>
        <ul>
          <h4>Products</h4>
          <li>T-shirt</li>
          <li>T-shirt</li>
          <li>T-shirt</li>
          <li>T-shirt</li>
          <li>T-shirt</li>
        </ul>
        <ul>
          <h4>Categories</h4>
          <li>Men</li>
          <li>Women</li>
          <li>Kids</li>
          <li>New & Featured</li>
        </ul>
        <ul>
          <h4>Our Social Media</h4>
          <li>facebook</li>
          <li>twitter</li>
          <li>instegram</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
