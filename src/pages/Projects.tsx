import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowLeft, ArrowRight, ExternalLink, MapPin, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import FloatingActions from "@/components/FloatingActions";
import { LanguageProvider } from "@/contexts/LanguageContext";

const Projects = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  const projects = [
    {
      title: t('projects.items.office_tower.title'),
      category: t('projects.items.office_tower.category'),
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: t('projects.items.office_tower.description'),
      location: "Ho Chi Minh City",
      year: "2023",
      size: "40 floors"
    },
    {
      title: t('projects.items.shopping_mall.title'),
      category: t('projects.items.shopping_mall.category'),
      image: "https://images.unsplash.com/photo-1555636222-cae831e670b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: t('projects.items.shopping_mall.description'),
      location: "Hanoi",
      year: "2022",
      size: "5 floors"
    },
    {
      title: t('projects.items.hospital.title'),
      category: t('projects.items.hospital.category'),
      image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: t('projects.items.hospital.description'),
      location: "Da Nang",
      year: "2023",
      size: "15 floors"
    },
    {
      title: t('projects.items.factory.title'),
      category: t('projects.items.factory.category'),
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: t('projects.items.factory.description'),
      location: "Binh Duong",
      year: "2021",
      size: "50,000 m²"
    }
  ];

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-r from-primary/10 to-primary/5">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
                {t('projects.page_title')}
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
                {t('projects.page_description')}
              </p>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <Card 
                  key={index} 
                  className="group hover:shadow-xl transition-all duration-500 cursor-pointer border-0 bg-card overflow-hidden animate-fade-in hover-scale"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button 
                        size="sm" 
                        className="bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        {t('projects.view_details')}
                      </Button>
                    </div>
                  </div>
                  <CardContent className={`p-8 ${isRTL ? 'text-right' : 'text-left'}`}>
                    <div className="text-sm text-primary font-medium mb-3">
                      {project.category}
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Project Details */}
                    <div className="space-y-2">
                      <div className={`flex items-center text-sm text-muted-foreground ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{project.location}</span>
                      </div>
                      <div className={`flex items-center text-sm text-muted-foreground ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{project.year} • {project.size}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Back to Home */}
        <section className="py-16 text-center">
          <Link to="/">
            <Button size="lg" variant="outline" className="hover-scale">
              {isRTL ? <ArrowRight className="w-4 h-4 mr-2" /> : <ArrowLeft className="w-4 h-4 mr-2" />}
              {t('projects.back_to_home')}
            </Button>
          </Link>
        </section>

        <FloatingActions />
      </div>
    </LanguageProvider>
  );
};

export default Projects;