import React from "react";
import { HiOutlineExternalLink } from "react-icons/hi";
import "../portfolio/portfolio.css";

const ProjectCard = ({ image, title, tag = "Web App", link }) => {
  if (!link) return null;

  return (
    <article className="portfolio__item card">
      <div className="portfolio__item-image">
        <img src={image} alt={title} loading="lazy" />
        <div className="portfolio__item-overlay">
          <a
            href={link}
            className="portfolio__item-link"
            target="_blank"
            rel="noreferrer"
          >
            <HiOutlineExternalLink />
            View Live
          </a>
        </div>
      </div>
      <div className="portfolio__item-info">
        <span className="portfolio__item-tag">{tag}</span>
        <h3>{title}</h3>
      </div>
    </article>
  );
};

export default ProjectCard;
