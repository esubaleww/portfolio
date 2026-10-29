"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const jobs = [
  {
    period: "FEB – MAY 2026 · 4 MOS",
    role: "Full Stack Engineer Intern",
    company: "ANRS Bureau / ITB · On-site",
    detail:
      "Collaborated on ITSMS, a full-stack information and service portal with public information, program applications, service requests, and staff workflows.",
  },
  {
    period: "DEC 2025 – FEB 2026 · 3 MOS",
    role: "Full Stack Developer Intern",
    company: "Future Interns · Remote",
    detail:
      "Built responsive frontend features and connected application interfaces with backend data and APIs.",
  },
  {
    period: "NOV – DEC 2025 · 2 MOS",
    role: "Front-End Development Intern",
    company: "SaiKet Systems · Remote",
    detail:
      "Completed practical work in semantic HTML, responsive CSS layouts, JavaScript interactions, and small web applications.",
  },
  {
    period: "NOV – DEC 2025 · 2 MOS",
    role: "Full Stack Developer Intern",
    company: "Codveda Overseas Solutions · Remote",
    detail:
      "Worked with the MERN stack, building REST endpoints, JWT authentication, responsive React interfaces, and API integrations.",
  },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-3 font-mono text-[10px] tracking-[.12em] text-[var(--muted)]">
      <span className="h-px w-5 bg-[var(--accent)]" />
      {children}
    </p>
  );
}

export function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-[var(--line)] bg-[var(--surface)] px-[7vw] py-24 lg:px-20"
    >
      <div className="mx-auto max-w-[1120px]">
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <Eyebrow>( 03 ) EXPERIENCE</Eyebrow>

            <h2 className="mt-5 font-display text-5xl font-semibold leading-[1.02] tracking-[-.05em] md:text-6xl">
              Where I’ve
              <br />
              <span className="text-[var(--accent)]">been building.</span>
            </h2>
          </div>

          <a
            href="https://www.linkedin.com/in/esuk/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-xs text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
          >
            MORE ON LINKEDIN <ArrowUpRight size={14} />
          </a>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute bottom-5 left-[7px] top-5 w-px bg-[var(--line)] sm:left-1/2 sm:-translate-x-1/2" />

          {jobs.map((job, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={`${job.company}-${job.role}-${job.period}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
                className="relative grid grid-cols-[16px_minmax(0,1fr)] items-start gap-3 py-4 sm:grid-cols-[minmax(0,1fr)_20px_minmax(0,1fr)] sm:gap-6 sm:py-5"
              >
                {/* Experience card */}
                <div
                  className={`col-start-2 row-start-1 min-w-0 ${
                    isLeft
                      ? "sm:col-start-1 sm:row-start-1"
                      : "sm:col-start-3 sm:row-start-1"
                  }`}
                >
                  <article
                    className={`rounded-sm border border-[var(--line)] bg-[var(--paper)] p-4 transition-colors hover:border-[var(--accent)] sm:p-5 ${
                      isLeft ? "sm:text-right" : "sm:text-left"
                    }`}
                  >
                    <p className="font-mono text-[8px] tracking-wide text-[var(--accent)] sm:text-[9px]">
                      {job.period}
                    </p>

                    <h3 className="mt-2 font-display text-base font-semibold sm:text-lg">
                      {job.role}
                    </h3>

                    <p className="mt-1 font-mono text-[9px] text-[var(--muted)]">
                      {job.company}
                    </p>

                    <p className="mt-3 text-xs leading-5 text-[var(--muted)]">
                      {job.detail}
                    </p>
                  </article>
                </div>

                {/* Timeline marker */}
                <span className="relative z-10 col-start-1 row-start-1 mx-auto mt-1.5 size-3 rounded-full border-2 border-[var(--accent)] bg-[var(--surface)] sm:col-start-2" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
