'use client'

import { useState, useEffect } from 'react'

export function StatStrip() {
  const [hqTime, setHqTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      // Calculate UTC+3 (East Africa Time - EAT)
      const now = new Date()
      const utc = now.getTime() + now.getTimezoneOffset() * 60000
      const eatOffset = 3
      const eatDate = new Date(utc + 3600000 * eatOffset)
      
      const pad = (n: number) => String(n).padStart(2, '0')
      const hours = pad(eatDate.getHours())
      const minutes = pad(eatDate.getMinutes())
      const seconds = pad(eatDate.getSeconds())
      
      setHqTime(`${hours}:${minutes}:${seconds}`)
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className="bg-[#050505] border-y border-white/[0.06] relative overflow-hidden"
      aria-label="Operational status dashboard"
    >
      {/* Subtle background tech line grid */}
      <div className="absolute inset-0 pointer-events-none opacity-5 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:120px_100%]" aria-hidden="true" />

      <div className="max-w-[1240px] mx-auto px-[clamp(20px,4vw,48px)]">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-white/[0.08] border-x border-white/[0.04]">
          
          {/* Stat 1: Regions */}
          <div className="py-5 px-6 text-left group hover:bg-white/[0.015] transition-colors duration-300">
            <div className="flex items-baseline gap-2 mb-1.5">
              <span className="font-serif font-light text-[28px] text-gold tracking-tight leading-none">
                12 / 12
              </span>
              <span className="flex items-center gap-1.5 text-[8px] font-medium text-gold uppercase tracking-widest bg-gold/10 border border-gold/20 px-1.5 py-0.5 rounded-[1px]">
                <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                Active
              </span>
            </div>
            <span className="block text-[9px] font-medium text-white/40 tracking-[0.12em] uppercase mb-0.5">
              Regional States Covered
            </span>
            <span className="block text-[10px] font-light text-white/20">
              Active logistics & fixers in all zones
            </span>
          </div>

          {/* Stat 2: Languages */}
          <div className="py-5 px-6 text-left group hover:bg-white/[0.015] transition-colors duration-300">
            <div className="flex items-baseline gap-2 mb-1.5">
              <span className="font-serif font-light text-[28px] text-gold tracking-tight leading-none">
                7
              </span>
              <span className="text-[8px] font-medium text-white/45 uppercase tracking-widest bg-white/[0.04] border border-white/[0.06] px-1.5 py-0.5 rounded-[1px]">
                Multilingual
              </span>
            </div>
            <span className="block text-[9px] font-medium text-white/40 tracking-[0.12em] uppercase mb-0.5">
              Local Languages
            </span>
            <span className="block text-[10px] font-light text-white/20 group-hover:text-white/40 transition-colors duration-200 truncate">
              Amharic · Oromo · Somali · Tigrinya · Afar
            </span>
          </div>

          {/* Stat 3: NDA Safe */}
          <div className="py-5 px-6 text-left group hover:bg-white/[0.015] transition-colors duration-300">
            <div className="flex items-baseline gap-2 mb-1.5">
              <span className="font-serif font-light text-[28px] text-gold tracking-tight leading-none">
                100%
              </span>
              <span className="flex items-center gap-1.5 text-[8px] font-medium text-gold uppercase tracking-widest bg-gold/10 border border-gold/20 px-1.5 py-0.5 rounded-[1px]">
                🔒 Bonded
              </span>
            </div>
            <span className="block text-[9px] font-medium text-white/40 tracking-[0.12em] uppercase mb-0.5">
              NDA-Safe & Compliant
            </span>
            <span className="block text-[10px] font-light text-white/20">
              Secure credentials for broadcast networks
            </span>
          </div>

          {/* Stat 4: HQ Addis Time */}
          <div className="py-5 px-6 text-left group hover:bg-white/[0.015] transition-colors duration-300">
            <div className="flex items-baseline gap-2 mb-1.5">
              <span className="font-mono font-light text-[26px] text-gold tracking-tight leading-none">
                {hqTime || '03:00:00'}
              </span>
              <span className="text-[8px] font-medium text-white/45 uppercase tracking-widest bg-white/[0.04] border border-white/[0.06] px-1.5 py-0.5 rounded-[1px]">
                EAT (UTC+3)
              </span>
            </div>
            <span className="block text-[9px] font-medium text-white/40 tracking-[0.12em] uppercase mb-0.5">
              Addis Ababa HQ Time
            </span>
            <span className="block text-[10px] font-light text-white/20">
              On-call operational fixing desk
            </span>
          </div>

        </div>
      </div>
    </div>
  )
}
