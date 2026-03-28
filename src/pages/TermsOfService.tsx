import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Seo
        title="Terminos de Servicio | Impulsa Digital"
        description="Consulta los terminos y condiciones de uso del sitio y servicios de Impulsa Digital."
        path="/terminos-de-servicio"
      />
      <Navbar />

      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Terminos de Servicio</h1>
          <p className="text-sm text-muted-foreground mb-8">Ultima actualizacion: 28 de marzo de 2026</p>

          <div className="space-y-8 leading-relaxed text-foreground/90">
            <section>
              <h2 className="text-xl font-semibold mb-2">1. Aceptacion</h2>
              <p>
                Al acceder o usar este sitio, aceptas estos terminos. Si no estas de acuerdo, debes
                abstenerte de usar el sitio y los servicios publicados.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">2. Servicios</h2>
              <p>
                Impulsa Digital ofrece servicios de marketing digital, produccion de contenido y desarrollo web.
                El alcance, tiempos y precios finales se definen por propuesta comercial o contrato.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">3. Uso permitido</h2>
              <p>Te comprometes a no usar este sitio para:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Actividades ilegales o fraudulentas.</li>
                <li>Interferir con la seguridad o disponibilidad del sitio.</li>
                <li>Copiar o explotar contenido sin autorizacion.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">4. Propiedad intelectual</h2>
              <p>
                El contenido de este sitio (textos, diseno, marcas, graficos y software) es propiedad de
                Impulsa Digital o de sus titulares y esta protegido por normas de propiedad intelectual.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">5. Enlaces y terceros</h2>
              <p>
                Este sitio puede incluir enlaces a plataformas o servicios de terceros. No controlamos su
                contenido ni politicas, y no asumimos responsabilidad por su uso.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">6. Limitacion de responsabilidad</h2>
              <p>
                Hacemos esfuerzos razonables para mantener la informacion actualizada y el sitio disponible,
                pero no garantizamos ausencia total de errores, interrupciones o resultados especificos.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">7. Terminacion</h2>
              <p>
                Podemos restringir o suspender el acceso al sitio cuando exista uso indebido, riesgo tecnico,
                incumplimiento de estos terminos o requerimiento legal.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">8. Ley aplicable</h2>
              <p>
                Estos terminos se interpretan conforme a la normativa aplicable en Colombia, sin perjuicio
                de derechos irrenunciables del consumidor segun su jurisdiccion.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">9. Contacto</h2>
              <p>
                Para consultas sobre estos terminos puedes escribir a:
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

export default TermsOfService;
