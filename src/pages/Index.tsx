import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import ProjectsSection from "@/components/ProjectsSection";
import Map from "@/components/Map";
import FloatingActions from "@/components/FloatingActions";
import { LanguageProvider } from "@/contexts/LanguageContext";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <HeroSlider />
        <AboutSection />
        <ProductsSection />
        <ProjectsSection />
        <Map />
        <FloatingActions />
      </div>
    </LanguageProvider>
  );
};

export default Index;
