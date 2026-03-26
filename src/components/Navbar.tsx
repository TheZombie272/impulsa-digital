import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 24) {
        setIsNavbarVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsNavbarVisible(false);
      } else {
        setIsNavbarVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Servicios', href: '/servicios', isRoute: true },
    { name: 'Sobre nosotros', href: '#sobre', isRoute: false },
    { name: 'Nuestro equipo', href: '#equipo', isRoute: false },
  ];

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      // Si no estamos en la página principal, navegar primero
      navigate('/', { replace: true });
      // Usar setTimeout para esperar a que la página se cargue
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Si estamos en la página principal, hacer scroll directamente
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent('Hola, me interesa conocer más sobre sus servicios de marketing digital');
    const phoneNumber = '+573235254509';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleMenuItemClick = (item: any) => {
    setIsMenuOpen(false);
    if (!item.isRoute) {
      const sectionId = item.href.replace('#', '');
      scrollToSection(sectionId);
    }
  };

  return (
    <>
    <nav className={`fixed top-0 left-0 right-0 z-50 overflow-hidden border-b border-white/20 bg-white/[0.08] shadow-[0_8px_32px_rgba(15,23,42,0.35)] backdrop-blur-2xl [backdrop-filter:blur(22px)_saturate(170%)] transition-transform duration-300 ${isNavbarVisible || isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/8 to-white/5"></div>
        <div className="absolute -top-12 left-1/4 h-24 w-1/2 rounded-full bg-white/25 blur-2xl"></div>
        <div className="absolute -bottom-10 right-16 h-20 w-40 rounded-full bg-sky-300/15 blur-2xl"></div>
        <div className="absolute inset-x-0 top-0 h-px bg-white/60"></div>
      </div>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="relative flex items-center justify-between h-[72px]">
          {/* Logo + Texto */}
          <Link to="/" className="flex items-center space-x-4 justify-start group">
            <img
              src="/lovable-uploads/cohete.png"
              alt="Impulsa Logo"
              className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
            />
            <div className="leading-tight px-2 bg-[#001236] rounded-md transition-all duration-300 group-hover:bg-primary">
              <h1 className="text-2xl font-bold text-white">IMPULSA</h1>
              <p className="text-sm text-white tracking-wide">AGENCIA DE MARKETING</p>
            </div>
          </Link>
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              item.isRoute ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-violet-200 hover:text-violet-100 transition-colors duration-300 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-300 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ) : (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href.replace('#', ''))}
                  className="text-violet-200 hover:text-violet-100 transition-colors duration-300 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-300 transition-all duration-300 group-hover:w-full"></span>
                </button>
              )
            ))}
            <Button 
              variant="hero" 
              size="sm"
              onClick={openWhatsApp}
            >
              Contáctanos
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden relative border-t border-white/20 bg-white/[0.08] [backdrop-filter:blur(18px)_saturate(170%)]">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/15 to-white/5"></div>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                item.isRoute ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-3 py-2 text-violet-200 hover:text-violet-100 transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button
                    key={item.name}
                    onClick={() => handleMenuItemClick(item)}
                    className="block w-full text-left px-3 py-2 text-violet-200 hover:text-violet-100 transition-colors duration-300"
                  >
                    {item.name}
                  </button>
                )
              ))}
              <div className="px-3 py-2">
                <Button 
                  variant="hero" 
                  size="sm" 
                  className="w-full"
                  onClick={openWhatsApp}
                >
                  Contáctanos
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav >
    <div className="h-[72px]" aria-hidden="true" />
    </>

  );
};

export default Navbar;