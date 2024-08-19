import auxiliaryLibraries from 'data/pages/infrastructure/auxiliary-libraries';
import emergingInfrastructure from 'data/pages/infrastructure/emerging';
import majorInfrastructure from 'data/pages/infrastructure/major';

const data = {
  pageUrls: {
    en: '/infrastructure/',
    'fr-fr': '/fr-fr/infrastructure/',
    pt: '/pt/infrastructure/',
    'pt-br': '/pt-br/infrastructure/',
    'it-it': '/it-it/infrastructure/',
    es: '/es/infrastructure/',
    'zh-hans': '/zh-hans/infrastructure/',
    sw: '/sw/infrastructure/',
    'tw-cn': '/tw-cn/infrastructure/',
    'zh-hant': '/zh-hant/infrastructure/',
    'ko-kr': '/ko-kr/infrastructure/',
  },
  en: {
    title: 'Infrastructure',
    hero: {
      items: [
        {
          text: 'Applications',
          to: '/applications/',
        },
        {
          text: 'Infrastructure',
          to: '/infrastructure/',
        },
      ],
    },
    majorInfrastructureProps: {
      titleTag: 'h2',
      title: 'Major Infrastructure',
      items: majorInfrastructure,
    },
    emergingInfrastructureProps: {
      title: 'Emerging',
      items: emergingInfrastructure,
    },
    auxiliaryLibrariesProps: {
      title: 'eBPF Auxiliary Libraries',
      items: auxiliaryLibraries,
    },
  },
  'fr-fr': {
    title: 'Infrastructure',
    hero: {
      items: [
        {
          text: 'Applications',
          to: '/fr-fr/applications/',
        },
        {
          text: 'Infrastructure',
          to: '/fr-fr/infrastructure/',
        },
      ],
    },
    majorInfrastructureProps: {
      titleTag: 'h2',
      title: 'Infrastructures majeures',
      items: majorInfrastructure,
    },
    emergingInfrastructureProps: {
      title: 'Émergentes',
      items: emergingInfrastructure,
    },
    auxiliaryLibrariesProps: {
      title: 'Bibliothèques eBPF auxiliaires',
      items: auxiliaryLibraries,
    },
  },
  pt: {
    title: 'A infraestrutura',
    hero: {
      items: [
        {
          text: 'Aplicação',
          to: '/pt/applications/',
        },
        {
          text: 'A infraestrutura',
          to: '/pt/infrastructure/',
        },
      ],
    },
    majorInfrastructureProps: {
      titleTag: 'h2',
      title: 'Infraestrutura principais',
      items: majorInfrastructure,
    },
    emergingInfrastructureProps: {
      title: 'Emergindo',
      items: emergingInfrastructure,
    },
    auxiliaryLibrariesProps: {
      title: 'Bibliotecas Auxiliares eBPF',
      items: auxiliaryLibraries,
    },
  },
  'pt-br': {
    title: 'Infraestrutura',
    hero: {
      items: [
        {
          text: 'Aplicações',
          to: '/pt-br/applications/',
        },
        {
          text: 'Infraestrutura',
          to: '/pt-br/infrastructure/',
        },
      ],
    },
    majorInfrastructureProps: {
      titleTag: 'h2',
      title: 'Infraestrutura Principal',
      items: majorInfrastructure,
    },
    emergingInfrastructureProps: {
      title: 'Emergente',
      items: emergingInfrastructure,
    },
    auxiliaryLibrariesProps: {
      title: 'Bibliotecas Auxiliares do eBPF',
      items: auxiliaryLibraries,
    },
  },
  'it-it': {
    title: 'Infrastruttura',
    hero: {
      items: [
        {
          text: 'Applicazioni',
          to: '/it-it/applications/',
        },
        {
          text: 'Infrastruttura',
          to: '/it-it/infrastructure/',
        },
      ],
    },
    majorInfrastructureProps: {
      titleTag: 'h2',
      title: 'Infrastruttura Principale',
      items: majorInfrastructure,
    },
    emergingInfrastructureProps: {
      title: 'Emergente',
      items: emergingInfrastructure,
    },
    auxiliaryLibrariesProps: {
      title: 'Librerie eBPF ausiliarie',
      items: auxiliaryLibraries,
    },
  },
  es: {
    title: 'Infraestructura',
    hero: {
      items: [
        {
          text: 'Aplicaciones',
          to: '/es/applications/',
        },
        {
          text: 'Infraestructura',
          to: '/es/infrastructure/',
        },
      ],
    },
    majorInfrastructureProps: {
      titleTag: 'h2',
      title: 'Infraestructura Mayor',
      items: majorInfrastructure,
    },
    emergingInfrastructureProps: {
      title: 'Emergente',
      items: emergingInfrastructure,
    },
    auxiliaryLibrariesProps: {
      title: 'Bibliotecas auxiliares eBPF',
      items: auxiliaryLibraries,
    },
  },
  'zh-hans': {
    title: '基础设施',
    hero: {
      items: [
        {
          text: '应用项目',
          to: '/zh-hans/applications/',
        },
        {
          text: '基础设施',
          to: '/zh-hans/infrastructure/',
        },
      ],
    },
    majorInfrastructureProps: {
      titleTag: 'h2',
      title: '主要基础设施',
      items: majorInfrastructure,
    },
    emergingInfrastructureProps: {
      title: '新兴的基础设施',
      items: emergingInfrastructure,
    },
    auxiliaryLibrariesProps: {
      title: 'eBPF 辅助库',
      items: auxiliaryLibraries,
    },
  },
  sw: {
    title: 'Miundombinu',
    hero: {
      items: [
        {
          text: 'Programu',
          to: '/sw/applications/',
        },
        {
          text: 'Miundombinu',
          to: '/sw/infrastructure/',
        },
      ],
    },
    majorInfrastructureProps: {
      titleTag: 'h2',
      title: 'Miundombinu Mikubwa',
      items: majorInfrastructure,
    },
    emergingInfrastructureProps: {
      title: 'Inayojitokeza',
      items: emergingInfrastructure,
    },
    auxiliaryLibrariesProps: {
      title: 'Maktaba za eBPF za Kubadiliana',
      items: auxiliaryLibraries,
    },
  },
  'zh-hant': {
    title: '基礎設施',
    hero: {
      items: [
        {
          text: '應用專案',
          to: '/zh-hant/applications/',
        },
        {
          text: '基礎設施',
          to: '/zh-hant/infrastructure/',
        },
      ],
    },
    majorInfrastructureProps: {
      titleTag: 'h2',
      title: '主要基礎設施',
      items: majorInfrastructure,
    },
    emergingInfrastructureProps: {
      title: '新興基礎設施',
      items: emergingInfrastructure,
    },
    auxiliaryLibrariesProps: {
      title: 'eBPF 輔助函式庫',
      items: auxiliaryLibraries,
    },
  },
  'ko-kr': {
    title: '인프라',
    hero: {
      items: [
        {
          text: '애플리케이션',
          to: '/ko-kr/applications/',
        },
        {
          text: '인프라',
          to: '/ko-kr/infrastructure/',
        },
      ],
    },
    majorInfrastructureProps: {
      titleTag: 'h2',
      title: '주요 인프라',
      items: majorInfrastructure,
    },
    emergingInfrastructureProps: {
      title: '새로운',
      items: emergingInfrastructure,
    },
    auxiliaryLibrariesProps: {
      title: 'eBPF 보조 라이브러리',
      items: auxiliaryLibraries,
    },
  },
};

export default data;
