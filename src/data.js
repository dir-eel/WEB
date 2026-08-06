export const BASE = import.meta.env.BASE_URL;

export const CONTACT_EMAIL = "direel.info@gmail.com";
export const PHONE_DISPLAY = "+52 229 424 6574";
export const PHONE_LINK = "+522294246574";
export const WHATSAPP_NUMBER = "522294246574";

export const WHATSAPP_MESSAGE =
  "Hola, necesito información sobre un servicio para una unidad diésel. Me interesa diagnóstico, mantenimiento, reparación o atención en campo.";

export const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

export const services = [
  {
    number: "01",
    icon: "diagnostic",
    title: "Diagnóstico y electrónica",
    text: "Diagnóstico electrónico, localización de averías, programación y reparación de sistemas diésel.",
  },
  {
    number: "02",
    icon: "maintenance",
    title: "Mantenimiento",
    text: "Mantenimiento preventivo y correctivo, lubricación, filtros, inspección y pruebas de funcionamiento.",
  },
  {
    number: "03",
    icon: "mechanical",
    title: "Reparaciones mecánicas",
    text: "Atención de motores, transmisiones, embragues, diferenciales, suspensión, dirección y enfriamiento.",
  },
  {
    number: "04",
    icon: "field",
    title: "Servicios en campo",
    text: "Asistencia, diagnóstico en sitio, atención en instalaciones del cliente y preparación para remolque.",
  },
  {
    number: "05",
    icon: "supplies",
    title: "Refacciones y suministros",
    text: "Componentes mecánicos y eléctricos, filtros, consumibles, tornillería y suministros para servicio.",
  },
  {
    number: "06",
    icon: "scr",
    title: "Cancelación SCR / urea",
    text: "Cancelación del sistema SCR / AdBlue para unidades diésel, de acuerdo con la evaluación técnica.",
  },
  {
    number: "07",
    icon: "parameters",
    title: "Modificación de parámetros",
    text: "Ajuste y modificación de parámetros electrónicos conforme a la unidad y al servicio solicitado.",
  },
];

export const unitTypes = [
  {
    icon: "cold",
    title: "Unidades de frío",
    text: "Atención técnica para transporte refrigerado y unidades diésel de operación especializada.",
  },
  {
    icon: "bus",
    title: "Autobuses",
    text: "Diagnóstico, mantenimiento y reparación de autobuses y unidades de transporte de pasajeros.",
  },
  {
    icon: "heavy",
    title: "Carga pesada diésel",
    text: "Servicio para tractocamiones, camiones de carga y unidades de trabajo pesado.",
  },
];

export const clients = [
  {
    name: "UNNE",
    logo: `${BASE}clientes/unne.png`,
    url: "https://unne.com.mx/pagina-principal/",
  },
  {
    name: "MOZ Cargo",
    logo: `${BASE}clientes/mozcargo.png`,
    url: "https://mozcargo.mx/",
  },
  {
    name: "Transrucal",
    logo: `${BASE}clientes/transrucal.png`,
    url: "https://www.facebook.com/transrucal/?locale=es_LA",
  },
  {
    name: "Transportes IRMA",
    logo: `${BASE}clientes/irma.png`,
    url: "https://transportesirma.mx/",
  },
  {
    name: "Lozagui",
    logo: `${BASE}clientes/lozagui.png`,
    url: "https://lozagui.com/",
  },
  {
    name: "Express Tour",
    logo: `${BASE}clientes/express-tour.png`,
    url: "https://www.expresstour.com.mx/",
    className: "client-logo--express",
  },
  {
    name: "Idealease",
    logo: `${BASE}clientes/idealease.png`,
    url: "https://idealease.mx/",
  },
  {
    name: "ONMA Mi Logística",
    logo: `${BASE}clientes/onma-mi-logistica.png`,
    url: "https://onma.com.mx/",
    className: "client-logo--onma",
  },
];
