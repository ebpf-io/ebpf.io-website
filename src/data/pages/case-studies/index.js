import caseStudiesData from 'data/shared/case-studies/case-studies-list';

const data = {
  pageUrls: {
    en: '/case-studies/',
    'fr-fr': '/fr-fr/case-studies/',
  },
  en: {
    hero: {
      title: 'eBPF Case Studies',
      items: caseStudiesData.en,
    },
  },
  'fr-fr': {
    hero: {
      title: 'Études de cas eBPF',
      items: caseStudiesData['fr-fr'],
    },
  },
};

export default data;
