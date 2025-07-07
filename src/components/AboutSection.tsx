import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/contexts/LanguageContext';
import { Award, Users, Globe, Target } from "lucide-react";

const AboutSection = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  const features = [
    {
      icon: Award,
      title: t('about.features.quality.title'),
      description: t('about.features.quality.description')
    },
    {
      icon: Users,
      title: t('about.features.experience.title'),
      description: t('about.features.experience.description')
    },
    {
      icon: Globe,
      title: t('about.features.global.title'),
      description: t('about.features.global.description')
    },
    {
      icon: Target,
      title: t('about.features.innovation.title'),
      description: t('about.features.innovation.description')
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-12 ${isRTL ? 'text-right' : 'text-left'}`}>
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            {t('about.badge')}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
            {t('about.title')}
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-center leading-relaxed">
            {t('about.description')}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-0 bg-card hover:bg-card/80 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Company Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="text-4xl font-bold text-primary mb-2">60%</div>
            <p className="text-muted-foreground">{t('about.stats.market_share')}</p>
          </div>
          <div className="text-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="text-4xl font-bold text-primary mb-2">100%</div>
            <p className="text-muted-foreground">{t('about.stats.quality')}</p>
          </div>
          <div className="text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="text-4xl font-bold text-primary mb-2">15+</div>
            <p className="text-muted-foreground">{t('about.stats.years')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;