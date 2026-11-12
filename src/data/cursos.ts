export interface Curso {
  id: string
  titulo: string
  slug: string
  categoria: CategoriaSlug
  categoriaNome: string
  descricao: string
  imagem: string
  video?: string
  nivel: 'Iniciante' | 'Intermediário' | 'Avançado'
  tempoLeitura: string
  preco: number
  parcelamento?: string
  tecnicas?: (string | { icone?: string; titulo: string; descricao?: string })[]
  produtosDestaque?: { nome: string; icone: string; descricao?: string }[]
  beneficios: (string | { icone?: string; titulo: string; descricao?: string })[]
  beneficioDestaque?: string
  chamada?: { titulo: string; descricao: string; rodape?: string }
  inclusos?: string[]
  descricaoLonga?: string[]
  sobre?: string[]
  ctaSubtitulo?: string
  proximosModulos?: string[]
  subtitulo?: string
  faixaDestaque?: string
  fraseImpacto?: string
  aprendizado?: { icone: string; titulo: string; itens: string[] }[]
  tecnicasPraticas?: { numero: string; nome: string; descricao: string }[]
  professora?: {
    nome: string
    titulo: string
    bio: string
    registros?: string[]
    frase: string
  }
  datas: string[]
  faq: { pergunta: string; resposta: string }[]
  vagas?: number
  destaque?: boolean
}

export type CategoriaSlug =
  | 'saboaria-artesanal'
  | 'velas-artesanais'
  | 'cosmeticos-perfumaria'
  | 'produtos-limpeza'
  | 'faca-lucre'

export const categorias: { slug: CategoriaSlug; nome: string; descricao: string; icone: string; cor: string }[] = [
  {
    slug: 'saboaria-artesanal',
    nome: 'Saboaria Artesanal',
    descricao: 'Aprenda a produzir sabonetes artesanais premium com técnicas profissionais.',
    icone: '🧼',
    cor: 'from-pink-400 to-rose-500',
  },
  {
    slug: 'velas-artesanais',
    nome: 'Velas Artesanais',
    descricao: 'Crie velas decorativas e aromáticas que encantam clientes.',
    icone: '🕯️',
    cor: 'from-amber-400 to-orange-500',
  },
  {
    slug: 'cosmeticos-perfumaria',
    nome: 'Cosméticos & Perfumaria',
    descricao: 'Domine a produção de cosméticos naturais e perfumaria artesanal.',
    icone: '✨',
    cor: 'from-violet-400 to-purple-500',
  },
  {
    slug: 'produtos-limpeza',
    nome: 'Produtos de Limpeza',
    descricao: 'Fabrique produtos de limpeza eficientes e sustentáveis.',
    icone: '🧪',
    cor: 'from-teal-400 to-cyan-500',
  },
  {
    slug: 'faca-lucre',
    nome: 'Faça & Lucre',
    descricao: 'Transforme seus conhecimentos em negócios lucrativos.',
    icone: '💰',
    cor: 'from-emerald-400 to-green-500',
  },
]

