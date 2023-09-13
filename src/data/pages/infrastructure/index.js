import auxiliaryLibraries from 'data/pages/infrastructure/auxiliary-libraries';
import emergingInfrastructure from 'data/pages/infrastructure/emerging';
import majorInfrastructure from 'data/pages/infrastructure/major';

const data = {
  pageUrls: {
    en: '/infrastructure/',
    'fr-fr': '/fr-fr/infrastructure/',
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
};

export default data;
