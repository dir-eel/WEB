import {
  CheckCircle2,
  ChevronRight,
  Clock3,
  Gauge,
  Menu,
  Phone,
  ShieldCheck,
  Truck,
  Wrench,
  X,
} from "lucide-react";
import { useState } from "react";
import {
  BASE,
  clients,
  servicesPrimary,
  servicesSecondary,
  whatsappUrl,
} from "./data.js";

function Header() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
    <a className="brand" href="#inicio"><img src={`${BASE}logo/direel-logo.png`} alt="DIREEL" /></a>
      <button
        className="menu-toggle"
        aria-label="Abrir menú"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      <nav className={`nav ${open ? "nav-open" : ""}`}>
        <a href="#servicios" onClick={closeMenu}>Servicios</a>
        <a href="#especialidad" onClick={closeMenu}>Especialidad</a>
        <a href="#flotillas" onClick={closeMenu}>Flotillas</a>
        <a href="#clientes" onClick={closeMenu}>Clientes</a>
        <a href="#contacto" onClick={closeMenu}>Contacto</a>
        <a className="nav-cta" href={whatsappUrl} target="_blank" rel="noreferrer">
          Solicitar atención
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="hero hero-full">
      <div className="container">
        <div className="hero-card">
          <img
            src={`${BASE}images/hero.png`}
            alt="Servicio técnico diésel para unidades pesadas"
            className="hero-card-img"
          />

          <div className="hero-card-content">
            <p className="eyebrow">Multimarcas con especialidad en plataformas europeas</p>
            <h1>Mantenimiento y reparación para unidades pesadas diésel</h1>
            <p className="hero-text">
              Diagnóstico preciso, reparación eficiente y atención técnica especializada
              para mantener las unidades trabajando.
            </p>

            <div className="hero-tags">
              <span>Multimarcas</span>
              <span>Especialidad europea</span>
              <span>Atención a flotillas</span>
              <span>Continuidad operativa</span>
            </div>

            <div className="hero-actions">
              <a className="btn btn-primary" href={whatsappUrl} target="_blank" rel="noreferrer">
                Solicitar atención por WhatsApp
                <ChevronRight size={18} />
              </a>
              <a className="btn btn-secondary" href="#servicios">
                Ver servicios
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Indicators() {
  const items = [
    {
      icon: <Gauge />,
      title: "Diagnóstico preciso",
      text: "Identificación técnica de la causa real de la falla.",
    },
    {
      icon: <Wrench />,
      title: "Reparación eficiente",
      text: "Intervenciones orientadas a recuperar operación.",
    },
    {
      icon: <Truck />,
      title: "Atención multimarcas",
      text: "Unidades pesadas diésel y plataformas europeas.",
    },
    {
      icon: <Clock3 />,
      title: "Continuidad operativa",
      text: "Menor tiempo fuera de servicio.",
    },
  ];

  return (
    <section className="indicators">
      <div className="container indicators-grid">
        {items.map((item) => (
          <article className="indicator-card" key={item.title}>
            <div className="icon-box">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="servicios" className="section services">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Servicios DIREEL</p>
          <h2>Soporte técnico para operación diésel pesada</h2>
          <p>
            Servicios enfocados en mantenimiento, reparación y continuidad operativa
            para unidades pesadas diésel multimarcas.
          </p>
        </div>

        <div className="service-grid">
          {servicesPrimary.map((service) => (
            <article className="service-card" key={service.title}>
              <Wrench size={28} />
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>

        <div className="secondary-services">
          {servicesSecondary.map((service) => (
            <span key={service}>{service}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Specialty() {
  return (
    <section id="especialidad" className="section specialty section-dark">
      <div className="container specialty-grid">
        <div className="specialty-media">
          <img src={`${BASE}images/especialidad.png`} alt="Especialidad en plataformas europeas" />
        </div>

        <div className="specialty-content">
          <p className="eyebrow">Diferencial técnico</p>
          <h2>Especialidad en plataformas europeas</h2>
          <p>
            DIREEL trabaja con plataformas y configuraciones europeas para unidades
            pesadas diésel multimarcas.
          </p>
          <p>
            Aplicamos diagnóstico técnico orientado a identificar la causa real de
            la falla y ejecutar reparaciones eficientes para mantener la operación
            de la unidad.
          </p>

          <div className="specialty-list">
            <span><CheckCircle2 /> Diagnóstico técnico aplicado</span>
            <span><CheckCircle2 /> Sistemas europeos</span>
            <span><CheckCircle2 /> Configuraciones multimarcas</span>
            <span><CheckCircle2 /> Reparación orientada a operación</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Approach() {
  return (
    <section className="section approach">
      <div className="container narrow">
        <p className="eyebrow">Enfoque DIREEL</p>
        <h2>Diagnóstico fundamentado. Reparación eficiente.</h2>
        <p>
          Nuestro enfoque es identificar la causa real de la falla para ejecutar
          intervenciones técnicas orientadas a mantener las unidades trabajando.
        </p>

        <div className="pillar-grid">
          <article>
            <ShieldCheck />
            <h3>Precisión técnica</h3>
          </article>
          <article>
            <Clock3 />
            <h3>Continuidad operativa</h3>
          </article>
          <article>
            <Wrench />
            <h3>Atención especializada</h3>
          </article>
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    ["01", "Revisión inicial", "Evaluación técnica de la unidad."],
    ["02", "Diagnóstico técnico", "Identificación de causa real."],
    ["03", "Intervención técnica", "Mantenimiento y reparación."],
    ["04", "Validación operativa", "Pruebas y comprobación técnica."],
  ];

  return (
    <section className="section process section-dark-soft">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Proceso operativo</p>
          <h2>Orden técnico desde la revisión hasta la validación</h2>
        </div>

        <div className="process-grid">
          {steps.map(([number, title, text]) => (
            <article className="process-card" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Clients() {
  return (
    <section id="clientes" className="section clients">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Clientes y respaldo</p>
          <h2>Empresas que han confiado en DIREEL</h2>
          <p>
            Logos publicados únicamente bajo autorización. Cada marca enlaza a su página oficial.
          </p>
        </div>

        <div className="clients-grid">
          {clients.map((client) => (
            <a
              className="client-logo"
              href={client.url}
              target="_blank"
              rel="noreferrer"
              key={client.name}
              aria-label={`Visitar sitio de ${client.name}`}
            >
              <img src={client.logo} alt={client.name} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Fleets() {
  return (
    <section id="flotillas" className="section fleets section-dark">
      <div className="container fleets-grid">
        <div>
          <p className="eyebrow">Flotillas y empresas</p>
          <h2>Atención técnica para flotillas y empresas</h2>
          <p>
            Soporte técnico orientado a mantenimiento preventivo, reparación y
            continuidad operativa para unidades pesadas diésel.
          </p>
        </div>

        <div className="fleet-checklist">
          {[
            "Atención directa",
            "Contratos de mantenimiento",
            "Atención multimarcas",
            "Continuidad operativa",
            "Soporte técnico especializado",
          ].map((item) => (
            <span key={item}>
              <CheckCircle2 />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="final-cta">
      <div className="container final-cta-box">
        <h2>Mantén tus unidades trabajando</h2>
        <p>
          Solicita información para revisión, mantenimiento o reparación de unidades
          pesadas diésel.
        </p>
        <a className="btn btn-light" href={whatsappUrl} target="\\\\\\\\\\\\\\\_blank" rel="noreferrer">
          Solicitar atención por WhatsApp
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contacto" className="footer">
      <div className="container footer-grid">
        <div>
         <img
          src={`${BASE}logo/direel-logo.png`} alt="DIREEL" className="footer-logo" />
          <p>Servicio técnico diésel para unidades pesadas multimarcas.</p>
        </div>

        <div>
          <h3>Contacto</h3>
          <p><Phone size={16} /> +52 229 424 6574</p>
          <p>direel.informes@gmail.com</p>
          <p>Medellín, Veracruz, México</p>
        </div>

        <div>
          <h3>Horario</h3>
          <p>Lunes a sábado</p>
          <p>8:00 a 21:00 hrs.</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>DIREEL © Todos los derechos reservados.</p>
      </div>

      <a className="whatsapp-float" href={whatsappUrl} target="\\\\\\\\\\\\\\\_blank" rel="noreferrer" aria-label="WhatsApp DIREEL">
        WhatsApp
      </a>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Indicators />
        <Services />
        <Specialty />
        <Approach />
        <Process />
        <Clients />
        <Fleets />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}


