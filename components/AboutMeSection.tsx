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
  Layers,
  Link,
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
  return (
    <section id="about" className="py-16 px-4 bg-muted/50 scroll-mt-24">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <h2 className="header2">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg mb-6 text-muted-foreground">
                I specialize in developing stateful user interfaces with
                role-based access control, ensuring both functionality and
                security. From UI development to backend integration, I focus on
                writing maintainable, efficient code and optimizing performance
                throughout the application lifecycle. Whether it&apos;s working
                with real-time data, third-party APIs, or complex frontend
                architectures, I bring a problem-solving mindset and a strong
                emphasis on best practices and user-centric development.
              </p>
              <div className="grid grid-cols-2 gap-4 items-start">
                <div className="flex items-center space-x-2">
                  <Zap className="h-5 w-5 text-primary" />
                  <span>Performance</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Layers className="h-5 w-5 text-primary" />
                  <span>Stateful UI</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Link className="h-5 w-5 text-primary" />
                  <span>API Integration</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MonitorSmartphone className="h-5 w-5 text-primary" />
                  <span>Responsive Design</span>
                </div>
                <div className="flex items-start space-x-2">
                  <UserCheck className="h-5 w-5 text-primary" />
                  <span>Role-based Access Control (RBAC)</span>
                </div>
                <div className="flex items-start space-x-2">
                  <ShieldAlert className="h-5 w-5 text-primary" />
                  <span>Centralized Error Handling</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Crosshair className="h-5 w-5 text-primary" />
                  <span>Cross Browser Compatibility</span>
                </div>
                <div className="flex items-center space-x-2">
                  <PersonStanding className="h-5 w-5 text-primary" />
                  <span>Accessibility</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Activity className="h-5 w-5 text-primary" />
                  <span>Logging & Monitoring</span>
                </div>
                <div className="flex items-center space-x-2">
                  <TestTubeDiagonal className="h-5 w-5 text-primary" />
                  <span>Developer Testing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Palette className="h-5 w-5 text-primary" />
                  <span>UI/UX Focus</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Code className="h-5 w-5 text-primary" />
                  <span>Clean Code</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Timer className="h-5 w-5 text-primary" />
                  <span>Timely delivery</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Speech className="h-5 w-5 text-primary" />
                  <span>Clear Communicator</span>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-4">Experience</h3>
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
                      <ul className="list-disc pl-6 mt-2" key={index}>
                        <li key={index} className="mb-1">
                          {line}
                        </li>
                      </ul>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
