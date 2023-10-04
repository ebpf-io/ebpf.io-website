import emergingApplications from 'data/pages/applications/emerging';
import majorApplications from 'data/pages/applications/major';

const data = {
  pageUrls: {
    en: '/applications/',
    'fr-fr': '/fr-fr/applications/',
    pt: '/pt/applications/',
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
    title: 'Aplicações',
    hero: {
      items: [
        {
          text: 'Aplicações',
          to: '/pt/applications/',
        },
        {
          text: 'Infraestrutura',
          to: '/pt/infrastructure/',
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
};

export default data;
