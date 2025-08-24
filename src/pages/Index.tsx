import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Gallery from '@/components/Gallery';
import ProductCarousel from '@/components/ProductCarousel';
import FeedbackStats from '@/components/FeedbackStats';
import Collaborators from '@/components/Collaborators';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Gallery />
        <ProductCarousel />
        <FeedbackStats />
        <Collaborators />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;