'use client'

import { useState } from 'react'
import { cursos, categorias, type Curso, type CategoriaSlug } from '@/data/cursos'
import { CourseCard } from './CourseCard'

export function CourseGrid() {
  const [activeCategory, setActiveCategory] = useState<CategoriaSlug | 'all'>('all')

  const filtered =
    activeCategory === 'all'
      ? cursos
      : cursos.filter((c) => c.categoria === activeCategory)

  return (
    <section id="cursos" className="py-24 bg-tulipa-50/50">
      <div className="section-container">
        {/* Header */}
        <div className="section-header">
          <div className="badge-tulipa mb-4">🎓 Nossos Cursos</div>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-berry-900 mb-4">
            Cursos{' '}
            <span className="gradient-text italic">artesanais</span>{' '}
            presenciais
          </h2>
          <p className="text-berry-600 text-lg max-w-xl mx-auto">
            Aprenda com quem vive disso. Materiais inclusos, coffee break e certificado digital em todos os cursos.
          </p>
          <div className="divider-tulipa mt-6" />
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`category-pill ${activeCategory === 'all' ? 'active' : ''}`}
          >
            🌸 Todos
          </button>
          {categorias.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setActiveCategory(cat.slug)}
              className={`category-pill ${activeCategory === cat.slug ? 'active' : ''}`}
            >
              {cat.icone} {cat.nome}
            </button>
          ))}
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
            {filtered.map((curso, i) => (
              <CourseCard key={curso.id} curso={curso} index={i} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-berry-400">
            <div className="text-5xl mb-4">🔍</div>
            <p className="text-lg">Nenhum curso encontrado nessa categoria.</p>
          </div>
        )}
      </div>
    </section>
  )
}