export const cursos: Curso[] = [
  {
    id: 'saboaria-modulo-1',
    titulo: 'Saboaria Artesanal — Natal',
    subtitulo: 'Módulo 1 · Do Zero à Primeira Produção',
    slug: 'saboaria-artesanal-modulo-1',
    categoria: 'saboaria-artesanal',
    categoriaNome: 'Saboaria Artesanal',
    descricao: 'Aprenda a criar sabonetes artesanais do zero e transforme conhecimento em possibilidades de renda.',
    descricaoLonga: [
      'Aprenda a criar sabonetes artesanais do zero e transforme conhecimento em possibilidades de renda.',
      'Um curso prático e presencial, desenvolvido para quem deseja aprender as principais técnicas da saboaria artesanal, mesmo sem experiência anterior.',
      'Você vai aprender desde a escolha dos materiais e insumos até a produção, acabamento, embalagem, precificação e cuidados importantes.',
    ],
    imagem: '/images/saboaria.jpg',
    nivel: 'Iniciante',
    tempoLeitura: '4 horas',
    preco: 190,
    parcelamento: '3x de R$63,33',
    destaque: true,
    vagas: 12,
    tecnicas: [
      'Fundamentos da Saboaria Artesanal — matérias-primas, utensílios e equipamentos',
      'Técnicas de produção com acompanhamento durante toda a prática',
      'Cores, fragrâncias e acabamento para criações comercialmente atrativas',
      'Acabamento e embalagem com apresentação profissional',
      'Custo e precificação — calcule e estabeleça preços ideais',
      'Noções para comercialização e renda extra',
    ],
    beneficios: [
      'Sabonetes artesanais de alto padrão que se destacam no mercado',
      'Redução de custos com produção própria',
      'Produtos sustentáveis que atraem clientes conscientes',
      'Possibilidade de criar linhas exclusivas para datas especiais',
    ],
    beneficioDestaque: 'Curso presencial com duração de 4 horas',
    inclusos: [
      'Apostila completa do curso',
      'Todos os materiais utilizados na aula prática',
      'Produção dos produtos durante o curso',
      'Coffee break artesanal',
      'Orientações personalizadas da professora',
      'Certificado digital de conclusão',
    ],
    ctaSubtitulo: 'MÓDULO 1 — DO ZERO À PRIMEIRA PRODUÇÃO',
    proximosModulos: [
      'MÓDULO 2 — SABOARIA FITOTERÁPICA',
      'MÓDULO 3 — SABOARIA NATALINA',
      'MÓDULO 4 — SABOARIA AVANÇADA',
    ],
    fraseImpacto: 'Transforme criatividade em renda com as próprias mãos.',
    datas: ['2026-12-10T09:00:00', '2026-12-17T09:00:00'],
    faq: [
      {
        pergunta: 'Preciso ter experiência?',
        resposta: 'Não! O curso é pensado para iniciantes. Você aprenderá do zero, com linguagem simples e passo a passo detalhado.',
      },
      {
        pergunta: 'O material está incluso?',
        resposta: 'Sim! Todo o material necessário para a prática durante o curso está incluso no valor.',
      },
      {
        pergunta: 'Recebo certificado?',
        resposta: 'Sim, ao concluir o curso você recebe um certificado digital de conclusão.',
      },
      {
        pergunta: 'Posso vender os produtos depois?',
        resposta: 'Sim! Você poderá vender seus produtos de forma artesanal e o curso ensina a precificar e embalar profissionalmente.',
      },
    ],
  },
  {
    id: 'velas-artesanais-1',
    titulo: 'Velas Artesanais — Essencial',
    subtitulo: 'Crie, Venda e Encante',
    slug: 'velas-artesanais-essencial',
    categoria: 'velas-artesanais',
    categoriaNome: 'Velas Artesanais',
    descricao: 'Domine a arte de criar velas decorativas e aromáticas únicas que conquistam clientes e geram renda.',
    imagem: '/images/velas.jpg',
    nivel: 'Iniciante',
    tempoLeitura: '6 horas',
    preco: 220,
    parcelamento: '3x de R$73,33',
    vagas: 10,
    tecnicas: [
      'Tipos de ceras: soja, parafina, coco e misturas premium',
      'Fragrâncias e óleos essenciais — dosagem e harmonização',
      'Corantes e pigmentos — técnicas de coloração',
      'Pavio e fixação — tipos, corte e centralização',
      'Moldes e formas — velas container e esculpidas',
      'Acabamento, rotulagem e precificação',
    ],
    beneficios: [
      'Produtos com alta margem de lucro e demanda crescente',
      'Técnicas que se aplicam a velas decorativas e aromáticas',
      'Conhecimento para criar coleções sazonais e sob encomenda',
      'Base para montar seu próprio negócio artesanal',
    ],
    beneficioDestaque: 'Curso presencial com duração de 6 horas',
    inclusos: [
      'Kit completo de materiais incluso',
      'Velas produzidas durante a aula para levar',
      'Apostila com fórmulas e referências',
      'Coffee break',
      'Certificado digital de conclusão',
    ],
    fraseImpacto: 'Uma vela acesa pode iluminar um negócio inteiro.',
    datas: ['2026-12-14T09:00:00'],
    faq: [
      {
        pergunta: 'Preciso de equipamentos especiais?',
        resposta: 'Não! Todos os materiais e equipamentos são fornecidos durante o curso.',
      },
      {
        pergunta: 'Quanto posso lucrar com velas?',
        resposta: 'A margem de lucro em velas artesanais pode chegar a 300% sobre o custo de produção.',
      },
    ],
  },
  {
    id: 'cosmeticos-perfumaria-1',
    titulo: 'Cosméticos & Perfumaria Natural',
    subtitulo: 'Da Natureza às suas Mãos',
    slug: 'cosmeticos-perfumaria-natural',
    categoria: 'cosmeticos-perfumaria',
    categoriaNome: 'Cosméticos & Perfumaria',
    descricao: 'Aprenda a criar cosméticos naturais e perfumes artesanais que cuidam da pele e encantam os sentidos.',
    imagem: '/images/cosmeticos.jpg',
    nivel: 'Iniciante',
    tempoLeitura: '8 horas',
    preco: 280,
    parcelamento: '4x de R$70,00',
    vagas: 8,
    destaque: true,
    tecnicas: [
      { icone: '🌿', titulo: 'Ativos naturais e sua função na pele', descricao: 'Entenda o que cada ativo faz e como combiná-los.' },
      { icone: '⚗️', titulo: 'Formulação de cremes e loções', descricao: 'Aprenda emulsões óleo-em-água e água-em-óleo.' },
      { icone: '🌸', titulo: 'Perfumaria artesanal com óleos essenciais', descricao: 'Crie fragrâncias únicas com notas de topo, coração e base.' },
      { icone: '🧴', titulo: 'Séruns, tônicos e hidratantes', descricao: 'Fórmulas eficazes para diferentes tipos de pele.' },
      { icone: '🏷️', titulo: 'Embalagem, rotulagem e ANVISA', descricao: 'Regularização e apresentação dos seus produtos.' },
      { icone: '💄', titulo: 'Gloss, batons e produtos labiais naturais', descricao: 'Cosméticos decorativos com ingredientes naturais.' },
    ],
    beneficios: [
      { icone: '🌱', titulo: 'Formulações 100% naturais e veganas', descricao: 'Produtos alinhados com as tendências de consumo consciente.' },
      { icone: '📋', titulo: 'Conhecimento técnico e científico', descricao: 'Base sólida para criar com segurança e qualidade.' },
      { icone: '💎', titulo: 'Alta margem de lucro', descricao: 'Cosméticos artesanais naturais têm valor agregado elevado.' },
      { icone: '🎓', titulo: 'Certificado digital', descricao: 'Comprove seu aprendizado com nosso certificado.' },
    ],
    fraseImpacto: 'Beleza que nasce da natureza e das suas mãos.',
    datas: ['2026-12-21T09:00:00'],
    faq: [
      {
        pergunta: 'Os cosméticos seguem as normas da ANVISA?',
        resposta: 'Sim! Todo o conteúdo segue as boas práticas de fabricação recomendadas pela ANVISA para pequenos produtores.',
      },
      {
        pergunta: 'Posso adaptar as fórmulas para venda?',
        resposta: 'Sim! Você aprenderá a adaptar e criar suas próprias formulações para comercialização.',
      },
    ],
  },
  {
    id: 'produtos-limpeza-1',
    titulo: 'Produtos de Limpeza Artesanais',
    subtitulo: 'Método Faça & Lucre',
    slug: 'produtos-limpeza-artesanais',
    categoria: 'produtos-limpeza',
    categoriaNome: 'Produtos de Limpeza',
    descricao: 'Aprenda a criar produtos de limpeza com técnica, segurança e qualidade com orientação de uma Química profissional.',
    imagem: '/images/limpeza.jpg',
    nivel: 'Iniciante',
    tempoLeitura: '4 horas',
    preco: 150,
    parcelamento: '2x de R$75,00',
    vagas: 15,
    tecnicas: [
      { icone: '🧪', titulo: 'Matérias-primas e suas funções', descricao: 'Entenda os principais componentes das formulações.' },
      { icone: '⚗️', titulo: 'Passo a passo prático', descricao: 'Da sequência de mistura aos cuidados durante a fabricação.' },
      { icone: '📏', titulo: 'Controle de pH', descricao: 'Por que medir e acompanhar o pH é fundamental.' },
      { icone: '🌸', titulo: 'Fragrância e identidade', descricao: 'Personalize seus produtos com fragrâncias exclusivas.' },
      { icone: '🏷️', titulo: 'Embalagem e rotulagem', descricao: 'Apresentação profissional para seus produtos.' },
      { icone: '🧤', titulo: 'Boas práticas e segurança', descricao: 'Manipulação responsável das matérias-primas.' },
    ],
    produtosDestaque: [
      { nome: 'Desinfetante perfumado', icone: '🧴' },
      { nome: 'Detergente', icone: '🫧' },
      { nome: 'Amaciante de roupas', icone: '👕' },
      { nome: 'Alvejante sem cloro', icone: '✨' },
      { nome: 'Limpa-vidros', icone: '🪟' },
      { nome: 'Multiuso', icone: '🧹' },
      { nome: 'Lava-roupas', icone: '🫧' },
      { nome: 'Limpa-canil', icone: '🐾' },
    ],
    beneficios: [
      { icone: '👩‍🔬', titulo: 'Aprendizado com uma Química', descricao: 'Conhecimento técnico aplicado de forma simples e prática.' },
      { icone: '🧪', titulo: 'Aula prática e presencial', descricao: 'Você acompanha e participa do processo de fabricação.' },
      { icone: '📚', titulo: 'Material de apoio', descricao: 'Conteúdo para consultar depois do curso.' },
      { icone: '🎓', titulo: 'Certificado digital', descricao: 'Certificado de conclusão após a participação.' },
    ],
    chamada: {
      titulo: 'NÃO É APENAS UM CURSO DE FÓRMULAS. É O INÍCIO DE UMA NOVA HABILIDADE.',
      descricao: 'Você vai aprender fazendo, entender o processo por trás de cada produto e sair do curso com conhecimento para continuar criando.',
      rodape: 'FAÇA • CRIE • APRENDA • TRANSFORME',
    },
    fraseImpacto: 'Transforme conhecimento em produtos que o mundo usa todos os dias.',
    datas: ['2026-10-17T13:00:00'],
    faq: [
      {
        pergunta: 'Preciso ter experiência?',
        resposta: 'Não! O curso é pensado para iniciantes com linguagem simples e passo a passo detalhado.',
      },
      {
        pergunta: 'O material está incluso?',
        resposta: 'Sim! Todo o material necessário para a prática durante o curso está incluso no valor.',
      },
      {
        pergunta: 'Esses produtos seguem a ANVISA?',
        resposta: 'Sim, as fórmulas e orientações seguem as boas práticas de fabricação recomendadas pela ANVISA para pequenos produtores.',
      },
    ],
  },
]

export function getCursoPorSlug(slug: string): Curso | undefined {
  return cursos.find((c) => c.slug === slug)
}

export function getCursosPorCategoria(categoria: CategoriaSlug): Curso[] {
  return cursos.filter((c) => c.categoria === categoria)
}

export function getCursoEmDestaque(): Curso[] {
  return cursos.filter((c) => c.destaque)
}

