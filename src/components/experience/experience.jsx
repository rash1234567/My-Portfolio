import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const frontendSkills = [
  "React", "React Native", "JavaScript", "TypeScript",
  "HTML & CSS", "Tailwind CSS", "Bootstrap", "Shopify Polaris",
];

const backendSkills = [
  "Node.js", "Express.js", "MongoDB", "PostgreSQL",
  "REST APIs", "Shopify Apps", "Git",
];

const Experience = () => {
  return (
    <section id="experience">
      <div className="section__header">
        <span className="section__label">Technologies</span>
        <h2 className="section__title">Technologies I work with</h2>
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
