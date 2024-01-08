import SmallProjCard from "./SmallProjCard";
import { Links, ProjectsItems } from "../utils/constants";

function SmallProjContainer(){
    return(
        <>
        <div className="smallprojcontainer">
        <SmallProjCard GHub={Links.SMP} Tech="JS" Name="Grid Lights" Details={ProjectsItems.ProjS} />
        <SmallProjCard GHub={Links.SMP} Tech="JS" Name="EMI Calculator" Details={ProjectsItems.ProjS} />
        <SmallProjCard GHub={Links.SMP} Tech="JS" Name="Stopwatch" Details={ProjectsItems.ProjS} />
        </div>
        </>
    )
}

export default SmallProjContainer