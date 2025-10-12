"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { projectProblems, projects } from "@/lib/constants";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const ProjectsSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto scroll-mt-24" id="all-projects">
        <h2 className="header2">Projects</h2>
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
        <div className="scroll-mt-24" id="challenges">
          {projectProblems?.length > 0 && (
            <Card className="p-4 mt-4">
              <CardHeader>
                <CardTitle>Challenges faced on Live Projects</CardTitle>
              </CardHeader>
              <CardContent className="p-2 grid grid-cols-1 lg:grid-cols-3 gap-4">
                {projectProblems?.map((prob) => (
                  <Card key={prob?.project}>
                    <CardHeader>
                      <CardTitle className="text-lg text-gray-400">
                        {prob?.project}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-outside list-disc">
                        {prob?.problems?.map((detail) => (
                          <li key={detail?.title} className="block mb-2">
                            <span className="font-semibold text-lg my-2 inline-block">
                              {detail?.title}:{" "}
                            </span>
                            <span className="text-muted-foreground inline-block">
                              {detail?.desc}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
