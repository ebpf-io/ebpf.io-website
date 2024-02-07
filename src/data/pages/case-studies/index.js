import caseStudiesData from 'data/shared/case-studies/case-studies-list';

const data = {
  pageUrls: {
    en: '/case-studies/',
    'fr-fr': '/fr-fr/case-studies/',
    pt: '/pt/case-studies/',
    'pt-br': '/pt-br/case-studies/',
    'it-it': '/it-it/case-studies/',
    'zh-cn': '/zh-cn/case-studies/',
    sw: '/sw/case-studies/',
    'tw-cn': '/tw-cn/case-studies/',
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
  pt: {
    hero: {
      title: 'Estudos de Caso eBPF',
      items: caseStudiesData.pt,
    },
  },
  'pt-br': {
    hero: {
      title: 'Estudos de Caso do eBPF',
      items: caseStudiesData['pt-br'],
    },
  },
  'it-it': {
    hero: {
      title: 'Casi di studio eBPF',
      items: caseStudiesData['it-it'],
    },
  },
  'zh-cn': {
    hero: {
      title: 'eBPF 案例研究',
      items: caseStudiesData['zh-cn'],
    },
  },
  sw: {
    hero: {
      title: 'Uchambuzi wa Kesi za eBPF',
      items: caseStudiesData.sw,
    },
  },
  'tw-cn': {
    hero: {
      title: 'eBPF案例研究',
      items: caseStudiesData['tw-cn'],
    }
  }
};

export default data;
