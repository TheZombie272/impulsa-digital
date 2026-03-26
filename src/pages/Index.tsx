import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import TeamSection from '@/components/TeamSection';
import LearnSection from '@/components/LearnSection';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';

const homeStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Impulsa Digital',
  url: 'https://impulsadigital.co/',
  telephone: '+57 323 5254509',
  areaServed: 'Colombia',
  description: 'Agencia de marketing digital y desarrollo web para empresas y marcas personales.',
  sameAs: ['https://wa.me/573235254509'],
  serviceType: ['Marketing digital', 'Gestion de redes sociales', 'Desarrollo web'],
};

const Index = () => {
  return (
    <div className="min-h-screen">
      <Seo
        title="Impulsa Digital | Agencia de Marketing Digital y Servicios Web"
        description="Impulsa tu negocio con estrategia digital, gestion de redes, publicidad online y desarrollo web profesional."
        path="/"
        structuredData={homeStructuredData}
      />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TeamSection />
      <LearnSection />
      <Footer />
    </div>
  );
};

export default Index;
