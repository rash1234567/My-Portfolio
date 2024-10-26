import React from "react";
import "./portfolio.css";
import { Link } from "react-router-dom";
import wardbord from "../../assets/wwwwww.png";
import wardbordPlay from '../../assets/Screenshot 2024-10-26 at 12.13.05 PM.png';
import wardbordApp from '../../assets/Screenshot 2024-10-26 at 12.13.14 PM.png'

const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={wardbord} />
          </div>
          <h3>Wardbord</h3>
          <div className="portfolio__item-cta flex justify-center items-center">
            <a
              href="https://coach.wardbord.com/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={wardbordPlay} />
          </div>
          <h3>Wardbord Athlete App (Ios)</h3>
          <div className="portfolio__item-cta flex justify-center items-center">
            <a
              href="https://apps.apple.com/us/app/wardbord/id1619683329"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={wardbordApp} />
          </div>
          <h3>Wardbord Athlete App (Android)</h3>
          <div className="portfolio__item-cta flex justify-center items-center">
            <a
              href="https://play.google.com/store/apps/details?id=com.wardbord.playerapp&pli=1"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
      <div className="w-full flex mt-2">
        {" "}
        <Link to="/projects" className="mx-auto text-xl md:text-xl">
          See more <i className="fa-solid fa-right-long"></i>
        </Link>
      </div>
    </section>
  );
};

export default portfolio;
