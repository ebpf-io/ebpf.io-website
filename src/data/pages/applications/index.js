import emergingApplications from 'data/pages/applications/emerging';
import majorApplications from 'data/pages/applications/major';

const data = {
  pageUrls: {
    en: '/applications/',
    'fr-fr': '/fr-fr/applications/',
    pt: '/pt/applications/',
    'pt-br': '/pt-br/applications/',
    'it-it': '/it-it/applications/',
    'zh-cn': '/zh-cn/applications/',
    sw: '/sw/applications/',
    'tw-cn': '/tw-cn/applications/',
  },
  en: {
    title: 'Applications',
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
    majorApplicationsProps: {
      titleTag: 'h2',
      title: 'Major Applications',
      items: majorApplications,
    },
    emergingApplicationsProps: {
      title: 'Emerging',
      items: emergingApplications,
    },
  },
  'fr-fr': {
    title: 'Applications',
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
    majorApplicationsProps: {
      titleTag: 'h2',
      title: 'Applications majeures',
      items: majorApplications,
    },
    emergingApplicationsProps: {
      title: 'Émergentes',
      items: emergingApplications,
    },
  },
  pt: {
    title: 'Aplicação',
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
    majorApplicationsProps: {
      titleTag: 'h2',
      title: 'Principais aplicações',
      items: majorApplications,
    },
    emergingApplicationsProps: {
      title: 'Emergindo',
      items: emergingApplications,
    },
  },
  'pt-br': {
    title: 'Aplicações',
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
    majorApplicationsProps: {
      titleTag: 'h2',
      title: 'Aplicações Principais',
      items: majorApplications,
    },
    emergingApplicationsProps: {
      title: 'Emergentes',
      items: emergingApplications,
    },
  },
  'it-it': {
    title: 'Applicazioni',
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
    majorApplicationsProps: {
      titleTag: 'h2',
      title: 'Applicazioni Principali',
      items: majorApplications,
    },
    emergingApplicationsProps: {
      title: 'Emergenti',
      items: emergingApplications,
    },
  },
  'zh-cn': {
    title: '应用项目',
    hero: {
      items: [
        {
          text: '应用项目',
          to: '/zh-cn/applications/',
        },
        {
          text: '基础设施',
          to: '/zh-cn/infrastructure/',
        },
      ],
    },
    majorApplicationsProps: {
      titleTag: 'h2',
      title: '主要项目',
      items: majorApplications,
    },
    emergingApplicationsProps: {
      title: '新兴项目',
      items: emergingApplications,
    },
  },
  sw: {
    title: 'Programu',
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
    majorApplicationsProps: {
      titleTag: 'h2',
      title: 'Matumizi Makubwa',
      items: majorApplications,
    },
    emergingApplicationsProps: {
      title: 'Inayojitokeza',
      items: emergingApplications,
    },
  },
  'tw-cn': {
    title: '應用項目',
    hero: {
      items: [
        {
          text: '應用項目',
          to: '/tw-cn/applications/',
        },
        {
          text: '基礎設施',
          to: '/tw-cn/infrastructure/',
        },
      ],
    },
    majorApplicationsProps: {
      titleTag: 'h2',
      title: '主要項目',
      items: majorApplications,
    },
    emergingApplicationsProps: {
      title: '新興項目',
      items: emergingApplications,
    },
  },
};

export default data;
