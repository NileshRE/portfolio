import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { experience } from "@/lib/constants";

const AboutMeSection = () => {
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
                      {exp.company} • {exp.period} • {exp.location}
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
