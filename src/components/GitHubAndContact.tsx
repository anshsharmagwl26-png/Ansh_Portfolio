import React from 'react';
import { ArrowUpRight, Mail, MapPin } from 'lucide-react';
import { GITHUB_REPOS, PERSONAL_INFO } from '../data/portfolioData';

interface GitHubAndContactProps {
  isLightMode: boolean;
}

export const GitHubAndContact: React.FC<GitHubAndContactProps> = ({ isLightMode }) => {
  return (
    <>
      {/* GITHUB SECTION: BUILT IN PUBLIC */}
      <section
        id="github"
        className={`py-20 sm:py-24 border-b ${
          isLightMode ? 'border-zinc-200' : 'border-zinc-800/60'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <p
                className={`text-xs font-mono tracking-wider mb-2 ${
                  isLightMode ? 'text-cyan-700' : 'text-cyan-400'
                }`}
              >
                07. Open Source & Code Repositories
              </p>
              <h2
                className={`font-display text-2xl sm:text-3xl font-bold tracking-tight ${
                  isLightMode ? 'text-zinc-900' : 'text-zinc-100'
                }`}
              >
                Built in Public
              </h2>
              <p
                className={`text-sm mt-2 ${
                  isLightMode ? 'text-zinc-600' : 'text-zinc-400'
                }`}
              >
                My GitHub is where I document projects, experiments and practical learning.
              </p>
            </div>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-mono font-semibold border transition-colors whitespace-nowrap self-start sm:self-auto focus-visible:outline-2 focus-visible:outline-cyan-400 ${
                isLightMode
                  ? 'border-zinc-300 bg-white text-zinc-900 hover:bg-zinc-100'
                  : 'border-zinc-800 bg-[#11131C] text-zinc-100 hover:border-zinc-700 hover:bg-zinc-800/80'
              }`}
            >
              <span>github.com/anshsharmagwl26-png</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {GITHUB_REPOS.map((repo) => (
              <div
                key={repo.id}
                className={`group rounded-2xl border p-6 flex flex-col justify-between transition-all duration-150 hover:-translate-y-0.5 ${
                  isLightMode
                    ? 'bg-white border-zinc-200/90 hover:border-zinc-300 shadow-sm'
                    : 'bg-[#11131C] border-zinc-800/90 hover:border-cyan-500/40'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <a
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`font-mono text-base font-bold transition-colors inline-flex items-center gap-1.5 focus-visible:outline-2 focus-visible:outline-cyan-400 rounded-sm ${
                        isLightMode
                          ? 'text-zinc-900 hover:text-cyan-700'
                          : 'text-zinc-100 hover:text-cyan-400'
                      }`}
                    >
                      <span>{repo.name}</span>
                      <ArrowUpRight className="w-4 h-4 opacity-70" />
                    </a>

                    {repo.liveUrl && (
                      <a
                        href={repo.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1 text-xs font-mono font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-cyan-400 rounded-sm ${
                          isLightMode
                            ? 'text-cyan-700 hover:text-cyan-900'
                            : 'text-cyan-400 hover:text-cyan-300'
                        }`}
                      >
                        <span>Live App</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>

                  <p
                    className={`text-xs sm:text-sm leading-relaxed mb-4 ${
                      isLightMode ? 'text-zinc-600' : 'text-zinc-400'
                    }`}
                  >
                    {repo.description}
                  </p>
                </div>

                <div
                  className={`pt-3 border-t flex items-center justify-between gap-2 text-xs font-mono ${
                    isLightMode
                      ? 'border-zinc-100 text-zinc-500'
                      : 'border-zinc-800/70 text-zinc-400'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className={isLightMode ? 'text-cyan-700 font-semibold' : 'text-cyan-400 font-semibold'}>
                      {repo.language}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{repo.context}</span>
                  </div>

                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`hover:underline ${
                      isLightMode ? 'text-zinc-700' : 'text-zinc-300'
                    }`}
                  >
                    Repository
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section
        id="contact"
        className={`py-20 sm:py-28 border-b ${
          isLightMode ? 'border-zinc-200' : 'border-zinc-800/60'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div
            className={`rounded-2xl border p-8 sm:p-12 ${
              isLightMode
                ? 'bg-white border-zinc-200/90 shadow-sm'
                : 'bg-[#11131C] border-zinc-800/90'
            }`}
          >
            <div className="max-w-2xl space-y-5">
              <p
                className={`text-xs font-mono tracking-wider ${
                  isLightMode ? 'text-cyan-700' : 'text-cyan-400'
                }`}
              >
                08. Get in Touch
              </p>

              <h2
                className={`font-display text-3xl sm:text-4xl font-bold tracking-tight ${
                  isLightMode ? 'text-zinc-900' : 'text-zinc-50'
                }`}
              >
                Let&apos;s build something useful.
              </h2>

              <p
                className={`text-base leading-relaxed ${
                  isLightMode ? 'text-zinc-600' : 'text-zinc-300'
                }`}
              >
                I&apos;m always interested in learning, building practical software and connecting with people working on interesting technology.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-cyan-400 ${
                    isLightMode
                      ? 'bg-zinc-900 text-white hover:bg-zinc-800'
                      : 'bg-cyan-400 text-zinc-950 hover:bg-cyan-300'
                  }`}
                >
                  <Mail className="w-4 h-4" />
                  <span>Email Me</span>
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-medium border transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-cyan-400 ${
                    isLightMode
                      ? 'border-zinc-300 bg-white text-zinc-800 hover:bg-zinc-100'
                      : 'border-zinc-700 bg-zinc-900 text-zinc-100 hover:border-zinc-600 hover:bg-zinc-800'
                  }`}
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-medium border transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-cyan-400 ${
                    isLightMode
                      ? 'border-zinc-300 bg-white text-zinc-800 hover:bg-zinc-100'
                      : 'border-zinc-700 bg-zinc-900 text-zinc-100 hover:border-zinc-600 hover:bg-zinc-800'
                  }`}
                >
                  <span>GitHub</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              <div
                className={`pt-6 mt-6 border-t flex flex-wrap items-center gap-y-2 gap-x-6 text-xs font-mono ${
                  isLightMode
                    ? 'border-zinc-200 text-zinc-600'
                    : 'border-zinc-800/80 text-zinc-400'
                }`}
              >
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="inline-flex items-center gap-1.5 hover:underline"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{PERSONAL_INFO.email}</span>
                </a>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{PERSONAL_INFO.location}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs">
          <div className="space-y-1">
            <div
              className={`font-display font-bold text-sm ${
                isLightMode ? 'text-zinc-900' : 'text-zinc-100'
              }`}
            >
              {PERSONAL_INFO.name}
            </div>
            <div className={isLightMode ? 'text-zinc-600' : 'text-zinc-400'}>
              Integrated M.Tech Computer Science • IIPS DAVV
            </div>
            <div
              className={`font-mono tabular-nums ${
                isLightMode ? 'text-zinc-500' : 'text-zinc-500'
              }`}
            >
              © 2026 Ansh Sharma
            </div>
          </div>

          <div
            className={`flex items-center gap-3 font-medium ${
              isLightMode ? 'text-zinc-700' : 'text-zinc-300'
            }`}
          >
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline focus-visible:outline-2 focus-visible:outline-cyan-400 rounded-sm"
            >
              GitHub
            </a>
            <span aria-hidden="true" className="text-zinc-600">
              |
            </span>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline focus-visible:outline-2 focus-visible:outline-cyan-400 rounded-sm"
            >
              LinkedIn
            </a>
            <span aria-hidden="true" className="text-zinc-600">
              |
            </span>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:underline focus-visible:outline-2 focus-visible:outline-cyan-400 rounded-sm"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};
