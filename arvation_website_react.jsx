import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Rocket, Brain, Cog, Layout, Phone, Mail, MapPin, ExternalLink } from "lucide-react";

export default function ArvationSite() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setIsDark((v) => !v);
  };

  const services = [
    { icon: Brain, label: "AI", desc: "Custom AI agents, LLM apps, and data-driven features." },
    { icon: Cog, label: "Automation", desc: "Workflows that save time using APIs, webhooks, and RPA." },
    { icon: Layout, label: "Frontend", desc: "Fast, accessible web UIs with React and Tailwind." },
    { icon: Rocket, label: "Backend", desc: "Robust APIs and services with Node.js, Python, and cloud." },
  ];

  const projects = [
    {
      title: "Maindiish",
      blurb: "A social platform for food lovers to share recipes, connect, and get inspired.",
      href: "https://maindiish.com",
      tags: ["Food", "Social", "Community"],
    },
    {
      title: "The Tea News",
      blurb: "A modern news platform tailored for Gen Z and above, delivering quick, fresh, and relevant updates.",
      href: "https://www.theteanews.com",
      tags: ["News", "Content Automation", "AI"],
    },
    {
      title: "The Five Land",
      blurb: "Authentic K‑beauty e‑commerce with Shopify & marketplace integrations.",
      href: "https://thefiveland.com",
      tags: ["E‑commerce", "Operations", "Automation"],
    },
    {
      title: "Nepri.us",
      blurb: "Farming‑as‑a‑Service: virtual plots, AI & robotics powered agriculture.",
      href: "https://nepri.us",
      tags: ["AgTech", "AI", "Robotics"],
    },
    {
      title: "AI Lab (Arabic)",
      blurb: "Educational tutorials in Arabic about AI, automation, and data science.",
      href: "https://www.youtube.com/@3a2lSenai",
      tags: ["Education", "YouTube", "Community"],
    },
  ]; 

  // Dev-time sanity tests (won't run in production)
  useEffect(() => {
    try {
      console.assert(Array.isArray(projects) && projects.length >= 4, "Projects should include at least 4 items");
      projects.forEach((p) => {
        try { new URL(p.href); } catch { console.error("Invalid project URL:", p.title, p.href); }
      });
    } catch (e) {
      console.error("Sanity tests failed:", e);
    }
  }, []);

  return (
    <div id="top" className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900 text-slate-900 dark:text-slate-100">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white dark:bg-slate-900/70 dark:bg-slate-950/60 border-b border-slate-200 dark:border-slate-800 dark:border-slate-800">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 group"
              aria-label="Go to top"
           >
              <img
                src="https://maindiish-ca-1.s3.us-west-1.amazonaws.com/ArvationLogo.png"
                alt="Arvation Logo"
                className="h-9 w-auto object-contain transition-transform group-hover:scale-105"
              />
              <span className="font-semibold tracking-tight text-lg leading-none">Arvation</span>
            </a>
          </div>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#work" className="hover:text-slate-600 dark:text-slate-300 dark:hover:text-slate-300">Work</a>
            <a href="#services" className="hover:text-slate-600 dark:text-slate-300 dark:hover:text-slate-300">Services</a>
            <a href="#about" className="hover:text-slate-600 dark:text-slate-300 dark:hover:text-slate-300">About</a>
            <a href="#contact" className="hover:text-slate-600 dark:text-slate-300 dark:hover:text-slate-300">Talk to Us</a>
            <a href="tel:+18186331541" className="inline-flex items-center gap-2 text-slate-700 dark:text-slate-300 dark:text-slate-300"><Phone className="h-4 w-4"/>+1 (818) 633‑1541</a>
            <Button variant="outline" size="sm" onClick={toggleTheme} aria-pressed={isDark} className="ml-2">
              {isDark ? "Light" : "Dark"}
            </Button>
          </nav>

          {/* Mobile CTA */}
          <div className="md:hidden flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={toggleTheme} aria-pressed={isDark}>{isDark ? "Light" : "Dark"}</Button>
            <a href="#contact"><Button size="sm">Let’s talk</Button></a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <Badge className="rounded-full px-3 py-1">Based in California, USA</Badge>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              Software that ships fast, scales smoothly, and feels delightful
            </h1>
            <p className="mt-4 text-slate-600 dark:text-slate-300 text-lg">
              Arvation builds modern software products and automation systems for ambitious teams. We combine <span className="font-semibold">AI</span>,
              <span className="font-semibold"> automation</span>, solid <span className="font-semibold">backend</span> foundations, and elegant <span className="font-semibold">frontend</span> design to drive real outcomes.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {services.map((s) => (
                <Badge key={s.label} variant="secondary" className="px-3 py-1 text-sm rounded-full">
                  {s.label}
                </Badge>
              ))}
            </div>
            <div className="mt-8 flex gap-3">
              <a href="#contact"><Button size="lg">Start a project</Button></a>
              <a href="#work"><Button size="lg" variant="outline">See our work</Button></a>
            </div>
            <p className="mt-6 text-sm text-slate-500">Owner: <span className="font-medium">Abdelrahman Rady</span></p>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-3xl bg-white dark:bg-slate-900 shadow-lg ring-1 ring-slate-200 dark:ring-slate-800 p-6">
              <div className="grid grid-cols-2 gap-4 h-full">
                {services.map(({ icon: Icon, label, desc }) => (
                  <Card key={label} className="border-slate-200 dark:border-slate-800 shadow-sm">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2">
                        <Icon className="h-5 w-5" />
                        <CardTitle className="text-base">{label}</CardTitle>
                      </div>
                      <CardDescription className="text-sm">{desc}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Selected Projects</h2>
            <p className="mt-2 text-slate-600 dark:text-slate-300">A few things we’ve built recently.</p>
          </div>
        </div>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {projects.map((p) => {
            
            return (
              <a key={p.title} href={p.href} target="_blank" rel="noreferrer" className="block group transition-transform hover:scale-[1.02] hover:shadow-[0_8px_22px_rgba(0,0,0,0.08)]">
                <Card className="hover:shadow-md transition-shadow border-slate-200 dark:border-slate-800">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-2 font-semibold hover:text-slate-900 dark:hover:text-white transition-colors relative after:block after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-current group-hover:after:w-full after:transition-all after:duration-300">{p.title}</span>
                      <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 " />
                    </CardTitle>
                    <CardDescription>{p.blurb}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <Badge key={t} variant="outline" className="rounded-full">{t}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </a>
            );
          })}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="mx-auto max-w-7xl px-6 py-16">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">What we do</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300">From idea to launch, we partner with you to design, build, and automate.</p>
        </div>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, label, desc }) => (
            <Card key={label} className="border-slate-200 dark:border-slate-800">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 mb-1">
                  <Icon className="h-5 w-5" />
                  <CardTitle className="text-lg">{label}</CardTitle>
                </div>
                <CardDescription>{desc}</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed list-disc pl-5">
                  {label === "AI" && (
                    <>
                      <li>Chatbots, copilots, and retrieval‑augmented apps</li>
                      <li>Fine‑tuning, embeddings, vector search</li>
                      <li>Data pipelines and analytics</li>
                    </>
                  )}
                  {label === "Automation" && (
                    <>
                      <li>n8n, Zapier, custom API orchestration</li>
                      <li>Back‑office process automation</li>
                      <li>Monitoring and reliability</li>
                    </>
                  )}
                  {label === "Frontend" && (
                    <>
                      <li>React, Next.js, Tailwind</li>
                      <li>Design systems and accessibility</li>
                      <li>Performance optimization</li>
                    </>
                  )}
                  {label === "Backend" && (
                    <>
                      <li>Node.js, Python, REST/GraphQL</li>
                      <li>AWS, serverless, containers</li>
                      <li>Auth, payments, multi‑tenant SaaS</li>
                    </>
                  )}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">About Arvation</h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300 text-lg">
              We’re a software company based in California, USA, owned by <span className="font-semibold">Abdelrahman Rady</span>. Our team blends
              engineering rigor with product taste. We’ve shipped consumer apps, creator tooling, e‑commerce, and automation
              systems that help teams move faster and smarter.
            </p>
            <div className="mt-6 flex flex-col gap-2 text-slate-700 dark:text-slate-300">
              <div className="inline-flex items-center gap-2 font-semibold hover:text-slate-900 dark:hover:text-white transition-colors relative after:block after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-current group-hover:after:w-full after:transition-all after:duration-300"><MapPin className="h-4 w-4"/>California, United States</div>
              <a className="inline-flex items-center gap-2 font-semibold hover:text-slate-900 dark:hover:text-white transition-colors relative after:block after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-current group-hover:after:w-full after:transition-all after:duration-300" href="tel:+18186331541"><Phone className="h-4 w-4"/>+1 (818) 633‑1541</a>
              <a className="inline-flex items-center gap-2 font-semibold hover:text-slate-900 dark:hover:text-white transition-colors relative after:block after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-current group-hover:after:w-full after:transition-all after:duration-300" href="mailto:hello@arvation.com"><Mail className="h-4 w-4"/>hello@arvation.com</a>
            </div>
          </div>
          <Card className="border-slate-200 dark:border-slate-800">
            <CardHeader className="pb-2">
              <CardTitle>Why teams work with us</CardTitle>
              <CardDescription>Clear communication, fast iterations, and measurable outcomes.</CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                <li>• Outcome‑focused: we define success metrics together.</li>
                <li>• Senior execution: from discovery to launch, with CI/CD baked in.</li>
                <li>• Transparent pricing: scoped phases, no surprises.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CONTACT / TALK TO US */}
      <section id="contact" className="mx-auto max-w-7xl px-6 py-16">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Talk to us</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300">Have a project in mind? Tell us a bit about it and we’ll get back to you.</p>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <Card className="md:col-span-2 border-slate-200 dark:border-slate-800">
            <CardHeader className="pb-2">
              <CardTitle>Start the conversation</CardTitle>
              <CardDescription>We typically reply within one business day.</CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <form
                className="grid gap-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  const mailto = `mailto:hello@arvation.com?subject=New project inquiry from ${encodeURIComponent(
                    form.name || "Website Visitor"
                  )}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
                  window.location.href = mailto;
                }}
              >
                <div className="grid gap-2">
                  <label className="text-sm font-medium">Your name</label>
                  <Input
                    placeholder="Jane Doe"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <label className="text-sm font-medium">Tell us about your project</label>
                  <Textarea
                    placeholder="What are you building? Timeline? Budget range?"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="min-h-[140px]"
                    required
                  />
                </div>
                <div className="flex items-center gap-3">
                  <Button type="submit">Send inquiry</Button>
                  <a href="tel:+18186331541" className="inline-flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-slate-900">
                    <Phone className="h-4 w-4"/> Call us
                  </a>
                </div>
              </form>
            </CardContent>
          </Card>
          <Card className="border-slate-200 dark:border-slate-800">
            <CardHeader className="pb-2">
              <CardTitle>Contact details</CardTitle>
              <CardDescription>Prefer a direct line?</CardDescription>
            </CardHeader>
            <CardContent className="pt-0 space-y-3 text-slate-700 dark:text-slate-300">
              <div className="inline-flex items-center gap-2 font-semibold hover:text-slate-900 dark:hover:text-white transition-colors relative after:block after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-current group-hover:after:w-full after:transition-all after:duration-300"><MapPin className="h-4 w-4"/>California, USA</div>
              <a className="inline-flex items-center gap-2 font-semibold hover:text-slate-900 dark:hover:text-white transition-colors relative after:block after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-current group-hover:after:w-full after:transition-all after:duration-300" href="tel:+18186331541"><Phone className="h-4 w-4"/>+1 (818) 633‑1541</a>
              <a className="inline-flex items-center gap-2 font-semibold hover:text-slate-900 dark:hover:text-white transition-colors relative after:block after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-current group-hover:after:w-full after:transition-all after:duration-300" href="mailto:hello@arvation.com"><Mail className="h-4 w-4"/>hello@arvation.com</a>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-6 py-10 grid md:grid-cols-2 gap-6 items-center">
          <div className="text-sm text-slate-600 dark:text-slate-300">
            © {new Date().getFullYear()} Arvation. All rights reserved.
            <span className="mx-2">·</span>
            Owned by <span className="font-medium">Abdelrahman Rady</span>
          </div>
          <div className="md:text-right text-sm">
            <a href="#services" className="hover:text-slate-800">AI</a>
            <span className="mx-2 text-slate-300">/</span>
            <a href="#services" className="hover:text-slate-800">Automation</a>
            <span className="mx-2 text-slate-300">/</span>
            <a href="#services" className="hover:text-slate-800">Backend</a>
            <span className="mx-2 text-slate-300">/</span>
            <a href="#services" className="hover:text-slate-800">Frontend</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
