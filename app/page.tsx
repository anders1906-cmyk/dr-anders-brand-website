"use client";

import { ArrowRight, Award, Briefcase, Building2, Mic2, Quote, Sparkles, Users } from "lucide-react";

export default function DrAndersWebsite() {
  const nav = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Speaking", href: "#speaking" },
    { label: "Research", href: "#research" },
    { label: "Books", href: "#book" },
    { label: "Results", href: "#results" }

  ];

  const trustBar = [
    "Advises institutions on building educator pipelines that recruit, prepare, and retain educators of color",
    "Leads national conversations on educator diversity and systems change",
    "Designs research-informed frameworks for teacher education redesign",
    "Author of Becoming Visible and creator of the C.A.R.E. Model",
  ];

  const serviceCards = [
    {
      icon: Building2,
      title: "Institutional Consulting",
      text: "Advises universities, school districts, teacher education programs, and mission-driven organizations on educator pipeline strategy, teacher education redesign, workforce alignment, and equity-centered implementation.",
    },
    {
      icon: Mic2,
      title: "Keynotes & Executive Speaking",
      text: "High-impact talks for conferences, leadership retreats, convenings, affinity spaces, and educator summits that move leaders from awareness to action, and from conversation to implementation.",
    },
    {
      icon: Briefcase,
      title: "Strategic Advisory",
      text: "Thought partnership for executive leaders navigating institutional complexity, public credibility, stakeholder alignment, and long-term positioning within broader education systems.",
    },
  ];

  const offerings = [
    {
      title: "Signature Consulting",
      subtitle: "C.A.R.E. Model: Strategy and Implementation",
      text: "A flagship consulting engagement focused on designing and strengthening educator pipelines through Community, Access, Representation, and Equity. Built for institutions ready to move beyond symbolic efforts and implement durable, equity-centered systems.",
      bullets: [
        "Educator pipeline design and systems mapping",
        "Recruitment, persistence, and retention strategy",
        "Program redesign for belonging and long-term impact",
        "Executive advisory and implementation roadmaps",
      ],
    },
    {
      title: "Speaking & Convenings",
      subtitle: "National Speaker. Strategic Clarity. Clear Message.",
      text: "Designed for organizations seeking a speaker who can command the room, sharpen the conversation, and equip leaders with a stronger strategic lens for educator pipeline design, equity, and institutional transformation.",
      bullets: [
        "Conference keynotes",
        "Executive roundtables",
        "Moderated panels and featured conversations",
        "Campus, district, and policy convenings",
      ],
    },
    {
      title: "Executive Intensives",
      subtitle: "Focused sessions for leadership teams",
      text: "Tailored workshops and strategic intensives that help leadership teams align around educator workforce goals, institutional barriers, partnership strategy, and practical next moves.",
      bullets: [
        "Senior leadership retreats",
        "Department, faculty, and staff strategy sessions",
        "Cross-sector partnership design",
        "Equity-centered planning intensives",
        "Dean and executive leadership briefings"
      ],
    },
  ];

  const topics = [
    "Building and sustaining Black male educator pipelines",
    "Teacher education redesign for equity, belonging, and persistence",
    "Recruitment, preparation, certification, and workforce transition",
    "Representation, mentorship, and systems change",
    "Educator diversity strategy in a changing national landscape",
    "Institutional leadership, partnership, and implementation",
  ];

  const stats = [
    { label: "Large-scale educator pipeline coordination across multiple teacher education institutions" },
    { value: "1", label: "National voice with a clear lane in educator pipeline design" },
    { value: "3", label: "Primary lanes: consulting, speaking, and thought leadership" },
    { value: "100%", label: "Positioned around equity-driven institutional design and measurable outcomes" },
  ];

  const authorityPoints = [
    "Doctoral research examining Black male preservice teachers and the structural redesign of teacher education for equity",
    "Leadership experience guiding large-scale, cross-institutional educator pipeline efforts focused on men of color",
    "National voice across research, policy, institutional practice, and community-based leadership",
    "Author of Becoming Visible and creator of the C.A.R.E. Model",
  ];

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-stone-950/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div>
            <div className="text-lg font-semibold tracking-wide text-white">Dr. William A. Anders</div>
            <div className="text-sm text-stone-400">National Speaker | Consultant | Educator Pipeline Expert</div>
          </div>
          {/* Mobile Home button — only visible on small screens */}
          <a href="#" className="lg:hidden rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/5">
            Home
          </a>
          {/* Desktop nav — only visible on large screens */}
          <nav className="hidden items-center gap-6 lg:flex">
            {[{ label: "Home", href: "#" }, ...nav].map((item) => (
              <a key={item.label} href={item.href} className="text-sm text-stone-300 transition hover:text-white">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="rounded-full bg-[#917158] px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#7B5C45]">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(145,113,88,0.17),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(145,113,88,0.14),transparent_32%)]" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#917158]/40 to-transparent" />
          <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
            <div className="grid items-center gap-10 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#917158]/30 bg-[#917158]/10 px-4 py-1.5 text-sm text-[#B29671]">
                  <Sparkles className="h-4 w-4" />
                  Trusted voice in educator pipeline design, teacher education redesign, and equity-driven institutional strategy
                </div>
                <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
                  Designing and strengthening educator pipelines through national speaking, consulting, and research-driven frameworks
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-300 md:text-xl">
                  Dr. William A. Anders works with school districts, higher education institutions, and education leaders to design stronger educator pipelines, align teacher preparation with workforce outcomes, and lead with clarity in a shifting national landscape. His work supports organizations seeking strategic direction, measurable impact, and sustainable results.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a href="#contact" className="inline-flex items-center gap-2 rounded-2xl bg-[#917158] px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-[#917158]/20 transition hover:-translate-y-0.5 hover:bg-[#7B5C45]">
                    Book Dr. Anders
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a href="#services" className="rounded-2xl border-2 border-[#917158]/60 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/5">
                    Explore Consulting Services
                  </a>
                </div>
              </div>
              <div className="lg:col-span-5 flex items-start justify-center lg:-mt-52">
                <img
                  src="/home.png"
                  alt="Dr. Anders leading a session"
                  className="rounded-[2rem] w-full object-cover shadow-2xl shadow-black/40 border border-white/10 h-[450px]"
                />
              </div>


            </div>
          </div>
        </section>

        {/* ── EXECUTIVE POSITIONING — CREAM ── */}
        <section className="relative overflow-hidden bg-[#F2EBE3]">
          {/* Image with smooth radial fade — no hard edges */}
          <div
            className="absolute inset-0 bg-no-repeat"
            style={{
              backgroundImage: "url('/executive.png')",
              backgroundPosition: "bottom left",
              backgroundSize: "75% auto",
              maskImage: "radial-gradient(ellipse 55% 95% at 0% 100%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0) 95%)",
              WebkitMaskImage: "radial-gradient(ellipse 55% 95% at 0% 100%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0) 95%)"
            }}
          />

          <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="lg:pr-8 lg:min-h-[360px]">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#917158]">Executive Positioning</p>
                <h2 className="mt-3 text-3xl font-medium leading-tight text-stone-900 font-serif md:text-4xl md:leading-[1.2]">
                  Scholar-practitioner. Systems builder. National voice on redesigning educator pipelines with equity at the center.
                </h2>
              </div>

              <div className="grid gap-4 md:grid-cols-2 auto-rows-fr text-sm text-stone-300">
                {trustBar.map((item) => (
                  <div key={item} className="flex h-full items-center gap-3 rounded-xl border-2 border-[#917158]/60 bg-stone-950 px-4 py-3">
                    <Award className="h-4 w-4 text-[#B29671] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#B29671]">About</p>
              <h2 className="mt-3 text-3xl font-semibold text-white md:text-5xl leading-tight md:leading-[1.2]">
                Designing educator pipelines that advance equity, access, and long-term impact nationwide
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="rounded-[2rem] border-2 border-[#917158]/50 bg-white/5 p-8 md:p-10">
                <p className="text-lg leading-8 text-stone-300">
                  Dr. William A. Anders is a nationally recognized speaker, consultant, and scholar-practitioner specializing in teacher education redesign, educator pipeline strategy, and Black male educator pipelines. He works with school districts, higher education institutions, teacher education programs, faculty, staff, deans, and executive leaders to move from fragmented efforts to aligned, outcome-driven systems that strengthen representation, improve persistence, and build durable educator pipelines.
                </p>
                {/* ✅ ADD IMAGES HERE */}
                <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
                  <img src="/about1.png" className="rounded-xl object-cover h-48 w-full" />
                  <img src="/about2.png" className="rounded-xl object-cover h-48 w-full" />
                  <img src="/about3.jpg" className="rounded-xl object-cover h-48 w-full" />
                </div>
                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  {authorityPoints.map((point) => (
                    <div key={point} className="rounded-2xl border-2 border-[#917158]/60 bg-stone-900/70 p-5 text-sm leading-7 text-stone-300">
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SERVICES — CREAM ── */}
        <section id="services" className="bg-[#F2EBE3]">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#917158]">Services</p>
              <h2 className="mt-3 text-3xl font-semibold text-stone-900 md:text-5xl leading-tight md:leading-[1.2] font-serif">
                Strategic services for educator pipeline design and institutional transformation
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {serviceCards.map((card) => {
                const Icon = card.icon;
                return (
                  <div key={card.title} className="rounded-[2rem] border-2 border-[#917158]/60 bg-stone-950 p-7 shadow-xl shadow-black/20">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#917158]/20 text-[#B29671]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-2xl font-semibold text-white">{card.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-stone-400">{card.text}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {offerings.map((item) => (
                <div key={item.title} className="rounded-[2rem] border-2 border-[#917158]/60 bg-stone-950 p-7">
                  <div className="text-sm uppercase tracking-[0.2em] text-stone-400">{item.title}</div>
                  <h3 className="mt-3 text-2xl font-semibold text-white">{item.subtitle}</h3>
                  <p className="mt-4 text-sm leading-7 text-stone-300">{item.text}</p>
                  <div className="mt-6 space-y-3">
                    {item.bullets.map((bullet) => (
                      <div key={bullet} className="rounded-xl border-2 border-[#917158]/60 bg-stone-900 px-4 py-3 text-sm text-stone-300">
                        {bullet}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="speaking" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#B29671]">Speaking</p>
              <h2 className="mt-3 text-3xl font-semibold text-white md:text-5xl">
                Nationally recognized speaker on educator pipeline design, teacher education redesign, and institutional transformation
              </h2>
              <p className="mt-4 text-lg leading-8 text-stone-300">
                For conference organizers, school districts, higher education institutions, and leadership teams, Dr. Anders delivers more than a keynote. He brings a clear, systems-driven approach to educator pipeline design, teacher education redesign, institutional alignment, and measurable outcomes. He equips organizations to move from intention to execution and from fragmented efforts to sustained impact.
              </p>
              <div className="mt-8 rounded-[2rem] border border-[#917158]/30 bg-[#917158]/10 p-6">
                <div className="flex items-start gap-4">
                  <Quote className="mt-1 h-5 w-5 text-[#B29671]" />
                  <p className="text-base leading-8 text-[#C1A788]">
                    Designing educator pipelines that recruit, sustain, develop, and transform the future educator workforce.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 space-y-6">

              {/* ✅ Images */}
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="/speaker1.png"
                  alt="Speaking Event 1"
                  className="rounded-2xl h-56 w-full object-cover shadow-lg"
                />
                <img
                  src="/speaker2.png"
                  alt="Speaking Event 2"
                  className="rounded-2xl h-56 w-full object-cover shadow-lg"
                />
              </div>

              {/* ✅ Topics */}
              <div className="grid gap-4 md:grid-cols-2">
                {topics.map((topic) => (
                  <div
                    key={topic}
                    className="rounded-[2rem] border-2 border-[#917158]/60 bg-white/5 p-6 text-base leading-7 text-stone-200 shadow-lg shadow-black/10"
                  >
                    {topic}
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* ── RESEARCH & THOUGHT LEADERSHIP — CREAM ── */}
        <section id="research" className="bg-[#F2EBE3]">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#917158]">Research & Thought Leadership</p>
                <h2 className="mt-3 text-3xl font-semibold text-stone-900 md:text-5xl leading-tight md:leading-[1.2] font-serif">
                  Grounded in research and designed to drive institutional change across educator pipelines and teacher education systems
                </h2>
              </div>
              <div className="lg:col-span-7 space-y-5">
                <div className="rounded-[2rem] border-2 border-[#917158]/60 bg-stone-950 p-7">
                  <div className="text-sm uppercase tracking-[0.2em] text-stone-400">Dissertation</div>
                  <h3 className="mt-3 text-2xl font-semibold text-white">
                    A Phenomenologically Informed Study of Black Male Preservice Teachers’ Lived Experiences
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-stone-300">
                    A doctoral research agenda examining how Black male preservice teachers navigate and are positioned within teacher education. It advances a systems-level critique and lays the foundation for redesigning educator pipelines through an equity-driven lens.
                  </p>
                  {/* ✅ ADD BUTTON HERE */}
                  <div className="mt-6">
                    <a
                      href="https://academicworks.cuny.edu/cgi/viewcontent.cgi?article=1039&context=si_etds"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block rounded-xl bg-[#917158] px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#7B5C45]"
                    >
                      Research Foundation
                    </a>
                  </div>
                </div>
                <div className="rounded-[2rem] border-2 border-[#917158]/60 bg-stone-950 p-7">
                  <div className="text-sm uppercase tracking-[0.2em] text-stone-400">Book Platform</div>
                  <h3 className="mt-3 text-2xl font-semibold text-white">Becoming Visible</h3>
                  <p className="mt-4 text-sm leading-7 text-stone-300">
                    A public-facing thought leadership platform that translates Dr. Anders’ research into a national conversation on Black men, teacher education, educator pipeline design, and institutional transformation.
                  </p>

                </div>
                <div className="rounded-[2rem] border-2 border-[#917158]/60 bg-stone-950 p-7">
                  <div className="text-sm uppercase tracking-[0.2em] text-stone-400">Framework</div>
                  <h3 className="mt-3 text-2xl font-semibold text-white">The C.A.R.E. Model</h3>
                  <p className="mt-4 text-sm leading-7 text-stone-300">
                    Community, Access, Representation, and Equity. Dr. Anders’ signature framework for helping institutions design, assess, and strengthen educator pipelines through an equity-centered consulting methodology.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="book" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

          {/* ── BOOK 1 ── */}
          <div className="grid gap-10 lg:grid-cols-12 items-center">

            <div className="lg:col-span-6">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#B29671]">
                Books
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white md:text-5xl">
                BECOMING VISIBLE
              </h2>
              <p className="mt-4 text-lg text-stone-300 leading-8">
                Becoming Visible translates Dr. Anders' research and lived experience into a clear call for teacher education redesign.
                Through the experiences of Black male preservice teachers, the book challenges systems that demand assimilation and offers leaders a framework for building educator pipelines rooted in community, access,
                representation, and equity.
              </p>
              <div className="mt-6 inline-block rounded-full border border-[#917158]/40 bg-[#917158]/10 px-5 py-2 text-sm text-[#B29671]">
                Available in Paperback, Hardback, and Ebook
              </div>
              <div className="mt-6 flex gap-4">

                <a href="https://www.amazon.com/dp/B0GW61CDSN"
                  target="_blank"
                  className="rounded-2xl bg-[#917158] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#7B5C45]">
                  Order Becoming Visible
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 flex justify-center">
              <img
                src="/cover.png"
                alt="Book Cover"
                className="h-[380px] w-[260px] object-cover rounded-xl border border-white/10 shadow-lg"
              />
            </div>

          </div>

          {/* ── BOOK 2 ── */}
          <div className="grid gap-10 lg:grid-cols-12 items-center mt-20 pt-20 border-t border-white/10">

            <div className="lg:col-span-6">
              <h2 className="mt-3 text-3xl font-semibold text-white md:text-5xl">
                BUILT DIFFERENT
              </h2>
              <p className="mt-4 text-lg text-stone-300 leading-8">
                Built Different is a practical and personal guide for students navigating the HBCU journey from choosing the right institution to building success academically,
                socially, and professionally. Grounded in the C.A.R.E. Model, the book offers real-world strategies, mentorship insights,
                and leadership lessons that help first-generation students build confidence, community, and purpose through the HBCU experience.

              </p>

              <div className="mt-6 flex gap-4">

                <a href="#"
                  target="_blank"
                  className="rounded-2xl bg-[#917158] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#7B5C45]">
                  Coming Soon
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 flex justify-center">
              <div className="relative h-[380px] w-[260px] rounded-xl border border-[#917158]/40 bg-gradient-to-br from-stone-900 to-black shadow-2xl overflow-hidden">

                {/* Decorative border */}
                <div className="absolute inset-3 rounded-lg border border-dashed border-[#917158]/40" />

                {/* Question Mark */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                  <div className="text-8xl font-bold text-[#B29671] opacity-90">
                    ?
                  </div>

                  <div className="mt-6 text-sm uppercase tracking-[0.25em] text-[#B29671]">
                    Cover Reveal
                  </div>

                  <div className="mt-2 text-3xl font-semibold text-[#B29671]">
                    Coming Soon
                  </div>
                </div>
              </div>
            </div>

          </div>

        </section >

        {/* ── RESULTS — CREAM ── */}
        <section id="results" className="bg-[#F2EBE3]">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#917158]">Results & Brand Signals</p>
              <h2 className="mt-3 text-3xl font-semibold text-stone-900 md:text-5xl leading-tight md:leading-[1.2] font-serif">
                Demonstrated impact, trusted partnerships, and systems-level results at scale
              </h2>
              <p className="mt-4 text-lg leading-8 text-stone-700">
                This work reflects applied leadership across educator pipeline design, institutional advising, and systems-level strategy.
                Each signal represents execution, credibility, and sustained impact.
              </p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-[2rem] border-2 border-[#917158]/60 bg-stone-950 p-7 text-center">
                  <div className="text-4xl font-semibold text-white">{stat.value}</div>
                  <div className="mt-3 text-sm leading-6 text-stone-400">{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="mt-10 rounded-[2rem] border-2 border-[#917158]/60 bg-stone-950 p-8">
              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl border-2 border-[#917158]/60 bg-stone-900 p-5">
                  <Users className="h-5 w-5 text-[#B29671]" />
                  <div className="mt-3 text-lg font-medium text-white">Trusted by Institutions Nationwide</div>
                  <p className="mt-2 text-sm leading-7 text-stone-400">Supports higher education systems, school districts, teacher education programs, and cross-sector partners focused on strengthening educator pipelines.</p>
                </div>
                <div className="rounded-2xl border-2 border-[#917158]/60 bg-stone-900 p-5">
                  <Mic2 className="h-5 w-5 text-[#B29671]" />
                  <div className="mt-3 text-lg font-medium text-white">Designed for Strategic Engagement</div>
                  <p className="mt-2 text-sm leading-7 text-stone-400">Each engagement moves leaders from conversation to execution through clear direction, aligned strategy, and measurable next steps.</p>
                </div>
                <div className="rounded-2xl border-2 border-[#917158]/60 bg-stone-900 p-5">
                  <Award className="h-5 w-5 text-[#B29671]" />
                  <div className="mt-3 text-lg font-medium text-white">Built for Measurable Impact </div>
                  <p className="mt-2 text-sm leading-7 text-stone-400">Advances outcomes that matter: stronger recruitment, improved persistence, certification progress, workforce transition, and sustainable educator pipeline development.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className=" border-t border-white/10 bg-gradient-to-br from-[#917158]/10 via-stone-950 to-stone-950">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className=" relative rounded-[2rem] border border-[#917158]/30 bg-black/20 p-8 md:p-10">
              <img
                src="/contact.jpg"
                alt="Contact"
                className="mt-8 w-full rounded-xl border border-white/10 shadow-lg object-cover h-64 lg:absolute lg:top-6 lg:right-16 lg:w-80 lg:h-77 lg:mt-0"
              />
              <div className="max-w-2xl mt-6 lg:mt-0">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#B29671]">Contact</p>
                <h2 className="mt-3 text-3xl font-semibold text-white md:text-5xl">
                  Book Dr. Anders for consulting, speaking, and strategic partnership.
                </h2>
                <p className="mt-4 text-lg leading-8 text-stone-300">
                  Partner with Dr. Anders to strengthen educator pipelines, align teacher education with workforce outcomes,
                  and move leadership teams from strategy to system-level execution. Each engagement delivers clear frameworks, targeted action, and sustained impact across the educator workforce lifecycle.
                </p>
              </div>
              <div className="mt-10 grid gap-5 md:grid-cols-3">
                <div className="rounded-2xl border-2 border-[#917158]/60 bg-stone-950/80 p-5">
                  <div className="text-sm text-stone-400">Email</div>
                  <div className="mt-2 text-lg font-medium text-white">Anders1906@gmail.com</div>
                  <div className="mt-4 space-y-2 border-t border-white/10 pt-4">
                    <a
                      href="https://instagram.com/dr.williamanders"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-stone-300 transition hover:text-[#B29671]"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#B29671]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                      @dr.williamanders
                    </a>
                    <a
                      href="https://tinyurl.com/56nfu46w"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-stone-300 transition hover:text-[#B29671]"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#B29671]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>
                <div className="rounded-2xl border-2 border-[#917158]/60 bg-stone-950/80 p-5">
                  <div className="text-sm text-stone-400">Positioning</div>
                  <div className="mt-2 text-lg font-medium text-white">Consultant, national speaker, and education systems architect</div>
                </div>
                <div className="rounded-2xl border-2 border-[#917158]/60 bg-stone-950/80 p-5">
                  <div className="text-sm text-stone-400">Primary Markets</div>
                  <div className="mt-2 text-lg font-medium text-white">Higher education institutions, school districts, teacher education programs, leadership teams, nonprofits, and conferences</div>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="mailto:Anders1906@gmail.com" className="rounded-2xl bg-[#917158] px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#7B5C45]">
                  Inquire About Consulting or Speaking
                </a>
                <a href="#speaking" className="rounded-2xl border-2 border-[#917158]/60 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/5">
                  Review Speaking Topics
                </a>
              </div>

            </div>
          </div>
        </section>
      </main >
    </div >
  );
}