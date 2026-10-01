import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Data
import { portfolioData } from '../data/portfolio';

// Sections
import Hero from '../sections/Hero';
import About from '../sections/About';
import Journey from '../sections/Journey';
import Skills from '../sections/Skills';
import Projects from '../sections/Projects';
import Experience from '../sections/Experience';
import Education from '../sections/Education';
import Achievements from '../sections/Achievements';
import Certificates from '../sections/Certificates';
import Contact from '../sections/Contact';
import Blog from '../sections/Blog';
import BeyondCode from '../sections/BeyondCode';
import CustomCursor from '../components/CustomCursor';

export default function Home() {
  const [loading, setLoading] = useState(true);

  const profile = {
    ...portfolioData.personal,
    resumeUrl: "/resume/Thulasi_G_T_Resume.pdf",
    photoUrl: "/images/profile/profile.jpg"
  };

  const journey = portfolioData.journey;
  
  const skills = [];
  portfolioData.skills.forEach(group => {
    group.items.forEach(item => {
      skills.push({ _id: item, name: item, category: group.category });
    });
  });

  const projects = portfolioData.projects.map(p => ({
    _id: p.id,
    name: p.name,
    category: p.type,
    role: p.role,
    shortDesc: p.problem + " " + p.approach,
    myRole: p.myRole,
    technologies: p.technologies,
    githubUrl: p.github,
    liveUrl: p.live,
    imageUrl: `/images/projects/${p.id}.png` // Because we saved generated images as .png
  }));

  const experience = portfolioData.experience.map(e => ({
    _id: e.id,
    role: e.role,
    company: e.organization,
    duration: e.period,
    description: e.description,
    technologies: e.technologies
  }));

  const education = portfolioData.education.map(e => ({
    _id: e.id,
    degree: e.degree,
    institution: e.institution,
    period: e.period,
    details: e.details.join("\n")
  }));

  const achievements = portfolioData.achievements.map(a => ({
    _id: a.id,
    title: a.title,
    project: a.project,
    description: a.description
  }));

  const certificates = portfolioData.certificates.map(c => ({
    _id: c.id,
    title: c.name,
    issuer: c.issuer,
    date: c.date,
    credentialUrl: c.credentialUrl,
    imageUrl: c.image
  }));

  const blog = portfolioData.blog;
  const art = portfolioData.art;

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center text-white">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-12 h-12 border-t-2 border-[#960018] rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  // HERO -> ABOUT -> JOURNEY -> FEATURED PROJECTS -> EXPERIENCE -> SKILLS -> ACHIEVEMENTS -> CERTIFICATES -> BEYOND CODE / ART -> BLOG / NOTES -> EDUCATION -> RESUME/CONTACT -> FOOTER
  return (
    <div className="min-h-screen bg-noise bg-[#050505] text-[#fcfcfc] font-sans selection:bg-[#960018] selection:text-white overflow-x-hidden cursor-none">
      <CustomCursor />
      <Navbar profile={profile} />
      
      <main>
        <Hero profile={profile} />
        <About profile={profile} />
        <Journey timeline={journey} />
        <Projects projects={projects} />
        <Experience experience={experience} />
        <Skills skills={skills} />
        <Achievements achievements={achievements} />
        <Certificates certificates={certificates} />
        <BeyondCode art={art} />
        <Blog posts={blog} />
        <Education education={education} />
        <Contact profile={profile} />
      </main>
      
      <Footer profile={profile} />
    </div>
  );
}
