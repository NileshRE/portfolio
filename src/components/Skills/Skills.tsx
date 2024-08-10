import { Line } from "../line";
import SkillCardContainer from "./skill-cardContainer";

function Skills() {
  return (
    <>
      <div id="skills">
        <div className="sub-heading">
          <h2>
            <span>#</span>skills
          </h2>
          <Line />
        </div>
        <div className="skillscontainerwithIllust">
          <img src="/assets/Frame 70.png" alt="Illustration" />
          <SkillCardContainer />
        </div>
      </div>
    </>
  );
}

export default Skills;
