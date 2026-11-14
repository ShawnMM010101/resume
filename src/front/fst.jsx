import React, { useEffect, useState } from 'react';
import wengweng from '../assets/wengweng.pdf'
import profile from '../assets/profile.jpg'
import chatgpt from '../assets/chatgpt.png'
import claudeai from '../assets/claudeai.png'
import grokai from '../assets/grok.png'
import { SiReact,SiVite,SiDjango,SiLaravel,SiScikitlearn,SiTailwindcss,SiNodedotjs,SiMariadbfoundation,SiNextdotjs,SiTypescript,SiGraphql,SiRust,SiTauri,SiSqlite,SiWebrtc,SiGo,SiRedis,SiDocker,SiKubernetes,} from 'react-icons/si'

const TECH_ICONS = { React: SiReact,TailwindCSS: SiTailwindcss,Django: SiDjango,MariaDB: SiMariadbfoundation,'Scikit Learn': SiScikitlearn,Laravel: SiLaravel,Vite: SiVite,'Node.js': SiNodedotjs,'Next.js': SiNextdotjs,TypeScript: SiTypescript,GraphQL: SiGraphql,Rust: SiRust,Tauri: SiTauri,SQLite: SiSqlite,WebRTC: SiWebrtc,Go: SiGo,Redis: SiRedis,Docker: SiDocker,Kubernetes: SiKubernetes,}
const AI = { 'ChatGPT': chatgpt, 'ClaudeAI': claudeai, 'GrokAI': grokai }
const TOOLS = [ 'React','TailwindCSS','Django','MariaDB','Scikit Learn','Laravel','Vite','Node.js',]
const AITOOLS = [ 'ChatGPT', 'ClaudeAI', 'GrokAI' ]

const BADGE_CLASSES = 'inline-flex items-center justify-center gap-1.5 h-8 min-w-8 px-2 rounded-full border bg-white/80 dark:bg-slate-700/80 text-slate-600 dark:text-slate-300 border-slate-200/50 dark:border-slate-600/50'

export function TechIcon({ name, showLabel = false }) {
  const Icon = Object.hasOwn(TECH_ICONS, name) ? TECH_ICONS[name] : null

  return (
    <span role="img" aria-label={name} title={name} className={BADGE_CLASSES}>
      {Icon && <Icon className="h-4 w-4" aria-hidden="true" />}
      {(showLabel || !Icon) && <span className="text-xs font-medium">{name}</span>}
    </span>
  )
}
export function AIIcon({ name, showLabel = false }) {
  const icon = Object.hasOwn(AI, name) ? AI[name] : null
  const isImage = typeof icon === 'string'
  const Icon = isImage ? null : icon
  return (
    <span role="img" aria-label={name} title={name} className={BADGE_CLASSES}>
      {isImage && ( <img src={icon} className="h-4 w-4 size-5" aria-hidden="true" />)}
      {Icon && <Icon className="h-4 w-4 size-36" aria-hidden="true" />}
      {(showLabel || !Icon) && <span className="text-xs font-medium">{name}</span>}
    </span>
  )
}

