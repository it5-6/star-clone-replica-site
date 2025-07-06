import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSlider = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: t('hero.slide1.title'),
      description: t('hero.slide1.description'),
      buttonText: t('hero.slide1.button')
    },
    {
      title: t('hero.slide2.title'),
      description: t('hero.slide2.description'),
      buttonText: t('hero.slide2.button')
    },
    {
      title: t('hero.slide3.title'),
      description: t('hero.slide3.description'),
      buttonText: t('hero.slide3.button')
    },
    {
      title: t('hero.slide4.title'),
      description: t('hero.slide4.description'),
      buttonText: t('hero.slide4.button')
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

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
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className={`absolute inset-0 ${isRTL ? 'bg-gradient-to-l' : 'bg-gradient-to-r'} from-black/70 via-black/50 to-transparent`}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className={`max-w-2xl text-white ${isRTL ? 'text-right mr-auto' : 'text-left'}`}>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {slides[currentSlide].title}
          </h1>
          <p className="text-lg mb-8 text-gray-200 leading-relaxed">
            {slides[currentSlide].description}
          </p>
          <Button className="bg-primary hover:bg-primary-hover text-white px-8 py-3 text-lg rounded-full">
            {slides[currentSlide].buttonText}
          </Button>
        </div>
      </div>

      <div className={`absolute ${isRTL ? 'right-6' : 'left-6'} top-1/2 transform -translate-y-1/2 flex flex-col space-y-3 z-20`}>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-primary scale-125' : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>

      <button
        onClick={prevSlide}
        className={`absolute ${isRTL ? 'right-4' : 'left-4'} top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-300 z-20`}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className={`absolute ${isRTL ? 'left-4' : 'right-4'} top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-300 z-20`}
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </section>
  );
};

export default HeroSlider;