import { skills } from "@/lib/constants";
import { Badge } from "./ui/badge";

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 px-4 bg-muted/50 scroll-mt-24">
      <div className="container mx-auto">
        <h2 className="header2">Skills</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{skill.name}</span>
                  <Badge variant="outline">{skill.category}</Badge>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
