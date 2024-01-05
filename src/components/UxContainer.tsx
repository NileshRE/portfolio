import { Links, ProjectsItems } from "../utils/constants";
import Uxcard from "./Uxcard";

function UxContainer(){
    return(
        <>
        <div className="uxcontainer">
        <Uxcard Link={Links.UX1} Imgsrc="/assets/UX1.png" Name="Fashion app for Sustainability (Collab)" Detail={ProjectsItems.ProjU1} />
        <Uxcard Link={Links.UX2} Imgsrc="/assets/UX2.png" Name="Kharcha - Expense Tracker App" Detail={ProjectsItems.ProjU2} />
        <Uxcard Link={Links.UX3} Imgsrc="/assets/UX3.png" Name="UX Research on Property website" Detail={ProjectsItems.ProjU3} />
        </div>
        </>
    )
}


export default UxContainer