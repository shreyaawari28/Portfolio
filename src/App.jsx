import { motion as Motion } from 'framer-motion'
import {
  ArrowUpRight,
  BriefcaseBusiness,
  FileText,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  ShieldCheck,
  Workflow,
} from 'lucide-react'
import {
  siApachemaven,
  siCss,
  siFastapi,
  siGit,
  siGithub,
  siHtml5,
  siJavascript,
  siPostgresql,
  siPostman,
  siReact,
  siSpringboot,
} from 'simple-icons'
import profileImage from './assets/profile.jpeg'
import aashaImage from './assets/projects/aasha.png'
import geowatchImage from './assets/projects/geowatch.jpeg'
import gitgoImage from './assets/projects/gitgo.jpg'
import mindmealImage from './assets/projects/mindmeal.jpg'

const navigation = ['About', 'Skills', 'Projects', 'Experience', 'Contact']

const skillGroups = [
  {
    title: 'Languages',
    items: [
      {
        name: 'Java',
        iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
        color: '#f89820',
      },
      { name: 'JavaScript', icon: siJavascript, color: '#f7df1e', textColor: '#111827' },
    ],
  },
  {
    title: 'Frontend',
    items: [
      { name: 'HTML', icon: siHtml5, color: '#e34f26' },
      { name: 'CSS', icon: siCss, color: '#1572b6' },
      { name: 'JavaScript', icon: siJavascript, color: '#f7df1e', textColor: '#111827' },
      { name: 'React', icon: siReact, color: '#61dafb', textColor: '#0f172a' },
    ],
  },
  {
    title: 'Backend & Databases',
    items: [
      { name: 'Spring Boot', icon: siSpringboot, color: '#6db33f' },
      { name: 'PostgreSQL', icon: siPostgresql, color: '#336791' },
      { name: 'FastAPI', icon: siFastapi, color: '#009688' },
    ],
  },
  {
    title: 'Tools & Platforms',
    items: [
      { name: 'Git', icon: siGit, color: '#f05032' },
      { name: 'GitHub', icon: siGithub, color: '#111111' },
      { name: 'Postman', icon: siPostman, color: '#ff6c37' },
      { name: 'Maven', icon: siApachemaven, color: '#c71a36' },
    ],
  },
]

const projects = [
  {
    name: 'GeoWatch',
    description: 'Real-time monitoring dashboard for collaborative system tracking and live data visibility.',
    stack: ['React', 'Spring Boot', 'PostgreSQL', 'WebSockets'],
    image: geowatchImage,
    href: 'https://github.com/shreyaawari28/GeoWatch',
  },
  {
    name: 'AASHA',
    description: 'Full stack progressive web app designed for practical community workflows and resilient access.',
    stack: ['React PWA', 'Spring Boot', 'Python', 'PostgreSQL'],
    image: aashaImage,
    href: 'https://github.com/shreyaawari28/AASHA',
  },
  {
    name: 'GitGo',
    description: 'Developer productivity tooling focused on Git workflows and smoother repository actions.',
    stack: ['TypeScript', 'Node.js', 'VS Code API'],
    image: gitgoImage,
    href: 'https://github.com/shreyaawari28/GitGo',
  },
  {
    name: 'MindMeal',
    description: 'Interactive product experience combining practical recommendations with a lightweight backend.',
    stack: ['FastAPI', 'Python', 'JavaScript'],
    image: mindmealImage,
    href: 'https://github.com/shreyaawari28/Mind-Meal',
  },
]

const timeline = [
  {
    title: 'Technical Head',
    org: 'Computer Students Association',
    description: 'Organized a state level technical quiz competition.',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Council Member',
    org: 'Saraswati Institute of Technology',
    description: 'Supported student council initiatives, planning, and technical event coordination.',
    icon: GraduationCap,
  },
  {
    title: 'Member',
    org: 'TSEC CodeCell',
    description: 'Contributed to coding sessions, collaborative learning, and technical community activities.',
    icon: ShieldCheck,
  },
  {
    title: 'Co-Founder',
    org: 'RuntimeSync',
    description: 'Built a collaborative GitHub organization around shared project development.',
    icon: Workflow,
    href: 'https://github.com/',
  },
]

