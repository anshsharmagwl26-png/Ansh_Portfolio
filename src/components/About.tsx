import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface AboutProps {
  isLightMode: boolean;
}

export const About: React.FC<AboutProps> = ({ isLightMode }) => {
  return (
    <section
      id="about"
      className={`py-20 sm:py-24 border-b ${
        isLightMode ? 'border-zinc-200' : 'border-zinc-800/60'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="mb-12">
          <p
            className={`text-xs font-mono tracking-wider mb-2 ${
              isLightMode ? 'text-cyan-700' : 'text-cyan-400'
            }`}
          >
            01. Background & Education
          </p>
          <h2
            className={`font-display text-2xl sm:text-3xl font-bold tracking-tight ${
              isLightMode ? 'text-zinc-900' : 'text-zinc-100'
            }`}
          >
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Narrative Paragraphs + Education */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4">
              {PERSONAL_INFO.aboutParagraphs.map((paragraph, idx) => (
                <p
                  key={idx}
                  className={`text-base leading-relaxed ${
                    isLightMode ? 'text-zinc-700' : 'text-zinc-300'
                  }`}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Education Details */}
            <div
              className={`pt-6 border-t space-y-5 ${
                isLightMode ? 'border-zinc-200' : 'border-zinc-800/80'
              }`}
            >
              <h3
                className={`text-sm font-semibold tracking-tight ${
                  isLightMode ? 'text-zinc-900' : 'text-zinc-200'
                }`}
              >
                Education
              </h3>

              <div className="space-y-4">
                {PERSONAL_INFO.education.map((edu, index) => (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1"
                  >
                    <div>
                      <div
                        className={`text-sm font-semibold ${
                          isLightMode ? 'text-zinc-900' : 'text-zinc-100'
                        }`}
                      >
                        {edu.institution}
                      </div>
                      <div
                        className={`text-xs mt-0.5 ${
                          isLightMode ? 'text-zinc-600' : 'text-zinc-400'
                        }`}
                      >
                        {edu.degree}
                        {edu.score ? ` · Score: ${edu.score}` : ''}
                      </div>
                    </div>
                    <div
                      className={`text-xs font-mono tabular-nums shrink-0 ${
                        isLightMode ? 'text-zinc-500' : 'text-zinc-400'
                      }`}
                    >
                      {edu.period}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* "Currently" Card */}
          <div className="lg:col-span-5">
            <div
              className={`rounded-2xl border p-6 sm:p-7 ${
                isLightMode
                  ? 'bg-white border-zinc-200/90 shadow-sm'
                  : 'bg-[#11131C] border-zinc-800/90'
              }`}
            >
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-zinc-800/50">
                <h3
                  className={`font-display text-base font-bold ${
                    isLightMode ? 'text-zinc-900' : 'text-zinc-100'
                  }`}
                >
                  Currently
                </h3>
                <span
                  className={`text-xs font-mono ${
                    isLightMode ? 'text-cyan-700' : 'text-cyan-400'
                  }`}
                >
                  Indore, India
                </span>
              </div>

              <ul className="space-y-4">
                {PERSONAL_INFO.currentlyItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm leading-relaxed">
                    <span
                      className={`font-mono text-xs mt-1 select-none ${
                        isLightMode ? 'text-cyan-700' : 'text-cyan-400'
                      }`}
                    >
                      0{idx + 1}
                    </span>
                    <span className={isLightMode ? 'text-zinc-700' : 'text-zinc-300'}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
