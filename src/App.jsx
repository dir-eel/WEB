import {
  Activity,
  BusFront,
  ChevronRight,
  CircleGauge,
  Clock3,
  Cog,
  Cpu,
  Mail,
  MapPin,
  Menu,
  PackageSearch,
  Phone,
  Settings2,
  ShieldCheck,
  Snowflake,
  Truck,
  Wrench,
  X,
} from "lucide-react";
import { useState } from "react";
import {
  BASE,
  CONTACT_EMAIL,
  PHONE_DISPLAY,
  PHONE_LINK,
  clients,
  services,
  unitTypes,
  whatsappUrl,
} from "./data.js";

const serviceIcons = {
  diagnostic: Activity,
  maintenance: CircleGauge,
  mechanical: Wrench,
  field: Truck,
  supplies: PackageSearch,
  scr: Cpu,
  parameters: Settings2,
};

const unitIcons = {
  cold: Snowflake,
  bus: BusFront,
  heavy: Truck,
};

function Header() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="Ir al inicio de DIREEL">
        <img src={`${BASE}logo/direel-logo.png`} alt="DIREEL" />
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
      >
        {open ? <X size={25} /> : <Menu size={25} />}
      </button>

      <nav className={`nav ${open ? "nav-open" : ""}`} aria-label="Navegación principal">
        <a href="#inicio" onClick={closeMenu}>Inicio</a>
        <a href="#servicios" onClick={closeMenu}>Servicios</a>
        <a href="#unidades" onClick={closeMenu}>Unidades</a>
        <a href="#clientes" onClick={closeMenu}>Clientes</a>
        <a href="#contacto" onClick={closeMenu}>Contacto</a>
        <a className="nav-cta" href={whatsappUrl} target="_blank" rel="noreferrer">
          Solicitar diagnóstico
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="hero">
      <img
        src={`${BASE}images/hero.png`}
        alt="Servicio técnico DIREEL para unidades diésel pesadas"
        className="hero-image"
      />
      <div className="hero-overlay" />

      <div className="container hero-content">
        <div className="hero-copy">
          <span className="hero-rule" aria-hidden="true" />
          <p className="eyebrow">Servicio técnico especializado</p>
          <h1>
            Diagnóstico y reparación especializada en sistemas <em>diésel</em>
          </h1>
          <p className="hero-text">
            Soluciones técnicas para mantener tus unidades en operación, reducir tiempos
            fuera de servicio y recuperar su funcionamiento.
          </p>

          <div className="hero-specialties" aria-label="Servicios destacados">
            <span>Cancelación del sistema SCR / urea</span>
            <span>Modificación de parámetros</span>
          </div>

          <div className="hero-audience">
            <Truck size={30} aria-hidden="true" />
            <p>
              Atendemos <strong>unidades de frío, autobuses y unidades de carga pesada diésel.</strong>
            </p>
          </div>

          <div className="hero-actions">
            <a className="btn btn-primary" href={whatsappUrl} target="_blank" rel="noreferrer">
              Solicitar servicio <ChevronRight size={19} />
            </a>
            <a className="btn btn-outline" href="#servicios">
              Ver servicios
            </a>
          </div>
        </div>
      </div>

      <div className="rescue-wrap">
        <div className="container">
          <div className="rescue-bar">
            <div className="rescue-title">
              <Truck size={34} aria-hidden="true" />
              <strong>Atención y rescate auxiliar</strong>
            </div>
            <div className="rescue-text">
              <Clock3 size={26} aria-hidden="true" />
              <span>Asistencia en sitio y apoyo técnico cuando la unidad lo necesite.</span>
            </div>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Solicitar atención y rescate auxiliar">
              Solicitar atención <ChevronRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="servicios" className="section services-section">
      <div className="container">
        <div className="section-heading section-heading-dark">
          <span className="heading-line" aria-hidden="true" />
          <p className="eyebrow">Nuestros servicios</p>
          <h2>Atención integral para sistemas diésel</h2>
          <p>
            Servicios especializados para tractocamiones, autobuses y unidades diésel de trabajo pesado.
          </p>
        </div>

        <div className="service-grid">
          {services.map((service) => {
            const Icon = serviceIcons[service.icon] ?? Wrench;
            return (
              <article className="service-card" key={service.number}>
                <div className="service-card-top">
                  <span>{service.number}</span>
                  <Icon size={34} aria-hidden="true" />
                </div>
                <div className="service-card-body">
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <span className="service-accent" aria-hidden="true" />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TechnicalBacking() {
  const items = [
    {
      icon: ShieldCheck,
      title: "Respaldo técnico actual",
      text: "Nuestro trabajo en campo y la capacidad técnica de nuestros especialistas respaldan cada servicio.",
    },
    {
      icon: Activity,
      title: "Diagnóstico preciso",
      text: "Evaluación técnica para identificar la causa real de la falla.",
    },
    {
      icon: Wrench,
      title: "Reparación eficiente",
      text: "Intervenciones enfocadas en recuperar el funcionamiento de la unidad.",
    },
    {
      icon: Cog,
      title: "Continuidad operativa",
      text: "Trabajo orientado a reducir tiempos fuera de servicio.",
    },
  ];

  return (
    <section className="technical-backing" aria-label="Respaldo técnico DIREEL">
      <div className="container technical-grid">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <article key={item.title}>
              <Icon size={34} aria-hidden="true" />
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Units() {
  return (
    <section id="unidades" className="section units-section">
      <div className="container units-layout">
        <div className="section-heading">
          <span className="heading-line" aria-hidden="true" />
          <p className="eyebrow">Unidades que atendemos</p>
          <h2>Servicio para operaciones de transporte y trabajo pesado</h2>
          <p>
            Atención técnica especializada para diferentes configuraciones diésel, empresas con flotillas y operadores independientes.
          </p>
        </div>

        <div className="units-grid">
          {unitTypes.map((unit) => {
            const Icon = unitIcons[unit.icon] ?? Truck;
            return (
              <article className="unit-card" key={unit.title}>
                <div className="unit-icon"><Icon size={38} aria-hidden="true" /></div>
                <h3>{unit.title}</h3>
                <p>{unit.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Clients() {
  return (
    <section id="clientes" className="section clients-section">
      <div className="container">
        <div className="section-heading section-heading-dark compact-heading">
          <span className="heading-line" aria-hidden="true" />
          <p className="eyebrow">Algunos de nuestros clientes</p>
          <h2>Trabajo que respalda a DIREEL</h2>
          <p>Empresas y operaciones que han confiado unidades a nuestro equipo técnico.</p>
        </div>

        <div className="clients-grid">
          {clients.map((client) => (
            <a
              className={`client-logo ${client.className ?? ""}`}
              href={client.url}
              target="_blank"
              rel="noreferrer"
              key={client.name}
              aria-label={`Visitar sitio de ${client.name}`}
            >
              <img src={client.logo} alt={client.name} loading="lazy" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactBand() {
  return (
    <section className="contact-band" aria-label="Contacto inmediato">
      <div className="container contact-band-grid">
        <div className="contact-band-title">
          <Phone size={32} aria-hidden="true" />
          <div>
            <h2>¿Necesitas atención técnica?</h2>
            <p>Contáctanos para revisar tu unidad y definir el servicio requerido.</p>
          </div>
        </div>

        <div className="contact-band-links">
          <a href={`tel:${PHONE_LINK}`}><Phone size={20} /> {PHONE_DISPLAY}</a>
          <a href={`mailto:${CONTACT_EMAIL}`}><Mail size={20} /> {CONTACT_EMAIL}</a>
        </div>

        <a className="btn btn-primary contact-button" href={whatsappUrl} target="_blank" rel="noreferrer">
          Contactar ahora <ChevronRight size={19} />
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contacto" className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img src={`${BASE}logo/direel-logo.png`} alt="DIREEL" />
          <p>Diagnóstico, mantenimiento y reparación de sistemas diésel.</p>
        </div>

        <div>
          <h3>Contacto</h3>
          <a href={`tel:${PHONE_LINK}`}><Phone size={17} /> {PHONE_DISPLAY}</a>
          <a href={`mailto:${CONTACT_EMAIL}`}><Mail size={17} /> {CONTACT_EMAIL}</a>
          <span><MapPin size={17} /> Medellín, Veracruz, México</span>
        </div>

        <div>
          <h3>Compromiso técnico</h3>
          <span><Activity size={17} /> Diagnóstico preciso</span>
          <span><Wrench size={17} /> Reparación eficiente</span>
          <span><Cog size={17} /> Continuidad operativa</span>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <span>direel.com.mx</span>
          <span>DIREEL © Todos los derechos reservados.</span>
        </div>
      </div>

      <a className="whatsapp-float" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Contactar a DIREEL por WhatsApp">
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
        <Services />
        <TechnicalBacking />
        <Units />
        <Clients />
        <ContactBand />
      </main>
      <Footer />
    </>
  );
}
