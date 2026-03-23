'use client'

import { type FormEvent, type ReactNode, useState } from 'react'
import { motion } from 'framer-motion'
import {
  Sparkles,
  Heart,
  Phone,
  Mail,
  MapPin,
  Star,
  Trees,
  Flower2,
  School,
  Sun,
  Moon,
} from 'lucide-react'

const services = [
  {
    icon: School,
    title: 'School Yoga Programs',
    text: 'Beautifully guided in-school yoga sessions that support focus, confidence, emotional regulation, and joyful movement.',
    points: ['Classroom sessions', 'Wellness weeks', 'Custom school packages'],
    bg: 'from-emerald-100 to-lime-50',
  },
  {
    icon: Sparkles,
    title: 'After-School Classes',
    text: 'Playful and calming classes that help children unwind, move their bodies, and build mindfulness in a warm environment.',
    points: ['Weekly classes', 'Small groups', 'Breathing games'],
    bg: 'from-sky-100 to-cyan-50',
  },
  {
    icon: Heart,
    title: 'Workshops & Events',
    text: 'Special yoga and mindfulness experiences for camps, daycares, community groups, family events, and celebrations.',
    points: ['Community events', 'Family yoga', 'Special themes'],
    bg: 'from-pink-100 to-rose-50',
  },
]

const benefits = [
  'Builds confidence',
  'Improves focus',
  'Supports emotional balance',
  'Encourages healthy movement',
  'Creates calm and joy',
  'Develops body awareness',
]

const galleryImages = [
  {
    image: '/images/kids-yoga-1.png',
    title: 'Kids Yoga Circle',
    text: 'A playful group yoga moment designed for children.',
  },
  {
    image: '/images/kids-yoga-2.png',
    title: 'Mindful Breathing Time',
    text: 'Simple breathing and calming activities for young learners.',
  },
  {
    image: '/images/kids-yoga-3.png',
    title: 'Stretch & Move',
    text: 'Fun movement experiences that help kids feel strong and confident.',
  },
  {
    image: '/images/kids-yoga-4.png',
    title: 'Creative Kids Yoga',
    text: 'Imaginative, child-friendly yoga sessions full of joy.',
  },
]

const yogaCharacters = [
  {
    emoji: '🧘‍♀️',
    title: 'Mindful Movement',
    text: 'Gentle yoga poses that build balance, strength, and awareness.',
  },
  {
    emoji: '✨',
    title: 'Confidence & Joy',
    text: 'Playful sessions that help children feel happy, proud, and capable.',
  },
  {
    emoji: '🌿',
    title: 'Calm & Relaxation',
    text: 'Simple breathing and relaxation practices that support emotional well-being.',
  },
]

const featuredCentres = [
  'McNicoll Avenue Child Care Program',
  'Kids Connect Daycare',
  'Le Petit Chaperon Rouge',
  'Beach Hill Montessori',
  'Abacus Montessori',
  'Lycée Français Toronto',
]

const additionalCentres = [
  'Northwest Childhood Learning Centre',
  'Smart Little Children Daycare Centre',
  'Sunny Faces Daycare',
  'East Toronto Village Children’s Centre',
  'Phoenix Childcare Centre',
  'Cliffwood Community Child Care',
  "Three R's Early Learning Centre",
  'Midland Childcare Centre',
]

const faqs = [
  {
    question: 'What age groups do you work with?',
    answer:
      'Programs are available for children starting at 18 months and up. Toddler sessions are typically 30 minutes, while ages 3–5 are usually 45 minutes. Programs can also be adapted for older children depending on the setting and goals.',
  },
  {
    question: 'Do you offer programs for schools and childcare centres?',
    answer:
      'Yes. Earth & OM Kids offers yoga and mindfulness programs for schools, childcare centres, Montessori communities, camps, and other child-focused environments. Sessions can be customized to fit your schedule, group size, and age range.',
  },
  {
    question: 'What happens during a typical session?',
    answer:
      'Sessions may include playful movement, age-appropriate yoga poses, breathing exercises, mindfulness activities, stories, relaxation, and calm transitions. Each class is designed to feel engaging, nurturing, and developmentally appropriate.',
  },
  {
    question: 'How long are the classes?',
    answer:
      'Class length depends on the age group and program type. Toddler classes are typically 30 minutes, and preschool sessions are often 45 minutes. School-age sessions can also be tailored to suit the classroom schedule.',
  },
  {
    question: 'Can programs be customized for our school or centre?',
    answer:
      'Absolutely. Programs can be tailored based on age group, class size, available space, wellness goals, and schedule. Special themes, wellness weeks, and custom event formats can also be arranged.',
  },
  {
    question: 'Do children need yoga experience?',
    answer:
      'No prior yoga experience is needed. Sessions are welcoming, beginner-friendly, and designed to help each child participate comfortably at their own pace.',
  },
  {
    question: 'Do you offer educator or staff wellness workshops?',
    answer:
      'Yes. In addition to children’s programming, Earth & OM Kids also offers wellness workshops for educators, staff teams, and community groups with a focus on stress relief, mindful movement, breathwork, and relaxation.',
  },
  {
    question: 'How do we book a program or ask about pricing?',
    answer:
      'You can use the contact form on the website to share your school, childcare centre, or event details. From there, we can discuss your goals, availability, age group, and the best program option for your space.',
  },
]

