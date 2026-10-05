import React from 'react';
import { ArrowUpRight, Mail, ChevronRight, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  isLightMode: boolean;
}

export const Hero: React.FC<HeroProps> = ({ isLightMode }) => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-12 pb-20 sm:pt-20 sm:pb-28 border-b border-zinc-800/60"
    >
      {/* Subtle geometric grid and ambient radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div
          className={`absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:36px_36px] ${
            isLightMode ? 'opacity-60' : 'opacity-100'
          }`}
        />
        <div
          className={`absolute -top-28 left-1/2 -translate-x-1/2 w-[680px] h-[340px] rounded-full blur-3xl ${
            isLightMode ? 'bg-cyan-500/10' : 'bg-cyan-500/12'
          }`}
        />
      </div>

      <div className="relative max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Core Identity & Headline */}
          <div className="lg:col-span-7 space-y-6">
            <div
              className={`flex flex-wrap items-center gap-2 text-xs font-mono tracking-wide ${
                isLightMode ? 'text-zinc-600' : 'text-zinc-400'
              }`}
            >
              <span className={isLightMode ? 'text-cyan-700 font-semibold' : 'text-cyan-400 font-semibold'}>
                {PERSONAL_INFO.name}
              </span>
              <span aria-hidden="true">·</span>
              <span>{PERSONAL_INFO.heroRoleLine}</span>
              <span aria-hidden="true">·</span>
              <span>{PERSONAL_INFO.heroInstituteLine}</span>
            </div>

            <h1
              className={`font-display text-3xl sm:text-5xl lg:text-[52px] font-bold tracking-tight leading-[1.12] max-w-2xl ${
                isLightMode ? 'text-zinc-900' : 'text-zinc-50'
              }`}
            >
              {PERSONAL_INFO.heroHeadline}
            </h1>

            <p
              className={`text-base sm:text-lg leading-relaxed max-w-2xl ${
                isLightMode ? 'text-zinc-700' : 'text-zinc-300'
              }`}
            >
              {PERSONAL_INFO.heroSubheadline}
            </p>

            <p
              className={`text-sm sm:text-base leading-relaxed max-w-xl ${
                isLightMode ? 'text-zinc-600' : 'text-zinc-400'
              }`}
            >
              {PERSONAL_INFO.heroShortDesc}
            </p>

            {/* 4 Required CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => scrollToSection('projects')}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-150 whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-cyan-400 ${
                  isLightMode
                    ? 'bg-zinc-900 text-white hover:bg-zinc-800'
                    : 'bg-cyan-400 text-zinc-950 hover:bg-cyan-300'
                }`}
              >
                <span>View Projects</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-medium border transition-colors duration-150 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-cyan-400 ${
                  isLightMode
                    ? 'border-zinc-300 bg-white text-zinc-800 hover:bg-zinc-100'
                    : 'border-zinc-800 bg-[#12141D] text-zinc-200 hover:border-zinc-700 hover:bg-zinc-800/80'
                }`}
              >
                <span>GitHub</span>
                <ArrowUpRight className="w-4 h-4 opacity-75" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-medium border transition-colors duration-150 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-cyan-400 ${
                  isLightMode
                    ? 'border-zinc-300 bg-white text-zinc-800 hover:bg-zinc-100'
                    : 'border-zinc-800 bg-[#12141D] text-zinc-200 hover:border-zinc-700 hover:bg-zinc-800/80'
                }`}
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-4 h-4 opacity-75" />
              </a>

              <button
                type="button"
                onClick={() => scrollToSection('contact')}
                className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-medium border transition-colors duration-150 whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-cyan-400 ${
                  isLightMode
                    ? 'border-zinc-300 bg-transparent text-zinc-700 hover:bg-zinc-100'
                    : 'border-zinc-800/90 bg-transparent text-zinc-300 hover:border-zinc-700 hover:text-zinc-100'
                }`}
              >
                <Mail className="w-4 h-4 opacity-75" />
                <span>Contact Me</span>
              </button>
            </div>
          </div>

          {/* Right Column: Structured Developer Profile & Active Build Snapshot */}
          <div className="lg:col-span-5">
            <div
              className={`rounded-2xl border p-6 sm:p-7 transition-colors ${
                isLightMode
                  ? 'bg-white border-zinc-200/90 shadow-sm'
                  : 'bg-[#11131C] border-zinc-800/90'
              }`}
            >
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-zinc-800/60">
                <div className="flex items-center gap-2">
                  <Terminal
                    className={`w-4 h-4 ${
                      isLightMode ? 'text-cyan-700' : 'text-cyan-400'
                    }`}
                  />
                  <span
                    className={`font-mono text-xs font-medium ${
                      isLightMode ? 'text-zinc-700' : 'text-zinc-300'
                    }`}
                  >
                    ansh_sharma.profile
                  </span>
                </div>
                <span
                  className={`font-mono text-xs tabular-nums ${
                    isLightMode ? 'text-zinc-500' : 'text-zinc-400'
                  }`}
                >
                  2026–2031
                </span>
              </div>

              <div className="space-y-4 text-sm">
                <div>
                  <div
                    className={`text-xs font-mono mb-1 ${
                      isLightMode ? 'text-zinc-500' : 'text-zinc-400'
                    }`}
                  >
                    Academic Program
                  </div>
                  <div
                    className={`font-medium ${
                      isLightMode ? 'text-zinc-900' : 'text-zinc-100'
                    }`}
                  >
                    Integrated M.Tech (Computer Science)
                  </div>
                  <div
                    className={`text-xs mt-0.5 ${
                      isLightMode ? 'text-zinc-600' : 'text-zinc-400'
                    }`}
                  >
                    International Institute of Professional Studies (IIPS), DAVV, Indore
                  </div>
                </div>

                <div
                  className={`pt-3 border-t ${
                    isLightMode ? 'border-zinc-200' : 'border-zinc-800/70'
                  }`}
                >
                  <div
                    className={`text-xs font-mono mb-1.5 ${
                      isLightMode ? 'text-zinc-500' : 'text-zinc-400'
                    }`}
                  >
                    Core Focus Areas
                  </div>
                  <div
                    className={`text-xs leading-relaxed ${
                      isLightMode ? 'text-zinc-700' : 'text-zinc-300'
                    }`}
                  >
                    Python · Artificial Intelligence · Data Analysis · Data Science · FastAPI · Streamlit · Cloud Run · Microsoft AI Foundry
                  </div>
                </div>

                <div
                  className={`pt-3 border-t ${
                    isLightMode ? 'border-zinc-200' : 'border-zinc-800/70'
                  }`}
                >
                  <div
                    className={`text-xs font-mono mb-2 ${
                      isLightMode ? 'text-zinc-500' : 'text-zinc-400'
                    }`}
                  >
                    Featured Practical Work
                  </div>
                  <ul className="space-y-2.5 text-xs">
                    <li className="flex items-baseline justify-between gap-2">
                      <a
                        href="https://student-success-analytics-ansh.streamlit.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1 font-medium hover:underline ${
                          isLightMode ? 'text-zinc-800 hover:text-cyan-700' : 'text-zinc-200 hover:text-cyan-400'
                        }`}
                      >
                        <span>01. Student Success Analytics</span>
                        <ArrowUpRight className="w-3 h-3 opacity-75" />
                      </a>
                      <span
                        className={`font-mono text-[11px] shrink-0 ${
                          isLightMode ? 'text-zinc-500' : 'text-zinc-400'
                        }`}
                      >
                        Streamlit · Live App
                      </span>
                    </li>
                    <li className="flex items-baseline justify-between gap-2">
                      <a
                        href="https://turmeric-shield-web.onrender.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1 font-medium hover:underline ${
                          isLightMode ? 'text-zinc-800 hover:text-cyan-700' : 'text-zinc-200 hover:text-cyan-400'
                        }`}
                      >
                        <span>02. Turmeric Shield (SIH26131)</span>
                        <ArrowUpRight className="w-3 h-3 opacity-75" />
                      </a>
                      <span
                        className={`font-mono text-[11px] shrink-0 ${
                          isLightMode ? 'text-zinc-500' : 'text-zinc-400'
                        }`}
                      >
                        FastAPI · Live Prototype
                      </span>
                    </li>
                    <li className="flex items-baseline justify-between gap-2">
                      <a
                        href="https://learn.microsoft.com/api/credentials/share/en-us/AnshSharma-0436/817B07C88383D4D2"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1 font-medium hover:underline ${
                          isLightMode ? 'text-zinc-800 hover:text-cyan-700' : 'text-zinc-200 hover:text-cyan-400'
                        }`}
                      >
                        <span>03. AI Solution — Microsoft Foundry</span>
                        <ArrowUpRight className="w-3 h-3 opacity-75" />
                      </a>
                      <span
                        className={`font-mono text-[11px] shrink-0 ${
                          isLightMode ? 'text-zinc-500' : 'text-zinc-400'
                        }`}
                      >
                        Applied Skills Verified
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
