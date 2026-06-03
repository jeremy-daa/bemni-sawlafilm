'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin } from 'lucide-react';
import Image from "next/image";

// Ethiopia Bounding Box (Adjusted to add padding/inset pins)
const MAP_BOUNDS = {
  minLon: 32.0, // West (was 33.0)
  maxLon: 49.0, // East (was 48.0)
  minLat: 2.5, // South (was 3.5)
  maxLat: 16.0, // North (was 15.0)
};

function getMapPosition(lat: number, lon: number) {
  const lonPercent =
    ((lon - MAP_BOUNDS.minLon) / (MAP_BOUNDS.maxLon - MAP_BOUNDS.minLon)) * 100;
  const latPercent =
    100 -
    ((lat - MAP_BOUNDS.minLat) / (MAP_BOUNDS.maxLat - MAP_BOUNDS.minLat)) * 100;

  return { left: `${lonPercent}%`, top: `${latPercent}%` };
}

const locations = [
  {
    id: "addis",
    name: "Addis Ababa",
    lat: 9.0, // Slightly adjusted for visual balance
    lon: 38.74,
    info: "Urban Fixing, Permits, Equipment",
    season: "Best: Oct - May",
  },
  {
    id: "omo",
    name: "Omo Valley",
    lat: 5.2,
    lon: 36.3,
    info: "Tribal Access, Remote Logistics",
    season: "Avoid Rainy Season (Apr-May, Oct)",
  },
  {
    id: "danakil",
    name: "Danakil Depression",
    lat: 13.8,
    lon: 40.8, // Dallol area
    info: "Volcanoes, Salt Flats, Extreme Heat",
    season: "Best: Nov - Feb (Cooler)",
  },
  {
    id: "lalibela",
    name: "Lalibela",
    lat: 12.03,
    lon: 39.04,
    info: "Rock-Hewn Churches, Festivals",
    season: "Timkat (Jan), Genna (Jan)",
  },
  {
    id: "simien",
    name: "Simien Mountains",
    lat: 13.2,
    lon: 38.0,
    info: "Gelada Baboons, Trekking, Scenery",
    season: "Best: Sep - Nov (Green)",
  },
  {
    id: "bale",
    name: "Bale Mountains",
    lat: 6.9,
    lon: 39.75,
    info: "Ethiopian Wolf, Alpine Forests",
    season: "Best: Nov - Mar",
  },
];

