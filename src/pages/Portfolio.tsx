import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';
import ComputerFrame from './portfolio/ComputerFrame';
import pagina1 from '@/assets/pagina1.png';
import pagina2 from '@/assets/pagina2.png';
import pagina3 from '@/assets/pagina3.png';
import pagina4 from '@/assets/pagina4.png';
import pagina5 from '@/assets/pagina5.png';

const Portfolio = () => {
  const openWhatsApp = () => {
    const message = encodeURIComponent('Hola, me interesa conocer más sobre sus trabajos realizados');
    const phoneNumber = '+573235254509';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen relative bg-white">
      <Seo 
        title="Portafolio - Impulsa Digital"
        description="Conoce nuestros trabajos realizados y los proyectos que hemos desarrollado para nuestros clientes."
      />
      <Navbar />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
          <div className="max-w-3xl mx-auto text-center mb-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-black mb-6">
              Trabajos Realizados
            </h1>
            <p className="text-xl text-black/70">
              Descubre los proyectos que hemos completado para nuestros clientes y cómo hemos transformado su presencia digital.
            </p>
          </div>
        </section>

        {/* Portfolio Grid Section */}
        <section className="container mx-auto px-4 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            <ComputerFrame
              imageSrc={pagina1}
              title="Pagina Web personal"
              link="https://sandravargas.pages.dev/"
            />

            <ComputerFrame
              imageSrc={pagina2}
              title="Menú para restaurante"
              link="https://8-de-marzo.com/"
            />

            <ComputerFrame
              imageSrc={pagina3}
              title="Tienda online"
              link="https://b-j-03.myshopify.com/"
            />

            <ComputerFrame
              imageSrc={pagina4}
              title="Pagina de Campaña"
              link="https://cunacue.online/"
            />

            <ComputerFrame
              imageSrc={pagina5}
              title="Catálogo digital"
              link="https://lenceria-aj.vercel.app/"
            />
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 lg:px-8 py-16">
          <div className="bg-gradient-to-r from-primary/20 to-primary/5 border border-primary/20 rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold text-black mb-4">
              ¿Te gustaría un proyecto como estos?
            </h2>
            <p className="text-black/70 mb-8 max-w-2xl mx-auto">
              Contáctanos y déjanos ayudarte a crear una solución digital que impulse tu negocio.
            </p>
            <Button 
              variant="hero" 
              size="lg"
              onClick={openWhatsApp}
            >
              Solicitar presupuesto
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Portfolio;
