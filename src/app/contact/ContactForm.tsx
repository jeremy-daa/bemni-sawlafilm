'use client'

import { useState, type FormEvent } from 'react'

type State = 'idle' | 'submitting' | 'success' | 'error'

const inputBase =
  'w-full bg-white border border-black/12 rounded-[3px] px-3.5 py-2.5 text-[13px] font-light text-ink placeholder:text-silver/70 focus:outline-none focus:border-ember focus:ring-1 focus:ring-ember/20 transition-all duration-200'

const labelBase =
  'block text-[11px] font-medium text-ink/60 tracking-[0.04em] uppercase mb-1.5'

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label className={labelBase}>
        {label}
        {required && <span className="text-ember ml-0.5">*</span>}
      </label>
      {children}
    </div>
  )
}

export function ContactForm() {
  const [state, setState] = useState<State>('idle')

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
        <h3 className="font-serif font-light text-gold text-[20px] italic mb-3">Message received.</h3>
        <p className="text-[13px] font-light text-white/55 leading-[1.75] max-w-[340px] mx-auto">
          We review every message personally and will respond within one business day. For urgent
          shoots, WhatsApp +251 927 115 454 is the fastest route.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Name and role" required>
          <input
            type="text"
            name="name"
            placeholder="e.g. Jane Smith, Series Producer"
            required
            className={inputBase}
          />
        </Field>
        <Field label="Company or broadcaster">
          <input
            type="text"
            name="company"
            placeholder="e.g. BBC Studios, Wildfire TV"
            className={inputBase}
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Email" required>
          <input
            type="email"
            name="email"
            placeholder="you@production.com"
            required
            className={inputBase}
          />
        </Field>
        <Field label="WhatsApp / phone">
          <input
            type="tel"
            name="phone"
            placeholder="+44 7700 900 000"
            className={inputBase}
          />
        </Field>
      </div>

      <Field label="What are you planning?">
        <select name="enquiry_type" className={inputBase + ' appearance-none cursor-pointer'}>
          <option value="">Select enquiry type…</option>
          <option>Production quote / fixer request</option>
          <option>Permit feasibility question</option>
          <option>Drone / aerial planning</option>
          <option>Equipment customs question</option>
          <option>Location scouting enquiry</option>
          <option>General filming in Ethiopia question</option>
          <option>Other</option>
        </select>
      </Field>

      <Field label="Message" required>
        <textarea
          name="message"
          rows={5}
          placeholder="Share your project, dates, locations, crew size, subject matter, or any specific question. As much or as little as you have right now."
          required
          className={inputBase + ' resize-y min-h-[110px]'}
        />
      </Field>

      {/* Honeypot */}
      <div className="absolute left-[-9999px] top-0" aria-hidden="true">
        <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
      </div>

      <p className="text-[10px] font-light text-silver/70 italic leading-[1.6]">
        All enquiries are handled confidentially. NDA-safe by default.
      </p>

      <button
        type="submit"
        disabled={state === 'submitting'}
        className="w-full bg-ember text-white text-[12px] font-medium tracking-[0.08em] uppercase px-6 py-3.5 rounded-[2px] hover:bg-ember-glow transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed hover:-translate-y-px"
      >
        {state === 'submitting' ? 'Sending…' : 'Send message'}
      </button>

      {state === 'error' && (
        <p className="text-[12px] text-ember text-center">
          Something went wrong. Please try again or contact us directly on WhatsApp.
        </p>
      )}
    </form>
  )
}
