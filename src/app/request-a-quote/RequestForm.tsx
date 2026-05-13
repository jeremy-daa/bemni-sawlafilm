'use client'

import { useState, type FormEvent } from 'react'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

const inputBase =
  'w-full bg-white border border-black/12 rounded-[3px] px-3.5 py-2.5 text-[13px] font-light text-ink placeholder:text-silver/70 focus:outline-none focus:border-ember focus:ring-1 focus:ring-ember/20 transition-all duration-200'

const selectBase = inputBase + ' appearance-none cursor-pointer'

const labelBase = 'block text-[11px] font-medium text-ink/70 tracking-[0.04em] uppercase mb-1.5'

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
      setState('success')
    } catch (err) {
      console.error(err)
      setState('error')
    }
  }

  if (state === 'success') {
    return (
      <div className="bg-ink rounded-[4px] p-8 text-center">
        <div className="w-12 h-12 rounded-full bg-ember/15 flex items-center justify-center mx-auto mb-5">
          <svg className="w-6 h-6 text-ember" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="font-serif font-light text-gold text-[22px] italic mb-3">Brief received.</h3>
        <p className="text-[13px] font-light text-white/55 leading-[1.75] max-w-[380px] mx-auto">
          Sawla Films will review your dates, locations, crew size, equipment needs, drone plans,
          and access questions, then respond with initial feasibility notes and practical next steps.
          If your request is urgent, please also contact us directly on WhatsApp at +251 927 115 454.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">

      {/* Group: Your details */}
      <div className="text-[10px] font-medium text-ember tracking-[0.14em] uppercase mb-1 pb-2 border-b border-black/[0.07]">
        Your details
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
      <div className="text-[10px] font-medium text-ember tracking-[0.14em] uppercase mt-2 mb-1 pb-2 border-b border-black/[0.07]">
        Production details
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
      <div className="text-[10px] font-medium text-ember tracking-[0.14em] uppercase mt-2 mb-1 pb-2 border-b border-black/[0.07]">
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
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
      <div className="text-[10px] font-medium text-ember tracking-[0.14em] uppercase mt-2 mb-1 pb-2 border-b border-black/[0.07]">
        Budget indication
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
      <button
        type="submit"
        disabled={state === 'submitting'}
        className="w-full bg-ember text-white text-[12px] font-medium tracking-[0.08em] uppercase px-6 py-3.5 rounded-[2px] hover:bg-ember-glow transition-all duration-250 ease-out-expo disabled:opacity-60 disabled:cursor-not-allowed hover:-translate-y-px"
      >
        {state === 'submitting' ? 'Sending your brief…' : 'Send production brief'}
      </button>

      {state === 'error' && (
        <p className="text-[12px] text-ember text-center">
          Something went wrong. Please try again or contact us directly on WhatsApp.
        </p>
      )}

    </form>
  )
}

