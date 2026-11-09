import { Compass, Eye, Gauge, Scale } from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  CAPABILITY_LEVELS,
  EDM03_DESCRIPTION,
  EDM03_GOALS,
  EDM03_PRACTICES,
  EDM03_PURPOSE,
  activitiesToReach,
  maxLevel,
} from "@/lib/edm03";
import { cn } from "@/lib/utils";

const ICONS = { Evaluar: Scale, Orientar: Compass, Monitorizar: Eye } as const;

function LevelBadge({ level }: { level: number }) {
  return (
    <span
      className={cn(
        "inline-flex h-6 shrink-0 items-center rounded-md px-2 font-mono text-[11px] font-semibold",
        level >= 4
          ? "bg-signal text-signal-foreground"
          : level === 3
            ? "bg-primary text-primary-foreground"
            : "bg-secondary text-secondary-foreground",
      )}
      title={`Nivel de capacidad ${level}`}
    >
      N{level}
    </span>
  );
}

export function Edm03Detail() {
  const usedLevels = new Set(EDM03_PRACTICES.flatMap((p) => p.activities.map((a) => a.level)));

  return (
    <section id="edm03" className="mx-auto max-w-7xl px-6 py-24">
      {/* Intro */}
      <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-start">
        <div>
          <p className="eyebrow text-muted-foreground">EDM03 a detalle</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Optimización del riesgo asegurada
          </h2>
          <p className="mt-5 text-muted-foreground">{EDM03_DESCRIPTION}</p>
          <div className="mt-6 rounded-lg border-l-4 border-signal bg-card p-5 shadow-card">
            <p className="eyebrow text-muted-foreground">Propósito</p>
            <p className="mt-2 text-sm">{EDM03_PURPOSE}</p>
          </div>
        </div>
        <div>
          <p className="eyebrow text-muted-foreground">Metas que apoya</p>
          <ul className="mt-4 grid gap-3">
            {EDM03_GOALS.map((g) => (
              <li key={g.code} className="flex items-start gap-3 rounded-lg border bg-card p-4">
                <span className="rounded-md bg-ink px-2 py-1 font-mono text-xs font-semibold text-signal">
                  {g.code}
                </span>
                <div>
                  <div className="text-sm font-medium">{g.name}</div>
                  <div className="text-xs text-muted-foreground">{g.kind}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Practices */}
      <div className="mt-16">
        <h3 className="text-2xl font-semibold">Las tres prácticas de gobierno</h3>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          Cada actividad tiene un nivel de capacidad. Nuestro modelo verifica cuáles realiza su
          organización y con qué evidencia.
        </p>
        <Tabs defaultValue="EDM03.01" className="mt-6">
          <TabsList className="h-auto w-full flex-wrap justify-start gap-1 p-1.5 md:w-auto">
            {EDM03_PRACTICES.map((p) => {
              const Icon = ICONS[p.verb as keyof typeof ICONS];
              return (
                <TabsTrigger key={p.code} value={p.code} className="gap-2 px-4 py-2">
                  <Icon className="size-4" />
                  <span className="font-mono text-xs">{p.code}</span>
                  <span>{p.verb}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {EDM03_PRACTICES.map((p) => (
            <TabsContent key={p.code} value={p.code} className="mt-6">
              <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
                <div className="rounded-xl border bg-card p-6 shadow-card md:p-8">
                  <p className="font-mono text-xs text-muted-foreground">{p.code}</p>
                  <h4 className="mt-1 text-xl font-semibold">{p.title}</h4>
                  <p className="mt-3 text-sm text-muted-foreground">{p.summary}</p>
                  <p className="eyebrow mt-8 text-muted-foreground">Actividades</p>
                  <ol className="mt-3 divide-y">
                    {p.activities.map((a, i) => (
                      <li key={i} className="flex items-start gap-4 py-3">
                        <span className="w-5 shrink-0 font-mono text-xs text-muted-foreground">
                          {i + 1}.
                        </span>
                        <span className="flex-1 text-sm">{a.text}</span>
                        <LevelBadge level={a.level} />
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="flex flex-col gap-6">
                  <div className="rounded-xl bg-ink p-6 text-ink-foreground shadow-card">
                    <div className="flex items-center gap-2">
                      <Gauge className="size-5 text-signal" />
                      <p className="eyebrow text-ink-muted">Métricas de ejemplo</p>
                    </div>
                    <ul className="mt-4 space-y-3">
                      {p.metrics.map((m) => (
                        <li key={m} className="border-l-2 border-signal pl-3 text-sm">
                          {m}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-xl border bg-card p-6">
                    <p className="eyebrow text-muted-foreground">Ruta de capacidad</p>
                    <ul className="mt-4 space-y-2 text-sm">
                      {Array.from({ length: maxLevel(p) - 1 }, (_, i) => i + 2).map((lvl) => (
                        <li key={lvl} className="flex items-center justify-between gap-3">
                          <span className="flex items-center gap-2">
                            <LevelBadge level={lvl} />
                            {CAPABILITY_LEVELS[lvl]?.name}
                          </span>
                          <span className="font-mono text-xs text-muted-foreground">
                            {activitiesToReach(p, lvl)} de {p.activities.length} actividades
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      {/* Capability levels */}
      <div className="mt-16 rounded-2xl border bg-secondary/50 p-6 md:p-10">
        <div className="max-w-2xl">
          <p className="eyebrow text-muted-foreground">Cómo se califica</p>
          <h3 className="mt-2 text-2xl font-semibold">Niveles de capacidad (0 a 5)</h3>
          <p className="mt-3 text-sm text-muted-foreground">
            COBIT 2019 usa una escala basada en CMMI. Una práctica alcanza un nivel cuando realiza
            con éxito todas las actividades de ese nivel y de los anteriores. Las actividades de
            EDM03 van del nivel 2 al 4.
          </p>
        </div>
        <ol className="mt-8 grid items-end gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {CAPABILITY_LEVELS.map((c) => {
            const used = usedLevels.has(c.level);
            return (
              <li
                key={c.level}
                className={cn(
                  "flex flex-col rounded-lg border p-4",
                  used ? "border-signal bg-card shadow-card" : "bg-card/60",
                )}
                style={{ minHeight: `${9 + c.level * 1.5}rem` }}
              >
                <span
                  className={cn(
                    "font-display text-3xl font-bold",
                    used ? "text-signal" : "text-muted-foreground",
                  )}
                >
                  {c.level}
                </span>
                <span className="mt-1 font-display font-semibold">{c.name}</span>
                <span className="mt-2 text-xs text-muted-foreground">{c.text}</span>
                {used && (
                  <span className="mt-auto pt-3 font-mono text-[10px] uppercase tracking-wider text-signal">
                    Usado en EDM03
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </div>

      <p className="mt-6 text-xs text-muted-foreground">
        Fuente: ISACA, <em>COBIT® 2019 Framework: Governance and Management Objectives</em>, 2018,
        cap. 4 (EDM03). Resumen y traducción propios de GTI_Gaspar.
      </p>
    </section>
  );
}
