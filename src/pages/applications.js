import Layout from "../layouts";
import React from "react";
import { TitleWithAnchor } from "../common/TitleWithAnchor";
import { graphql, useStaticQuery } from 'gatsby';

import "../stylesheets/index.scss";
import { FAQ } from "../common/projects/Faq";
import { ProjectCard } from "../common/projects/ProjectCard";
import { Hero } from "../common/projects/Hero";
import SEO from "../common/SEO";

import bccLogo from "../assets/projects-logos/bcc.svg";
import ciliumLogo from "../assets/projects-logos/cilium-with-text.svg";
import falcoLogo from "../assets/projects-logos/falco.svg";
import katranLogo from "../assets/projects-logos/katran.svg";
import ecaptureLogo from "../assets/projects-logos/ecapture.svg";
import pixieLogo from "../assets/projects-logos/pixie.svg";
import hubbleLogo from "../assets/projects-logos/hubble.svg";
import kubectlTraceLogo from "../assets/projects-logos/kubectl_trace.svg";
import traceeLogo from "../assets/projects-logos/tracee.svg";
import bumblebeeLogo from "../assets/projects-logos/bumblebee.svg";
import plyLogo from "../assets/projects-logos/ply.svg";
import kubeArmorLogo from "../assets/projects-logos/kubearmor.svg";
import l3afLogo from "../assets/projects-logos/l3af.svg";
import merbridgeLogo from "../assets/projects-logos/merbridge.svg";
import pyroscopeLogo from "../assets/projects-logos/pyroscope.svg";
import parcaLogo from "../assets/projects-logos/parca.svg";
import keplerLogo from "../assets/projects-logos/kepler.gif";
import majorProjects from "../data/major-projects";
import emergingProjects from "../data/emerging-projects";

const ProjectDescriptions = () => {
  const { tetragonLogo, loxiLBLogo, pwruLogo, wachyLogo, skywalkingLogo, pulsarLogo, deepflowLogo, inspektorGadgetLogo, bpftraceLogo } = useStaticQuery(graphql`
  query {
    tetragonLogo: file(relativePath: {regex: "/projects-logos/tetragon.png/"}) {
      childImageSharp {
        gatsbyImageData(width: 128, quality: 95)
      }
    }
    loxiLBLogo: file(relativePath: {regex: "/projects-logos/loxilb.png/"}) {
      childImageSharp {
        gatsbyImageData(width: 128, quality: 95)
      }
    }
    pwruLogo: file(relativePath: {regex: "/projects-logos/pwru.png/"}) {
      childImageSharp {
        gatsbyImageData(width: 128, quality: 95)
      }
    }
    wachyLogo: file(relativePath: {regex: "/projects-logos/wachy.png/"}) {
      childImageSharp {
        gatsbyImageData(width: 128, quality: 95)
      }
    }
    skywalkingLogo: file(relativePath: {regex: "/projects-logos/skywalking.png/"}) {
      childImageSharp {
        gatsbyImageData(width: 128, quality: 95)
      }
    }
    pulsarLogo: file(relativePath: {regex: "/projects-logos/pulsar.png/"}) {
      childImageSharp {
        gatsbyImageData(width: 128, quality: 95)
      }
    }
    deepflowLogo: file(relativePath: {regex: "/projects-logos/deepflow.png/"}) {
      childImageSharp {
        gatsbyImageData(width: 128, quality: 95)
      }
    }
    inspektorGadgetLogo: file(relativePath: {regex: "/projects-logos/inspektor_gadget.png/"}) {
      childImageSharp {
        gatsbyImageData(width: 128, quality: 95)
      }
    }
    bpftraceLogo: file(relativePath: {regex: "/projects-logos/bpftrace.png/"}) {
      childImageSharp {
        gatsbyImageData(width: 128, quality: 95)
      }
    }
  }
  `)

  const logos = {
    tetragonLogo,
    loxiLBLogo,
    pwruLogo,
    wachyLogo,
    skywalkingLogo,
    pulsarLogo,
    deepflowLogo,
    inspektorGadgetLogo,
    bpftraceLogo,
    bccLogo,
    l3afLogo,
    bpftraceLogo,
    ciliumLogo,
    falcoLogo,
    hubbleLogo,
    keplerLogo,
    ecaptureLogo,
    kubectlTraceLogo,
    traceeLogo,
    merbridgeLogo,
    plyLogo,
    parcaLogo,
    katranLogo,
    kubeArmorLogo,
    parcaLogo,
    pyroscopeLogo,
    pixieLogo,
    bumblebeeLogo,
  }

  return (
  <div className="project-descriptions">
    <TitleWithAnchor
      className="projects-wrapper-title"
      headerClassName="projects-title"
    >
      Major Applications
    </TitleWithAnchor>
    <ul className="projects-list">
      {majorProjects.map((item) => {
        const logo = logos[item.logoName];
        return (
        <ProjectCard {...item} logo={logo} key={item.name} />
      )})}
    </ul>

    <TitleWithAnchor
      className="projects-wrapper-title"
      headerClassName="projects-title"
    >
      Emerging Applications
    </TitleWithAnchor>
    <ul className="projects-list">
      {emergingProjects.map((item, index) => {
        const logo = logos[item.logoName];
        return (
        <ProjectCard {...item} logo={logo} key={index} />
      )})}
    </ul>
  </div>
)};

const Page = () => (
  <Layout>
    <Hero title="Applications" />
    <div className="page-projects">
      <div className="project-content-wrapper">
        <ProjectDescriptions />
        <FAQ />
      </div>
    </div>
  </Layout>
);

export default Page;

export const Head = ({ location: { pathname } }) => {
  const pageMetadata = {
    title: "eBPF Applications Landscape",
    description: "A directory of eBPF-based open source applications",
    slug: pathname,
    keywords: "ebpf, bpf, landscape, directory, open source",
  };
  return <SEO {...pageMetadata} />;
};
