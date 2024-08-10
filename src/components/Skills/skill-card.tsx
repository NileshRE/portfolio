
function SkillCard(props:{Domain:string, Skills:string[]}){
    return(
        <>
        <div className="skill-card">
            <h3>{props.Domain}</h3>
            <p>{props.Skills.join("\n")}</p>
        </div>
        </>
    )
}


export default SkillCard