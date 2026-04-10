import { skills } from "@/lib/constants";
import {
  Activity,
  Code,
  Crosshair,
  Languages,
  Layers,
  LinkIcon,
  MonitorSmartphone,
  Palette,
  PersonStanding,
  ShieldAlert,
  Speech,
  TestTubeDiagonal,
  Timer,
  UserCheck,
  Zap,
} from "lucide-react";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const SkillsSection = () => {
  const iconClass = "h-5 w-5 text-muted-foreground shrink-0";
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
          <Card className="mt-12">
            <CardHeader>
              <CardTitle className="text-lg"> Practicing the Craft</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                I’ve always believed the best way to grow is to build, break,
                and rebuild. Whenever I explore a new concept or face a tricky
                problem, I turn it into a small project or a GitHub repo. This
                section is a glimpse into that journey — where I document what
                I’m learning, one challenge at a time.
              </p>
              <h2 className="text-base font-medium my-4 text-left">
                Lessons Learned Along the Way
              </h2>
              <div className="grid grid-cols-2 gap-x-4 gap-y-6 items-start mb-6 text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Zap className={iconClass} />
                  <span>Performance</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Layers className={iconClass} />
                  <span>Stateful UI</span>
                </div>
                <div className="flex items-center space-x-2">
                  <LinkIcon className={iconClass} />
                  <span>API Integration</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MonitorSmartphone className={iconClass} />
                  <span>Responsive Design</span>
                </div>
                <div className="flex items-start space-x-2">
                  <UserCheck className={iconClass} />
                  <span>Role-based Access Control (RBAC)</span>
                </div>
                <div className="flex items-start space-x-2">
                  <ShieldAlert className={iconClass} />
                  <span>Centralized Error Handling</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Crosshair className={iconClass} />
                  <span>Cross Browser Compatibility</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Languages className={iconClass} />
                  <span>Multilingual support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <PersonStanding className={iconClass} />
                  <span>Accessibility</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Activity className={iconClass} />
                  <span>Logging & Monitoring</span>
                </div>
                <div className="flex items-center space-x-2">
                  <TestTubeDiagonal className={iconClass} />
                  <span>Developer Testing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Palette className={iconClass} />
                  <span>UI/UX Focus</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Code className={iconClass} />
                  <span>Clean Code</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Timer className={iconClass} />
                  <span>Timely delivery</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Speech className={iconClass} />
                  <span>Clear Communicator</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
