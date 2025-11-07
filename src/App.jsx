import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Benefits from './components/Benefits'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-sky-500 to-indigo-500" />
            <span className="text-lg font-extrabold tracking-tight">Phluence</span>
          </div>
          <nav className="hidden gap-6 text-sm font-medium text-slate-600 sm:flex">
            <a href="#how" className="hover:text-slate-900">How it works</a>
            <a href="#benefits" className="hover:text-slate-900">Benefits</a>
            <a href="#get-started" className="hover:text-slate-900">Get started</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <div id="benefits">
          <Benefits />
        </div>
        <HowItWorks />
        <CTA />
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-slate-500">
          © {new Date().getFullYear()} Phluence™. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default App
