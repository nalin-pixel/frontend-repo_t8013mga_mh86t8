import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section id="get-started" className="relative bg-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.25),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-20 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Ready to build the shortest path between pharma and patients?
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-slate-300">
          Let’s design a support experience your patients actually love.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a href="#" className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-semibold text-slate-900 shadow hover:bg-slate-100">
            Request a demo
            <ArrowRight className="h-5 w-5" />
          </a>
          <a href="#" className="rounded-lg px-5 py-3 font-semibold text-white ring-1 ring-white/30 hover:bg-white/10">
            Explore capabilities
          </a>
        </div>
      </div>
    </section>
  )
}