const contactLinks = [
  {
    label: 'Email',
    value: 'shreyaawari31@gmail.com',
    href: 'mailto:shreyaawari31@gmail.com',
    icon: Mail,
  },
  {
    label: 'GitHub',
    value: 'github.com/shreyaawari28',
    href: 'https://github.com/shreyaawari28',
    icon: Github,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/shreya-awari-',
    href: 'https://www.linkedin.com/in/shreya-awari-/',
    icon: Linkedin,
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

function SkillBadge({ skill }) {
  const textColor = skill.textColor ?? '#e2e8f0'

  return (
    <Motion.button
      type="button"
      whileHover={{ scale: 1.04, y: -3 }}
      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#161b22] px-3.5 py-2 text-sm font-semibold text-primary shadow-[0_10px_30px_rgba(2,6,23,0.35)] transition-shadow duration-200 hover:border-accent/40 hover:shadow-[0_14px_36px_rgba(34,211,238,0.18)]"
    >
      {skill.iconUrl ? (
        <img src={skill.iconUrl} alt="" className="h-4 w-4 shrink-0" />
      ) : (
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-4 w-4 shrink-0"
          fill={skill.color}
        >
          <path d={skill.icon.path} />
        </svg>
      )}
      <span style={{ color: textColor }}>{skill.name}</span>
    </Motion.button>
  )
}

function SectionHeading({ id, eyebrow, title, copy }) {
  return (
    <Motion.div
      id={id}
      className="scroll-mt-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={fadeUp}
    >
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-accent/90">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {copy ? <p className="section-copy mt-4">{copy}</p> : null}
    </Motion.div>
  )
}

function ProjectCard({ project }) {
  return (
    <Motion.article
      variants={fadeUp}
      className="group overflow-hidden rounded-[1.7rem] border border-white/10 bg-[#0f172a] shadow-[0_20px_70px_rgba(2,6,23,0.38)] transition-all duration-300 hover:-translate-y-3 hover:border-accent/60 hover:shadow-[0_28px_90px_rgba(34,211,238,0.18),0_0_0_1px_rgba(20,184,166,0.2)]"
    >
      <div className="relative overflow-hidden border-b border-white/10">
        <img
          src={project.image}
          alt={`${project.name} project preview`}
          className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
        <div className="absolute inset-0 ring-1 ring-inset ring-transparent transition duration-300 group-hover:ring-accent/40" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-primary">{project.name}</h3>
        <p className="mt-3 max-w-md text-sm leading-7 text-secondary/90">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-accent/15 bg-background/70 px-3 py-1.5 text-xs font-medium text-secondary"
            >
              {item}
            </span>
          ))}
        </div>
        <a href={project.href} target="_blank" rel="noreferrer" className="glow-button mt-6 gap-2">
          View Repository
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </Motion.article>
  )
}

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-primary">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 top-8 h-80 w-80 animate-drift rounded-full bg-accent/14 blur-3xl" />
        <div className="absolute right-[-5rem] top-24 h-72 w-72 animate-drift rounded-full bg-accentSecondary/14 blur-3xl [animation-delay:-4s]" />
        <div className="absolute bottom-[-4rem] left-1/3 h-72 w-72 animate-drift rounded-full bg-cyan-400/10 blur-3xl [animation-delay:-8s]" />
        <div className="ambient-grid absolute inset-0 opacity-40" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-6 sm:px-8 lg:px-10">
        <header className="sticky top-4 z-30 mb-10 rounded-full border border-white/10 bg-background/65 px-5 py-4 shadow-[0_12px_40px_rgba(2,6,23,0.35)] backdrop-blur-xl">
          <nav className="flex flex-wrap items-center justify-between gap-4">
            <a href="#home" className="text-lg font-semibold tracking-tight text-primary">
              Developer Portfolio
            </a>
            <div className="flex flex-wrap items-center gap-2 text-sm text-secondary">
              {navigation.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replaceAll(' & ', '-').replaceAll(' ', '-')}`}
                  className="rounded-full px-3 py-2 hover:bg-white/5 hover:text-accent"
                >
                  {item}
                </a>
              ))}
            </div>
          </nav>
        </header>

        <main className="space-y-8">
          <Motion.section
            id="home"
            className="section-shell relative grid gap-12 overflow-hidden px-6 py-10 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-12 lg:py-16"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <div className="pointer-events-none absolute inset-0 bg-hero-glow opacity-90" />
            <Motion.div variants={fadeUp} className="relative max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.26em] text-accent/90">Full-Stack Developer</p>
              <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-primary sm:text-5xl lg:text-6xl">
                Building Practical Software Systems
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-secondary/90">
                Computer Engineering student experienced in building full stack applications and modern web interfaces using Java and JavaScript.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="/resume.pdf" className="glow-button gap-2">
                  <FileText className="h-4 w-4" />
                  Resume
                </a>
                <a href="#projects" className="glow-button gap-2">
                  <Workflow className="h-4 w-4" />
                  Projects
                </a>
                <a
                  href="https://github.com/shreyaawari28"
                  target="_blank"
                  rel="noreferrer"
                  className="glow-button gap-2"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </div>
            </Motion.div>

            <Motion.div variants={fadeUp} className="relative flex justify-center lg:justify-end">
              <div className="absolute h-[320px] w-[320px] animate-float rounded-full bg-accent/15 blur-3xl" />
              <div className="absolute h-[250px] w-[250px] animate-float rounded-full bg-accentSecondary/12 blur-2xl [animation-delay:-2s]" />
              <div className="relative rounded-full border-[3px] border-accent/90 bg-white/[0.03] p-3 shadow-[0_0_60px_rgba(34,211,238,0.24),0_0_0_6px_rgba(20,184,166,0.08)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_85px_rgba(34,211,238,0.34),0_0_0_8px_rgba(20,184,166,0.12)]">
                <img
                  src={profileImage}
                  alt="Developer profile"
                  className="h-[220px] w-[220px] rounded-full object-cover sm:h-[250px] sm:w-[250px]"
                />
              </div>
            </Motion.div>
          </Motion.section>

          <section className="section-shell px-6 py-10 sm:px-10">
            <SectionHeading
              id="about"
              eyebrow="About"
              title="Focused on practical systems, polished UI, and collaborative builds."
              copy="I design and ship full stack projects with an emphasis on maintainable architecture, useful interfaces, and realistic developer workflows."
            />
          </section>

          <section className="section-shell px-6 py-10 sm:px-10">
            <SectionHeading
              id="skills"
              eyebrow="Skills"
              title="GitHub-style technology badges organized by area."
            />
            <Motion.div
              className="mt-8 grid gap-6 lg:grid-cols-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
            >
              {skillGroups.map((group) => (
                <Motion.article
                  key={group.title}
                  variants={fadeUp}
                  className="rounded-[1.6rem] border border-white/10 bg-hero-glow p-6 shadow-[0_18px_60px_rgba(2,6,23,0.35)]"
                >
                  <h3
                    id={group.title.toLowerCase().replaceAll(' & ', '-').replaceAll(' ', '-')}
                    className="text-lg font-semibold text-primary"
                  >
                    {group.title}
                  </h3>
                  <div className="mt-5 flex flex-wrap gap-3">
                    {group.items.map((skill) => (
                      <SkillBadge key={`${group.title}-${skill.name}`} skill={skill} />
                    ))}
                  </div>
                </Motion.article>
              ))}
            </Motion.div>
          </section>

          <section className="section-shell px-6 py-10 sm:px-10">
            <SectionHeading
              id="projects"
              eyebrow="Projects"
              title="Project cards using imported local preview images."
            />
            <Motion.div
              className="mt-8 grid gap-6 md:grid-cols-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={stagger}
            >
              {projects.map((project) => (
                <ProjectCard key={project.name} project={project} />
              ))}
            </Motion.div>
          </section>

          <section className="section-shell px-6 py-10 sm:px-10">
            <SectionHeading
              id="experience"
              eyebrow="Experience"
              title="Roles displayed as a concise timeline with collaborative and leadership work."
            />
            <div className="relative mt-8">
              <div className="absolute left-[1.1rem] top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-accent/60 via-accentSecondary/30 to-transparent md:block" />
              <Motion.div
                className="grid gap-5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.18 }}
                variants={stagger}
              >
                {timeline.map((item) => {
                  const Icon = item.icon

                  return (
                    <Motion.article
                      key={`${item.title}-${item.org}`}
                      variants={{
                        hidden: { opacity: 0, x: -28 },
                        visible: {
                          opacity: 1,
                          x: 0,
                          transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
                        },
                      }}
                      className="relative md:pl-12"
                    >
                      <div className="absolute left-0 top-5 hidden h-9 w-9 items-center justify-center rounded-full border border-accent/30 bg-background text-accent shadow-[0_0_24px_rgba(34,211,238,0.16)] md:flex">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="timeline-card">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="text-lg font-semibold text-primary">
                              {item.title} <span className="text-accent">-</span> {item.org}
                            </p>
                            <p className="mt-3 text-sm leading-7 text-secondary/90">{item.description}</p>
                          </div>
                          <Icon className="h-5 w-5 text-accent/80 md:hidden" />
                        </div>
                        {item.href ? (
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-cyan-300"
                          >
                            RuntimeSync GitHub
                            <ArrowUpRight className="h-4 w-4" />
                          </a>
                        ) : null}
                      </div>
                    </Motion.article>
                  )
                })}
              </Motion.div>
            </div>
          </section>

          <section className="section-shell px-6 py-10 sm:px-10">
            <SectionHeading
              id="contact"
              eyebrow="Contact"
              title="A minimal set of channels for collaboration and opportunities."
            />
            <Motion.div
              className="mt-8 grid gap-4 sm:grid-cols-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
            >
              {contactLinks.map((item) => {
                const Icon = item.icon

                return (
                  <Motion.a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                    variants={fadeUp}
                    className="contact-button group"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-[#050816]/85 text-accent shadow-[0_0_24px_rgba(34,211,238,0.12)]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#083344]">{item.label}</p>
                    <p className="mt-2 text-sm text-[#04111d] group-hover:text-[#022c22]">{item.value}</p>
                  </Motion.a>
                )
              })}
            </Motion.div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default App
