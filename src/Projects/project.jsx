import React from "react";
import { HiOutlineExternalLink } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

function Project({ img, title, github, demo }) {
  const hasGithub = github && github !== "N/A";

  return (
    <article className="projects-card card">
      <div className="projects-card__image">
        <img src={img} alt={title} loading="lazy" />
      </div>
      <div className="projects-card__body">
        <h3>{title}</h3>
        <div className="projects-card__actions">
          {demo && (
            <a href={demo} className="btn-demo" target="_blank" rel="noreferrer">
              <HiOutlineExternalLink />
              Live Demo
            </a>
          )}
          {hasGithub && (
            <a href={github} className="btn-github" target="_blank" rel="noreferrer">
              <FaGithub />
              Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default Project;
