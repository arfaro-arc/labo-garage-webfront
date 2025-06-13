
import Header from '../components/Header';
import HeroSlider from '../components/HeroSlider';
import VehicleSlider from '../components/VehicleSlider';
import ServiceSection from '../components/ServiceSection';
import LineButton from '../components/LineButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <HeroSlider />
        <VehicleSlider />
        <ServiceSection />
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

export default Index;
