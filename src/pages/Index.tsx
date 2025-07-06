import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import ProductsSection from "@/components/ProductsSection";
import FloatingActions from "@/components/FloatingActions";
import { LanguageProvider } from "@/contexts/LanguageContext";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <HeroSlider />
        <ProductsSection />
        <FloatingActions />
      </div>
    </LanguageProvider>
  );
};

export default Index;