function Resume() {
  const [visibleSections, setVisibleSections] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const sections = document.querySelectorAll('.resume-section');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const sectionStyle = (id) => ({
    opacity: visibleSections[id] ? 1 : 0,
    transform: visibleSections[id] ? 'translateY(0)' : 'translateY(30px)',
    transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
      </div>

      <main className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <header
          id="header"
          className="resume-section text-center mb-16"
          style={sectionStyle('header')}
        >
          <img
            src={profile}
            alt="Shawn Michael M. Mayagma"
            className="w-32 h-40 object-cover object-center rounded-xl mx-auto mb-6"
          />

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-4 animate-fade-in-up">
            Shawn Michael M. Mayagma
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <a
              href={wengweng}
              className="px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-medium hover:bg-slate-700 dark:hover:bg-slate-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              PDF Resume
            </a>
            <a
              href="#projects"
              className="px-6 py-3 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm text-slate-900 dark:text-white rounded-xl font-medium border border-slate-200/50 dark:border-slate-700/50 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-all duration-300 hover:shadow-lg"
            >
              View Projects
            </a>
          </div>

          <div className="flex items-center justify-center gap-6 mt-10 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <a href="https://github.com/ShawnMM010101" className="w-10 h-10 rounded-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-300 hover:scale-110" aria-label="GitHub">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" /></svg>
            </a>
          </div>
        </header>

        <section
          id="about"
          className="resume-section mb-16"
          style={sectionStyle('about')}
        >
          <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-200/50 dark:border-slate-700/50 p-8 sm:p-10 shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
              About Me
            </h2>
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-4">
                I am passionate about expanding my knowledge and learning more about the ever-evolving world of technology and programming.
              </p>
              <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-4">
                I am also eager to take on multiple taks, manage my time effectivly, and continously improve my skills through my expriences.
              </p>
              <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                I strive to become more adaptable, responsible, and capable of handling challenges while gaining new knowledge and developing both personally and professionally.
              </p>
            </div>
          </div>
        </section>

        <section
          id="skills"
          className="resume-section mb-16"
          style={sectionStyle('skills')}
        >
          <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-200/50 dark:border-slate-700/50 p-8 sm:p-10 shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
              <span className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
              Technical Skills
            </h2>

            <div className="space-y-8">
              {[
                {
                  category: 'Frontend',
                  icon: '🎨',
                  skills: [
                    { name: 'React JSX', level: 65 },
                    { name: 'HTML', level: 90 },
                    { name: 'CSS', level: 80 },
                    { name: 'Tailwind CSS', level: 95 },
                    { name: 'JAVACRIPT', level: 60 },
                  ]
                },
                {
                  category: 'Backend',
                  icon: '⚙️',
                  skills: [
                    { name: 'Node.js', level: 90 },
                    { name: 'Python', level: 70 },
                    { name: 'MariaDB', level: 88 },
                    { name: 'MongoDB', level: 10 },
                    { name: 'GraphQL', level: 85 },
                    { name: 'DJANGO', level: 70 },
                  ]
                },
                {
                  category: 'DevOps & Tools',
                  icon: '☁️',
                  skills: [
                    { name: 'Git/GitHub', level: 95 },
                    { name: 'CI/CD', level: 88 },
                    { name: 'Testing', level: 85 },
                  ]
                },
                {
                  category: 'Other Programming Languages',
                  icon: '📖',
                  skills: [
                    { name: 'C++', level: 40, note: '(Still Learning)' },
                    { name: 'C Language', level: 40, note: '(Still Learning)' },
                    { name: 'R Language', level: 4 },
                  ]
                }
              ].map((group, groupIndex) => (
                <div key={group.category} className="animate-slide-in-right" style={{ animationDelay: `${groupIndex * 100}ms` }}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{group.icon}</span>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{group.category}</h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {group.skills.map((skill, skillIndex) => (
                      <div
                        key={skill.name}
                        className="group"
                        style={{ animationDelay: `${skillIndex * 50}ms` }}
                      >
                        <div className="flex justify-between mb-2">
                          <span className="font-medium text-slate-700 dark:text-slate-200">
                            {skill.name}
                            {skill.note && (
                              <span className="ml-2 text-xs font-normal text-slate-500 dark:text-slate-400">{skill.note}</span>
                            )}
                          </span>
                          <span className="text-slate-500 dark:text-slate-400 text-sm">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="experience"
          className="resume-section mb-16"
          style={sectionStyle('experience')}
        >
          <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-200/50 dark:border-slate-700/50 p-8 sm:p-10 shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
              <span className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
              Experience
            </h2>

            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500" />

              {[
                {
                  role: 'Full Stack Developer',
                  company: 'Capstone Project',
                  location: 'Arellano University',
                  title: 'Rigginie: E commerce Persona-Driven PC Component Recommendation System with Proximity Store Mapping and Optimization Using Random Forest',
                  tech: ['React', 'Django', 'MariaDB', 'Scikit Learn'],
                  achievements: [
                    'Build and Maintain Full Stack using React JS for Frontend, Django for Backend and Python for Machine Learning',
                    'Handled database management, data migration, testing, debugging, train of machine learning distance using scikit learn',
                    'Built this software is to Build PC Gaming with PC Calculator and Calculate How many distance of user location to PC Retailers',
                  ]
                },
                {
                  role: 'Full Stack Developer',
                  company: 'Self Project',
                  title: 'Anpan: Tourist spot of Japan',
                  tech: ['React', 'Node.js'],
                  achievements: [
                    'Build and Maintain Using ReactJS and NodeJS ',
                    'Build this software is for foreigners from other country to tour in Japan using website and booking and tour tourist spots in Japan',
                  ]
                }
              ].map((project, index) => (
                <div
                  key={project.title}
                  className="relative pl-12 pb-12 last:pb-0 animate-slide-in-left"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="absolute left-0 top-1 w-8 h-8 bg-white dark:bg-slate-800 border-2 border-blue-500 rounded-full flex items-center justify-center z-10">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-6 border border-slate-200/50 dark:border-slate-700/50 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">{project.role}</h3>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 mb-2">
                      {project.company}
                      {project.location && ` • ${project.location}`}
                    </p>
                    <p className="text-slate-950 dark:text-slate-300 mb-4">{project.title}</p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tech.map((tech) => (
                        <TechIcon key={tech} name={tech} />
                      ))}
                    </div>
                    <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                      {project.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 pl-2">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="resume-section mb-16"
          style={sectionStyle('projects')}
        >
          <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-200/50 dark:border-slate-700/50 p-8 sm:p-10 shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
              <span className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
              Featured Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Rigginie',
                  description: 'E commerce Persona-Driven PC Component Recommendation System with Proximity Store Mapping and Optimization Using Random Forest',
                  tech: ['React', 'TailwindCSS', 'Django', 'MariaDB', 'Scikit Learn'],
                  link: '#',
                  color: 'from-blue-500 to-cyan-500'
                },
              ].map((project, index) => (
                <article
                  key={project.title}
                  className="group relative overflow-hidden rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 p-6 transition-all duration-500 hover:border-transparent hover:shadow-2xl animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{project.title}</h3>
                    <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <TechIcon key={tech} name={tech} />
                      ))}
                    </div>
                    <a
                      href={project.link}
                      className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors group-hover:gap-3"
                    >
                      View Project
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="tools"
          className="resume-section mb-16"
          style={sectionStyle('tools')}
        >
          <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-200/50 dark:border-slate-700/50 p-8 sm:p-10 shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
              <span className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
              Tools Technologies
            </h2>
            <div className="flex flex-wrap gap-3">
              {TOOLS.map((name) => (
                <TechIcon key={name} name={name} showLabel />
              ))}
            </div>
          </div>
        </section>

        <section id='aitools' className='resume-section mb-16' style={sectionStyle('aitools')}>
          <div className='bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-200/50 dark:border-slate-700/50 p-8 sm:p-10 shadow-x1'>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
              <span className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
              Tools Technologies
            </h2>
            <div className="flex flex-wrap gap-3 ">
              {AITOOLS.map((name) => (
                <AIIcon key={name} name={name} showLabel />
              ))}
            </div>
          </div>
        </section>

        <section id="education"className="resume-section mb-16"style={sectionStyle('education')}>
          <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-200/50 dark:border-slate-700/50 p-8 sm:p-10 shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
              <span className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
              Education
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  type: 'education',
                  title: 'Bachelor of Science Information Technology',
                  institution: 'Arellano University',
                  period: '2023 - Present',
                  details: 'Computer/Information Technology Administration and Management – 4th Year'
                },
                {
                  type: 'education',
                  title: 'Information and Communications Technology (ICT)',
                  institution: 'Arellano University',
                  period: '2021 - 2023',
                },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 p-5 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200/50 dark:border-slate-700/50 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300 animate-slide-in-right"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${item.type === 'education'
                      ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400'
                      : 'bg-purple-500/10 text-purple-600 dark:text-purple-400'
                    }`}>
                    {item.type === 'education' ? (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                    ) : (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    )}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">{item.institution}</p>
                    <p className="text-slate-500 dark:text-slate-500 text-sm mt-1">{item.period}</p>
                    {item.details && (
                      <p className="text-slate-600 dark:text-slate-300 text-sm mt-2">{item.details}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer
          id="contact"
          className="resume-section text-center"
          style={sectionStyle('contact')}
        >
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-10 sm:p-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10" />

            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 animate-fade-in-up">
                Let's Build Something Amazing
              </h2>
              <p className="text-white/90 text-lg sm:text-xl max-w-2xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                <a
                  href="mailto:shawn@example.com"
                  className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-slate-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  Start a Conversation
                </a>
                <a
                  href="#projects"
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  See My Work
                </a>
              </div>
            </div>
          </div>
        </footer>
      </main>

      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-300 dark:border-slate-600 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-slate-400 dark:bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
        </div>
      </div>
    </div>
  );
}

export default Resume;