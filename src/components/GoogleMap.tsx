
import { useEffect, useRef, useState } from 'react';
import { Skeleton } from './ui/skeleton';

interface GoogleMapProps {
  address: string;
  lat: number;
  lng: number;
  onMapClick?: () => void;
}

declare global {
  interface Window {
    google: any;
    initMap: () => void;
  }
}

const GoogleMap = ({ address, lat, lng, onMapClick }: GoogleMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    const loadGoogleMaps = async () => {
      try {
        // Check if Google Maps is already loaded
        if (window.google && window.google.maps) {
          initializeMap();
          return;
        }

        // Load Google Maps API
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY || 'YOUR_API_KEY_HERE'}&libraries=places`;
        script.async = true;
        script.defer = true;
        
        script.onload = () => {
          initializeMap();
        };
        
        script.onerror = () => {
          console.error('Failed to load Google Maps API');
          setIsError(true);
        };

        document.head.appendChild(script);
      } catch (error) {
        console.error('Error loading Google Maps:', error);
        setIsError(true);
      }
    };

    const initializeMap = () => {
      if (!mapRef.current || !window.google) return;

      try {
        const map = new window.google.maps.Map(mapRef.current, {
          center: { lat, lng },
          zoom: 16,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: false,
          zoomControl: true,
          gestureHandling: 'cooperative',
          styles: [
            {
              featureType: 'poi',
              elementType: 'labels',
              stylers: [{ visibility: 'off' }]
            }
          ]
        });

        // Add marker
        const marker = new window.google.maps.Marker({
          position: { lat, lng },
          map: map,
          title: '自動車整備工場 LABO',
          animation: window.google.maps.Animation.DROP,
        });

        // Add info window
        const infoWindow = new window.google.maps.InfoWindow({
          content: `
            <div style="padding: 8px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;">
              <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: bold;">自動車整備工場 LABO</h3>
              <p style="margin: 0; font-size: 14px; color: #666;">${address}</p>
            </div>
          `
        });

        marker.addListener('click', () => {
          infoWindow.open(map, marker);
        });

        // Add click listener for opening in external map app
        if (onMapClick) {
          map.addListener('click', onMapClick);
        }

        mapInstanceRef.current = map;
        setIsLoaded(true);
      } catch (error) {
        console.error('Error initializing map:', error);
        setIsError(true);
      }
    };

    loadGoogleMaps();

    return () => {
      // Cleanup is handled by React's unmounting
    };
  }, [lat, lng, address, onMapClick]);

  if (isError) {
    return (
      <div className="w-full h-full bg-gray-100 flex items-center justify-center rounded-lg">
        <div className="text-center p-4">
          <p className="text-gray-600 mb-2">地図の読み込みに失敗しました</p>
          <button 
            onClick={() => window.location.reload()} 
            className="text-blue-600 hover:text-blue-800 underline text-sm"
          >
            再読み込み
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full">
      {!isLoaded && (
        <Skeleton className="absolute inset-0 rounded-lg" />
      )}
      <div 
        ref={mapRef} 
        className={`w-full h-full rounded-lg transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
      {isLoaded && onMapClick && (
        <div className="absolute inset-0 cursor-pointer group">
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center rounded-lg">
            <div className="bg-white px-3 sm:px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 mx-2">
              <p className="text-gray-800 font-medium text-xs sm:text-sm md:text-base text-center break-words">クリックで大きな地図を開く</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GoogleMap;
