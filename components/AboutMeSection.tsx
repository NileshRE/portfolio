import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { experience } from "@/lib/constants";
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

const AboutMeSection = () => {
  const iconClass = "h-5 w-5 text-muted-foreground shrink-0";
  return (
    <section id="about" className="py-16 px-4 bg-muted/50 scroll-mt-24">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <h2 className="header2">About Me</h2>
          <h3 className="text-2xl font-semibold mb-4">Work Experience</h3>
          <div className="grid grid-cols-1 gap-x-12 items-start">
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{exp.title}</CardTitle>
                    <CardDescription>
                      {exp.company} • {exp.period}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {exp?.description?.map((line, index) => (
                      <ul
                        className="list-disc pl-6 mt-6 text-muted-foreground"
                        key={index}
                      >
                        <li key={index} className="mb-1">
                          {line}
                        </li>
                      </ul>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
            <Card className="mt-6">
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
      </div>
    </section>
  );
};

export default AboutMeSection;
