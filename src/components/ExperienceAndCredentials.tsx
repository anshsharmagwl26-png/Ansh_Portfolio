import React, { useState } from 'react';
import {
  EXPERIENCES,
  ACHIEVEMENTS,
  CERTIFICATIONS,
  TECHNICAL_ACTIVITIES,
  CertificationItem,
} from '../data/portfolioData';
import { ArrowUpRight, X, Eye } from 'lucide-react';

interface SectionsProps {
  isLightMode: boolean;
}

export const ExperienceAndCredentials: React.FC<SectionsProps> = ({ isLightMode }) => {
  const [activeCertificate, setActiveCertificate] = useState<CertificationItem | null>(null);

  return (
    <>
      {/* EXPERIENCE SECTION */}
      <section
        id="experience"
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
              04. Roles & Internships
            </p>
            <h2
              className={`font-display text-2xl sm:text-3xl font-bold tracking-tight ${
                isLightMode ? 'text-zinc-900' : 'text-zinc-100'
              }`}
            >
              Experience
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {EXPERIENCES.map((exp) => (
              <div
                key={exp.id}
                className={`rounded-2xl border p-6 sm:p-7 flex flex-col justify-between ${
                  isLightMode
                    ? 'bg-white border-zinc-200/90 shadow-sm'
                    : 'bg-[#11131C] border-zinc-800/90'
                }`}
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-zinc-800/60">
                    <div className="text-xs font-mono">
                      <span className={isLightMode ? 'text-cyan-700 font-bold' : 'text-cyan-400 font-bold'}>
                        {exp.number}
                      </span>
                      <span aria-hidden="true" className="mx-2 text-zinc-500">
                        ·
                      </span>
                      <span className={isLightMode ? 'text-zinc-700 font-semibold' : 'text-zinc-300 font-semibold'}>
                        {exp.organization}
                      </span>
                    </div>
                    <div
                      className={`text-xs font-mono tabular-nums ${
                        isLightMode ? 'text-zinc-500' : 'text-zinc-400'
                      }`}
                    >
                      {exp.period} · {exp.locationType}
                    </div>
                  </div>

                  <h3
                    className={`font-display text-xl font-bold tracking-tight mb-1 ${
                      isLightMode ? 'text-zinc-900' : 'text-zinc-100'
                    }`}
                  >
                    {exp.role}
                  </h3>

                  {exp.programContext && (
                    <p
                      className={`text-xs font-mono mb-3 ${
                        isLightMode ? 'text-zinc-600' : 'text-zinc-400'
                      }`}
                    >
                      {exp.programContext}
                    </p>
                  )}

                  <p
                    className={`text-sm leading-relaxed mt-3 mb-5 ${
                      isLightMode ? 'text-zinc-700' : 'text-zinc-300'
                    }`}
                  >
                    {exp.description}
                  </p>

                  <ul className="space-y-2 text-xs">
                    {exp.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span
                          className={`font-mono select-none ${
                            isLightMode ? 'text-cyan-700' : 'text-cyan-400'
                          }`}
                        >
                          —
                        </span>
                        <span className={isLightMode ? 'text-zinc-600' : 'text-zinc-400'}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {exp.projectLiveUrl && exp.projectLiveLabel && (
                    <div className="pt-4 mt-4">
                      <a
                        href={exp.projectLiveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1.5 text-xs font-mono font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-cyan-400 rounded-sm ${
                          isLightMode
                            ? 'text-cyan-700 hover:text-cyan-900'
                            : 'text-cyan-400 hover:text-cyan-300'
                        }`}
                      >
                        <span>{exp.projectLiveLabel}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}
                </div>

                {/* Subtle non-copyrighted architectural motif banner */}
                <div
                  className={`mt-6 pt-4 border-t flex items-center justify-between text-xs font-mono ${
                    isLightMode ? 'border-zinc-200 text-zinc-500' : 'border-zinc-800/70 text-zinc-400'
                  }`}
                >
                  {exp.visualType === 'techfest' ? (
                    <>
                      <span>Science, Technology & Campus Outreach</span>
                      <span>IIT Bombay Techfest Network</span>
                    </>
                  ) : (
                    <>
                      <span>Applied Data Analytics & AI Internship</span>
                      <span>BharatCares · IBM SkillsBuild</span>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS SECTION */}
      <section
        id="achievements"
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
              05. Milestones & Cohorts
            </p>
            <h2
              className={`font-display text-2xl sm:text-3xl font-bold tracking-tight ${
                isLightMode ? 'text-zinc-900' : 'text-zinc-100'
              }`}
            >
              Achievements
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ACHIEVEMENTS.map((ach) => (
              <div
                key={ach.id}
                className={`rounded-2xl border p-6 flex flex-col justify-between ${
                  isLightMode
                    ? 'bg-white border-zinc-200/90 shadow-sm'
                    : 'bg-[#11131C] border-zinc-800/90'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono mb-3">
                    <span className={isLightMode ? 'text-cyan-700 font-bold' : 'text-cyan-400 font-bold'}>
                      {ach.number}
                    </span>
                    <span className={isLightMode ? 'text-zinc-500' : 'text-zinc-400'}>
                      {ach.meta}
                    </span>
                  </div>

                  <h3
                    className={`font-display text-lg font-bold tracking-tight mb-1 ${
                      isLightMode ? 'text-zinc-900' : 'text-zinc-100'
                    }`}
                  >
                    {ach.title}
                  </h3>

                  <p
                    className={`text-xs font-semibold mb-3 ${
                      isLightMode ? 'text-cyan-800' : 'text-cyan-300'
                    }`}
                  >
                    {ach.subtitle}
                  </p>

                  <p
                    className={`text-xs sm:text-sm leading-relaxed ${
                      isLightMode ? 'text-zinc-600' : 'text-zinc-400'
                    }`}
                  >
                    {ach.description}
                  </p>
                </div>

                {ach.projectLiveUrl && ach.projectLiveLabel && (
                  <div className="pt-4 mt-4 border-t border-zinc-800/50">
                    <a
                      href={ach.projectLiveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 text-xs font-mono font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-cyan-400 rounded-sm ${
                        isLightMode
                          ? 'text-cyan-700 hover:text-cyan-900'
                          : 'text-cyan-400 hover:text-cyan-300'
                      }`}
                    >
                      <span>{ach.projectLiveLabel}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS & TECHNICAL ACTIVITIES SECTION */}
      <section
        id="certifications"
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
              06. Verified Credentials
            </p>
            <h2
              className={`font-display text-2xl sm:text-3xl font-bold tracking-tight ${
                isLightMode ? 'text-zinc-900' : 'text-zinc-100'
              }`}
            >
              Certifications
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.id}
                className={`rounded-2xl border p-6 flex flex-col justify-between ${
                  isLightMode
                    ? 'bg-white border-zinc-200/90 shadow-sm'
                    : 'bg-[#11131C] border-zinc-800/90'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs font-mono mb-2">
                    <span
                      className={`font-semibold ${
                        isLightMode ? 'text-cyan-700' : 'text-cyan-400'
                      }`}
                    >
                      {cert.issuer}
                    </span>
                    {cert.issuedDate && (
                      <span
                        className={`tabular-nums ${
                          isLightMode ? 'text-zinc-500' : 'text-zinc-400'
                        }`}
                      >
                        Issued {cert.issuedDate}
                      </span>
                    )}
                  </div>

                  <h3
                    className={`text-base font-bold leading-snug mb-3 ${
                      isLightMode ? 'text-zinc-900' : 'text-zinc-100'
                    }`}
                  >
                    {cert.title}
                  </h3>

                  <div
                    className={`space-y-1 text-xs font-mono ${
                      isLightMode ? 'text-zinc-600' : 'text-zinc-400'
                    }`}
                  >
                    {cert.credentialId && (
                      <div className="break-all">Credential ID: {cert.credentialId}</div>
                    )}
                    {cert.expiresDate && <div>Expires: {cert.expiresDate}</div>}
                  </div>
                </div>

                {(cert.verificationUrl || cert.hasCertificatePreview) && (
                  <div className="pt-4 mt-4 border-t border-zinc-800/50 flex flex-wrap items-center gap-4">
                    {cert.verificationUrl && (
                      <a
                        href={cert.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1.5 text-xs font-mono font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-cyan-400 rounded-sm ${
                          isLightMode
                            ? 'text-cyan-700 hover:text-cyan-900'
                            : 'text-cyan-400 hover:text-cyan-300'
                        }`}
                      >
                        <span>View Credential</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}

                    {cert.hasCertificatePreview && (
                      <button
                        type="button"
                        onClick={() => setActiveCertificate(cert)}
                        className={`inline-flex items-center gap-1.5 text-xs font-mono font-semibold transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-cyan-400 rounded-sm ${
                          isLightMode
                            ? 'text-cyan-700 hover:text-cyan-900'
                            : 'text-cyan-400 hover:text-cyan-300'
                        }`}
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>View Certificate</span>
                      </button>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Certificate Lightbox Modal for CODE IIT Madras */}
          {activeCertificate && activeCertificate.certificateDetails && (
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="certificate-modal-title"
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xs"
              onClick={() => setActiveCertificate(null)}
            >
              <div
                className="relative w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl border border-amber-500/30 bg-[#FFFDF8] text-stone-900 p-6 sm:p-10"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={() => setActiveCertificate(null)}
                  aria-label="Close certificate preview"
                  className="absolute top-4 right-4 w-9 h-9 rounded-lg flex items-center justify-center bg-stone-900/10 text-stone-800 hover:bg-stone-900/20 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Double ornamental border faithful to the IITM CODE certificate */}
                <div className="border-2 border-amber-700/40 rounded-xl p-5 sm:p-8 text-center space-y-5 bg-[radial-gradient(#e5d5b5_0.5px,transparent_0.5px)] [background-size:16px_16px]">
                  <div className="space-y-1">
                    <p className="text-sm sm:text-lg font-bold tracking-wide text-[#6A261F]">
                      {activeCertificate.certificateDetails.authority}
                    </p>
                    <p className="text-xs sm:text-base font-bold text-[#6A261F]">
                      {activeCertificate.certificateDetails.institute}
                    </p>
                  </div>

                  <div className="inline-block px-6 py-1.5 rounded-md bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-white shadow-xs">
                    <span
                      id="certificate-modal-title"
                      className="font-display text-lg sm:text-xl font-bold tracking-wide"
                    >
                      Certificate of Completion
                    </span>
                  </div>

                  <div className="space-y-2 py-2">
                    <p className="text-xs sm:text-sm text-stone-600">This is to certify that</p>
                    <p className="text-lg sm:text-2xl font-bold tracking-wide text-stone-950">
                      {activeCertificate.certificateDetails.recipient}
                    </p>
                    <p className="text-xs sm:text-sm text-stone-600">a student at</p>
                    <p className="text-xs sm:text-sm font-bold text-stone-800">
                      {activeCertificate.certificateDetails.school}
                    </p>
                    <p className="text-xs sm:text-sm text-stone-600 pt-1">
                      has successfully completed the{' '}
                      <span className="font-bold text-stone-900">
                        {activeCertificate.certificateDetails.duration}
                      </span>{' '}
                      in
                    </p>
                    <p className="text-sm sm:text-lg font-bold tracking-wide text-stone-950 pt-1">
                      {activeCertificate.certificateDetails.course}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-amber-800/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
                    <div className="font-bold tracking-wider text-amber-800">
                      {activeCertificate.certificateDetails.program}
                    </div>
                    <div className="font-mono font-bold text-stone-800">
                      {activeCertificate.certificateDetails.date}
                    </div>
                    <div className="text-center sm:text-right">
                      <div className="font-bold text-stone-900">
                        {activeCertificate.certificateDetails.signatory}
                      </div>
                      <div className="text-[11px] text-stone-600">
                        {activeCertificate.certificateDetails.signatoryTitle}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Technical Activities & Learning Subsection */}
          <div className="mt-16 pt-12 border-t border-zinc-800/60">
            <h3
              className={`font-display text-xl font-bold tracking-tight mb-6 ${
                isLightMode ? 'text-zinc-900' : 'text-zinc-100'
              }`}
            >
              Technical Activities & Learning
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {TECHNICAL_ACTIVITIES.map((act) => (
                <div
                  key={act.id}
                  className={`rounded-xl border p-5 ${
                    isLightMode
                      ? 'bg-zinc-100/70 border-zinc-200'
                      : 'bg-[#0E1018] border-zinc-800/80'
                  }`}
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1.5">
                    <h4
                      className={`text-sm font-bold ${
                        isLightMode ? 'text-zinc-900' : 'text-zinc-100'
                      }`}
                    >
                      {act.title}
                    </h4>
                    {act.organizer && (
                      <span
                        className={`text-xs font-mono ${
                          isLightMode ? 'text-zinc-500' : 'text-zinc-400'
                        }`}
                      >
                        {act.organizer}
                      </span>
                    )}
                  </div>
                  <p
                    className={`text-xs sm:text-sm leading-relaxed ${
                      isLightMode ? 'text-zinc-600' : 'text-zinc-400'
                    }`}
                  >
                    {act.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
