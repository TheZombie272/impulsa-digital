import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';

const CookiesPolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Seo
        title="Politica de Cookies | Impulsa Digital"
        description="Informacion sobre el uso de cookies y tecnologias similares en Impulsa Digital."
        path="/politica-de-cookies"
      />
      <Navbar />

      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Politica de Cookies</h1>
          <p className="text-sm text-muted-foreground mb-8">Ultima actualizacion: 28 de marzo de 2026</p>

          <div className="space-y-8 leading-relaxed text-foreground/90">
            <section>
              <h2 className="text-xl font-semibold mb-2">1. Que son las cookies</h2>
              <p>
                Las cookies son pequenos archivos que se almacenan en tu navegador cuando visitas un sitio web.
                Sirven para recordar preferencias, mejorar rendimiento y obtener analitica de uso.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">2. Tipos de cookies que podemos usar</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Cookies tecnicas: necesarias para el funcionamiento basico del sitio.</li>
                <li>Cookies de analitica: ayudan a medir visitas y comportamiento de navegacion.</li>
                <li>Cookies de marketing: permiten personalizar publicidad y medir campanas.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">3. Cookies de terceros</h2>
              <p>
                Algunas cookies pueden ser establecidas por servicios de terceros, por ejemplo herramientas
                de analitica, plataformas publicitarias o integraciones externas.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">4. Gestion del consentimiento</h2>
              <p>
                Puedes aceptar, rechazar o configurar el uso de cookies no esenciales cuando esa opcion este
                disponible en el banner o centro de preferencias de cookies del sitio.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">5. Como desactivar cookies</h2>
              <p>
                Tambien puedes bloquear o eliminar cookies desde la configuracion de tu navegador.
                Ten en cuenta que algunas funciones del sitio podrian verse afectadas.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">6. Cambios a esta politica</h2>
              <p>
                Podemos modificar esta politica cuando cambien nuestras practicas o obligaciones legales.
                La version vigente siempre estara disponible en esta pagina.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">7. Contacto</h2>
              <p>
                Si tienes dudas sobre esta politica, escribe a:
                {' '}
                <a className="text-primary underline" href="mailto:contactoImpulsaSAS@gmail.com">contactoImpulsaSAS@gmail.com</a>
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CookiesPolicy;
