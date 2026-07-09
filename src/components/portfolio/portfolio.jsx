import React from "react";
import "./portfolio.css";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import wardbord from "../../assets/wwwwww.png";
import wardbordPlay from '../../assets/Screenshot 2024-10-26 at 12.13.05 PM.png';
import wardbordApp from '../../assets/Screenshot 2024-10-26 at 12.13.14 PM.png'

const projects = [
  {
    image: wardbord,
    title: "Wardbord Coach Platform",
    tag: "Web App",
    link: "https://coach.wardbord.com/",
  },
  {
    image: wardbordPlay,
    title: "Wardbord Athlete App",
    tag: "iOS",
    link: "https://apps.apple.com/us/app/wardbord/id1619683329",
  },
  {
    image: wardbordApp,
    title: "Wardbord Athlete App",
    tag: "Android",
    link: "https://play.google.com/store/apps/details?id=com.wardbord.playerapp&pli=1",
  },
];

const portfolio = () => {
  return (
    <section id="portfolio">
      <div className="section__header">
        <span className="section__label">Portfolio</span>
        <h2 className="section__title">Selected work</h2>
      </div>

      <div className="container portfolio__container">
        {projects.map((project) => (
          <ProjectCard key={project.link} {...project} />
        ))}
      </div>

      <div className="portfolio__more">
        <Link to="/projects" className="btn">
          View all projects <i className="fa-solid fa-arrow-right"></i>
        </Link>
      </div>
    </section>
  );
};

export default portfolio;
