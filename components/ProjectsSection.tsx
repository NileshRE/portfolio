"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { projects } from "@/lib/constants";
import { Button } from "./ui/button";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "./ui/badge";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 px-4 scroll-mt-24">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Projects
        </h2>
        {/* <div className="flex items-center gap-4 mb-12">
          <Button variant="outline" size="sm" className="rounded-full">
            Company
          </Button>
          <Button variant="outline" size="sm" className="rounded-full">
            Personal
          </Button>
          <Button variant="outline" size="sm" className="rounded-full">
            App
          </Button>
        </div> */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects
            .filter((project) => !project.featured)
            .map((project, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between text-lg">
                    <div className="flex items-center gap-3">
                      {project.title}{" "}
                      {project.personal && (
                        <Badge variant="outline" className="text-xs">
                          Personal
                        </Badge>
                      )}
                    </div>
                    <div className="flex space-x-2">
                      {project.github && (
                        <Button size="icon" variant="ghost" asChild>
                          <Link href={project.github} target="_blank">
                            <Github className="h-4 w-4" />
                          </Link>
                        </Button>
                      )}
                      {project.live && (
                        <Button size="icon" variant="ghost" asChild>
                          <Link href={project.live} target="_blank">
                            <ExternalLink className="h-4 w-4" />
                          </Link>
                        </Button>
                      )}
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  {project.description.map((line, index) => (
                    <ul className="list-disc pl-6 mt-2" key={index}>
                      <li key={index} className="mb-1">
                        {line}
                      </li>
                    </ul>
                  ))}
                </CardContent>
                <CardFooter>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardFooter>
              </Card>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
