import { motion } from "framer-motion";
import { Sparkles, Wand2, Gauge, Ghost, PanelsTopLeft, Palette, Cog, Stars } from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "Pixel-level control",
    desc: "Theme every element. Adjust motion curves, radii, depth, and grain — live.",
  },
  {
    icon: Wand2,
    title: "Mood presets",
    desc: "Pick from built‑in personalities like Angry, Cool, Drunk, Unhinged, or make your own.",
  },
  {
    icon: Gauge,
    title: "Super smooth",
    desc: "60fps UI with hardware-accelerated animations and adaptive performance.",
  },
  {
    icon: PanelsTopLeft,
    title: "Modular brains",
    desc: "Chain tools and reasoning styles per persona. Swap models in one tap.",
  },
  {
    icon: Cog,
    title: "Automation",
    desc: "Schedule prompts, auto-replies, and routines based on your context.",
  },
  {
    icon: Stars,
    title: "Private by design",
    desc: "Local-first controls with optional cloud sync. You choose what leaves your device.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Built for expression
          </h2>
          <p className="mt-3 text-slate-600">
            Personalities, presets, and deep customization combine for a uniquely yours AI.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="rounded-2xl bg-white p-6 ring-1 ring-slate-200 transition hover:shadow-xl"
            >
              <f.icon className="h-6 w-6 text-slate-700" />
              <h3 className="mt-3 text-lg font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-1.5 text-sm text-slate-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
