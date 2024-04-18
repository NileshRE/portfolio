import ProjContainer from "./ProjectCardContainer";
import SmallProjects from "./SmallProjects";

function Projects() {
  return (
    <>
      <div id="projects" role="main">
        <div className="sub-heading">
          <h2>
            <span>#</span>projects
          </h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={200}
            height="1"
            viewBox="0 0 298 1"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M297.221 1H0V0H297.221V1Z"
              fill="#C778DD"
            />
          </svg>
        </div>
        <ProjContainer />
      </div>
      <SmallProjects />
    </>
  );
}

export default Projects;
