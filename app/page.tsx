'use client';

import { FormEvent, useState } from 'react';

const steps = [
  {
    title: 'Parent gets a simple daily reminder',
    description:
      'A calm, easy prompt arrives at the same time every day so no one has to nag or guess.',
  },
  {
    title: 'They confirm with one tap',
    description:
      'A single tap is enough to tell you they remembered without a call or text.',
  },
  {
    title: 'You get a quiet confirmation',
    description:
      'You receive a subtle update that lets you breathe a little easier even when you are busy.',
  },
];

const benefits = [
  'Reduce daily worry',
  'Respect independence',
  'Stay informed without calling',
];

const audienceOptions = [
  { value: 'parent', label: 'My parent' },
  { value: 'spouse', label: "My spouse's parent" },
  { value: 'both', label: 'Both' },
];

type SubmissionStatus = 'idle' | 'sending' | 'success' | 'error';

export default function HomePage() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [audience, setAudience] = useState(audienceOptions[0].value);
  const [status, setStatus] = useState<SubmissionStatus>('idle');
  const [responseMessage, setResponseMessage] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!name.trim()) {
      setStatus('error');
      setResponseMessage('Please tell us your name so we can personalize the invite.');
      return;
    }

    if (!email.trim()) {
      setStatus('error');
      setResponseMessage('Please add an email so we know where to reach you.');
      return;
    }

    setStatus('sending');
    setResponseMessage('');

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), audience }),
      });

      if (!res.ok) {
        throw new Error('Failed to submit');
      }

      const data = await res.json();
      setStatus('success');
      setResponseMessage(data.message);
      setEmail('');
      setName('');
    } catch (error) {
      console.error(error);
      setStatus('error');
      setResponseMessage('Something went wrong. Please try again soon.');
    }
  }

  const isSending = status === 'sending';

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-100 to-slate-50 px-4 py-12 md:py-20">
      <div className="mx-auto max-w-6xl space-y-16">
        {/* Hero section introduces the service and sets an emotional, reassuring tone. */}
        <section className="rounded-[32px] border border-transparent bg-gradient-to-br from-slate-900/95 via-ocean-deep/90 to-slate-800/95 p-10 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.9)] text-slate-50">
          <div className="flex flex-col gap-10 md:flex-row md:items-center">
            <div className="flex-1 space-y-6">
              <p className="text-[0.65rem] uppercase tracking-[0.5em] text-slate-300">Medication check-in</p>
              <h1 className="text-3xl font-semibold text-white sm:text-4xl md:text-5xl">
                Know your parents took their medication—without asking.
              </h1>
              <p className="text-lg leading-relaxed text-slate-200">
                A simple way to get daily peace of mind while giving them the dignity to stay in control. Quiet
                confidence, gently delivered, for adult children who worry their parents might miss a dose.
              </p>
              <div className="flex flex-col gap-3 md:flex-row md:items-center">
                <a
                  href="#waitlist"
                  className="inline-flex items-center justify-center rounded-full bg-[#f4f7ff]/90 px-7 py-3 text-base font-semibold text-slate-900 shadow-[0_15px_45px_-25px_rgba(15,23,42,0.8)] transition hover:bg-white/95"
                >
                  Join the waitlist
                </a>
                <p className="text-sm text-slate-200">
                  Peace of mind confirmed in under five seconds, every morning.
                </p>
              </div>
            </div>
            <div className="flex-1 rounded-[28px] border border-white/20 bg-slate-950/60 p-6 text-slate-100 shadow-[0_25px_60px_-35px_rgba(15,23,42,0.85)]">
              <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Quiet confidence</p>
              <p className="mt-3 text-xl font-semibold text-white">Check in without interrupting the routine.</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                Gentle reminders for them, calm confirmations for you—right when the medication is taken.
              </p>
            </div>
          </div>
        </section>

        {/* How it works section outlines the simple, respectful experience parents and children share. */}
        <section className="space-y-10 rounded-[32px] border border-slate-900/10 bg-gradient-to-br from-slate-900/5 via-slate-100 to-slate-50 p-10 shadow-[0_25px_45px_-30px_rgba(15,23,42,0.55)] text-slate-900">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">How it works</h2>
              <p className="text-slate-600">Three calm steps keep the routine respectful and organized.</p>
            </div>
            <div className="rounded-full border border-slate-300 px-5 py-2 text-sm font-medium text-slate-600">
              Designed for connection
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((step) => (
              <article
                key={step.title}
                className="flex h-full flex-col gap-3 rounded-2xl border border-white/70 bg-gradient-to-b from-white via-slate-50 to-slate-100 p-6 text-slate-900 shadow-[0_18px_40px_-30px_rgba(15,23,42,0.8)]"
              >
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.6em] text-slate-400">Step</p>
                <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Benefits section highlights the emotional return for the adult child. */}
        <section className="space-y-10 rounded-[32px] border border-slate-900/10 bg-gradient-to-br from-slate-900/5 via-slate-100 to-slate-50 p-10 shadow-[0_25px_55px_-30px_rgba(15,23,42,0.55)] text-slate-900">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">Benefits</h2>
            <p className="text-slate-600">Stay present without micromanaging the daily routine.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex flex-1 flex-col gap-3 rounded-2xl border border-white/70 bg-gradient-to-b from-white via-slate-50 to-slate-100 px-6 py-6 shadow-[0_20px_40px_-30px_rgba(15,23,42,0.7)]"
              >
                <p className="text-lg font-semibold text-slate-900">{benefit}</p>
                <p className="text-sm leading-relaxed text-slate-600">
                  {benefit === 'Reduce daily worry'
                    ? 'Track the day-to-day without scrolling back through unread texts or missed calls.'
                    : benefit === 'Respect independence'
                    ? 'Let them stay in control while you quietly witness their signal.'
                    : 'Feel confident that you are informed without needing to ask for updates.'}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Waitlist section collects contact details and shows a thank-you message after each successful submit. */}
        <section
          id="waitlist"
          className="space-y-6 rounded-[32px] border border-slate-900/10 bg-gradient-to-br from-slate-900/5 via-slate-100 to-slate-50 p-10 shadow-[0_30px_60px_-35px_rgba(15,23,42,0.55)] text-slate-900"
        >
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">Join the early access waitlist</h2>
            <p className="text-slate-600">We will send a quiet invite before the wider release.</p>
          </div>
          <form className="grid gap-4 md:grid-cols-2" onSubmit={handleSubmit}>
            <label className="flex flex-col gap-2 text-sm font-semibold text-slate-600">
              Full name
              <input
                type="text"
                className="w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-base text-slate-900 shadow-[0_15px_25px_-20px_rgba(15,23,42,0.8)] transition focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Your name"
                required
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-semibold text-slate-600">
              Email address
              <input
                type="email"
                className="w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-base text-slate-900 shadow-[0_15px_25px_-20px_rgba(15,23,42,0.8)] transition focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@example.com"
                required
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-semibold text-slate-600">
              Who is this for?
              <select
                className="w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-base text-slate-900 shadow-[0_15px_25px_-20px_rgba(15,23,42,0.8)] transition focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200"
                value={audience}
                onChange={(event) => setAudience(event.target.value)}
              >
                {audienceOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
            <button
              type="submit"
              className="flex items-center justify-center rounded-2xl bg-slate-900 px-8 py-3 text-base font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-500"
              disabled={isSending}
            >
              {isSending ? 'Sending...' : 'Get early access'}
            </button>
          </form>
          <p className="text-sm text-slate-600">
            Adult children worry the most when a dose is missed; this waitlist just listens, then quietly lets you know.
          </p>
          {status === 'success' && (
            <p className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
              {responseMessage || 'Thank you! We will email you as soon as we launch.'}
            </p>
          )}
          {status === 'error' && (
            <p className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-800">
              {responseMessage}
            </p>
          )}
        </section>
      </div>
    </main>
  );
}
