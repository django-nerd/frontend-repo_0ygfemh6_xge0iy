import { motion } from "framer-motion";
import { Download, Apple, MonitorDown, Smartphone, ShieldCheck } from "lucide-react";

const platforms = [
  {
    name: "macOS (Apple Silicon)",
    arch: "M-series",
    tag: "Recommended",
    icon: Apple,
    color: "from-purple-500 to-blue-500",
  },
  {
    name: "Windows",
    arch: "x64",
    tag: "Stable",
    icon: MonitorDown,
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Android",
    arch: "APK",
    tag: "Beta",
    icon: Smartphone,
    color: "from-orange-500 to-pink-500",
  },
];

export default function DownloadSection() {
  return (
    <section id="download" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Choose your platform
          </h2>
          <p className="mt-3 text-slate-600">
            One codebase, native builds. Fast updates, zero bloat, buttery animations.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {platforms.map((p, i) => (
            <motion.a
              key={p.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              href="#"
              className="group relative overflow-hidden rounded-2xl bg-white p-5 ring-1 ring-slate-200 transition hover:shadow-xl"
            >
              <div className={`absolute inset-0 -z-[1] bg-gradient-to-br ${p.color} opacity-0 transition-opacity duration-300 group-hover:opacity-10`} />
              <div className="flex items-start justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">
                    <span>{p.tag}</span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-slate-900">{p.name}</h3>
                  <p className="text-sm text-slate-600">{p.arch}</p>
                </div>
                <p.icon className="h-8 w-8 text-slate-600 transition-transform group-hover:scale-110" />
              </div>
              <div className="mt-6 flex items-center justify-between">
                <button className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-3 py-2 text-sm text-white shadow-sm transition hover:shadow">
                  <Download className="h-4 w-4" />
                  <span>Download</span>
                </button>
                <span className="text-xs text-slate-500">v1.0.0</span>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-3 text-sm text-slate-500">
          <ShieldCheck className="h-4 w-4" />
          <span>Checksums and release notes included in the download</span>
        </div>
      </div>
    </section>
  );
}
