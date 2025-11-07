import { Workflow, ShieldCheck, MessageSquare } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      icon: Workflow,
      title: 'Orchestrate',
      text: 'Aggregate consents and signals from EHR, hubs, and pharmacies to trigger the next best action.'
    },
    {
      icon: MessageSquare,
      title: 'Engage',
      text: 'Deliver personalized education, benefits, and reminders across SMS, chat, and voice.'
    },
    {
      icon: ShieldCheck,
      title: 'Comply',
      text: 'HIPAA-first architecture with auditability, encryption, and role-based access.'
    }
  ]

  return (
    <section id="how" className="relative bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">How Phluence works</h2>
          <p className="mt-3 text-slate-600">From identification to ongoing support, our platform removes friction at every step.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
