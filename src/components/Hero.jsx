import { Rocket, HeartHandshake } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-cyan-50 to-indigo-50" />
      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-16 sm:pt-28 sm:pb-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-sm text-sky-700 ring-1 ring-sky-200 backdrop-blur">
              <HeartHandshake className="h-4 w-4" />
              Phluence — the shortest path between pharma and patients
            </div>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl">
              Automated, frictionless patient support
            </h1>
            <p className="mt-4 max-w-xl text-lg text-slate-600">
              At Phluence™ we help pharmaceutical manufacturers connect with patients on a deeper, more personalized level than ever before.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#get-started" className="inline-flex items-center gap-2 rounded-lg bg-sky-600 px-5 py-3 font-semibold text-white shadow hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-400">
                <Rocket className="h-5 w-5" />
                Get started
              </a>
              <a href="#how" className="rounded-lg px-5 py-3 font-semibold text-sky-700 ring-1 ring-sky-200 hover:bg-white">
                How it works
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="pointer-events-none absolute -top-10 -left-10 h-64 w-64 rounded-full bg-sky-200/40 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-10 -right-10 h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl" />
            <div className="relative rounded-2xl border border-white/60 bg-white/70 p-6 shadow-xl backdrop-blur">
              <div className="grid grid-cols-2 gap-4">
                <Stat label="Enrollment time" value="-72%" accent="text-sky-600" />
                <Stat label="Adherence lift" value="+38%" accent="text-indigo-600" />
                <Stat label="NPS" value="+52" accent="text-emerald-600" />
                <Stat label="Automation" value="85%" accent="text-fuchsia-600" />
              </div>
              <p className="mt-4 text-sm text-slate-500">
                Signals from EHR, HCP, and patient interactions orchestrated into the right support at the right moment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Stat({ label, value, accent }) {
  return (
    <div className="rounded-xl bg-gradient-to-b from-white to-white/60 p-4 ring-1 ring-slate-200">
      <div className={`text-2xl font-extrabold ${accent}`}>{value}</div>
      <div className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">{label}</div>
    </div>
  )
}
