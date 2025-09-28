"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NavLink, navLinks } from "@/lib/constants";
import { ChevronDown, Menu, Moon, Sun, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true); // default to dark

  // Set default dark mode on mount
  useEffect(() => {
    document.documentElement.classList.add("dark");
    setIsDark(true);
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    document.documentElement.classList.toggle("dark", nextDark);
  };

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold border-b-2 border-black dark:border-white ml-4 drop-shadow-whiteGlow">
            N
          </h2>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => {
              const isProjectLink = link.label === NavLink.Projects;
              return isProjectLink ? (
                <Popover key={link.href}>
                  <PopoverTrigger asChild>
                    <button className="font-medium hover:text-primary/80 transition-colors">
                      {link.label}
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="w-64">
                    <Link
                      href="#all-projects"
                      className="block px-2 py-1 hover:bg-accent transition border-b mb-2"
                    >
                      Projects
                    </Link>
                    <Link
                      href="#challenges"
                      className="block px-2 py-1 hover:bg-accent transition border-b"
                    >
                      Challenges Faced on Live Projects
                    </Link>
                  </PopoverContent>
                </Popover>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-medium hover:text-primary/80 transition-colors"
                >
                  {link.label}
                </Link>
              );
            })}

            <Button
              variant="outline"
              size="icon"
              onClick={toggleTheme}
              className="rounded-xl"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun /> : <Moon />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="flex gap-4 items-center md:hidden">
            <Button
              variant="outline"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun /> : <Moon />}
            </Button>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden"
                  aria-label="Toggle menu"
                >
                  {isOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full p-8">
                <SheetTitle className="hidden"></SheetTitle>
                <div className="flex flex-col space-y-4">
                  {navLinks.map((link) => {
                    const isProjectLink = link.label === NavLink.Projects;
                    return isProjectLink ? (
                      <Collapsible key={link.href}>
                        <div className="flex items-center justify-between">
                          {link.label}
                          <CollapsibleTrigger className="flex items-center justify-between font-medium hover:text-primary transition-colors">
                            <ChevronDown />
                          </CollapsibleTrigger>
                        </div>
                        <CollapsibleContent className="pl-4 mt-2 space-y-2">
                          <SheetClose asChild>
                            <div>
                              <Link
                                href="#all-projects"
                                className="block px-2 py-1 hover:bg-accent transition border-b mb-2"
                                onClick={() => setIsOpen(false)}
                              >
                                Projects
                              </Link>
                              <Link
                                href="#challenges"
                                className="block px-2 py-1 hover:bg-accent transition border-b mb-2"
                                onClick={() => setIsOpen(false)}
                              >
                                Challenges Faced on Live Projects
                              </Link>
                            </div>
                          </SheetClose>
                        </CollapsibleContent>
                      </Collapsible>
                    ) : (
                      <SheetClose asChild key={link.href}>
                        <Link
                          href={link.href}
                          className="hover:text-primary transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {link.label}
                        </Link>
                      </SheetClose>
                    );
                  })}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
