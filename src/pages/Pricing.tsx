import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Zap, ArrowRight, Camera, Video, Edit3, TrendingUp, Megaphone, Package, Globe } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';
import { useState, useEffect, useRef } from 'react';

const Pricing = () => {
  const [activeSection, setActiveSection] = useState<'planes' | 'servicios' | null>(null);
  const [hoverTimer, setHoverTimer] = useState<NodeJS.Timeout | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInitialMount = useRef(true);

  // Mínima distancia de swipe (en px)
  const minSwipeDistance = 50;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Solo hacer scroll si no es el montaje inicial y activeSection es null
    if (!isInitialMount.current && activeSection === null && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    
    // Después del primer render, marcar como no inicial
    if (isInitialMount.current) {
      isInitialMount.current = false;
    }
  }, [activeSection]);

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && activeSection === 'planes') {
      setActiveSection('servicios');
    }
    if (isRightSwipe && activeSection === 'servicios') {
      setActiveSection('planes');
    }
  };
  const pricingPlans = [
    {
      name: "IMPULSA START",
      subtitle: "Para negocios pequeños que están empezando",
      price: "$350.000",
      period: "/mes",
      description: "Perfecto para dar tus primeros pasos en redes sociales",
      features: [
        "Gestión de 1 red social (Instagram o Facebook)",
        "8 a 12 publicaciones mensuales",
        "Diseño gráfico básico (Canva / branding simple)",
        "Copys básicos (textos de venta)",
        "Calendario de contenido",
        "Respuesta básica a mensajes (opcional)"
      ],
      notIncludes: [
        "Fotografía profesional",
        "Videos"
      ],
      highlighted: false,
      badge: null,
      gradient: "from-blue-500/10 via-cyan-500/10 to-teal-500/10",
      borderGradient: "from-blue-500 via-cyan-500 to-teal-500"
    },
    {
      name: "IMPULSA GROW",
      subtitle: "Para negocios que quieren verse profesionales y vender",
      price: "$750.000",
      period: "/mes",
      description: "La opción ideal para crecer y profesionalizar tu marca",
      features: [
        "Gestión de 2 redes sociales",
        "12 a 16 publicaciones mensuales",
        "Diseño gráfico profesional",
        "Copywriting estratégico",
        "Análisis básico de métricas",
        "Optimización de perfil (bio, destacados, portada)",
        "1 sesión fotográfica mensual básica 📸 (opcional)"
      ],
      notIncludes: null,
      highlighted: true,
      badge: "Más Popular",
      gradient: "from-purple-500/10 via-blue-500/10 to-indigo-500/10",
      borderGradient: "from-purple-500 via-blue-500 to-indigo-500"
    },
    {
      name: "IMPULSA PRO",
      subtitle: "Para marcas que quieren crecer rápido y vender en serio",
      price: "$1.200.000",
      period: "/mes",
      description: "Solución completa para marcas que buscan dominar el mercado",
      features: [
        "Gestión de 3 o más redes",
        "16 a 24 publicaciones",
        "Diseño premium + branding",
        "Copywriting persuasivo",
        "Fotografía profesional",
        "Video corto (4 reels / ads)",
        "Gestión de campañas publicitarias (Meta Ads)",
        "Reporte mensual detallado",
        "Estrategia de crecimiento"
      ],
      notIncludes: null,
      highlighted: false,
      badge: null,
      gradient: "from-amber-500/10 via-orange-500/10 to-red-500/10",
      borderGradient: "from-amber-500 via-orange-500 to-red-500"
    }
  ];

  const photographyServices = [
    {
      category: "Fotografía básica para marca y redes sociales",
      options: [
        { description: "10 fotos editadas", price: "$180.000" },
        { description: "20 fotos editadas", price: "$300.000" }
      ],
      includes: "Incluye toma, iluminación básica, edición de color y entrega digital.",
      icon: <Camera className="w-6 h-6" />,
      gradient: "from-amber-500/10 via-orange-400/10 to-yellow-500/10",
      borderGradient: "from-amber-500 via-orange-400 to-yellow-500",
      badgeGradient: "from-amber-600 to-orange-500"
    },
    {
      category: "Fotografía de producto",
      options: [
        { description: "5 productos", price: "$220.000" },
        { description: "10 productos", price: "$380.000" },
        { description: "Producto adicional", price: "$30.000" }
      ],
      includes: "Incluye fondo limpio, enfoque comercial y edición profesional.",
      icon: <Package className="w-6 h-6" />,
      gradient: "from-orange-500/10 via-red-400/10 to-rose-500/10",
      borderGradient: "from-orange-500 via-red-400 to-rose-500",
      badgeGradient: "from-orange-600 to-red-500"
    },
    {
      category: "Fotografía corporativa",
      options: [
        { description: "Sesión corta (1 persona)", price: "$250.000" },
        { description: "Equipo de trabajo (hasta 5 personas)", price: "$450.000" }
      ],
      includes: null,
      icon: <Camera className="w-6 h-6" />,
      gradient: "from-yellow-500/10 via-amber-400/10 to-orange-500/10",
      borderGradient: "from-yellow-500 via-amber-400 to-orange-500",
      badgeGradient: "from-yellow-600 to-amber-500"
    }
  ];

  const videoServices = [
    {
      category: "Video corto para redes sociales (reels o anuncios)",
      options: [
        { description: "1 video de 15 a 30 segundos", price: "$150.000" },
        { description: "Paquete de 4 videos", price: "$500.000" }
      ],
      includes: "Incluye grabación, edición y subtítulos básicos.",
      icon: <Video className="w-6 h-6" />,
      gradient: "from-red-500/10 via-pink-400/10 to-rose-500/10",
      borderGradient: "from-red-500 via-pink-400 to-rose-500",
      badgeGradient: "from-red-600 to-pink-500"
    }
  ];

  const editingServices = [
    {
      category: "Edición de fotografía",
      options: [
        { description: "Edición individual", price: "$20.000" },
        { description: "Paquete de 20 fotos", price: "$250.000" }
      ],
      includes: null,
      icon: <Edit3 className="w-6 h-6" />,
      gradient: "from-sky-500/10 via-cyan-400/10 to-teal-500/10",
      borderGradient: "from-sky-500 via-cyan-400 to-teal-500",
      badgeGradient: "from-sky-600 to-cyan-500"
    },
    {
      category: "Edición de video",
      options: [
        { description: "Video corto hasta 30 segundos", price: "$80.000" },
        { description: "Video largo de 1 a 3 minutos", price: "$180.000" }
      ],
      includes: null,
      icon: <Video className="w-6 h-6" />,
      gradient: "from-blue-500/10 via-indigo-400/10 to-purple-500/10",
      borderGradient: "from-blue-500 via-indigo-400 to-purple-500",
      badgeGradient: "from-blue-600 to-indigo-500"
    }
  ];

  const marketingServices = [
    {
      category: "Gestión de redes sociales (mensual)",
      options: [
        { description: "1 red social", price: "$350.000" },
        { description: "2 redes sociales", price: "$500.000" },
        { description: "3 redes sociales", price: "$700.000" }
      ],
      includes: "Incluye publicaciones, diseño gráfico, copywriting y programación.",
      icon: <TrendingUp className="w-6 h-6" />,
      gradient: "from-emerald-500/10 via-green-400/10 to-lime-500/10",
      borderGradient: "from-emerald-500 via-green-400 to-lime-500",
      badgeGradient: "from-emerald-600 to-green-500"
    }
  ];

  const advertisingServices = [
    {
      category: "Gestión de campañas en Meta Ads o Google Ads",
      options: [
        { description: "Configuración inicial", price: "$150.000" },
        { description: "Gestión mensual", price: "$250.000 - $500.000" }
      ],
      includes: "El presupuesto de pauta publicitaria no está incluido.",
      icon: <Megaphone className="w-6 h-6" />,
      gradient: "from-pink-500/10 via-fuchsia-400/10 to-purple-500/10",
      borderGradient: "from-pink-500 via-fuchsia-400 to-purple-500",
      badgeGradient: "from-pink-600 to-fuchsia-500"
    }
  ];

  const productServices = [
    {
      category: "Sesión de producto comercial",
      options: [
        { description: "Hasta 10 productos", price: "$150.000" },
        { description: "Hasta 20 productos", price: "$280.000" }
      ],
      includes: "Incluye toma y edición con enfoque para ecommerce y redes sociales.",
      icon: <Package className="w-6 h-6" />,
      gradient: "from-slate-500/10 via-gray-400/10 to-zinc-500/10",
      borderGradient: "from-slate-500 via-gray-400 to-zinc-500",
      badgeGradient: "from-slate-600 to-gray-500"
    }
  ];

  const webServices = [
    {
      name: 'Web Personal en Codigo',
      price: '$250.000',
      priceNote: '(pago unico)',
      includes: [
        '1 landing page de hasta 5 secciones',
        'Diseno responsive (celular, tablet y computador)',
        'Boton de WhatsApp y formulario basico de contacto',
        'Integracion de redes sociales',
        'SEO inicial (titulos, descripciones y estructura basica)'
      ],
      notIncludes: [
        'Panel de administracion',
        'Blog avanzado o funciones dinamicas complejas',
        'Tienda online o pasarela de pagos',
        'Dominio y hosting'
      ],
      idealFor: 'Profesionales, marcas personales y negocios que solo necesitan presencia web clara y profesional.',
      badgeGradient: 'from-cyan-600 to-blue-500'
    },
    {
      name: 'Web Personal en WordPress',
      price: '$350.000',
      priceNote: '(pago unico)',
      includes: [
        'Instalacion y configuracion inicial de WordPress',
        'Diseno base personalizado',
        'Secciones editables para cambiar textos e imagenes',
        'Capacitacion corta para autogestion'
      ],
      notIncludes: [
        'Desarrollo de plugins o funciones avanzadas a medida',
        'Plugins premium de pago',
        'Dominio y hosting'
      ],
      idealFor: 'Quienes quieren editar su sitio sin depender de un desarrollador para cambios simples.',
      badgeGradient: 'from-blue-600 to-indigo-500'
    },
    {
      name: 'Menu/Catalogo en Codigo',
      price: '$300.000',
      priceNote: '(pago unico)',
      includes: [
        'Pagina de menu o catalogo por categorias',
        'Hasta 30 items (nombre, descripcion y precio)',
        'Diseno responsive',
        'Boton de pedido por WhatsApp'
      ],
      notIncludes: [
        'Carrito de compras',
        'Pasarela de pagos',
        'Panel de administracion',
        'Dominio y hosting'
      ],
      idealFor: 'Restaurantes y negocios que venden por WhatsApp y necesitan mostrar su oferta de forma ordenada.',
      badgeGradient: 'from-emerald-600 to-teal-500'
    },
    {
      name: 'Menu/Catalogo en WordPress',
      price: '$430.000',
      priceNote: '(pago unico)',
      includes: [
        'Todo lo del menu en codigo',
        'Panel editable en WordPress',
        'Autogestion para cambiar precios, descripciones e imagenes'
      ],
      notIncludes: [
        'Ecommerce completo con checkout',
        'Plugins premium de pago',
        'Dominio y hosting'
      ],
      idealFor: 'Negocios que cambian su menu con frecuencia y quieren control directo del contenido.',
      badgeGradient: 'from-lime-600 to-green-500'
    },
    {
      name: 'Tienda en Codigo con Backend y Administracion',
      price: '$500.000',
      priceNote: '(pago unico de desarrollo)',
      maintenance: 'Mantenimiento backend: $20.000 / mes',
      includes: [
        'Tienda desarrollada en codigo',
        'Backend funcional',
        'Pestana/panel de administracion para gestionar contenido/productos',
        'Estructura base preparada para crecimiento'
      ],
      notIncludes: [
        'Costos de pauta publicitaria',
        'Costos de pasarela de pago',
        'Dominio y hosting',
        'Integraciones empresariales complejas a medida'
      ],
      idealFor: 'Marcas que quieren una tienda mas personalizada y con control administrativo interno.',
      badgeGradient: 'from-orange-600 to-red-500'
    },
    {
      name: 'Tienda Shopify',
      price: '$290.000',
      priceNote: '(pago unico de configuracion)',
      includes: [
        'Configuracion inicial de tienda en Shopify',
        'Personalizacion visual base',
        'Organizacion por categorias/colecciones',
        'Carga inicial basica de productos'
      ],
      notIncludes: [
        'Suscripcion mensual de Shopify',
        'Apps premium de pago',
        'Dominio y costos de terceros',
        'Migraciones complejas'
      ],
      idealFor: 'Negocios que quieren empezar a vender rapido en una plataforma estable.',
      badgeGradient: 'from-violet-600 to-purple-500'
    },
    {
      name: 'Tienda WordPress (WooCommerce)',
      price: '$650.000',
      priceNote: '(pago unico)',
      includes: [
        'Instalacion WordPress + WooCommerce',
        'Configuracion de carrito y checkout',
        'Configuracion base de pagos y envios (con datos del cliente)',
        'Estructura editable de tienda'
      ],
      notIncludes: [
        'Desarrollos avanzados a medida',
        'Plugins premium de pago',
        'Dominio y hosting'
      ],
      idealFor: 'Negocios que buscan control total y mayor escalabilidad en WordPress.',
      badgeGradient: 'from-fuchsia-600 to-pink-500'
    },
    {
      name: 'Landing sin Backend editable por Excel',
      price: '$480.000',
      priceNote: '(pago unico)',
      includes: [
        'Landing responsive',
        'Estructura sin backend tradicional',
        'Contenido editable desde Excel/Google Sheets',
        'Actualizacion simple de datos sin tocar codigo'
      ],
      notIncludes: [
        'Panel administrativo interno',
        'Gestion de usuarios/roles',
        'Logica avanzada de ecommerce'
      ],
      idealFor: 'Negocios que actualizan datos seguido y quieren hacerlo de forma facil desde una hoja de calculo.',
      badgeGradient: 'from-amber-600 to-yellow-500'
    }
  ];

  const openWhatsApp = (plan?: string) => {
    const message = plan 
      ? encodeURIComponent(`Hola, estoy interesado en el ${plan}. ¿Podrían darme más información?`)
      : encodeURIComponent('Hola, me interesa conocer más sobre sus servicios y precios');
    const phoneNumber = '+573235254509';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen relative bg-black">
      <Seo
        title="Planes y Precios de Marketing y Servicios Web | Impulsa Digital"
        description="Consulta planes mensuales y servicios individuales de marketing, contenido y desarrollo web para tu negocio."
        path="/precios"
      />
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1543722530-d2c3201371e7?w=1920')] bg-cover bg-center bg-fixed opacity-60"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-background relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background"></div>
        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <Badge className="mb-4" variant="outline">
            <Star className="w-4 h-4 mr-1" />
            Precios Transparentes
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Planes y Precios
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Elige el plan perfecto para impulsar tu negocio. Todos nuestros planes incluyen soporte dedicado y resultados medibles.
          </p>
        </div>
      </section>

      {/* Selector Section - Planes y Servicios */}
      <section ref={sectionRef} className="py-16 px-4 relative min-h-[600px]">
        <div className="container mx-auto max-w-7xl">
          
          {/* Vista inicial - Selector de Planes o Servicios */}
          {!activeSection && (
            <div className="grid md:grid-cols-2 gap-8 animate-in fade-in duration-1000">
              {/* Card Planes */}
              <Card 
                className="relative overflow-hidden cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl bg-white/5 border-2 border-white/20 h-[400px] flex items-center justify-center group"
                onClick={() => {
                  if (isMobile) {
                    setActiveSection('planes');
                  }
                }}
                onMouseEnter={() => {
                  if (!isMobile) {
                    const timer = setTimeout(() => {
                      setActiveSection('planes');
                    }, 600);
                    setHoverTimer(timer);
                  }
                }}
                onMouseLeave={() => {
                  if (hoverTimer) {
                    clearTimeout(hoverTimer);
                    setHoverTimer(null);
                  }
                }}
              >
                <div className="absolute inset-0 bg-white/10 opacity-10 blur-xl group-hover:opacity-20 transition-opacity"></div>
                <div className="relative z-10 text-center p-8">
                  <div className="mb-6">
                    <Zap className="w-24 h-24 mx-auto text-white group-hover:scale-110 transition-transform" />
                  </div>
                  <h2 className="text-5xl font-bold mb-4 text-white">
                    PLANES
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Paquetes mensuales completos para tu negocio
                  </p>
                </div>
              </Card>

              {/* Card Servicios */}
              <Card 
                className="relative overflow-hidden cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl bg-white/5 border-2 border-white/20 h-[400px] flex items-center justify-center group"
                onClick={() => {
                  if (isMobile) {
                    setActiveSection('servicios');
                  }
                }}
                onMouseEnter={() => {
                  if (!isMobile) {
                    const timer = setTimeout(() => {
                      setActiveSection('servicios');
                    }, 600);
                    setHoverTimer(timer);
                  }
                }}
                onMouseLeave={() => {
                  if (hoverTimer) {
                    clearTimeout(hoverTimer);
                    setHoverTimer(null);
                  }
                }}
              >
                <div className="absolute inset-0 bg-white/10 opacity-10 blur-xl group-hover:opacity-20 transition-opacity"></div>
                <div className="relative z-10 text-center p-8">
                  <div className="mb-6">
                    <Package className="w-24 h-24 mx-auto text-white group-hover:scale-110 transition-transform" />
                  </div>
                  <h2 className="text-5xl font-bold mb-4 text-white">
                    SERVICIOS
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Servicios individuales a tu medida
                  </p>
                </div>
              </Card>
            </div>
          )}

          {/* Vista expandida - Planes */}
          {activeSection === 'planes' && (
            <div 
              className="flex flex-col lg:flex-row gap-4 animate-in fade-in duration-1000" 
              onTouchStart={isMobile ? onTouchStart : undefined}
              onTouchMove={isMobile ? onTouchMove : undefined}
              onTouchEnd={isMobile ? onTouchEnd : undefined}
            >
              {/* Contenido de Planes */}
              <div className="flex-1 animate-in slide-in-from-left duration-1000">
                <div className="mb-8 flex justify-between items-center">
                  <h2 className="text-4xl font-bold text-white">
                    Nuestros Planes
                  </h2>
                  {isMobile && (
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => setActiveSection(null)}
                      className="lg:hidden text-white"
                    >
                      ✕ Cerrar
                    </Button>
                  )}
                </div>

                {/* Navegación móvil entre Planes y Servicios */}
                {isMobile && (
                  <div className="flex gap-2 mb-6 lg:hidden">
                    <Button 
                      variant="default"
                      className="flex-1 bg-white text-black hover:bg-white/90"
                    >
                      <Zap className="w-4 h-4 mr-2" />
                      Planes
                    </Button>
                    <Button 
                      variant="outline"
                      className="flex-1"
                      onClick={() => setActiveSection('servicios')}
                    >
                      <Package className="w-4 h-4 mr-2" />
                      Servicios
                    </Button>
                  </div>
                )}

              <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
                {pricingPlans.map((plan, index) => (
                  <Card 
                    key={index} 
                    className={`relative flex flex-col overflow-visible bg-gradient-to-br ${plan.gradient} backdrop-blur-sm ${
                      plan.highlighted 
                        ? 'shadow-2xl scale-105 md:scale-110 border-2' 
                        : 'hover:shadow-xl transition-all duration-300 border-2'
                    }`}
                    style={{
                      borderImage: `linear-gradient(135deg, var(--tw-gradient-stops)) 1`,
                      borderImageSlice: 1
                    }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${plan.borderGradient} opacity-20 blur-xl`}></div>
                    
                    {plan.badge && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                        <Badge className={`bg-gradient-to-r ${plan.borderGradient} text-white px-4 py-1 shadow-lg`}>
                          <Zap className="w-3 h-3 mr-1" />
                          {plan.badge}
                        </Badge>
                      </div>
                    )}
                    
                    <CardHeader className="text-center pb-4 relative z-10">
                      <CardTitle className={`text-2xl mb-2 font-bold bg-gradient-to-r ${plan.borderGradient} bg-clip-text text-transparent`}>
                        {plan.name}
                      </CardTitle>
                      <CardDescription className="text-sm">{plan.subtitle}</CardDescription>
                      <div className="mt-4">
                        <span className={`text-4xl font-bold bg-gradient-to-r ${plan.borderGradient} bg-clip-text text-transparent`}>
                          {plan.price}
                        </span>
                        <span className="text-muted-foreground">{plan.period}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
                    </CardHeader>

                    <CardContent className="flex-grow relative z-10">
                      <ul className="space-y-3">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      {plan.notIncludes && plan.notIncludes.length > 0 && (
                        <div className="mt-6 pt-4 border-t">
                          <p className="text-xs font-semibold text-muted-foreground mb-2">NO incluye:</p>
                          <ul className="space-y-2">
                            {plan.notIncludes.map((item, idx) => (
                              <li key={idx} className="text-xs text-muted-foreground flex items-center">
                                <span className="mr-2">•</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </CardContent>

                    <CardFooter className="relative z-10">
                      <Button 
                        className={`w-full ${
                          plan.highlighted 
                            ? `bg-gradient-to-r ${plan.borderGradient} hover:opacity-90 text-white shadow-lg` 
                            : `bg-gradient-to-r ${plan.borderGradient} hover:opacity-90 text-white`
                        }`}
                        onClick={() => openWhatsApp(plan.name)}
                      >
                        Empezar Ahora
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>

              {/* Barra lateral de Servicios a la derecha */}
              <div 
                className="hidden lg:block w-32 cursor-pointer hover:w-40 transition-all duration-500 animate-in slide-in-from-right duration-1000"
                onMouseEnter={() => !isMobile && setActiveSection('servicios')}
              >
                <Card className="h-full min-h-[600px] bg-white/5 border-2 border-white/20 flex items-center justify-center group hover:shadow-xl transition-all">
                  <div className="text-center transform -rotate-180 [writing-mode:vertical-lr]">
                    <div className="flex items-center gap-3">
                      <Package className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
                      <p className="text-2xl font-bold text-white">
                        SERVICIOS
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          )}

          {/* Vista expandida - Servicios */}
          {activeSection === 'servicios' && (
            <div 
              className="flex flex-col lg:flex-row gap-4 animate-in fade-in duration-1000" 
              onTouchStart={isMobile ? onTouchStart : undefined}
              onTouchMove={isMobile ? onTouchMove : undefined}
              onTouchEnd={isMobile ? onTouchEnd : undefined}
            >
              {/* Barra lateral de Planes a la izquierda */}
              <div 
                className="hidden lg:block w-32 cursor-pointer hover:w-40 transition-all duration-500 animate-in slide-in-from-left duration-1000"
                onMouseEnter={() => !isMobile && setActiveSection('planes')}
              >
                <Card className="h-full min-h-[600px] bg-white/5 border-2 border-white/20 flex items-center justify-center group hover:shadow-xl transition-all">
                  <div className="text-center transform -rotate-180 [writing-mode:vertical-lr]">
                    <div className="flex items-center gap-3">
                      <Zap className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
                      <p className="text-2xl font-bold text-white">
                        PLANES
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Contenido de Servicios */}
              <div className="flex-1 animate-in slide-in-from-right duration-1000">
                <div className="mb-8 flex justify-between items-center">
                  <div>
                    <h2 className="text-4xl font-bold mb-2 text-white">
                      Servicios Detallados
                    </h2>
                    <p className="text-lg text-muted-foreground">
                      Precios flexibles que se pueden ajustar según tus necesidades
                    </p>
                  </div>
                  {isMobile && (
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => setActiveSection(null)}
                      className="lg:hidden"
                    >
                      ✕ Cerrar
                    </Button>
                  )}
                </div>

                {/* Navegación móvil entre Planes y Servicios */}
                {isMobile && (
                  <div className="flex gap-2 mb-6 lg:hidden">
                    <Button 
                      variant="outline"
                      className="flex-1"
                      onClick={() => setActiveSection('planes')}
                    >
                      <Zap className="w-4 h-4 mr-2" />
                      Planes
                    </Button>
                    <Button 
                      variant="default"
                      className="flex-1 bg-white text-black hover:bg-white/90"
                    >
                      <Package className="w-4 h-4 mr-2" />
                      Servicios
                    </Button>
                  </div>
                )}

              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                {/* Fotografía */}
                <div>
                  <h3 className="text-lg font-bold mb-4 text-white flex items-center gap-2">
                    <Camera className="w-5 h-5" />
                    FOTOGRAFÍA
                  </h3>
                  <div className="grid gap-4">
                    {photographyServices.map((service, index) => (
                      <Card key={index} className={`hover:shadow-xl transition-all duration-300 overflow-hidden bg-gradient-to-br ${service.gradient} border-2 border-transparent hover:border-opacity-50`}
                        style={{
                          borderImage: `linear-gradient(135deg, var(--tw-gradient-stops)) 1`,
                          borderImageSlice: 1
                        }}>
                        <div className={`h-1 bg-gradient-to-r ${service.borderGradient}`}></div>
                        <CardHeader className="pb-3">
                          <div className="flex items-center gap-2">
                            <div className={`p-1.5 rounded-lg bg-gradient-to-br ${service.borderGradient} text-white`}>
                              {service.icon}
                            </div>
                            <CardTitle className="text-sm">{service.category}</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <ul className="space-y-2 mb-3">
                            {service.options.map((option, idx) => (
                              <li key={idx} className="flex justify-between items-center text-xs">
                                <span className="text-muted-foreground">{option.description}</span>
                                <Badge className={`bg-gradient-to-r ${service.badgeGradient} text-white text-xs`}>{option.price}</Badge>
                              </li>
                            ))}
                          </ul>
                          {service.includes && (
                            <p className="text-xs text-muted-foreground pt-2 border-t">
                              {service.includes}
                            </p>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Video */}
                <div>
                  <h3 className="text-lg font-bold mb-4 text-primary flex items-center gap-2">
                    <Video className="w-5 h-5" />
                    VIDEO
                  </h3>
                  <div className="grid gap-4">
                    {videoServices.map((service, index) => (
                      <Card key={index} className={`hover:shadow-xl transition-all duration-300 overflow-hidden bg-gradient-to-br ${service.gradient} border-2 border-transparent hover:border-opacity-50`}
                        style={{
                          borderImage: `linear-gradient(135deg, var(--tw-gradient-stops)) 1`,
                          borderImageSlice: 1
                        }}>
                        <div className={`h-1 bg-gradient-to-r ${service.borderGradient}`}></div>
                        <CardHeader className="pb-3">
                          <div className="flex items-center gap-2">
                            <div className={`p-1.5 rounded-lg bg-gradient-to-br ${service.borderGradient} text-white`}>
                              {service.icon}
                            </div>
                            <CardTitle className="text-sm">{service.category}</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <ul className="space-y-2 mb-3">
                            {service.options.map((option, idx) => (
                              <li key={idx} className="flex justify-between items-center text-xs">
                                <span className="text-muted-foreground">{option.description}</span>
                                <Badge className={`bg-gradient-to-r ${service.badgeGradient} text-white text-xs`}>{option.price}</Badge>
                              </li>
                            ))}
                          </ul>
                          {service.includes && (
                            <p className="text-xs text-muted-foreground pt-2 border-t">
                              {service.includes}
                            </p>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Edición */}
                <div>
                  <h3 className="text-lg font-bold mb-4 text-white flex items-center gap-2">
                    <Edit3 className="w-5 h-5" />
                    EDICIÓN
                  </h3>
                  <div className="grid gap-4">
                    {editingServices.map((service, index) => (
                      <Card key={index} className={`hover:shadow-xl transition-all duration-300 overflow-hidden bg-gradient-to-br ${service.gradient} border-2 border-transparent hover:border-opacity-50`}
                        style={{
                          borderImage: `linear-gradient(135deg, var(--tw-gradient-stops)) 1`,
                          borderImageSlice: 1
                        }}>
                        <div className={`h-1 bg-gradient-to-r ${service.borderGradient}`}></div>
                        <CardHeader className="pb-3">
                          <div className="flex items-center gap-2">
                            <div className={`p-1.5 rounded-lg bg-gradient-to-br ${service.borderGradient} text-white`}>
                              {service.icon}
                            </div>
                            <CardTitle className="text-sm">{service.category}</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <ul className="space-y-2">
                            {service.options.map((option, idx) => (
                              <li key={idx} className="flex justify-between items-center text-xs">
                                <span className="text-muted-foreground">{option.description}</span>
                                <Badge className={`bg-gradient-to-r ${service.badgeGradient} text-white text-xs`}>{option.price}</Badge>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground mt-3 text-center italic">
                    Estos precios se pueden arreglar a conveniencia.
                  </p>
                </div>

                {/* Marketing */}
                <div>
                  <h3 className="text-lg font-bold mb-4 text-primary flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    MARKETING
                  </h3>
                  <div className="grid gap-4">
                    {marketingServices.map((service, index) => (
                      <Card key={index} className={`hover:shadow-xl transition-all duration-300 overflow-hidden bg-gradient-to-br ${service.gradient} border-2 border-transparent hover:border-opacity-50`}
                        style={{
                          borderImage: `linear-gradient(135deg, var(--tw-gradient-stops)) 1`,
                          borderImageSlice: 1
                        }}>
                        <div className={`h-1 bg-gradient-to-r ${service.borderGradient}`}></div>
                        <CardHeader className="pb-3">
                          <div className="flex items-center gap-2">
                            <div className={`p-1.5 rounded-lg bg-gradient-to-br ${service.borderGradient} text-white`}>
                              {service.icon}
                            </div>
                            <CardTitle className="text-sm">{service.category}</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <ul className="space-y-2 mb-3">
                            {service.options.map((option, idx) => (
                              <li key={idx} className="flex justify-between items-center text-xs">
                                <span className="text-muted-foreground">{option.description}</span>
                                <Badge className={`bg-gradient-to-r ${service.badgeGradient} text-white text-xs`}>{option.price}</Badge>
                              </li>
                            ))}
                          </ul>
                          {service.includes && (
                            <p className="text-xs text-muted-foreground pt-2 border-t">
                              {service.includes}
                            </p>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Publicidad */}
                <div>
                  <h3 className="text-lg font-bold mb-4 text-white flex items-center gap-2">
                    <Megaphone className="w-5 h-5" />
                    PUBLICIDAD
                  </h3>
                  <div className="grid gap-4">
                    {advertisingServices.map((service, index) => (
                      <Card key={index} className={`hover:shadow-xl transition-all duration-300 overflow-hidden bg-gradient-to-br ${service.gradient} border-2 border-transparent hover:border-opacity-50`}
                        style={{
                          borderImage: `linear-gradient(135deg, var(--tw-gradient-stops)) 1`,
                          borderImageSlice: 1
                        }}>
                        <div className={`h-1 bg-gradient-to-r ${service.borderGradient}`}></div>
                        <CardHeader className="pb-3">
                          <div className="flex items-center gap-2">
                            <div className={`p-1.5 rounded-lg bg-gradient-to-br ${service.borderGradient} text-white`}>
                              {service.icon}
                            </div>
                            <CardTitle className="text-sm">{service.category}</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <ul className="space-y-2 mb-3">
                            {service.options.map((option, idx) => (
                              <li key={idx} className="flex justify-between items-center text-xs">
                                <span className="text-muted-foreground">{option.description}</span>
                                <Badge className={`bg-gradient-to-r ${service.badgeGradient} text-white text-xs`}>{option.price}</Badge>
                              </li>
                            ))}
                          </ul>
                          {service.includes && (
                            <p className="text-xs text-muted-foreground pt-2 border-t">
                              {service.includes}
                            </p>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Productos */}
                <div>
                  <h3 className="text-lg font-bold mb-4 text-primary flex items-center gap-2">
                    <Package className="w-5 h-5" />
                    PRODUCTOS
                  </h3>
                  <div className="grid gap-4">
                    {productServices.map((service, index) => (
                      <Card key={index} className={`hover:shadow-xl transition-all duration-300 overflow-hidden bg-gradient-to-br ${service.gradient} border-2 border-transparent hover:border-opacity-50`}
                        style={{
                          borderImage: `linear-gradient(135deg, var(--tw-gradient-stops)) 1`,
                          borderImageSlice: 1
                        }}>
                        <div className={`h-1 bg-gradient-to-r ${service.borderGradient}`}></div>
                        <CardHeader className="pb-3">
                          <div className="flex items-center gap-2">
                            <div className={`p-1.5 rounded-lg bg-gradient-to-br ${service.borderGradient} text-white`}>
                              {service.icon}
                            </div>
                            <CardTitle className="text-sm">{service.category}</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <ul className="space-y-2 mb-3">
                            {service.options.map((option, idx) => (
                              <li key={idx} className="flex justify-between items-center text-xs">
                                <span className="text-muted-foreground">{option.description}</span>
                                <Badge className={`bg-gradient-to-r ${service.badgeGradient} text-white text-xs`}>{option.price}</Badge>
                              </li>
                            ))}
                          </ul>
                          {service.includes && (
                            <p className="text-xs text-muted-foreground pt-2 border-t">
                              {service.includes}
                            </p>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Paginas Web */}
                <div className="md:col-span-2 lg:col-span-2">
                  <div className="mb-4 rounded-xl border border-cyan-400/30 bg-gradient-to-r from-cyan-500/15 via-blue-500/10 to-indigo-500/15 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-cyan-200 mb-1">Soluciones Digitales</p>
                    <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
                      <Globe className="w-6 h-6 text-cyan-300" />
                      Ecosistema Web a Tu Medida
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Desde landing pages hasta tiendas online con administracion y escalabilidad.
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    {webServices.map((service, index) => (
                      <Card
                        key={index}
                        className="hover:shadow-xl transition-all duration-300 overflow-hidden bg-white/5 border border-white/20"
                      >
                        <CardHeader className="pb-3">
                          <div className="flex flex-wrap items-center gap-2 justify-between">
                            <CardTitle className="text-base text-white">{service.name}</CardTitle>
                            <Badge className={`bg-gradient-to-r ${service.badgeGradient} text-white text-xs`}>
                              {service.price}
                            </Badge>
                          </div>
                          <CardDescription className="text-xs">{service.priceNote}</CardDescription>
                          {service.maintenance && (
                            <p className="text-xs text-amber-300 mt-1">{service.maintenance}</p>
                          )}
                        </CardHeader>
                        <CardContent className="pt-0 space-y-3">
                          <div>
                            <p className="text-xs font-semibold text-white mb-2">Incluye:</p>
                            <ul className="space-y-1">
                              {service.includes.map((item, itemIndex) => (
                                <li key={itemIndex} className="text-xs text-muted-foreground flex items-start">
                                  <Check className="w-3.5 h-3.5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="pt-2 border-t border-white/10">
                            <p className="text-xs font-semibold text-white mb-2">No incluye:</p>
                            <ul className="space-y-1">
                              {service.notIncludes.map((item, itemIndex) => (
                                <li key={itemIndex} className="text-xs text-muted-foreground flex items-start">
                                  <span className="mr-2 mt-0.5">•</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="pt-2 border-t border-white/10">
                            <p className="text-xs font-semibold text-white mb-1">Ideal para:</p>
                            <p className="text-xs text-muted-foreground">{service.idealFor}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-gradient-to-r from-primary/10 to-purple-600/10 border-primary/20">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl mb-4">¿No estás seguro qué plan elegir?</CardTitle>
              <CardDescription className="text-lg">
                Contáctanos y te ayudaremos a encontrar la solución perfecta para tu negocio
              </CardDescription>
            </CardHeader>
            <CardFooter className="justify-center">
              <Button 
                size="lg" 
                variant="hero"
                onClick={() => openWhatsApp()}
              >
                Hablar con un Asesor
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      <Footer />
      </div>
    </div>
  );
};

export default Pricing;
