import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Seo
        title="Politica de Privacidad | Impulsa Digital"
        description="Conoce como Impulsa Digital recopila, usa y protege tus datos personales."
        path="/politica-de-privacidad"
      />
      <Navbar />

      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Politica de Privacidad</h1>
          <p className="text-sm text-muted-foreground mb-8">Ultima actualizacion: 28 de marzo de 2026</p>

          <div className="space-y-8 leading-relaxed text-foreground/90">
            <section>
              <h2 className="text-xl font-semibold mb-2">1. Responsable del tratamiento</h2>
              <p>
                Impulsa Digital es responsable del tratamiento de los datos personales recolectados a traves
                de este sitio web y de los canales de contacto asociados.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">2. Datos que recopilamos</h2>
              <p>Podemos recopilar los siguientes datos:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Datos de contacto como nombre, correo, telefono y empresa.</li>
                <li>Informacion que compartes en formularios o mensajes por WhatsApp.</li>
                <li>Datos tecnicos de navegacion como IP, navegador y paginas visitadas.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">3. Finalidades del tratamiento</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Atender solicitudes comerciales, cotizaciones y consultas.</li>
                <li>Prestar y mejorar nuestros servicios de marketing y desarrollo web.</li>
                <li>Enviar comunicaciones relacionadas con nuestros servicios, cuando aplique.</li>
                <li>Analizar el uso del sitio para optimizar la experiencia del usuario.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">4. Base legal</h2>
              <p>
                Tratamos los datos con base en el consentimiento del titular, la ejecucion de medidas
                precontractuales o contractuales, y/o el interes legitimo de mejorar nuestros servicios,
                segun corresponda.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">5. Comparticion con terceros</h2>
              <p>
                Podemos apoyarnos en proveedores tecnologicos para hosting, analitica, mensajeria o gestion
                de clientes. Estos terceros tratan datos por cuenta nuestra bajo medidas de seguridad adecuadas.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">6. Conservacion de datos</h2>
              <p>
                Conservamos los datos por el tiempo necesario para cumplir las finalidades informadas,
                obligaciones legales o requerimientos de defensa juridica.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">7. Derechos del titular</h2>
              <p>Puedes solicitar en cualquier momento:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Acceso, actualizacion o correccion de tus datos.</li>
                <li>Supresion de datos cuando sea procedente.</li>
                <li>Revocatoria del consentimiento.</li>
                <li>Informacion sobre el uso dado a tus datos personales.</li>
              </ul>
              <p className="mt-2">
                Para ejercer estos derechos, escribe a: <a className="text-primary underline" href="mailto:contactoImpulsaSAS@gmail.com">contactoImpulsaSAS@gmail.com</a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">8. Seguridad</h2>
              <p>
                Implementamos medidas tecnicas y organizativas razonables para proteger la informacion
                personal frente a acceso no autorizado, perdida o alteracion.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">9. Cambios a esta politica</h2>
              <p>
                Podemos actualizar esta politica en cualquier momento. Publicaremos la version vigente
                en esta misma pagina con su fecha de actualizacion.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
