import React from 'react';
import { Link } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi';
import Project from './project';
import { data } from './data';
import '../components/portfolio/portfolio.css';
import './projects.css';

function Projects() {
  return (
    <div className="projects-page">
      <div className="container">
        <div className="projects-page__header">
          <Link to="/" className="projects-page__back">
            <HiArrowLeft />
            Back to home
          </Link>
          <h1 className="projects-page__title">All Projects</h1>
          <span className="projects-page__count">{data.length} projects</span>
        </div>

        <div className="portfolio__container">
          {data.map((datum) => (
            <Project key={datum.title + datum.demo} {...datum} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
