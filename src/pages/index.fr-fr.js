import React from "react";
import Layout from "../layouts";
import { graphql, Link } from "gatsby";
import BlogLatest from "../common/homepage/BlogLatest";
import BlogRoll from "../common/homepage/BlogRoll";
import HelmetBlock from "../common/homepage/Helmet";
import MainTitle from "../common/homepage/MainTitle";
import Section from "../common/homepage/Section";
import Videos from "../common/homepage/Videos";
import "../stylesheets/index.scss";

import security from '../assets/intro_security.png';
import networking from '../assets/intro_networking.png'
import tracing from '../assets/intro_tracing.png';
import observability from '../assets/intro_observability.png';
import overview from '../assets/overview.png';

const tracingText = `
La possibilité d'attacher des programmes eBPF sur des « trace points » et des
« probe points », que ce soit dans le noyau ou dans les applications
utilisateurs, apporte une dimension nouvelle en termes de visibilité. Les
deux vues produites par l'introspection du noyau, d'une part, et du
comportement des applications en cours, d'autre part, peuvent être combinées
pour obtenir une perspective unique et déterminante sur le système, et pour
résoudre les problèmes de performance. Des structures de données élaborées
permettent de collecter des indicateurs statistiques et d'extraire
l'information utile de manière efficace, sans passer par un export constant
d'échantillons de données comme le font les systèmes traditionnels.
`;

const securityText = `
eBPF permet d'observer et de comprendre tous les appels système, et de se
placer au niveau des paquets et des sockets pour obtenir une vision de toutes
les opérations réseau. La combinaison de ces éléments forme une fondation sans
précédent pour sécuriser les systèmes d'information. Alors même que le filtrage
des appels système, la régulation des flux réseaux, et le suivi du contexte
d'exécution des processus sont typiquement gérés par des solutions distinctes,
eBPF offre à la fois vision et contrôle sur tous les composants, ouvrant ainsi
la voie à un système de sécurisation qui porte sur un domaine plus large, et
propose un contrôle plus poussé.
`;

const networkingText = `
La programmabilité et la performance d'eBPF en font une solution idéale pour le
traitement de paquets pour tous types d'applications réseau. Programmer avec
eBPF permet d'analyser et d'implémenter de nouveaux protocoles, d'appliquer une
logique de routage des paquets pour répondre à des besoins en évolution
constante, sans jamais quitter le contexte du noyau Linux. Le compilateur JIT
(« Just-In-Time », compilation à la volée) permet d'atteindre, à l'exécution
des programmes, des performances similaires à celles du code compilé nativement
dans le noyau.
`;

const monitoringText = `
Au lieu de se baser sur des jauges et des compteurs statiques exposés par le
système d'exploitation, eBPF collecte et agrège dans le noyau des métriques
personnalisées, et rend possible la génération d'observations basées sur un
large éventail de sources disponibles. Seules les données utiles sont relevées,
et les représentations telles que les histogrammes sont générées à la source de
l'évènement plutôt qu'à la réception d'un flot d'échantillons exportés du
noyau. eBPF offre ainsi une visibilité du système avec une portée accrue, tout
en réduisant significativement le cout associé à la collecte de données.
`;

const Buttons = () => (
  <h1 className="main-buttons">
    <Link to="/what-is-ebpf" className="main-button">
      Comprendre eBPF
    </Link>
    <Link to="/projects" className="main-button">
      Projets
    </Link>
  </h1>
);

const Intro = () => (
  <div className="intro">
    <p>
      Le noyau Linux a toujours été l'endroit idéal pour implémenter les aspects
      inspection/supervision, réseau, et sécurité du système. Malheureusement,
      la nécessité de changer le code du noyau ou de charger des modules rend la
      tâche contraignante, et revient souvent à empiler les couches
      d'abstraction. eBPF est une technologie révolutionnaire permettant
      d'exécuter des programmes au sein du noyau Linux, dans un environnement
      confiné, sans changer le code source du noyau ni charger de modules.
    </p>
    <p>
      Grâce à cette capacité à programmer le noyau, les composants logiciels
      peuvent s'appuyer sur le système existant. Ils viennent le perfectionner
      et l'enrichir en fonctionnalités, en évitant de rajouter des couches
      d'abstraction, mais sans compromettre l'efficacité ou la sureté du
      système.
    </p>
    <img src={overview} />
    <p>
      eBPF a conduit au développement d'une nouvelle génération d'applications,
      capables de reprogrammer le noyau Linux, et même de mettre en œuvre une
      logique commune à différents sous-systèmes du noyau, jusqu'ici décorrélés
      les uns des autres.
    </p>
  </div>
);

const Sections = () => (
  <div className="main-sections" style={{ marginTop: "30px" }}>
    <div className="main-sections-left">
      <Section
        title="Sécurité"
        icon={security}
        text={securityText}
      />
      <Section
        title="Réseau"
        icon={networking}
        text={networkingText}
      />
    </div>
    <div className="main-sections-right">
      <Section
        title="Traçage et profilage"
        icon={tracing}
        text={tracingText}
      />
      <Section
        title="Observabilité et supervision"
        icon={observability}
        text={monitoringText}
      />
    </div>
  </div>
);

const Outro = () => (
  <div className="intro">
    <p>Pour en apprendre plus sur eBPF et ses applications:</p>
    <table width="100%">
      <tbody>
        <tr>
          <td>
            <ul>
              <li>
                <a href="/what-is-ebpf">Comprendre eBPF</a>
              </li>
              <li>
                <a href="/applications">Liste de projets basés sur eBPF</a>
              </li>
              <li>
                <a href="https://www.ebpf.top">Plonger la tête la première dans eBPF (Chinois)</a>
              </li>
            </ul>
          </td>
          <td>
            <ul>
              <li>
                <a href="/slack">Rejoindre la communauté #ebpf sur Slack</a>
              </li>
              <li>
                <a href="/contribute">Comment contribuer</a>
              </li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

const IndexPage = ({ data, location: { pathname } }) => {
  return (
    <Layout path={pathname}>
      <div className="page-wrapper page-index">
        <HelmetBlock />
        <MainTitle />
        <Buttons />
        <Intro />
        <Sections />
        <Videos title="Découvrir eBPF en vidéo" />
        <BlogLatest
          title="Les derniers articles du blog"
          posts={data.allMarkdownRemark.edges}
        />
        <BlogRoll title="Sélection d'articles de blogs par la communauté eBPF" />
        <Outro />
      </div>
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query FRIndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 2
    ) {
      edges {
        node {
          html
          id
          excerpt
          frontmatter {
            categories
            date
            path
            title
            tags
          }
        }
      }
    }
  }
`;
