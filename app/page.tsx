"use client";

import { useState } from "react";
import {
  ShieldCheck,
  CheckCircle2,
  Bot,
  Eye,
  BellRing,
  Smile,
  Users,
  BarChart3,
} from "lucide-react";

export default function Page() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          name: fullName,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to join waitlist");
      }

      setStatus("success");
      setMessage("You’re on the list. We’ll be in touch soon.");
      setFullName("");
      setEmail("");
    } catch (error) {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <main className="min-h-screen bg-[#f8f9ff] text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2">
            <ShieldCheck className="h-7 w-7 text-slate-900" />
            <span className="text-xl font-bold tracking-tight">Serene Guardian</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            <a href="#" className="font-medium text-slate-900 transition hover:text-slate-600">
              Home
            </a>
            <a
              href="#how-it-works"
              className="text-slate-500 transition hover:text-slate-800"
            >
              Process
            </a>
            <a href="#benefits" className="text-slate-500 transition hover:text-slate-800">
              Benefits
            </a>
            <a
              href="#waitlist"
              className="rounded-lg bg-slate-900 px-6 py-2 font-medium text-white transition hover:bg-slate-800"
            >
              Join Waitlist
            </a>
          </div>
        </nav>
      </header>

      <section className="relative overflow-hidden px-6 pb-24 pt-16 md:pb-32 md:pt-24">
        <div className="absolute right-0 top-0 -z-10 h-72 w-72 rounded-full bg-teal-200/40 blur-3xl" />
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <span className="mb-6 block text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">
              Empowering Independence
            </span>

            <h1 className="mb-8 max-w-4xl text-5xl font-extrabold leading-tight tracking-tight text-slate-950 md:text-7xl">
              Know they’re okay—
              <span className="italic text-teal-700"> without having to ask.</span>
            </h1>

            <p className="mb-10 max-w-2xl text-xl leading-relaxed text-slate-600">
              A simple way to get daily peace of mind while giving your parents the dignity
              to stay in control. No intrusive calls, just gentle reassurance.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#waitlist"
                className="rounded-lg bg-slate-900 px-8 py-4 text-center text-lg font-semibold text-white shadow-xl shadow-slate-900/10 transition hover:bg-slate-800"
              >
                Join the waitlist
              </a>
              <a
                href="#how-it-works"
                className="rounded-lg bg-slate-200 px-8 py-4 text-center text-lg font-semibold text-slate-700 transition hover:bg-slate-300"
              >
                View how it works
              </a>
            </div>
          </div>

          <div className="relative md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl shadow-slate-900/10">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYIorkOpRL8N9X5WeFcOGgu9oq5Rh-jfUopO5B8MtWhAlr1Q7uKDgNZ6OtMZZH2fk23Ay-ZIjmQRE0tfHSlicuiRA8HSr053J_UWOu59g_gXqhp0VoCbuplBvhh0t_KPyU0L_-9fwILvoX608ZzDFLZycNceC3XGTkQblh0tMV97rbLpGXHMOJ6VryU4okn42Mzmg1W9OPhFF-rH8jWMgb3vgWJS7ej58G4TyPnGtU4D0sxB5rP95314IO2tgcWYddacxbOiVOEDo"
                alt="Senior hands holding a glass of water and medication organizer in soft morning light"
                className="h-full w-full object-cover"
              />

              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/30 bg-white/80 p-5 backdrop-blur">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-teal-200 p-2 text-teal-900">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Activity Log</p>
                    <p className="text-xs text-slate-600">
                      Morning dosage confirmed 8:15 AM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="bg-[#eef4ff] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
            <span className="mb-4 block text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">
              The Process
            </span>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950">
              Seamless and dignified
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="group flex aspect-square flex-col justify-between rounded-3xl bg-white p-10 transition hover:-translate-y-1 hover:shadow-xl">
              <div className="w-fit rounded-xl bg-slate-100 p-4 transition group-hover:bg-slate-900 group-hover:text-white">
                <Bot className="h-8 w-8" />
              </div>
              <div>
                <h3 className="mb-4 text-2xl font-bold text-slate-950">Smart setup</h3>
                <p className="leading-relaxed text-slate-600">
                  Connect the discreet guardian sensor to their existing medication routine
                  in under five minutes.
                </p>
              </div>
            </div>

            <div className="group flex aspect-square flex-col justify-between rounded-3xl bg-white p-10 transition hover:-translate-y-1 hover:shadow-xl">
              <div className="w-fit rounded-xl bg-slate-100 p-4 transition group-hover:bg-slate-900 group-hover:text-white">
                <Eye className="h-8 w-8" />
              </div>
              <div>
                <h3 className="mb-4 text-2xl font-bold text-slate-950">Silent guardian</h3>
                <p className="leading-relaxed text-slate-600">
                  Our system detects medication activity without cameras or intrusive daily
                  check-in calls.
                </p>
              </div>
            </div>

            <div className="group flex aspect-square flex-col justify-between rounded-3xl bg-white p-10 transition hover:-translate-y-1 hover:shadow-xl">
              <div className="w-fit rounded-xl bg-slate-100 p-4 transition group-hover:bg-slate-900 group-hover:text-white">
                <BellRing className="h-8 w-8" />
              </div>
              <div>
                <h3 className="mb-4 text-2xl font-bold text-slate-950">Peace of mind</h3>
                <p className="leading-relaxed text-slate-600">
                  Receive a gentle notification only if a dose is missed, keeping you
                  informed, not anxious.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="bg-[#f8f9ff] px-6 py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-20 md:flex-row">
          <div className="md:w-1/2">
            <div className="md:sticky md:top-32">
              <span className="mb-4 block text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">
                Core Benefits
              </span>
              <h2 className="mb-8 text-4xl font-bold leading-tight tracking-tight text-slate-950 md:text-5xl">
                Designed for the modern family.
              </h2>
              <div className="mb-8 h-1 w-24 bg-teal-300" />
              <p className="text-lg leading-relaxed text-slate-600">
                Aging should not mean losing privacy. Serene Guardian stays in the
                background and only surfaces when attention is truly needed.
              </p>
            </div>
          </div>

          <div className="space-y-12 md:w-1/2">
            <div className="flex gap-6">
              <div className="shrink-0 text-teal-700">
                <Smile className="h-9 w-9" />
              </div>
              <div>
                <h4 className="mb-3 text-xl font-bold text-slate-950">Reduce worry</h4>
                <p className="leading-relaxed text-slate-600">
                  Stop wondering if they remembered. Get a clear signal when everything is
                  on track.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="shrink-0 text-teal-700">
                <Users className="h-9 w-9" />
              </div>
              <div>
                <h4 className="mb-3 text-xl font-bold text-slate-950">
                  Respect independence
                </h4>
                <p className="leading-relaxed text-slate-600">
                  Remove the “nagging” dynamic and preserve a healthier parent-child
                  relationship.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="shrink-0 text-teal-700">
                <BarChart3 className="h-9 w-9" />
              </div>
              <div>
                <h4 className="mb-3 text-xl font-bold text-slate-950">Stay informed</h4>
                <p className="leading-relaxed text-slate-600">
                  Spot patterns early with simple summaries and alerts delivered straight to
                  your phone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="waitlist" className="px-6 py-24">
        <div className="mx-auto flex max-w-5xl flex-col overflow-hidden rounded-3xl shadow-2xl shadow-slate-900/10 md:flex-row">
          <div className="bg-slate-900 p-12 text-white md:w-1/2">
            <h2 className="mb-6 text-3xl font-bold tracking-tight">
              Join the early access circle.
            </h2>
            <p className="text-lg leading-relaxed text-slate-300">
              We’re opening the pilot to a limited number of families. Reserve your spot
              today for a calmer tomorrow.
            </p>
          </div>

          <div className="bg-white p-12 md:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="fullName"
                  className="mb-2 block text-sm font-semibold text-slate-600"
                >
                  Full Name
                </label>
                <input
                  id="fullName"
                  type="text"
                  placeholder="Jane Doe"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full rounded-lg border-0 bg-slate-100 px-4 py-3 text-slate-900 outline-none ring-0 placeholder:text-slate-400 focus:bg-slate-50 focus:ring-2 focus:ring-teal-300"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-slate-600"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="jane@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border-0 bg-slate-100 px-4 py-3 text-slate-900 outline-none ring-0 placeholder:text-slate-400 focus:bg-slate-50 focus:ring-2 focus:ring-teal-300"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full rounded-lg bg-black py-4 text-lg font-bold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "loading" ? "Joining..." : "Get early access"}
              </button>

              {message ? (
                <p
                  className={`text-sm ${
                    status === "success" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {message}
                </p>
              ) : null}
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-slate-100 px-6 py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex flex-col gap-2">
            <span className="text-lg font-bold text-slate-900">Serene Guardian</span>
            <p className="max-w-md text-sm tracking-wide text-slate-500">
              © 2026 Serene Guardian. Calm medication support for modern families.
            </p>
          </div>

          <div className="flex gap-8">
            <a className="text-sm tracking-wide text-slate-500 transition hover:text-slate-800" href="#">
              Privacy Policy
            </a>
            <a className="text-sm tracking-wide text-slate-500 transition hover:text-slate-800" href="#">
              Terms of Service
            </a>
            <a className="text-sm tracking-wide text-slate-500 transition hover:text-slate-800" href="#">
              Contact Support
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}