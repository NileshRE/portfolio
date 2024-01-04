import ProjectCard from "./ProjectCard";
import { ProjectsItems } from "../utils/constants"

function ProjContainer(){
    return(
        <>
        <div className="projcontainer">
        <ProjectCard Imgsource="/assets/Rectangle 22.png" ProjName="Moving Frames" ProjDetails={[ProjectsItems.Proj1a, ProjectsItems.Proj1b, ProjectsItems.Proj1c, ProjectsItems.Proj1d]} />
        <ProjectCard Imgsource="/assets/Rectangle 24.png" ProjName="Netflix GPT" ProjDetails={[ProjectsItems.Proj2a, ProjectsItems.Proj2b, ProjectsItems.Proj2c]} />
        <ProjectCard Imgsource="/assets/Rectangle 23.png" ProjName="TravelGram" ProjDetails={[ProjectsItems.Proj3a, ProjectsItems.Proj3b, ProjectsItems.Proj3c]} />
        </div>
        </>
    )
}


export default ProjContainer