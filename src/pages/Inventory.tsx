
import Header from '../components/Header';
import VehicleSlider from '../components/VehicleSlider';
import LineButton from '../components/LineButton';

const Inventory = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              在庫車両紹介
            </h1>
            <p className="text-xl text-gray-600">
              厳選された高品質な中古車をご紹介
            </p>
          </div>
        </div>
        
        <VehicleSlider />
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

export default Inventory;
