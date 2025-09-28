"use client";
import { links } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import SocialLinks from "./SocialLinks";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="pt-20 pb-16 px-4 scroll-mt-24">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 mt-4">
            <Image
              src={`${links.github}.png`}
              alt="Profile"
              width={200}
              height={200}
              className="rounded-full mx-auto mb-6 border-4 border-primary/20"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-whiteGlow">
            Nilesh Kumar
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href={links.resume} target="_blank">
                View Resume
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            <span className="font-bold">
              Front-End Developer with 2.8+ years
            </span>{" "}
            of experience in building responsive, high-performance web apps
            using Next.js, React, Supabase, and Tailwind CSS. Worked on
            AI-powered platforms by integrating LLM models streams to UI,
            implemented Razorpay payment gateways, and handled buffer array
            transformations for rendering content like PDFs. Focused on clean
            code, scalability, and seamless user experience.
          </p>
          <div className="flex justify-center space-x-6 mt-8">
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
