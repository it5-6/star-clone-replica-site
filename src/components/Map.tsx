import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/contexts/LanguageContext';

const Map = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [accessToken, setAccessToken] = useState('');
  const [showTokenInput, setShowTokenInput] = useState(true);

  const initializeMap = (token: string) => {
    if (!mapContainer.current || !token) return;

    mapboxgl.accessToken = token;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [105.8542, 21.0285], // Ho Chi Minh City, Vietnam
      zoom: 10,
    });

    // Add marker for company location
    new mapboxgl.Marker({
      color: '#E97E33'
    })
    .setLngLat([105.8542, 21.0285])
    .setPopup(new mapboxgl.Popup().setHTML('<h3>STARDUCT Vietnam</h3><p>MEP System Solutions</p>'))
    .addTo(map.current);

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    setShowTokenInput(false);
  };

  const handleTokenSubmit = () => {
    if (accessToken.trim()) {
      initializeMap(accessToken.trim());
    }
  };

  useEffect(() => {
    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('map.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('map.description')}
          </p>
        </div>

        <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg">
          {showTokenInput && (
            <div className="absolute inset-0 bg-background/95 backdrop-blur-sm z-10 flex items-center justify-center">
              <div className="bg-card p-6 rounded-lg shadow-lg max-w-md w-full mx-4">
                <h3 className="text-lg font-semibold mb-4 text-center">
                  {t('map.token_required')}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 text-center">
                  {t('map.token_instruction')}
                </p>
                <div className={`flex gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <Input
                    type="text"
                    placeholder={t('map.token_placeholder')}
                    value={accessToken}
                    onChange={(e) => setAccessToken(e.target.value)}
                    className="flex-1"
                  />
                  <Button onClick={handleTokenSubmit}>
                    {t('map.load_map')}
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-2 text-center">
                  {t('map.mapbox_link')} <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-primary underline">mapbox.com</a>
                </p>
              </div>
            </div>
          )}
          <div ref={mapContainer} className="w-full h-full" />
        </div>
      </div>
    </section>
  );
};

export default Map;