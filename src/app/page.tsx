"use client";

import React, { useEffect, useMemo, useState } from "react";

type ExperienceEntry = {
  dates: string;
  role: string;
  company: string;
  companyUrl?: string;
  desc: string;
  tags: string[];
};

type ProjectEntry = {
  title: string;
  href?: string;
  dates?: string;
  desc: string;
  tags: string[];
};

const EXPERIENCE: ExperienceEntry[] = [
  {
    dates: "July 2023 — Present",
    role: "Software Developer II",
    company: "County of Orange",
    companyUrl: "https://www.ocgov.com/",
    desc: "Build and maintain county-wide .NET and React applications supporting millions of users and high-volume transactional workflows. Designed AI-powered document processing pipelines using Azure AI OCR and RAG-based internal policy search systems, reducing manual review effort and improving decision accuracy for operational teams. Serve as technical owner across design, development, testing, and deployment in hybrid on-prem and Azure environments. Acted as backup team lead, coordinating priorities and representing the team in supervisor-level meetings.",
    tags: ["C#", ".NET", "React", "TypeScript", "SQL Server", "Azure", "Azure AI", "OCR", "RAG", "REST APIs"],
  },
  {
    dates: "May 2021 — Aug 2021",
    role: "Software Frontend Developer Intern",
    company: "PsySpace",
    companyUrl: "https://psy-space.org/",
    desc: "Built cross-platform mobile interfaces using Flutter and Dart, translating complex UX designs into production-ready components. Integrated NLP-based sentiment analysis features to evaluate user text input. Optimized Firebase cloud data access and reduced local storage usage by 30%.",
    tags: ["Flutter", "Dart", "Firebase", "NLP"],
  },
];

const PROJECTS: ProjectEntry[] = [
  {
    title: "NightlyMenu — Household Meal Planner",
    href: "https://dinnerly.menu/info",
    dates: "2026",
    desc: "A household meal planning app with a restaurant menu-style UI. Users add dishes with photos and ingredients, plan tonight's dinner, and coordinate with household members via invite codes. Features Google Sign-In, email notifications, and a shared household menu.",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Express", "SQLite", "JWT", "TanStack Query"],
  },
  {
    title: "Automated Trading System",
    dates: "2025",
    desc: "Designed and deployed an automated trading system integrating broker APIs for order execution and real-time monitoring. Focused on system reliability and API-driven automation, executing real-world trades during controlled testing.",
    tags: ["Python", "REST APIs"],
  },
  {
    title: "Domain-Specific LLM Research",
    dates: "2024 — 2025",
    desc: "Authored and co-authored peer-reviewed papers on domain-specific large language models applied to healthcare, finance, and business operations. Evaluated cost reduction, productivity gains, and fraud-detection benefits of internal LLM deployments.",
    tags: ["LLMs", "NLP", "Research", "Healthcare AI", "Finance AI"],
  },
  {
    title: "Project Manager & TA — Web App Course",
    dates: "2023",
    desc: "Led student groups using Agile methodology for web application projects at Penn. Helped teach single-page application development, tracked deliverables, and coordinated team workload and collaboration across the semester.",
    tags: ["JavaScript", "MongoDB", "Agile"],
  },
  {
    title: "Full-Stack Instagram Web App",
    dates: "2022",
    desc: "Designed UI/UX from scratch in Figma and built a full-stack Instagram clone as a React SPA with state management, routing, and real-time notifications. Implemented CRUD REST APIs with Node.js/Express, MongoDB schema for thousands of records, and AWS cloud storage.",
    tags: ["React", "Node.js", "Express", "MongoDB", "AWS"],
  },
];

function GithubIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function WebsiteIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function ArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`h-4 w-4 ${className}`}
      aria-hidden="true"
    >
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7,7 17,7 17,17" />
    </svg>
  );
}

