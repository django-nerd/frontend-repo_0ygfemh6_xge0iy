import { Github, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-200/70 bg-white/70 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-slate-500">© 2025 AnonAI. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-slate-500 transition hover:text-slate-900" aria-label="Twitter">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-slate-500 transition hover:text-slate-900" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
