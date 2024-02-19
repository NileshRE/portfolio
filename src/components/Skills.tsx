import SkillCardContainer from "./skill-cardContainer"


function Skills(){
    return(
        <>
        <div id="skills">
            <div className="sub-heading">
            <h2><span>#</span>skills</h2>
            <svg xmlns="http://www.w3.org/2000/svg" width={200} height="1" viewBox="0 0 298 1" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M297.221 1H0V0H297.221V1Z" fill="#C778DD"/>
</svg>
</div>
        <div className="skillscontainerwithIllust">
        <img src="/assets/Frame 70.png" alt="Illustration" />
        <SkillCardContainer />
        </div>
        </div>
        </>
    )
}

export default Skills