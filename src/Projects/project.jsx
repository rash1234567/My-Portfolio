import React from "react";
import ProjectCard from "../components/portfolio/ProjectCard";
import { getProjectTag } from "../utils/projectTag";

function Project({ img, title, demo }) {
  return (
    <ProjectCard
      image={img}
      title={title}
      tag={getProjectTag(title)}
      link={demo}
    />
  );
}

export default Project;
