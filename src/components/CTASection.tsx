import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react'

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-berry-900 via-berry-800 to-tulipa-800" />

      {/* Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fff'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Orbs */}
      <div className="orb w-96 h-96 bg-tulipa-500 top-0 right-0 translate-x-1/3 -translate-y-1/3 opacity-20" />
      <div className="orb w-72 h-72 bg-tulipa-400 bottom-0 left-0 -translate-x-1/3 translate-y-1/3 opacity-20" />

      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium backdrop-blur-sm border border-white/20">
            <Sparkles className="w-4 h-4" />
            Comece sua jornada artesanal hoje
          </div>

          {/* Headline */}
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Pronta para transformar{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-tulipa-300 to-rose-300">
              seu talento
            </span>{' '}
            em renda?
          </h2>

          <p className="text-white/70 text-lg leading-relaxed">
            Junte-se a mais de 500 alunas que já descobriram como transformar criatividade
            em um negócio lucrativo. Vagas limitadas — garanta a sua agora!
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: '✅', text: 'Materiais inclusos' },
              { icon: '☕', text: 'Coffee break' },
              { icon: '🎓', text: 'Certificado digital' },
            ].map((f) => (
              <div
                key={f.text}
                className="flex items-center gap-2 justify-center px-4 py-3 rounded-2xl bg-white/10 text-white text-sm backdrop-blur-sm border border-white/15"
              >
                <span>{f.icon}</span>
                <span className="font-medium">{f.text}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href="#cursos"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-tulipa text-white font-bold rounded-2xl shadow-tulipa-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            >
              <Sparkles className="w-5 h-5" />
              Ver todos os cursos
            </a>
            <a
              href="https://wa.me/5584999999999?text=Olá! Tenho interesse nos cursos da Dona Tulipa."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/15 text-white font-semibold rounded-2xl border border-white/30 backdrop-blur-sm hover:bg-white/25 transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              Falar no WhatsApp
            </a>
          </div>

          {/* Trust note */}
          <p className="text-white/40 text-sm">
            🔒 Atendimento personalizado · Sem compromisso · Resposta em minutos
          </p>
        </div>
      </div>
    </section>
  )
}

