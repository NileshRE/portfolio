import SkillCard from "./skill-card";

function SkillCardContainer(){
    return(
        <>
        <div className="skillscontainer">
        <SkillCard Domain="Languages" Skills={["JavaScript", "TypeScript"]} />
        <SkillCard Domain="Frameworks/Libraries" Skills={["React","Redux","Tailwind","Bootstrap","Axios"]} />
        <SkillCard Domain="Other" Skills={["HTML", "CSS", "SCSS","PWAs","Responsive Design"]} />
        <SkillCard Domain="Bundlers" Skills={["Parcel", "Vite"]} />
        <SkillCard Domain="Tools" Skills={["Git", "Docker", "VS Code", "Figma"]} />
        <SkillCard Domain="Testing" Skills={["Unit", "Integration (Jest)"]} />
        <SkillCard Domain="UX Design" Skills={["Prototyping", "Competitive Evaluation", "User Flows", "Heuristic Evaluation"]} />
        </div>
        </>
    )
}

export default SkillCardContainer