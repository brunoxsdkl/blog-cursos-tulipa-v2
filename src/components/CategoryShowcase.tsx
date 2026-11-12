'use client'

import Link from 'next/link'
import { categorias } from '@/data/cursos'
import { ArrowRight } from 'lucide-react'

export function CategoryShowcase() {
  return (
    <section id="categorias" className="py-24 bg-white">
      <div className="section-container">
        {/* Header */}
        <div className="section-header">
          <div className="badge-tulipa mb-4">✨ Categorias de Cursos</div>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-berry-900 mb-4">
            O que você quer{' '}
            <span className="gradient-text italic">aprender?</span>
          </h2>
          <p className="text-berry-600 text-lg max-w-xl mx-auto">
            Escolha a área que mais combina com você e comece sua jornada artesanal hoje.
          </p>
          <div className="divider-tulipa mt-6" />
        </div>

        {/* Category cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categorias.map((cat, index) => (
            <a
              key={cat.slug}
              href={`#${cat.slug}`}
              className="group relative block overflow-hidden rounded-3xl border border-tulipa-100 bg-white card-hover cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cat.cor} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

              <div className="relative p-7">
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cat.cor} flex items-center justify-center text-2xl mb-5 shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}
                >
                  {cat.icone}
                </div>

                {/* Content */}
                <h3 className="font-heading text-xl font-bold text-berry-900 mb-2 group-hover:text-tulipa-600 transition-colors duration-300">
                  {cat.nome}
                </h3>
                <p className="text-berry-500 text-sm leading-relaxed mb-5">
                  {cat.descricao}
                </p>

                {/* Arrow */}
                <div className="flex items-center gap-2 text-tulipa-500 text-sm font-semibold">
                  <span>Ver cursos</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </div>

              {/* Bottom gradient line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${cat.cor} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
            </a>
          ))}

          {/* CTA card */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-tulipa p-7 flex flex-col justify-between sm:col-span-2 lg:col-span-1">
            <div className="absolute inset-0 opacity-10 mesh-pattern" />
            <div className="relative">
              <div className="text-4xl mb-4">🌷</div>
              <h3 className="font-heading text-xl font-bold text-white mb-2">
                Não sabe por onde começar?
              </h3>
              <p className="text-white/80 text-sm leading-relaxed mb-6">
                Fale com a gente no WhatsApp e descubra qual curso é ideal para você.
              </p>
            </div>
            <a
              href="https://wa.me/5584999999999?text=Olá! Quero saber qual curso é ideal para mim."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-tulipa-600 font-bold rounded-2xl hover:bg-tulipa-50 transition-colors duration-200 self-start"
            >
              Conversar agora
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

