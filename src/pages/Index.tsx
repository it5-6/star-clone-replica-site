import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import ProductsSection from "@/components/ProductsSection";
import FloatingActions from "@/components/FloatingActions";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSlider />
      <ProductsSection />
      <FloatingActions />
    </div>
  );
};

export default Index;
