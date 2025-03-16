import AboutSection from "@/components/v_1/AboutSection";
import ContactSection from "@/components/v_1/ContactSection";
import Footer from "@/components/v_1/Footer";
import HeroSection from "@/components/v_1/HeroSection";
import Navbar from "@/components/v_1/Navbar";
import ProjectsSection from "@/components/v_1/ProjectSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
