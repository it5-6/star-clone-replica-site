import { MessageCircle, Facebook, Phone, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const FloatingActions = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed right-6 bottom-6 flex flex-col space-y-3 z-50">
      {/* Chat Button */}
      <Button
        size="lg"
        className="w-14 h-14 rounded-full bg-primary hover:bg-primary-hover text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>

      {/* Social Media Buttons */}
      <Button
        size="lg"
        className="w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      >
        <Facebook className="w-6 h-6" />
      </Button>

      <Button
        size="lg"
        className="w-14 h-14 rounded-full bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      >
        <Phone className="w-6 h-6" />
      </Button>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          size="lg"
          className="w-14 h-14 rounded-full bg-gray-600 hover:bg-gray-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        >
          <ArrowUp className="w-6 h-6" />
        </Button>
      )}
    </div>
  );
};

export default FloatingActions;