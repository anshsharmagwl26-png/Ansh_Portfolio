/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { ExperienceAndCredentials } from './components/ExperienceAndCredentials';
import { GitHubAndContact } from './components/GitHubAndContact';

const SECTION_IDS = [
  'home',
  'about',
  'projects',
  'skills',
  'experience',
  'achievements',
  'certifications',
  'github',
  'contact',
];

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isLightMode, setIsLightMode] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      for (let i = SECTION_IDS.length - 1; i >= 0; i--) {
        const section = document.getElementById(SECTION_IDS[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(SECTION_IDS[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`min-h-screen transition-colors duration-150 ${
        isLightMode ? 'bg-zinc-50 text-zinc-900' : 'bg-[#090A0F] text-zinc-100'
      }`}
    >
      <Navbar
        activeSection={activeSection}
        isLightMode={isLightMode}
        onToggleTheme={() => setIsLightMode((prev) => !prev)}
      />

      <main>
        <Hero isLightMode={isLightMode} />
        <About isLightMode={isLightMode} />
        <Projects isLightMode={isLightMode} />
        <Skills isLightMode={isLightMode} />
        <ExperienceAndCredentials isLightMode={isLightMode} />
        <GitHubAndContact isLightMode={isLightMode} />
      </main>
    </div>
  );
}

