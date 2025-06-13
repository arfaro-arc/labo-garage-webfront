
import Header from '../components/Header';
import LineButton from '../components/LineButton';

const Inventory = () => {
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
      image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=400&h=300&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
            在庫車両紹介
          </h1>
          
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
                    <p className="text-2xl font-bold text-blue-600">{vehicle.price}</p>
                  </div>
                  
                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                    詳細を見る
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <LineButton />
    </div>
  );
};

export default Inventory;
