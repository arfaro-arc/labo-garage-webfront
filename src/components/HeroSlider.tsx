import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Car } from "lucide-react";
import { useMemo } from "react";

const HeroSlider = () => {
  const slides = useMemo(() => [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&h=600&fit=crop&q=80&auto=format',
      title: '「軽もフェラーリも、同じ精度で整備する。」',
      subtitle: '「“整備の本質”を見極めるプロフェッショナルガレージ」'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&h=600&fit=crop&q=80&auto=format',
      title: '車の価格に関係なく、必要な整備を、正しく、無駄なく、美しく行います。',
      subtitle: '「LABOでは、高級車も軽自動車も、必要な作業に応じて適正価格をご提示します。整備内容に無駄はなく、作業には一切の妥協もありません。」'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&h=600&fit=crop&q=80&auto=format',
      title: 'あなたの愛車を最高のコンディションに',
      subtitle: '安全で快適なカーライフをお約束します'
    }
  ], []);

  const handleLineClick = () => {
    window.open('https://lin.ee/Akkloat', '_blank');
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:0426963713';
  };

  const handleCarsensorClick = () => {
    window.open('https://www.carsensor.net/shop/tokyo/329460001/?BKKN=AU6346688296&BKKNTR=1', '_blank');
  };

  return (
    <section className="relative w-full overflow-hidden pt-16 md:pt-0">
      <Carousel className="w-full" opts={{ loop: true, duration: 20 }}>
        <CarouselContent>
          {slides.map((slide) => (
            <CarouselItem key={slide.id}>
              <div className="relative h-[50vh] sm:h-[60vh] md:h-[70vh]">
                <img
                  src={slide.image}
                  alt={slide.title}
                  loading={slide.id === 1 ? "eager" : "lazy"}
                  className="absolute inset-0 w-full h-full object-cover"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
                  <div className="max-w-4xl w-full">
                    <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 animate-fade-in leading-tight break-words hyphens-auto">
                      {slide.title}
                    </h1>
                    <p className="text-sm sm:text-base md:text-xl lg:text-2xl mb-6 sm:mb-8 animate-fade-in leading-relaxed break-words max-w-3xl mx-auto">
                      {slide.subtitle}
                    </p>
                    <div className="flex flex-col gap-3 sm:gap-4 md:gap-6 justify-center animate-fade-in max-w-full">
                      <Button
                        onClick={handleLineClick}
                        className="bg-[#2ECC71] hover:bg-[#27AE60] text-white px-4 sm:px-8 md:px-12 py-5 sm:py-6 md:py-8 text-sm sm:text-base md:text-lg lg:text-xl flex items-center gap-2 sm:gap-3 w-full sm:w-auto min-h-[48px] whitespace-nowrap"
                        size="lg"
                      >
                        <MessageCircle size={16} className="sm:w-5 sm:h-5" />
                        <span className="break-keep">LINEで連絡する</span>
                      </Button>
                      <Button
                        onClick={handlePhoneClick}
                        className="bg-[#3498DB] hover:bg-[#2980B9] text-white px-4 sm:px-8 md:px-12 py-5 sm:py-6 md:py-8 text-sm sm:text-base md:text-lg lg:text-xl flex items-center gap-2 sm:gap-3 w-full sm:w-auto min-h-[48px] whitespace-nowrap"
                        size="lg"
                      >
                        <Phone size={16} className="sm:w-5 sm:h-5" />
                        <span className="break-keep">電話する</span>
                      </Button>
                      <Button
                        onClick={handleCarsensorClick}
                        className="bg-[#FFA500] hover:bg-[#FF8C00] text-white px-4 sm:px-8 md:px-12 py-5 sm:py-6 md:py-8 text-sm sm:text-base md:text-lg lg:text-xl flex items-center gap-2 sm:gap-3 w-full sm:w-auto min-h-[48px] whitespace-nowrap"
                        size="lg"
                      >
                        <Car size={16} className="sm:w-5 sm:h-5" />
                        <span className="break-keep">カーセンサーを見に行く</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 sm:left-4" />
        <CarouselNext className="right-2 sm:right-4" />
      </Carousel>
    </section>
  );
};

export default HeroSlider;
