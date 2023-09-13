import emergingApplications from 'data/pages/applications/emerging';
import majorApplications from 'data/pages/applications/major';

const data = {
  pageUrls: {
    en: '/applications/',
    'fr-fr': '/fr-fr/applications/',
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
      title: 'Major Applications',
      items: majorApplications,
    },
    emergingApplicationsProps: {
      title: 'Emerging',
      items: emergingApplications,
    },
  },
};

export default data;
