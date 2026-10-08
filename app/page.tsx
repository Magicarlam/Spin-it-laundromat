"use client";

import Image from "next/image";
import {
  ArrowRight,
  Camera,
  Check,
  ChevronRight,
  Clock3,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Shirt,
  Sparkles,
  WashingMachine,
  X,
} from "lucide-react";
import { useState } from "react";

const Instagram = Camera;

const services = [
  {
    icon: WashingMachine,
    number: "01",
    title: "Laundry & Washing",
    description:
      "Professional washing and fabric care for your everyday clothes.",
  },
  {
    icon: Shirt,
    number: "02",
    title: "Dry Cleaning",
    description:
      "Careful cleaning for garments that need a little extra attention.",
  },
  {
    icon: Sparkles,
    number: "03",
    title: "Shoe Cleaning",
    description:
      "Give your favourite shoes a fresh, clean look.",
  },
  {
    icon: Sparkles,
    number: "04",
    title: "Duvet & Carpet Care",
    description:
      "Deep cleaning for larger household items and fabrics.",
  },
];

const steps = [
  {
    number: "01",
    title: "Book",
    description: "Reach us through WhatsApp or phone and tell us what you need.",
  },
  {
    number: "02",
    title: "We Collect",
    description: "Arrange a convenient collection where available.",
  },
  {
    number: "03",
    title: "We Clean",
    description: "Your items are cleaned and handled with care.",
  },
  {
    number: "04",
    title: "You Receive",
    description: "Get your fresh, clean items back ready to wear.",
  },
];

