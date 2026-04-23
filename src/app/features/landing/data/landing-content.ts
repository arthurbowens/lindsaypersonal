import { LandingContent } from '../models/landing-content.model';

export const LANDING_CONTENT: LandingContent = {
  header: {
    brandTitle: 'Lindsay Personal',
    brandSubtitle: 'Treinamento feminino',
    primaryAction: 'Quero começar',
    secondaryAction: 'WhatsApp',
    whatsappLink: 'https://wa.me/5500000000000',
    instagramLink: 'https://instagram.com/lindsaypersonal',
  },
  hero: {
    title: 'Emagreça, defina e ganhe força - sem dieta maluca e sem viver na academia',
    description:
      'Treinos personalizados para mulheres reais que querem resultado de verdade, mesmo com rotina corrida.',
    primaryAction: 'Quero começar agora',
    secondaryAction: 'Falar no WhatsApp',
    highlights: [
      'Acompanhamento próximo',
      'Plano adaptado ao seu ritmo',
      'Resultados visíveis nas primeiras semanas',
    ],
    socialProof: '+500 mulheres já transformaram o corpo com a Lindsay',
  },
  problem: {
    title: 'Se você sente que já tentou de tudo, você não está sozinha',
    intro: 'Se você:',
    painPoints: [
      'Já tentou emagrecer e não conseguiu manter',
      'Começa e para várias vezes',
      'Não vê resultado mesmo treinando',
    ],
    conclusion: 'O problema não é você. É falta de estratégia.',
  },
  about: {
    title: 'Treino feminino com método, não achismo',
    paragraphs: [
      'A Lindsay é personal trainer especializada em transformação corporal feminina.',
      'Aqui você não recebe treino genérico. Você recebe um plano pensado para seu corpo, sua rotina e seu objetivo.',
      'Com acompanhamento real - não abandono.',
    ],
    bulletPoints: [
      'Avaliação completa',
      'Treino personalizado',
      'Ajustes semanais',
      'Suporte direto',
    ],
  },
  pillars: [
    {
      title: 'Emagrecimento inteligente',
      description:
        'Protocolos de treino estruturados para acelerar a queima de gordura sem perder massa magra.',
    },
    {
      title: 'Definição feminina',
      description:
        'Treinos focados em tonificar e desenhar o corpo com harmonia, respeitando seu biotipo.',
    },
    {
      title: 'Força real e funcional',
      description:
        'Construção de força para melhorar postura, energia no dia a dia e autoconfiança.',
    },
  ],
  stats: [
    { value: '+500', label: 'alunas transformadas' },
    { value: '1:1', label: 'acompanhamento individual' },
    { value: '7 dias', label: 'suporte contínuo' },
    { value: '100%', label: 'focado no corpo feminino' },
  ],
  testimonials: [
    {
      name: 'Mariana, 34 anos',
      text: '"Eu não conseguia manter constância. Com a Lindsay, em poucas semanas já vi meu corpo mudar e minha autoestima voltar."',
    },
    {
      name: 'Camila, 29 anos',
      text: '"Treino encaixado na minha rotina corrida. Pela primeira vez tive resultado sem abandonar minha vida."',
    },
    {
      name: 'Juliana, 41 anos',
      text: '"Ganhei força, defini meu corpo e parei de desistir no meio do caminho. Método real para mulher real."',
    },
  ],
  objections: {
    title: 'Não importa em que fase você está',
    subtitle: 'O plano é feito para funcionar na sua realidade.',
    points: [
      'Está começando do zero',
      'Já tentou e desistiu antes',
      'Não tem tempo',
    ],
    conclusion: 'Com estratégia certa, seu resultado acontece.',
  },
  audience: {
    title: 'Para quem é e para quem não é',
    forWho: [
      'Mulheres que querem emagrecer de verdade',
      'Mulheres cansadas de tentar sozinhas',
      'Mulheres que querem constância',
    ],
    notForWho: 'Não é para quem quer resultado sem esforço.',
  },
  cta: {
    title: 'Seu resultado começa com uma decisão',
    subtitle: 'Agende sua avaliação e receba um plano feito para você.',
    primaryAction: 'Agendar minha avaliação',
    secondaryAction: 'Falar no WhatsApp',
  },
};
