import SmallProjCard from "./SmallProjCard";
import { ProjectsItems } from "../utils/constants";

function SmallProjContainer(){
    return(
        <>
        <div className="smallprojcontainer">
        <SmallProjCard Livelink="" GHub="" Tech="JS" Name="Grid Lights" Details={ProjectsItems.ProjS} />
        <SmallProjCard Livelink="" GHub="" Tech="JS" Name="EMI Calculator" Details={ProjectsItems.ProjS} />
        <SmallProjCard Livelink="" GHub="" Tech="JS" Name="Stopwatch" Details={ProjectsItems.ProjS} />
        </div>
        </>
    )
}

export default SmallProjContainer