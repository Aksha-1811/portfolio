import { site } from "@/lib/site";

const links = [
  { href: "#about", label: "Experience" },
  { href: "#work", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0b0b0d] text-[#f4f4f1]">
      {site.heroVideo ? (
        <video
          className="absolute inset-y-0 right-0 -z-10 h-full w-full object-cover opacity-70 motion-reduce:hidden md:w-3/5"
          src={site.heroVideo}
          poster={site.heroPoster || undefined}
          autoPlay muted loop playsInline aria-hidden="true"
        />
      ) : (
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10"
          style={{ background: "radial-gradient(45% 60% at 85% 80%, #10b98155, transparent 70%), radial-gradient(55% 70% at 70% 20%, #7c3aed88, transparent 70%), radial-gradient(45% 60% at 15% 90%, #7c3aed44, transparent 70%)" }}
        />
      )}
      {site.heroPoster && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={site.heroPoster} alt="" className="absolute inset-0 -z-20 hidden h-full w-full object-cover motion-reduce:block" />
      )}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0b0b0d] via-transparent to-[#0b0b0d]/60" aria-hidden="true" />

      <div className="mx-auto flex min-h-[78svh] max-w-page flex-col px-4 py-6 sm:px-8">
        <nav aria-label="Primary" className="flex items-center justify-between text-sm">
          <a href="#top" className="font-mono uppercase tracking-widest">{site.name}</a>
          <ul className="flex gap-5">
            {links.map((l) => (
              <li key={l.href}><a className="opacity-80 hover:opacity-100" href={l.href}>{l.label}</a></li>
            ))}
            {site.cv && <li><a className="opacity-80 hover:opacity-100" href={site.cv}>Resume</a></li>}
          </ul>
        </nav>

        <div id="top" className="mt-auto pb-10 sm:pb-16">
          <p className="font-mono text-sm uppercase tracking-widest text-[#c9c9c4]">{site.role}</p>
          <h1 className="mt-3 text-[clamp(2rem,6vw,4.25rem)] font-extrabold uppercase leading-[0.95] tracking-tight bg-gradient-to-r from-[#a78bfa] to-[#34d399] bg-clip-text text-transparent">
            {site.name.split(" ").map((w) => (<span key={w} className="block">{w}</span>))}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-[#c9c9c4]">{site.intro}</p>
          <div id="contact" className="mt-7 flex flex-wrap gap-3 text-sm font-medium">
            <a className="rounded-md bg-[#f4f4f1] px-4 py-2 text-[#0b0b0d]" href={`mailto:${site.email}`}>Email me</a>
            <a className="rounded-md border border-white/25 px-4 py-2" href={site.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a className="rounded-md border border-white/25 px-4 py-2" href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
}
