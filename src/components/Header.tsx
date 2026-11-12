'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ShoppingBag, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'
import { categorias } from '@/data/cursos'

const navLinks = [
  { href: '/', label: 'Início' },
  { href: '#cursos', label: 'Cursos' },
  { href: '#categorias', label: 'Categorias' },
  { href: '#depoimentos', label: 'Depoimentos' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-white/90 backdrop-blur-xl border-b border-tulipa-100/60 shadow-sm py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="section-container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="w-9 h-9 rounded-xl bg-gradient-tulipa flex items-center justify-center shadow-tulipa transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <span className="text-white text-lg">🌷</span>
              </div>
              <div className="absolute -inset-1 bg-gradient-tulipa rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
            </div>
            <div>
              <span className="font-heading font-bold text-xl leading-none gradient-text">
                Dona Tulipa
              </span>
              <span className="block text-xs text-tulipa-400 font-medium leading-none mt-0.5">
                Cursos Artesanais
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200',
                  scrolled
                    ? 'text-berry-900 hover:text-tulipa-600 hover:bg-tulipa-50'
                    : 'text-berry-800 hover:text-tulipa-600 hover:bg-white/20'
                )}
              >
                {link.label}
              </Link>
            ))}

            {/* Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setActiveDropdown(true)}
                onMouseLeave={() => setActiveDropdown(false)}
                className={cn(
                  'px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 flex items-center gap-1',
                  scrolled
                    ? 'text-berry-900 hover:text-tulipa-600 hover:bg-tulipa-50'
                    : 'text-berry-800 hover:text-tulipa-600 hover:bg-white/20'
                )}
              >
                Categorias
                <svg className={cn('w-4 h-4 transition-transform duration-200', activeDropdown && 'rotate-180')} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {activeDropdown && (
                <div
                  onMouseEnter={() => setActiveDropdown(true)}
                  onMouseLeave={() => setActiveDropdown(false)}
                  className="absolute top-full left-0 mt-2 w-64 glass rounded-2xl p-2 shadow-card"
                >
                  {categorias.map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`#${cat.slug}`}
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-tulipa-50 transition-colors duration-150 group"
                    >
                      <span className="text-xl">{cat.icone}</span>
                      <div>
                        <div className="text-sm font-medium text-berry-900 group-hover:text-tulipa-600 transition-colors">
                          {cat.nome}
                        </div>
                        <div className="text-xs text-tulipa-400 leading-tight">
                          {cat.descricao.slice(0, 40)}...
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/5584999999999?text=Olá! Tenho interesse nos cursos da Dona Tulipa."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary py-2.5 px-6 text-sm"
            >
              <Sparkles className="w-4 h-4" />
              Quero me inscrever
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={cn(
              'md:hidden p-2.5 rounded-xl transition-all duration-200',
              scrolled ? 'text-berry-900 hover:bg-tulipa-50' : 'text-berry-800 hover:bg-white/20'
            )}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'md:hidden overflow-hidden transition-all duration-300 ease-in-out',
          mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="glass border-t border-white/20 mt-3">
          <div className="section-container py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 rounded-xl text-berry-900 font-medium hover:bg-tulipa-50 hover:text-tulipa-600 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 pb-1">
              <a
                href="https://wa.me/5584999999999?text=Olá! Tenho interesse nos cursos da Dona Tulipa."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full justify-center text-sm"
              >
                <Sparkles className="w-4 h-4" />
                Quero me inscrever
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

