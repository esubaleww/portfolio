"use client";

import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLayoutEffect, useRef, useState } from "react";

function GithubIcon({ size = 12 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.24 2.76.12 3.05.74.81 1.18 1.83 1.18 3.09 0 4.42-2.7 5.4-5.27 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  );
}

type Project = {
  n: string;
  title: string;
  kind: string;
  text: string;
  stack: string[];
  image: string;
  href: string;
  demoHref?: string;
};

export function ProjectScroll({ projects }: { projects: Project[] }) {
  const section = useRef<HTMLElement>(null);
  const rail = useRef<HTMLDivElement>(null);
  const [travel, setTravel] = useState(0);

  const { scrollYProgress } = useScroll({
    target: section,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -travel]);

  useLayoutEffect(() => {
    const measure = () => {
      const railElement = rail.current;
      if (!railElement) return;

      const viewportWidth = document.documentElement.clientWidth;
      setTravel(Math.max(0, railElement.scrollWidth - viewportWidth));
    };

    measure();

    const observer = new ResizeObserver(measure);
    if (rail.current) observer.observe(rail.current);

    window.addEventListener("resize", measure);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [projects.length]);

  return (
    <section
      ref={section}
      id="work"
      style={{ height: `calc(100vh + ${travel}px)`, marginBottom: "-10vh" }}
      className="relative border-t border-(--line)"
    >
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden py-3">
        <div className="mx-auto mb-5 w-full max-w-280 px-[7vw] lg:px-20">
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
            <div>
              <p className="flex items-center gap-3 font-mono text-[10px] tracking-[.12em] text-[var(--muted)]">
                <span className="h-px w-5 bg-(--accent)" />( 01 ) SELECTED WORK
              </p>
              <h2 className="mt-2 font-display text-4xl font-semibold tracking-tighter md:text-6xl">
                Projects<span className="text-(--accent)">.</span>
              </h2>
            </div>
            <p className="max-w-sm text-[11px] leading-4 text-(--muted)">
              A selection of things I’ve been building, from community tools to
              voice AI for Ethiopian farmers.
            </p>
          </div>
        </div>

        <motion.div
          ref={rail}
          style={{ x }}
          className="flex w-max gap-6 pl-[7vw] pr-[7vw] lg:pl-[max(5rem,calc((100vw-1120px)/2))]"
        >
          {projects.map((p) => (
            <article
              key={p.n}
              className="group w-[82vw] shrink-0 snap-center md:w-[72vw] lg:w-[min(72vw,820px)]"
            >
              <div className="relative h-[34svh] min-h-45 max-h-[340px] overflow-hidden bg-[var(--surface)]">
                <Image
                  src={p.image}
                  alt={`${p.title} preview`}
                  fill
                  sizes="(max-width: 768px) 82vw, 66vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.035]"
                />
                <span className="absolute left-4 top-4 bg-[var(--paper)]/90 px-2 py-1 font-mono text-[9px] text-[var(--ink)]">
                  {p.n} / PROJECT
                </span>
              </div>

              <div className="mt-3 flex items-center justify-between font-mono text-[8px] tracking-[.08em] text-[var(--muted)]">
                <span>{p.kind}</span>
                <span>
                  {p.n} / {String(projects.length).padStart(2, "0")}
                </span>
              </div>

              <h3 className="mt-1 font-display text-lg font-semibold tracking-tight md:text-xl">
                {p.title}
              </h3>

              {/* line-clamp-4 so longer descriptions (ITSMS) are not cut off */}
              <p className="mt-1 line-clamp-4 max-w-2xl text-[11px] leading-4 text-[var(--muted)] md:text-xs md:leading-5">
                {p.text}
              </p>

              <div className="mt-2 flex flex-wrap gap-2">
                {p.stack.map((tag) => (
                  <span
                    key={tag}
                    className="border border-[var(--line)] px-2 py-1 font-mono text-[7px] text-[var(--muted)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-3 flex flex-wrap items-center gap-4">
                {p.demoHref && (
                  <a
                    href={p.demoHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Try the live demo of ${p.title}`}
                    className="inline-flex items-center gap-2 bg-[var(--accent)] px-3 py-2 font-mono text-[9px] font-bold text-[#171b13] transition-transform hover:-translate-y-0.5"
                  >
                    LIVE DEMO <ExternalLink size={12} />
                  </a>
                )}

                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View source code for ${p.title} on GitHub`}
                  className="inline-flex items-center gap-2 border border-[var(--line)] px-3 py-2 font-mono text-[9px] text-[var(--ink)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  SOURCE CODE <GithubIcon size={12} />
                </a>
              </div>
            </article>
          ))}
        </motion.div>

        <div className="mx-auto mt-3 flex w-full max-w-[1120px] items-center justify-between px-[7vw] font-mono text-[8px] text-[var(--muted)] lg:px-20">
          <span>SCROLL TO EXPLORE</span>
          <a
            href="https://github.com/esubaleww?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[var(--accent)]"
          >
            MORE ON GITHUB <ArrowRight size={13} />
          </a>
        </div>
      </div>
    </section>
  );
}
