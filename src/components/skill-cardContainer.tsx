import SkillCard from "./skill-card";

function SkillCardContainer(){
    return(
        <>
        <div className="skillscontainer">
        <SkillCard Domain="Testing" Skills={["Unit", "Integration"]} />
        <SkillCard Domain="Frameworks/Libraries" Skills={["React","Redux","Tailwind"]} />
        <SkillCard Domain="Languages" Skills={["JavaScript", "TypeScript"]} />
        <SkillCard Domain="Other" Skills={["HTML", "CSS", "SCSS", "PWAs", "Responsive Design", "Firebase"]} />
        <SkillCard Domain="Bundlers" Skills={["Parcel", "Vite"]} />
        <SkillCard Domain="UX Design" Skills={["Prototyping", "Competitive Evaluation", "User Flows", "Heuristic Evaluation"]} />
        <SkillCard Domain="Tools" Skills={["Git", "VS Code", "Figma"]} />
        </div>
        </>
    )
}

export default SkillCardContainer