import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

const VehicleSlider = () => {
  const vehicles = [
    {
      id: 1,
      name: 'トヨタ プリウス',
      year: '2020年',
      mileage: '3.5万km',
      price: '180万円',
      image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      name: 'ホンダ フィット',
      year: '2019年',
      mileage: '4.2万km',
      price: '140万円',
      image: 'https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?w=400&h=300&fit=crop'
    },
    {
      id: 3,
      name: 'ニッサン ノート',
      year: '2021年',
      mileage: '2.1万km',
      price: '160万円',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop'
    },
    {
      id: 4,
      name: 'マツダ CX-5',
      year: '2022年',
      mileage: '1.8万km',
      price: '280万円',
      image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=400&h=300&fit=crop'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            在庫車両
          </h2>
          <p className="text-lg text-gray-600">
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
                    <Button className="w-full border-[#FFA500] text-[#FFA500] hover:bg-[#FFA500] hover:text-white" variant="outline">
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
        
        <div className="text-center mt-8">
          <a 
            href="https://www.carsensor.net/shop/tokyo/329460001/stocklist/?BKKN=AU6346688296&BKKNTR=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button 
              className="bg-[#FFA500] hover:bg-[#FF8C00] text-white w-80 h-20 text-2xl font-bold"
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
