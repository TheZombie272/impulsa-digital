import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [isLightBackdrop, setIsLightBackdrop] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const animatedTextClass = isLightBackdrop ? 'navbar-text-flow-dark' : 'navbar-text-flow-light';
  const desktopMenuTextClass = `relative group transition-opacity duration-300 hover:opacity-85 ${animatedTextClass}`;
  const mobileMenuTextClass = `block w-full text-left px-3 py-2 rounded-lg transition-all duration-300 hover:opacity-85 ${animatedTextClass} ${
    isLightBackdrop ? 'hover:bg-black/10' : 'hover:bg-white/10'
  }`;
  const glassSurfaceClass = 'border-b border-white/20 bg-white/[0.08] shadow-[0_8px_32px_rgba(15,23,42,0.35)] backdrop-blur-2xl [backdrop-filter:blur(22px)_saturate(170%)]';

  const parseRgb = (value: string) => {
    const match = value.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/i);
    if (!match) return null;
    return {
      r: Number(match[1]),
      g: Number(match[2]),
      b: Number(match[3]),
      a: match[4] ? Number(match[4]) : 1,
    };
  };

  const getPerceivedLuminance = (r: number, g: number, b: number) => {
    const toLinear = (channel: number) => {
      const s = channel / 255;
      return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
    };
    const rl = toLinear(r);
    const gl = toLinear(g);
    const bl = toLinear(b);
    return 0.2126 * rl + 0.7152 * gl + 0.0722 * bl;
  };

  const resolveElementBgLuminance = (element: Element | null): number | null => {
    let current: Element | null = element;
    while (current && current !== document.documentElement) {
      const styles = window.getComputedStyle(current);
      const parsed = parseRgb(styles.backgroundColor || '');
      if (parsed && parsed.a > 0.08) {
        return getPerceivedLuminance(parsed.r, parsed.g, parsed.b);
      }
      current = current.parentElement;
    }
    const bodyParsed = parseRgb(window.getComputedStyle(document.body).backgroundColor || '');
    if (!bodyParsed) return null;
    return getPerceivedLuminance(bodyParsed.r, bodyParsed.g, bodyParsed.b);
  };

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

  useEffect(() => {
    const updateAdaptiveText = () => {
      if (!navRef.current) return;

      const sampleY = Math.min(40, Math.max(8, Math.round(navRef.current.getBoundingClientRect().height / 2)));
      const sampleXs = [window.innerWidth * 0.2, window.innerWidth * 0.5, window.innerWidth * 0.8];
      const luminances: number[] = [];

      sampleXs.forEach((x) => {
        const stack = document.elementsFromPoint(Math.round(x), sampleY);
        const behindNav = stack.find((el) => navRef.current && el !== navRef.current && !navRef.current.contains(el));
        const lum = resolveElementBgLuminance(behindNav ?? null);
        if (typeof lum === 'number') luminances.push(lum);
      });

      if (luminances.length === 0) return;
      const avg = luminances.reduce((sum, value) => sum + value, 0) / luminances.length;
      setIsLightBackdrop(avg > 0.42);
    };

    updateAdaptiveText();
    window.addEventListener('scroll', updateAdaptiveText, { passive: true });
    window.addEventListener('resize', updateAdaptiveText);
    return () => {
      window.removeEventListener('scroll', updateAdaptiveText);
      window.removeEventListener('resize', updateAdaptiveText);
    };
  }, [location.pathname, isMenuOpen]);

  const menuItems = [
    { name: 'Servicios', href: '/servicios', isRoute: true },
    { name: 'Marketing Digital', href: '#marketing-digital', isRoute: false },
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
    <nav ref={navRef} className={`fixed top-0 left-0 right-0 z-50 overflow-visible ${glassSurfaceClass} transition-transform duration-300 ${isNavbarVisible || isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
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
                  className={desktopMenuTextClass}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-300/80 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ) : (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href.replace('#', ''))}
                  className={desktopMenuTextClass}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-300/80 transition-all duration-300 group-hover:w-full"></span>
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
          <div className="lg:hidden border-t border-white/20 relative z-10">
              <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                item.isRoute ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={mobileMenuTextClass}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button
                    key={item.name}
                    onClick={() => handleMenuItemClick(item)}
                    className={mobileMenuTextClass}
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
    </>

  );
};

export default Navbar;