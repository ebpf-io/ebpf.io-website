import Helmet from "react-helmet";
import React from "react";
import { Link } from 'gatsby'
const pageMetaTitle = 'eBPF Summit 2020 - Call For Proposals'
const pageMetaDescription = 'We’re excited to announce that the call for proposals is now open for the inaugural eBPF Summit, a virtual event, to be held October 28-29, 2020'
const speakers = [
  {
    avatarSrc: require("../assets/summit-2020/alexey-starovoitov.png"),
    name: "Alexei Starovoitov",
    description: "Co-maintainer eBPF, Facebook"
  },
  {
    avatarSrc: require("../assets/summit-2020/brendan-gregg.png"),
    name: "Brendan Gregg",
    description: "Author of “BPF Performance Tools“, Lead Performance Engineer, Netflix"
  },
  {
    avatarSrc: require("../assets/summit-2020/daniel-borkmann.png"),
    name: "Daniel Borkmann",
    description: "Co-maintainer eBPF, Isovalent"
  },
  {
    avatarSrc: require("../assets/summit-2020/david-miller.png"),
    name: "David Miller",
    description: "Linux Kernel Networking Maintainer, Red Hat"
  },
  {
    avatarSrc: require("../assets/summit-2020/kris-nova.png"),
    name: "Kris Nova",
    description: "Chief Open Source Advocate, Sysdig"
  },
  {
    avatarSrc: require("../assets/summit-2020/kp-singh.png"),
    name: "KP Singh",
    description: "Kernel Runtime Security, Google"
  },
  {
    avatarSrc: require("../assets/summit-2020/laurent-bernaille.png"),
    name: "Laurent Bernaille",
    description: "Staff Engineer, Datadog"
  },
  {
    avatarSrc: require("../assets/summit-2020/liz-rice.png"),
    name: "Liz Rice",
    description: "VP, Open Source Engineering, Aqua"
  },
  {
    avatarSrc: require("../assets/summit-2020/tabitha-sable.png"),
    name: "Tabitha Sable",
    description: "Systems Security Engineer, Datadog"
  },
  {
    avatarSrc: require("../assets/summit-2020/tomas-graf.png"),
    name: "Thomas Graf",
    description: "Co-founder of the Cilium Project, Isovalent"
  },
  {
    avatarSrc: require("../assets/summit-2020/zang-li.png"),
    name: "Zang Li",
    description: "Cilium Core Team Maintainer, Google"
  },
]

const Info = () => (
  <div className="summit-info">
    <Link to="/" className="link">
      <img alt="eBPF logo" className="logo" src={require("../assets/summit-2020/eBPF-logo.png")} />
    </Link>
  </div>
);

const Hero = () => (
  <header
    className="summit-hero"
    style={{'--background-image': `URL("${require("../assets/summit-2020/hero-background.svg")}")`}}
  >
    <div className="wrapper">
      <h1 className="title">
        <img alt="eBPF" className="logo" src={require("../assets/summit-2020/eBPF-logo-white.svg")} />
        {' '}
        Summit
      </h1>

      <p className="meta">
        October 28-29th, 2020
        <hr className="divider" />
        A Free Virtual Event
      </p>

      <p className="description">
        Registration is now open for the inaugural eBPF Summit, a virtual event, targeted at DevOps, platform architects and developers.
      </p>

      <div className="buttons">
        <a
          className="button type--register"
          href="https://docs.google.com/forms/d/e/1FAIpQLSeWBrtQzSDxgFb2yMoa2tePapMibKeGaHLHDd70xNJzzVMX5g/viewform?embedded=true"
        >
          Register
        </a>

        <a
          className="button type--join"
          href="https://docs.google.com/forms/d/e/1FAIpQLSeNUo-TrAVRAjMdjB62A48CtHarC1AexWZpTQskvTyNOoSqaw/viewform?embedded=true"
        >
          Join eBPF Summit Slack
        </a>
      </div>
    </div>
  </header>
);

const About = () => (
  <div className="summit-about">
    <div className="wrapper">
      <h2 className="title">About the eBPF Summit</h2>
      <p className="description">eBPF is quickly becoming one of the most talked about technologies in our industry - enabling a new generation of networking, tracing, observability and security infrastructure. The eBPF Summit is targeted at users and potential users of this groundbreaking technology - both those looking at leveraging eBPF directly or via one of the projects leveraging eBPF (e.g. bpftrace, Cilium, Falco etc.).</p>
    </div>
  </div>
);

const SpeakerCard = ({ avatarSrc, name, description }) => (
  <div className="summit-speaker-card">
    <div className="avatar">
      <img alt={name} className="image" src={avatarSrc} />
    </div>

    <div className="section">
      <h3 className="title">{name}</h3>
      <p className="description">{description}</p>
    </div>
  </div>
);

