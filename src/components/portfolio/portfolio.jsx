import React from "react";
import "./portfolio.css";
import { Link } from "react-router-dom";
import vividioz from "../../assets/Vividioz.PNG";
import Applestore from "../../assets/Applestore.png";
import shoklin from "../../assets/shoklin.png";
import wardboard from "../../assets/wwwwww.png";

const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={wardboard} />
          </div>
          <h3>Wardboard</h3>
          <div className="portfolio__item-cta flex justify-around">
            <a href="" className="btn" target="_blank">
              Github
            </a>
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
            <img src={Applestore} />
          </div>
          <h3>Apple</h3>
          <div className="portfolio__item-cta flex justify-around">
            <a
              href="https://github.com/rash1234567/Apple-store.git"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://majestic-gelato-78453c.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={shoklin} />
          </div>
          <h3>Shoklin</h3>
          <div className="portfolio__item-cta flex justify-around">
            <a
              href="https://github.com/rash1234567/shoklin.git"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://shoklin.onrender.com/"
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
        <Link to="/projects" className="mx-auto text-xl md:text-3xl">
          See more <i className="fa-solid fa-right-long"></i>
        </Link>
      </div>
    </section>
  );
};

export default portfolio;
