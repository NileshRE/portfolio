

function SmallProjCard(props:{Tech:string, Name:string, Details:string, Livelink:string, GHub:string}){
    return(
        <>
        <div className="smallprojcard">
        <p>{props.Tech}</p>
        <h3>{props.Name}</h3>
        <p>{props.Details}</p>
        <a href={props.Livelink} target="blank"><button>Live&lt;~~&gt;</button></a>
        <a href={props.GHub} target="blank"><button>GitHub</button></a>
        </div>
        </>
    )
}


export default SmallProjCard