const benefits = [
  "Professional garment care",
  "Convenient customer service",
  "Careful handling of your clothes",
  "Reliable turnaround",
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="overflow-hidden">
      {/* NAVBAR */}
      <header className="absolute left-0 right-0 top-0 z-50">
        <div className="container-spin">
          <nav className="flex h-24 items-center justify-between">
            <a href="#home" onClick={closeMenu} className="relative z-50">
              <Image
                src="/images/spin-it-logo.png"
                alt="Spin-it Laundromat"
                width={155}
                height={65}
                className="h-auto w-31.25 object-contain md:w-37.5"
                priority
              />
            </a>

            <div className="hidden items-center gap-8 md:flex">
              <a
                href="#home"
                className="text-sm font-medium text-white transition hover:text-[#e31b23]"
              >
                Home
              </a>
              <a
                href="#services"
                className="text-sm font-medium text-white/80 transition hover:text-white"
              >
                Services
              </a>
              <a
                href="#process"
                className="text-sm font-medium text-white/80 transition hover:text-white"
              >
                How It Works
              </a>
              <a
                href="#about"
                className="text-sm font-medium text-white/80 transition hover:text-white"
              >
                About
              </a>
              <a
                href="#contact"
                className="rounded-full bg-[#e31b23] px-5 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-[#e31b23]"
              >
                Book Now
              </a>
            </div>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="relative z-50 rounded-full border border-white/20 p-3 text-white md:hidden"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </nav>
        </div>

        {menuOpen && (
          <div className="absolute left-0 right-0 top-0 min-h-screen bg-[#0b0b0d] px-5 pt-28 md:hidden">
            <div className="flex flex-col gap-7 text-2xl font-bold">
              <a href="#home" onClick={closeMenu}>
                Home
              </a>
              <a href="#services" onClick={closeMenu}>
                Services
              </a>
              <a href="#process" onClick={closeMenu}>
                How It Works
              </a>
              <a href="#about" onClick={closeMenu}>
                About
              </a>
              <a
                href="#contact"
                onClick={closeMenu}
                className="w-fit rounded-full bg-[#e31b23] px-7 py-4 text-base"
              >
                Book a Service
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section
        id="home"
        className="noise hero-grid relative flex min-h-190 items-center bg-[#0b0b0d] pt-28 text-white"
      >
        <div className="container-spin relative z-10 grid items-center gap-14 py-20 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
              <span className="h-2 w-2 rounded-full bg-[#e31b23]" />
              Professional Laundry Care
            </div>

            <h1 className="max-w-4xl text-6xl font-black leading-[0.92] tracking-[-0.055em] sm:text-7xl lg:text-[88px]">
              Fresh Clothes.
              <br />
              <span className="text-[#e31b23]">Fresh Start.</span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-7 text-white/65 sm:text-lg">
              Professional laundry and cleaning services designed to keep your
              clothes fresh, clean and ready for whatever comes next.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#e31b23] px-7 py-4 text-sm font-bold text-white transition hover:bg-white hover:text-[#e31b23]"
              >
                Book a Service
                <ArrowRight size={17} />
              </a>

              <a
                href="https://wa.me/"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-4 text-sm font-bold text-white transition hover:bg-white hover:text-black"
              >
                <MessageCircle size={17} />
                WhatsApp Us
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/10 pt-7">
              <div className="flex items-center gap-2 text-sm text-white/60">
                <Check size={17} className="text-[#e31b23]" />
                Quality care
              </div>
              <div className="flex items-center gap-2 text-sm text-white/60">
                <Check size={17} className="text-[#e31b23]" />
                Reliable service
              </div>
              <div className="flex items-center gap-2 text-sm text-white/60">
                <Check size={17} className="text-[#e31b23]" />
                Easy booking
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-130">
            <div className="absolute -inset-6 rounded-[40px] bg-[#e31b23]/20 blur-3xl" />

            <div className="relative aspect-4/5 overflow-hidden rounded-4xl border border-white/10 bg-[#18181b]">
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_35%,rgba(0,0,0,.75)_100%)]" />

              <div className="absolute inset-8 rounded-3xl border border-white/10 bg-linear-to-br from-white/10 to-transparent" />

              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#e31b23]">
                  Spin-it
                </p>
                <h2 className="mt-2 text-4xl font-black tracking-tight">
                  Laundry done right.
                </h2>
                <div className="mt-5 h-1 w-14 bg-[#e31b23]" />
              </div>

              <div className="absolute right-7 top-7 flex h-16 w-16 items-center justify-center rounded-full bg-[#e31b23]">
                <WashingMachine size={29} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK BENEFITS */}
      <section className="border-b border-black/5 bg-white">
        <div className="container-spin grid gap-0 md:grid-cols-3">
          {[
            ["Professional Care", "Your clothes deserve the right treatment."],
            ["Convenient Service", "A simpler way to handle your laundry."],
            ["Fresh Results", "Clean, fresh and ready for you."],
          ].map(([title, description], index) => (
            <div
              key={title}
              className={`flex gap-4 px-0 py-8 md:px-8 ${
                index !== 0 ? "border-t md:border-l md:border-t-0" : ""
              }`}
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e31b23]/10 text-[#e31b23]">
                <Check size={19} />
              </div>
              <div>
                <h3 className="font-bold">{title}</h3>
                <p className="mt-1 text-sm leading-6 text-black/50">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-[#f7f7f7] py-24 sm:py-32">
        <div className="container-spin">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#e31b23]">
                What We Do
              </p>
              <h2 className="mt-4 max-w-2xl text-4xl font-black tracking-[-0.04em] sm:text-6xl">
                Care for every piece.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-black/50">
              From everyday clothes to special garments and household fabrics,
              Spin-it helps keep everything looking and feeling fresh.
            </p>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.number}
                  className="group relative min-h-77.5 overflow-hidden rounded-[28px] bg-white p-7 transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e31b23]/10 text-[#e31b23] transition group-hover:bg-[#e31b23] group-hover:text-white">
                      <Icon size={23} />
                    </div>
                    <span className="text-sm font-black text-black/15">
                      {service.number}
                    </span>
                  </div>

                  <div className="absolute bottom-7 left-7 right-7">
                    <h3 className="text-2xl font-black tracking-tight">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-black/50">
                      {service.description}
                    </p>
                    <div className="mt-5 flex items-center gap-1 text-sm font-bold text-[#e31b23]">
                      Learn more
                      <ChevronRight
                        size={16}
                        className="transition group-hover:translate-x-1"
                      />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="bg-[#0b0b0d] py-24 text-white sm:py-32">
        <div className="container-spin">
          <div className="max-w-2xl">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-[#e31b23]">
              Simple Process
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-6xl">
              Laundry made easy.
            </h2>
          </div>

          <div className="mt-16 grid gap-0 md:grid-cols-4">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`relative border-white/10 pb-10 md:pb-0 md:pr-8 ${
                  index !== 0 ? "border-t pt-10 md:border-l md:border-t-0 md:pl-8 md:pt-0" : ""
                }`}
              >
                <span className="text-sm font-black text-[#e31b23]">
                  {step.number}
                </span>
                <h3 className="mt-5 text-2xl font-black">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/45">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT / WHY SPIN-IT */}
      <section id="about" className="bg-white py-24 sm:py-32">
        <div className="container-spin grid items-center gap-14 lg:grid-cols-2">
          <div className="relative">
            <div className="absolute -left-5 -top-5 h-28 w-28 bg-[#e31b23]" />

            <div className="relative min-h-120 overflow-hidden rounded-4xl bg-[#111113]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(227,27,35,.5),transparent_35%),linear-gradient(135deg,#17171a,#09090a)]" />

              <div className="absolute bottom-8 left-8">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#e31b23]">
                  Spin-it Laundromat
                </p>
                <p className="mt-2 text-5xl font-black text-white">FRESH.</p>
                <p className="text-5xl font-black text-white">CLEAN.</p>
                <p className="text-5xl font-black text-[#e31b23]">READY.</p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-black uppercase tracking-[0.25em] text-[#e31b23]">
              Why Spin-it?
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-6xl">
              More than clean.
              <br />
              <span className="text-[#e31b23]">It&apos;s cared for.</span>
            </h2>

            <p className="mt-7 max-w-xl text-base leading-8 text-black/55">
              We believe laundry should be simple, convenient and done with
              care. Spin-it is built around giving customers a dependable
              cleaning experience from start to finish.
            </p>

            <div className="mt-8 space-y-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e31b23] text-white">
                    <Check size={15} />
                  </span>
                  <span className="font-semibold">{benefit}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#0b0b0d] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#e31b23]"
            >
              Get in touch
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="bg-[#e31b23] py-20 text-white sm:py-28">
        <div className="container-spin flex flex-col justify-between gap-10 lg:flex-row lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.25em] text-white/60">
              Ready when you are
            </p>
            <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-[-0.04em] sm:text-6xl">
              Got laundry piling up?
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/75">
              Let Spin-it handle it. Get in touch today and make laundry one
              less thing to worry about.
            </p>
          </div>

          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <a
              href="https://wa.me/"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-black text-[#e31b23] transition hover:bg-[#0b0b0d] hover:text-white"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
            <a
              href="tel:"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-4 text-sm font-black text-white transition hover:bg-white hover:text-[#e31b23]"
            >
              <Phone size={17} />
              Call Us
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0b0b0d] py-16 text-white">
        <div className="container-spin">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <Image
                src="/images/spin-it-logo.png"
                alt="Spin-it Laundromat"
                width={170}
                height={70}
                className="h-auto w-36.25 object-contain"
              />

              <p className="mt-6 max-w-md text-sm leading-7 text-white/45">
                Professional laundry and cleaning services designed to keep
                your clothes fresh, clean and ready.
              </p>

              <div className="mt-7 flex gap-3">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition hover:border-[#e31b23] hover:text-[#e31b23]"
                >
                  <Instagram size={17} />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold">Contact</h3>

              <div className="mt-5 space-y-4 text-sm text-white/50">
                <a href="tel:" className="flex items-start gap-3 transition hover:text-white">
                  <Phone size={17} className="mt-0.5 text-[#e31b23]" />
                  <span>Phone number</span>
                </a>

                <a href="https://wa.me/" className="flex items-start gap-3 transition hover:text-white">
                  <MessageCircle size={17} className="mt-0.5 text-[#e31b23]" />
                  <span>WhatsApp</span>
                </a>

                <div className="flex items-start gap-3">
                  <MapPin size={17} className="mt-0.5 text-[#e31b23]" />
                  <span>Location coming soon</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold">Opening Hours</h3>

              <div className="mt-5 space-y-4 text-sm text-white/50">
                <div className="flex items-start gap-3">
                  <Clock3 size={17} className="mt-0.5 text-[#e31b23]" />
                  <span>
                    Monday – Saturday
                    <br />
                    Hours coming soon
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Clock3 size={17} className="mt-0.5 text-[#e31b23]" />
                  <span>
                    Sunday
                    <br />
                    Hours coming soon
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14 flex flex-col justify-between gap-4 border-t border-white/10 pt-7 text-xs text-white/35 sm:flex-row">
            <p>© 2026 Spin-it Laundromat. All rights reserved.</p>
            <p>Fresh Clothes. Fresh Start.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
