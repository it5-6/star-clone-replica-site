import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/contexts/LanguageContext';
import { ExternalLink } from "lucide-react";

const ProjectsSection = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  const projects = [
    {
      title: t('projects.items.office_tower.title'),
      category: t('projects.items.office_tower.category'),
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: t('projects.items.office_tower.description')
    },
    {
      title: t('projects.items.shopping_mall.title'),
      category: t('projects.items.shopping_mall.category'),
      image: "https://images.unsplash.com/photo-1555636222-cae831e670b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: t('projects.items.shopping_mall.description')
    },
    {
      title: t('projects.items.hospital.title'),
      category: t('projects.items.hospital.category'),
      image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: t('projects.items.hospital.description')
    },
    {
      title: t('projects.items.factory.title'),
      category: t('projects.items.factory.category'),
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: t('projects.items.factory.description')
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-12 ${isRTL ? 'text-right' : 'text-left'}`}>
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            {t('projects.badge')}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
            {t('projects.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-center">
            {t('projects.description')}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button 
                    size="sm" 
                    className="bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {t('projects.view_details')}
                  </Button>
                </div>
              </div>
              <CardContent className={`p-6 ${isRTL ? 'text-right' : 'text-left'}`}>
                <div className="text-sm text-primary font-medium mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button size="lg" className="animate-fade-in hover-scale" style={{ animationDelay: '0.4s' }}>
            {t('projects.view_all')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;