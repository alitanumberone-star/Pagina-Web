import { cn } from "@/lib/utils";

type Objective = { code: string; name: string };

const EDM: Objective[] = [
  { code: "EDM01", name: "Marco de gobierno establecido y mantenido" },
  { code: "EDM02", name: "Entrega de beneficios asegurada" },
  { code: "EDM03", name: "Optimización del riesgo asegurada" },
  { code: "EDM04", name: "Optimización de recursos asegurada" },
  { code: "EDM05", name: "Compromiso de las partes interesadas" },
];

const APO: Objective[] = [
  { code: "APO01", name: "Marco de gestión de I&T" },
  { code: "APO02", name: "Estrategia" },
  { code: "APO03", name: "Arquitectura empresarial" },
  { code: "APO04", name: "Innovación" },
  { code: "APO05", name: "Portafolio" },
  { code: "APO06", name: "Presupuesto y costos" },
  { code: "APO07", name: "Recursos humanos" },
  { code: "APO08", name: "Relaciones" },
  { code: "APO09", name: "Acuerdos de servicio" },
  { code: "APO10", name: "Proveedores" },
  { code: "APO11", name: "Calidad" },
  { code: "APO12", name: "Riesgo" },
  { code: "APO13", name: "Seguridad" },
  { code: "APO14", name: "Datos" },
];

const BAI: Objective[] = [
  { code: "BAI01", name: "Programas" },
  { code: "BAI02", name: "Definición de requisitos" },
  { code: "BAI03", name: "Identificación y construcción de soluciones" },
  { code: "BAI04", name: "Disponibilidad y capacidad" },
  { code: "BAI05", name: "Cambio organizacional" },
  { code: "BAI06", name: "Cambios de TI" },
  { code: "BAI07", name: "Aceptación y transición de cambios" },
  { code: "BAI08", name: "Conocimiento" },
  { code: "BAI09", name: "Activos" },
  { code: "BAI10", name: "Configuración" },
  { code: "BAI11", name: "Proyectos" },
];

const DSS: Objective[] = [
  { code: "DSS01", name: "Operaciones" },
  { code: "DSS02", name: "Solicitudes e incidentes" },
  { code: "DSS03", name: "Problemas" },
  { code: "DSS04", name: "Continuidad" },
  { code: "DSS05", name: "Servicios de seguridad" },
  { code: "DSS06", name: "Controles de procesos de negocio" },
];

const MEA: Objective[] = [
  { code: "MEA01", name: "Monitoreo del desempeño" },
  { code: "MEA02", name: "Sistema de control interno" },
  { code: "MEA03", name: "Cumplimiento de requisitos externos" },
  { code: "MEA04", name: "Aseguramiento" },
];

// Objectives that feed the EDM03 evaluation directly.
const RELATED = new Set(["APO12", "APO13", "DSS04", "DSS05", "MEA02"]);
const FOCUS = "EDM03";

function Cell({ o }: { o: Objective }) {
  const focus = o.code === FOCUS;
  const related = RELATED.has(o.code);
  return (
    <div
      title={`${o.code} — ${o.name}`}
      className={cn(
        "rounded-md border px-2.5 py-2 text-left transition-colors",
        focus && "border-signal bg-signal text-signal-foreground shadow-signal",
        related && "border-signal/60 bg-ink-raised text-ink-foreground",
        !focus && !related && "border-ink-line bg-ink/40 text-ink-muted",
      )}
    >
      <div className="font-mono text-[11px] font-medium">{o.code}</div>
      <div className="mt-0.5 line-clamp-2 text-[11px] leading-snug">{o.name}</div>
    </div>
  );
}

function Band({ label, items, cols }: { label: string; items: Objective[]; cols: string }) {
  return (
    <div className="rounded-lg border border-ink-line p-3">
      <div className="eyebrow mb-2 text-ink-muted">{label}</div>
      <div className={cn("grid gap-2", cols)}>
        {items.map((o) => (
          <Cell key={o.code} o={o} />
        ))}
      </div>
    </div>
  );
}

export function CobitMap() {
  return (
    <div className="space-y-3">
      <Band label="Gobierno · Evaluar, Orientar, Monitorizar" items={EDM} cols="grid-cols-2 sm:grid-cols-5" />
      <div className="grid gap-3 lg:grid-cols-[1fr_200px]">
        <div className="space-y-3">
          <Band label="Alinear, Planificar y Organizar" items={APO} cols="grid-cols-2 sm:grid-cols-4 lg:grid-cols-7" />
          <Band label="Construir, Adquirir e Implementar" items={BAI} cols="grid-cols-2 sm:grid-cols-4 lg:grid-cols-6" />
          <Band label="Entregar, Dar servicio y Soporte" items={DSS} cols="grid-cols-2 sm:grid-cols-3 lg:grid-cols-6" />
        </div>
        <Band label="Monitorizar, Evaluar y Valorar" items={MEA} cols="grid-cols-2 lg:grid-cols-1" />
      </div>
      <div className="flex flex-wrap items-center gap-4 pt-1 text-xs text-ink-muted">
        <span className="flex items-center gap-2">
          <span className="size-3 rounded-sm bg-signal" /> Objetivo evaluado
        </span>
        <span className="flex items-center gap-2">
          <span className="size-3 rounded-sm border border-signal/60 bg-ink-raised" /> Objetivos relacionados
        </span>
        <span>Modelo núcleo COBIT® 2019 · 40 objetivos</span>
      </div>
    </div>
  );
}
