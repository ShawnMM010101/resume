import React from 'react';
import wengweng from '../assets/wengweng.pdf'
import profile from '../assets/profile.jpg'
import chatgpt from '../assets/chatgpt.png'
import claudeai from '../assets/claudeai.png'
import grokai from '../assets/grok.png'
import rlang from '../assets/R.png'
import clang from '../assets/cpp.png'
import cpp from '../assets/cpp.png'
import { FaCss3, FaHtml5, FaPython, FaGithub, FaWikipediaW, FaYoutube, FaGlobe } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { VscDebugAll, VscVscode } from "react-icons/vsc";
import { DiVim } from "react-icons/di";
import { MdInsertDriveFile } from "react-icons/md";
import { IoBookSharp } from "react-icons/io5";
import { SiJupyter, SiPytorch, SiTensorflow, SiReact, SiVite, SiDjango, SiLaravel, SiScikitlearn, SiTailwindcss, SiNodedotjs, SiMariadbfoundation, SiNextdotjs, SiTypescript, SiGraphql, SiRust, SiTauri, SiSqlite, SiWebrtc, SiGo, SiRedis, SiDocker, SiKubernetes, SiW3Schools } from 'react-icons/si'

const MINI = 'shadow-[0_1px_2px_rgba(0,0,0,.25),0_5px_8px_-3px_rgba(40,25,10,.45)]'
const MINI_TILTS = ['-rotate-2', 'rotate-1', 'rotate-2', '-rotate-1', 'rotate-0']
const TECH_ICONS = { 'Jupyter Notebook': SiJupyter, 'Vim': DiVim, 'VSCode': VscVscode , 'pytorch': SiPytorch, 'TensorFlow': SiTensorflow, 'testing': VscDebugAll, 'rlang': rlang, 'clanguage': clang, 'cpp': cpp, 'Html': FaHtml5, 'Python': FaPython, 'Github': FaGithub, 'React': SiReact, 'Tailwind': SiTailwindcss, Django: SiDjango, MariaDB: SiMariadbfoundation, 'Scikit Learn': SiScikitlearn, Laravel: SiLaravel, 'Vite': SiVite, 'Node.js': SiNodedotjs, 'Next.js': SiNextdotjs, TypeScript: SiTypescript, GraphQL: SiGraphql, Rust: SiRust, Tauri: SiTauri, SQLite: SiSqlite, WebRTC: SiWebrtc, Go: SiGo, Redis: SiRedis, Docker: SiDocker, Kubernetes: SiKubernetes, 'CSS': FaCss3, 'JS': IoLogoJavascript }
const TOOLS = ['React', 'Tailwind', 'Django', 'MariaDB', 'Scikit Learn', 'Laravel', 'Vite', 'Node.js', 'TensorFlow', 'Scikit Learn', 'VSCode', 'Vim', 'Jupyter Notebook']
const AI = { 'Any Sources From Internet': FaGlobe, 'Youtube': FaYoutube, 'ChatGPT': chatgpt, 'ClaudeAI': claudeai, 'GrokAI': grokai, 'W3School': SiW3Schools, 'Wikipedia': FaWikipediaW, 'Docs and PDF Files': MdInsertDriveFile, 'Online and Physical Books': IoBookSharp }
const AITOOLS = ['Any Sources From Internet', 'ChatGPT', 'Youtube', 'ClaudeAI', 'GrokAI', 'W3School', 'Wikipedia', 'Docs and PDF Files', 'Online and Physical Books']

const BADGE_CLASSES = 'inline-flex items-center justify-center gap-2 h-10 min-w-10 px-3 border-[3px] border-black bg-white text-black font-bold text-sm shadow-[3px_3px_0_#000]'
const CARD = 'border-4 border-black shadow-[8px_8px_0_#000]'
const BTN = 'inline-block border-4 border-black font-bold px-6 py-3 shadow-[5px_5px_0_#000] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[7px_7px_0_#000] active:translate-x-1 active:translate-y-1 active:shadow-none'

function Note({ as: Tag = 'div', color = 'bg-[#FFEF7A]', tilt = '', pin = true, className = '', children }) {
  return (
    <Tag className={`note ${color} ${tilt} ${className} transition-transform duration-300 hover:rotate-0 hover:-translate-y-1`}>
      {pin && <span aria-hidden="true" className="pin" />}
      {children}
    </Tag>
  )
}
function IconView({ name, className = 'h-4 w-4' }) {
  const entry = name && Object.hasOwn(TECH_ICONS, name) ? TECH_ICONS[name] : null
  if (!entry) return null
  if (typeof entry === 'string') {
    return <img src={entry} alt="" className={`${className} object-contain`} aria-hidden="true" />
  }
  const Icon = entry
  return <Icon className={className} aria-hidden="true" />
}

