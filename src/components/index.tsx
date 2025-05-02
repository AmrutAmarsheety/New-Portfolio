import React from 'react';
import { Header } from './nav/Header';
import Hero from './hero/Hero';
import { About } from './about/About';
import { Projects } from './projects/Projects';
import { Experience } from './experience/Experience';
import { Contact } from './contact/Contact';
import { Education } from './education/Education';

export const MainContent = () => {
  return (
    <div className="w-full bg-zinc-900">
      {/* <Header /> */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 space-y-32 py-24 text-zinc-100">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </div>
    </div>
  );
};