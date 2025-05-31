"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { links } from "@/lib/constants";
import { Linkedin, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 px-4 scroll-mt-24">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Let's Work Together
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            I'm always interested in new opportunities and exciting projects.
            Let's discuss how we can bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href={links.mail}>
                <Mail className="mr-2 h-4 w-4" />
                Send Email
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href={links.linkedin}>
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
