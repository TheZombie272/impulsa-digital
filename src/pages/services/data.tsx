import {
  BarChart3,
  Camera,
  Edit3,
  Globe,
  Heart,
  Megaphone,
  Package,
  Palette,
  Search,
  TrendingUp,
  Video,
} from 'lucide-react';
import type { DetailedSection, MarketingService, WebService } from './types';

const photographyServices = [
  {
    category: 'Fotografia basica para marca y redes sociales',
    options: [
      { description: '10 fotos editadas', price: '$180.000' },
      { description: '20 fotos editadas', price: '$300.000' },
    ],
    includes: 'Incluye toma, iluminacion basica, edicion de color y entrega digital.',
    icon: <Camera className="w-6 h-6" />,
    gradient: 'from-amber-500/10 via-orange-400/10 to-yellow-500/10',
    borderGradient: 'from-amber-500 via-orange-400 to-yellow-500',
    badgeGradient: 'from-amber-600 to-orange-500',
  },
  {
    category: 'Fotografia de producto',
    options: [
      { description: '5 productos', price: '$220.000' },
      { description: '10 productos', price: '$380.000' },
      { description: 'Producto adicional', price: '$30.000' },
    ],
    includes: 'Incluye fondo limpio, enfoque comercial y edicion profesional.',
    icon: <Package className="w-6 h-6" />,
    gradient: 'from-orange-500/10 via-red-400/10 to-rose-500/10',
    borderGradient: 'from-orange-500 via-red-400 to-rose-500',
    badgeGradient: 'from-orange-600 to-red-500',
  },
  {
    category: 'Fotografia corporativa',
    options: [
      { description: 'Sesion corta (1 persona)', price: '$250.000' },
      { description: 'Equipo de trabajo (hasta 5 personas)', price: '$450.000' },
    ],
    includes: null,
    icon: <Camera className="w-6 h-6" />,
    gradient: 'from-yellow-500/10 via-amber-400/10 to-orange-500/10',
    borderGradient: 'from-yellow-500 via-amber-400 to-orange-500',
    badgeGradient: 'from-yellow-600 to-amber-500',
  },
];

const videoServices = [
  {
    category: 'Video corto para redes sociales (reels o anuncios)',
    options: [
      { description: '1 video de 15 a 30 segundos', price: '$150.000' },
      { description: 'Paquete de 4 videos', price: '$500.000' },
    ],
    includes: 'Incluye grabacion, edicion y subtitulos basicos.',
    icon: <Video className="w-6 h-6" />,
    gradient: 'from-red-500/10 via-pink-400/10 to-rose-500/10',
    borderGradient: 'from-red-500 via-pink-400 to-rose-500',
    badgeGradient: 'from-red-600 to-pink-500',
  },
];

const editingServices = [
  {
    category: 'Edicion de fotografia',
    options: [
      { description: 'Edicion individual', price: '$20.000' },
      { description: 'Paquete de 20 fotos', price: '$250.000' },
    ],
    includes: null,
    icon: <Edit3 className="w-6 h-6" />,
    gradient: 'from-sky-500/10 via-cyan-400/10 to-teal-500/10',
    borderGradient: 'from-sky-500 via-cyan-400 to-teal-500',
    badgeGradient: 'from-sky-600 to-cyan-500',
  },
  {
    category: 'Edicion de video',
    options: [
      { description: 'Video corto hasta 30 segundos', price: '$80.000' },
      { description: 'Video largo de 1 a 3 minutos', price: '$180.000' },
    ],
    includes: null,
    icon: <Video className="w-6 h-6" />,
    gradient: 'from-blue-500/10 via-indigo-400/10 to-purple-500/10',
    borderGradient: 'from-blue-500 via-indigo-400 to-purple-500',
    badgeGradient: 'from-blue-600 to-indigo-500',
  },
];

const marketingServices = [
  {
    category: 'Gestion de redes sociales (mensual)',
    options: [
      { description: '1 red social', price: '$350.000' },
      { description: '2 redes sociales', price: '$500.000' },
      { description: '3 redes sociales', price: '$700.000' },
    ],
    includes: 'Incluye publicaciones, diseno grafico, copywriting y programacion.',
    icon: <TrendingUp className="w-6 h-6" />,
    gradient: 'from-emerald-500/10 via-green-400/10 to-lime-500/10',
    borderGradient: 'from-emerald-500 via-green-400 to-lime-500',
    badgeGradient: 'from-emerald-600 to-green-500',
  },
];

const advertisingServices = [
  {
    category: 'Gestion de campanas en Meta Ads o Google Ads',
    options: [
      { description: 'Configuracion inicial', price: '$150.000' },
      { description: 'Gestion mensual', price: '$250.000 - $500.000' },
    ],
    includes: 'El presupuesto de pauta publicitaria no esta incluido.',
    icon: <Megaphone className="w-6 h-6" />,
    gradient: 'from-pink-500/10 via-fuchsia-400/10 to-purple-500/10',
    borderGradient: 'from-pink-500 via-fuchsia-400 to-purple-500',
    badgeGradient: 'from-pink-600 to-fuchsia-500',
  },
];

