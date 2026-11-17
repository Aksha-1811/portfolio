import { site, experience, education, skillGroups } from "@/lib/site";
import { projects } from "@/lib/projects";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";

function Heading({ id, children, color }: { id: string; children: React.ReactNode; color: string }) {
  return (
    <h2 id={id} className="flex items-center gap-3 text-2xl font-semibold">
      <span aria-hidden="true" className="h-6 w-1.5 rounded-full" style={{ background: color }} />
      {children}
    </h2>
  );
}

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="mx-auto max-w-page px-4 pb-16 sm:px-8">
        <section id="about" aria-labelledby="exp-h" className="pt-16">
          <Heading id="exp-h" color="var(--purple)">Experience</Heading>
          <ol className="mt-6 space-y-5">
            {experience.map((j) => (
              <li key={j.org + j.dates} className="rounded-lg border border-line bg-surface p-5 sm:p-6" style={{ borderLeft: `4px solid ${j.accent}` }}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="text-lg font-semibold">{j.role}</h3>
                  <p className="font-mono text-sm text-muted">{j.dates}</p>
                </div>
                <p className="text-muted">{j.org} · {j.place}</p>
                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm">
                  {j.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
              </li>
            ))}
          </ol>
        </section>

        <section id="work" aria-labelledby="work-h" className="pt-16">
          <Heading id="work-h" color="var(--green)">Projects</Heading>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {projects.map((p) => <ProjectCard key={p.title} p={p} />)}
          </div>
        </section>

        <section id="skills" aria-labelledby="skills-h" className="pt-16">
          <Heading id="skills-h" color="var(--purple)">Skills</Heading>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {skillGroups.map((g) => (
              <div key={g.name} className="rounded-lg border border-line bg-surface p-5">
                <h3 className="font-semibold" style={{ color: g.color }}>{g.name}</h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {g.items.map((i) => (
                    <li key={i} className="rounded-full px-2.5 py-0.5 text-sm" style={{ background: `color-mix(in srgb, ${g.color} 16%, transparent)`, border: `1px solid color-mix(in srgb, ${g.color} 40%, transparent)` }}>{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="edu-h" className="pt-16">
          <Heading id="edu-h" color="var(--green)">Education</Heading>
          <ul className="mt-6 divide-y divide-line border-y border-line">
            {education.map((e) => (
              <li key={e.title} className="flex flex-wrap items-baseline justify-between gap-x-4 py-4">
                <div>
                  <p className="font-medium">{e.title}</p>
                  <p className="text-muted">{e.org} · {e.detail}</p>
                </div>
                <p className="font-mono text-sm text-muted">{e.dates}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="contact" aria-labelledby="cta-h" className="mt-20 rounded-lg px-6 py-14 text-center text-[#f4f4f1] sm:py-20"
          style={{ background: "linear-gradient(135deg,#2e1065,#6d28d9 55%,#10b981)" }}>
          <h2 id="cta-h" className="text-3xl font-extrabold uppercase leading-tight sm:text-5xl">Let&apos;s build something together</h2>
          <a className="mt-6 inline-block rounded-md bg-[#f4f4f1] px-5 py-2.5 text-sm font-medium text-[#0b0b0d]" href={`mailto:${site.email}`}>{site.email}</a>
        </section>
      </div>
    </main>
  );
}
