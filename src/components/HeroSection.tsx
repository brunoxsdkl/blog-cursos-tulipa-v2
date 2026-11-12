'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, Star, Users, Award, Sparkles, ChevronDown } from 'lucide-react'

const stats = [
  { label: 'Alunos formados', value: '500+', icon: '👩‍🎓' },
  { label: 'Cursos disponíveis', value: '12', icon: '📚' },
  { label: 'Anos de experiência', value: '8+', icon: '⭐' },
  { label: 'Avaliação média', value: '4.9', icon: '💎' },
]

const floatingElements = [
  { emoji: '🧼', size: 'text-3xl', top: '15%', left: '8%',  delay: '0s',   duration: '6s' },
  { emoji: '🕯️', size: 'text-2xl', top: '25%', right: '10%', delay: '1s',  duration: '7s' },
  { emoji: '✨', size: 'text-xl',  top: '65%', left: '5%',  delay: '2s',   duration: '5s' },
  { emoji: '🌸', size: 'text-3xl', top: '70%', right: '8%', delay: '0.5s', duration: '8s' },
  { emoji: '💐', size: 'text-2xl', top: '45%', left: '90%', delay: '1.5s', duration: '6.5s' },
  { emoji: '🧪', size: 'text-xl',  top: '80%', left: '15%', delay: '3s',   duration: '7s' },
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 mesh-bg" />

      {/* Decorative orbs */}
      <div className="orb w-96 h-96 bg-tulipa-300 top-0 right-0 translate-x-1/2 -translate-y-1/2 animate-float-slow" />
      <div className="orb w-72 h-72 bg-tulipa-200 bottom-0 left-0 -translate-x-1/2 translate-y-1/2 animate-float" />
      <div className="orb w-48 h-48 bg-rose-200 top-1/2 left-1/4 animate-float-delayed" />

      {/* Floating emojis */}
      {floatingElements.map((el, i) => (
        <div
          key={i}
          className={`absolute ${el.size} pointer-events-none select-none opacity-40`}
          style={{
            top: el.top,
            left: 'left' in el ? el.left : undefined,
            right: 'right' in el ? el.right : undefined,
            animation: `float ${el.duration} ease-in-out ${el.delay} infinite`,
          }}
        >
          {el.emoji}
        </div>
      ))}

      {/* Pattern overlay */}
      <div className="absolute inset-0 mesh-pattern opacity-50" />

      <div className="section-container relative z-10 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side — text */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-tulipa-200/60 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-tulipa-500 animate-pulse" />
              <span className="text-sm font-medium text-tulipa-700">Novas turmas abertas para Dezembro 2026</span>
              <Sparkles className="w-3.5 h-3.5 text-tulipa-500" />
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-berry-900">
                Transforme{' '}
                <span className="relative inline-block">
                  <span className="gradient-text">criatividade</span>
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 300 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 10C60 2 120 2 150 6C180 10 240 10 298 2"
                      stroke="#e8637a"
                      strokeWidth="3"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>
                </span>{' '}
                em{' '}
                <span className="italic font-black gradient-text">renda</span>
              </h1>

              <p className="text-lg sm:text-xl text-berry-700/80 leading-relaxed max-w-lg font-light">
                Cursos presenciais de artesanato premium — saboaria, velas, cosméticos e muito mais.
                Aprenda com quem vive disso.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#cursos"
                className="btn-primary text-base"
              >
                Ver todos os cursos
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://wa.me/5584999999999?text=Olá! Quero saber mais sobre os cursos."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-base"
              >
                Falar no WhatsApp
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex items-center gap-4 pt-2">
              <div className="flex -space-x-2">
                {['👩', '👩‍🦱', '👩‍🦰', '👩‍🦳'].map((avatar, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full bg-gradient-to-br from-tulipa-200 to-tulipa-400 border-2 border-white flex items-center justify-center text-sm"
                  >
                    {avatar}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-berry-600">
                  <strong>500+</strong> alunas satisfeitas
                </p>
              </div>
            </div>
          </div>

          {/* Right side — card collage */}
          <div className="relative hidden lg:block">
            {/* Main card */}
            <div className="relative z-10 glass rounded-3xl p-8 shadow-card-hover ml-8">
              <div className="text-6xl mb-4">🌷</div>
              <h3 className="font-heading text-2xl font-bold text-berry-900 mb-2">
                Dona Tulipa
              </h3>
              <p className="text-berry-600 text-sm leading-relaxed mb-6">
                Cursos artesanais presenciais com materiais inclusos, coffee break e certificado digital.
              </p>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white/60 rounded-2xl p-3 text-center border border-white/60"
                  >
                    <div className="text-xl mb-1">{stat.icon}</div>
                    <div className="font-bold text-berry-900 text-lg leading-none">{stat.value}</div>
                    <div className="text-xs text-berry-500 mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating mini-cards */}
            <div className="absolute -top-6 -right-6 glass rounded-2xl p-4 shadow-card animate-float">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center text-white text-lg">
                  🧼
                </div>
                <div>
                  <div className="text-xs font-semibold text-berry-900">Saboaria Artesanal</div>
                  <div className="text-xs text-tulipa-600 font-bold">R$ 190,00</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 glass rounded-2xl p-4 shadow-card animate-float-delayed">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white text-lg">
                  🕯️
                </div>
                <div>
                  <div className="text-xs font-semibold text-berry-900">Velas Artesanais</div>
                  <div className="text-xs text-tulipa-600 font-bold">Vagas limitadas!</div>
                </div>
              </div>
            </div>

            <div className="absolute top-1/2 -left-10 glass rounded-2xl px-4 py-3 shadow-card animate-bounce-gentle">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-tulipa-500" />
                <span className="text-xs font-medium text-berry-900">Certificado incluso</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16">
          <a
            href="#countdown"
            className="flex flex-col items-center gap-2 text-berry-400 hover:text-tulipa-500 transition-colors group"
          >
            <span className="text-xs font-medium">Role para ver mais</span>
            <ChevronDown className="w-5 h-5 animate-bounce-gentle" />
          </a>
        </div>
      </div>
    </section>
  )
}