const Keynotes = () => (
  <div className="summit-keynotes">
    <div className="wrapper">
      <h2 className="title">Keynotes & Abstracts</h2>

      <div className="list">
        <div className="wrapper">
          {speakers.map(({ avatarSrc, name, description }) => <SpeakerCard
            avatarSrc={avatarSrc}
            name={name}
            description={description}
          />)}
        </div>
      </div>
    </div>
  </div>
);

const Agenda = () => (
  <div
    className="summit-agenda"
    style={{'--background-image': `URL("${require("../assets/summit-2020/agenda-background.svg")}")`}}
  >
    <div className="wrapper">
      <h2 className="title">Agenda</h2>

      <div className="list">
        <section className="section">
          <h3 className="title">October 28 2020, 9am-12pm PDT / 4pm-7pm GMT</h3>

          <div className="list">
            <dl className="row">
              <dt className="time">9am</dt>
              <dd className="description">Lorem ipsum dolor sit amet</dd>
            </dl>

            <dl className="row">
              <dt className="time">10am</dt>
              <dd className="description">consectetur adipiscing elit, sed do eiusmod tempor</dd>
            </dl>

            <dl className="row">
              <dt className="time">10:30am</dt>
              <dd className="description">Lorem ipsum dolor sit amet Sed Do Tempor</dd>
            </dl>

            <dl className="row">
              <dt className="time">11am</dt>
              <dd className="description">Session consectetur adipiscing elit, sed do eiusmod tempor</dd>
            </dl>

            <dl className="row">
              <dt className="time">11:30am</dt>
              <dd className="description">Lorem consectetur adipiscing elit, sed do eiusmod</dd>
            </dl>
          </div>
        </section>

        <section className="section">
          <h3 className="title">October 29 2020, 9am-12pm PDT / 4pm-7pm GMT</h3>

          <div className="list">
            <dl className="row">
              <dt className="time">9am</dt>
              <dd className="description">Lorem ipsum dolor sit amet</dd>
            </dl>

            <dl className="row">
              <dt className="time">10am</dt>
              <dd className="description">consectetur adipiscing elit, sed do eiusmod tempor</dd>
            </dl>

            <dl className="row">
              <dt className="time">10:30am</dt>
              <dd className="description">Lorem ipsum dolor sit amet Sed Do Tempor</dd>
            </dl>

            <dl className="row">
              <dt className="time">11:30am</dt>
              <dd className="description">Lorem consectetur adipiscing elit, sed do eiusmod</dd>
            </dl>
          </div>
        </section>
      </div>
    </div>
  </div>
);

const Footer = () => (
  <footer className="summit-footer">
    <div className="wrapper">
      <Link to="/" className="link">
        <img alt="eBPF logo" className="logo" src={require("../assets/summit-2020/eBPF-logo-gray.svg")} />
      </Link>

      <p className="copyright">Copyright ©2020 eBPF</p>

      <div className="share-list">
        <a className="link" href="https://twitter.com/ciliumproject">
          <img alt="eBPF logo" className="icon" src={require("../assets/summit-2020/icon-twitter.svg")} />
        </a>

        <a className="link" href="https://cilium.herokuapp.com">
          <img alt="eBPF logo" className="icon" src={require("../assets/summit-2020/icon-slack.svg")} />
        </a>
      </div>
    </div>
  </footer>
);

const CallForPapers = () => (
  <div className="summit-page-wrapper">
    <Helmet
      title={pageMetaTitle}
      meta={[
        {name: "name", content: "eBPF"},
        {name: "keywords", content: "ebpf, bpf, summit, conference, event"},
        {property: "og:type", name: "type", content: "website"},
        {property: "og:url", name: "url", content: "https://ebpf.io/ebpf-summit-2020-cfp/"},
        {property: "og:title", name: "title", content: pageMetaTitle},
        {property: "og:description", name: "description", content: pageMetaDescription},
        {property: "og:image", name: "image", content: 'https://ebpf.io' + require("../assets/summit_logo.png")},
        {name: "twitter:card", content: "summary_large_image"},
        {name: "twitter:url", content: "https://ebpf.io/ebpf-summit-2020-cfp/"},
        {name: "twitter:title", content: pageMetaTitle},
        {name: "twitter:description", content: pageMetaDescription},
        {name: "twitter:image", content: 'https://ebpf.io' + require("../assets/summit_logo.png")},
      ]}
    />
    <Info />
    <Hero />
    <About />
    <Keynotes />
    <Agenda />
    <Footer />
  </div>
);

export default CallForPapers;
