function ProjectCard(props:{ProjName:string, ProjDetails:string[], Imgsource?:string, Livelink:string, GHub:string}){
    return(
        <>
        <div className="project-card">
            <span className="img-container">
                <img src={props.Imgsource} />
            </span>
            <h3>{props.ProjName}</h3>
            <ul>
            {props.ProjDetails.map((detail)=><li>{detail}</li>)}
            </ul>
            <a href={props.Livelink} target="blank"><button>Live&lt;~~&gt;</button></a>
            <a href={props.GHub} target="blank"><button>GitHub</button></a>
        </div>
        </>
    )
}


export default ProjectCard