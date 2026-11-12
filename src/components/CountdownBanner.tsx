'use client'

import { useEffect, useState } from 'react'
import { Timer, Zap } from 'lucide-react'
import { getTimeUntil, getNextDate } from '@/lib/utils'
import { cursos } from '@/data/cursos'

const nextCurso = cursos
  .filter((c) => getNextDate(c.datas) !== null)
  .sort((a, b) => {
    const dateA = getNextDate(a.datas)!
    const dateB = getNextDate(b.datas)!
    return new Date(dateA).getTime() - new Date(dateB).getTime()
  })[0]

const targetDate = nextCurso ? getNextDate(nextCurso.datas)! : null

function CountdownUnit({ value, label }: { value: number; label: string }) {
  const [prevValue, setPrevValue] = useState(value)
  const [animating, setAnimating] = useState(false)

  useEffect(() => {
    if (value !== prevValue) {
      setAnimating(true)
      const timer = setTimeout(() => {
        setPrevValue(value)
        setAnimating(false)
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [value, prevValue])

  return (
    <div className="flex flex-col items-center gap-1.5">
      <div className="relative">
        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30 flex items-center justify-center overflow-hidden">
          <span
            className={`font-heading text-2xl sm:text-3xl font-black text-white countdown-num ${animating ? 'scale-110' : 'scale-100'}`}
            style={{ transition: 'transform 0.3s cubic-bezier(0.68,-0.55,0.265,1.55)' }}
          >
            {String(value).padStart(2, '0')}
          </span>
          {/* Flip divider */}
          <div className="absolute w-full h-px bg-white/20 top-1/2" />
        </div>
        {/* Glow */}
        <div className="absolute inset-0 rounded-2xl bg-white/10 blur opacity-50" />
      </div>
      <span className="text-xs font-medium text-white/70 uppercase tracking-wider">{label}</span>
    </div>
  )
}

export function CountdownBanner() {
  const [timeLeft, setTimeLeft] = useState(() =>
    targetDate ? getTimeUntil(targetDate) : { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true }
  )

  useEffect(() => {
    if (!targetDate) return
    const interval = setInterval(() => {
      setTimeLeft(getTimeUntil(targetDate))
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  if (!nextCurso || !targetDate || timeLeft.isPast) return null

  return (
    <section id="countdown" className="relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-tulipa" />
      {/* Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fff' fill-opacity='1'%3E%3Ccircle cx='20' cy='20' r='2'/%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      {/* Orbs */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      <div className="relative z-10 section-container py-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left text */}
          <div className="text-center lg:text-left space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 text-white text-xs font-medium backdrop-blur-sm">
              <Zap className="w-3.5 h-3.5 animate-pulse" />
              Próxima turma
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white leading-tight">
              {nextCurso.titulo}
            </h2>
            <p className="text-white/80 text-sm font-light">
              {nextCurso.subtitulo} · {nextCurso.tempoLeitura} · R${' '}
              {nextCurso.preco.toFixed(2).replace('.', ',')}
            </p>
          </div>

          {/* Countdown */}
          <div className="flex items-center gap-3">
            <Timer className="w-6 h-6 text-white/60 hidden sm:block" />
            <div className="flex items-start gap-3 sm:gap-4">
              <CountdownUnit value={timeLeft.days}    label="dias" />
              <span className="text-white/60 text-2xl font-bold pt-3">:</span>
              <CountdownUnit value={timeLeft.hours}   label="horas" />
              <span className="text-white/60 text-2xl font-bold pt-3">:</span>
              <CountdownUnit value={timeLeft.minutes} label="min" />
              <span className="text-white/60 text-2xl font-bold pt-3">:</span>
              <CountdownUnit value={timeLeft.seconds} label="seg" />
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col items-center gap-2">
            <a
              href={`https://wa.me/5584999999999?text=Olá! Tenho interesse no curso ${nextCurso.titulo}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-tulipa-600 font-bold rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap"
            >
              Garantir minha vaga →
            </a>
            {nextCurso.vagas && (
              <span className="text-white/70 text-xs">
                🔥 Apenas <strong className="text-white">{nextCurso.vagas} vagas</strong> disponíveis
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

