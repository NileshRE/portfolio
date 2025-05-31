import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import AboutMeSection from "@/components/AboutMeSection";
import UXSection from "@/components/UXSection";
import CertificateSection from "@/components/CertificateSection";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutMeSection />
      <ProjectsSection />
      <SkillsSection />
      <CertificateSection />
      <UXSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
