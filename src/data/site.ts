export const siteConfig = {
  name: 'Rodrigo de Bolsonaro 36',
  title: 'Rodrigo de Bolsonaro 36 — Deus, Família e RN',
  description:
    'Site de Rodrigo de Bolsonaro 36, candidato ao Governo do Rio Grande do Norte nas eleições de 2026. Conheça as propostas apresentadas para o RN.',
  shortName: 'Rodrigo de Bolsonaro 36',
  url: 'https://rodrigodebolsonaro36.com.br',
  locale: 'pt_BR',
  author: {
    name: 'Rodrigo de Bolsonaro 36',
    idade: 46,
    cidade: 'Natal',
    estado: 'Rio Grande do Norte',
    ocupacao: 'Empresário',
    religiao: 'Cristão',
    orientacao: 'Direita / Bolsonarista',
    partido: 'AGIR',
    candidato: 'candidato ao Governo do RN - 2026',
    lema: 'Deus, Família e Rio Grande do Norte',
    bio: 'Empresário natalense, 46 anos, cristão. Identificado politicamente com a direita e bolsonarista. Candidato ao Governo do Rio Grande do Norte nas eleições de 2026, ligado ao AGIR. Defende os valores de Deus, Família e Rio Grande do Norte.',
  },
  contact: {
    email: 'contato@rodrigodebolsonarorn36.com.br',
    telefone: '5584998104751',
    endereco: 'Natal, Rio Grande do Norte',
  },
  social: {
    instagram: 'https://instagram.com/rodrigodebolsonarorn36',
    facebook: 'https://facebook.com/rodrigodebolsonarorn36',
    whatsapp: 'https://wa.me/5584998104751',
    youtube: 'https://youtube.com/',
    tiktok: 'https://tiktok.com/',
    x: 'https://x.com/',
  },
  nav: [
    { label: 'Início', href: '#inicio' },
    { label: 'Propostas', href: '#propostas' },
    { label: 'Perguntas e Respostas', href: '#faq' },
    { label: 'Contato', href: '#contato' },
  ],
};

export type SiteConfig = typeof siteConfig;
