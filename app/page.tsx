import Image from "next/image";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { ProjectScroll } from "./project-scroll";
import { Experience } from "./experience";
import { Reveal } from "./reveal";

const projects = [
  {
    n: "01",
    title: "Zinab",
    kind: "VOICE AI · AGRICULTURE",
    text: "An AI-powered agricultural information assistant in development, designed to help Ethiopian farmers explore location-specific weather, rainfall, and soil data through a map and voice-based questions.",
    stack: ["Next.js", "TypeScript", "Voice AI"],
    image: "/zinab.png",
    href: "https://github.com/esubaleww/zinab",
  },
  {
    n: "02",
    title: "Innovation & Technology Portal",
    kind: "CIVIC TECHNOLOGY · WEB APP",
    text: "Collaborated on a full-stack information and service management portal for the Amhara National Regional State Innovation and Technology Bureau, covering program applications, service requests, and staff workflows.",
    stack: ["JavaScript", "Client–server architecture", "Workflow management"],
    image: "/itsms.png",
    href: "https://github.com/esubaleww/itsms-project",
  },
  {
    n: "03",
    title: "ChatApp",
    kind: "FULL-STACK · REAL-TIME COMMUNICATION",
    text: "A deployed MERN chat application with real-time messaging, a React interface, and a Node.js and Express backend connected to MongoDB.",
    stack: ["React", "Node.js", "MongoDB"],
    image: "/chatapp.png",
    href: "https://github.com/esubaleww/CHATAPP",
    demoHref: "https://suchatapp.vercel.app/",
  },

  {
    n: "04",
    title: "Church Resources Library",
    kind: "COMMUNITY · WEB APP",
    text: "A resource library for organizing and sharing materials with a church community.",
    stack: ["HTML", "Web"],
    image: "/orthodoxResource.png",
    href: "https://github.com/esubaleww/church_resources_library",
  },
  {
    n: "05",
    title: "E-commerce App",
    kind: "COMMERCE · WEB APP",
    text: "An online shopping experience exploring the core of product browsing and commerce.",
    stack: ["JavaScript", "E-commerce"],
    image: "/ecommerce.png",
    href: "https://github.com/esubaleww/E-COMMERCE-APP",
  },

  {
    n: "06",
    title: "Spam Detection",
    kind: "MACHINE LEARNING · DATA",
    text: "A machine learning project exploring the detection of spam messages.",
    stack: ["Python", "Jupyter"],
    image: "/spamDetection.jpg",
    href: "https://github.com/esubaleww/Spam-Detection-Web-App",
  },
];

