'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Clock, Users, Award, ArrowRight, Star, Zap } from 'lucide-react'
import { type Curso } from '@/data/cursos'
import { formatPrice, getNextDate, formatDate } from '@/lib/utils'
import { cn } from '@/lib/utils'

interface CourseCardProps {
  curso: Curso
  index?: number
}

const categoryColors: Record<string, string> = {
  'saboaria-artesanal':   'from-pink-400 to-rose-500',
  'velas-artesanais':     'from-amber-400 to-orange-500',
  'cosmeticos-perfumaria': 'from-violet-400 to-purple-500',
  'produtos-limpeza':     'from-teal-400 to-cyan-500',
  'faca-lucre':           'from-emerald-400 to-green-500',
}

const categoryEmojis: Record<string, string> = {
  'saboaria-artesanal':   '🧼',
  'velas-artesanais':     '🕯️',
  'cosmeticos-perfumaria': '✨',
  'produtos-limpeza':     '🧪',
  'faca-lucre':           '💰',
}

export function CourseCard({ curso, index = 0 }: CourseCardProps) {
  const [hovered, setHovered] = useState(false)
  const nextDate = getNextDate(curso.datas)
  const gradient = categoryColors[curso.categoria] ?? 'from-pink-400 to-rose-500'
  const emoji = categoryEmojis[curso.categoria] ?? '🌸'

  return (
    <div
      className={cn(
        'group relative bg-white rounded-3xl overflow-hidden border border-tulipa-100/60 card-hover',
        curso.destaque && 'ring-2 ring-tulipa-400 ring-offset-2'
      )}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Destaque badge */}
      {curso.destaque && (
        <div className="absolute top-4 right-4 z-20 flex items-center gap-1 px-2.5 py-1 rounded-full bg-gradient-tulipa text-white text-xs font-bold shadow-tulipa">
          <Star className="w-3 h-3 fill-white" />
          Destaque
        </div>
      )}

      {/* Card header with gradient */}
      <div className={cn('relative h-48 bg-gradient-to-br overflow-hidden', gradient)}>
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-20 mesh-pattern" />

        {/* Large emoji */}
        <div
          className="absolute inset-0 flex items-center justify-center transition-transform duration-700"
          style={{ transform: hovered ? 'scale(1.15) rotate(5deg)' : 'scale(1) rotate(0deg)' }}
        >
          <span className="text-7xl filter drop-shadow-lg select-none">{emoji}</span>
        </div>

        {/* Category badge */}
        <div className="absolute bottom-4 left-4">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/25 text-white backdrop-blur-sm border border-white/30">
            {curso.categoriaNome}
          </span>
        </div>

        {/* Vagas badge */}
        {curso.vagas && curso.vagas <= 5 && (
          <div className="absolute top-4 left-4 flex items-center gap-1 px-2.5 py-1 rounded-full bg-red-500 text-white text-xs font-bold">
            <Zap className="w-3 h-3" />
            Últimas vagas!
          </div>
        )}
      </div>

      {/* Card body */}
      <div className="p-6 space-y-4">
        {/* Title */}
        <div>
          {curso.subtitulo && (
            <span className="text-xs font-medium text-tulipa-400 uppercase tracking-wider">
              {curso.subtitulo}
            </span>
          )}
          <h3 className="font-heading text-xl font-bold text-berry-900 mt-0.5 group-hover:text-tulipa-600 transition-colors duration-300 leading-tight">
            {curso.titulo}
          </h3>
        </div>

        {/* Description */}
        <p className="text-sm text-berry-500 leading-relaxed line-clamp-2">
          {curso.descricao}
        </p>

        {/* Meta */}
        <div className="flex items-center gap-4 text-xs text-berry-400">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-tulipa-400" />
            <span>{curso.tempoLeitura}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5 text-tulipa-400" />
            <span>{curso.nivel}</span>
          </div>
          {curso.vagas && (
            <div className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-tulipa-400" />
              <span>{curso.vagas} vagas</span>
            </div>
          )}
        </div>

        {/* Next date */}
        {nextDate && (
          <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-tulipa-50 border border-tulipa-100">
            <span className="text-xs">📅</span>
            <span className="text-xs text-berry-700 font-medium">
              Próxima turma: {formatDate(nextDate)}
            </span>
          </div>
        )}

        {/* Inclusos chips */}
        {curso.inclusos && (
          <div className="flex flex-wrap gap-1.5">
            {curso.inclusos.slice(0, 3).map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs bg-green-50 text-green-700 border border-green-100"
              >
                ✓ {item}
              </span>
            ))}
            {curso.inclusos.length > 3 && (
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs bg-tulipa-50 text-tulipa-600 border border-tulipa-100">
                +{curso.inclusos.length - 3} mais
              </span>
            )}
          </div>
        )}

        {/* Price + CTA */}
        <div className="flex items-end justify-between pt-2 border-t border-tulipa-50">
          <div>
            <div className="text-2xl font-black text-tulipa-600 font-heading leading-none">
              {formatPrice(curso.preco)}
            </div>
            {curso.parcelamento && (
              <div className="text-xs text-berry-400 mt-0.5">ou {curso.parcelamento}</div>
            )}
          </div>
          <a
            href={`https://wa.me/5584999999999?text=Olá! Tenho interesse no curso ${encodeURIComponent(curso.titulo)}.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-gradient-tulipa text-white font-semibold rounded-xl text-sm shadow-tulipa hover:shadow-tulipa-lg hover:-translate-y-0.5 transition-all duration-300"
          >
            Inscrever-se
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>

      {/* Bottom hover glow */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-tulipa transform origin-left transition-transform duration-500"
        style={{ transform: hovered ? 'scaleX(1)' : 'scaleX(0)' }}
      />
    </div>
  )
}

