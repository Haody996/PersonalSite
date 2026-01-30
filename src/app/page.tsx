"use client";

import React, { useEffect, useMemo, useState } from "react";

type Section = { id: string; label: string };

export default function Page() {
  const sections: Section[] = useMemo(
    () => [
      { id: "home", label: "Home" },
      { id: "about", label: "About" },
      { id: "projects", label: "Projects" },
      { id: "stack", label: "Stack" },
      { id: "contact", label: "Contact" },
    ],
    []
  );

  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean) as HTMLElement[];

    const obs = new IntersectionObserver(
      (entries) => {
        const best = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];
        if (best?.target?.id) setActive(best.target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.1, 0.2, 0.35] }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [sections]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-app text-slate-100">
      {/* Top Nav */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-app/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_24px_rgba(52,211,153,0.35)]" />
            <div className="font-semibold tracking-tight">
              <span className="text-slate-100">Qin</span>
              <span className="text-slate-400">.</span>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className={`hover:text-white transition ${
                  active === s.id ? "text-white" : ""
                }`}
              >
                {s.label}
              </button>
            ))}
            <a
              href="/resume.pdf"
              className="rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-3 py-1.5 text-emerald-200 hover:bg-emerald-400/15"
            >
              Resume
            </a>
          </nav>

          <div className="md:hidden text-sm text-slate-300">Menu →</div>
        </div>
      </header>

      {/* Right side section nav */}
      <aside className="fixed right-6 top-32 z-40 hidden w-44 md:block">
        <div className="rounded-2xl border border-white/8 bg-panel/70 p-3 backdrop-blur">
          <div className="mb-2 text-xs font-semibold text-slate-300">Navigate</div>
          <div className="space-y-1">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className={`w-full rounded-lg px-2 py-1 text-left text-sm transition ${
                  active === s.id
                    ? "bg-emerald-400/12 text-emerald-200 border border-emerald-400/25"
                    : "text-slate-300 hover:bg-white/5"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </aside>

      <main className="mx-auto max-w-6xl px-5 pb-24">
        {/* HERO */}
        <section id="home" className="pt-14">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Full-Stack SDE • React / .NET / SQL / Azure
              </div>

              <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
                Hao Qin
              </h1>
              <p className="mt-3 text-lg text-slate-300">
                Full-Stack Software Engineer
              </p>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300">
                I build production-grade web applications with a focus on{" "}
                <span className="text-slate-100 font-medium">scalability</span>,{" "}
                <span className="text-slate-100 font-medium">maintainability</span>, and{" "}
                <span className="text-slate-100 font-medium">measurable impact</span>.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <button
                  onClick={() => scrollTo("projects")}
                  className="rounded-2xl bg-emerald-400 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-emerald-300"
                >
                  View Projects
                </button>
                <a
                  href="/resume.pdf"
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-100 hover:bg-white/10"
                >
                  Download Resume
                </a>
                <a
                  href="https://github.com/Haody996"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-100 hover:bg-white/10"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* Avatar + glow */}
            <div className="flex justify-center md:justify-end">
              <div className="relative">
                <div className="glowRing" aria-hidden="true" />
                <div className="avatarRing">
                  <img
                    src="/avatar.jpg"
                    alt="Hao Qin portrait"
                    className="h-44 w-44 rounded-full object-cover md:h-52 md:w-52"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Stats row */}
          <div className="mt-12 grid gap-4 md:grid-cols-4">
            <StatCard k="3+" v="Years" sub="Full-stack dev" />
            <StatCard k="100k+" v="Users" sub="Compliance systems" />
            <StatCard k="SQL" v="Perf" sub="Queries & indexing" />
            <StatCard k="Azure" v="Deploy" sub="CI/CD & hosting" />
          </div>

          {/* Code panel */}
          <div className="mt-6 rounded-3xl border border-white/10 bg-panel p-5">
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-300/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
                <span className="ml-2 text-xs text-slate-400">terminal.ts</span>
              </div>
              <div className="text-xs text-slate-500">status: shipping</div>
            </div>

            <pre className="codeBlock">
{`while (career === "growing") {
  learn();
  build();
  ship();
}`}
            </pre>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="pt-16">
          <SectionTitle title="About" subtitle="What I do and how I work" />
          <div className="grid gap-6 md:grid-cols-2">
            <Panel title="Professional Background">
              I build and maintain large-scale, compliance-driven applications. I’m comfortable owning features end-to-end: requirements → design → implementation → deployment → support.
            </Panel>
            <Panel title="Technical Focus">
              Full-stack web apps (React + .NET), secure APIs, RBAC, and SQL performance. I like clean interfaces, testable code, and systems that are easy to operate.
            </Panel>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="pt-16">
          <SectionTitle title="Projects" subtitle="Problem → Solution → Impact" />
          <div className="grid gap-6 md:grid-cols-2">
            <ProjectCard
              title="County Case Management Platform"
              desc="Compliance-critical workflows across departments."
              bullets={[
                "React + .NET feature delivery",
                "RBAC + secure endpoints",
                "SQL tuning for large datasets",
              ]}
              stack="React · .NET · SQL Server · Azure"
            />
            <ProjectCard
              title="Scheduling & Approvals Tools"
              desc="Policy-heavy scheduling, overrides, and reporting."
              bullets={[
                "Data-heavy UI patterns",
                "Auditability + workflow rules",
                "Stakeholder-driven iteration",
              ]}
              stack="React · .NET · SQL · Nginx"
            />
          </div>
        </section>

        {/* STACK */}
        <section id="stack" className="pt-16">
          <SectionTitle title="Stack" subtitle="Technologies I use regularly" />
          <div className="grid gap-4 md:grid-cols-3">
            <TagPanel title="Frontend" tags={["React", "Next.js", "TypeScript", "CSS"]} />
            <TagPanel title="Backend" tags={[".NET", "REST APIs", "Auth", "RBAC"]} />
            <TagPanel title="Data & Infra" tags={["SQL Server", "Indexing", "Azure", "Linux/Nginx"]} />
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="pt-16 scroll-mt-24 min-h-[70vh]">
          <SectionTitle title="Contact" subtitle="Let’s talk" />
          <div className="rounded-3xl border border-white/10 bg-panel p-6">
            <div className="grid gap-3 md:grid-cols-3">
              <a className="linkPill" href="mailto:hao.qin.professional@gmail.com">
                hao.qin.professional@gmail.com
              </a>
              <a className="linkPill" target="_blank" rel="noreferrer" href="https://github.com/Haody996">
                github.com/Haody996
              </a>
              <a className="linkPill" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/hao-qin-8788841bb/">
                linkedin.com/in/hao-qin-8788841bb
              </a>
            </div>
          </div>
        </section>

        <footer className="pt-16 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Hao Qin
        </footer>
      </main>
    </div>
  );
}

function SectionTitle({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      <p className="mt-1 text-sm text-slate-400">{subtitle}</p>
    </div>
  );
}

function StatCard({ k, v, sub }: { k: string; v: string; sub: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-panel p-4">
      <div className="flex items-baseline gap-2">
        <div className="text-xl font-semibold text-slate-100">{k}</div>
        <div className="text-sm text-slate-400">{v}</div>
      </div>
      <div className="mt-1 text-sm text-emerald-200/80">{sub}</div>
    </div>
  );
}

function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-panel p-6">
      <div className="mb-2 text-sm font-semibold text-emerald-200">{title}</div>
      <p className="text-sm leading-relaxed text-slate-300">{children}</p>
    </div>
  );
}

function ProjectCard({
  title,
  desc,
  bullets,
  stack,
}: {
  title: string;
  desc: string;
  bullets: string[];
  stack: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-panel p-6">
      <div className="text-lg font-semibold">{title}</div>
      <div className="mt-2 text-sm text-slate-300">{desc}</div>
      <ul className="mt-4 space-y-2 text-sm text-slate-300">
        {bullets.map((b) => (
          <li key={b}>• {b}</li>
        ))}
      </ul>
      <div className="mt-4 text-xs text-slate-400">{stack}</div>
    </div>
  );
}

function TagPanel({ title, tags }: { title: string; tags: string[] }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-panel p-6">
      <div className="text-sm font-semibold text-emerald-200">{title}</div>
      <div className="mt-3 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
