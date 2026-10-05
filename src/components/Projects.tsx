import React, { useState } from 'react';
import { ArrowUpRight, ChevronDown, ChevronUp } from 'lucide-react';
import { PROJECTS, ProjectItem } from '../data/portfolioData';

interface ProjectsProps {
  isLightMode: boolean;
}

const AnalyticsMockup: React.FC<{ isLightMode: boolean }> = ({ isLightMode }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'clusters'>('overview');

  return (
    <div
      className={`rounded-xl border p-4 sm:p-5 select-none ${
        isLightMode
          ? 'bg-zinc-50 border-zinc-200 text-zinc-800'
          : 'bg-[#0B0D14] border-zinc-800/90 text-zinc-200'
      }`}
    >
      {/* Top bar of dashboard mockup */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-zinc-800/60">
        <div className="flex items-center gap-2">
          <span
            className={`text-xs font-mono font-semibold ${
              isLightMode ? 'text-cyan-700' : 'text-cyan-400'
            }`}
          >
            Streamlit App
          </span>
          <span aria-hidden="true" className="text-zinc-500">
            ·
          </span>
          <span className="text-xs font-mono text-zinc-400">8-Page Analytics Interface</span>
        </div>

        <div
          className={`flex items-center gap-1 p-0.5 rounded-lg border ${
            isLightMode ? 'bg-zinc-200/70 border-zinc-300' : 'bg-zinc-900 border-zinc-800'
          }`}
        >
          <button
            type="button"
            onClick={() => setActiveTab('overview')}
            className={`px-2.5 py-1 text-[11px] font-medium rounded-md transition-colors cursor-pointer ${
              activeTab === 'overview'
                ? isLightMode
                  ? 'bg-white text-zinc-900 shadow-xs'
                  : 'bg-zinc-800 text-cyan-300'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            EDA & KPIs
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('clusters')}
            className={`px-2.5 py-1 text-[11px] font-medium rounded-md transition-colors cursor-pointer ${
              activeTab === 'clusters'
                ? isLightMode
                  ? 'bg-white text-zinc-900 shadow-xs'
                  : 'bg-zinc-800 text-cyan-300'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            K-Means Segments
          </button>
        </div>
      </div>

      {/* KPI strip (only verified 300-student dataset size + qualitative dimensions) */}
      <div className="grid grid-cols-3 gap-2.5 mb-4">
        <div
          className={`p-2.5 rounded-lg border ${
            isLightMode ? 'bg-white border-zinc-200' : 'bg-[#121520] border-zinc-800/80'
          }`}
        >
          <div className="text-[11px] text-zinc-400 font-mono">Cohort Dataset</div>
          <div className="text-base font-bold font-mono tabular-nums mt-0.5">300 Students</div>
        </div>
        <div
          className={`p-2.5 rounded-lg border ${
            isLightMode ? 'bg-white border-zinc-200' : 'bg-[#121520] border-zinc-800/80'
          }`}
        >
          <div className="text-[11px] text-zinc-400 font-mono">Core Signals</div>
          <div className="text-xs font-semibold mt-1">GPA · Attendance</div>
        </div>
        <div
          className={`p-2.5 rounded-lg border ${
            isLightMode ? 'bg-white border-zinc-200' : 'bg-[#121520] border-zinc-800/80'
          }`}
        >
          <div className="text-[11px] text-zinc-400 font-mono">Methodology</div>
          <div className="text-xs font-semibold mt-1">EDA + K-Means</div>
        </div>
      </div>

      {activeTab === 'overview' ? (
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs text-zinc-400">
            <span>Attendance & Academic Performance Distribution</span>
            <span className="font-mono text-[11px]">Interactive Visual View</span>
          </div>
          {/* Stylized bar chart visual */}
          <div className="h-28 flex items-end gap-2 pt-4 px-2">
            {[42, 58, 74, 88, 67, 92, 79, 64, 85, 71].map((height, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                <div
                  className={`w-full rounded-t transition-all duration-200 ${
                    i % 3 === 0
                      ? 'bg-cyan-400/80'
                      : i % 2 === 0
                        ? 'bg-cyan-500/45'
                        : 'bg-zinc-700'
                  }`}
                  style={{ height: `${height}%` }}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-between text-[11px] font-mono text-zinc-400 pt-1 border-t border-zinc-800/50">
            <span>Attendance Bands</span>
            <span>Previous GPA Correlation</span>
            <span>Support Recommendations</span>
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs text-zinc-400">
            <span>K-Means Student Engagement Segmentation</span>
            <span className="font-mono text-[11px]">Cluster Profiles</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
            <div
              className={`p-2.5 rounded-lg border ${
                isLightMode ? 'bg-white border-zinc-200' : 'bg-[#121520] border-zinc-800'
              }`}
            >
              <div className="text-xs font-semibold text-cyan-400">High Engagement</div>
              <p className="text-[11px] text-zinc-400 mt-1">
                Consistent attendance and strong previous GPA progression.
              </p>
            </div>
            <div
              className={`p-2.5 rounded-lg border ${
                isLightMode ? 'bg-white border-zinc-200' : 'bg-[#121520] border-zinc-800'
              }`}
            >
              <div className="text-xs font-semibold text-zinc-200">Moderate / Variable</div>
              <p className="text-[11px] text-zinc-400 mt-1">
                Balanced performance benefiting from targeted study-hour support.
              </p>
            </div>
            <div
              className={`p-2.5 rounded-lg border ${
                isLightMode ? 'bg-white border-zinc-200' : 'bg-[#121520] border-zinc-800'
              }`}
            >
              <div className="text-xs font-semibold text-amber-400">Priority Support</div>
              <p className="text-[11px] text-zinc-400 mt-1">
                Lower attendance or GPA signals flagged for early mentoring.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const AgritechMockup: React.FC<{ isLightMode: boolean }> = ({ isLightMode }) => {
  const [selectedPriority, setSelectedPriority] = useState<'HIGH' | 'MODERATE' | 'LOW' | 'UNCERTAIN'>(
    'HIGH'
  );

  const priorityDetails = {
    HIGH: {
      action: 'Prioritize field inspection and expert validation.',
      signals: 'Elevated rainfall trend + poor drainage + rhizome development stage',
    },
    MODERATE: {
      action: 'Inspect field and consider preventive management measures.',
      signals: 'Moderate soil moisture + warm humid weather context',
    },
    LOW: {
      action: 'Continue routine field monitoring.',
      signals: 'Good drainage + stable weather and normal moisture levels',
    },
    UNCERTAIN: {
      action: 'Refer for closer inspection or expert consultation due to missing context.',
      signals: 'Incomplete field or environmental observations supplied',
    },
  };

  return (
    <div
      className={`rounded-xl border p-4 sm:p-5 select-none ${
        isLightMode
          ? 'bg-zinc-50 border-zinc-200 text-zinc-800'
          : 'bg-[#0B0D14] border-zinc-800/90 text-zinc-200'
      }`}
    >
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-zinc-800/60">
        <div className="flex items-center gap-2">
          <span
            className={`text-xs font-mono font-semibold ${
              isLightMode ? 'text-cyan-700' : 'text-cyan-400'
            }`}
          >
            FastAPI + Rule Engine
          </span>
          <span aria-hidden="true" className="text-zinc-500">
            ·
          </span>
          <span className="text-xs font-mono text-zinc-400">Decision-Support Prototype</span>
        </div>
        <span className="text-[11px] font-mono text-zinc-400">SIH26131</span>
      </div>

      {/* Multi-signal fusion inputs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4 text-xs">
        <div
          className={`p-2 rounded-lg border ${
            isLightMode ? 'bg-white border-zinc-200' : 'bg-[#121520] border-zinc-800/80'
          }`}
        >
          <div className="text-[10px] font-mono text-zinc-400">Weather Context</div>
          <div className="font-medium mt-0.5">Temp · Humidity · Rain</div>
        </div>
        <div
          className={`p-2 rounded-lg border ${
            isLightMode ? 'bg-white border-zinc-200' : 'bg-[#121520] border-zinc-800/80'
          }`}
        >
          <div className="text-[10px] font-mono text-zinc-400">Field Conditions</div>
          <div className="font-medium mt-0.5">Moisture · Drainage</div>
        </div>
        <div
          className={`p-2 rounded-lg border ${
            isLightMode ? 'bg-white border-zinc-200' : 'bg-[#121520] border-zinc-800/80'
          }`}
        >
          <div className="text-[10px] font-mono text-zinc-400">Crop Context</div>
          <div className="font-medium mt-0.5">Growth Stage · Variety</div>
        </div>
        <div
          className={`p-2 rounded-lg border ${
            isLightMode ? 'bg-white border-zinc-200' : 'bg-[#121520] border-zinc-800/80'
          }`}
        >
          <div className="text-[10px] font-mono text-zinc-400">Local History</div>
          <div className="font-medium mt-0.5">Nearby Case Trends</div>
        </div>
      </div>

      {/* Interactive Priority Selector */}
      <div className="space-y-2.5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs font-mono text-zinc-400">Explainable Risk Priority Output:</span>
          <div className="flex items-center gap-1">
            {(['HIGH', 'MODERATE', 'LOW', 'UNCERTAIN'] as const).map((level) => (
              <button
                key={level}
                type="button"
                onClick={() => setSelectedPriority(level)}
                className={`px-2 py-1 rounded text-[11px] font-mono font-semibold transition-colors cursor-pointer ${
                  selectedPriority === level
                    ? isLightMode
                      ? 'bg-zinc-900 text-white'
                      : 'bg-cyan-400 text-zinc-950'
                    : isLightMode
                      ? 'bg-zinc-200 text-zinc-700 hover:bg-zinc-300'
                      : 'bg-zinc-900 text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        <div
          className={`p-3 rounded-lg border text-xs space-y-1.5 ${
            isLightMode ? 'bg-white border-zinc-200' : 'bg-[#121520] border-zinc-800'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="font-mono text-[11px] text-zinc-400">Priority Level:</span>
            <span className="font-mono font-bold text-cyan-400">{selectedPriority} PRIORITY</span>
          </div>
          <div>
            <span className="text-zinc-400">Contributing Signals: </span>
            <span>{priorityDetails[selectedPriority].signals}</span>
          </div>
          <div>
            <span className="text-zinc-400">Recommended Next Step: </span>
            <span className="font-medium">{priorityDetails[selectedPriority].action}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const FoundryMockup: React.FC<{ isLightMode: boolean }> = ({ isLightMode }) => {
  return (
    <div
      className={`rounded-xl border p-4 sm:p-5 select-none ${
        isLightMode
          ? 'bg-zinc-50 border-zinc-200 text-zinc-800'
          : 'bg-[#0B0D14] border-zinc-800/90 text-zinc-200'
      }`}
    >
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-zinc-800/60">
        <div className="flex items-center gap-2">
          <span
            className={`text-xs font-mono font-semibold ${
              isLightMode ? 'text-cyan-700' : 'text-cyan-400'
            }`}
          >
            Microsoft AI Foundry
          </span>
          <span aria-hidden="true" className="text-zinc-500">
            ·
          </span>
          <span className="text-xs font-mono text-zinc-400">Applied Skills Workflow</span>
        </div>
        <span className="text-[11px] font-mono text-zinc-400">ID: 817B07C88383D4D2</span>
      </div>

      {/* Pipeline architecture diagram */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
        <div
          className={`p-3 rounded-lg border ${
            isLightMode ? 'bg-white border-zinc-200' : 'bg-[#121520] border-zinc-800'
          }`}
        >
          <div className="font-mono text-[11px] text-cyan-400 mb-1">01. Model Deployment</div>
          <div className="font-semibold mb-1">Foundry Project Setup</div>
          <p className="text-[11px] text-zinc-400 leading-relaxed">
            Provisioned cloud AI resources and deployed foundation model endpoints.
          </p>
        </div>

        <div
          className={`p-3 rounded-lg border ${
            isLightMode ? 'bg-white border-zinc-200' : 'bg-[#121520] border-zinc-800'
          }`}
        >
          <div className="font-mono text-[11px] text-cyan-400 mb-1">02. Code Interpreter</div>
          <div className="font-semibold mb-1">Analytical Execution</div>
          <p className="text-[11px] text-zinc-400 leading-relaxed">
            Enabled Python Code Interpreter tooling for AI-assisted data processing.
          </p>
        </div>

        <div
          className={`p-3 rounded-lg border ${
            isLightMode ? 'bg-white border-zinc-200' : 'bg-[#121520] border-zinc-800'
          }`}
        >
          <div className="font-mono text-[11px] text-cyan-400 mb-1">03. Solution Testing</div>
          <div className="font-semibold mb-1">Workflow Verification</div>
          <p className="text-[11px] text-zinc-400 leading-relaxed">
            Evaluated agent responses and analytical outputs in the deployed environment.
          </p>
        </div>
      </div>
    </div>
  );
};

const ProjectCard: React.FC<{ project: ProjectItem; isLightMode: boolean }> = ({
  project,
  isLightMode,
}) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <article
      className={`rounded-2xl border p-6 sm:p-8 transition-transform duration-150 hover:-translate-y-0.5 ${
        isLightMode
          ? 'bg-white border-zinc-200/90 shadow-sm'
          : 'bg-[#11131C] border-zinc-800/90 hover:border-zinc-700/90'
      }`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left column: Details */}
        <div className="lg:col-span-6 space-y-4">
          {/* Editorial Number + Context Kicker (unboxed text, no pill) */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
            <span className={isLightMode ? 'text-cyan-700 font-bold' : 'text-cyan-400 font-bold'}>
              PROJECT {project.number}
            </span>
            <span aria-hidden="true" className="text-zinc-500">
              ·
            </span>
            <span className={isLightMode ? 'text-zinc-600' : 'text-zinc-400'}>
              {project.subtitle}
            </span>
          </div>

          <h3
            className={`font-display text-2xl sm:text-3xl font-bold tracking-tight ${
              isLightMode ? 'text-zinc-900' : 'text-zinc-50'
            }`}
          >
            {project.title}
          </h3>

          <p
            className={`text-xs font-medium ${
              isLightMode ? 'text-zinc-600' : 'text-zinc-400'
            }`}
          >
            {project.context}
          </p>

          {project.achievement && (
            <p
              className={`text-xs font-semibold ${
                isLightMode ? 'text-cyan-800' : 'text-cyan-300'
              }`}
            >
              Achievement: {project.achievement}
            </p>
          )}

          <p
            className={`text-sm sm:text-base leading-relaxed ${
              isLightMode ? 'text-zinc-700' : 'text-zinc-300'
            }`}
          >
            {project.description}
          </p>

          {project.extendedDescription && (
            <p
              className={`text-sm leading-relaxed ${
                isLightMode ? 'text-zinc-600' : 'text-zinc-400'
              }`}
            >
              {project.extendedDescription}
            </p>
          )}

          {/* Core Workflow if applicable (Turmeric Shield) */}
          {project.workflow && (
            <div className="pt-1">
              <div className="text-xs font-mono text-zinc-400 mb-1.5">Core Workflow:</div>
              <div
                className={`text-xs font-mono font-medium ${
                  isLightMode ? 'text-zinc-800' : 'text-cyan-300'
                }`}
              >
                {project.workflow.join(' → ')}
              </div>
            </div>
          )}

          {/* Technologies rendered as clean unboxed typographic list */}
          <div className="pt-2">
            <div className="text-xs font-mono text-zinc-400 mb-1">Technologies:</div>
            <div
              className={`text-xs font-mono ${
                isLightMode ? 'text-zinc-800' : 'text-zinc-200'
              }`}
            >
              {project.technologies.join(' · ')}
            </div>
          </div>

          {/* Expandable Implementation Details */}
          <div className="pt-2">
            <button
              type="button"
              onClick={() => setExpanded((prev) => !prev)}
              className={`inline-flex items-center gap-1.5 text-xs font-mono font-medium cursor-pointer transition-colors focus-visible:outline-2 focus-visible:outline-cyan-400 rounded-sm ${
                isLightMode
                  ? 'text-cyan-700 hover:text-cyan-900'
                  : 'text-cyan-400 hover:text-cyan-300'
              }`}
              aria-expanded={expanded}
            >
              <span>{expanded ? 'Hide implementation details' : 'Show implementation details'}</span>
              {expanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>

            {expanded && (
              <div
                className={`mt-3 pt-3 border-t space-y-2 ${
                  isLightMode ? 'border-zinc-200' : 'border-zinc-800/80'
                }`}
              >
                <ul className="space-y-1.5 text-xs sm:text-sm">
                  {project.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span
                        className={`font-mono text-xs mt-0.5 select-none ${
                          isLightMode ? 'text-cyan-700' : 'text-cyan-400'
                        }`}
                      >
                        —
                      </span>
                      <span className={isLightMode ? 'text-zinc-700' : 'text-zinc-300'}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                {project.disclaimer && (
                  <p
                    className={`text-xs italic pt-2 ${
                      isLightMode ? 'text-zinc-600' : 'text-zinc-400'
                    }`}
                  >
                    Note: {project.disclaimer}
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-wrap items-center gap-3">
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-cyan-400 ${
                  isLightMode
                    ? 'bg-zinc-900 text-white hover:bg-zinc-800'
                    : 'bg-cyan-400 text-zinc-950 hover:bg-cyan-300'
                }`}
              >
                <span>Live Demo</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}

            {project.primaryGithubUrl && (
              <a
                href={project.primaryGithubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold border transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-cyan-400 ${
                  isLightMode
                    ? 'border-zinc-300 bg-white text-zinc-800 hover:bg-zinc-100'
                    : 'border-zinc-700 bg-zinc-900 text-zinc-100 hover:border-zinc-600 hover:bg-zinc-800'
                }`}
              >
                <span>GitHub Repository</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}

            {project.secondaryRepoUrl && project.secondaryRepoLabel && (
              <a
                href={project.secondaryRepoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1 px-3 py-2 rounded-lg text-xs font-medium border transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-cyan-400 ${
                  isLightMode
                    ? 'border-zinc-200 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100'
                    : 'border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700'
                }`}
              >
                <span>{project.secondaryRepoLabel}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}

            {project.credentialUrl && project.credentialLabel && (
              <a
                href={project.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-cyan-400 ${
                  isLightMode
                    ? 'bg-zinc-900 text-white hover:bg-zinc-800'
                    : 'bg-cyan-400 text-zinc-950 hover:bg-cyan-300'
                }`}
              >
                <span>{project.credentialLabel}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>

        {/* Right column: Domain-Authentic Interactive Visual Mockup */}
        <div className="lg:col-span-6 w-full">
          {project.visualType === 'analytics' && <AnalyticsMockup isLightMode={isLightMode} />}
          {project.visualType === 'agritech' && <AgritechMockup isLightMode={isLightMode} />}
          {project.visualType === 'foundry' && <FoundryMockup isLightMode={isLightMode} />}
        </div>
      </div>
    </article>
  );
};

export const Projects: React.FC<ProjectsProps> = ({ isLightMode }) => {
  return (
    <section
      id="projects"
      className={`py-20 sm:py-24 border-b ${
        isLightMode ? 'border-zinc-200' : 'border-zinc-800/60'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <p
              className={`text-xs font-mono tracking-wider mb-2 ${
                isLightMode ? 'text-cyan-700' : 'text-cyan-400'
              }`}
            >
              02. Practical Engineering & Applications
            </p>
            <h2
              className={`font-display text-2xl sm:text-4xl font-bold tracking-tight ${
                isLightMode ? 'text-zinc-900' : 'text-zinc-100'
              }`}
            >
              Selected Projects
            </h2>
          </div>
          <p
            className={`text-sm max-w-md ${
              isLightMode ? 'text-zinc-600' : 'text-zinc-400'
            }`}
          >
            Hands-on software, data analytics dashboards, hackathon decision-support prototypes, and cloud AI deployments.
          </p>
        </div>

        <div className="space-y-8">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} isLightMode={isLightMode} />
          ))}
        </div>
      </div>
    </section>
  );
};