const productServices = [
  {
    category: 'Sesion de producto comercial',
    options: [
      { description: 'Hasta 10 productos', price: '$150.000' },
      { description: 'Hasta 20 productos', price: '$280.000' },
    ],
    includes: 'Incluye toma y edicion con enfoque para ecommerce y redes sociales.',
    icon: <Package className="w-6 h-6" />,
    gradient: 'from-slate-500/10 via-gray-400/10 to-zinc-500/10',
    borderGradient: 'from-slate-500 via-gray-400 to-zinc-500',
    badgeGradient: 'from-slate-600 to-gray-500',
  },
];

export const detailedSections: DetailedSection[] = [
  {
    id: 'fotografia',
    title: 'FOTOGRAFIA',
    headingClassName: 'text-white',
    icon: <Camera className="w-5 h-5" />,
    items: photographyServices,
    baseDelay: 0,
  },
  {
    id: 'video',
    title: 'VIDEO',
    headingClassName: 'text-white',
    icon: <Video className="w-5 h-5" />,
    items: videoServices,
    baseDelay: 120,
  },
  {
    id: 'edicion',
    title: 'EDICION',
    headingClassName: 'text-white',
    icon: <Edit3 className="w-5 h-5" />,
    items: editingServices,
    baseDelay: 220,
  },
  {
    id: 'marketing',
    title: 'MARKETING',
    headingClassName: 'text-white',
    icon: <TrendingUp className="w-5 h-5" />,
    items: marketingServices,
    baseDelay: 320,
  },
  {
    id: 'publicidad',
    title: 'PUBLICIDAD',
    headingClassName: 'text-white',
    icon: <Megaphone className="w-5 h-5" />,
    items: advertisingServices,
    baseDelay: 420,
  },
  {
    id: 'productos',
    title: 'PRODUCTOS',
    headingClassName: 'text-white',
    icon: <Package className="w-5 h-5" />,
    items: productServices,
    baseDelay: 520,
  },
];

export const webServices: WebService[] = [
  {
    name: 'Web Personal en Codigo',
    price: '$250.000',
    priceNote: '(pago unico)',
    includes: [
      '1 landing page de hasta 5 secciones',
      'Diseno responsive (celular, tablet y computador)',
      'Boton de WhatsApp y formulario basico de contacto',
      'Integracion de redes sociales',
      'SEO inicial (titulos, descripciones y estructura basica)',
    ],
    notIncludes: [
      'Panel de administracion',
      'Blog avanzado o funciones dinamicas complejas',
      'Tienda online o pasarela de pagos',
      'Dominio y hosting',
    ],
    idealFor: 'Profesionales, marcas personales y negocios que solo necesitan presencia web clara y profesional.',
    badgeGradient: 'from-cyan-600 to-blue-500',
  },
  {
    name: 'Web Personal en WordPress',
    price: '$350.000',
    priceNote: '(pago unico)',
    includes: [
      'Instalacion y configuracion inicial de WordPress',
      'Diseno base personalizado',
      'Secciones editables para cambiar textos e imagenes',
      'Capacitacion corta para autogestion',
    ],
    notIncludes: ['Desarrollo de plugins o funciones avanzadas a medida', 'Plugins premium de pago', 'Dominio y hosting'],
    idealFor: 'Quienes quieren editar su sitio sin depender de un desarrollador para cambios simples.',
    badgeGradient: 'from-blue-600 to-indigo-500',
  },
  {
    name: 'Menu/Catalogo en Codigo',
    price: '$300.000',
    priceNote: '(pago unico)',
    includes: [
      'Pagina de menu o catalogo por categorias',
      'Hasta 30 items (nombre, descripcion y precio)',
      'Diseno responsive',
      'Carrito de compras integrado',
      'Boton de pedido por WhatsApp',
    ],
    notIncludes: ['Pasarela de pagos', 'Panel de administracion', 'Dominio y hosting'],
    idealFor: 'Restaurantes y negocios que venden por WhatsApp y necesitan mostrar su oferta de forma ordenada.',
    badgeGradient: 'from-emerald-600 to-teal-500',
  },
  {
    name: 'Menu/Catalogo en WordPress',
    price: '$430.000',
    priceNote: '(pago unico)',
    includes: [
      'Todo lo del menu en codigo',
      'Panel editable en WordPress',
      'Autogestion para cambiar precios, descripciones e imagenes',
      'Carrito de compras integrado',
    ],
    notIncludes: ['Pasarela de pagos', 'Plugins premium de pago', 'Dominio y hosting'],
    idealFor: 'Negocios que cambian su menu con frecuencia y quieren control directo del contenido.',
    badgeGradient: 'from-lime-600 to-green-500',
  },
  {
    name: 'Tienda Virtual en Codigo con Backend y Administracion',
    price: '$500.000',
    priceNote: '(pago unico de desarrollo)',
    maintenance: 'Mantenimiento backend: $20.000 / mes',
    includes: [
      'Tienda desarrollada en codigo',
      'Carrito de compras integrado',
      'Backend funcional',
      'Pestana/panel de administracion para gestionar contenido/productos',
      'Estructura base preparada para crecimiento',
    ],
    notIncludes: [
      'Costos de pauta publicitaria',
      'Costos de pasarela de pago',
      'Dominio y hosting',
      'Integraciones empresariales complejas a medida',
    ],
    idealFor: 'Marcas que quieren una tienda mas personalizada y con control administrativo interno.',
    badgeGradient: 'from-orange-600 to-red-500',
  },
  {
    name: 'Tienda Virtual en Shopify',
    price: '$290.000',
    priceNote: '(pago unico de configuracion)',
    includes: [
      'Configuracion inicial de tienda en Shopify',
      'Personalizacion visual base',
      'Carrito de compras integrado',
      'Organizacion por categorias/colecciones',
      'Carga inicial basica de productos',
    ],
    notIncludes: ['Suscripcion mensual de Shopify', 'Apps premium de pago', 'Dominio y costos de terceros', 'Migraciones complejas'],
    idealFor: 'Negocios que quieren empezar a vender rapido en una plataforma estable.',
    badgeGradient: 'from-violet-600 to-purple-500',
  },
  {
    name: 'Tienda Virtual en WordPress (WooCommerce)',
    price: '$650.000',
    priceNote: '(pago unico)',
    includes: [
      'Instalacion WordPress + WooCommerce',
      'Configuracion de carrito y checkout',
      'Configuracion base de pagos y envios (con datos del cliente)',
      'Estructura editable de tienda',
    ],
    notIncludes: ['Desarrollos avanzados a medida', 'Plugins premium de pago', 'Dominio y hosting'],
    idealFor: 'Negocios que buscan control total y mayor escalabilidad en WordPress.',
    badgeGradient: 'from-fuchsia-600 to-pink-500',
  },
  {
    name: 'Landing sin Backend editable por Excel',
    price: '$480.000',
    priceNote: '(pago unico)',
    includes: [
      'Landing responsive',
      'Estructura sin backend tradicional',
      'Contenido editable desde Excel/Google Sheets',
      'Actualizacion simple de datos sin tocar codigo',
    ],
    notIncludes: ['Panel administrativo interno', 'Gestion de usuarios/roles', 'Logica avanzada de ecommerce'],
    idealFor: 'Negocios que actualizan datos seguido y quieren hacerlo de forma facil desde una hoja de calculo.',
    badgeGradient: 'from-amber-600 to-yellow-500',
  },
];