export default function InteractiveMap() {
  const [activeLocation, setActiveLocation] = useState<string | null>(null);

  return (
    <section className="bg-ink py-[clamp(56px,8vw,100px)] border-t border-white/[0.06] overflow-hidden relative">
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)', backgroundSize: '48px 48px' }} aria-hidden="true" />
      <div className="max-w-[1240px] mx-auto px-[clamp(20px,4vw,48px)] relative z-10 grid md:grid-cols-3 gap-12 items-start">
        {/* Text Side */}
        <div className="md:col-span-1 order-2 md:order-1 reveal">
          <div className="flex items-center gap-2.5 text-[10px] font-medium tracking-[0.2em] uppercase text-ember mb-5">
            <span className="w-6 h-px bg-ember" aria-hidden="true" />
            Access Anywhere
          </div>
          <h2 className="font-serif font-light text-white text-display-md mb-6 tracking-[-0.015em]">
            The Field Network
          </h2>
          <p className="text-[14px] font-light text-white/55 leading-[1.8] mb-8">
            From the heat of the Danakil to the peaks of Simien, our network of
            local fixers ensures you have eyes on the ground before you even
            arrive.
          </p>

          <div className="space-y-2">
            {locations.map((loc) => (
              <div
                key={loc.id}
                onClick={() => setActiveLocation(activeLocation === loc.id ? null : loc.id)}
                onMouseEnter={() => setActiveLocation(loc.id)}
                onMouseLeave={() => setActiveLocation(null)}
                className={`p-4 rounded-[3px] border transition-all cursor-pointer ${
                  activeLocation === loc.id
                    ? "border-ember/50 bg-ember/10"
                    : "border-white/10 bg-white/[0.03] hover:border-white/20"
                }`}
              >
                <div className="flex justify-between items-center">
                  <h3
                    className={`font-medium text-[13px] transition-colors ${activeLocation === loc.id ? "text-ember" : "text-white/80"}`}
                  >
                    {loc.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-white/30 md:hidden">Details</span>
                    <motion.span
                      animate={{ rotate: activeLocation === loc.id ? 90 : 0 }}
                      className="text-white/40 text-[10px] hidden sm:inline"
                    >
                      →
                    </motion.span>
                  </div>
                </div>

                {/* Mobile & Accordion details for seamless inline access */}
                <AnimatePresence initial={false}>
                  {activeLocation === loc.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0, marginTop: 0 }}
                      animate={{ height: "auto", opacity: 1, marginTop: 12 }}
                      exit={{ height: 0, opacity: 0, marginTop: 0 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                      className="overflow-hidden text-[11px] border-t border-white/5 pt-3 space-y-2"
                    >
                      <div className="grid grid-cols-3 gap-1">
                        <span className="text-white/40 uppercase tracking-[0.05em]">Coords:</span>
                        <span className="text-white/80 font-mono col-span-2">{loc.lat}° N, {loc.lon}° E</span>
                      </div>
                      <div className="grid grid-cols-3 gap-1">
                        <span className="text-white/40 uppercase tracking-[0.05em]">Focus:</span>
                        <span className="text-white/80 col-span-2">{loc.info}</span>
                      </div>
                      <div className="grid grid-cols-3 gap-1">
                        <span className="text-white/40 uppercase tracking-[0.05em]">Season:</span>
                        <span className="text-ember font-mono col-span-2">{loc.season}</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* Map Visualization Side */}
        <div className="md:col-span-2 w-full bg-white/[0.02] rounded-[4px] border border-white/10 p-4 sm:p-6 md:p-8 flex items-center justify-center order-1 md:order-2 reveal reveal-delay-200">
          {/* Inner Map Wrapper with strict aspect-ratio matching target SVG bounds (799 x 621) */}
          <div className="relative w-full aspect-[799/621] max-w-lg md:max-w-xl lg:max-w-2xl mx-auto">
            <Image
              src="/vectors/ethiopia-1.svg"
              alt="Map of Ethiopia"
              fill
              className="object-contain drop-shadow-2xl opacity-80"
              priority
            />

            {/* Location Points */}
            {locations.map((loc) => {
              const pos = getMapPosition(loc.lat, loc.lon);
              return (
                <div
                  key={loc.id}
                  style={{ top: pos.top, left: pos.left }}
                  onClick={() => setActiveLocation(activeLocation === loc.id ? null : loc.id)}
                  onMouseEnter={() => setActiveLocation(loc.id)}
                  onMouseLeave={() => setActiveLocation(null)}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                    activeLocation === loc.id ? "z-50" : "z-10"
                  }`}
                >
                  <div className="relative group cursor-pointer">
                    {/* Pulse Effect */}
                    <span
                      className={`absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping bg-ember ${
                        activeLocation === loc.id
                          ? "inline-block"
                          : "hidden"
                      }`}
                    ></span>

                    {/* Pin Icon */}
                    <div
                      className={`relative p-1.5 sm:p-2 rounded-full transition-all duration-300 ${
                        activeLocation === loc.id
                          ? "bg-ember text-ink scale-125 z-20 shadow-[0_0_30px_rgba(211,176,58,0.5)]"
                          : "bg-white/10 text-white/40 hover:text-white/80 hover:bg-white/20 z-10"
                      }`}
                    >
                      <MapPin
                        className="w-3.5 h-3.5 sm:w-5 sm:h-5"
                        fill={
                          activeLocation === loc.id ? "currentColor" : "none"
                        }
                      />
                    </div>

                    {/* Tooltip Popup (hidden on mobile to prevent viewport clipping) */}
                    <AnimatePresence>
                      {activeLocation === loc.id && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.9 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.9 }}
                          className="hidden md:block absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-[280px] bg-ink/95 backdrop-blur-md border border-white/10 p-5 rounded-[4px] shadow-2xl z-30"
                        >
                          <h4 className="font-serif text-[18px] text-white mb-2">
                            {loc.name}
                          </h4>
                          <div className="h-px w-full bg-white/10 mb-3" />

                          <div className="grid grid-cols-3 gap-2 text-[11px] mb-2">
                            <span className="text-white/40 uppercase tracking-[0.1em] col-span-1">
                              Coords
                            </span>
                            <span className="text-white/80 font-mono col-span-2">
                              {loc.lat}° N, {loc.lon}° E
                            </span>
                          </div>
                          <div className="grid grid-cols-3 gap-2 text-[11px] mb-2">
                            <span className="text-white/40 uppercase tracking-[0.1em] col-span-1">
                              Focus
                            </span>
                            <span className="text-white/80 col-span-2">
                              {loc.info}
                            </span>
                          </div>
                          <div className="grid grid-cols-3 gap-2 text-[11px]">
                            <span className="text-white/40 uppercase tracking-[0.1em] col-span-1">
                              Season
                            </span>
                            <span className="text-ember font-mono col-span-2">
                              {loc.season}
                            </span>
                          </div>

                          {/* Little Arrow */}
                          <div className="absolute top-full left-1/2 -translate-x-1/2 w-3 h-3 bg-ink border-r border-b border-white/10 transform rotate-45 -mt-1.5"></div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
