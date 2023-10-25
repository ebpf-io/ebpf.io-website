import auxiliaryLibraries from 'data/pages/infrastructure/auxiliary-libraries';
import emergingInfrastructure from 'data/pages/infrastructure/emerging';
import majorInfrastructure from 'data/pages/infrastructure/major';

const data = {
  pageUrls: {
    en: '/infrastructure/',
    'fr-fr': '/fr-fr/infrastructure/',
    'pt-br': '/pt-br/infrastructure/',
    'it-it': '/it-it/infrastructure/',
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
          text: 'Applications',
          to: '/it-it/applications/',
        },
        {
          text: 'Infrastructure',
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
};

export default data;
