import { Search, ShoppingCart, User, Package, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/contexts/LanguageContext';

const Header = () => {
  const { t } = useTranslation();
  const { language, toggleLanguage, isRTL } = useLanguage();

  return (
    <header className="bg-header-dark text-header-text">
      {/* Top Header */}
      <div className="container mx-auto px-4 py-3">
        <div className={`flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
          {/* Logo */}
          <div className={`flex items-center space-x-2 ${isRTL ? 'space-x-reverse' : ''}`}>
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <span className="text-xl font-bold">{t('header.logo')}</span>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Search className={`absolute ${isRTL ? 'right-3' : 'left-3'} top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4`} />
              <Input
                placeholder={t('header.search_placeholder')}
                className={`${isRTL ? 'pr-10' : 'pl-10'} bg-white border-0 text-gray-900 placeholder:text-gray-500`}
              />
            </div>
          </div>

          {/* User Actions */}
          <div className={`flex items-center space-x-6 ${isRTL ? 'space-x-reverse' : ''}`}>
            
            <div className={`flex items-center space-x-2 text-sm ${isRTL ? 'space-x-reverse' : ''}`}>
              <User className="w-4 h-4" />
              <div>
                <div className="text-xs">{t('header.my_account')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-primary">
        <div className="container mx-auto px-4">
          <nav className={`flex items-center justify-between py-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <div className={`flex items-center space-x-8 ${isRTL ? 'space-x-reverse' : ''}`}>
              <Button variant="ghost" className="text-white hover:bg-primary-hover">
                {t('header.nav.about')}
              </Button>
              <Button variant="ghost" className="text-white hover:bg-primary-hover">
                {t('header.nav.products')}
              </Button>
              <Button variant="ghost" className="text-white hover:bg-primary-hover">
                {t('header.nav.projects')}
              </Button>
              <Button variant="ghost" className="text-white hover:bg-primary-hover">
                {t('header.nav.services')}
              </Button>
              <Button variant="ghost" className="text-white hover:bg-primary-hover">
                {t('header.nav.contact')}
              </Button>
            </div>
            
            <div className={`flex items-center space-x-2 ${isRTL ? 'space-x-reverse' : ''}`}>
              <Button 
                onClick={toggleLanguage}
                variant="ghost" 
                className={`text-white hover:bg-primary-hover text-sm ${language === 'ar' ? 'font-bold' : ''}`}
              >
                العربية
              </Button>
              <span className="text-white">|</span>
              <Button 
                onClick={toggleLanguage}
                variant="ghost" 
                className={`text-white hover:bg-primary-hover text-sm ${language === 'en' ? 'font-bold' : ''}`}
              >
                ENG
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;