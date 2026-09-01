export interface Proposal {
  slug: string;
  categoria: string;
  titulo: string;
  descricao: string;
  imagem: string;
  imagemAlt: string;
  resumo: string;
  itens: string[];
  cor: string;
}

export const proposals: Proposal[] = [
  {
    slug: 'saude-publica-regionalizacao',
    categoria: 'Saúde Pública e Regionalização',
    titulo: 'Saúde Pública e Regionalização',
    descricao:
      'Propostas para ampliar, modernizar e regionalizar a rede pública de saúde do Rio Grande do Norte.',
    imagem:
      'https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=1600&q=80',
    imagemAlt:
      'Hospital moderno com profissionais de saúde realizando atendimento ao público.',
    resumo:
      'Rede regional fortalecida, hospitais e UPAs no interior, hospitais universitários, laboratórios, odontologia, SAMU, medicamentos, saúde animal e valorização profissional.',
    cor: 'from-rose-50',
    itens: [
      'Construção de laboratórios de análises clínicas e Centros Odontológicos de última geração em regiões-polo',
      'Construção de Hospitais Metropolitanos com atendimento 24 horas por polo',
      'Fortalecimento e regionalização da rede de saúde nos municípios do RN',
      'Apoio técnico e financeiro para estruturar e qualificar as UPAs do interior',
      'Implantação de Hospitais Universitários em Caicó e Mossoró',
      'Ampliação da entrega de medicamentos de alto e baixo custo',
      'Otimização das filas de exames e cirurgias, inclusive por meio de convênios',
      'Criação de novas bases do SAMU e aquisição de novas viaturas',
      'Construção de Hospitais Veterinários por polo, com atendimento 24 horas',
      'Realização de novos concursos públicos para a saúde a partir de 2027',
      'Valorização salarial dos profissionais da saúde, observados os limites legais e orçamentários',
    ],
  },
  {
    slug: 'desenvolvimento-economico-infraestrutura',
    categoria: 'Desenvolvimento Econômico e Infraestrutura',
    titulo: 'Desenvolvimento Econômico e Infraestrutura',
    descricao:
      'Propostas para fortalecer a economia, a indústria, a logística e a infraestrutura do Rio Grande do Norte.',
    imagem:
      'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1600&q=80',
    imagemAlt:
      'Estrada moderna com viaduto, área industrial e infraestrutura logística ao fundo.',
    resumo:
      'Seis centros industriais, banco de desenvolvimento, aeroportos, terceira ponte, rodovias, ferrovias, porto e apoio aos motoristas de aplicativo e caminhoneiros.',
    cor: 'from-blue-50',
    itens: [
      'Proposta de parceria com a União relacionada à Ilha de Fernando de Noronha',
      'Reativação do Aeroporto Augusto Severo para voos domésticos',
      'Fortalecimento do Aeroporto Aluízio Alves como plataforma de cargas',
      'Construção de seis Centros Industriais Avançados na Grande Natal, João Câmara, Mossoró, Caicó, Pau dos Ferros e Nova Cruz',
      'Meta de atração de mais de 100 novas empresas por polo industrial',
      'Política de incentivos para fábricas e indústrias com contrapartidas de emprego e renda',
      'Criação de um novo Banco do RN voltado ao desenvolvimento econômico',
      'Construção da terceira ponte em Natal',
      'Reforma e duplicação de rodovias estaduais',
      'Implantação de ferrovias e construção de porto marítimo por meio de parceria',
      'Medidas para reduzir os custos dos combustíveis, da energia e da água',
      'Redução do IPVA, condicionada à compatibilidade fiscal e legal',
      'Criação de aplicativo estadual de transporte e assistência aos motoristas',
      'Centros Avançados de Assistência aos Caminhoneiros em Natal, Mossoró e Parnamirim',
    ],
  },
  {
    slug: 'seguranca-publica-sistema-prisional',
    categoria: 'Segurança Pública e Sistema Prisional',
    titulo: 'Segurança Pública e Sistema Prisional',
    descricao:
      'Propostas para enfrentar o crime organizado, modernizar o sistema prisional e valorizar as forças de segurança.',
    imagem:
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=80',
    imagemAlt:
      'Profissionais das forças de segurança e viatura durante operação de policiamento.',
    resumo:
      'Doze mil novos profissionais, penitenciárias de segurança máxima, isolamento de lideranças, ressocialização pelo trabalho, novos batalhões, delegacias e equipamentos.',
    cor: 'from-amber-50',
    itens: [
      'Construção de duas penitenciárias estaduais de segurança máxima, uma masculina e outra feminina',
      'Instalação das unidades em região estratégica e distante da Região Metropolitana de Natal',
      'Isolamento de lideranças e combate ao poder operacional das facções criminosas',
      'Alinhamento com o governo federal para modernização das unidades estaduais',
      'Substituição programada das unidades prisionais antigas',
      'Construção de centros de reabilitação para jovens',
      'Oficinas e fábricas internas para trabalho, qualificação e remição de pena',
      'Produção prisional de bens destinados à administração pública',
      'Contratação planejada de 9.000 policiais militares e bombeiros',
      'Contratação planejada de 2.000 policiais civis e 1.000 policiais penais',
      'Valorização salarial das forças de segurança, observados os limites legais e orçamentários',
      'Construção de novos batalhões e delegacias',
      'Aquisição de viaturas, armamentos e equipamentos modernos',
      'Construção do Hospital da Polícia Militar e do Hospital Civil/Penal',
    ],
  },
  {
    slug: 'turismo-seguranca-turistica',
    categoria: 'Turismo e Segurança Turística',
    titulo: 'Turismo e Segurança Turística',
    descricao:
      'Propostas para aumentar a segurança de visitantes, trabalhadores e empresas do turismo potiguar.',
    imagem:
      'https://images.unsplash.com/photo-1494783367193-149034c05e8f?auto=format&fit=crop&w=1600&q=80',
    imagemAlt:
      'Orla turística movimentada com policiamento preventivo e atendimento aos visitantes.',
    resumo:
      'Criação da Polícia Turística, integração da inteligência policial, policiamento preventivo e cadastro qualificado dos trabalhadores do setor.',
    cor: 'from-cyan-50',
    itens: [
      'Criação da Polícia Turística do Rio Grande do Norte',
      'Integração entre inteligência policial e atendimento especializado ao visitante',
      'Policiamento preventivo nas orlas, corredores turísticos e principais polos indutores',
      'Criação do Cadastro Estadual de Trabalhadores do Turismo',
      'Definição de critérios objetivos de habilitação e qualificação profissional',
      'Verificação de antecedentes compatível com a legislação',
      'Ampliação da segurança de visitantes, trabalhadores e empresários',
    ],
  },
  {
    slug: 'tecnologia-energia-recursos-naturais',
    categoria: 'Tecnologia, Energia e Recursos Naturais',
    titulo: 'Tecnologia, Energia e Recursos Naturais',
    descricao:
      'Propostas para transformar a liderança energética do RN em tecnologia, indústria, arrecadação e empregos qualificados.',
    imagem:
      'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1600&q=80',
    imagemAlt:
      'Parque de energia eólica e solar integrado a uma infraestrutura tecnológica moderna.',
    resumo:
      'Atração de data centers e empresas tecnológicas, expansão da energia eólica e solar, fabricação de componentes, hidrogênio verde e aproveitamento responsável das terras raras.',
    cor: 'from-violet-50',
    itens: [
      'Atração de data centers de alta capacidade para o Rio Grande do Norte',
      'Atração de empresas de base tecnológica por meio da oferta competitiva de energia limpa',
      'Ampliação dos investimentos em parques eólicos e solares',
      'Modernização da infraestrutura de transmissão de energia',
      'Atração de indústrias de manufatura e fábricas de componentes eólicos e solares',
      'Desenvolvimento de projetos de hidrogênio verde',
      'Geração de empregos qualificados e ampliação da arrecadação na origem',
      'Pesquisa e desenvolvimento responsável das terras raras existentes no RN',
      'Controle ambiental e agregação local de valor aos recursos naturais',
    ],
  },
  {
    slug: 'agropecuaria-pesca-seguranca-hidrica',
    categoria: 'Agropecuária, Pesca e Segurança Hídrica',
    titulo: 'Agropecuária, Pesca e Segurança Hídrica',
    descricao:
      'Propostas para fortalecer a produção rural, ampliar mercados e garantir infraestrutura hídrica ao interior do Estado.',
    imagem:
      'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1600&q=80',
    imagemAlt:
      'Área agrícola irrigada com produção rural e infraestrutura de distribuição de água.',
    resumo:
      'Fortalecimento da fruticultura e da pesca, abertura de mercados, Projeto da Chapada do Apodi, sistemas adutores e modernização dos perímetros irrigados.',
    cor: 'from-lime-50',
    itens: [
      'Ampliação do apoio à fruticultura irrigada de exportação',
      'Prospecção ativa de novos mercados para os produtos do RN',
      'Assistência técnica, inovação e fortalecimento da logística do Porto de Natal',
      'Ampliação dos investimentos no setor da pesca',
      'Incentivo às demais atividades produtivas do Estado',
      'Celeridade na implantação do Projeto da Chapada do Apodi',
      'Implantação dos Sistemas Adutores do Agreste Potiguar',
      'Expansão e modernização técnica do Distrito Irrigado Baixo-Açu',
      'Modernização dos perímetros irrigados de Cruzeta e Pau dos Ferros',
      'Gestão eficiente da água e apoio aos produtores',
    ],
  },
  {
    slug: 'responsabilidade-fiscal-ambiente-negocios',
    categoria: 'Responsabilidade Fiscal e Ambiente de Negócios',
    titulo: 'Responsabilidade Fiscal e Ambiente de Negócios',
    descricao:
      'Propostas para organizar as contas públicas, melhorar a arrecadação e reduzir a burocracia para quem produz e investe.',
    imagem:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80',
    imagemAlt:
      'Equipe analisando dados financeiros, contratos e indicadores de gestão pública.',
    resumo:
      'Controle de gastos, auditoria de contratos, combate à sonegação, concessões e PPPs, royalties destinados a investimentos e redução do Custo RN.',
    cor: 'from-slate-50',
    itens: [
      'Adequação rigorosa à Lei de Responsabilidade Fiscal',
      'Auditoria em contratos de custeio e serviços continuados',
      'Fiscalização eletrônica, cruzamento de dados e tributação inteligente',
      'Combate à sonegação sem penalizar o contribuinte regular',
      'Concessões e Parcerias Público-Privadas para ativos públicos onerosos',
      'Metas, fiscalização e transparência nos contratos de concessão',
      'Aplicação estratégica dos royalties do petróleo onshore em investimentos estruturantes',
      'Proteção dos recursos de royalties contra o uso em custeio comum',
      'Modernização e simplificação do licenciamento ambiental no IDEMA',
      'Simplificação da abertura de empresas para redução do Custo RN',
    ],
  },
  {
    slug: 'educacao-acao-social-empregabilidade',
    categoria: 'Educação, Ação Social e Empregabilidade',
    titulo: 'Educação, Ação Social e Empregabilidade',
    descricao:
      'Propostas para melhorar a estrutura escolar, a disciplina, a segurança, o ensino técnico e o apoio às famílias potiguares.',
    imagem:
      'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1600&q=80',
    imagemAlt:
      'Estudantes e professores em sala de aula moderna com recursos educacionais.',
    resumo:
      'Escolas cívico-militares, ensino técnico, creches 24 horas, Voucher Educação, meritocracia, segurança escolar, alimentação e transparência curricular.',
    cor: 'from-emerald-50',
    itens: [
      'Construção de novas escolas e reforma das unidades existentes',
      'Modernização das escolas e aquisição de equipamentos de última geração',
      'Expansão das escolas cívico-militares por polo',
      'Prioridade para regiões de alta vulnerabilidade social e violência',
      'Programa Escola Segura com proteção especializada nos acessos das escolas',
      'Reestruturação do ensino médio técnico conforme as vocações regionais',
      'Parcerias com o Sistema S e empresas privadas para formação profissional',
      'Cursos de energia renovável, tecnologia da informação, mecânica agrícola e gestão hídrica',
      'Proposta de acesso à faculdade estadual para alunos com notas de 9 a 10',
      'Creches 24 horas em Natal, Parnamirim e Mossoró',
      'Atendimento multidisciplinar nas creches para crianças de 2 a 6 anos',
      'Programa Voucher Educação para aquisição de vagas em creches e pré-escolas',
      'Valorização salarial dos professores, observados os limites legais e orçamentários',
      'Bônus por resultados no IDEB e na redução da evasão escolar',
      'Alimentação de qualidade para os turnos da manhã, tarde e noite',
      'Neutralidade político-partidária e transparência curricular conforme a BNCC',
    ],
  },
  {
    slug: 'esporte',
    categoria: 'Esporte',
    titulo: 'Esporte e Inclusão',
    descricao:
      'Propostas para ampliar a prática esportiva, apoiar projetos regionais e fortalecer parcerias no Rio Grande do Norte.',
    imagem:
      'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1600&q=80',
    imagemAlt:
      'Atletas praticando diferentes modalidades esportivas em espaço público.',
    resumo:
      'Parcerias com clubes, incentivo a todas as modalidades, interiorização dos projetos esportivos e participação da iniciativa privada.',
    cor: 'from-orange-50',
    itens: [
      'Criação de parcerias com clubes de futebol',
      'Investimento em todas as modalidades esportivas',
      'Incentivo à prática esportiva nas diversas regiões do Estado',
      'Desenvolvimento de projetos esportivos com apoio da iniciativa privada',
      'Ampliação da participação das empresas no incentivo ao esporte',
      'Produção de materiais esportivos destinados à rede pública por meio das oficinas do sistema prisional',
    ],
  },
];

export function getProposalBySlug(slug: string): Proposal | undefined {
  return proposals.find((p) => p.slug === slug);
}
