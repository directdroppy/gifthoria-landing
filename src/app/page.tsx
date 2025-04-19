import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Gifthoria - Ana Sayfa',
  description: 'Gifthoria ile cezaevindeki sevdiklerinize özel mektuplar, fotoğraflar ve hediyeler gönderin.',
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}
