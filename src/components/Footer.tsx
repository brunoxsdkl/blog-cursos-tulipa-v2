import Link from 'next/link'
import { categorias } from '@/data/cursos'
import { Instagram, Heart } from 'lucide-react'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-berry-900 text-white">
      {/* Top section */}
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-tulipa flex items-center justify-center shadow-tulipa">
                <span className="text-xl">🌷</span>
              </div>
              <div>
                <div className="font-heading font-bold text-xl gradient-text">Dona Tulipa</div>
                <div className="text-xs text-white/40 mt-0.5">Cursos Artesanais</div>
              </div>
            </div>

            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              Transformando criatividade em renda desde 2016. Cursos presenciais de artesanato premium com materiais inclusos e certificado digital.
            </p>

            {/* Social */}
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/donatulipa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-gradient-tulipa border border-white/10 hover:border-transparent flex items-center justify-center transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/5584999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-green-500 border border-white/10 hover:border-transparent flex items-center justify-center transition-all duration-300"
              >
                <span className="text-sm">💬</span>
              </a>
            </div>
          </div>

          {/* Categorias */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white/90 text-sm uppercase tracking-wider">Categorias</h4>
            <ul className="space-y-2.5">
              {categorias.map((cat) => (
                <li key={cat.slug}>
                  <a
                    href={`#${cat.slug}`}
                    className="flex items-center gap-2 text-sm text-white/50 hover:text-tulipa-300 transition-colors duration-200"
                  >
                    <span>{cat.icone}</span>
                    {cat.nome}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white/90 text-sm uppercase tracking-wider">Contato</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/5584999999999?text=Olá! Quero saber mais sobre os cursos."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col gap-0.5"
                >
                  <span className="text-xs text-white/40 uppercase tracking-wider">WhatsApp</span>
                  <span className="text-sm text-white/70 hover:text-tulipa-300 transition-colors">
                    (84) 9 9999-9999
                  </span>
                </a>
              </li>
              <li>
                <a href="mailto:contato@donatulipa.com.br" className="flex flex-col gap-0.5">
                  <span className="text-xs text-white/40 uppercase tracking-wider">E-mail</span>
                  <span className="text-sm text-white/70 hover:text-tulipa-300 transition-colors">
                    contato@donatulipa.com.br
                  </span>
                </a>
              </li>
              <li className="flex flex-col gap-0.5">
                <span className="text-xs text-white/40 uppercase tracking-wider">Instagram</span>
                <span className="text-sm text-white/70">@donatulipa</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="section-container py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-white/40 text-xs text-center sm:text-left">
              © {year} Dona Tulipa. Todos os direitos reservados.
            </p>
            <p className="text-white/30 text-xs flex items-center gap-1.5">
              Feito com
              <Heart className="w-3.5 h-3.5 fill-tulipa-400 text-tulipa-400" />
              para artesãs de todo o Brasil
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

