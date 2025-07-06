import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const slides = [
  {
    title: "Representative of MEP system accessories manufacturing industry in Vietnam",
    description: "All products from Star Asia are highly appreciated and always attract the concentration of the market.",
    buttonText: "Xem thêm"
  },
  {
    title: "Occupying 60% of the market share of the high-end customer segment in Vietnam",
    description: "Star Asia supplies accessories for corporations & enterprises and also contributes to various large constructions throughout the country, from the North to the South.",
    buttonText: "Xem thêm"
  },
  {
    title: "100% products that meet international standard",
    description: "Meet standards such as AMCA, ASHRAE, UL, SMACNA, BSI, ISO,...and gradually penetrate Philippines, USA, Europe, Korea and Japan markets.",
    buttonText: "Xem thêm"
  },
  {
    title: "Manufacturers are always at the forefront of innovation",
    description: "Asia Star owns exclusive patented inventions that are mechanical and electrical engineering products, effectively contributing to the construction, management and operation of the building!",
    buttonText: "Xem thêm"
  }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-[600px] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {slides[currentSlide].title}
          </h1>
          <p className="text-lg mb-8 text-gray-200 leading-relaxed">
            {slides[currentSlide].description}
          </p>
          <Button 
            className="bg-primary hover:bg-primary-hover text-white px-8 py-3 text-lg rounded-full"
          >
            {slides[currentSlide].buttonText}
          </Button>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute left-6 top-1/2 transform -translate-y-1/2 flex flex-col space-y-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-primary scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-300 z-20"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-300 z-20"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </section>
  );
};

export default HeroSlider;