export default function Page() {
  const sections = useMemo(
    () => [
      { id: "about", label: "About" },
      { id: "experience", label: "Experience" },
      { id: "projects", label: "Projects" },
    ],
    []
  );

  const [active, setActive] = useState("about");
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  // Spotlight effect
  useEffect(() => {
    const onMove = (e: MouseEvent) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  // Active section tracking
  useEffect(() => {
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean) as HTMLElement[];

    const obs = new IntersectionObserver(
      (entries) => {
        const best = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (best?.target?.id) setActive(best.target.id);
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0.1, 0.25, 0.5] }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [sections]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="relative font-sans leading-relaxed text-slate-400"
      style={{
        background: `radial-gradient(600px circle at ${mouse.x}px ${mouse.y}px, rgba(29, 78, 216, 0.13), transparent 80%), #0a192f`,
        minHeight: "100vh",
      }}
    >
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:flex lg:gap-4 lg:px-24 lg:py-0">
        {/* LEFT: Sticky header panel */}
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-5/12 lg:flex-col lg:justify-between lg:py-24">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
              <a href="/">Hao Qin</a>
            </h1>
            <h2 className="mt-3 text-xl font-medium tracking-tight text-slate-200">
              Full-Stack Software Engineer
            </h2>
            <p className="mt-4 max-w-xs leading-normal">
              I build production-grade web applications with a focus on scalability, maintainability, and measurable impact.
            </p>

            {/* Desktop nav with line indicators */}
            <nav className="hidden lg:block mt-16" aria-label="In-page links">
              <ul>
                {sections.map((s) => (
                  <li key={s.id}>
                    <button
                      onClick={() => scrollTo(s.id)}
                      className="group flex items-center py-3"
                    >
                      <span
                        className={`mr-4 h-px transition-all duration-300 ${
                          active === s.id
                            ? "w-16 bg-slate-200"
                            : "w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200"
                        }`}
                      />
                      <span
                        className={`text-xs font-bold uppercase tracking-widest transition-colors duration-200 ${
                          active === s.id
                            ? "text-slate-200"
                            : "text-slate-500 group-hover:text-slate-200"
                        }`}
                      >
                        {s.label}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Social links */}
          <ul className="ml-1 mt-8 flex items-center gap-5 lg:mt-0">
            <li>
              <a
                href="https://www.qincard.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Website"
                className="block text-slate-400 transition-colors hover:text-slate-200"
              >
                <WebsiteIcon />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Haody996"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="block text-slate-400 transition-colors hover:text-slate-200"
              >
                <GithubIcon />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/hao-qin-8788841bb/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="block text-slate-400 transition-colors hover:text-slate-200"
              >
                <LinkedinIcon />
              </a>
            </li>
            <li>
              <a
                href="mailto:hao.qin.professional@gmail.com"
                aria-label="Email"
                className="block text-slate-400 transition-colors hover:text-slate-200"
              >
                <EmailIcon />
              </a>
            </li>
          </ul>
        </header>

        {/* RIGHT: Scrollable content */}
        <main className="pt-24 lg:w-7/12 lg:py-24">
          {/* ABOUT */}
          <section id="about" className="mb-16 scroll-mt-16 lg:mb-24 lg:scroll-mt-24">
            <MobileSectionHeader>About</MobileSectionHeader>
            <div className="space-y-4 text-slate-400">
              <p>
                I&apos;m a full-stack software engineer with 3+ years building large-scale,
                compliance-driven enterprise systems. Currently a{" "}
                <span className="text-slate-200 font-medium">Software Developer II</span> at
                the County of Orange, shipping .NET and React features across county-wide
                platforms that serve over{" "}
                <span className="text-slate-200 font-medium">3 million users</span>.
              </p>
              <p>
                I specialize in building web apps as well as using{" "}
                <span className="text-slate-200 font-medium">AI</span> — including OCR
                document pipelines and RAG-based internal search — deployed across hybrid
                on-prem and cloud environments.
              </p>
              <p>
                I hold a Master&apos;s in Computer Graphics from the{" "}
                <span className="text-slate-200 font-medium">University of Pennsylvania</span>{" "}
                (GPA 3.6) and dual bachelor&apos;s degrees in Computer Science and Applied
                Mathematics from{" "}
                <span className="text-slate-200 font-medium">Penn State</span> (GPA 3.9).
                Outside of work I research domain-specific LLMs applied to healthcare, finance, and other small niches.
              </p>
            </div>
          </section>

          {/* EXPERIENCE */}
          <section id="experience" className="mb-16 scroll-mt-16 lg:mb-24 lg:scroll-mt-24">
            <MobileSectionHeader>Experience</MobileSectionHeader>
            <ol className="group/list">
              {EXPERIENCE.map((exp, i) => (
                <ExperienceCard key={i} {...exp} />
              ))}
            </ol>
            <div className="mt-12">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-1 font-semibold text-slate-200 hover:text-teal-300 transition-colors"
              >
                View Full Résumé
                <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>
          </section>

          {/* PROJECTS */}
          <section id="projects" className="mb-16 scroll-mt-16 lg:mb-24 lg:scroll-mt-24">
            <MobileSectionHeader>Projects</MobileSectionHeader>
            <ul className="group/list">
              {PROJECTS.map((proj, i) => (
                <ProjectCard key={i} {...proj} />
              ))}
            </ul>
          </section>

          <footer className="pb-16 text-sm text-slate-500">
            <p>
              Loosely designed in Figma and coded in Visual Studio Code by yours truly.
              Built with{" "}
              <span className="font-medium text-slate-400">Next.js</span> and{" "}
              <span className="font-medium text-slate-400">Tailwind CSS</span>, deployed
              with Docker on a self-hosted VPS. All text is set in the{" "}
              <span className="font-medium text-slate-400">Geist</span> typeface.
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}

function MobileSectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
      <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
        {children}
      </h2>
    </div>
  );
}

function ExperienceCard({ dates, role, company, companyUrl, desc, tags }: ExperienceEntry) {
  return (
    <li className="mb-12">
      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        {/* Hover background overlay */}
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
          {dates}
        </header>

        <div className="z-10 sm:col-span-6">
          <h3 className="font-medium leading-snug text-slate-200">
            {companyUrl ? (
              <a
                href={companyUrl}
                target="_blank"
                rel="noreferrer"
                className="group/link inline-flex items-baseline gap-1 hover:text-teal-300 transition-colors"
              >
                {role} · {company}
                <ArrowUpRight className="inline transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
              </a>
            ) : (
              <span>
                {role} · {company}
              </span>
            )}
          </h3>
          <p className="mt-2 text-sm leading-normal">{desc}</p>
          <ul className="mt-2 flex flex-wrap gap-2" aria-label="Technologies used">
            {tags.map((t) => (
              <li key={t}>
                <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                  {t}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
}

function ProjectCard({ title, href, dates, desc, tags }: ProjectEntry) {
  return (
    <li className="mb-12">
      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        {/* Hover background overlay */}
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

        {dates && (
          <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
            {dates}
          </header>
        )}

        <div className={`z-10 ${dates ? "sm:col-span-6" : "sm:col-span-8"}`}>
          <h3 className="font-medium leading-snug text-slate-200">
            {href ? (
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group/link inline-flex items-baseline gap-1 hover:text-teal-300 transition-colors"
              >
                {title}
                <ArrowUpRight className="inline transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
              </a>
            ) : (
              <span>{title}</span>
            )}
          </h3>
          <p className="mt-2 text-sm leading-normal">{desc}</p>
          <ul className="mt-2 flex flex-wrap gap-2" aria-label="Technologies used">
            {tags.map((t) => (
              <li key={t}>
                <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                  {t}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
}
