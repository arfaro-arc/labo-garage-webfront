import Header from '../components/Header';
import VehicleSlider from '../components/VehicleSlider';
import LineButton from '../components/LineButton';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

const Vehicles = () => {
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
    },
    {
      id: 5,
      name: 'トヨタ ヴォクシー',
      year: '2021年',
      mileage: '2.8万km',
      price: '320万円',
      image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=400&h=300&fit=crop'
    },
    {
      id: 6,
      name: 'ホンダ ヴェゼル',
      year: '2020年',
      mileage: '3.2万km',
      price: '250万円',
      image: 'https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?w=400&h=300&fit=crop'
    },
    {
      id: 7,
      name: 'トヨタ アクア',
      year: '2022年',
      mileage: '1.5万km',
      price: '190万円',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=300&fit=crop'
    },
    {
      id: 8,
      name: 'ニッサン セレナ',
      year: '2021年',
      mileage: '2.3万km',
      price: '300万円',
      image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=300&fit=crop'
    },
    {
      id: 9,
      name: 'スバル フォレスター',
      year: '2020年',
      mileage: '3.8万km',
      price: '270万円',
      image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=400&h=300&fit=crop'
    },
    {
      id: 10,
      name: 'マツダ デミオ',
      year: '2019年',
      mileage: '4.5万km',
      price: '130万円',
      image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=400&h=300&fit=crop'
    },
    {
      id: 11,
      name: 'トヨタ ハリアー',
      year: '2022年',
      mileage: '1.2万km',
      price: '380万円',
      image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=300&fit=crop'
    },
    {
      id: 12,
      name: 'ホンダ ステップワゴン',
      year: '2021年',
      mileage: '2.0万km',
      price: '290万円',
      image: 'https://images.unsplash.com/photo-1580414054488-17c1b03a8189?w=400&h=300&fit=crop'
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
          
          <Carousel className="w-full max-w-6xl mx-auto">
            <CarouselContent className="-ml-2 md:-ml-4">
              {vehicles.map((vehicle) => (
                <CarouselItem key={vehicle.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <img 
                      src={vehicle.image} 
                      alt={vehicle.name}
                      className="w-full h-48 object-cover"
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
