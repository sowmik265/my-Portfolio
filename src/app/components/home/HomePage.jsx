import Data from "./Data";
import "./home.css";
import ScrollDown from "./ScrollDown";
import Social from "./Social";

const HomePage = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social></Social>
          <div className="home__img"> </div>
          <Data></Data>
        </div>
        <ScrollDown></ScrollDown>
      </div>
    </section>
  );
};

export default HomePage;
