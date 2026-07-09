import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const frontendSkills = [
  "HTML", "CSS", "Javascript", "React", "React Native",
  "Bootstrap", "Tailwind", "Shopify Themes / Polaris"
];

const backendSkills = [
  "Nodejs", "Expressjs", "MongoDB", "PostgreSQL", "Shopify App Development"
];

const Experience = () => {
  return (
    <section id="experience">
      <div className="section__header">
        <span className="section__label">Skills</span>
        <h2 className="section__title">What I work with</h2>
      </div>

      <div className="container experience__container">
        <div className="experience__panel card">
          <div className="experience__panel-header">
            <span className="experience__dot experience__dot--frontend"></span>
            <h3>Frontend</h3>
          </div>
          <div className="experience__skills">
            {frontendSkills.map((skill) => (
              <span key={skill} className="experience__skill">
                <BsPatchCheckFill className="experience__skill-icon" />
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="experience__panel card">
          <div className="experience__panel-header">
            <span className="experience__dot experience__dot--backend"></span>
            <h3>Backend</h3>
          </div>
          <div className="experience__skills">
            {backendSkills.map((skill) => (
              <span key={skill} className="experience__skill">
                <BsPatchCheckFill className="experience__skill-icon" />
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
