import { About, Footer, Main } from "../components";
import Categories from "./Categories";
import NewCollection from "./NewCollection";

const Home = () => {
  return (
    <div>
      <Main />
      <NewCollection />
      <Categories />
      <About />
      <Footer />
    </div>
  );
};

export default Home;
