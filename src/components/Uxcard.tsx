function Uxcard(props:{Imgsrc:string, Name:string, Detail:string, Link:string}){
    return(
        <>
        <div className="uxcard">
            <span>
                <img src={props.Imgsrc} />
            </span>
            <h3>{props.Name}</h3>
            <p>{props.Detail}</p>
            <a href={props.Link} target="blank"><button>Read More</button></a>
        </div>
        </>
    )
}


export default Uxcard