const skills = [
  {
    label: "LANGUAGES",
    values: [
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Python", icon: "python" },
      { name: "Java", icon: "java" },
      { name: "C++", icon: "cplusplus" },
      { name: "HTML & CSS", icon: "html5" },
    ],
  },
  {
    label: "FRAMEWORKS",
    values: [
      { name: "React", icon: "react" },
      { name: "Node.js", icon: "nodejs" },
      { name: "Express", icon: "express" },
      { name: "Next.js", icon: "nextjs" },
    ],
  },
  {
    label: "DATA & TOOLS",
    values: [
      { name: "MongoDB", icon: "mongodb" },
      { name: "REST APIs", icon: "postman" },
      { name: "VS Code", icon: "vscode" },
      { name: "Postman", icon: "postman" },
      { name: "Git", icon: "git" },
      { name: "Jupyter", icon: "jupyter" },
    ],
  },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-3 font-mono text-[10px] tracking-[.12em] text-(--muted)">
      <span className="h-px w-5 bg-(--accent)" />
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <main id="home" className="overflow-x-clip bg-(--paper) text-(--ink)">
      <header className="sticky top-0 z-30 flex h-18 items-center justify-between border-b border-(--line) bg-[color-mix(in_srgb,var(--paper)_90%,transparent)] px-[6vw] backdrop-blur-xl">
        <a
          href="#home"
          className="font-display text-[17px] font-bold tracking-tight"
        >
          Esubalew<span className="text-(--accent)">.</span>
        </a>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-8 sm:flex"
        >
          {[
            ["Work", "work"],
            ["Skills", "skills"],
            ["Experience", "experience"],
            ["About", "about"],
            ["Contact", "contact"],
          ].map(([label, id]) => (
            <a
              className="text-xs text-(--muted) transition-colors hover:text-(--accent)"
              href={`#${id}`}
              key={id}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 sm:gap-5">
          <a
            href="/cv.pdf"
            download="Esubalew_Worku_CV.pdf"
            className="inline-flex items-center gap-2 bg-(--accent) px-3 py-2.5 text-[10px] font-bold text-[#171b13] transition-transform hover:-translate-y-0.5 sm:px-4"
          >
            DOWNLOAD CV <ArrowUpRight size={13} />
          </a>
          <ThemeToggle />
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto grid min-h-0 max-w-7xl grid-cols-1 items-center gap-12 px-[7vw] py-20 lg:grid-cols-[1.2fr_.8fr] lg:gap-4 lg:px-20">
        <Reveal>
          <div className="hero-enter relative z-10">
            <Eyebrow>ETHIOPIA · SOFTWARE ENGINEERING STUDENT</Eyebrow>

            <h1 className="mt-8 font-display text-[clamp(4rem,10vw,8.6rem)] font-extrabold leading-[.82] tracking-[-.065em]">
              Esubalew<span className="text-(--accent)">.</span>
            </h1>

            <p className="mt-8 max-w-135 font-display text-[clamp(1.5rem,3.3vw,2.75rem)] font-medium leading-[1.08] tracking-[-.035em]">
              I build useful digital products{" "}
              <span className="text-(--muted)">
                for people and the places they live.
              </span>
            </p>

            <p className="mt-6 max-w-122.5 text-[14px] leading-7 text-(--muted)">
              Full-stack developer working across web, mobile, and voice AI.
              Interested in turning real needs into thoughtful software.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-5">
              <a
                href="#work"
                className="inline-flex items-center gap-4 bg-(--accent) px-5 py-3.5 text-[11px] font-bold text-[#171b13] transition-transform hover:-translate-y-1"
              >
                SEE THE WORK <ArrowDown size={15} />
              </a>

              <a
                href="mailto:esuwo2024@gmail.com"
                className="inline-flex items-center gap-3 border border-(--line) px-5 py-3.5 text-[11px] font-semibold transition-colors hover:border-(--accent)"
              >
                EMAIL ME <ArrowUpRight size={14} />
              </a>
            </div>

            <div className="mt-12 grid max-w-130 grid-cols-3 border-t border-(--line) pt-5">
              <div>
                <strong className="font-display text-3xl">06</strong>
                <p className="mt-1 font-mono text-[9px] tracking-wide text-(--muted)">
                  FEATURED PROJECTS
                </p>
              </div>
              <div>
                <strong className="font-display text-3xl">03</strong>
                <p className="mt-1 font-mono text-[9px] tracking-wide text-(--muted)">
                  LANGUAGES IN ZINAB
                </p>
              </div>
              <div>
                <strong className="font-display text-3xl">∞</strong>
                <p className="mt-1 font-mono text-[9px] tracking-wide text-(--muted)">
                  THINGS TO LEARN
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="hero-enter-delay relative mx-auto aspect-[.82] w-full max-w-97.5 lg:max-w-92.5">
            <div className="absolute -inset-4 translate-x-3 translate-y-3 border border-(--line)" />

            <div className="absolute inset-0 overflow-hidden bg-(--surface)">
              <Image
                src="/profile.png"
                alt="Esubalew"
                fill
                sizes="(max-width: 1024px) 80vw, 370px"
                priority
                className="object-cover object-center grayscale-[.12] transition duration-700 hover:scale-[1.03]"
              />
            </div>

            <span className="absolute -bottom-8 -left-7 bg-(--accent) px-4 py-3 font-mono text-[9px] leading-5 text-[#171b13]">
              BUILDING WITH
              <br />
              CURIOSITY ↗
            </span>

            <span className="absolute -right-7 top-5 font-mono text-[9px] tracking-[.16em] text-(--muted) [writing-mode:vertical-rl]">
              BAHIR DAR · ETHIOPIA
            </span>
          </div>
        </Reveal>
      </section>

      {/* Work */}
      <ProjectScroll projects={projects} />

      {/* Skills */}
      <section
        id="skills"
        className="border-t border-(--line) bg-(--surface) px-[7vw] py-24 lg:px-20"
      >
        <div className="mx-auto grid max-w-280 gap-12 md:grid-cols-[.8fr_1.2fr]">
          <Reveal>
            <div>
              <Eyebrow>( 02 ) TOOLKIT</Eyebrow>
              <h2 className="mt-5 font-display text-5xl font-semibold leading-[1.02] tracking-tighter md:text-6xl">
                Tools for
                <br />
                turning ideas
                <br />
                <span className="text-(--accent)">into useful things.</span>
              </h2>
              <p className="mt-5 max-w-xs text-sm leading-6 text-(--muted)">
                A growing toolkit I use to explore, build, and ship digital
                experiences.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="tool-lanes" aria-label="Languages and tools">
              {[0, 1].map((lane) => {
                const items = skills
                  .flatMap((group) => group.values)
                  .filter((_, index) => index % 2 === lane);

                return (
                  <div
                    className={`tool-lane ${lane === 0 ? "tool-lane-a" : "tool-lane-b"}`}
                    key={lane}
                  >
                    <div className="tool-track">
                      {[0, 1, 2, 3].map((copy) => (
                        <div
                          className="tool-track-set"
                          key={copy}
                          aria-hidden={copy > 0}
                        >
                          {items.map(({ name, icon }) => (
                            <span key={name} className="tool-chip">
                              <img
                                src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}/${icon}-original.svg`}
                                alt=""
                                loading="lazy"
                              />
                              {name}
                            </span>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Experience */}
      <Experience />

      {/* About */}
      <section
        id="about"
        className="border-t border-(--line) px-[7vw] py-24 lg:px-20"
      >
        <div className="mx-auto grid max-w-280 gap-10 md:grid-cols-[.85fr_1.15fr]">
          <Reveal>
            <div>
              <Eyebrow>( 04 ) A LITTLE ABOUT ME</Eyebrow>
              <h2 className="mt-5 font-display text-5xl font-semibold leading-[1.02] tracking-tighter md:text-6xl">
                Curious by
                <br />
                nature<span className="text-(--accent)">.</span>
                <br />
                <span className="text-(--muted)">Builder by choice.</span>
              </h2>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="pt-2">
              <p className="max-w-xl text-lg leading-8">
                I’m a software engineering student and full-stack JavaScript
                developer interested in making digital products that feel as
                considered as they are useful.
              </p>

              <p className="mt-5 max-w-xl text-sm leading-7 text-(--muted)">
                I enjoy working across the stack, learning by doing, and making
                technology more approachable. Zinab brings that together: a
                voice AI app that helps farmers understand local satellite,
                forecast, and soil data in the language they prefer.
              </p>

              <div className="mt-9 border-t border-(--line) pt-5">
                <span className="font-mono text-[9px] tracking-[.12em] text-(--accent)">
                  WHAT I CARE ABOUT
                </span>
                <p className="mt-3 text-sm text-(--muted)">
                  Useful software
                  <span className="px-2 text-(--accent)">/</span>
                  Clear interfaces
                  <span className="px-2 text-(--accent)">/</span>
                  Local context
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="border-t border-(--line) px-[7vw] py-24 lg:px-20"
      >
        <Reveal>
          <div className="mx-auto max-w-280">
            <Eyebrow>( 05 ) CONTACT</Eyebrow>

            <h2 className="mt-7 font-display text-[clamp(3.5rem,9vw,8rem)] font-semibold leading-[.9] tracking-[-.06em]">
              Have an idea?
              <br />
              <span className="text-(--accent)">Let’s build it.</span>
            </h2>

            <div className="mt-10 flex flex-col justify-between gap-7 border-t border-(--line) pt-6 sm:flex-row sm:items-center">
              <a
                href="mailto:esuwo2024@gmail.com"
                className="inline-flex w-fit items-center gap-4 bg-(--accent) px-5 py-4 text-xs font-bold text-[#171b13] transition-transform hover:-translate-y-1"
              >
                SAY HELLO <ArrowUpRight size={15} />
              </a>

              <div className="flex gap-5">
                {[
                  ["GITHUB", "https://github.com/esubaleww"],
                  ["LINKEDIN", "https://www.linkedin.com/in/esuk/"],
                  ["TELEGRAM", "https://t.me/medhne2"],
                ].map(([name, url]) => (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-[9px] tracking-wide text-(--muted) transition-colors hover:text-(--accent)"
                  >
                    {name}
                  </a>
                ))}
              </div>
            </div>

            <footer className="mt-20 flex flex-col justify-between gap-3 border-t border-(--line) pt-5 text-[9px] text-(--muted) sm:flex-row">
              <span>© 2026 ESUBALEW</span>
              <span>MADE WITH CARE IN ETHIOPIA</span>
              <a
                href="#home"
                className="inline-flex items-center gap-2 hover:text-(--accent)"
              >
                BACK TO TOP <ArrowUpRight size={12} />
              </a>
            </footer>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
