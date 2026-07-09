import React from "react";
import "./experience.css";
import { skillCategories } from "../../data/skills";

const Experience = () => {
  return (
    <section id="experience">
      <div className="section__header">
        <span className="section__label">Technologies</span>
        <h2 className="section__title">Technologies I work with</h2>
      </div>

      <div className="container experience__grid">
        {skillCategories.map((category) => {
          const CategoryIcon = category.categoryIcon;

          return (
            <article
              key={category.id}
              className={`experience__panel card experience__panel--${category.accent} ${
                category.id === "frontend" || category.id === "backend"
                  ? "experience__panel--featured"
                  : ""
              }`}
            >
              <div className="experience__panel-header">
                <div className="experience__category-icon">
                  <CategoryIcon />
                </div>
                <h3>{category.title}</h3>
              </div>

              <div className="experience__skills">
                {category.skills.map((skill) => {
                  const SkillIcon = skill.icon;
                  return (
                    <span key={skill.name} className="experience__skill">
                      {SkillIcon ? (
                        <SkillIcon className="experience__skill-icon" aria-hidden />
                      ) : (
                        <span className="experience__skill-dot" aria-hidden />
                      )}
                      {skill.name}
                    </span>
                  );
                })}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
