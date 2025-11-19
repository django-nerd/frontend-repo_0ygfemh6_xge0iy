import Hero from './components/Hero';
import DownloadSection from './components/DownloadSection';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* subtle background grid */}
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* gradient corner accents */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -top-28 -left-28 h-72 w-72 rounded-full bg-gradient-to-br from-purple-400/30 via-indigo-400/30 to-transparent blur-3xl" />
        <div className="absolute -bottom-28 -right-28 h-72 w-72 rounded-full bg-gradient-to-tl from-orange-300/30 via-pink-300/30 to-transparent blur-3xl" />
      </div>

      <main className="relative">
        <Hero />
        <DownloadSection />
        <Features />
      </main>

      <Footer />
    </div>
  )
}

export default App
