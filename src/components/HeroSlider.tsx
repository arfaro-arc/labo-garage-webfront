
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

const HeroSlider = () => {
  const slides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200&h=600&fit=crop',
      title: 'あなたの愛車を最高のコンディションに',
      subtitle: 'プロフェッショナルな技術で愛車をサポート'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1200&h=600&fit=crop',
      title: 'あなたの愛車を最高のコンディションに',
      subtitle: '長年の経験と最新の設備でお応えします'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1200&h=600&fit=crop',
      title: 'あなたの愛車を最高のコンディションに',
      subtitle: '安全で快適なカーライフをお約束します'
    }
  ];

  const handleLineClick = () => {
    window.open('https://line.me/R/ti/p/@your-line-id', '_blank');
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:042-XXX-XXXX';
  };

  return (
    <section className="relative">
      <Carousel className="w-full">
        <CarouselContent>
          {slides.map((slide) => (
            <CarouselItem key={slide.id}>
              <div className="relative h-[70vh] bg-cover bg-center" style={{backgroundImage: `url(${slide.image})`}}>
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="relative z-10 h-full flex items-center justify-center text-center text-white">
                  <div className="max-w-4xl px-4">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
                      {slide.title}
                    </h1>
                    <p className="text-lg md:text-xl lg:text-2xl mb-8 animate-fade-in">
                      {slide.subtitle}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
                      <Button
                        onClick={handleLineClick}
                        className="bg-[#2ECC71] hover:bg-[#27AE60] text-white px-8 py-3 text-lg flex items-center gap-2"
                        size="lg"
                      >
                        <MessageCircle size={20} />
                        LINEで連絡する
                      </Button>
                      <Button
                        onClick={handlePhoneClick}
                        className="bg-[#3498DB] hover:bg-[#2980B9] text-white px-8 py-3 text-lg flex items-center gap-2"
                        size="lg"
                      >
                        <Phone size={20} />
                        電話する
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </section>
  );
};

export default HeroSlider;
