import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Button } from './ui/button';
import { MapPin, Smartphone, Monitor } from 'lucide-react';
import GoogleMap from './GoogleMap';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const AccessSection = () => {
  const [isMapDialogOpen, setIsMapDialogOpen] = useState(false);
  const { elementRef, hasBeenVisible } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '100px'
  });

  const handleGoogleMapsOpen = () => {
    const googleMapsUrl = 'https://www.google.com/maps/search/?api=1&query=東京都八王子市左入町356-1+YMオートヴィラA106';
    window.open(googleMapsUrl, '_blank');
    setIsMapDialogOpen(false);
  };

  const handleAppleMapsOpen = () => {
    const appleMapsUrl = 'http://maps.apple.com/?q=東京都八王子市左入町356-1+YMオートヴィラA106';
    window.open(appleMapsUrl, '_blank');
    setIsMapDialogOpen(false);
  };

  const isIOS = () => {
    return /iPad|iPhone|iPod/.test(navigator.userAgent);
  };

  const isMobile = () => {
    return window.innerWidth < 768;
  };

  const handleMapClick = () => {
    if (isMobile()) {
      setIsMapDialogOpen(true);
    } else {
      window.open('https://www.google.com/maps/search/?api=1&query=東京都八王子市左入町356-1+YMオートヴィラA106', '_blank');
    }
  };

  return (
    <section id="access" className="py-8 sm:py-12 md:py-16 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4 leading-tight break-words max-w-4xl mx-auto">
            アクセス
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto break-words">
            自動車整備工場 LABO へのアクセス方法
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {/* 地図 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden" ref={elementRef}>
              <div className="w-full h-64 sm:h-80 md:h-96 relative">
                {hasBeenVisible ? (
                  <GoogleMap
                    address="東京都八王子市左入町356-1 YMオートヴィラA106"
                    lat={35.685671182953016}
                    lng={139.3450477263893}
                    onMapClick={handleMapClick}
                  />
                ) : (
                  // Fallback iframe for initial load or when Google Maps fails
                  <iframe
                    src="https://www.google.com/maps?q=東京都八王子市左入町356-1+YMオートヴィラA106&hl=ja&z=16&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0, pointerEvents: 'auto' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="自動車整備工場 LABO 所在地"
                    className="touch-auto"
                  ></iframe>
                )}
                
                {/* Mobile overlay button - only show when using iframe */}
                {!hasBeenVisible && (
                  <div className="absolute bottom-4 left-4 md:hidden">
                    <Dialog open={isMapDialogOpen} onOpenChange={setIsMapDialogOpen}>
                      <DialogTrigger asChild>
                        <Button 
                          className="bg-white/90 text-gray-800 hover:bg-white shadow-lg backdrop-blur-sm"
                          size="sm"
                        >
                          <MapPin className="w-4 h-4 mr-2" />
                          地図アプリで開く
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                          <DialogTitle className="text-center">地図アプリを選択</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-3 pt-4">
                          <Button 
                            onClick={handleGoogleMapsOpen}
                            className="w-full bg-[#4285F4] hover:bg-[#3367D6] text-white"
                            size="lg"
                          >
                            <Monitor className="w-5 h-5 mr-3" />
                            Google マップで開く
                          </Button>
                          {isIOS() && (
                            <Button 
                              onClick={handleAppleMapsOpen}
                              className="w-full bg-[#007AFF] hover:bg-[#0056CC] text-white"
                              size="lg"
                            >
                              <Smartphone className="w-5 h-5 mr-3" />
                              Apple マップで開く
                            </Button>
                          )}
                          <Button 
                            onClick={() => setIsMapDialogOpen(false)}
                            variant="outline"
                            className="w-full"
                          >
                            キャンセル
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                )}

                {/* Desktop click overlay - only show when using iframe */}
                {!hasBeenVisible && (
                  <div 
                    className="absolute inset-0 cursor-pointer hidden md:block group"
                    onClick={handleMapClick}
                  >
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                      <div className="bg-white px-3 sm:px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 mx-2">
                        <p className="text-gray-800 font-medium text-xs sm:text-sm md:text-base text-center break-words">クリックで大きな地図を開く</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* アクセス情報 */}
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 leading-tight break-words">店舗情報</h3>
              
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2 flex items-center text-sm sm:text-base leading-tight">
                    <span className="w-2 h-2 bg-[#2ECC71] rounded-full mr-3 flex-shrink-0"></span>
                    住所
                  </h4>
                  <p className="text-gray-600 ml-5 text-xs sm:text-sm md:text-base leading-relaxed break-words">
                    〒192-0012<br />
                    東京都八王子市左入町356‐1<br />
                    YMオートヴィラA106
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2 flex items-center text-sm sm:text-base leading-tight">
                    <span className="w-2 h-2 bg-[#3498DB] rounded-full mr-3 flex-shrink-0"></span>
                    営業時間
                  </h4>
                  <p className="text-gray-600 ml-5 text-xs sm:text-sm md:text-base leading-relaxed break-words">
                    営業時間: 9:00 〜 18:00<br />
                    休日: 不定休 <br />
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2 flex items-center text-sm sm:text-base leading-tight">
                    <span className="w-2 h-2 bg-[#E74C3C] rounded-full mr-3 flex-shrink-0"></span>
                    電話番号
                  </h4>
                  <p className="text-gray-600 ml-5 text-xs sm:text-sm md:text-base leading-relaxed">
                    <a href="tel:042-696-3713" className="hover:text-[#3498DB] transition-colors break-words">
                      042-696-3713
                    </a>
                  </p>
                  <p className="text-gray-600 ml-5 text-xs sm:text-sm md:text-base leading-relaxed">
                    <a href="tel:042-696-3713" className="hover:text-[#3498DB] transition-colors break-words">
                      042-696-3714（FAX）
                    </a>
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2 flex items-center text-sm sm:text-base leading-tight">
                    <span className="w-2 h-2 bg-[#9B59B6] rounded-full mr-3 flex-shrink-0"></span>
                    メールアドレス
                  </h4>
                  <p className="text-gray-600 ml-5 text-xs sm:text-sm md:text-base leading-relaxed">
                    <a href="mailto:labo.k.ishikawa@gmail.com" className="hover:text-[#3498DB] transition-colors break-words">
                      labo.k.ishikawa@gmail.com
                    </a>
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2 flex items-center text-sm sm:text-base leading-tight">
                    <span className="w-2 h-2 bg-[#F39C12] rounded-full mr-3 flex-shrink-0"></span>
                    アクセス
                  </h4>
                  <p className="text-gray-600 ml-5 text-xs sm:text-sm md:text-base leading-relaxed break-words">
                    八王子インターチェンジが目印<br />
                    
                  </p>
                </div>
              </div>
              
              <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200">
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed break-words">
                  ※ 初回ご来店の際は、事前にお電話またはLINEでご連絡いただけますとスムーズです。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccessSection;
