
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

const VehicleSlider = () => {
  const vehicles = [
    {
      id: 1,
      name: 'ダイハツ ウェイク',
      year: '2016年',
      mileage: '15.5万km',
      price: '40万円',
      image: 'https://ccsrpcma.carsensor.net/CSphoto/bkkn/941/971/U00048941971/U00048941971_002L.JPG'
    },
    {
      id: 2,
      name: 'スズキソリオ',
      year: '2012年',
      mileage: '4.9万km',
      price: '40万円',
      image: 'https://ccsrpcml.carsensor.net/CSphoto/ml/995/806/U00048995806/U00048995806_2_004.jpg?ver=detail001&impolicy=car_002'
    },
    {
      id: 3,
      name: 'BMW 5 Series 523i ツーリング',
      year: '2016年',
      mileage: '5.9万km',
      price: '104万円',
      image: 'https://ccsrpcma.carsensor.net/CSphoto/bkkn/990/599/U00048990599/U00048990599_001.JPG?ver=detail001&impolicy=car_002'
    },
    {
      id: 4,
      name: '日産エルグランド',
      year: '2010年',
      mileage: '12.1万km',
      price: '50万円',
      image: 'https://ccsrpcma.carsensor.net/CSphoto/bkkn/988/838/U00048988838/U00048988838_002.JPG?ver=detail001&impolicy=car_002'
    },
    {
      id: 5,
      name: 'ダイハツ ハイゼットカーゴ',
      year: '2019年',
      mileage: '7.4万km',
      price: '75万円',
      image: 'https://ccsrpcma.carsensor.net/CSphoto/bkkn/975/907/U00048975907/U00048975907_002.JPG?ver=detail001&impolicy=car_002'
    }
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4 leading-tight break-words max-w-4xl mx-auto">
            在庫車両
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto break-words">
            厳選された高品質な中古車をご紹介
          </p>
        </div>
        
        <Carousel 
          className="w-full max-w-5xl mx-auto"
          opts={{
            align: "start",
            loop: true,
            dragFree: false,
            containScroll: "trimSnaps",
            slidesToScroll: 1,
            duration: 25,
            skipSnaps: false,
            inViewThreshold: 0.7
          }}
        >
          <CarouselContent className="-ml-1 sm:-ml-2 md:-ml-4 touch-pan-y">
            {vehicles.map((vehicle) => (
              <CarouselItem key={vehicle.id} className="pl-1 sm:pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow select-none">
                  <div className="relative w-full aspect-[4/3] bg-gray-100">
                    <img 
                      src={vehicle.image} 
                      alt={vehicle.name}
                      className="w-full h-full object-contain pointer-events-none"
                      draggable={false}
                    />
                  </div>
                  <div className="p-4 sm:p-6">
                    <h3 className="font-bold text-base sm:text-lg md:text-xl mb-2 text-gray-800 leading-tight break-words">
                      {vehicle.name}
                    </h3>
                    <div className="space-y-2 mb-4">
                      <p className="text-gray-600 text-xs sm:text-sm md:text-base break-words">年式: {vehicle.year}</p>
                      <p className="text-gray-600 text-xs sm:text-sm md:text-base break-words">走行距離: {vehicle.mileage}</p>
                      <p className="text-lg sm:text-xl md:text-2xl font-bold text-[#3498DB] break-words">{vehicle.price}</p>
                    </div>
                    <Button className="w-full border-[#FFA500] text-[#FFA500] hover:bg-[#FFA500] hover:text-white text-xs sm:text-sm md:text-base whitespace-nowrap" variant="outline">
                      詳細を見る
                    </Button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-1 sm:left-2" />
          <CarouselNext className="right-1 sm:right-2" />
        </Carousel>
        
        <div className="text-center mt-6 sm:mt-8 px-4">
          <a 
            href="https://www.carsensor.net/shop/tokyo/329460001/stocklist/?BKKN=AU6346688296&BKKNTR=1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full max-w-80"
          >
            <Button 
              className="bg-[#FFA500] hover:bg-[#FF8C00] text-white w-full h-14 sm:h-16 md:h-20 text-base sm:text-lg md:text-2xl font-bold whitespace-nowrap break-keep"
            >
              在庫車両一覧を見る
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default VehicleSlider;
