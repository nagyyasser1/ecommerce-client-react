import { About, Footer, Main } from "../components";
import Categories from "./Categories";
import styles from "./styles/Home.module.css";
import NewCollection from "./NewCollection";

const Home = () => {
  return (
    <div className={styles.home}>
      <Main />
      <NewCollection />
      <Categories />
      <About />
      <Footer />
    </div>
  );
};

export default Home;
