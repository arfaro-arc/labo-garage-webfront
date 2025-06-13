
import Header from '../components/Header';
import ServiceSection from '../components/ServiceSection';
import LineButton from '../components/LineButton';

const Services = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              整備サービス
            </h1>
            <p className="text-xl text-gray-600">
              プロフェッショナル技術であなたの愛車を守ります
            </p>
          </div>
        </div>
        
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

export default Services;
