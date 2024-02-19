import ProjectCard from "./ProjectCard";
import { Links, ProjectsItems } from "../utils/constants"

function ProjContainer(){
    return(
        <>
        <div className="projcontainer">
        <ProjectCard Livelink={Links.MPL1} GHub={Links.MPG1} Imgsource="/assets/Rectangle 22.webp" ProjName="Moving Frames" ProjDetails={[ProjectsItems.Proj1a, ProjectsItems.Proj1b, ProjectsItems.Proj1c, ProjectsItems.Proj1d]} />
        <ProjectCard Livelink={Links.MPL2} GHub={Links.MPG2} Imgsource="/assets/Rectangle 24.webp" ProjName="Netflix GPT" ProjDetails={[ProjectsItems.Proj2a, ProjectsItems.Proj2b, ProjectsItems.Proj2c]} />
        <ProjectCard Livelink={Links.MPL3} GHub={Links.MPG3} Imgsource="/assets/Rectangle 23.webp" ProjName="TravelGram" ProjDetails={[ProjectsItems.Proj3a, ProjectsItems.Proj3b, ProjectsItems.Proj3c]} />
        </div>
        </>
    )
}


export default ProjContainer