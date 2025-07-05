
import Header from '../components/Header';
import HeroSlider from '../components/HeroSlider';
import LazySection from '../components/LazySection';
import { lazy, Suspense } from 'react';

// Lazy load components that are below the fold
const VehicleSlider = lazy(() => import('../components/VehicleSlider'));
const ServiceSection = lazy(() => import('../components/ServiceSection'));
const AccessSection = lazy(() => import('../components/AccessSection'));
const LineButton = lazy(() => import('../components/LineButton'));

const Index = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      
      <main className="w-full">
        <HeroSlider />
        
        <LazySection id="Group Services">
          <Suspense fallback={<div className="min-h-[400px] bg-gray-50 animate-pulse" />}>
            <ServiceSection />
          </Suspense>
        </LazySection>
        
        <LazySection id="Group Inventory">
          <Suspense fallback={<div className="min-h-[400px] bg-gray-50 animate-pulse" />}>
            <VehicleSlider />
          </Suspense>
        </LazySection>
        
        <LazySection id="access">
          <Suspense fallback={<div className="min-h-[300px] bg-gray-50 animate-pulse" />}>
            <AccessSection />
          </Suspense>
        </LazySection>
      </main>
      
      <footer className="bg-gray-800 text-white py-6 sm:py-8">
        <div className="container mx-auto px-2 sm:px-4 text-center">
          <p className="text-xs sm:text-sm">
            © 2023 自動車整備工場 LABO. All rights reserved.
          </p>
        </div>
      </footer>
      
      <div id="Group Contact">
        <Suspense fallback={null}>
          <LineButton />
        </Suspense>
      </div>
    </div>
  );
};

export default Index;
