export const BASE = import.meta.env.BASE_URL;

export const WHATSAPP_NUMBER = "522294246574";

export const WHATSAPP_MESSAGE =
  "Hola, estoy interesado en información sobre servicios para una unidad diésel pesada. Quiero solicitar informes para revisión, mantenimiento o reparación.";

export const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

export const servicesPrimary = [
  {
    title: "Mantenimiento preventivo",
    text: "Programas orientados a mantener unidades operando con mayor confiabilidad.",
  },
  {
    title: "Reparación mayor",
    text: "Intervenciones técnicas para recuperación operativa en unidades pesadas diésel.",
  },
  {
    title: "Diagnóstico técnico",
    text: "Evaluación fundamentada para identificar la causa real de la falla.",
  },
  {
    title: "Atención a flotillas",
    text: "Soporte técnico para empresas, contratos de mantenimiento y operación continua.",
  },
  {
    title: "Cancelación de sistema SCR/AdBlue",
    text: "Modificación de parámetros del sistema de postratamiento para unidades pesadas diésel.",
  },
];

export const servicesSecondary = [
  "Motores diésel",
  "Transmisiones",
  "Embragues",
  "Diferenciales",
  "Sistemas eléctricos asociados",
  "Unidades pesadas multimarcas",
  "Cancelación de sistema SCR/AdBlue y modificación de parámetros",
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
