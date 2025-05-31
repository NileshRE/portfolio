"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { links } from "@/lib/constants";
import { Github, Linkedin, Mail } from "lucide-react";
import WordpressLogo from "@/assets/images/wordpress.png";

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
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Nilesh Kumar</h1>

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
              Front-End Developer with 2.5+ years
            </span>{" "}
            of experience in building responsive, high-performance web apps
            using Next.js, React, Supabase, and Tailwind CSS. Worked on
            AI-powered platforms by integrating LLM models streams to UI,
            implemented Razorpay payment gateways, and handled buffer array
            transformations for rendering content like PDFs. Focused on clean
            code, scalability, and seamless user experience.
          </p>
          <div className="flex justify-center space-x-6 mt-8">
            <Button asChild variant="outline" size="icon">
              <Link
                href={links.github}
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github
                  fillRule="evenodd"
                  className="size-8 text-black dark:text-white"
                />
              </Link>
            </Button>
            <Button asChild variant="outline" size="icon">
              <Link
                href={links.linkedin}
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin
                  fillRule="evenodd"
                  className="size-8 text-blue-400 dark:text-blue-600"
                />
              </Link>
            </Button>
            <Button asChild variant="outline" size="icon">
              <Link
                href={links.mail}
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail fillRule="evenodd" className="text-red-500" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="icon">
              <Link
                href={links.wordpress}
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Image
                  src={WordpressLogo}
                  alt="Wordpress-logo"
                  className="size-6"
                />
              </Link>
            </Button>
            <Button asChild variant="outline" size="icon">
              <Link
                href={links.whatsapp}
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="green"
                  className="bi bi-whatsapp"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                </svg>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
