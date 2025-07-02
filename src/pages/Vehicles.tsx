
import Header from '../components/Header';
import VehicleSlider from '../components/VehicleSlider';
import LineButton from '../components/LineButton';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

const Vehicles = () => {
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
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              在庫車両一覧
            </h1>
            <p className="text-lg text-gray-600">
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
            <CarouselContent className="-ml-2 md:-ml-4 touch-pan-y">
              {vehicles.map((vehicle) => (
                <CarouselItem key={vehicle.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow select-none">
                    <img 
                      src={vehicle.image} 
                      alt={vehicle.name}
                      className="w-full h-48 object-cover pointer-events-none"
                      draggable={false}
                    />
                    <div className="p-6">
                      <h3 className="font-bold text-xl mb-2 text-gray-800">
                        {vehicle.name}
                      </h3>
                      <div className="space-y-2 mb-4">
                        <p className="text-gray-600">年式: {vehicle.year}</p>
                        <p className="text-gray-600">走行距離: {vehicle.mileage}</p>
                        <p className="text-2xl font-bold text-[#3498DB]">{vehicle.price}</p>
                      </div>
                      <Button className="w-full bg-[#FFA500] hover:bg-[#FF8C00] text-white">
                        詳細を見る
                      </Button>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </main>
      
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            © 2024 自動車整備工場 LABO. All rights reserved.
          </p>
        </div>
      </footer>
      
      <LineButton />
    </div>
  );
};

export default Vehicles;
