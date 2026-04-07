import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const MarketingDigitalSection = () => {

  const contentRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const contentRef2 = useRef<HTMLDivElement | null>(null);
  const imageRef2 = useRef<HTMLDivElement | null>(null);
  const [contentInView, setContentInView] = useState(false);
  const [imageInView, setImageInView] = useState(false);
  const [contentInView2, setContentInView2] = useState(false);
  const [imageInView2, setImageInView2] = useState(false);

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
    const obsContent2 = makeObserver(setContentInView2);
    const obsImage2 = makeObserver(setImageInView2);

    if (contentRef.current) obsContent.observe(contentRef.current);
    if (imageRef.current) obsImage.observe(imageRef.current);
    if (contentRef2.current) obsContent2.observe(contentRef2.current);
    if (imageRef2.current) obsImage2.observe(imageRef2.current);

    return () => {
      obsContent.disconnect();
      obsImage.disconnect();
      obsContent2.disconnect();
      obsImage2.disconnect();
    };
  }, []);

  return (
    <section id="marketing-digital" className="py-20 relative overflow-hidden">
      {/* Fosforescent background with yellow, red, and orange gradients */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'linear-gradient(45deg, rgba(255,140,0,0.6) 0%, rgba(255,69,0,0.7) 40%, rgba(255,0,0,0.8) 100%)',
        boxShadow: 'inset 0 0 300px rgba(255,140,0,0.8), inset 0 0 300px rgba(255,69,0,0.9), inset 0 0 300px rgba(255,0,0,1)',
        filter: 'blur(1px)'
      }}></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 space-y-20">
        {/* Primera parte: ¿Qué es el Marketing Digital? */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side: Description */}
          <div
            ref={contentRef}
            className={`transition-all duration-700 ease-out ${
              contentInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <Card className="animate-in fade-in slide-in-from-bottom-4 duration-700 transform-gpu overflow-hidden bg-black/5 border border-black/20 backdrop-blur-sm transition-all ease-out hover:shadow-xl md:hover:scale-[1.02] md:hover:-translate-y-1 active:scale-[0.99] p-8">
              <CardContent className="p-0">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-primary text-sm font-medium">Marketing Digital</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">
                    ¿Qué es el{' '}
                    <span className="bg-gradient-primary bg-clip-text text-transparent">
                      Marketing Digital?
                    </span>
                  </h2>
                  
                  <p className="text-lg text-black/80 leading-relaxed">
                    El marketing digital es el conjunto de estrategias y técnicas que utilizan internet y las tecnologías digitales 
                    para promocionar productos, servicios o marcas, con el objetivo de atraer, convertir y retener clientes.
                  </p>
                  
                  <p className="text-black/80">
                    En la era digital actual, tener presencia online es fundamental para cualquier negocio. 
                    El marketing digital te permite llegar a tu público objetivo de manera precisa, medir los resultados 
                    de tus campañas y adaptar tus estrategias en tiempo real para maximizar el retorno de inversión.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right side: Video placeholder */}
          <div
            ref={imageRef}
            className={`relative transition-all duration-700 ease-out ${
              imageInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-elegant bg-gray-200 flex items-center justify-center" style={{ height: '400px' }}>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/ZDFu_S_V_xY?rel=0&modestbranding=1"
                title="Video de Marketing Digital"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="rounded-2xl"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Segunda parte: ¿Por qué necesitas una página web? */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side: Video placeholder */}
          <div
            ref={imageRef2}
            className={`relative transition-all duration-700 ease-out order-2 lg:order-1 ${
              imageInView2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-elegant bg-gray-200 flex items-center justify-center" style={{ height: '400px' }}>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dzn9Dy1kC5Y?rel=0&modestbranding=1"
                title="Video sobre Página Web"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="rounded-2xl"
              ></iframe>
            </div>
          </div>

          {/* Right side: Description */}
          <div
            ref={contentRef2}
            className={`transition-all duration-700 ease-out order-1 lg:order-2 ${
              contentInView2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <Card className="animate-in fade-in slide-in-from-bottom-4 duration-700 transform-gpu overflow-hidden bg-black/5 border border-black/20 backdrop-blur-sm transition-all ease-out hover:shadow-xl md:hover:scale-[1.02] md:hover:-translate-y-1 active:scale-[0.99] p-8">
              <CardContent className="p-0">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-primary text-sm font-medium">Página Web</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">
                    ¿Por qué necesitas una{' '}
                    <span className="bg-gradient-primary bg-clip-text text-transparent">
                      Página Web?
                    </span>
                  </h2>
                  
                  <p className="text-lg text-black/80 leading-relaxed">
                    Una página web es la carta de presentación digital de tu negocio. Es el lugar donde tus clientes 
                    pueden encontrarte, conocer tus productos o servicios, y realizar compras las 24 horas del día.
                  </p>
                  
                  <p className="text-black/80">
                    En el mundo actual, tener una presencia online profesional es esencial para generar confianza, 
                    aumentar la visibilidad de tu marca y competir en el mercado digital. Una buena página web 
                    mejora la experiencia del cliente y puede ser la diferencia entre ganar o perder un cliente.
                  </p>

                  <p className="text-black/80">
                    Además, una página web bien diseñada facilita la comunicación, permite mostrar portafolios, 
                    testimonios y facilita el proceso de ventas, convirtiéndose en una herramienta poderosa para 
                    el crecimiento de tu negocio.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingDigitalSection;