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
    text: 'Engaging in-school yoga classes that support focus, confidence, emotional regulation, and joyful movement for children of different age groups.',
    points: ['Classroom sessions', 'Wellness weeks', 'Custom school packages'],
    bg: 'from-emerald-100 to-lime-100',
  },
  {
    icon: Sparkles,
    title: 'After-School Classes',
    text: 'Playful and calming sessions that help children unwind, move their bodies, and build mindfulness in a warm, safe environment.',
    points: ['Weekly classes', 'Small groups', 'Fun breathing games'],
    bg: 'from-sky-100 to-cyan-100',
  },
  {
    icon: Heart,
    title: 'Workshops & Events',
    text: 'Special yoga and mindfulness experiences for camps, daycares, community groups, family events, and seasonal celebrations.',
    points: ['Community events', 'Family yoga', 'Birthday & special themes'],
    bg: 'from-pink-100 to-rose-100',
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
    image:
      'https://images.pexels.com/photos/8613091/pexels-photo-8613091.jpeg?auto=compress&cs=tinysrgb&w=1200',
    title: 'Kids Yoga Circle',
    text: 'A playful group yoga moment designed for children.',
  },
  {
    image:
      'https://images.pexels.com/photos/8613311/pexels-photo-8613311.jpeg?auto=compress&cs=tinysrgb&w=1200',
    title: 'Mindful Breathing Time',
    text: 'Simple breathing and calm activities for young learners.',
  },
  {
    image:
      'https://images.pexels.com/photos/4498606/pexels-photo-4498606.jpeg?auto=compress&cs=tinysrgb&w=1200',
    title: 'Kids Yoga Practice',
    text: 'Children learning simple yoga poses together.',
  },
  {
    image:
      'https://images.pexels.com/photos/8436589/pexels-photo-8436589.jpeg?auto=compress&cs=tinysrgb&w=1200',
    title: 'Creative Kids Yoga',
    text: 'Imaginative, child-friendly yoga sessions full of joy.',
  },
]

const yogaCharacters = [
  { emoji: '🌈', title: 'Rainbow Breath', text: 'Big breaths, bright energy, and calm little minds.' },
  { emoji: '🦁', title: 'Lion Power', text: 'Confidence-building movement that helps kids feel brave.' },
  { emoji: '🦋', title: 'Butterfly Calm', text: 'Gentle stretching, softness, and peaceful rest.' },
]

const footerLinks = {
  pages: ['Home', 'About', 'Services', 'Contact'],
  offerings: ['School Programs', 'After-School Yoga', 'Mindfulness Workshops', 'Community Events'],
}

function SectionBadge({
  children,
  color = 'text-emerald-700 bg-white/80 ring-emerald-100',
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
  return <div className={`absolute rounded-full blur-3xl opacity-70 ${className}`} />
}

export default function EarthAndOmKidsHomepage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
    <main className="min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_top,_#fff7ed,_#ecfeff_35%,_#f0fdf4_70%,_#fdf2f8_100%)] text-slate-800">
      <div className="relative">
        <div className="pointer-events-none absolute inset-x-0 top-40 z-0 overflow-hidden">
          <div className="mx-auto flex max-w-7xl justify-between px-6 md:px-10 lg:px-16">
            <motion.div
              animate={{ x: [0, 20, 0], y: [0, -10, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
              className="h-16 w-28 rounded-full bg-white/70 blur-sm shadow-[0_10px_30px_rgba(255,255,255,0.8)]"
            />
            <motion.div
              animate={{ x: [0, -18, 0], y: [0, 10, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
              className="mt-16 h-20 w-36 rounded-full bg-white/70 blur-sm shadow-[0_10px_30px_rgba(255,255,255,0.8)]"
            />
          </div>
        </div>

        <FloatingBlob className="left-6 top-24 h-40 w-40 bg-pink-200/70" />
        <FloatingBlob className="right-10 top-32 h-52 w-52 bg-sky-200/60" />
        <FloatingBlob className="left-1/3 top-[38rem] h-56 w-56 bg-yellow-200/50" />
        <FloatingBlob className="right-1/4 top-[70rem] h-48 w-48 bg-purple-200/40" />
        <FloatingBlob className="left-16 top-[120rem] h-44 w-44 bg-emerald-200/40" />

        <header className="sticky top-0 z-30 border-b border-white/40 bg-white/70 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10 lg:px-16">
            <a href="#home" className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-sky-400 text-white shadow-lg">
                <Flower2 className="h-6 w-6" />
              </div>
              <div>
                <div className="text-lg font-extrabold tracking-tight">Earth &amp; OM Kids</div>
                <div className="text-xs font-medium text-slate-500">Kids Yoga • Mindfulness • School Programs</div>
              </div>
            </a>

            <nav className="hidden items-center gap-8 md:flex">
              <a href="#home" className="font-medium text-slate-600 transition hover:text-emerald-600">
                Home
              </a>
              <a href="#about" className="font-medium text-slate-600 transition hover:text-emerald-600">
                About
              </a>
              <a href="#services" className="font-medium text-slate-600 transition hover:text-emerald-600">
                Services
              </a>
              <a href="#schools" className="font-medium text-slate-600 transition hover:text-emerald-600">
                Schools
              </a>
              <a href="#booking" className="font-medium text-slate-600 transition hover:text-emerald-600">
                Book
              </a>
              <a href="#gallery" className="font-medium text-slate-600 transition hover:text-emerald-600">
                Gallery
              </a>
              <a
                href="#contact"
                className="rounded-full bg-emerald-500 px-5 py-2.5 font-semibold text-white shadow-lg transition hover:-translate-y-0.5"
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
                <span className="block h-0.5 w-5 rounded-full bg-slate-700" />
                <span className="block h-0.5 w-5 rounded-full bg-slate-700" />
                <span className="block h-0.5 w-5 rounded-full bg-slate-700" />
              </div>
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="border-t border-slate-200 bg-white/95 px-6 py-4 backdrop-blur md:hidden">
              <div className="flex flex-col gap-4 text-base font-medium text-slate-700">
                <a href="#home" onClick={() => setMobileMenuOpen(false)}>
                  Home
                </a>
                <a href="#about" onClick={() => setMobileMenuOpen(false)}>
                  About
                </a>
                <a href="#services" onClick={() => setMobileMenuOpen(false)}>
                  Services
                </a>
                <a href="#schools" onClick={() => setMobileMenuOpen(false)}>
                  Schools
                </a>
                <a href="#booking" onClick={() => setMobileMenuOpen(false)}>
                  Book
                </a>
                <a href="#gallery" onClick={() => setMobileMenuOpen(false)}>
                  Gallery
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-full bg-emerald-500 px-5 py-3 text-center font-semibold text-white"
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </header>

        <section id="home" className="relative px-6 pb-20 pt-12 md:px-10 lg:px-16 lg:pb-28 lg:pt-16">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <SectionBadge>Bright, playful yoga experiences for children</SectionBadge>
              <h1 className="mt-6 max-w-3xl text-5xl font-black leading-[1.05] tracking-tight md:text-6xl xl:text-7xl">
                Calm bodies, happy hearts, and confident kids.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
                Earth &amp; OM Kids brings joyful yoga, movement, and mindfulness programs to schools, families, camps,
                and community spaces. Our classes are playful, nurturing, and designed to help children feel grounded,
                strong, and inspired.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-7 py-3.5 text-base font-semibold text-white shadow-xl transition hover:-translate-y-0.5"
                >
                  Book a Class
                </a>
                <a
                  href="#services"
                  className="rounded-full bg-white px-7 py-3.5 text-base font-semibold text-slate-700 shadow-lg ring-1 ring-slate-200 transition hover:-translate-y-0.5"
                >
                  Explore Services
                </a>
              </div>
              <div className="mt-8 grid max-w-2xl gap-4 sm:grid-cols-3">
                {[
                  { icon: Trees, title: 'Nature-Inspired', text: 'Warm earth tones with playful colors' },
                  { icon: Sun, title: 'Joyful Learning', text: 'Movement, calm, and imagination' },
                  { icon: Moon, title: 'Mindful Moments', text: 'Breathing, balance, and rest' },
                ].map((item) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={item.title}
                      className="rounded-[1.75rem] bg-white/85 p-5 shadow-lg ring-1 ring-white/60 backdrop-blur-sm"
                    >
                      <Icon className="h-7 w-7 text-emerald-600" />
                      <h3 className="mt-3 text-lg font-bold">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
                    </div>
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
              <div className="absolute -left-6 top-10 h-28 w-28 rounded-full bg-pink-200 blur-2xl" />
              <div className="absolute -right-6 bottom-10 h-28 w-28 rounded-full bg-yellow-200 blur-2xl" />
              <div className="relative rounded-[2.5rem] border border-white/70 bg-white/75 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl md:p-8">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[2rem] bg-gradient-to-br from-emerald-100 to-green-50 p-6 shadow-sm">
                    <div className="text-4xl">🧘‍♀️</div>
                    <h3 className="mt-4 text-xl font-bold">For Schools</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Beautifully structured yoga sessions that support wellness, focus, and classroom calm.
                    </p>
                  </div>
                  <div className="rounded-[2rem] bg-gradient-to-br from-sky-100 to-cyan-50 p-6 shadow-sm">
                    <div className="text-4xl">🌈</div>
                    <h3 className="mt-4 text-xl font-bold">For Families</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Gentle, fun, and imaginative classes that help children move, breathe, and shine.
                    </p>
                  </div>
                  <div className="rounded-[2rem] bg-gradient-to-br from-yellow-100 to-orange-50 p-6 shadow-sm sm:col-span-2">
                    <div className="text-4xl">✨</div>
                    <h3 className="mt-4 text-xl font-bold">A magical first impression</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      Designed with cheerful colors, rounded cards, soft light, and a premium child-friendly feel so
                      your visitors instantly feel wonder, trust, and warmth.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="px-6 py-4 md:px-10 lg:px-16">
          <div className="mx-auto flex max-w-7xl items-center justify-center">
            <div className="h-4 w-full rounded-full bg-gradient-to-r from-pink-300 via-yellow-300 via-emerald-300 via-sky-300 to-purple-300 shadow-lg opacity-90" />
          </div>
        </div>

        <section className="px-6 py-10 md:px-10 lg:px-16">
          <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-white/60 bg-white/70 p-8 shadow-xl backdrop-blur-xl lg:p-10">
            <div className="grid gap-5 md:grid-cols-3">
              {['Trusted by schools and families', 'Child-friendly, calming, and fun', 'Custom programs for your community'].map(
                (item) => (
                  <div
                    key={item}
                    className="rounded-[1.5rem] bg-gradient-to-r from-white to-emerald-50 p-5 text-center font-semibold text-slate-700 shadow-sm ring-1 ring-slate-100"
                  >
                    {item}
                  </div>
                ),
              )}
            </div>
          </div>
        </section>

        <section className="px-6 py-16 md:px-10 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <SectionBadge color="text-emerald-700 bg-emerald-50 ring-emerald-100">What is Kids Yoga?</SectionBadge>
              <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
                Movement, mindfulness, and fun made just for children
              </h2>
              <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                Kids yoga blends movement, breathing, imagination, and mindfulness into a playful experience that helps
                children feel calm, strong, and confident.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              <motion.div
                whileHover={{ y: -6 }}
                className="rounded-[2rem] bg-gradient-to-br from-yellow-100 to-orange-50 p-8 shadow-[0_18px_50px_rgba(15,23,42,0.10)] ring-1 ring-white/70"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/70 text-3xl shadow-sm">
                  🎯
                </div>
                <h3 className="mt-6 text-2xl font-black text-orange-600">Made for Children</h3>
                <p className="mt-4 text-lg leading-8 text-slate-700">
                  Our classes are designed for kids ages 18 months and up with songs, games, stories, breathing, and
                  playful movement that keeps children engaged.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -6 }}
                className="rounded-[2rem] bg-gradient-to-br from-sky-100 to-cyan-50 p-8 shadow-[0_18px_50px_rgba(15,23,42,0.10)] ring-1 ring-white/70"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/70 text-3xl shadow-sm">
                  🧘
                </div>
                <h3 className="mt-6 text-2xl font-black text-blue-600">Why Earth &amp; OM?</h3>
                <ul className="mt-4 space-y-3 text-lg leading-8 text-slate-700">
                  <li>🌟 Safe and nurturing environment</li>
                  <li>🎨 Creative classes with movement and play</li>
                  <li>❤️ Confidence and self-awareness focus</li>
                  <li>🌈 Inclusive for every child</li>
                </ul>
              </motion.div>

              <motion.div
                whileHover={{ y: -6 }}
                className="rounded-[2rem] bg-gradient-to-br from-emerald-100 to-teal-50 p-8 shadow-[0_18px_50px_rgba(15,23,42,0.10)] ring-1 ring-white/70"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/70 text-3xl shadow-sm">
                  🌱
                </div>
                <h3 className="mt-6 text-2xl font-black text-emerald-600">Grow &amp; Learn</h3>
                <p className="mt-4 text-lg leading-8 text-slate-700">
                  Children learn breathing techniques, animal and nature-inspired poses, and mindfulness practices that
                  support focus, calm, and everyday well-being.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <div className="px-6 py-4 md:px-10 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <motion.div
              animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
              transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
              className="h-5 rounded-full bg-[linear-gradient(90deg,#f9a8d4,#fde68a,#86efac,#7dd3fc,#c4b5fd,#f9a8d4)] bg-[length:200%_200%] shadow-md"
            />
          </div>
        </div>

        <section className="px-6 py-16 md:px-10 lg:px-16">
          <div className="mx-auto max-w-7xl text-center">
            <SectionBadge color="text-fuchsia-700 bg-fuchsia-50 ring-fuchsia-100">Yoga Friends</SectionBadge>
            <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">Cute yoga characters kids will love</h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-600">
              Playful little character cards make the website feel warm, imaginative, and more memorable for families
              and schools.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {yogaCharacters.map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -8, rotate: -1 }}
                  className="rounded-[2rem] bg-white/85 p-7 text-center shadow-[0_18px_50px_rgba(15,23,42,0.10)] ring-1 ring-white/70"
                >
                  <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-pink-100 via-yellow-100 to-sky-100 text-5xl shadow-md">
                    {item.emoji}
                  </div>
                  <h3 className="mt-5 text-2xl font-black tracking-tight text-slate-800">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="px-6 py-20 md:px-10 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr]">
              <div className="rounded-[2.5rem] bg-gradient-to-br from-emerald-200 via-teal-100 to-sky-100 p-8 shadow-[0_20px_60px_rgba(16,24,40,0.12)] lg:p-10">
                <div className="rounded-[2rem] bg-white/85 p-8 shadow-lg backdrop-blur-sm">
                  <SectionBadge color="text-sky-700 bg-sky-50 ring-sky-100">About Earth &amp; OM Kids</SectionBadge>
                  <h2 className="mt-5 text-4xl font-black tracking-tight">A calm, playful, and heart-centered approach</h2>
                  <p className="mt-5 leading-8 text-slate-600">
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
                    <div
                      key={item}
                      className="rounded-[2rem] bg-white/85 p-6 shadow-lg ring-1 ring-white/70 backdrop-blur-sm"
                    >
                      <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-100 to-yellow-100 font-bold text-slate-700 shadow-sm">
                        {index + 1}
                      </div>
                      <h3 className="text-lg font-bold">{item}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        Thoughtful, engaging yoga experiences that support children’s well-being in meaningful everyday
                        ways.
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="px-6 py-6 md:px-10 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <motion.div
              animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
              transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
              className="h-5 rounded-full bg-[linear-gradient(90deg,#f9a8d4,#fde68a,#86efac,#7dd3fc,#c4b5fd,#f9a8d4)] bg-[length:200%_200%] shadow-md"
            />
          </div>
        </div>

        <section id="schools" className="px-6 py-20 md:px-10 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <SectionBadge color="text-purple-700 bg-purple-50 ring-purple-100">For Schools</SectionBadge>
              <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
                Bring Yoga &amp; Mindfulness to Your School
              </h2>
              <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                Our school yoga programs help children improve focus, reduce stress, build confidence, and create a
                calmer classroom environment. Programs can be customized for different grade levels and school needs.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <div className="rounded-[2rem] bg-white/85 p-6 shadow-lg ring-1 ring-white/60">
                <div className="text-4xl">🧘</div>
                <h3 className="mt-4 text-xl font-bold">In-Class Yoga</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Short yoga sessions that fit into the school day to improve focus and energy.
                </p>
              </div>
              <div className="rounded-[2rem] bg-white/85 p-6 shadow-lg ring-1 ring-white/60">
                <div className="text-4xl">🌿</div>
                <h3 className="mt-4 text-xl font-bold">Mindfulness &amp; Breathing</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Fun breathing exercises and calming activities that help children regulate emotions.
                </p>
              </div>
              <div className="rounded-[2rem] bg-white/85 p-6 shadow-lg ring-1 ring-white/60">
                <div className="text-4xl">🌈</div>
                <h3 className="mt-4 text-xl font-bold">Custom School Programs</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Wellness weeks, assemblies, and special yoga events designed for your school.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <a
                href="#contact"
                className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 font-bold text-white shadow-xl hover:-translate-y-0.5 transition"
              >
                Request School Program
              </a>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 md:px-10 lg:px-16">
          <div className="mx-auto max-w-7xl text-center">
            <SectionBadge color="text-green-700 bg-green-50 ring-green-100">Benefits of Kids Yoga</SectionBadge>
            <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
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
                <div
                  key={item.title}
                  className="rounded-[2rem] bg-white/85 p-8 shadow-[0_18px_50px_rgba(15,23,42,0.10)] ring-1 ring-white/70"
                >
                  <div className="text-5xl">{item.emoji}</div>
                  <h3 className="mt-5 text-2xl font-black text-slate-800">{item.title}</h3>
                  <p className="mt-4 text-lg leading-8 text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-16 md:px-10 lg:px-16">
          <div className="mx-auto max-w-7xl text-center">
            <SectionBadge color="text-amber-700 bg-amber-50 ring-amber-100">Age Groups</SectionBadge>
            <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
              Programs designed for different stages of childhood
            </h2>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {[
                {
                  emoji: '🧸',
                  title: 'Toddler Yoga',
                  ages: '18 Months+',
                  text: 'Gentle, playful movement with songs, sensory fun, and simple activities designed for toddlers.',
                  bg: 'from-pink-100 to-rose-50',
                  time: '30 minutes',
                },
                {
                  emoji: '🐣',
                  title: 'Little Yogis',
                  ages: 'Ages 3-5',
                  text: 'Playful introduction to yoga through stories, songs, and simple poses.',
                  bg: 'from-yellow-100 to-amber-50',
                  time: '45 minutes',
                },
                {
                  emoji: '🌻',
                  title: 'Growing Yogis',
                  ages: 'Ages 6-8',
                  text: 'Fun sequences with animal poses, breathing games, and relaxation.',
                  bg: 'from-emerald-100 to-teal-50',
                  time: '45 minutes',
                },
                {
                  emoji: '🦁',
                  title: 'Young Warriors',
                  ages: 'Ages 9-12',
                  text: 'More advanced poses, confidence work, mindfulness, and self-regulation practices.',
                  bg: 'from-orange-100 to-rose-50',
                  time: '60 minutes',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className={`rounded-[2rem] bg-gradient-to-br ${item.bg} p-8 shadow-[0_18px_50px_rgba(15,23,42,0.10)] ring-1 ring-white/70`}
                >
                  <div className="text-center">
                    <div className="text-5xl">{item.emoji}</div>
                    <h3 className="mt-4 text-3xl font-black text-slate-800">{item.title}</h3>
                    <div className="mt-2 text-xl font-bold text-slate-700">{item.ages}</div>
                    <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-700">{item.text}</p>
                    <div className="mt-6 flex items-center justify-center gap-8 text-base font-semibold text-slate-700">
                      <span>🕒 {item.time}</span>
                      <span>👥 Small Groups</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-10 md:px-10 lg:px-16">
          <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-gradient-to-r from-emerald-400 to-cyan-400 px-10 py-14 text-center text-white shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
            <div className="text-5xl">🌈</div>
            <h2 className="mt-4 text-4xl font-black md:text-5xl">Every Child Can Do Yoga!</h2>
            <p className="mx-auto mt-5 max-w-4xl text-2xl leading-10 text-white/95">
              Our classes are designed to meet each child where they are. No experience needed, just a positive
              attitude and a ready-to-move body.
            </p>
          </div>
        </section>

        <section id="services" className="px-6 py-20 md:px-10 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <SectionBadge color="text-emerald-700 bg-emerald-50 ring-emerald-100">Services</SectionBadge>
              <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
                Beautiful offerings for schools, families, and communities
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
                    whileHover={{ y: -6 }}
                    className="group rounded-[2.3rem] border border-white/70 bg-white/80 p-7 shadow-[0_20px_60px_rgba(15,23,42,0.10)] backdrop-blur-sm transition"
                  >
                    <div className={`inline-flex rounded-[1.5rem] bg-gradient-to-br p-4 ${service.bg}`}>
                      <Icon className="h-8 w-8 text-slate-700" />
                    </div>
                    <h3 className="mt-5 text-2xl font-black tracking-tight">{service.title}</h3>
                    <p className="mt-4 leading-7 text-slate-600">{service.text}</p>
                    <div className="mt-6 space-y-3">
                      {service.points.map((point) => (
                        <div
                          key={point}
                          className="flex items-center gap-3 rounded-full bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 ring-1 ring-slate-100"
                        >
                          <Star className="h-4 w-4 fill-current text-yellow-500" />
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

        <section className="px-6 py-20 md:px-10 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <SectionBadge color="text-amber-700 bg-amber-50 ring-amber-100">Testimonials</SectionBadge>
              <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">Kind words from schools and families</h2>
              <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                Social proof builds trust fast. This section helps principals, teachers, and parents feel confident
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
                  whileHover={{ y: -6 }}
                  className="rounded-[2rem] bg-white/85 p-7 shadow-[0_20px_60px_rgba(15,23,42,0.10)] ring-1 ring-white/60 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-1 text-yellow-500">
                    {[...Array(5)].map((_, starIndex) => (
                      <Star key={starIndex} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <p className="mt-5 text-base leading-8 text-slate-600">“{item.quote}”</p>
                  <div className="mt-6">
                    <div className="font-bold text-slate-800">{item.name}</div>
                    <div className="text-sm text-slate-500">{item.org}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="booking" className="px-6 py-20 md:px-10 lg:px-16">
          <div className="mx-auto max-w-7xl rounded-[2.7rem] border border-white/70 bg-white/80 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <SectionBadge color="text-rose-700 bg-rose-50 ring-rose-100">Book a Free Consultation</SectionBadge>
                <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
                  Make it easy for schools to book you instantly
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                  Offer a free consultation call or trial discussion so schools can quickly learn about your program and
                  choose the best fit. This is one of the strongest ways to turn visitors into real bookings.
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
                    className="rounded-full bg-gradient-to-r from-rose-500 to-pink-500 px-7 py-3.5 text-base font-bold text-white shadow-xl transition hover:-translate-y-0.5"
                  >
                    Book Free Consultation
                  </a>
                  <a
                    href="#contact"
                    className="rounded-full bg-white px-7 py-3.5 text-base font-bold text-slate-700 shadow-lg ring-1 ring-slate-200 transition hover:-translate-y-0.5"
                  >
                    Ask a Question
                  </a>
                </div>
              </div>

              <div className="rounded-[2.2rem] bg-gradient-to-br from-pink-100 via-rose-50 to-orange-50 p-6 shadow-inner ring-1 ring-white/80 lg:p-8">
                <div className="rounded-[1.8rem] bg-white p-6 shadow-lg ring-1 ring-slate-100">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <div className="text-sm font-semibold uppercase tracking-[0.18em] text-rose-500">
                        Booking Preview
                      </div>
                      <div className="mt-1 text-2xl font-black text-slate-800">Free School Consultation</div>
                    </div>
                    <div className="text-3xl">📅</div>
                  </div>
                  <div className="space-y-4">
                    <div className="rounded-[1.25rem] bg-slate-50 p-4 ring-1 ring-slate-100">
                      <div className="text-sm font-semibold text-slate-500">Session length</div>
                      <div className="mt-1 text-lg font-bold text-slate-800">15 minutes</div>
                    </div>
                    <div className="rounded-[1.25rem] bg-slate-50 p-4 ring-1 ring-slate-100">
                      <div className="text-sm font-semibold text-slate-500">Best for</div>
                      <div className="mt-1 text-lg font-bold text-slate-800">Schools, camps, and family programs</div>
                    </div>
                    <div className="rounded-[1.25rem] bg-slate-50 p-4 ring-1 ring-slate-100">
                      <div className="text-sm font-semibold text-slate-500">What you’ll discuss</div>
                      <div className="mt-1 text-lg font-bold text-slate-800">
                        Program goals, age groups, schedule, and pricing
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="px-6 py-20 md:px-10 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <SectionBadge color="text-sky-700 bg-sky-50 ring-sky-100">Gallery</SectionBadge>
              <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">A joyful kids yoga gallery</h2>
              <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                These child-friendly photos give your website a warmer and more believable school-ready feel.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {galleryImages.map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -6 }}
                  className="overflow-hidden rounded-[2rem] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.10)] ring-1 ring-white/70"
                >
                  <div className="overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-64 w-full object-cover transition duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-black tracking-tight text-slate-800">{item.title}</h3>
                    <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-8 md:px-10 lg:px-16">
          <div className="mx-auto max-w-7xl rounded-[2.7rem] bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500 p-10 text-white shadow-[0_30px_80px_rgba(16,24,40,0.18)] lg:p-14">
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
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-base font-bold text-emerald-700 shadow-xl transition hover:-translate-y-0.5"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </section>

        <section id="contact" className="px-6 py-20 md:px-10 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="rounded-[2.5rem] bg-white/80 p-8 shadow-xl ring-1 ring-white/60 backdrop-blur-sm lg:p-10">
                <SectionBadge color="text-pink-700 bg-pink-50 ring-pink-100">Contact Us</SectionBadge>
                <h2 className="mt-5 text-4xl font-black tracking-tight">Let’s connect</h2>
                <p className="mt-4 leading-8 text-slate-600">
                  Looking to book classes, ask about pricing, or discuss a school partnership? We’d love to hear from you.
                </p>
                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-4 rounded-[1.5rem] bg-slate-50 p-4 ring-1 ring-slate-100">
                    <Mail className="mt-1 h-5 w-5 text-emerald-600" />
                    <div>
                      <div className="font-bold">Email</div>
                      <div className="text-slate-600">earthandomkids@gmail.com</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-[1.5rem] bg-slate-50 p-4 ring-1 ring-slate-100">
                    <Phone className="mt-1 h-5 w-5 text-emerald-600" />
                    <div>
                      <div className="font-bold">Phone</div>
                      <div className="text-slate-600">647-856-8206</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-[1.5rem] bg-slate-50 p-4 ring-1 ring-slate-100">
                    <MapPin className="mt-1 h-5 w-5 text-emerald-600" />
                    <div>
                      <div className="font-bold">Contact Person</div>
                      <div className="text-slate-600">Taran Kaur</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-[2.5rem] bg-white/85 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.10)] ring-1 ring-white/60 backdrop-blur-sm lg:p-10">
                <form onSubmit={handleSubmit} className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">Full Name</label>
                    <input
                      name="name"
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-emerald-400 focus:bg-white"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">Email Address</label>
                    <input
                      name="email"
                      type="email"
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
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-emerald-400 focus:bg-white"
                      placeholder="School yoga, workshop, event..."
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="mb-2 block text-sm font-semibold text-slate-700">Message</label>
                    <textarea
                      name="message"
                      rows={5}
                      className="w-full rounded-[1.5rem] border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-emerald-400 focus:bg-white"
                      placeholder="Tell us about your school, event, or what you’re looking for..."
                    />
                  </div>

                  <div className="md:col-span-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="mt-2 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 px-7 py-3.5 font-bold text-white shadow-xl transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
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

        <footer className="px-6 pb-10 pt-8 md:px-10 lg:px-16">
          <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-slate-900 px-8 py-10 text-slate-200 shadow-[0_20px_60px_rgba(15,23,42,0.24)] lg:px-10">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-sky-400 text-white shadow-lg">
                    <Flower2 className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-xl font-extrabold text-white">Earth &amp; OM Kids</div>
                    <div className="text-sm text-slate-400">Yoga, movement, and mindfulness for children</div>
                  </div>
                </div>
                <p className="mt-5 max-w-md leading-7 text-slate-400">
                  Creating beautiful, playful, and calming yoga experiences for kids in schools, homes, and communities.
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