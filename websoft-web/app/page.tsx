import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/sections/Hero';
import WhoWeAre from '@/components/sections/WhoWeAre';
import Values from '@/components/sections/Values';
import Stats from '@/components/sections/Stats';
import Features from '@/components/sections/Features';
import Services from '@/components/sections/Services';
import Portfolio from '@/components/sections/Portfolio';
import Newsletter from '@/components/sections/Newsletter';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhoWeAre />
        <Values />
        <Stats />
        <Features />
        <Services />
        <Portfolio />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
