'use client'

import { useState, type FormEvent } from 'react'

import { useRouter } from 'next/navigation'

type FormState = 'idle' | 'submitting' | 'error'

const inputBase =
  'w-full bg-ash/[0.02] border border-black/10 rounded-[4px] px-4 py-3 text-[13px] font-light text-ink placeholder:text-silver/60 focus:outline-none focus:bg-white focus:border-ember focus:ring-2 focus:ring-ember/15 transition-all duration-250 hover:border-black/20'

const selectBase = inputBase + ' appearance-none cursor-pointer bg-[url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3e%3cpolyline points=\'6 9 12 15 18 9\'%3e%3c/polyline%3e%3c/svg%3e")] bg-no-repeat bg-[position:right_1rem_center] bg-[length:1em] pr-10'

const labelBase = 'block text-[10px] font-semibold text-ink/80 tracking-[0.06em] uppercase mb-2'

function Field({
  label, required, children,
}: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label className={labelBase}>
        {label}{required && <span className="text-ember ml-0.5">*</span>}
      </label>
      {children}
    </div>
  )
}

export function RequestForm() {
  const router = useRouter()
  const [state, setState] = useState<FormState>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setState('submitting')

    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) throw new Error('Failed to send')
      router.push('/thank-you')
    } catch (err) {
      console.error(err)
      setState('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">

      {/* Group: Your details */}
      <div className="text-[11px] font-semibold text-ember tracking-[0.16em] uppercase mb-2 mt-2 pb-3 border-b border-black/[0.06] flex items-center gap-2.5">
        <span className="w-5 h-px bg-ember" aria-hidden="true" />
        Your details
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Name and role" required>
          <input
            type="text"
            name="name_role"
            placeholder="e.g. Jane Smith, Series Producer"
            required
            className={inputBase}
          />
        </Field>
        <Field label="Production company / broadcaster / agency" required>
          <input
            type="text"
            name="company"
            placeholder="e.g. BBC Studios, Wildfire TV"
            required
            className={inputBase}
          />
        </Field>
        <Field label="Email address" required>
          <input
            type="email"
            name="email"
            placeholder="you@production.com"
            required
            className={inputBase}
          />
        </Field>
        <Field label="WhatsApp / phone (incl. country code)">
          <input
            type="tel"
            name="phone"
            placeholder="+44 7700 900 000"
            className={inputBase}
          />
        </Field>
      </div>

      {/* Group: Production */}
      <div className="text-[11px] font-semibold text-ember tracking-[0.16em] uppercase mt-6 mb-2 pb-3 border-b border-black/[0.06] flex items-center gap-2.5">
        <span className="w-5 h-px bg-ember" aria-hidden="true" />
        Production details
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Shoot dates or expected window" required>
          <input
            type="text"
            name="dates"
            placeholder="e.g. October–November 2025"
            required
            className={inputBase}
          />
        </Field>
        <Field label="Crew size" required>
          <input
            type="text"
            name="crew_size"
            placeholder="e.g. 8 international crew"
            required
            className={inputBase}
          />
        </Field>
        <Field label="Project type" required>
          <select name="project_type" required className={selectBase}>
            <option value="">Select type…</option>
            <option>Documentary</option>
            <option>Factual series</option>
            <option>Commercial</option>
            <option>Reality format</option>
            <option>Independent film</option>
            <option>Current affairs</option>
            <option>Corporate / branded</option>
            <option>Other</option>
          </select>
        </Field>
        <Field label="Current production stage">
          <select name="stage" className={selectBase}>
            <option value="">Select stage…</option>
            <option>Research / development</option>
            <option>Budgeting</option>
            <option>Confirmed shoot</option>
            <option>Urgent field support needed</option>
          </select>
        </Field>
      </div>
      <Field label="Filming regions or locations" required>
        <input
          type="text"
          name="regions"
          placeholder="e.g. Afar, Omo Valley, Lalibela, Addis Ababa"
          required
          className={inputBase}
        />
      </Field>
      <Field label="Subject matter or brief summary" required>
        <textarea
          name="brief"
          rows={4}
          placeholder="3–5 sentences: what are you filming, why Ethiopia, what is the story?"
          required
          className={inputBase + ' resize-y min-h-[90px]'}
        />
      </Field>

      {/* Group: Logistics */}
      <div className="text-[11px] font-semibold text-ember tracking-[0.16em] uppercase mt-6 mb-2 pb-3 border-b border-black/[0.06] flex items-center gap-2.5">
        <span className="w-5 h-px bg-ember" aria-hidden="true" />
        Equipment and logistics
      </div>
      <Field label="Equipment list (cameras, lighting, sound, specialist kit)">
        <textarea
          name="equipment"
          rows={3}
          placeholder="Main camera, sound rig, drone model, lighting etc."
          className={inputBase + ' resize-y min-h-[70px]'}
        />
      </Field>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <Field label="Drone filming planned?" required>
          <select name="drone" required className={selectBase}>
            <option value="">Select…</option>
            <option>Yes</option>
            <option>No</option>
            <option>Unsure</option>
          </select>
        </Field>
        <Field label="Customs support needed?">
          <select name="customs" className={selectBase}>
            <option value="">Select…</option>
            <option>Yes</option>
            <option>No</option>
            <option>Unsure</option>
          </select>
        </Field>
        <Field label="Permit urgency / start date">
          <input
            type="text"
            name="urgency"
            placeholder="e.g. Must start Oct 1"
            className={inputBase}
          />
        </Field>
      </div>

      {/* Group: Budget */}
      <div className="text-[11px] font-semibold text-ember tracking-[0.16em] uppercase mt-6 mb-2 pb-3 border-b border-black/[0.06] flex items-center gap-2.5">
        <span className="w-5 h-px bg-ember" aria-hidden="true" />
        Budget indication
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Budget range">
          <select name="budget_range" className={selectBase}>
            <option value="">Select range…</option>
            <option>Under $5,000</option>
            <option>$5,000–$15,000</option>
            <option>$15,000–$40,000</option>
            <option>$40,000–$100,000</option>
            <option>$100,000+</option>
            <option>Prefer not to say</option>
          </select>
        </Field>
        <Field label="Currency">
          <select name="currency" className={selectBase}>
            <option>USD</option>
            <option>EUR</option>
            <option>GBP</option>
            <option>AUD</option>
            <option>CAD</option>
            <option>Other</option>
          </select>
        </Field>
      </div>

      {/* How did you find us */}
      <Field label="How did you find Sawla Films?">
        <select name="source" className={selectBase}>
          <option value="">Select…</option>
          <option>Google search</option>
          <option>Referral from another producer</option>
          <option>Industry directory</option>
          <option>Social media</option>
          <option>Sawla Tours</option>
          <option>Other</option>
        </select>
      </Field>

      {/* Additional notes */}
      <Field label="Additional notes (optional)">
        <textarea
          name="notes"
          rows={3}
          placeholder="Anything else that would help us respond accurately — access concerns, sensitive subjects, partner organisations, etc."
          className={inputBase + ' resize-y min-h-[70px]'}
        />
      </Field>

      {/* Honeypot (spam) — hidden from real users */}
      <div className="absolute left-[-9999px] top-0" aria-hidden="true">
        <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
      </div>

      {/* Privacy */}
      <p className="text-[10px] font-light text-silver/70 italic leading-[1.6]">
        Production details are handled confidentially and used only to assess your request. NDA-safe by default.
      </p>

      {/* Submit */}
      <div className="pt-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <button
            type="submit"
            disabled={state === 'submitting'}
            className="group relative w-full sm:w-auto bg-ember text-white text-[12px] font-medium tracking-[0.1em] uppercase px-8 py-4 rounded-[4px] hover:bg-ember-glow transition-all duration-300 ease-out-expo disabled:opacity-60 disabled:cursor-not-allowed hover:-translate-y-0.5 shadow-lg shadow-ember/25 overflow-hidden flex items-center justify-center gap-3"
          >
            <span className="relative z-10">{state === 'submitting' ? 'Sending brief…' : 'Send production brief'}</span>
            {state !== 'submitting' && (
              <svg className="w-4 h-4 relative z-10 transform group-hover:translate-x-1.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                 <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            )}
          </button>
          <p className="text-[11px] font-light text-steel/80 flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-ember/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            We respond within 24 hours.
          </p>
        </div>
      </div>

      {state === 'error' && (
        <p className="text-[12px] text-ember text-center">
          Something went wrong. Please try again or contact us directly on WhatsApp.
        </p>
      )}

    </form>
  )
}

