"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";
import { content, LANGS, type Lang } from "./content";
import Effects from "./Effects";

const inputCls =
  "w-full rounded-xl border border-line bg-background px-4 py-3 text-[15px] text-foreground placeholder:text-muted/60 outline-none transition focus:border-accent";

function Words({ text, start = 0 }: { text: string; start?: number }) {
  return text.split(" ").map((w, i) => (
    <span key={i} className="mr-[0.25em] inline-block overflow-hidden pb-[0.12em] align-bottom">
      <span className="word" style={{ animationDelay: `${(start + i) * 80}ms` }}>
        {w}
      </span>
    </span>
  ));
}

const d = (i: number, step = 90) => ({ "--d": `${i * step}ms` }) as React.CSSProperties;

function Wave() {
  return (
    <div className="flex h-10 items-center gap-1" aria-hidden>
      {Array.from({ length: 28 }).map((_, i) => (
        <span
          key={i}
          className="w-[3px] origin-center rounded-full bg-accent/80"
          style={{
            height: "100%",
            animation: `bar ${1.1 + (i % 5) * 0.18}s ease-in-out ${i * 0.06}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

export default function Home() {
  const [lang, setLang] = useState<Lang>("ru");
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const t = content[lang];

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      if (!res.ok) throw new Error();
      form.reset();
      setStatus("ok");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div lang={lang === "uz" ? "uz-Cyrl" : lang} className="relative overflow-x-clip">
      <Effects />
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-line/70 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <a href="#top" aria-label="Founder Gap">
            <Image src="/logo-white.png" alt="Founder Gap" width={963} height={516} priority className="h-9 w-auto" />
          </a>
          <nav className="hidden items-center gap-7 text-sm text-muted md:flex">
            <a href="#about" className="transition hover:text-foreground">{t.nav.about}</a>
            <a href="#topics" className="transition hover:text-foreground">{t.nav.topics}</a>
            <a href="#guests" className="transition hover:text-foreground">{t.nav.guests}</a>
          </nav>
          <div className="flex items-center gap-3">
            <div className="flex rounded-full border border-line p-0.5 text-xs">
              {LANGS.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  aria-pressed={lang === l.code}
                  className={`rounded-full px-2.5 py-1 font-medium transition ${
                    lang === l.code ? "bg-accent text-black" : "text-muted hover:text-foreground"
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
            <a
              href="#apply"
              data-magnetic
              className="hidden rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition hover:bg-accent sm:block"
            >
              {t.nav.apply}
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="glow relative pt-40 pb-24 md:pt-52 md:pb-32">
          <div className="grid-bg absolute inset-0" aria-hidden />
          <div className="relative mx-auto max-w-6xl px-5">
            <div className="rise mb-8 inline-flex items-center gap-2 rounded-full border border-line bg-card px-3.5 py-1.5 text-xs text-muted">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
              {t.hero.badge}
            </div>
            <h1 key={lang} className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
              <Words text={t.hero.title1} start={1} />
              <br />
              <span className="text-accent">
                <Words text={t.hero.title2} start={t.hero.title1.split(" ").length + 1} />
              </span>
            </h1>
            <p className="rise mt-8 max-w-2xl text-lg leading-relaxed text-muted" style={{ animationDelay: "700ms" }}>
              {t.hero.sub}
            </p>
            <div className="rise mt-10 flex flex-wrap items-center gap-4" style={{ animationDelay: "850ms" }}>
              <a
                href="#apply"
                data-magnetic
                className="rounded-full bg-accent px-7 py-3.5 text-[15px] font-semibold text-black transition hover:brightness-110"
              >
                {t.hero.cta}
              </a>
              <a
                href="#about"
                data-magnetic
                className="rounded-full border border-line px-7 py-3.5 text-[15px] font-medium transition hover:border-muted"
              >
                {t.hero.cta2}
              </a>
            </div>
            <div className="rise mt-16" style={{ animationDelay: "1000ms" }}>
              <Wave />
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-y border-line">
          <div className="mx-auto grid max-w-6xl divide-y divide-line px-5 md:grid-cols-3 md:divide-x md:divide-y-0">
            {t.stats.map((s, i) => (
              <div key={s.label} className="reveal py-8 md:px-8 md:first:pl-0" style={d(i)}>
                <div className="font-mono text-3xl font-semibold text-accent">{s.value}</div>
                <div className="mt-1 text-sm text-muted">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24 md:py-32">
          <h2 className="reveal max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">{t.about.title}</h2>
          <p className="reveal mt-6 max-w-2xl text-lg text-muted" style={d(1)}>{t.about.text}</p>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {t.about.points.map((p, i) => (
              <div key={p.t} className="reveal spot rounded-2xl border border-line bg-card p-7 transition-colors hover:border-accent/40" style={d(i)}>
                <div className="font-mono text-sm text-accent">0{i + 1}</div>
                <h3 className="mt-4 text-xl font-semibold">{p.t}</h3>
                <p className="mt-2 leading-relaxed text-muted">{p.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Topics */}
        <section id="topics" className="scroll-mt-20 border-t border-line bg-card/40 py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="reveal text-4xl font-semibold tracking-tight md:text-5xl">{t.topics.title}</h2>
            <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
              {t.topics.items.map((it, i) => (
                <div key={it.t} className="reveal spot bg-background p-7 transition-colors hover:bg-card" style={d(i, 70)}>
                  <h3 className="text-lg font-semibold">{it.t}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">{it.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Guests */}
        <section id="guests" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24 md:py-32">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div className="reveal">
              <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">{t.guests.title}</h2>
              <p className="mt-6 text-lg text-muted">{t.guests.sub}</p>
            </div>
            <ul className="space-y-4">
              {t.guests.items.map((it, i) => (
                <li key={it} className="reveal spot flex gap-4 rounded-2xl border border-line bg-card p-5 transition-colors hover:border-accent/40" style={d(i + 1)}>
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-black">
                    ✓
                  </span>
                  <span className="leading-relaxed">{it}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Apply */}
        <section id="apply" className="glow scroll-mt-20 border-t border-line py-24 md:py-32">
          <div className="mx-auto max-w-2xl px-5">
            <h2 className="reveal text-4xl font-semibold tracking-tight md:text-5xl">{t.form.title}</h2>
            <p className="reveal mt-4 text-lg text-muted" style={d(1)}>{t.form.sub}</p>

            <form onSubmit={onSubmit} style={d(2)} className="reveal mt-10 space-y-5 rounded-3xl border border-line bg-card p-6 md:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block space-y-2 text-sm text-muted">
                  {t.form.name}
                  <input name="name" required maxLength={120} autoComplete="name" className={inputCls} />
                </label>
                <label className="block space-y-2 text-sm text-muted">
                  {t.form.email}
                  <input name="email" type="email" required maxLength={200} autoComplete="email" className={inputCls} />
                </label>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block space-y-2 text-sm text-muted">
                  {t.form.company}
                  <input name="company" required maxLength={160} className={inputCls} />
                </label>
                <label className="block space-y-2 text-sm text-muted">
                  {t.form.stage}
                  <select name="stage" required defaultValue="" className={inputCls}>
                    <option value="" disabled />
                    {t.form.stages.map((s) => (
                      <option key={s.value} value={s.value}>
                        {s.label}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              <label className="block space-y-2 text-sm text-muted">
                {t.form.story}
                <textarea
                  name="story"
                  required
                  rows={5}
                  maxLength={3000}
                  placeholder={t.form.storyPh}
                  className={`${inputCls} resize-y`}
                />
              </label>
              <label className="block space-y-2 text-sm text-muted">
                {t.form.link}
                <input name="link" maxLength={300} className={inputCls} />
              </label>

              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-shine w-full rounded-full bg-accent px-7 py-3.5 text-[15px] font-semibold text-black transition hover:brightness-110 disabled:opacity-60"
              >
                {status === "sending" ? t.form.sending : t.form.submit}
              </button>

              <div aria-live="polite" className="text-sm">
                {status === "ok" && <p className="text-accent">{t.form.success}</p>}
                {status === "error" && <p className="text-red-400">{t.form.error}</p>}
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-line py-12 text-center text-sm text-muted">
        <Image src="/logo-white.png" alt="Founder Gap" width={963} height={516} className="mx-auto mb-5 h-14 w-auto opacity-80" />
        <p className="mb-3 text-foreground">
          {t.contact}{" "}
          <a
            href="https://t.me/s_sarvar"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-accent underline-offset-4 hover:underline"
          >
            @s_sarvar
          </a>
        </p>
        {t.footer}
      </footer>
    </div>
  );
}