const footerLinks = {
  pages: ['Home', 'About', 'Services', 'Contact'],
  offerings: ['School Programs', 'After-School Yoga', 'Mindfulness Workshops', 'Community Events'],
}

function SectionBadge({
  children,
  color = 'text-emerald-800 bg-white/90 ring-emerald-100',
}: {
  children: ReactNode
  color?: string
}) {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold shadow-sm ring-1 ${color}`}
    >
      <Sparkles className="h-4 w-4" />
      {children}
    </div>
  )
}

function FloatingBlob({ className }: { className: string }) {
  return <div className={`absolute rounded-full blur-3xl opacity-60 ${className}`} />
}

export default function EarthAndOmKidsHomepage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    const form = event.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch('https://formspree.io/f/xnjggllw', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      })

      if (response.ok) {
        form.reset()
        setSubmitStatus('success')
      } else {
        setSubmitStatus('error')
      }
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-[linear-gradient(180deg,#fefcf8_0%,#f8faf8_35%,#ffffff_65%,#fdfaf7_100%)] text-slate-800">
      <div className="relative">
        <FloatingBlob className="left-4 top-24 h-40 w-40 bg-emerald-100/70" />
        <FloatingBlob className="right-10 top-40 h-52 w-52 bg-amber-100/60" />
        <FloatingBlob className="left-1/3 top-[42rem] h-56 w-56 bg-rose-100/50" />
        <FloatingBlob className="right-1/4 top-[95rem] h-48 w-48 bg-sky-100/50" />

        <header className="sticky top-0 z-30 border-b border-white/60 bg-white/80 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-10 lg:px-16">
            <a href="#home" className="flex min-w-0 items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-lg">
                <Flower2 className="h-6 w-6" />
              </div>
              <div className="min-w-0">
                <div className="truncate text-lg font-extrabold tracking-tight text-slate-900">Earth &amp; OM Kids</div>
                <div className="truncate text-xs font-medium text-slate-500">
                  Kids Yoga • Mindfulness • School Programs
                </div>
              </div>
            </a>

            <nav className="hidden items-center gap-8 md:flex">
              <a href="#home" className="font-medium text-slate-600 transition hover:text-emerald-700">
                Home
              </a>
              <a href="#about" className="font-medium text-slate-600 transition hover:text-emerald-700">
                About
              </a>
              <a href="#services" className="font-medium text-slate-600 transition hover:text-emerald-700">
                Services
              </a>
              <a href="#schools" className="font-medium text-slate-600 transition hover:text-emerald-700">
                Schools
              </a>
              <a href="#booking" className="font-medium text-slate-600 transition hover:text-emerald-700">
                Book
              </a>
              <a href="#gallery" className="font-medium text-slate-600 transition hover:text-emerald-700">
                Gallery
              </a>
              <a
                href="#contact"
                className="rounded-full bg-gradient-to-r from-emerald-600 to-teal-500 px-5 py-2.5 font-semibold text-white shadow-[0_12px_30px_rgba(16,185,129,0.22)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(16,185,129,0.28)]"
              >
                Contact
              </a>
            </nav>

            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white shadow-md ring-1 ring-slate-200 md:hidden"
            >
              <div className="space-y-1.5">
                <span
                  className={`block h-0.5 w-5 rounded-full bg-slate-700 transition ${
                    mobileMenuOpen ? 'translate-y-2 rotate-45' : ''
                  }`}
                />
                <span
                  className={`block h-0.5 w-5 rounded-full bg-slate-700 transition ${
                    mobileMenuOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`block h-0.5 w-5 rounded-full bg-slate-700 transition ${
                    mobileMenuOpen ? '-translate-y-2 -rotate-45' : ''
                  }`}
                />
              </div>
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="border-t border-slate-200 bg-white/95 px-4 py-4 backdrop-blur md:hidden">
              <div className="flex flex-col gap-3 rounded-[1.5rem] bg-slate-50 p-4 text-base font-medium text-slate-700 shadow-sm ring-1 ring-slate-100">
                <a href="#home" onClick={() => setMobileMenuOpen(false)} className="rounded-xl px-3 py-2 transition hover:bg-white hover:text-emerald-700">
                  Home
                </a>
                <a href="#about" onClick={() => setMobileMenuOpen(false)} className="rounded-xl px-3 py-2 transition hover:bg-white hover:text-emerald-700">
                  About
                </a>
                <a href="#services" onClick={() => setMobileMenuOpen(false)} className="rounded-xl px-3 py-2 transition hover:bg-white hover:text-emerald-700">
                  Services
                </a>
                <a href="#schools" onClick={() => setMobileMenuOpen(false)} className="rounded-xl px-3 py-2 transition hover:bg-white hover:text-emerald-700">
                  Schools
                </a>
                <a href="#booking" onClick={() => setMobileMenuOpen(false)} className="rounded-xl px-3 py-2 transition hover:bg-white hover:text-emerald-700">
                  Book
                </a>
                <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="rounded-xl px-3 py-2 transition hover:bg-white hover:text-emerald-700">
                  Gallery
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mt-1 rounded-full bg-gradient-to-r from-emerald-600 to-teal-500 px-5 py-3 text-center font-semibold text-white shadow-lg"
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </header>

        <section id="home" className="relative px-4 pb-18 pt-10 md:px-10 lg:px-16 lg:pb-28 lg:pt-16">
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <SectionBadge color="text-emerald-800 bg-white/90 ring-emerald-100">
                Refined kids yoga & mindfulness programs
              </SectionBadge>

              <div className="mt-5 inline-flex rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-slate-100">
                Trusted by schools, childcare centres, and Montessori communities in Toronto
              </div>

  <h1 className="mt-6 max-w-4xl text-4xl font-black leading-[0.98] tracking-tight text-slate-900 sm:text-5xl md:text-6xl xl:text-7xl">
                Kids yoga &amp; Mindfulness, Programs for Schools in Toronto
              </h1>
<h2 className="mt-4 text-lg font-semibold tracking-wide text-slate-600 md:text-xl">
  Calm minds, joyful movement, and confident children.
</h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg md:text-xl">
                Earth &amp; OM Kids offers beautifully designed kids yoga and mindfulness programs
  for schools, childcare centres, Montessori communities, and families across
  Toronto and the GTA.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="#contact"
                  className="rounded-full bg-gradient-to-r from-emerald-600 to-teal-500 px-7 py-3.5 text-center text-base font-semibold text-white shadow-[0_12px_30px_rgba(16,185,129,0.22)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(16,185,129,0.28)]"
                >
                  Book a Class
                </a>
                <a
                  href="#services"
                  className="rounded-full border border-slate-200 bg-white px-7 py-3.5 text-center text-base font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  Explore Services
                </a>
              </div>

              <div className="mt-8 grid max-w-2xl gap-4 sm:grid-cols-3">
                {[
                  { icon: Trees, title: 'Nature-Inspired', text: 'Warm, grounded design with soft premium tones' },
                  { icon: Sun, title: 'Joyful Learning', text: 'Movement, calm, and imagination combined' },
                  { icon: Moon, title: 'Mindful Moments', text: 'Breathing, balance, and gentle rest' },
                ].map((item) => {
                  const Icon = item.icon
                  return (
                    <motion.div
                      key={item.title}
                      whileHover={{ y: -6, scale: 1.01 }}
                      transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                      className="rounded-[2rem] border border-slate-100 bg-white p-5 shadow-[0_12px_40px_rgba(15,23,42,0.06)]"
                    >
                      <Icon className="h-7 w-7 text-emerald-700" />
                      <h3 className="mt-3 text-lg font-bold text-slate-900">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative"
            >
              <div className="absolute -left-6 top-10 h-28 w-28 rounded-full bg-emerald-100 blur-2xl" />
              <div className="absolute -right-6 bottom-10 h-28 w-28 rounded-full bg-amber-100 blur-2xl" />

              <div className="relative rounded-[2.5rem] border border-white/80 bg-white/90 p-5 shadow-[0_30px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl md:p-8">
                <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[1.08fr_0.92fr]">
                  <motion.div
                    whileHover={{ y: -6 }}
                    className="rounded-[2rem] bg-gradient-to-br from-emerald-50 to-white p-6 shadow-sm ring-1 ring-emerald-100"
                  >
                    <div className="text-4xl">🧘‍♀️</div>
                    <h3 className="mt-4 text-xl font-bold text-slate-900">For Schools</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Beautifully structured yoga sessions that support wellness, focus, and classroom calm.
                    </p>
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -6 }}
                    className="rounded-[2rem] bg-gradient-to-br from-sky-50 to-white p-6 shadow-sm ring-1 ring-sky-100"
                  >
                    <div className="text-4xl">🌈</div>
                    <h3 className="mt-4 text-xl font-bold text-slate-900">For Families</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Gentle, fun, and imaginative classes that help children move, breathe, and shine.
                    </p>
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -6 }}
                    className="rounded-[2rem] bg-gradient-to-br from-amber-50 to-white p-6 shadow-sm ring-1 ring-amber-100 sm:col-span-2"
                  >
                    <div className="text-4xl">✨</div>
                    <h3 className="mt-4 text-xl font-bold text-slate-900">Designed for Real Classroom Impact</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      Our programs are thoughtfully created to support focus, emotional regulation,
  and positive classroom behavior in real school environments.
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="px-4 py-16 md:px-10 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <SectionBadge>Why Schools Choose Earth &amp; OM Kids</SectionBadge>

              <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-900 md:text-4xl xl:text-5xl">
                A trusted, calming, and professional yoga experience for children
              </h2>

              <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                We partner with schools and childcare centres to deliver structured,
                engaging, and age-appropriate yoga programs that support focus,
                emotional well-being, and a positive classroom environment.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {[
                {
                  icon: '🏫',
                  title: 'School-Ready Programs',
                  text: 'Designed specifically for classrooms, daycares, and Montessori environments.',
                },
                {
                  icon: '🧘‍♀️',
                  title: 'Age-Appropriate Sessions',
                  text: 'Carefully structured for toddlers (18 months+) through school-age children.',
                },
                {
                  icon: '🌿',
                  title: 'Calm & Focused Classrooms',
                  text: 'Helps children regulate emotions, improve focus, and reduce stress.',
                },
                {
                  icon: '⭐',
                  title: 'Experienced & Trusted',
                  text: 'Led by an Early Childhood Educator with nearly 10 years of experience.',
                },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                  className="group relative rounded-[2rem] border border-slate-100 bg-white p-7 shadow-[0_12px_40px_rgba(15,23,42,0.06)]"
                >
                  <div className="text-4xl">{item.icon}</div>
                  <h3 className="mt-4 text-xl font-black text-slate-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
                  <div className="pointer-events-none absolute inset-0 rounded-[2rem] opacity-0 transition group-hover:opacity-100">
                    <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-emerald-50 to-transparent" />
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-14 rounded-[2rem] bg-gradient-to-r from-emerald-600 to-teal-500 px-8 py-8 text-center text-white shadow-[0_20px_60px_rgba(16,185,129,0.25)]">
              <h3 className="text-2xl font-black">Trusted by childcare centres and Montessori communities</h3>
              <p className="mt-3 text-white/90">
                Bringing calm, movement, and mindfulness into everyday learning environments.
              </p>
            </div>
          </div>
        </section>

        <section className="px-4 py-10 md:px-10 lg:px-16">
          <div className="mx-auto max-w-7xl rounded-[2.8rem] border border-white/70 bg-white/85 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl md:p-8 lg:p-12">
            <div className="text-center">
              <div className="text-xs font-bold uppercase tracking-[0.32em] text-slate-500">
                Trusted by leading childcare centres
              </div>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
                Valued by schools, daycares, and Montessori communities
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-slate-500 md:text-base">
                Earth &amp; OM Kids has partnered with respected early learning environments across the GTA to
                bring calm, movement, mindfulness, and joyful yoga experiences to children.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {featuredCentres.map((centre) => (
                <motion.div
                  key={centre}
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                  className="group relative overflow-hidden rounded-[1.8rem] border border-white/70 bg-gradient-to-br from-white to-slate-50 px-6 py-5 text-center shadow-[0_12px_30px_rgba(15,23,42,0.06)]"
                >
                  <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-emerald-200 to-transparent" />
                  <div className="text-base font-bold text-slate-800 md:text-lg">{centre}</div>
                </motion.div>
              ))}
            </div>

            <div className="my-10 flex items-center gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-slate-200" />
              <div className="rounded-full bg-slate-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-400 ring-1 ring-slate-200">
                And more partners
              </div>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-slate-200" />
            </div>

            <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
              {additionalCentres.map((centre) => (
                <motion.div
                  key={centre}
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                  className="rounded-[1.35rem] border border-slate-100 bg-white/90 px-4 py-4 text-center text-sm font-semibold text-slate-600 shadow-sm"
                >
                  {centre}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 md:px-10 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <SectionBadge color="text-emerald-800 bg-white/90 ring-emerald-100">What is Kids Yoga?</SectionBadge>
              <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-900 md:text-4xl xl:text-5xl">
                Movement, mindfulness, and fun made just for children
              </h2>
              <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                Kids yoga blends movement, breathing, imagination, and mindfulness into a playful experience that helps
                children feel calm, strong, and confident.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              <motion.div
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                className="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-[0_12px_40px_rgba(15,23,42,0.06)]"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-50 text-3xl shadow-sm ring-1 ring-amber-100">
                  🎯
                </div>
                <h3 className="mt-6 text-2xl font-black text-slate-900">Made for Children</h3>
                <p className="mt-4 text-lg leading-8 text-slate-600">
                  Our classes are designed for kids ages 18 months and up with songs, games, stories, breathing, and
                  playful movement that keeps children engaged.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                className="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-[0_12px_40px_rgba(15,23,42,0.06)]"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-50 text-3xl shadow-sm ring-1 ring-sky-100">
                  🧘
                </div>
                <h3 className="mt-6 text-2xl font-black text-slate-900">Why Earth &amp; OM?</h3>
                <ul className="mt-4 space-y-3 text-lg leading-8 text-slate-600">
                  <li>🌟 Safe and nurturing environment</li>
                  <li>🎨 Creative classes with movement and play</li>
                  <li>❤️ Confidence and self-awareness focus</li>
                  <li>🌈 Inclusive for every child</li>
                </ul>
              </motion.div>

              <motion.div
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                className="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-[0_12px_40px_rgba(15,23,42,0.06)]"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-3xl shadow-sm ring-1 ring-emerald-100">
                  🌱
                </div>
                <h3 className="mt-6 text-2xl font-black text-slate-900">Grow &amp; Learn</h3>
                <p className="mt-4 text-lg leading-8 text-slate-600">
                  Children learn breathing techniques, animal and nature-inspired poses, and mindfulness practices that
                  support focus, calm, and everyday well-being.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 md:px-10 lg:px-16">
          <div className="mx-auto max-w-7xl text-center">
            <SectionBadge color="text-fuchsia-800 bg-white/90 ring-fuchsia-100">Yoga Friends</SectionBadge>
            <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-900 md:text-4xl xl:text-5xl">
              Gentle character moments children will love
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-600">
              Playful character cards make the website feel warm, imaginative, and memorable while keeping the overall
              experience polished and premium.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {yogaCharacters.map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -8, rotate: -1, scale: 1.01 }}
                  transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                  className="rounded-[2rem] border border-slate-100 bg-white p-7 text-center shadow-[0_12px_40px_rgba(15,23,42,0.06)]"
                >
                  <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-pink-50 via-amber-50 to-sky-50 text-5xl shadow-md ring-1 ring-slate-100">
                    {item.emoji}
                  </div>
                  <h3 className="mt-5 text-2xl font-black tracking-tight text-slate-900">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="px-4 py-16 md:px-10 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr]">
              <div className="rounded-[2.5rem] border border-slate-100 bg-white p-5 shadow-[0_20px_60px_rgba(16,24,40,0.08)] sm:p-8 lg:p-10">
                <div className="rounded-[2rem] bg-[linear-gradient(180deg,#ffffff_0%,#fafdfb_100%)] p-5 ring-1 ring-slate-100 sm:p-8">
                  <SectionBadge color="text-sky-800 bg-sky-50/80 ring-sky-100">About Earth &amp; OM Kids</SectionBadge>
                  <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                    A calm, playful, and heart-centered approach
                  </h2>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-[1.5rem] bg-slate-50 p-4 ring-1 ring-slate-100">
                      <div className="text-sm font-semibold text-slate-500">Instructor</div>
                      <div className="mt-1 text-xl font-black text-slate-900">Taran Kaur</div>
                    </div>
                    <div className="rounded-[1.5rem] bg-slate-50 p-4 ring-1 ring-slate-100">
                      <div className="text-sm font-semibold text-slate-500">Background</div>
                      <div className="mt-1 text-xl font-black text-slate-900">Early Childhood Educator</div>
                    </div>
                  </div>

                  <p className="mt-6 leading-8 text-slate-600">
                    Earth &amp; OM Kids helps children feel grounded, confident, joyful, and connected through yoga,
                    movement, breathing, mindfulness, and play.
                  </p>
                  <p className="mt-4 leading-8 text-slate-600">
                    Led by Taran Kaur, an Early Childhood Educator with nearly 10 years of experience, each session is
                    designed to support children’s physical, emotional, and social well-being in a safe,
                    age-appropriate, and engaging way.
                  </p>
                  <p className="mt-4 leading-8 text-slate-600">
                    Taran also offers wellness workshops for educators, staff teams, and community groups focused on
                    stress relief, mindful movement, breathwork, and relaxation.
                  </p>
                </div>
              </div>

              <div>
                <div className="grid gap-5 sm:grid-cols-2">
                  {benefits.map((item, index) => (
                    <motion.div
                      key={item}
                      whileHover={{ y: -6, scale: 1.01 }}
                      transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                      className="rounded-[2rem] border border-slate-100 bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,0.06)]"
                    >
                      <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-50 to-amber-50 font-bold text-slate-700 shadow-sm ring-1 ring-slate-100">
                        {index + 1}
                      </div>
                      <h3 className="text-lg font-bold text-slate-900">{item}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        Thoughtful, engaging yoga experiences that support children’s well-being in meaningful everyday
                        ways.
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="schools" className="px-4 py-16 md:px-10 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <SectionBadge color="text-purple-800 bg-white/90 ring-purple-100">For Schools</SectionBadge>
              <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-900 md:text-4xl xl:text-5xl">
                Bring yoga &amp; mindfulness to your school
              </h2>
              <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                Our school yoga programs help children improve focus, reduce stress, build confidence, and create a
                calmer classroom environment. Programs can be customized for different grade levels and school needs.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {[
                {
                  emoji: '🧘',
                  title: 'In-Class Yoga',
                  text: 'Short yoga sessions that fit beautifully into the school day to improve focus and energy.',
                },
                {
                  emoji: '🌿',
                  title: 'Mindfulness & Breathing',
                  text: 'Fun breathing exercises and calming activities that help children regulate emotions.',
                },
                {
                  emoji: '🌈',
                  title: 'Custom School Programs',
                  text: 'Wellness weeks, assemblies, and special yoga events designed for your school community.',
                },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                  className="rounded-[2rem] border border-slate-100 bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,0.06)]"
                >
                  <div className="text-4xl">{item.emoji}</div>
                  <h3 className="mt-4 text-xl font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{item.text}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <a
                href="#contact"
                className="rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-500 px-8 py-4 font-bold text-white shadow-[0_12px_30px_rgba(168,85,247,0.22)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(168,85,247,0.28)]"
              >
                Request School Program
              </a>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 md:px-10 lg:px-16">
          <div className="mx-auto max-w-7xl text-center">
            <SectionBadge color="text-green-800 bg-white/90 ring-green-100">Benefits of Kids Yoga</SectionBadge>
            <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-900 md:text-4xl xl:text-5xl">
              Yoga helps children grow in so many wonderful ways
            </h2>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {[
                { emoji: '💪', title: 'Physical Health', text: 'Builds strength, flexibility, balance, and coordination.' },
                { emoji: '🧠', title: 'Mental Focus', text: 'Improves concentration, attention span, and classroom readiness.' },
                { emoji: '😊', title: 'Emotional Balance', text: 'Helps children manage stress, feelings, and confidence.' },
                { emoji: '⚡', title: 'Energy & Calm', text: 'Teaches kids how to energize or relax when needed.' },
                { emoji: '🎨', title: 'Creativity', text: 'Encourages imagination through storytelling and movement.' },
                { emoji: '⭐', title: 'Self-Esteem', text: 'Supports body awareness, confidence, and pride.' },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                  className="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-[0_12px_40px_rgba(15,23,42,0.06)]"
                >
                  <div className="text-5xl">{item.emoji}</div>
                  <h3 className="mt-5 text-2xl font-black text-slate-900">{item.title}</h3>
                  <p className="mt-4 text-lg leading-8 text-slate-600">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 md:px-10 lg:px-16">
          <div className="mx-auto max-w-7xl text-center">
            <SectionBadge color="text-amber-800 bg-white/90 ring-amber-100">Age Groups</SectionBadge>
            <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-900 md:text-4xl xl:text-5xl">
              Programs designed for different stages of childhood
            </h2>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {[
                {
                  emoji: '🧸',
                  title: 'Toddler Yoga',
                  ages: '18 Months+',
                  text: 'Gentle, playful movement with songs, sensory fun, and simple activities designed for toddlers.',
                  bg: 'from-rose-50 to-white',
                  time: '30 minutes',
                },
                {
                  emoji: '🐣',
                  title: 'Little Yogis',
                  ages: 'Ages 3-5',
                  text: 'Playful introduction to yoga through stories, songs, and simple poses.',
                  bg: 'from-amber-50 to-white',
                  time: '45 minutes',
                },
                {
                  emoji: '🌻',
                  title: 'Growing Yogis',
                  ages: 'Ages 6-8',
                  text: 'Fun sequences with animal poses, breathing games, and relaxation.',
                  bg: 'from-emerald-50 to-white',
                  time: '45 minutes',
                },
                {
                  emoji: '🦁',
                  title: 'Young Warriors',
                  ages: 'Ages 9-12',
                  text: 'More advanced poses, confidence work, mindfulness, and self-regulation practices.',
                  bg: 'from-orange-50 to-white',
                  time: '60 minutes',
                },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                  className={`rounded-[2rem] bg-gradient-to-br ${item.bg} p-8 shadow-[0_12px_40px_rgba(15,23,42,0.06)] ring-1 ring-slate-100`}
                >
                  <div className="text-center">
                    <div className="text-5xl">{item.emoji}</div>
                    <h3 className="mt-4 text-3xl font-black text-slate-900">{item.title}</h3>
                    <div className="mt-2 text-xl font-bold text-slate-700">{item.ages}</div>
                    <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">{item.text}</p>
                    <div className="mt-6 flex flex-col items-center justify-center gap-3 text-base font-semibold text-slate-700 sm:flex-row sm:gap-8">
                      <span>🕒 {item.time}</span>
                      <span>👥 Small Groups</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-10 md:px-10 lg:px-16">
          <div className="mx-auto max-w-7xl rounded-[2.7rem] bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 px-8 py-14 text-center text-white shadow-[0_20px_60px_rgba(15,23,42,0.12)] lg:px-12">
            <div className="text-5xl">🌈</div>
            <h2 className="mt-4 text-4xl font-black md:text-5xl">Every child can do yoga</h2>
            <p className="mx-auto mt-5 max-w-4xl text-xl leading-9 text-white/95 md:text-2xl md:leading-10">
              Our classes are designed to meet each child where they are. No experience needed — just a ready-to-move
              body, gentle guidance, and a welcoming environment.
            </p>
          </div>
        </section>

        <section id="services" className="px-4 py-16 md:px-10 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <SectionBadge color="text-emerald-800 bg-white/90 ring-emerald-100">Services</SectionBadge>
              <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-900 md:text-4xl xl:text-5xl">
                Kids Yoga & Mindfulness Programs for Schools and Childcare Centres in Toronto
              </h2>
              <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                Every offering is designed to feel joyful, nurturing, and professionally delivered — so children feel
                comfortable, and schools or families feel confident in partnering with you.
              </p>
            </div>

            <div className="mt-12 grid gap-7 lg:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon
                return (
                  <motion.div
                    key={service.title}
                    whileHover={{ y: -6, scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                    className="group rounded-[2rem] border border-slate-100 bg-white p-7 shadow-[0_12px_40px_rgba(15,23,42,0.06)]"
                  >
                    <div className={`inline-flex rounded-[1.5rem] bg-gradient-to-br p-4 ${service.bg} ring-1 ring-slate-100`}>
                      <Icon className="h-8 w-8 text-slate-700" />
                    </div>
                    <h3 className="mt-5 text-2xl font-black tracking-tight text-slate-900">{service.title}</h3>
                    <p className="mt-4 leading-7 text-slate-600">{service.text}</p>
                    <div className="mt-6 space-y-3">
                      {service.points.map((point) => (
                        <div
                          key={point}
                          className="flex items-center gap-3 rounded-full bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 ring-1 ring-slate-100"
                        >
                          <Star className="h-4 w-4 fill-current text-amber-500" />
                          {point}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 md:px-10 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <SectionBadge color="text-amber-800 bg-white/90 ring-amber-100">Testimonials</SectionBadge>
              <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-900 md:text-4xl xl:text-5xl">
                Kind words from schools and families
              </h2>
              <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                Social proof builds trust quickly. This section helps principals, teachers, and parents feel confident
                about booking your program.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {[
                {
                  quote:
                    'The students absolutely loved the yoga sessions. They were calmer, more focused, and excited every time class started.',
                  name: 'Elementary School Teacher',
                  org: 'School Partner',
                },
                {
                  quote:
                    'Earth & OM Kids brought such a warm and positive energy into our school. The program was engaging, thoughtful, and beautifully delivered.',
                  name: 'School Principal',
                  org: 'Community School',
                },
                {
                  quote:
                    'The classes were playful, calming, and age-appropriate. Our children looked forward to every session and came home so happy.',
                  name: 'Parent',
                  org: 'Family Client',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                  className="rounded-[2rem] border border-slate-100 bg-white p-7 shadow-[0_12px_40px_rgba(15,23,42,0.06)]"
                >
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, starIndex) => (
                      <Star key={starIndex} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <p className="mt-5 text-base leading-8 text-slate-600">“{item.quote}”</p>
                  <div className="mt-6">
                    <div className="font-bold text-slate-900">{item.name}</div>
                    <div className="text-sm text-slate-500">{item.org}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="booking" className="px-4 py-16 md:px-10 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-7xl rounded-[2.7rem] border border-white/80 bg-white/90 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <SectionBadge color="text-rose-800 bg-white/90 ring-rose-100">Book a Free Consultation</SectionBadge>
                <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-900 md:text-4xl xl:text-5xl">
                  Make it easy for schools to take the next step
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                  Offer a free consultation call so schools, childcare centres, and organizers can quickly learn about
                  your program and choose the best fit.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    'Free 15-minute consultation',
                    'Perfect for schools and organizers',
                    'Quick and professional first step',
                    'Easy scheduling from any device',
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-[1.5rem] bg-slate-50 px-5 py-4 text-sm font-semibold text-slate-700 ring-1 ring-slate-100"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="#contact"
                    className="rounded-full bg-gradient-to-r from-rose-500 to-pink-500 px-7 py-3.5 text-base font-bold text-white shadow-[0_12px_30px_rgba(244,63,94,0.2)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(244,63,94,0.26)]"
                  >
                    Book Free Consultation
                  </a>
                  <a
                    href="#contact"
                    className="rounded-full border border-slate-200 bg-white px-7 py-3.5 text-base font-bold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                  >
                    Ask a Question
                  </a>
                </div>
              </div>

              <motion.div
                whileHover={{ y: -6 }}
                className="rounded-[2.2rem] bg-gradient-to-br from-rose-50 via-white to-amber-50 p-6 shadow-inner ring-1 ring-slate-100 lg:p-8"
              >
                <div className="rounded-[1.8rem] bg-white p-6 shadow-lg ring-1 ring-slate-100">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <div className="text-sm font-semibold uppercase tracking-[0.18em] text-rose-500">
                        Booking Preview
                      </div>
                      <div className="mt-1 text-2xl font-black text-slate-900">Free School Consultation</div>
                    </div>
                    <div className="text-3xl">📅</div>
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-[1.25rem] bg-slate-50 p-4 ring-1 ring-slate-100">
                      <div className="text-sm font-semibold text-slate-500">Session length</div>
                      <div className="mt-1 text-lg font-bold text-slate-900">15 minutes</div>
                    </div>

                    <div className="rounded-[1.25rem] bg-slate-50 p-4 ring-1 ring-slate-100">
                      <div className="text-sm font-semibold text-slate-500">Best for</div>
                      <div className="mt-1 text-lg font-bold text-slate-900">
                        Schools, daycares, and community programs
                      </div>
                    </div>

                    <div className="rounded-[1.25rem] bg-slate-50 p-4 ring-1 ring-slate-100">
                      <div className="text-sm font-semibold text-slate-500">What you’ll discuss</div>
                      <div className="mt-1 text-lg font-bold text-slate-900">
                        Program goals, age groups, schedule, and pricing
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="gallery" className="px-4 py-16 md:px-10 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <SectionBadge color="text-sky-800 bg-white/90 ring-sky-100">Gallery</SectionBadge>
              <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-900 md:text-4xl xl:text-5xl">
                A joyful kids yoga gallery
              </h2>
              <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                Carefully chosen child-friendly imagery gives your website a warmer, more believable, and premium
                school-ready feel.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {galleryImages.map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                  className="group overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-[0_12px_40px_rgba(15,23,42,0.06)]"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold tracking-tight text-slate-900">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 md:px-10 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <SectionBadge color="text-amber-800 bg-white/90 ring-amber-100">
                Frequently Asked Questions
              </SectionBadge>

              <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-900 md:text-4xl xl:text-5xl">
                Helpful answers for schools, centres, and families
              </h2>

              <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                Everything you need to know about classes, age groups, booking, and how
                Earth &amp; OM Kids programs can fit beautifully into your learning environment.
              </p>
            </div>

            <div className="mt-12 space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index

                return (
                  <motion.div
                    key={faq.question}
                    layout
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden rounded-[1.8rem] border border-slate-100 bg-white shadow-[0_12px_40px_rgba(15,23,42,0.06)]"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left md:px-8"
                    >
                      <h3 className="text-base font-bold leading-7 text-slate-900 md:text-lg">
                        {faq.question}
                      </h3>

                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-50 text-xl font-semibold text-slate-600 ring-1 ring-slate-100">
                        {isOpen ? '−' : '+'}
                      </div>
                    </button>

                    <motion.div
                      initial={false}
                      animate={{
                        height: isOpen ? 'auto' : 0,
                        opacity: isOpen ? 1 : 0,
                      }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0 md:px-8">
                        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
                        <p className="pt-5 text-base leading-8 text-slate-600">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="px-4 py-8 md:px-10 lg:px-16">
          <div className="mx-auto max-w-7xl rounded-[2.7rem] bg-gradient-to-r from-emerald-600 via-teal-500 to-sky-500 p-10 text-white shadow-[0_30px_80px_rgba(16,24,40,0.18)] lg:p-14">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 className="text-3xl font-black tracking-tight md:text-4xl">
                  Ready to bring yoga to your school or community?
                </h2>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-white/90">
                  Let’s create a beautiful program that helps children move, breathe, focus, and grow with confidence.
                </p>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-base font-bold text-emerald-700 shadow-xl transition hover:-translate-y-0.5 hover:shadow-2xl"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </section>

        <section id="contact" className="px-4 py-16 md:px-10 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="rounded-[2.5rem] border border-slate-100 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] lg:p-10">
                <SectionBadge color="text-pink-800 bg-white/90 ring-pink-100">Contact Us</SectionBadge>
                <h2 className="mt-5 text-4xl font-black tracking-tight text-slate-900">Let’s connect</h2>
                <p className="mt-4 leading-8 text-slate-600">
                  Looking to book classes, ask about pricing, or discuss a school partnership? We’d love to hear from
                  you.
                </p>

                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-4 rounded-[1.5rem] bg-slate-50 p-4 ring-1 ring-slate-100">
                    <Mail className="mt-1 h-5 w-5 text-emerald-700" />
                    <div>
                      <div className="font-bold text-slate-900">Email</div>
                      <div className="text-slate-600">earthandomkids@gmail.com</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-[1.5rem] bg-slate-50 p-4 ring-1 ring-slate-100">
                    <Phone className="mt-1 h-5 w-5 text-emerald-700" />
                    <div>
                      <div className="font-bold text-slate-900">Phone</div>
                      <div className="text-slate-600">647-856-8206</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-[1.5rem] bg-slate-50 p-4 ring-1 ring-slate-100">
                    <MapPin className="mt-1 h-5 w-5 text-emerald-700" />
                    <div>
                      <div className="font-bold text-slate-900">Contact Person</div>
                      <div className="text-slate-600">Taran Kaur</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-[2.5rem] border border-slate-100 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] lg:p-10">
                <form onSubmit={handleSubmit} className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">Full Name</label>
                    <input
                      name="name"
                      required
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-emerald-400 focus:bg-white"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">Email Address</label>
                    <input
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-emerald-400 focus:bg-white"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">Phone Number</label>
                    <input
                      name="phone"
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-emerald-400 focus:bg-white"
                      placeholder="(000) 000-0000"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">Service Needed</label>
                    <input
                      name="service"
                      required
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-emerald-400 focus:bg-white"
                      placeholder="School yoga, workshop, event..."
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="mb-2 block text-sm font-semibold text-slate-700">Message</label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      className="w-full rounded-[1.5rem] border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-emerald-400 focus:bg-white"
                      placeholder="Tell us about your school, event, or what you’re looking for..."
                    />
                  </div>

                  <div className="md:col-span-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="mt-2 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 px-7 py-3.5 font-bold text-white shadow-[0_12px_30px_rgba(244,63,94,0.2)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(244,63,94,0.26)] disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                    </button>
                  </div>

                  {submitStatus === 'success' && (
                    <div className="md:col-span-2 rounded-[1.5rem] border border-emerald-200 bg-emerald-50 px-5 py-4 text-sm font-medium text-emerald-800">
                      Thank you! Your message was sent successfully. We’ll get back to you soon.
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="md:col-span-2 rounded-[1.5rem] border border-rose-200 bg-rose-50 px-5 py-4 text-sm font-medium text-rose-700">
                      Something went wrong while sending your message. Please try again.
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>

        <footer className="px-4 pb-10 pt-8 md:px-10 lg:px-16">
          <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-[#0f1720] px-8 py-10 text-slate-200 shadow-[0_20px_60px_rgba(15,23,42,0.24)] lg:px-10">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-sky-500 text-white shadow-lg">
                    <Flower2 className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-xl font-extrabold text-white">Earth &amp; OM Kids</div>
                    <div className="text-sm text-slate-400">Yoga, movement, and mindfulness for children</div>
                  </div>
                </div>
                <p className="mt-5 max-w-md leading-7 text-slate-400">
                  Creating beautiful, playful, and calming yoga experiences for kids in schools, homes, and
                  communities.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white">Pages</h3>
                <ul className="mt-4 space-y-3">
                  {footerLinks.pages.map((item) => (
                    <li key={item}>
                      <a href={`#${item.toLowerCase()}`} className="text-slate-400 transition hover:text-white">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white">Services</h3>
                <ul className="mt-4 space-y-3">
                  {footerLinks.offerings.map((item) => (
                    <li key={item} className="text-slate-400">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10 border-t border-slate-800 pt-6 text-sm text-slate-500">
              © 2026 Earth &amp; OM Kids. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </main>
  )
}