/* eslint-disable react/prop-types */
import React from 'react';

import CaseStudies from 'components/pages/home/case-studies';
import Features from 'components/pages/home/features';
import Hero from 'components/pages/home/hero';
import Testimonials from 'components/pages/home/testimonials';
import WhyEbpf from 'components/pages/home/why-ebpf';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';
import VideoGallery from 'components/shared/video-gallery';
import videoItems from 'data/home-page/video-data';

import { languages } from '../../../config/languages';

const data = {
  hero: {
    title:
      'Programmation dynamique du noyau pour un trafic réseau, une observabilité, une trace et une sécurité efficacesc',
    blackButtonTitle: 'Project Landscape',
    blackButtonUrl: '/fr-fr/applications',
    yellowButtonTitle: 'What is eBPF',
    yellowButtonUrl: '/fr-fr/what-is-ebpf',
    altImage: 'eBPF diagram',
    items: [
      'Vérification des programmes pour une exécution sécurisée',
      'Branchement n’importe où dans le noyau pour une modification des fonctionnalités',
      'Compilateur JIT pour une vitesse d’exécution quasi native',
      'Accès au fonctions bas niveau du système',
    ],
  },
  caseStudies: {
    title: 'Des entreprises de tous type d’industries utilisent eBPF en production',
    linkText: 'Plus d’études de cas',
    linkUrl: '/fr-fr/case-studies/',
  },
  videoGallery: {
    title: 'Présentations de la communauté eBPF',
    items: videoItems,
  },
};

const HomePage = () => (
  <Layout lang={languages['fr-fr'].code}>
    <Hero {...data.hero} />
    <CaseStudies {...data.caseStudies} />
    <WhyEbpf />
    <Testimonials />
    <Features />
    <VideoGallery {...data.videoGallery} />
  </Layout>
);

export default HomePage;

export const Head = ({ location: { pathname } }) => <SEO pathname={pathname} />;
