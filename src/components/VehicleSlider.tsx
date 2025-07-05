

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
      image: 'https://ccsrpcma.carsensor.net/CSphoto/bkkn/941/971/U00048941971/U00048941971_002L.JPG',
      detailUrl: 'https://www.carsensor.net/usedcar/detail/AU6346688296/index.html?TRCD=200002&RESTID=CS211800'
    },
    {
      id: 2,
      name: 'スズキソリオ',
      year: '2012年',
      mileage: '4.9万km',
      price: '40万円',
      image: 'https://ccsrpcml.carsensor.net/CSphoto/ml/995/806/U00048995806/U00048995806_2_004.jpg?ver=detail001&impolicy=car_002',
      detailUrl: 'https://www.carsensor.net/usedcar/detail/AU6348097333/index.html?TRCD=200002&RESTID=CS211800'
    },
    {
      id: 3,
      name: 'BMW 5 Series 523i ツーリング',
      year: '2016年',
      mileage: '5.9万km',
      price: '104万円',
      image: 'https://ccsrpcma.carsensor.net/CSphoto/bkkn/990/599/U00048990599/U00048990599_001.JPG?ver=detail001&impolicy=car_002',
      detailUrl: 'https://www.carsensor.net/usedcar/detail/AU6346817009/index.html?TRCD=200002&RESTID=CS211800'
    },
    {
      id: 4,
      name: '日産エルグランド',
      year: '2010年',
      mileage: '12.1万km',
      price: '50万円',
      image: 'https://ccsrpcma.carsensor.net/CSphoto/bkkn/988/838/U00048988838/U00048988838_002.JPG?ver=detail001&impolicy=car_002',
      detailUrl: 'https://www.carsensor.net/usedcar/detail/AU6347928266/index.html?TRCD=200002&RESTID=CS211800'
    },
    {
      id: 5,
      name: 'ダイハツ ハイゼットカーゴ',
      year: '2019年',
      mileage: '7.4万km',
      price: '75万円',
      image: 'https://ccsrpcma.carsensor.net/CSphoto/bkkn/975/907/U00048975907/U00048975907_002.JPG?ver=detail001&impolicy=car_002',
      detailUrl: 'https://www.carsensor.net/usedcar/detail/AU6346687958/index.html?TRCD=200002&RESTID=CS211800'
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight break-words max-w-4xl mx-auto">
            在庫車両
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto break-words font-medium">
            厳選された高品質な中古車をご紹介
          </p>
        </div>
        
        <Carousel 
          className="w-full max-w-6xl mx-auto"
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
          <CarouselContent className="-ml-2 sm:-ml-3 md:-ml-4 touch-pan-y">
            {vehicles.map((vehicle) => (
              <CarouselItem key={vehicle.id} className="pl-2 sm:pl-3 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden select-none border border-gray-100 transform hover:-translate-y-1">
                  <div className="relative w-full aspect-[4/3] bg-gray-50 border-b border-gray-100">
                    <img 
                      src={vehicle.image} 
                      alt={vehicle.name}
                      className="w-full h-full object-contain pointer-events-none"
                      draggable={false}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-5 sm:p-6 md:p-7">
                    <h3 className="font-bold text-lg sm:text-xl md:text-2xl mb-4 text-gray-900 leading-tight break-words">
                      {vehicle.name}
                    </h3>
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500 font-medium text-sm sm:text-base">年式</span>
                        <span className="text-gray-900 font-semibold text-sm sm:text-base">{vehicle.year}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500 font-medium text-sm sm:text-base">走行距離</span>
                        <span className="text-gray-900 font-semibold text-sm sm:text-base">{vehicle.mileage}</span>
                      </div>
                      <div className="border-t border-gray-100 pt-3">
                        <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-600 break-words text-center">
                          {vehicle.price}
                        </p>
                      </div>
                    </div>
                    <a 
                      href={vehicle.detailUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full"
                    >
                      <Button className="w-full bg-gradient-to-r from-[#FFA500] to-[#FF8C00] hover:from-[#FF8C00] hover:to-[#FF7F00] text-white font-semibold py-3 sm:py-4 text-base sm:text-lg whitespace-nowrap shadow-md hover:shadow-lg transition-all duration-300">
                        詳細を見る
                      </Button>
                    </a>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 sm:left-4 bg-white/90 hover:bg-white shadow-lg border border-gray-200" />
          <CarouselNext className="right-2 sm:right-4 bg-white/90 hover:bg-white shadow-lg border border-gray-200" />
        </Carousel>
        
        <div className="text-center mt-10 sm:mt-12 px-4">
          <a 
            href="https://www.carsensor.net/shop/tokyo/329460001/stocklist/?BKKN=AU6346688296&BKKNTR=1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full max-w-96"
          >
            <Button 
              className="bg-gradient-to-r from-[#FFA500] to-[#FF8C00] hover:from-[#FF8C00] hover:to-[#FF7F00] text-white w-full h-16 sm:h-18 md:h-20 text-lg sm:text-xl md:text-2xl font-bold whitespace-nowrap break-keep shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
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
