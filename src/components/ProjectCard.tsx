function ProjectCard(props:{ProjName:string, ProjDetails:string[], Imgsource?:string}){
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
            <button>Live&lt;~~&gt;</button>
            <button>GitHub</button>
        </div>
        </>
    )
}


export default ProjectCard