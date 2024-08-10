import { Links } from "../../utils/constants";
import { Line } from "../line";
import SmallProjContainer from "./SmallProjContainer"

function SmallProjects(){
    return (
      <>
        <div id="small-projects">
          <div className="sub-heading">
            <div>
            <h2><span>#</span>small projects</h2>
            <Line />
            </div>
            <a href={Links.SMP} target="blank"><button>Github Link</button></a>
          </div>
          <SmallProjContainer />
        </div>
      </>
    );
}


export default SmallProjects