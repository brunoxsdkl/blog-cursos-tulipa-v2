import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Ana Carolina',
    role: 'Empreendedora — São Paulo',
    avatar: '👩',
    rating: 5,
    text: 'O curso de saboaria mudou minha vida! Em 3 meses já estava vendendo meus produtos e gerando renda extra. A professora é incrível e explica tudo com muito cuidado.',
    curso: 'Saboaria Artesanal',
    emoji: '🧼',
  },
  {
    name: 'Mariana Silva',
    role: 'Dona de casa — Natal',
    avatar: '👩‍🦱',
    rating: 5,
    text: 'Fiz o curso de velas artesanais e fiquei apaixonada! O material incluso, o coffee break... tudo foi perfeito. Hoje vendo coleções completas para festas e eventos.',
    curso: 'Velas Artesanais',
    emoji: '🕯️',
  },
  {
    name: 'Fernanda Costa',
    role: 'Estudante — Rio de Janeiro',
    avatar: '👩‍🦰',
    rating: 5,
    text: 'Nunca imaginei que faria cosméticos em casa! O curso de cosméticos naturais foi uma descoberta maravilhosa. Aprendi fórmulas seguras e estou montando minha própria marca.',
    curso: 'Cosméticos & Perfumaria',
    emoji: '✨',
  },
  {
    name: 'Juliana Rocha',
    role: 'Mãe e empreendedora — Recife',
    avatar: '👩‍🦳',
    rating: 5,
    text: 'O método Faça & Lucre é exatamente o que o nome promete. Aprendi a fazer produtos de limpeza profissionais e hoje tenho clientes fixos. Investimento que vale cada centavo!',
    curso: 'Produtos de Limpeza',
    emoji: '🧪',
  },
  {
    name: 'Beatriz Santos',
    role: 'Artesã — Fortaleza',
    avatar: '🧑',
    rating: 5,
    text: 'A Dona Tulipa tem uma didática incrível. O certificado digital e os materiais inclusos fazem toda a diferença. Já fiz 3 cursos e pretendo fazer todos!',
    curso: 'Velas + Saboaria',
    emoji: '🌷',
  },
  {
    name: 'Camila Ferreira',
    role: 'Designer — Brasília',
    avatar: '👱‍♀️',
    rating: 5,
    text: 'Vim pelo curso de cosméticos e fiquei pela comunidade incrível que se forma em cada turma. O ambiente é acolhedor, a professora domina o assunto e aprendi demais!',
    curso: 'Cosméticos & Perfumaria',
    emoji: '💎',
  },
]

export function TestimonialSection() {
  return (
    <section id="depoimentos" className="py-24 bg-white overflow-hidden">
      <div className="section-container">
        {/* Header */}
        <div className="section-header">
          <div className="badge-tulipa mb-4">💬 Depoimentos</div>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-berry-900 mb-4">
            O que nossas{' '}
            <span className="gradient-text italic">alunas</span>{' '}
            dizem
          </h2>
          <p className="text-berry-600 text-lg max-w-xl mx-auto">
            Histórias reais de transformação. Pessoas que decidiram aprender e mudaram suas vidas.
          </p>
          <div className="divider-tulipa mt-6" />
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative bg-white rounded-3xl p-7 border border-tulipa-100/60 card-hover group"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-tulipa-50 flex items-center justify-center">
                <Quote className="w-4 h-4 text-tulipa-400 fill-tulipa-200" />
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-berry-600 text-sm leading-relaxed mb-5 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Course badge */}
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-tulipa-50 text-tulipa-700 border border-tulipa-100 mb-5">
                {t.emoji} {t.curso}
              </span>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-tulipa-50">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-tulipa-200 to-tulipa-400 flex items-center justify-center text-xl">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-berry-900 text-sm">{t.name}</div>
                  <div className="text-xs text-berry-400">{t.role}</div>
                </div>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-tulipa opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* Bottom stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '500+', label: 'Alunas formadas', icon: '👩‍🎓' },
            { value: '4.9★', label: 'Avaliação média', icon: '⭐' },
            { value: '98%',  label: 'Recomendam os cursos', icon: '💝' },
            { value: '8+',   label: 'Anos de experiência', icon: '🏆' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-tulipa-50/50 border border-tulipa-100/60"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="font-heading text-3xl font-bold gradient-text">{stat.value}</div>
              <div className="text-sm text-berry-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

