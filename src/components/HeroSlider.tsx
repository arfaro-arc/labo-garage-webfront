
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Car } from "lucide-react";

const HeroSlider = () => {
  const slides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&h=600&fit=crop',
      title: 'あなたの愛車を最高のコンディションに',
      subtitle: 'プロフェッショナルな技術で愛車をサポート'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&h=600&fit=crop',
      title: 'あなたの愛車を最高のコンディションに',
      subtitle: '長年の経験と最新の設備でお応えします'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&h=600&fit=crop',
      title: 'あなたの愛車を最高のコンディションに',
      subtitle: '安全で快適なカーライフをお約束します'
    }
  ];

  const handleLineClick = () => {
    window.open('https://lin.ee/Akkloat', '_blank');
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:042-XXX-XXXX';
  };

  const handleCarsensorClick = () => {
    window.open('https://www.carsensor.net/', '_blank');
  };

  return (
    <section className="relative w-full overflow-hidden pt-16 md:pt-0">
      <Carousel className="w-full">
        <CarouselContent>
          {slides.map((slide) => (
            <CarouselItem key={slide.id}>
              <div className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] bg-cover bg-center" style={{backgroundImage: `url(${slide.image})`}}>
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
                  <div className="max-w-4xl w-full">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 animate-fade-in">
                      {slide.title}
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 animate-fade-in">
                      {slide.subtitle}
                    </p>
                    <div className="flex flex-col gap-3 sm:gap-4 md:gap-6 justify-center animate-fade-in max-w-full">
                      <Button
                        onClick={handleLineClick}
                        className="bg-[#2ECC71] hover:bg-[#27AE60] text-white px-4 sm:px-8 md:px-12 py-6 sm:py-8 md:py-9 text-sm sm:text-lg md:text-xl flex items-center gap-2 sm:gap-3 w-full sm:w-auto"
                        size="lg"
                      >
                        <MessageCircle size={20} />
                        LINEで連絡する
                      </Button>
                      <Button
                        onClick={handlePhoneClick}
                        className="bg-[#3498DB] hover:bg-[#2980B9] text-white px-4 sm:px-8 md:px-12 py-6 sm:py-8 md:py-9 text-sm sm:text-lg md:text-xl flex items-center gap-2 sm:gap-3 w-full sm:w-auto"
                        size="lg"
                      >
                        <Phone size={20} />
                        電話する
                      </Button>
                      <Button
                        onClick={handleCarsensorClick}
                        className="bg-[#FFA500] hover:bg-[#FF8C00] text-white px-4 sm:px-8 md:px-12 py-6 sm:py-8 md:py-9 text-sm sm:text-lg md:text-xl flex items-center gap-2 sm:gap-3 w-full sm:w-auto"
                        size="lg"
                      >
                        <Car size={20} />
                        カーセンサーを見に行く
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