export const marketingOverviewServices: MarketingService[] = [
  {
    id: 1,
    title: 'Marketing Digital',
    description: 'Estrategias integrales de marketing digital para hacer crecer tu negocio en linea',
    icon: <TrendingUp className="h-8 w-8" />,
    features: ['SEO/SEM', 'Email Marketing', 'Marketing de Contenidos', 'Analytics'],
    price: '',
    category: 'Digital',
  },
  {
    id: 2,
    title: 'Publicidad Online',
    description: 'Campanas publicitarias efectivas en Google Ads, TikTok, Facebook e Instagram',
    icon: <Megaphone className="h-8 w-8" />,
    features: ['Google Ads', 'Facebook Ads', 'Instagram Ads', 'TikTok Ads', 'Network Ads', 'Remarketing'],
    price: '',
    category: 'Publicidad',
  },
  {
    id: 3,
    title: 'Gestion de Redes Sociales',
    description: 'Creacion y gestion de contenido para todas tus redes sociales',
    icon: <Heart className="h-8 w-8" />,
    features: ['Creacion de Contenido', 'Community Management', 'Flayers', 'Stories', 'Reels'],
    price: '',
    category: 'Social Media',
  },
  {
    id: 4,
    title: 'Diseno Grafico',
    description: 'Diseno de identidad visual y materiales graficos para tu marca',
    icon: <Palette className="h-8 w-8" />,
    features: ['Logo Design', 'Branding', 'Material Impreso', 'Fotografia', 'Web Design'],
    price: '',
    category: 'Diseno',
  },
  {
    id: 5,
    title: 'SEO y Posicionamiento',
    description: 'Optimizacion para motores de busqueda y mejora del ranking web',
    icon: <Search className="h-8 w-8" />,
    features: ['Auditoria SEO', 'Optimizacion On-Page', 'Link Building', 'SEO Local'],
    price: '',
    category: 'SEO',
  },
  {
    id: 6,
    title: 'Analisis y Reportes',
    description: 'Monitoreo y analisis detallado del rendimiento de tus campanas y estrategias',
    icon: <BarChart3 className="h-8 w-8" />,
    features: ['Google Analytics', 'Meta Ads'],
    price: '',
    category: 'Analytics',
  },
];

export const webEcosystemHeader = {
  sectionTitle: 'Ecosistema Web a Tu Medida',
  sectionSubtitle: 'Desde landing pages hasta tiendas online con administracion y escalabilidad.',
  eyebrow: 'Soluciones Digitales',
  icon: <Globe className="w-6 h-6 text-cyan-300" />,
};
