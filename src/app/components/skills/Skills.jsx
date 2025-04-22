import BackEnd from "./BackEnd";
import FrontEnd from "./FrontEnd";
import "./skills.css";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My Technical level</span>
      <div className="skills__container container grid">
        <FrontEnd></FrontEnd>
        <BackEnd></BackEnd>
      </div>
    </section>
  );
};

export default Skills;
