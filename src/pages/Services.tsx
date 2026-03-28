import { ArrowRight, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';
import { detailedSections, marketingOverviewServices, webEcosystemHeader, webServices } from './services/data';
import GradientServiceCard from './services/components/GradientServiceCard';
import MarketingOverviewCard from './services/components/MarketingOverviewCard';
import WebServiceCard from './services/components/WebServiceCard';

const servicesStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Marketing digital y desarrollo web',
  provider: {
    '@type': 'Organization',
    name: 'Impulsa Digital',
    url: 'https://impulsadigital.co/',
  },
  areaServed: 'Colombia',
  description: 'Servicios de marketing digital, gestion de redes, publicidad online y soluciones web para negocios.',
};

const Services = () => {
  const webServiceGroups = [
    { title: 'Web Personal', items: webServices.slice(0, 2), startIndex: 0 },
    { title: 'Menu/Catalogo', items: webServices.slice(2, 4), startIndex: 2 },
    { title: 'Tienda Virtual', items: webServices.slice(4), startIndex: 4 },
  ];

  const openWhatsApp = (customMessage?: string) => {
    const defaultMessage = 'Hola quiero agendar una cita con ustedes';
    const message = encodeURIComponent(customMessage || defaultMessage);
    const phoneNumber = '+573235254509';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const scrollToCategory = (categoryId: string) => {
    const element = document.getElementById(categoryId);
    if (!element) return;
    const navbarOffset = 88;
    const targetTop = element.getBoundingClientRect().top + window.scrollY - navbarOffset;
    window.scrollTo({ top: targetTop, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative bg-black">
      <Seo
        title="Servicios de Marketing y Desarrollo Web | Impulsa Digital"
        description="Conoce nuestros servicios detallados: marketing digital, publicidad, contenido, fotografia, video y desarrollo web a tu medida."
        path="/servicios"
        structuredData={servicesStructuredData}
      />
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1543722530-d2c3201371e7?w=1920')] bg-cover bg-center bg-fixed opacity-60"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>
      </div>

      <div className="relative z-10">
        <Navbar />

        <section className="pt-24 pb-16 px-4 bg-background relative">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background"></div>
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-4xl mx-auto relative z-10">
              <Badge className="mb-4" variant="outline">
                <Star className="w-4 h-4 mr-1" />
                Servicios Especializados
              </Badge>
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-indigo-700 via-blue-600 to-purple-700 bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(30,64,175,0.55)]">
                Nuestros Servicios
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Soluciones integrales de marketing digital para impulsar tu negocio al siguiente nivel
              </p>
              <div className="mb-8 flex flex-wrap justify-center gap-3">
                <Button variant="outline" onClick={() => scrollToCategory('categoria-web')}>
                  Desarrollo Web
                </Button>
                <Button variant="outline" onClick={() => scrollToCategory('categoria-marketing')}>
                  Marketing Digital
                </Button>
                <Button variant="outline" onClick={() => scrollToCategory('categoria-produccion')}>
                  Produccion y Contenido
                </Button>
              </div>
              <Button
                variant="hero"
                size="lg"
                onClick={() => openWhatsApp('Hola, necesito solicitar una cotizacion para mis servicios de marketing')}
              >
                Solicitar Cotizacion
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        <section id="categoria-web" className="py-16 px-4 scroll-mt-24">
          <div className="container mx-auto max-w-7xl">
            <div className="mb-8">
              <h2 className="text-4xl font-bold mb-2 text-white">Servicios Detallados</h2>
              <p className="text-lg text-muted-foreground">Soluciones web completas para negocios que quieren crecer en digital.</p>
            </div>

            <div className="md:col-span-2 lg:col-span-2">
              <div className="mb-4 rounded-xl border border-cyan-400/30 bg-gradient-to-r from-cyan-500/15 via-blue-500/10 to-indigo-500/15 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-200 mb-1">{webEcosystemHeader.eyebrow}</p>
                <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
                  {webEcosystemHeader.icon}
                  {webEcosystemHeader.sectionTitle}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">{webEcosystemHeader.sectionSubtitle}</p>
              </div>
              <div className="space-y-8">
                {webServiceGroups.map((group) => (
                  <div key={group.title}>
                    <div className="mb-4 flex items-center gap-3">
                      <h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-cyan-200">{group.title}</h4>
                      <div className="h-px flex-1 bg-gradient-to-r from-cyan-400/70 via-blue-400/40 to-transparent" />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      {group.items.map((service, index) => (
                        <WebServiceCard
                          key={`${group.title}-${service.name}`}
                          service={service}
                          delayMs={620 + (group.startIndex + index) * 70}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="categoria-marketing" className="py-20 px-4 scroll-mt-24">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Mas Servicios de Marketing</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Ofrecemos una gama completa de servicios de marketing digital disenados para maximizar tu presencia online
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {marketingOverviewServices.map((service, index) => (
                <MarketingOverviewCard
                  key={service.id}
                  service={service}
                  index={index}
                  onMoreInfo={(serviceTitle) =>
                    openWhatsApp(`Hola, necesito mas informacion sobre el servicio de ${serviceTitle}`)
                  }
                />
              ))}
            </div>
          </div>
        </section>

        <section id="categoria-produccion" className="py-16 px-4 scroll-mt-24">
          <div className="container mx-auto max-w-7xl">
            <div className="mb-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Otros Servicios Detallados</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Produccion, contenido y gestion especializada para fortalecer tu marca.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {detailedSections.map((section) => (
                <div key={section.id}>
                  <h3 className={`text-lg font-bold mb-4 flex items-center gap-2 ${section.headingClassName}`}>
                    {section.icon}
                    {section.title}
                  </h3>
                  <div className="grid gap-4">
                    {section.items.map((item, itemIndex) => (
                      <GradientServiceCard
                        key={`${section.id}-${item.category}`}
                        service={item}
                        delayMs={section.baseDelay + itemIndex * 80}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Services;
