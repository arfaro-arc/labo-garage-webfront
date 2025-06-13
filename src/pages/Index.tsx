
import Header from '../components/Header';
import HeroSlider from '../components/HeroSlider';
import CustomerReviews from '../components/CustomerReviews';
import LatestBlogs from '../components/LatestBlogs';
import LineButton from '../components/LineButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        <HeroSlider />
        <CustomerReviews />
        <LatestBlogs />
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
