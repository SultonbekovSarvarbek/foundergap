import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { Resend } from "resend";

const STAGES: Record<string, string> = {
  vc: "Инвестиции от венчурного фонда",
  hard: "Hard commitment",
  soft: "Soft commitment",
};
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const clean = (v: unknown, max: number) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

type Application = {
  name: string;
  email: string;
  company: string;
  stage: string;
  story: string;
  link: string;
  createdAt: string;
};

async function sendEmail(a: Application) {
  const key = process.env.RESEND_API_KEY;
  const to = process.env.APPLICATIONS_TO;
  if (!key || !to) return false;

  const from = process.env.APPLICATIONS_FROM ?? "Founder Gap <onboarding@resend.dev>";
  const stage = STAGES[a.stage] ?? a.stage;

  const { error } = await new Resend(key).emails.send({
    from,
    to: to.split(",").map((x) => x.trim()),
    replyTo: a.email,
    subject: `Заявка гостя: ${a.name} (${a.company})`,
    text: [
      `Имя: ${a.name}`,
      `Email: ${a.email}`,
      `Стартап: ${a.company}`,
      `Что было: ${stage}`,
      `Ссылка: ${a.link || "-"}`,
      "",
      a.story,
    ].join("\n"),
    html: `
      <h2 style="margin:0 0 16px">Новая заявка гостя</h2>
      <table cellpadding="6" style="border-collapse:collapse;font-family:sans-serif;font-size:15px">
        <tr><td><b>Имя</b></td><td>${esc(a.name)}</td></tr>
        <tr><td><b>Email</b></td><td><a href="mailto:${esc(a.email)}">${esc(a.email)}</a></td></tr>
        <tr><td><b>Стартап</b></td><td>${esc(a.company)}</td></tr>
        <tr><td><b>Что было</b></td><td>${esc(stage)}</td></tr>
        <tr><td><b>Ссылка</b></td><td>${esc(a.link) || "-"}</td></tr>
      </table>
      <p style="font-family:sans-serif;font-size:15px;white-space:pre-wrap">${esc(a.story)}</p>`,
  });

  if (error) {
    console.error("[apply] Resend error:", error);
    return false;
  }
  return true;
}

// Резервная копия на диск. На хостингах с временной файловой системой может не сработать.
async function saveToFile(a: Application) {
  try {
    const dir = path.join(process.cwd(), "data");
    await mkdir(dir, { recursive: true });
    await appendFile(path.join(dir, "applications.jsonl"), JSON.stringify(a) + "\n");
    return true;
  } catch (err) {
    console.error("[apply] file save failed:", err);
    return false;
  }
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return Response.json({ ok: false }, { status: 400 });
  }

  const application: Application = {
    name: clean(body.name, 120),
    email: clean(body.email, 200),
    company: clean(body.company, 160),
    stage: clean(body.stage, 20),
    story: clean(body.story, 3000),
    link: clean(body.link, 300),
    createdAt: new Date().toISOString(),
  };

  if (
    !application.name ||
    !EMAIL_RE.test(application.email) ||
    !application.company ||
    !(application.stage in STAGES) ||
    !application.story
  ) {
    return Response.json({ ok: false }, { status: 422 });
  }

  const [emailed, saved] = await Promise.all([sendEmail(application), saveToFile(application)]);

  if (!emailed && !saved) {
    return Response.json({ ok: false }, { status: 500 });
  }
  return Response.json({ ok: true });
}
