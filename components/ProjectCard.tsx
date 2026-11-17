import type { Project } from "@/lib/projects";

export function ProjectCard({ p }: { p: Project }) {
  return (
    <article
      className="relative overflow-hidden rounded-lg border border-line bg-surface p-5 pt-6 sm:p-6"
      style={{ borderTop: `4px solid ${p.accent}` }}
    >
      <p
        className="font-mono text-xs uppercase tracking-wider"
        style={{ color: p.accent }}
      >
        {p.kind}
      </p>
      <h3 className="mt-1 text-lg font-semibold">{p.title}</h3>
      <p className="mt-2 text-muted">{p.oneLiner}</p>

      {p.highlights && (
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted">
          {p.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      )}

      <ul className="mt-4 flex flex-wrap gap-2" aria-label="Skills used">
        {p.stack.map((s) => (
          <li
            key={s}
            className="rounded-full px-2.5 py-0.5 font-mono text-xs"
            style={{
              background: `color-mix(in srgb, ${p.accent} 18%, transparent)`,
              border: `1px solid color-mix(in srgb, ${p.accent} 45%, transparent)`,
            }}
          >
            {s}
          </li>
        ))}
      </ul>

      {p.timeSpent && (
        <p className="mt-4 text-sm">
          <span className="font-medium">Time spent: </span>
          {p.timeSpent}
        </p>
      )}
      {p.decisions && p.decisions.length > 0 && (
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
          {p.decisions.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
      )}
      {p.note && <p className="mt-3 text-sm text-muted">{p.note}</p>}

      {(p.liveUrl || p.repoUrl) && (
        <div className="mt-5 flex gap-5 text-sm font-medium">
          {p.liveUrl && (
            <a
              className="underline underline-offset-4"
              style={{ color: p.accent }}
              href={p.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live demo
              <span className="sr-only"> of {p.title} (opens in new tab)</span>
            </a>
          )}
        </div>
      )}
    </article>
  );
}
