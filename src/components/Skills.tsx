import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

interface SkillsProps {
  isLightMode: boolean;
}

export const Skills: React.FC<SkillsProps> = ({ isLightMode }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredCategories =
    selectedCategory === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((cat) => cat.id === selectedCategory);

  return (
    <section
      id="skills"
      className={`py-20 sm:py-24 border-b ${
        isLightMode ? 'border-zinc-200' : 'border-zinc-800/60'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <p
              className={`text-xs font-mono tracking-wider mb-2 ${
                isLightMode ? 'text-cyan-700' : 'text-cyan-400'
              }`}
            >
              03. Core Stack & Tools
            </p>
            <h2
              className={`font-display text-2xl sm:text-3xl font-bold tracking-tight ${
                isLightMode ? 'text-zinc-900' : 'text-zinc-100'
              }`}
            >
              Technical Skills
            </h2>
          </div>

          {/* Interactive Category Filter Control */}
          <div
            role="tablist"
            aria-label="Filter skills by category"
            className={`inline-flex flex-wrap items-center gap-1 p-1 rounded-xl border ${
              isLightMode ? 'bg-zinc-100 border-zinc-200' : 'bg-[#11131C] border-zinc-800'
            }`}
          >
            <button
              type="button"
              role="tab"
              aria-selected={selectedCategory === 'all'}
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === 'all'
                  ? isLightMode
                    ? 'bg-white text-zinc-900 shadow-xs font-semibold'
                    : 'bg-cyan-400 text-zinc-950 font-semibold'
                  : isLightMode
                    ? 'text-zinc-600 hover:text-zinc-900'
                    : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              All Domains (12)
            </button>
            {SKILL_CATEGORIES.map((category) => (
              <button
                key={category.id}
                type="button"
                role="tab"
                aria-selected={selectedCategory === category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  selectedCategory === category.id
                    ? isLightMode
                      ? 'bg-white text-zinc-900 shadow-xs font-semibold'
                      : 'bg-cyan-400 text-zinc-950 font-semibold'
                    : isLightMode
                      ? 'text-zinc-600 hover:text-zinc-900'
                      : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {category.category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCategories.map((group) => (
            <div
              key={group.id}
              className={`rounded-2xl border p-6 sm:p-7 transition-colors ${
                isLightMode
                  ? 'bg-white border-zinc-200/90 shadow-sm'
                  : 'bg-[#11131C] border-zinc-800/90'
              }`}
            >
              <div className="flex items-baseline justify-between pb-3 mb-4 border-b border-zinc-800/60">
                <h3
                  className={`font-display text-lg font-bold ${
                    isLightMode ? 'text-zinc-900' : 'text-zinc-100'
                  }`}
                >
                  {group.category}
                </h3>
                <span
                  className={`text-xs font-mono tabular-nums ${
                    isLightMode ? 'text-zinc-500' : 'text-zinc-400'
                  }`}
                >
                  {group.skills.length} {group.skills.length === 1 ? 'skill' : 'skills'}
                </span>
              </div>

              <p
                className={`text-xs mb-5 ${
                  isLightMode ? 'text-zinc-600' : 'text-zinc-400'
                }`}
              >
                {group.description}
              </p>

              <div className="divide-y divide-zinc-800/50">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="py-3 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 group"
                  >
                    <span
                      className={`text-sm font-semibold transition-colors ${
                        isLightMode
                          ? 'text-zinc-900 group-hover:text-cyan-700'
                          : 'text-zinc-100 group-hover:text-cyan-400'
                      }`}
                    >
                      {skill.name}
                    </span>
                    <span
                      className={`text-xs ${
                        isLightMode ? 'text-zinc-600' : 'text-zinc-400'
                      }`}
                    >
                      {skill.context}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
