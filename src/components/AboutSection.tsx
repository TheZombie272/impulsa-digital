import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Users, Lightbulb, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import aboutImage from '@/assets/about-team.jpg';

const AboutSection = () => {
  const openWhatsApp = (customMessage?: string) => {
    const defaultMessage = 'Hola quiero agendar una cita con ustedes';
    const message = encodeURIComponent(customMessage || defaultMessage);
    const phoneNumber = '+573127142928'; // Reemplaza con tu número de WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const features = [
    {
      icon: Target,
      title: "Estrategias Personalizadas",
      description: "Cada cliente es único. Desarrollamos estrategias específicas para sus objetivos."
    },
    {
      icon: Users,
      title: "Equipo Experto",
      description: "Profesionales con años de experiencia en marketing digital y crecimiento empresarial."
    },
    {
      icon: Lightbulb,
      title: "Innovación Constante",
      description: "Utilizamos las últimas tendencias y tecnologías para mantenerte a la vanguardia."
    },
    {
      icon: TrendingUp,
      title: "Resultados Medibles",
      description: "Cada campaña está respaldada por datos y métricas que demuestran el ROI."
    }
  ];

  const contentRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const featuresRef = useRef<HTMLDivElement | null>(null);
  const [contentInView, setContentInView] = useState(false);
  const [imageInView, setImageInView] = useState(false);
  const [featuresInView, setFeaturesInView] = useState(false);

  useEffect(() => {
    const options: IntersectionObserverInit = { threshold: 0.2, rootMargin: '0px 0px -10% 0px' };

    const makeObserver = (setter: (v: boolean) => void) =>
      new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          // Re-trigger on re-entry: true when in view, false when out
          setter(entry.isIntersecting);
        });
      }, options);

    const obsContent = makeObserver(setContentInView);
    const obsImage = makeObserver(setImageInView);
    const obsFeatures = makeObserver(setFeaturesInView);

    if (contentRef.current) obsContent.observe(contentRef.current);
    if (imageRef.current) obsImage.observe(imageRef.current);
    if (featuresRef.current) obsFeatures.observe(featuresRef.current);

    return () => {
      obsContent.disconnect();
      obsImage.disconnect();
      obsFeatures.disconnect();
    };
  }, []);

  return (
    <section id="sobre" className="py-20 bg-background relative overflow-hidden">
      {/* Abstract background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated diagonal lines */}
        <div className="absolute top-10 left-5 w-96 h-1 bg-gradient-to-r from-neutral-300 via-neutral-200 to-transparent opacity-30 rotate-45 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-80 h-0.5 bg-gradient-to-l from-neutral-400 via-neutral-300 to-transparent opacity-20 -rotate-12 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent opacity-10"></div>
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent opacity-5"></div>
        
        {/* Abstract squares */}
        <div className="absolute top-20 right-20 w-32 h-32 border-2 border-neutral-300 opacity-10 rotate-12"></div>
        <div className="absolute bottom-32 left-10 w-48 h-48 border border-neutral-400 opacity-15 -rotate-45"></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 border-2 border-neutral-300 opacity-10 rotate-6"></div>
        <div className="absolute bottom-10 left-1/3 w-40 h-40 border border-neutral-200 opacity-5 rotate-45"></div>
        <div className="absolute top-1/4 right-1/3 w-20 h-20 border-2 border-neutral-400 opacity-8 -rotate-12"></div>
        
        {/* Floating circles */}
        <div className="absolute top-1/3 left-1/4 w-40 h-40 rounded-full border border-neutral-300 opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-56 h-56 rounded-full border border-neutral-400 opacity-10 -rotate-45"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 rounded-full border border-neutral-300 opacity-5 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 rounded-full border border-neutral-200 opacity-5"></div>
        <div className="absolute top-10 right-1/3 w-48 h-48 rounded-full border-2 border-neutral-300 opacity-8" style={{ animationDelay: '2s' }}></div>
        
        {/* Vertical lines */}
        <div className="absolute left-1/3 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-neutral-300 to-transparent opacity-20"></div>
        <div className="absolute right-1/4 top-1/4 h-80 w-px bg-gradient-to-b from-neutral-400 to-transparent opacity-15"></div>
        <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-neutral-200 via-transparent to-neutral-300 opacity-5"></div>
        <div className="absolute left-1/6 top-1/3 h-96 w-px bg-gradient-to-b from-neutral-400 to-transparent opacity-10"></div>
        <div className="absolute right-1/3 top-0 h-2/3 w-px bg-gradient-to-b from-transparent to-neutral-300 opacity-8"></div>
        
        {/* Decorative rectangles */}
        <div className="absolute top-1/4 left-1/2 w-72 h-2 bg-neutral-300 opacity-10 rotate-45"></div>
        <div className="absolute bottom-1/3 right-10 w-96 h-1 bg-gradient-to-r from-neutral-400 to-transparent opacity-15 -rotate-12"></div>
        <div className="absolute top-2/3 left-0 w-1/2 h-px bg-gradient-to-r from-neutral-300 to-transparent opacity-10"></div>
        <div className="absolute top-1/3 right-0 w-1/3 h-1 bg-gradient-to-l from-neutral-200 to-transparent opacity-8 rotate-3"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-0.5 bg-gradient-to-r from-neutral-400 via-neutral-300 to-transparent opacity-12 -rotate-6"></div>
        
        {/* Extra subtle geometric forms */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 border border-neutral-300 opacity-5 rotate-45"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 border-2 border-neutral-200 opacity-5 -rotate-12"></div>
        <div className="absolute top-1/2 right-1/2 w-96 h-96 rounded-full border border-neutral-400 opacity-5 animate-pulse" style={{ animationDelay: '2.5s' }}></div>
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-100 via-transparent to-transparent opacity-5"></div>
        
        {/* Layered dotted pattern (subtle) */}
        <div className="absolute top-20 left-20 w-2 h-2 rounded-full bg-neutral-300 opacity-5" style={{ boxShadow: '40px 40px 0 -2px rgba(163, 163, 163, 0.05), 80px 80px 0 -2px rgba(163, 163, 163, 0.03)' }}></div>
        <div className="absolute bottom-40 right-40 w-1 h-1 rounded-full bg-neutral-400 opacity-10" style={{ boxShadow: '30px 30px 0 0 rgba(163, 163, 163, 0.08), 60px 60px 0 0 rgba(163, 163, 163, 0.05), 90px 90px 0 0 rgba(163, 163, 163, 0.03)' }}></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div
            ref={contentRef}
            className={`space-y-8 transition-all duration-700 ease-out ${
              contentInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-primary text-sm font-medium">Sobre nosotros</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Transformamos ideas en{' '}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  éxito digital
                </span>
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Somos una agencia de marketing digital especializada en impulsar el crecimiento de empresas 
                a través de estrategias innovadoras y resultados medibles.
              </p>
              
              <p className="text-muted-foreground">
                Nuestro enfoque se basa en la combinación perfecta entre creatividad, tecnología y datos. 
                Creemos que cada marca tiene una historia única que contar, y nosotros nos encargamos de 
                que esa historia llegue a la audiencia correcta en el momento perfecto.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/servicios">
                <Button variant="default" size="lg">
                  Conoce nuestros servicios
                </Button>
              </Link>
              <Link to="/clientes">
                <Button 
                  variant="outline" 
                  size="lg"
                >
                  Ver casos de éxito
                </Button>
              </Link>
            </div>
          </div>

          {/* Image */}
          <div
            ref={imageRef}
            className={`relative transition-all duration-700 ease-out ${
              imageInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-elegant">
              <img 
                src={aboutImage} 
                alt="Equipo de Impulsa trabajando en estrategias de marketing" 
                className="w-full h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating card */}
            <Card className="absolute -bottom-6 -left-6 bg-card/95 backdrop-blur-md shadow-hover border-0">
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-primary mb-1">IMPULSA</div>
                <div className="text-sm text-muted-foreground">Asesorate de los mejores</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Features Grid */}
        <div
          ref={featuresRef}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20 relative z-20"
        >
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              className={`border-0 shadow-card hover:shadow-hover transform hover:-translate-y-2 group transition-all duration-700 ease-out ${
                featuresInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;