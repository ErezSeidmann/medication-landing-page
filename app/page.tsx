'use client'

import { useState } from 'react'

export default function Home() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      setSubmitted(true)
      setEmail('')
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* HERO */}
      <section className="px-6 py-24 text-center">
        <h1 className="mb-8 max-w-4xl mx-auto text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
          Did they take it today
          <br />
          <span className="text-teal-700">
            Stop guessing Stop calling
          </span>
          <br />
          Only get alerted when something’s wrong
        </h1>

        <p className="mb-10 max-w-2xl mx-auto text-xl text-slate-600 leading-relaxed">
          Serene Guardian helps you know when your parent’s medication routine is on track
          without daily check-ins without cameras and without taking away their independence
        </p>

        <div className="flex flex-col items-center gap-4">
          <button
            onClick={() =>
              document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="rounded-2xl bg-teal-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-teal-700 transition"
          >
            Join the early access list
          </button>

          <p className="text-sm text-slate-500">
            Privacy first • No cameras • Built for real families
          </p>
        </div>

        <div className="mt-8 text-slate-600 text-sm">
          ✓ No cameras &nbsp;&nbsp; ✓ No daily check-ins &nbsp;&nbsp; ✓ Only alerts when needed
        </div>

        <p className="mt-4 text-sm text-slate-500">
          Limited early access • First families only
        </p>
      </section>

      {/* PAIN */}
      <section className="px-6 py-20 bg-slate-50 text-center">
        <h2 className="text-4xl font-bold mb-6">
          If you’re checking in every day you already know the problem
        </h2>

        <p className="max-w-2xl mx-auto text-lg text-slate-600 leading-relaxed">
          You’re not just asking how are you
          <br /><br />
          You’re really wondering
        </p>

        <ul className="mt-6 space-y-3 text-lg text-slate-700">
          <li>Did they remember their medication</li>
          <li>Should I call again</li>
          <li>Am I helping or just becoming a reminder service</li>
        </ul>

        <p className="mt-8 max-w-xl mx-auto text-slate-600">
          That daily uncertainty adds stress for you and pressure for them
          <br />
          Serene Guardian removes that tension
        </p>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-6 py-24 text-center">
        <h2 className="text-4xl font-bold mb-16">
          How it works
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Place it near their medication
            </h3>
            <p className="text-slate-600">
              No complicated setup No behavior change required
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">
              We detect routine activity
            </h3>
            <p className="text-slate-600">
              No cameras No app No constant reporting
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">
              You only hear from us when it matters
            </h3>
            <p className="text-slate-600">
              If everything is fine there is nothing to chase
              <br />
              If something is missed you know
            </p>
          </div>
        </div>

        <div className="mt-16">
          <button
            onClick={() =>
              document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="rounded-xl bg-black px-6 py-3 text-white font-semibold hover:bg-slate-800 transition"
          >
            Join early access
          </button>
        </div>
      </section>

      {/* DEMO */}
      <section className="px-6 py-20 bg-slate-50 text-center">
        <h2 className="text-3xl font-bold mb-10">
          What you actually see
        </h2>

        <div className="max-w-md mx-auto bg-white rounded-2xl shadow p-6 text-left space-y-4">
          <p className="text-green-600 font-semibold">
            ✓ Mom took medication 08:12 AM
          </p>

          <p className="text-slate-600">
            Everything looks normal today
          </p>

          <hr />

          <p className="text-red-500 font-semibold">
            ⚠ Missed dose detected
          </p>

          <p className="text-slate-600">
            You get notified only when something is off
          </p>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="px-6 py-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-4xl font-bold mb-8">
              Better than reminders
              <br />
              Better than guessing
            </h2>

            <p className="text-lg text-slate-600">
              Most solutions create more noise or more pressure
              Serene Guardian is built to reduce both
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h4 className="text-xl font-bold mb-2">
                Less chasing
              </h4>
              <p className="text-slate-600">
                You do not need to call every day just to check
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-2">
                Less pressure on them
              </h4>
              <p className="text-slate-600">
                Support without turning every conversation into reminders
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-2">
                More confidence when it matters
              </h4>
              <p className="text-slate-600">
                If something is missed you know early and can act
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WAITLIST */}
      <section id="waitlist" className="px-6 py-24 bg-slate-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">
          Get peace of mind before launch
        </h2>

        <p className="text-lg text-slate-300 mb-10 max-w-xl mx-auto">
          We are opening early access to a limited number of families
          Join the waitlist and be first to know when Serene Guardian is ready
        </p>

        {submitted ? (
          <p className="text-green-400 text-lg">
            You are on the list
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-3 rounded-xl text-black w-full"
            />

            <button
              type="submit"
              className="bg-teal-600 px-6 py-3 rounded-xl font-semibold hover:bg-teal-700 transition"
            >
              Join the waitlist
            </button>
          </form>
        )}

        <p className="text-sm text-slate-500 mt-4">
          No spam No commitment Just early access
        </p>
      </section>

    </main>
  )
}