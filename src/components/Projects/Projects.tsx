import ProjContainer from "./ProjectCardContainer";
import SmallProjects from "../Small_projects/SmallProjects";
import { Line } from "../line";

function Projects() {
  return (
    <>
      <div id="projects" role="main">
        <div className="sub-heading">
          <h2>
            <span>#</span>projects
          </h2>
          <Line />
        </div>
        <ProjContainer />
      </div>
      <SmallProjects />
    </>
  );
}

export default Projects;
