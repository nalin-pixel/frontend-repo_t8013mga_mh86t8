import { Sparkles, UserCheck, Clock, LineChart } from 'lucide-react'

export default function Benefits() {
  const items = [
    {
      icon: Sparkles,
      title: 'Fully automated',
      text: 'Reduce manual case management with intelligent workflows and AI copilots.'
    },
    {
      icon: UserCheck,
      title: 'Personalized support',
      text: 'Tailored interventions that adapt to each patient’s journey and preferences.'
    },
    {
      icon: Clock,
      title: 'Faster time-to-therapy',
      text: 'Accelerate benefits verification, prior auth, and onboarding.'
    },
    {
      icon: LineChart,
      title: 'Measurable outcomes',
      text: 'Built-in analytics to prove adherence, persistency, and NPS lift.'
    }
  ]

  return (
    <section className="relative bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Why brands choose Phluence</h2>
            <p className="mt-3 text-slate-600">Turn fragmented support into a cohesive, continuous experience patients love.</p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {items.map(({ icon: Icon, title, text }) => (
                <li key={title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-sky-100 text-sky-700">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="font-semibold text-slate-900">{title}</span>
                  </div>
                  <p className="mt-2 text-slate-600">{text}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(circle_at_30%_20%,rgba(14,165,233,0.15),transparent_50%),radial-gradient(circle_at_70%_60%,rgba(99,102,241,0.15),transparent_50%)]" />
            <div className="relative rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-xl backdrop-blur">
              <div className="grid grid-cols-2 gap-4">
                <KPICard label="Enrollment" value="-72% time" />
                <KPICard label="Adherence" value="+38%" />
                <KPICard label="NPS" value="+52" />
                <KPICard label="Automation" value="85%" />
              </div>
              <p className="mt-4 text-sm text-slate-500">Real results from real patient journeys.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function KPICard({ label, value }) {
  return (
    <div className="rounded-xl bg-gradient-to-b from-white to-slate-50 p-4 ring-1 ring-slate-200">
      <div className="text-2xl font-extrabold text-slate-900">{value}</div>
      <div className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">{label}</div>
    </div>
  )
}
