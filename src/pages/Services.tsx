import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Megaphone,
  TrendingUp, 
  Target, 
  BarChart3, 
  Palette,
  Search,
  Heart,
  ArrowRight,
  Check,
  Camera,
  Video,
  Edit3,
  Package,
  Globe,
  Star
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Services = () => {
  const photographyServices = [
    {
      category: 'Fotografia basica para marca y redes sociales',
      options: [
        { description: '10 fotos editadas', price: '$180.000' },
        { description: '20 fotos editadas', price: '$300.000' }
      ],
      includes: 'Incluye toma, iluminacion basica, edicion de color y entrega digital.',
      icon: <Camera className="w-6 h-6" />,
      gradient: 'from-amber-500/10 via-orange-400/10 to-yellow-500/10',
      borderGradient: 'from-amber-500 via-orange-400 to-yellow-500',
      badgeGradient: 'from-amber-600 to-orange-500'
    },
    {
      category: 'Fotografia de producto',
      options: [
        { description: '5 productos', price: '$220.000' },
        { description: '10 productos', price: '$380.000' },
        { description: 'Producto adicional', price: '$30.000' }
      ],
      includes: 'Incluye fondo limpio, enfoque comercial y edicion profesional.',
      icon: <Package className="w-6 h-6" />,
      gradient: 'from-orange-500/10 via-red-400/10 to-rose-500/10',
      borderGradient: 'from-orange-500 via-red-400 to-rose-500',
      badgeGradient: 'from-orange-600 to-red-500'
    },
    {
      category: 'Fotografia corporativa',
      options: [
        { description: 'Sesion corta (1 persona)', price: '$250.000' },
        { description: 'Equipo de trabajo (hasta 5 personas)', price: '$450.000' }
      ],
      includes: null,
      icon: <Camera className="w-6 h-6" />,
      gradient: 'from-yellow-500/10 via-amber-400/10 to-orange-500/10',
      borderGradient: 'from-yellow-500 via-amber-400 to-orange-500',
      badgeGradient: 'from-yellow-600 to-amber-500'
    }
  ];

  const videoServices = [
    {
      category: 'Video corto para redes sociales (reels o anuncios)',
      options: [
        { description: '1 video de 15 a 30 segundos', price: '$150.000' },
        { description: 'Paquete de 4 videos', price: '$500.000' }
      ],
      includes: 'Incluye grabacion, edicion y subtitulos basicos.',
      icon: <Video className="w-6 h-6" />,
      gradient: 'from-red-500/10 via-pink-400/10 to-rose-500/10',
      borderGradient: 'from-red-500 via-pink-400 to-rose-500',
      badgeGradient: 'from-red-600 to-pink-500'
    }
  ];

  const editingServices = [
    {
      category: 'Edicion de fotografia',
      options: [
        { description: 'Edicion individual', price: '$20.000' },
        { description: 'Paquete de 20 fotos', price: '$250.000' }
      ],
      includes: null,
      icon: <Edit3 className="w-6 h-6" />,
      gradient: 'from-sky-500/10 via-cyan-400/10 to-teal-500/10',
      borderGradient: 'from-sky-500 via-cyan-400 to-teal-500',
      badgeGradient: 'from-sky-600 to-cyan-500'
    },
    {
      category: 'Edicion de video',
      options: [
        { description: 'Video corto hasta 30 segundos', price: '$80.000' },
        { description: 'Video largo de 1 a 3 minutos', price: '$180.000' }
      ],
      includes: null,
      icon: <Video className="w-6 h-6" />,
      gradient: 'from-blue-500/10 via-indigo-400/10 to-purple-500/10',
      borderGradient: 'from-blue-500 via-indigo-400 to-purple-500',
      badgeGradient: 'from-blue-600 to-indigo-500'
    }
  ];

  const marketingServices = [
    {
      category: 'Gestion de redes sociales (mensual)',
      options: [
        { description: '1 red social', price: '$350.000' },
        { description: '2 redes sociales', price: '$500.000' },
        { description: '3 redes sociales', price: '$700.000' }
      ],
      includes: 'Incluye publicaciones, diseno grafico, copywriting y programacion.',
      icon: <TrendingUp className="w-6 h-6" />,
      gradient: 'from-emerald-500/10 via-green-400/10 to-lime-500/10',
      borderGradient: 'from-emerald-500 via-green-400 to-lime-500',
      badgeGradient: 'from-emerald-600 to-green-500'
    }
  ];

  const advertisingServices = [
    {
      category: 'Gestion de campanas en Meta Ads o Google Ads',
      options: [
        { description: 'Configuracion inicial', price: '$150.000' },
        { description: 'Gestion mensual', price: '$250.000 - $500.000' }
      ],
      includes: 'El presupuesto de pauta publicitaria no esta incluido.',
      icon: <Megaphone className="w-6 h-6" />,
      gradient: 'from-pink-500/10 via-fuchsia-400/10 to-purple-500/10',
      borderGradient: 'from-pink-500 via-fuchsia-400 to-purple-500',
      badgeGradient: 'from-pink-600 to-fuchsia-500'
    }
  ];

  const productServices = [
    {
      category: 'Sesion de producto comercial',
      options: [
        { description: 'Hasta 10 productos', price: '$150.000' },
        { description: 'Hasta 20 productos', price: '$280.000' }
      ],
      includes: 'Incluye toma y edicion con enfoque para ecommerce y redes sociales.',
      icon: <Package className="w-6 h-6" />,
      gradient: 'from-slate-500/10 via-gray-400/10 to-zinc-500/10',
      borderGradient: 'from-slate-500 via-gray-400 to-zinc-500',
      badgeGradient: 'from-slate-600 to-gray-500'
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

  const services = [
    {
      id: 1,
      title: "Marketing Digital",
      description: "Estrategias integrales de marketing digital para hacer crecer tu negocio en línea",
      icon: <TrendingUp className="h-8 w-8" />,
      features: ["SEO/SEM", "Email Marketing", "Marketing de Contenidos", "Analytics"],
      price: "",
      category: "Digital"
    },
    {
      id: 2,
      title: "Publicidad Online",
      description: "Campañas publicitarias efectivas en Google Ads, TikTok, Facebook e Instagram",
      icon: <Megaphone className="h-8 w-8" />,
      features: ["Google Ads", "Facebook Ads", "Instagram Ads", "TikTok Ads", "Network Ads", "Remarketing"],
      price: "",
      category: "Publicidad"
    },
    {
      id: 3,
      title: "Gestión de Redes Sociales",
      description: "Creación y gestión de contenido para todas tus redes sociales",
      icon: <Heart className="h-8 w-8" />,
      features: ["Creación de Contenido", "Community Management", "Flayers", "Stories", "Reels"],
      price: "",
      category: "Social Media"
    },
    {
      id: 4,
      title: "Diseño Gráfico",
      description: "Diseño de identidad visual y materiales gráficos para tu marca",
      icon: <Palette className="h-8 w-8" />,
      features: ["Logo Design", "Branding", "Material Impreso", "Fotografía", "Web Design"],
      price: "",
      category: "Diseño"
    },
    {
      id: 5,
      title: "SEO y Posicionamiento",
      description: "Optimización para motores de búsqueda y mejora del ranking web",
      icon: <Search className="h-8 w-8" />,
      features: ["Auditoría SEO", "Optimización On-Page", "Link Building", "SEO Local"],
      price: "",
      category: "SEO"
    },
    {
      id: 6,
      title: "Análisis y Reportes",
      description: "Monitoreo y análisis detallado del rendimiento de tus campañas y estrategias",
      icon: <BarChart3 className="h-8 w-8" />,
      features: ["Google Analytics", "Meta Ads"],
      price: "",
      category: "Analytics"
    }
  ];

  const openWhatsApp = (customMessage?: string) => {
    const defaultMessage = 'Hola quiero agendar una cita con ustedes';
    const message = encodeURIComponent(customMessage || defaultMessage);
    const phoneNumber = '+573235254509';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen relative bg-black">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1543722530-d2c3201371e7?w=1920')] bg-cover bg-center bg-fixed opacity-60"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>
      </div>

      <div className="relative z-10">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-background relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background"></div>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto relative z-10">
            <Badge className="mb-4" variant="outline">
              <Star className="w-4 h-4 mr-1" />
              Servicios Especializados
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Nuestros Servicios
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Soluciones integrales de marketing digital para impulsar tu negocio al siguiente nivel
            </p>
            <Button 
              variant="hero" 
              size="lg" 
              onClick={() => openWhatsApp('Hola, necesito solicitar una cotización para mis servicios de marketing')}
            >
              Solicitar Cotización
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Services Moved Here */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-8">
            <h2 className="text-4xl font-bold mb-2 text-white">Servicios Detallados</h2>
            <p className="text-lg text-muted-foreground">
              Este bloque fue movido desde la pagina de pricing, manteniendo el mismo estilo visual.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4 text-white flex items-center gap-2">
                <Camera className="w-5 h-5" />
                FOTOGRAFIA
              </h3>
              <div className="grid gap-4">
                {photographyServices.map((service, index) => (
                  <Card
                    key={index}
                    className={`animate-in fade-in slide-in-from-bottom-4 duration-700 transform-gpu overflow-hidden bg-gradient-to-br ${service.gradient} border-2 border-transparent transition-all ease-out hover:shadow-xl hover:border-opacity-50 md:hover:scale-[1.02] md:hover:-translate-y-1 active:scale-[0.99]`}
                    style={{ animationDelay: `${index * 80}ms` }}
                  >
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
                      {service.includes && <p className="text-xs text-muted-foreground pt-2 border-t">{service.includes}</p>}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 text-primary flex items-center gap-2">
                <Video className="w-5 h-5" />
                VIDEO
              </h3>
              <div className="grid gap-4">
                {videoServices.map((service, index) => (
                  <Card
                    key={index}
                    className={`animate-in fade-in slide-in-from-bottom-4 duration-700 transform-gpu overflow-hidden bg-gradient-to-br ${service.gradient} border-2 border-transparent transition-all ease-out hover:shadow-xl hover:border-opacity-50 md:hover:scale-[1.02] md:hover:-translate-y-1 active:scale-[0.99]`}
                    style={{ animationDelay: `${120 + index * 80}ms` }}
                  >
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
                      {service.includes && <p className="text-xs text-muted-foreground pt-2 border-t">{service.includes}</p>}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 text-white flex items-center gap-2">
                <Edit3 className="w-5 h-5" />
                EDICION
              </h3>
              <div className="grid gap-4">
                {editingServices.map((service, index) => (
                  <Card
                    key={index}
                    className={`animate-in fade-in slide-in-from-bottom-4 duration-700 transform-gpu overflow-hidden bg-gradient-to-br ${service.gradient} border-2 border-transparent transition-all ease-out hover:shadow-xl hover:border-opacity-50 md:hover:scale-[1.02] md:hover:-translate-y-1 active:scale-[0.99]`}
                    style={{ animationDelay: `${220 + index * 80}ms` }}
                  >
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
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 text-primary flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                MARKETING
              </h3>
              <div className="grid gap-4">
                {marketingServices.map((service, index) => (
                  <Card
                    key={index}
                    className={`animate-in fade-in slide-in-from-bottom-4 duration-700 transform-gpu overflow-hidden bg-gradient-to-br ${service.gradient} border-2 border-transparent transition-all ease-out hover:shadow-xl hover:border-opacity-50 md:hover:scale-[1.02] md:hover:-translate-y-1 active:scale-[0.99]`}
                    style={{ animationDelay: `${320 + index * 80}ms` }}
                  >
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
                      {service.includes && <p className="text-xs text-muted-foreground pt-2 border-t">{service.includes}</p>}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 text-white flex items-center gap-2">
                <Megaphone className="w-5 h-5" />
                PUBLICIDAD
              </h3>
              <div className="grid gap-4">
                {advertisingServices.map((service, index) => (
                  <Card
                    key={index}
                    className={`animate-in fade-in slide-in-from-bottom-4 duration-700 transform-gpu overflow-hidden bg-gradient-to-br ${service.gradient} border-2 border-transparent transition-all ease-out hover:shadow-xl hover:border-opacity-50 md:hover:scale-[1.02] md:hover:-translate-y-1 active:scale-[0.99]`}
                    style={{ animationDelay: `${420 + index * 80}ms` }}
                  >
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
                      {service.includes && <p className="text-xs text-muted-foreground pt-2 border-t">{service.includes}</p>}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 text-primary flex items-center gap-2">
                <Package className="w-5 h-5" />
                PRODUCTOS
              </h3>
              <div className="grid gap-4">
                {productServices.map((service, index) => (
                  <Card
                    key={index}
                    className={`animate-in fade-in slide-in-from-bottom-4 duration-700 transform-gpu overflow-hidden bg-gradient-to-br ${service.gradient} border-2 border-transparent transition-all ease-out hover:shadow-xl hover:border-opacity-50 md:hover:scale-[1.02] md:hover:-translate-y-1 active:scale-[0.99]`}
                    style={{ animationDelay: `${520 + index * 80}ms` }}
                  >
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
                      {service.includes && <p className="text-xs text-muted-foreground pt-2 border-t">{service.includes}</p>}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

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
                    className="animate-in fade-in slide-in-from-bottom-4 duration-700 transform-gpu overflow-hidden bg-white/5 border border-white/20 backdrop-blur-sm transition-all ease-out hover:shadow-xl md:hover:scale-[1.02] md:hover:-translate-y-1 active:scale-[0.99]"
                    style={{ animationDelay: `${620 + index * 70}ms` }}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex flex-wrap items-center gap-2 justify-between">
                        <CardTitle className="text-base text-white">{service.name}</CardTitle>
                        <Badge className={`bg-gradient-to-r ${service.badgeGradient} text-white text-xs`}>{service.price}</Badge>
                      </div>
                      <CardDescription className="text-xs">{service.priceNote}</CardDescription>
                      {service.maintenance && <p className="text-xs text-amber-300 mt-1">{service.maintenance}</p>}
                    </CardHeader>
                    <CardContent className="pt-0 space-y-3">
                      <div>
                        <p className="text-xs font-semibold text-white mb-2">Incluye:</p>
                        <ul className="space-y-1">
                          {service.includes.map((item, itemIndex) => (
                            <li key={itemIndex} className="text-xs text-white/80 flex items-start">
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
                            <li key={itemIndex} className="text-xs text-white/75 flex items-start">
                              <span className="mr-2 mt-0.5">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="pt-2 border-t border-white/10">
                        <p className="text-xs font-semibold text-white mb-1">Ideal para:</p>
                        <p className="text-xs text-white/80">{service.idealFor}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Previous Services Below */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Mas Servicios de Marketing
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ofrecemos una gama completa de servicios de marketing digital diseñados para maximizar tu presencia online
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={service.id}
                className="group animate-in fade-in slide-in-from-bottom-4 duration-700 transform-gpu bg-white/5 border border-white/20 hover:border-primary/40 backdrop-blur-sm transition-all ease-out hover:shadow-elegant md:hover:scale-[1.02] md:hover:-translate-y-1 active:scale-[0.99]"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      {service.icon}
                    </div>
                  </div>
                  <Badge variant="secondary" className="w-fit mx-auto mb-2">
                    {service.category}
                  </Badge>
                  <CardTitle className="text-xl font-bold text-white">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-white/80">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-white/80">
                        <Target className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-lg font-semibold text-primary mb-4">
                      {service.price}
                    </p>
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300"
                      onClick={() => openWhatsApp(`Hola, necesito más información sobre el servicio de ${service.title}`)}
                    >
                      Más Información
                    </Button>
                  </div>
                </CardContent>
              </Card>
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