// EDM03 — Optimización del riesgo asegurada.
// Contenido parafraseado en español a partir de COBIT® 2019 Framework:
// Governance and Management Objectives (ISACA, 2018), capítulo 4, EDM03.

export type Activity = { text: string; level: number };

export type Practice = {
  code: string;
  verb: string;
  title: string;
  summary: string;
  activities: Activity[];
  metrics: string[];
};

export const EDM03_PURPOSE =
  "Que el riesgo empresarial relacionado con la información y la tecnología (I&T) no supere el apetito ni la tolerancia al riesgo definidos por la dirección, que su impacto en el valor del negocio se identifique y gestione, y que se reduzca la posibilidad de incumplimientos.";

export const EDM03_DESCRIPTION =
  "Asegura que el apetito y la tolerancia al riesgo se entiendan, se expresen y se comuniquen en toda la organización, y que el riesgo de I&T sobre el valor empresarial se identifique y gestione.";

export const EDM03_GOALS = [
  { code: "EG02", kind: "Meta empresarial", name: "Riesgo de negocio gestionado" },
  { code: "EG06", kind: "Meta empresarial", name: "Continuidad y disponibilidad del servicio" },
  { code: "AG02", kind: "Meta de alineamiento", name: "Riesgo relacionado con I&T gestionado" },
  {
    code: "AG07",
    kind: "Meta de alineamiento",
    name: "Seguridad de la información, la infraestructura, las aplicaciones y la privacidad",
  },
];

export const EDM03_PRACTICES: Practice[] = [
  {
    code: "EDM03.01",
    verb: "Evaluar",
    title: "Evaluar la gestión de riesgos",
    summary:
      "Examinar de forma continua cómo el riesgo afecta el uso actual y futuro de la I&T, y valorar si el apetito al riesgo de la organización es el adecuado.",
    activities: [
      { level: 2, text: "Entender la organización y su contexto en relación con el riesgo de I&T." },
      { level: 2, text: "Definir el apetito al riesgo: cuánto riesgo de I&T está dispuesta a asumir la empresa para lograr sus objetivos." },
      { level: 2, text: "Fijar niveles de tolerancia: las desviaciones temporales aceptables respecto al apetito." },
      { level: 2, text: "Verificar que la estrategia de riesgo de I&T esté alineada con la de riesgo empresarial y que el apetito quede por debajo de la capacidad de riesgo." },
      { level: 3, text: "Evaluar los factores de riesgo de I&T antes de las decisiones estratégicas e incorporarlos al proceso de decisión." },
      { level: 3, text: "Revisar que la gestión de riesgos sea coherente con la capacidad de pérdida de la empresa y la tolerancia de la dirección." },
      { level: 3, text: "Atraer y retener las competencias y el personal necesarios para gestionar el riesgo de I&T." },
    ],
    metrics: [
      "Nivel de impacto empresarial no previsto",
      "% del riesgo de I&T que supera la tolerancia de la empresa",
      "Frecuencia de actualización de la evaluación de factores de riesgo",
    ],
  },
  {
    code: "EDM03.02",
    verb: "Orientar",
    title: "Orientar la gestión de riesgos",
    summary:
      "Dirigir el establecimiento de prácticas que den una seguridad razonable de que el riesgo real de I&T no supera el apetito definido por el consejo.",
    activities: [
      { level: 2, text: "Traducir la estrategia de riesgo de I&T en prácticas de gestión y actividades operativas." },
      { level: 2, text: "Impulsar planes de comunicación del riesgo para todos los niveles de la organización." },
      { level: 2, text: "Implantar mecanismos para responder con rapidez a cambios en el riesgo, con reglas claras de escalamiento: qué, cuándo, dónde y cómo reportar." },
      { level: 2, text: "Permitir que cualquier persona identifique y reporte riesgos, oportunidades o problemas, y que se escalen según las políticas publicadas." },
      { level: 3, text: "Definir las metas y métricas clave del gobierno y la gestión del riesgo, y aprobar los métodos para medirlas y reportarlas." },
    ],
    metrics: [
      "Nivel de alineamiento entre el riesgo de I&T y el riesgo empresarial",
      "% de proyectos de la empresa que consideran el riesgo de I&T",
    ],
  },
  {
    code: "EDM03.03",
    verb: "Monitorizar",
    title: "Monitorizar la gestión de riesgos",
    summary:
      "Dar seguimiento a las metas y métricas clave de la gestión de riesgos y definir cómo se detectan, siguen y reportan las desviaciones para corregirlas.",
    activities: [
      { level: 2, text: "Informar al consejo o al comité ejecutivo de cualquier problema en la gestión de riesgos." },
      { level: 3, text: "Vigilar que el perfil de riesgo se mantenga dentro del apetito y los umbrales de tolerancia." },
      { level: 4, text: "Comparar metas y métricas contra objetivos, analizar la causa de las desviaciones y lanzar acciones correctivas." },
      { level: 4, text: "Facilitar que las partes interesadas clave revisen el avance hacia las metas definidas." },
    ],
    metrics: [
      "Número de áreas potenciales de riesgo de I&T identificadas y gestionadas",
      "% de riesgos críticos mitigados de forma efectiva",
      "% de planes de acción de riesgo de I&T ejecutados a tiempo",
    ],
  },
];

export const CAPABILITY_LEVELS = [
  { level: 0, name: "Incompleto", text: "Falta una capacidad básica; el enfoque no alcanza el propósito del proceso." },
  { level: 1, name: "Inicial", text: "Se logra el propósito a medias, con actividades incompletas, intuitivas y poco organizadas." },
  { level: 2, name: "Realizado", text: "Se logra el propósito con un conjunto básico pero completo de actividades." },
  { level: 3, name: "Definido", text: "Se logra de forma más organizada, con procesos bien definidos y recursos de la organización." },
  { level: 4, name: "Medido", text: "Además de definido, su desempeño se mide de forma cuantitativa." },
  { level: 5, name: "Optimizado", text: "Se mide y se busca la mejora continua del desempeño." },
];

/** Highest capability level any activity of the practice requires. */
export function maxLevel(practice: Practice): number {
  return Math.max(...practice.activities.map((a) => a.level));
}

/** Number of activities that must be performed to reach a given level (cumulative). */
export function activitiesToReach(practice: Practice, level: number): number {
  return practice.activities.filter((a) => a.level <= level).length;
}
