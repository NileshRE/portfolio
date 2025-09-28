import AboutMeSection from "@/components/AboutMeSection";
import AchievementSection from "@/components/Achievements";
import CertificateSection from "@/components/CertificateSection";
import Chat from "@/components/Chat";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import UXSection from "@/components/UXSection";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutMeSection />
      <ProjectsSection />
      <SkillsSection />
      <CertificateSection />
      <AchievementSection />
      <Chat />
      <UXSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
