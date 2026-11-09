import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  Check,
  ClipboardCheck,
  Compass,
  Eye,
  Factory,
  GraduationCap,
  Layers,
  Scale,
  ShieldAlert,
  Target,
} from "lucide-react";

import heroImg from "@/assets/hero-manufactura.jpg";
import sessionImg from "@/assets/consultoria-sesion.jpg";
import { CobitMap } from "@/components/landing/CobitMap";
import { Edm03Detail } from "@/components/landing/Edm03Detail";
import { WhatsAppIcon } from "@/components/landing/WhatsAppIcon";
import { Button } from "@/components/ui/button";
import { WHATSAPP_DISPLAY, whatsappLink } from "@/lib/contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GTI_Gaspar — Evaluación EDM03: optimización del riesgo de TI" },
      {
        name: "description",
        content:
          "Modelo de evaluación multicriterio de gobierno de TI (COBIT 2019 EDM03) para manufactura en Ciudad Juárez. Consultoría, diagnóstico y cursos.",
      },
      { property: "og:title", content: "GTI_Gaspar — Evaluación EDM03: optimización del riesgo de TI" },
      {
        property: "og:description",
        content:
          "Clasifique el desempeño de su gobierno de riesgos de TI, detecte brechas y reciba recomendaciones de alineación estratégica.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const PLAYLIST_ID = "PLfHS7UMdcq1NB5IoH4svkXVuGkhO5Ui8s";

function WaButton({
  message,
  children,
  variant = "whatsapp",
}: {
  message?: string;
  children: React.ReactNode;
  variant?: "whatsapp" | "signal";
}) {
  return (
    <Button asChild variant={variant} size="xl">
      <a href={whatsappLink(message)} target="_blank" rel="noopener noreferrer">
        <WhatsAppIcon />
        {children}
      </a>
    </Button>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Story />
      <ModelSection />
      <Edm03Detail />
      <Services />
      <Deliverables />
      <Learn />
      <FinalCta />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#" className="flex items-center gap-2 text-ink-foreground">
          <span className="grid size-9 place-items-center rounded-md bg-signal font-mono text-sm font-semibold text-signal-foreground">
            G
          </span>
          <span className="font-display text-lg font-bold tracking-tight">
            GTI<span className="text-signal">_</span>Gaspar
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-ink-muted md:flex">
          <a href="#modelo" className="hover:text-ink-foreground">Modelo</a>
          <a href="#edm03" className="hover:text-ink-foreground">EDM03</a>
          <a href="#servicios" className="hover:text-ink-foreground">Servicios</a>
          <a href="#aprende" className="hover:text-ink-foreground">Aprende COBIT</a>
        </nav>
        <Button asChild variant="whatsapp" size="sm">
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon /> Contactar
          </a>
        </Button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-hero text-ink-foreground">
      <img
        src={heroImg}
        alt="Planta manufacturera con líneas robotizadas y monitoreo de datos"
        width={1600}
        height={1104}
        className="absolute inset-0 -z-20 h-full w-full object-cover object-right"
      />
      <div className="absolute inset-0 -z-10 bg-hero-fade" />
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-36 md:pb-32 md:pt-44">
        <div className="max-w-2xl animate-rise">
          <span className="eyebrow inline-flex items-center gap-2 rounded-full border border-pistachio/40 bg-hero/60 px-3 py-1.5 text-pistachio">
            <ShieldAlert className="size-3.5" /> COBIT 2019 · EDM03
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] md:text-6xl">
            Su riesgo de TI, medido, clasificado y bajo{" "}
            <span className="text-pistachio">gobierno</span>.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ink-muted">
            Un modelo de evaluación multicriterio diseñado para la industria manufacturera de
            Ciudad Juárez: sabrá en qué nivel está su gobierno de riesgos, qué capacidades
            tiene y qué hacer para alinearlo con la estrategia.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <WaButton>Solicitar diagnóstico</WaButton>
            <Button asChild variant="inkOutline" size="xl">
              <a href="#modelo">
                Ver el modelo <ArrowRight />
              </a>
            </Button>
          </div>
          <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-pistachio/30 pt-6">
            {[
              ["3", "prácticas EDM03 evaluadas"],
              ["40", "objetivos COBIT de referencia"],
              ["1", "hoja de ruta accionable"],
            ].map(([n, l]) => (
              <div key={l}>
                <dt className="font-display text-3xl font-bold text-pistachio">{n}</dt>
                <dd className="mt-1 text-xs text-ink-muted">{l}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center">
      <div>
        <p className="eyebrow text-muted-foreground">El reto</p>
        <h2 className="mt-3 text-3xl font-bold md:text-4xl">
          En la planta, un riesgo de TI no gestionado detiene la línea.
        </h2>
        <p className="mt-5 text-muted-foreground">
          La manufactura depende de sistemas, datos y proveedores conectados. Muchas
          organizaciones gestionan incidentes, pero pocas <strong className="text-foreground">gobiernan</strong> el
          riesgo: no existe una postura clara de apetito al riesgo, ni indicadores que el
          consejo pueda evaluar, orientar y monitorizar.
        </p>
        <p className="mt-4 text-muted-foreground">
          COBIT 2019 separa el <strong className="text-foreground">gobierno</strong> (evaluar, orientar,
          monitorizar) de la <strong className="text-foreground">gestión</strong> (planificar, construir,
          ejecutar, monitorizar). EDM03 es el objetivo que asegura que el riesgo de TI se
          entienda, se comunique y se mantenga dentro de los límites que la dirección define.
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {[
            { icon: Scale, t: "Evaluar", d: "EDM03.01 · la gestión de riesgos" },
            { icon: Compass, t: "Orientar", d: "EDM03.02 · la gestión de riesgos" },
            { icon: Eye, t: "Monitorizar", d: "EDM03.03 · la gestión de riesgos" },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t} className="rounded-lg border bg-card p-4 shadow-card">
              <Icon className="size-5 text-primary" />
              <div className="mt-3 font-display font-semibold">{t}</div>
              <div className="mt-1 font-mono text-[11px] text-muted-foreground">{d}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="relative">
        <img
          src={sessionImg}
          alt="Consultora presentando un mapa de calor de riesgos a gerentes de planta"
          width={1200}
          height={1408}
          loading="lazy"
          className="aspect-[4/5] w-full rounded-xl object-cover shadow-card"
        />
        <div className="absolute -bottom-6 -left-4 max-w-xs rounded-lg bg-ink p-5 text-ink-foreground shadow-card md:-left-10">
          <Factory className="size-5 text-signal" />
          <p className="mt-2 text-sm">
            Diseñado y validado con organizaciones del sector manufacturero de Ciudad Juárez,
            Chihuahua.
          </p>
        </div>
      </div>
    </section>
  );
}

const PHASES = [
  {
    n: "01",
    icon: Layers,
    t: "Analizar marcos de referencia",
    d: "Revisamos los criterios de los principales marcos de gobierno de TI y seleccionamos y adaptamos los pertinentes para su planta.",
  },
  {
    n: "02",
    icon: BarChart3,
    t: "Evaluar con el modelo multicriterio",
    d: "Integramos los criterios en un modelo que clasifica el desempeño de sus prácticas EDM03 e identifica capacidades y deficiencias.",
  },
  {
    n: "03",
    icon: Target,
    t: "Validar y recomendar",
    d: "Aplicamos el modelo en su organización, clasificamos resultados y entregamos recomendaciones orientadas a la alineación estratégica.",
  },
];

function ModelSection() {
  return (
    <section id="modelo" className="relative overflow-hidden bg-ink-gradient py-24 text-ink-foreground">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="eyebrow text-signal">El modelo</p>
          <h2 className="mt-3 text-3xl font-bold md:text-5xl">
            Evaluación multicriterio integral para EDM03
          </h2>
          <p className="mt-5 text-ink-muted">
            No es una lista de verificación genérica: es un modelo que pondera criterios de
            gobierno de TI y los traduce en una clasificación de desempeño que la dirección
            puede entender y accionar.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {PHASES.map(({ n, icon: Icon, t, d }) => (
            <div key={n} className="rounded-xl border border-ink-line bg-ink-raised/60 p-6 backdrop-blur">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm text-signal">{n}</span>
                <Icon className="size-5 text-ink-muted" />
              </div>
              <h3 className="mt-6 text-xl font-semibold">{t}</h3>
              <p className="mt-3 text-sm text-ink-muted">{d}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-ink-line bg-ink/50 p-5 md:p-8">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow text-ink-muted">Dónde actuamos</p>
              <h3 className="mt-2 text-2xl font-semibold">EDM03 dentro del modelo núcleo COBIT 2019</h3>
            </div>
          </div>
          <CobitMap />
        </div>
      </div>
    </section>
  );
}

const SERVICES = [
  {
    icon: ClipboardCheck,
    t: "Auditoría y diagnóstico",
    d: "Aplicamos el modelo multicriterio a su organización y clasificamos el desempeño de las prácticas EDM03.",
    points: ["Clasificación de desempeño", "Mapa de capacidades y deficiencias", "Informe ejecutivo"],
    msg: "Hola GTI_Gaspar, quiero información sobre la auditoría / diagnóstico EDM03.",
  },
  {
    icon: Target,
    t: "Consultoría para empresas",
    d: "Acompañamos a su equipo a cerrar brechas y a institucionalizar el gobierno del riesgo de TI.",
    points: ["Hoja de ruta priorizada", "Alineación con la estrategia", "Seguimiento de mejoras"],
    msg: "Hola GTI_Gaspar, quiero información sobre la consultoría de gobierno de riesgos de TI.",
    featured: true,
  },
  {
    icon: GraduationCap,
    t: "Curso y capacitación",
    d: "Formación práctica en COBIT 2019 y EDM03 para directivos, TI y áreas de riesgo y auditoría.",
    points: ["Fundamentos COBIT 2019", "Casos de manufactura", "Ejercicios del modelo"],
    msg: "Hola GTI_Gaspar, quiero información sobre el curso de COBIT 2019 / EDM03.",
  },
];

function Services() {
  return (
    <section id="servicios" className="mx-auto max-w-7xl px-6 py-24">
      <div className="max-w-2xl">
        <p className="eyebrow text-muted-foreground">Servicios</p>
        <h2 className="mt-3 text-3xl font-bold md:text-4xl">Tres formas de trabajar juntos</h2>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {SERVICES.map(({ icon: Icon, t, d, points, msg, featured }) => (
          <article
            key={t}
            className={
              featured
                ? "flex flex-col rounded-xl bg-ink p-7 text-ink-foreground shadow-card"
                : "flex flex-col rounded-xl border bg-card p-7 shadow-card"
            }
          >
            <Icon className={featured ? "size-6 text-signal" : "size-6 text-primary"} />
            <h3 className="mt-5 text-xl font-semibold">{t}</h3>
            <p className={featured ? "mt-3 text-sm text-ink-muted" : "mt-3 text-sm text-muted-foreground"}>{d}</p>
            <ul className="mt-6 space-y-2.5 text-sm">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-2">
                  <Check className={featured ? "mt-0.5 size-4 text-signal" : "mt-0.5 size-4 text-primary"} />
                  {p}
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-8">
              <Button asChild variant={featured ? "signal" : "default"} className="w-full">
                <a href={whatsappLink(msg)} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon /> Preguntar por WhatsApp
                </a>
              </Button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Deliverables() {
  const levels = [
    { l: "Proceso", v: 82 },
    { l: "Personas", v: 54 },
    { l: "Información", v: 67 },
    { l: "Tecnología", v: 38 },
  ];
  return (
    <section className="border-y bg-secondary/60">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center">
        <div>
          <p className="eyebrow text-muted-foreground">Lo que recibe</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Claridad para decidir, no solo un reporte.
          </h2>
          <ul className="mt-8 space-y-5">
            {[
              ["Clasificación de desempeño", "Dónde se ubican sus prácticas EDM03 frente a los criterios del modelo."],
              ["Capacidades y deficiencias", "Qué funciona hoy y qué brechas exponen a la operación."],
              ["Recomendaciones estratégicas", "Acciones priorizadas para alinear el riesgo de TI con los objetivos del negocio."],
            ].map(([t, d]) => (
              <li key={t} className="flex gap-4">
                <span className="mt-1 grid size-7 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                  <Check className="size-4" />
                </span>
                <div>
                  <div className="font-display font-semibold">{t}</div>
                  <p className="text-sm text-muted-foreground">{d}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border bg-card p-7 shadow-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="eyebrow text-muted-foreground">Vista del diagnóstico</p>
              <p className="mt-1 font-display text-lg font-semibold">EDM03 · Resultado por criterio</p>
            </div>
            <span className="rounded-full bg-accent px-3 py-1 font-mono text-xs text-accent-foreground">
              Ejemplo ilustrativo
            </span>
          </div>
          <div className="mt-8 space-y-5">
            {levels.map(({ l, v }) => (
              <div key={l}>
                <div className="mb-1.5 flex justify-between text-sm">
                  <span>{l}</span>
                  <span className="font-mono text-muted-foreground">{v}%</span>
                </div>
                <div className="h-2.5 overflow-hidden rounded-full bg-muted">
                  <div
                    className={v < 50 ? "h-full rounded-full bg-signal" : "h-full rounded-full bg-primary"}
                    style={{ width: `${v}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 border-t pt-4 text-xs text-muted-foreground">
            Las barras en ámbar señalan deficiencias prioritarias para la hoja de ruta.
          </p>
        </div>
      </div>
    </section>
  );
}

function Learn() {
  return (
    <section id="aprende" className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:items-center">
        <div>
          <p className="eyebrow text-muted-foreground">Aprende antes de decidir</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">Fundamentos de COBIT 2019</h2>
          <p className="mt-5 text-muted-foreground">
            Una serie de videos para entender los principios del sistema de gobierno: generar
            valor para las partes interesadas, un enfoque holístico, un sistema dinámico y la
            diferencia entre gobierno y gestión. La base sobre la que construimos la
            evaluación EDM03.
          </p>
          <div className="mt-8">
            <WaButton variant="signal" message="Hola GTI_Gaspar, vi los videos de COBIT 2019 y quiero saber más del curso.">
              Quiero el curso completo
            </WaButton>
          </div>
        </div>
        <div>
          <div className="aspect-video overflow-hidden rounded-xl border bg-ink shadow-card">
            <iframe
              className="h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/videoseries?list=${PLAYLIST_ID}`}
              title="COBIT 2019 Fundamentos — lista de reproducción"
              loading="lazy"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Lista de reproducción “Mejores contenidos de COBIT 2019 – Fundamentos” · canal de Manuel Yrigoyen en YouTube.
          </p>
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-ink text-ink-foreground">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-4xl px-6 py-24 text-center">
        <h2 className="text-3xl font-bold md:text-5xl">
          ¿Su gobierno de TI sabe cuánto riesgo está dispuesto a asumir?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-ink-muted">
          Escríbanos por WhatsApp y agendemos una conversación sobre su planta.
        </p>
        <div className="mt-9 flex flex-col items-center gap-3">
          <WaButton>Escribir al {WHATSAPP_DISPLAY}</WaButton>
          <span className="font-mono text-xs text-ink-muted">Respuesta directa · Ciudad Juárez, Chih.</span>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-ink text-ink-muted">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-ink-line px-6 py-8 text-xs md:flex-row">
        <span className="font-display font-semibold text-ink-foreground">
          GTI<span className="text-signal">_</span>Gaspar
        </span>
        <span>Gobierno de TI · Optimización del riesgo · Ciudad Juárez, Chihuahua, México</span>
        <span>COBIT® es una marca registrada de ISACA.</span>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="animate-pulse-ring fixed bottom-6 right-6 z-50 grid size-14 place-items-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-lg transition-transform hover:scale-110"
    >
      <WhatsAppIcon className="size-7" />
    </a>
  );
}
