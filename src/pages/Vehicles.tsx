import Header from '../components/Header';
import VehicleSlider from '../components/VehicleSlider';
import LineButton from '../components/LineButton';

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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicles.map((vehicle) => (
              <div key={vehicle.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
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
                  <button className="w-full bg-[#FFA500] hover:bg-[#FF8C00] text-white py-2 px-4 rounded transition-colors">
                    詳細を見る
                  </button>
                </div>
              </div>
            ))}
          </div>
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
