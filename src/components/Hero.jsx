import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";
import { Sparkles, Download, Shield, Settings2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden">
      {/* 3D aura background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: "100%", height: "100%" }} />
      </div>

      {/* Soft radial wash to blend with light theme */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.72)_0%,rgba(255,255,255,0.35)_45%,rgba(255,255,255,0.1)_70%,transparent_100%)]" />

      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-16 sm:pt-28 lg:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm text-slate-700 ring-1 ring-slate-200 backdrop-blur">
            <Sparkles className="h-4 w-4 text-purple-500" />
            <span>AnonAI • Ultra-customizable chatbot</span>
          </div>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
            Download AnonAI
          </h1>
          <p className="mt-4 text-lg leading-7 text-slate-600 sm:text-xl">
            Pick a mood, craft a personality, and tune every pixel. A modern AI companion that’s fast, fluid, and irresistibly smooth.
          </p>

          <div className="mt-8 flex items-center justify-center gap-3">
            <a
              href="#download"
              className="group inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-white shadow-lg shadow-slate-900/10 transition hover:shadow-slate-900/20"
            >
              <Download className="h-5 w-5 transition-transform group-hover:translate-y-0.5" />
              <span>Get the app</span>
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-xl bg-white/80 px-5 py-3 text-slate-900 ring-1 ring-slate-200 backdrop-blur transition hover:bg-white"
            >
              <Settings2 className="h-5 w-5 text-slate-700" />
              <span>See what’s inside</span>
            </a>
          </div>

          {/* Personality chips */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0, y: 10 },
              show: { opacity: 1, y: 0, transition: { staggerChildren: 0.06 } },
            }}
            className="mt-8 flex flex-wrap justify-center gap-2"
          >
            {["Angry", "Cool", "TikTok commenter", "Drunk", "Unhinged", "Wholesome", "Mentor", "Chaos"].map((mood) => (
              <motion.span
                key={mood}
                variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
                className="rounded-full bg-white/80 px-3 py-1.5 text-sm text-slate-700 ring-1 ring-slate-200 backdrop-blur"
              >
                {mood}
              </motion.span>
            ))}
          </motion.div>

          <div className="mt-6 flex items-center justify-center gap-4 text-sm text-slate-500">
            <div className="inline-flex items-center gap-2">
              <Shield className="h-4 w-4" />
              <span>Privacy-first • No account required</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
