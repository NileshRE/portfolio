import { Links } from "../utils/constants";
import SmallProjContainer from "./SmallProjContainer"

function SmallProjects(){
    return (
      <>
        <div id="small-projects">
          <div className="sub-heading">
            <div>
            <h2>small projects</h2>
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
            <a href={Links.SMP}><button>Github Link</button></a>
          </div>
          <SmallProjContainer />
        </div>
      </>
    );
}


export default SmallProjects