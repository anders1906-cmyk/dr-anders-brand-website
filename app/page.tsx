"use client";

import { ArrowRight, Award, Briefcase, Building2, Mic2, Quote, Sparkles, Users } from "lucide-react";

export default function DrAndersWebsite() {
  const nav = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Speaking", href: "#speaking" },
    { label: "Research", href: "#research" },
    { label: "Book", href: "#book" },
    { label: "Results", href: "#results" },
    { label: "Contact", href: "#contact" },

  ];

  const trustBar = [
    "National speaker on educator diversity and systems change",
    "Advancing educator diversity across teacher education",
    "Scholar practitioner and author",
    "Trusted advisor on teacher education redesign",
  ];

  const serviceCards = [
    {
      icon: Building2,
      title: "Institutional Consulting",
      text: "Advising universities, districts, and mission driven organizations on educator pipeline strategy, teacher education redesign, and equity centered implementation.",
    },
    {
      icon: Mic2,
      title: "Keynotes & Executive Speaking",
      text: "High impact talks for conferences, leadership retreats, convenings, and educator summits that move audiences from awareness to action.",
    },
    {
      icon: Briefcase,
      title: "Strategic Advisory",
      text: "Thought partnership for executive leaders navigating institutional complexity, public credibility, stakeholder alignment, and long term positioning.",
    },
  ];

  const offerings = [
    {
      title: "Signature Consulting",
      subtitle: "C.A.R.E. Model Strategy and Implementation",
      text: "A premium consulting engagement focused on designing educator pipelines through Community, Access, Representation, and Equity. Ideal for institutions ready to move beyond symbolic efforts and build durable systems.",
      bullets: [
        "Pipeline design and systems mapping",
        "Recruitment and retention strategy",
        "Program redesign for belonging and persistence",
        "Leadership advisory and implementation roadmaps",
      ],
    },
    {
      title: "Speaking & Convenings",
      subtitle: "National speaker. Clear message. Executive presence.",
      text: "Built for organizations that want a speaker who can command the room, sharpen the conversation, and leave leaders with a stronger strategic frame.",
      bullets: [
        "Conference keynotes",
        "Executive roundtables",
        "Panel moderation and featured conversations",
        "Campus and policy convenings",
      ],
    },
    {
      title: "Executive Intensives",
      subtitle: "Focused sessions for leadership teams",
      text: "Tailored workshops and strategic intensives that help leaders align around educator workforce goals, institutional barriers, and practical next moves.",
      bullets: [
        "Senior leadership retreats",
        "Department and faculty strategy sessions",
        "Cross sector partnership design",
        "Equity centered planning intensives",
      ],
    },
  ];

  const topics = [
    "Building and sustaining Black male educator pipelines",
    "Teacher education redesign for equity and belonging",
    "From recruitment to workforce transition",
    "Representation, mentorship, and systems change",
    "The future of educator diversity strategy",
    "Institutional leadership in a changing talent landscape",
  ];

  const stats = [
    { value: "16", label: "Campuses engaged across a coordinated educator pipeline network at scale" },
    { value: "1", label: "National level voice with a clear niche" },
    { value: "3", label: "Primary lanes: speaking, consulting, thought leadership" },
    { value: "100%", label: "Positioned around equity driven institutional design" },
  ];

  const authorityPoints = [
    "Doctoral research centered on Black male preservice teachers and the redesign of teacher education for equity",
    "Leadership experience guiding one of the nation’s largest initiatives focused on men of color in teacher education",
    "Public voice positioned across research, policy, institutional practice, and community based leadership",
    "Book platform anchored in Becoming Visible and the C.A.R.E. Model",
  ];

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-stone-950/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div>
            <div className="text-lg font-semibold tracking-wide text-white">Dr. William A. Anders</div>
            <div className="text-sm text-stone-400">National Speaker | Consultant | Educator Pipeline Expert</div>
          </div>
          <nav className="hidden items-center gap-6 lg:flex">
            {nav.map((item) => (
              <a key={item.label} href={item.href} className="text-sm text-stone-300 transition hover:text-white">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="rounded-full bg-amber-400 px-5 py-2.5 text-sm font-semibold text-stone-950 transition hover:-translate-y-0.5">
              Book Now
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.17),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(245,158,11,0.14),transparent_32%)]" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-300/40 to-transparent" />
          <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
            <div className="grid items-center gap-10 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-1.5 text-sm text-amber-200">
                  <Sparkles className="h-4 w-4" />
                  Trusted voice in teacher education, equity, and institutional design
                </div>
                <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
                  Advancing educator pipeline design through national speaking, consulting, and thought leadership
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-300 md:text-xl">
                  Dr. William A. Anders helps institutions build stronger educator pipelines, redesign teacher education for equity, and lead with greater clarity in a changing national landscape. His platform is built for organizations seeking expertise, credibility, and results.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a href="#contact" className="inline-flex items-center gap-2 rounded-2xl bg-amber-400 px-6 py-3.5 text-sm font-semibold text-stone-950 shadow-xl shadow-amber-400/20 transition hover:-translate-y-0.5">
                    Request a Booking
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a href="#services" className="rounded-2xl border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/5">
                    View Services
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7 shadow-2xl shadow-black/30 backdrop-blur">
                  <div className="text-sm uppercase tracking-[0.24em] text-amber-300">Executive Positioning</div>
                  <p className="mt-4 text-2xl font-medium leading-9 text-white">
                    Scholar practitioner. Systems builder. National advocate for redesigning educator preparation with equity at the center.
                  </p>
                  <div className="mt-6 space-y-3">
                    {trustBar.map((item) => (
                      <div key={item} className="rounded-2xl border border-white/10 bg-stone-900/80 px-4 py-3 text-sm text-stone-300">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/5">
          <div className="mx-auto grid max-w-7xl gap-4 px-6 py-6 text-sm text-stone-300 lg:grid-cols-4 lg:px-8">
            {trustBar.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-xl border border-white/10 bg-stone-950/50 px-4 py-3">
                <Award className="h-4 w-4 text-amber-300" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-300">About</p>
              <h2 className="mt-3 text-3xl font-semibold text-white md:text-5xl leading-tight md:leading-[1.2]">
                Leading the redesign of educator pipelines nationwide
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-10">
                <p className="text-lg leading-8 text-stone-300">
                  Dr. William A. Anders is a nationally positioned speaker, consultant, and scholar practitioner specializing in teacher education redesign and Black male educator pipelines. He helps institutions move from fragmented efforts to aligned, outcome driven systems that strengthen representation, improve persistence, and build durable educator pipelines.
                </p>
                {/* ✅ ADD IMAGES HERE */}
                <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
                  <img src="/about1.png" className="rounded-xl object-cover h-48 w-full" />
                  <img src="/about2.png" className="rounded-xl object-cover h-48 w-full" />
                  <img src="/about3.jpg" className="rounded-xl object-cover h-48 w-full" />
                </div>
                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  {authorityPoints.map((point) => (
                    <div key={point} className="rounded-2xl border border-white/10 bg-stone-900/70 p-5 text-sm leading-7 text-stone-300">
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="bg-white/5 border-y border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-300">Services</p>
              <h2 className="mt-3 text-3xl font-semibold text-white md:text-5xl leading-tight md:leading-[1.2]">
                Strategic services for educators pipeline design and institutional transformation
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {serviceCards.map((card) => {
                const Icon = card.icon;
                return (
                  <div key={card.title} className="rounded-[2rem] border border-white/10 bg-stone-950/70 p-7 shadow-xl shadow-black/20">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-400/15 text-amber-300">
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
                <div key={item.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-7">
                  <div className="text-sm uppercase tracking-[0.2em] text-stone-400">{item.title}</div>
                  <h3 className="mt-3 text-2xl font-semibold text-white">{item.subtitle}</h3>
                  <p className="mt-4 text-sm leading-7 text-stone-300">{item.text}</p>
                  <div className="mt-6 space-y-3">
                    {item.bullets.map((bullet) => (
                      <div key={bullet} className="rounded-xl border border-white/10 bg-stone-900/70 px-4 py-3 text-sm text-stone-300">
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
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-300">Speaking</p>
              <h2 className="mt-3 text-3xl font-semibold text-white md:text-5xl">
                Nationally recognized speaker on educator pipeline design and institutional transformation
              </h2>
              <p className="mt-4 text-lg leading-8 text-stone-300">
                For conference organizers and leadership teams, Dr. Anders delivers more than a keynote. He brings a clear, systems driven approach to educator pipeline design, institutional alignment, and measurable outcomes. He is not an emerging voice, but a nationally positioned expert equipped to move organizations from intention to execution and from fragmented efforts to sustained impact.
              </p>
              <div className="mt-8 rounded-[2rem] border border-amber-300/20 bg-amber-300/10 p-6">
                <div className="flex items-start gap-4">
                  <Quote className="mt-1 h-5 w-5 text-amber-300" />
                  <p className="text-base leading-8 text-amber-100">
                    Designing educator pipelines that do not just recruit, but sustain, develop, and transform.
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
                    className="rounded-[2rem] border border-white/10 bg-white/5 p-6 text-base leading-7 text-stone-200 shadow-lg shadow-black/10"
                  >
                    {topic}
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        <section id="research" className="border-y border-white/10 bg-white/5">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-300">Research & Thought Leadership</p>
                <h2 className="mt-3 text-3xl font-semibold text-white md:text-5xl leading-tight md:leading-[1.2]">
                  Grounded in research and designed to drive institutional change in educator pipelines
                </h2>
              </div>
              <div className="lg:col-span-7 space-y-5">
                <div className="rounded-[2rem] border border-white/10 bg-stone-950/70 p-7">
                  <div className="text-sm uppercase tracking-[0.2em] text-stone-400">Dissertation</div>
                  <h3 className="mt-3 text-2xl font-semibold text-white">
                    A Phenomenologically Informed Study of Black Male Preservice Teachers’ Lived Experiences
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-stone-300">
                    A doctoral research agenda centered on professional socialization, social representation, and the redesign of teacher education for equity.
                  </p>
                </div>
                <div className="rounded-[2rem] border border-white/10 bg-stone-950/70 p-7">
                  <div className="text-sm uppercase tracking-[0.2em] text-stone-400">Book Platform</div>
                  <h3 className="mt-3 text-2xl font-semibold text-white">Becoming Visible</h3>
                  <p className="mt-4 text-sm leading-7 text-stone-300">
                    A public facing thought leadership project that expands your research into a national conversation about Black men, teacher education, and institutional transformation.
                  </p>
                </div>
                <div className="rounded-[2rem] border border-white/10 bg-stone-950/70 p-7">
                  <div className="text-sm uppercase tracking-[0.2em] text-stone-400">Framework</div>
                  <h3 className="mt-3 text-2xl font-semibold text-white">The C.A.R.E. Model</h3>
                  <p className="mt-4 text-sm leading-7 text-stone-300">
                    Community, Access, Representation, and Equity. A signature framework that positions your work as distinct intellectual property and a premium consulting methodology.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="book" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 items-center">

            {/* Left Side */}
            <div className="lg:col-span-6">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-300">
                Book
              </p>

              <h2 className="mt-3 text-3xl font-semibold text-white md:text-5xl">
                Becoming Visible
              </h2>

              <p className="mt-4 text-lg text-stone-300 leading-8">
                Becoming Visible redefines educator pipeline design through the experiences of Black male preservice teachers.
                It challenges systems that demand assimilation and sets a new standard for institutional accountability.
                Anchored in the C.A.R.E. Model, this book equips leaders with a clear framework to drive equity, strengthen representation,
                and build sustainable teacher education systems.
              </p>

              <div className="mt-6 inline-block rounded-full border border-amber-300/30 bg-amber-300/10 px-5 py-2 text-sm text-amber-200">
                Ebook
              </div>

              <div className="mt-6 flex gap-4">
                <a
                  href="https://www.amazon.com/dp/B0F9FS32KQ"
                  target="_blank"
                  className="rounded-2xl bg-amber-400 px-6 py-3 text-sm font-semibold text-stone-950 transition hover:-translate-y-0.5"
                >
                  Preorder Now | Release May 3
                </a>
              </div>
            </div>

            {/* Right Side (Book Placeholder) */}
            <div className="lg:col-span-6 flex justify-center">
              <img
                src="/cover.png"
                alt="Book Cover"
                className="h-[380px] w-[260px] object-cover rounded-xl border border-white/10 shadow-lg"
              />
            </div>

          </div>
        </section>

        <section id="results" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-300">Results & Brand Signals</p>
            <h2 className="mt-3 text-3xl font-semibold text-white md:text-5xl">
              Demonstrated impact, trusted partnerships, and measurable results at scale
            </h2>
            <p className="mt-4 text-lg leading-8 text-stone-300">
              This work is not theoretical. It is built through direct experience leading large scale educator pipeline initiatives, advising institutions, and shaping strategy across systems.
              Each signal below reflects execution, credibility, and sustained impact.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-[2rem] border border-white/10 bg-white/5 p-7 text-center">
                <div className="text-4xl font-semibold text-white">{stat.value}</div>
                <div className="mt-3 text-sm leading-6 text-stone-400">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-[2rem] border border-white/10 bg-stone-900/70 p-8">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <Users className="h-5 w-5 text-amber-300" />
                <div className="mt-3 text-lg font-medium text-white">Trusted by institutions</div>
                <p className="mt-2 text-sm leading-7 text-stone-400">Designed to signal credibility to universities, districts, nonprofits, and conference planners.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <Mic2 className="h-5 w-5 text-amber-300" />
                <div className="mt-3 text-lg font-medium text-white">Built for bookings</div>
                <p className="mt-2 text-sm leading-7 text-stone-400">Every section moves visitors toward speaking inquiries, consulting conversations, and partnership opportunities.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <Award className="h-5 w-5 text-amber-300" />
                <div className="mt-3 text-lg font-medium text-white">Premium brand feel</div>
                <p className="mt-2 text-sm leading-7 text-stone-400">Minimal, polished, executive, and positioned above the typical educator consultant website.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className=" border-t border-white/10 bg-gradient-to-br from-amber-400/10 via-stone-950 to-stone-950">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className=" relative rounded-[2rem] border border-amber-300/20 bg-black/20 p-8 md:p-10">
              <img
                src="/contact.jpg"
                alt="Contact"
                className="absolute top-6 right-16 w-80 h-77 object-cover rounded-xl border border-white/10 shadow-lg"
              />
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-300">Contact</p>
                <h2 className="mt-3 text-3xl font-semibold text-white md:text-5xl">
                  Book Dr. Anders for speaking, consulting, and strategic partnership.
                </h2>
                <p className="mt-4 text-lg leading-8 text-stone-300">
                  Driving educator pipeline design, institutional alignment, and measurable outcomes from strategy to system-level execution. Each engagement delivers clear frameworks, targeted action, and sustained impact across the educator workforce lifecycle.
                </p>
              </div>
              <div className="mt-10 grid gap-5 md:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-stone-950/80 p-5">
                  <div className="text-sm text-stone-400">Email</div>
                  <div className="mt-2 text-lg font-medium text-white">Anders1906@gmail.com</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-stone-950/80 p-5">
                  <div className="text-sm text-stone-400">Positioning</div>
                  <div className="mt-2 text-lg font-medium text-white">National speaker and consultant</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-stone-950/80 p-5">
                  <div className="text-sm text-stone-400">Primary Markets</div>
                  <div className="mt-2 text-lg font-medium text-white">Higher education, K 12, nonprofits, conferences</div>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="mailto:Anders1906@gmail.com" className="rounded-2xl bg-amber-400 px-6 py-3.5 text-sm font-semibold text-stone-950 transition hover:-translate-y-0.5">
                  Inquire by Email
                </a>
                <a href="#speaking" className="rounded-2xl border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/5">
                  Review Speaking Topics
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