export function TechIcon({ name, showLabel = false }) {
  const hasIcon = Object.hasOwn(TECH_ICONS, name)
  return (
    <span role="img" aria-label={name} title={name} className={BADGE_CLASSES}>
      <IconView name={name} />
      {(showLabel || !hasIcon) && <span>{name}</span>}
    </span>
  )
}
export function AIIcon({ name, showLabel = false }) {
  const icon = Object.hasOwn(AI, name) ? AI[name] : null
  const isImage = typeof icon === 'string'
  const Icon = isImage ? null : icon
  return (
    <span role="img" aria-label={name} title={name} className={BADGE_CLASSES}>
      {isImage && <img src={icon} alt="" className="h-5 w-5 object-contain" aria-hidden="true" />}
      {Icon && <Icon className="h-4 w-4" aria-hidden="true" />}
      {(showLabel || !Icon) && <span>{name}</span>}
    </span>
  )
}

const STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Space+Grotesk:wght@400;500;700&display=swap');
.nb { font-family: 'Space Grotesk', system-ui, sans-serif; }
.nb-display { font-family: 'Archivo Black', 'Space Grotesk', sans-serif; text-transform: uppercase; letter-spacing: -0.02em; }
.nb a:focus-visible { outline: 4px solid #000; outline-offset: 4px; }
.nb ::selection { background: #000; color: #FFD60A; }
`

const SKILL_GROUPS = [
  {
    category: 'Frontend', color: 'bg-[#FFE98A]', skills: [
      { name: 'React JSX', icon: 'React' },
      { name: 'HTML', icon: 'Html' },
      { name: 'CSS', icon: 'CSS' },
      { name: 'Tailwind CSS', icon: 'Tailwind' },
      { name: 'JavaScript', icon: 'JS' },
    ]
  },
  {
    category: 'Backend', color: 'bg-[#FFC4D3]', skills: [
      { name: 'Node.js', icon: 'Node.js' },
      { name: 'Python', icon: 'Python' },
      { name: 'MariaDB', icon: 'MariaDB' },
      { name: 'Django', icon: 'Django' },
    ]
  },
  {
    category: 'Tools', color: 'bg-[#B9DAFF]', skills: [
      { name: 'Git/GitHub', icon: 'Github' },
      { name: 'Testing', icon: 'testing' },
      { name: 'Scikit Learn', icon: 'Scikit Learn' },
    ]
  },
  {
    category: 'Other languages', color: 'bg-[#C6EDB0]', skills: [
      { name: 'C++', note: 'still practicing', icon: 'cpp' },
      { name: 'C', note: 'still practicing', icon: 'clanguage' },
      { name: 'R', icon: 'rlang' },
    ]
  },
]

const EXPERIENCE = [
  {
    role: 'Full Stack Developer',
    company: 'Capstone Project',
    location: 'Arellano University',
    title: 'Rigginie: E-commerce persona-driven PC component recommendation system with proximity store mapping and optimization using Random Forest',
    tech: ['React', 'Django', 'MariaDB', 'Scikit Learn'],
    color: 'bg-[#FFD60A]',
    achievements: [
      'Built and maintained the full stack: React for the frontend, Django for the backend, Python for machine learning.',
      'Handled database management, data migration, testing and debugging, and trained the distance model with scikit-learn.',
      'Built a PC builder with a PC calculator that measures how far the user is from PC retailers.',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'Self Project',
    title: 'Anpan: Tourist spots of Japan',
    tech: ['React', 'Node.js'],
    color: 'bg-[#B8F04A]',
    achievements: [
      'Built and maintained the site with React and Node.js.',
      'Lets foreign visitors discover, book and tour tourist spots in Japan.',
    ],
  },
]

const PROJECTS = [
  {
    title: 'Rigginie',
    description: 'E-commerce persona-driven PC component recommendation system with proximity store mapping and optimization using Random Forest.',
    tech: ['React', 'Tailwind', 'Django', 'MariaDB', 'Scikit Learn'],
    link: '#',
    color: 'bg-[#FF6B9D]',
    tilt: '-rotate-1',
  },
  {
    title: 'Anpan',
    description: 'Tourist spots, culture and travel guidance about Japan, made for foreign visitors.',
    tech: ['React', 'CSS', 'JS', 'Node.js'],
    color: 'bg-[#4D8BFF]',
    tilt: 'rotate-1',
  },
  {
    title: 'LasFilipinas',
    description: 'A site about the Philippines: its politics and cultures.',
    tech: ['Vite', 'Tailwind', 'Laravel'],
    color: 'bg-[#B8F04A]',
    tilt: '-rotate-1',
  },
]

const EDUCATION = [
  {
    title: 'Bachelor of Science in Information Technology',
    institution: 'Arellano University',
    period: '2023 – Present',
    details: 'Computer/Information Technology Administration and Management, 4th year',
    color: 'bg-[#FFD60A]',
  },
  {
    title: 'Information and Communications Technology (ICT)',
    institution: 'Arellano University',
    period: '2021 – 2023',
    color: 'bg-white',
  },
]

function Title({ children, color = 'bg-[#FFD60A]', tilt = '-rotate-1' }) {
  return (
    <h2 className={`nb-display inline-block text-4xl sm:text-5xl md:text-7xl leading-none px-5 py-3 mb-12 ${CARD} ${color} ${tilt}`}>
      {children}
    </h2>
  )
}

function Block({ id, bg = '', children }) {
  return (
    <section id={id} className={`${bg} border-b-4 border-black px-5 md:px-10 py-16 md:py-24 scroll-mt-16`}>
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  )
}

function Resume() {
  return (
    <div className="nb min-h-screen bg-[#FFF8E7] text-black antialiased">
      <style>{STYLES}</style>

      {/* NAV */}
      <nav className="sticky top-0 z-50 bg-white border-b-4 border-black">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-5 md:px-10 h-16">
          <a href="#top" className="nb-display text-xl">Resume</a>
          <div className="flex items-center gap-2 md:gap-3 font-bold text-sm">
            {[['About', '#about'], ['Projects', '#projects'], ['Skills', '#skills']].map(([label, href]) => (
              <a key={label} href={href} className="hidden sm:block px-3 py-1.5 border-[3px] border-transparent hover:border-black hover:bg-[#FFD60A]">
                {label}
              </a>
            ))}
            <a href={wengweng} className="px-4 py-1.5 border-[3px] border-black bg-[#FF6B9D] shadow-[3px_3px_0_#000] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all">
              View My Resume
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header id="top" className="border-b-4 border-black px-5 md:px-10 py-14 md:py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 md:gap-8 items-center">
          <div className="md:col-span-8">
            <h1 className={`nb-display bg-[#FFD60A] ${CARD} p-5 md:p-8 text-[clamp(3rem,10vw,8.5rem)] leading-[0.9] -rotate-1`}>
              Shawn Michael M. Mayagma
            </h1>
            <p className={`inline-block mt-8 ml-2 md:ml-10 bg-white ${CARD} px-5 py-3 text-lg md:text-2xl font-bold rotate-1`}>
             Expanding and Explorer Knowledge of Technologies. 4th-year IT student.
            </p>
            <div className="flex flex-wrap gap-4 mt-10">
              <a href="#projects" className={`${BTN} bg-[#4D8BFF]`}>View projects</a>
              <a href={wengweng} className={`${BTN} bg-white`}>View My Resume</a>
              <a
                href="https://github.com/ShawnMM010101"
                aria-label="GitHub"
                className={`${BTN} bg-[#B8F04A] !px-4 flex items-center`}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" /></svg>
              </a>
            </div>
          </div>

          <div className="md:col-span-4 flex justify-center md:justify-end">
            <div className="relative w-56 md:w-full max-w-xs rotate-3">
              <div className={`absolute inset-0 translate-x-4 translate-y-4 bg-[#FF6B9D] border-4 border-black`} />
              <img
                src={profile}
                alt="Shawn Michael M. Mayagma"
                className="relative w-full aspect-[3/4] object-cover object-center border-4 border-black bg-white"
              />
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* ABOUT */}
        <Block id="about" bg="bg-[#4D8BFF]">
          <Title color="bg-white">About me</Title>
          <div className={`bg-green-500 ${CARD} p-6 md:p-10 grid md:grid-cols-3 gap-8 text-lg leading-relaxed`}>
            <p>I am passionate about expanding my knowledge and learning more in the ever-evolving world of technology and programming.</p>
            <p>I am also eager to take on multiple tasks, manage my time effectively, and continuously improve my skills through my experiences.</p>
            <p>I strive to become more adaptable, responsible, and capable of handling challenges while growing both personally and professionally.</p>
          </div>
        </Block>

        {/* PROJECTS */}
        <Block id="projects">
          <Title color="bg-[#FF6B9D]" tilt="rotate-1">Projects</Title>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {PROJECTS.map((project) => (
              <article key={project.title} className={`flex flex-col ${project.color} ${CARD} ${project.tilt} p-6 transition-transform hover:rotate-0 hover:-translate-y-1`}>
                <h3 className="nb-display text-3xl md:text-4xl mb-4">{project.title}</h3>
                <p className="text-lg leading-snug mb-6 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => <TechIcon key={t} name={t} />)}
                </div>
                {/*{project.link && (
                  <a href={project.link} className={`${BTN} bg-white self-start`}>View project</a>
                )}*/}
              </article>
            ))}
          </div>
        </Block>

        {/* EXPERIENCE */}
        <Block id="experience" bg="bg-white">
          <Title>Experience</Title>
          <div className="space-y-12">
            {EXPERIENCE.map((job) => (
              <article key={job.title} className={`${job.color} ${CARD} p-6 md:p-10`}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-5">
                  <h3 className="nb-display text-2xl md:text-4xl">{job.role}</h3>
                  <span className="self-start bg-black text-white font-bold px-3 py-1">
                    {job.company}{job.location && `, ${job.location}`}
                  </span>
                </div>
                <p className="text-xl font-bold leading-snug max-w-3xl mb-6">{job.title}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {job.tech.map((t) => <TechIcon key={t} name={t} />)}
                </div>
                <ul className="space-y-3 text-lg max-w-3xl">
                  {job.achievements.map((a, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-2 w-3 h-3 bg-black flex-shrink-0" />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Block>

        {/* SKILLS */}
        <Block id="skills">
          <Title tilt="rotate-1">Tech stack</Title>
          <div className="grid md:grid-cols-2 gap-10">
            {SKILL_GROUPS.map((group, gi) => (
              <Note
                key={group.category}
                color={group.color}
                tilt={gi % 2 ? 'rotate-1' : '-rotate-1'}
                className="p-6 pt-9" >
                <h3 className="sn-hand text-4xl leading-none mb-5">{group.category}</h3>
                <ul className="flex flex-wrap gap-3">
                  {group.skills.map((skill, si) => (
                    <li
                      key={skill.name}
                      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-[2px] bg-white/90 text-lg ${MINI} ${MINI_TILTS[(gi + si) % MINI_TILTS.length]}`}
                    >
                      <IconView name={skill.icon} className="h-5 w-5" />
                      <span>{skill.name}</span>
                      {skill.note && <span className="text-sm text-[#D64545]">({skill.note})</span>}
                    </li>
                  ))}
                </ul>
              </Note>
            ))}
          </div>
        </Block>

        {/* TOOLS + AI */}
        <Block id="tools" bg="bg-[#FFD60A]">
          <div className="grid md:grid-cols-2 gap-10">
            <div className={`bg-white ${CARD} p-6 md:p-8`}>
              <h2 className="nb-display text-3xl md:text-4xl mb-6">Tools &amp; technologies</h2>
              <div className="flex flex-wrap gap-3">
                {TOOLS.map((name) => <TechIcon key={name} name={name} showLabel />)}
              </div>
            </div>
            <div id="aitools" className={`bg-[#00008B] ${CARD} p-6 md:p-8`}>
              <h2 className="nb-display text-3xl md:text-4xl mb-6">AI tools &amp; Sources</h2>
              <div className="flex flex-wrap gap-3">
                {AITOOLS.map((name) => <AIIcon key={name} name={name} showLabel />)}
              </div>
            </div>
          </div>
        </Block>

        {/* EDUCATION */}
        <Block id="education">
          <Title color="bg-[#4D8BFF]">Education</Title>
          <div className="grid md:grid-cols-2 gap-10">
            {EDUCATION.map((item) => (
              <article key={item.title} className={`${item.color} ${CARD} p-6`}>
                <span className="inline-block bg-black text-white font-bold px-3 py-1 mb-4">{item.period}</span>
                <h3 className="nb-display text-2xl leading-tight">{item.title}</h3>
                <p className="text-lg font-bold mt-3">{item.institution}</p>
                {item.details && <p className="text-lg mt-1">{item.details}</p>}
              </article>
            ))}
          </div>
        </Block>
      </main>

      {/* CONTACT */}
      <footer id="contact" className="bg-[#4D8BFF] px-5 md:px-10 py-20 md:py-28">
        <div className={`max-w-6xl mx-auto bg-white ${CARD} p-8 md:p-14`}>
          <h2 className="nb-display text-[clamp(2.5rem,8vw,6.5rem)] leading-[0.9] mb-6">
            Let&rsquo;s build something together
          </h2>
          <p className="text-xl max-w-xl mb-8 font-medium">
            I&rsquo;m open to new projects, creative ideas, and opportunities to be part of your vision.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="mailto:recipient@://:shawnmichaelmoraniasmayagma03.com" className={`${BTN} bg-[#FFD60A]`}>Send an email</a>
            <a href="#projects" className={`${BTN} bg-[#FF6B9D]`}>See my work</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Resume;