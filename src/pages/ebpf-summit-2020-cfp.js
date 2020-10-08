import Helmet from "react-helmet";
import Layout from "../layouts";
import React from "react";
import { Link } from 'gatsby'
const pageMetaTitle = 'eBPF Summit 2020 - Call For Proposals'
const pageMetaDescription = 'We’re excited to announce that the call for proposals is now open for the inaugural eBPF Summit, a virtual event, to be held October 28-29, 2020'
const speakers = [
  {
    avatarSrc: require("../assets/summit-2020/alexey-starovoitov.png"),
    name: "Alexei Starovoitov",
    descriptions: [
      "Co-maintainer eBPF,",
      "Facebook",
    ]
  },
  {
    avatarSrc: require("../assets/summit-2020/brendan-gregg.png"),
    name: "Brendan Gregg",
    descriptions: [
      "Author of “BPF Performance Tools“,",
      "Lead Performance Engineer,",
      "Netflix"
    ]
  },
  {
    avatarSrc: require("../assets/summit-2020/daniel-borkmann.png"),
    name: "Daniel Borkmann",
    descriptions: [
      "Co-maintainer eBPF,",
      "Isovalent"
    ]
  },
  {
    avatarSrc: require("../assets/summit-2020/david-miller.png"),
    name: "David Miller",
    descriptions: [
      "Linux Kernel Networking Maintainer,",
      "Red Hat"
      ]
  },
  {
    avatarSrc: require("../assets/summit-2020/kris-nova.png"),
    name: "Kris Nova",
    descriptions: [
      "Chief Open Source Advocate,",
      "Sysdig"
    ]
  },
  {
    avatarSrc: require("../assets/summit-2020/kp-singh.png"),
    name: "KP Singh",
    descriptions: [
      "Kernel Runtime Security,",
      "Google"
    ]
  },
  {
    avatarSrc: require("../assets/summit-2020/laurent-bernaille.png"),
    name: "Laurent Bernaille",
    descriptions: [
      "Staff Engineer,",
      "Datadog"
    ]
  },
  {
    avatarSrc: require("../assets/summit-2020/liz-rice.png"),
    name: "Liz Rice",
    descriptions: [
      "VP, Open Source Engineering,",
      "Aqua"
    ]
  },
  {
    avatarSrc: require("../assets/summit-2020/tabitha-sable.png"),
    name: "Tabitha Sable",
    descriptions: [
      "Systems Security Engineer,",
      "Datadog"
    ]
  },
  {
    avatarSrc: require("../assets/summit-2020/tomas-graf.png"),
    name: "Thomas Graf",
    descriptions: [
      "Co-founder of the Cilium Project,",
      "Isovalent"
    ]
  },
  {
    avatarSrc: require("../assets/summit-2020/zang-li.png"),
    name: "Zang Li",
    descriptions: [
      "Cilium Core Team Maintainer,",
      "Google"
    ]
  },
]

const HeaderDesktop = () => (
  <div className="header desktop summit-header">
    <Link to="/" className="headerLogoLink">
      <img className="summit-header-logo" src={require("../assets/logo.png")} />
    </Link>
    <nav className="headerNav summit-header-nav">
      <Link to="/what-is-ebpf">What is eBPF?</Link>
      <Link to="/projects">Projects</Link>
      <a href="https://cilium.herokuapp.com/">Slack</a>
      <Link to="/contribute">Contribute</Link>
      <a className="summit-link" href="https://www.cilium.io">
        Cilium.io
      </a>
      <a
        className="summit-button"
        href="https://docs.google.com/forms/d/e/1FAIpQLSeWBrtQzSDxgFb2yMoa2tePapMibKeGaHLHDd70xNJzzVMX5g/viewform?embedded=true"
      >
        Register
      </a>
    </nav>
  </div>
);

const Hero = () => (
  <div className="summit-hero" style={{
    background: `linear-gradient(89.77deg, #0E1C3E 0.87%, rgba(13, 16, 43, 0.68) 100.48%), center / cover no-repeat url(${require("../assets/summit-2020/hero-bg.jpg")}`,
  }}>
    <div className="summit-hero-wrapper">
      <p className="summit-date">
        <span>October  28-29th, 2020</span>
        <span className="summit-date-divider">|</span>
        <span>A Free Virtual Event</span>
      </p>
      <h1>eBPF Summit</h1>
      <p className="summit-call-for-proposals">Call For Proposals</p>
      <div className="summit-buttons">
        <a
          className="summit-button summit-guest-button"
          href="https://docs.google.com/forms/d/e/1FAIpQLSeWBrtQzSDxgFb2yMoa2tePapMibKeGaHLHDd70xNJzzVMX5g/viewform?embedded=true"
        >
          Register
        </a>
        <a
          className="summit-button"
          href="https://docs.google.com/forms/d/e/1FAIpQLSeNUo-TrAVRAjMdjB62A48CtHarC1AexWZpTQskvTyNOoSqaw/viewform?embedded=true"
        >
          Submit Talk Proposal
        </a>
      </div>
      <p className="summit-hero-p1">
        We’re excited to announce that the call for proposals is now open for the inaugural eBPF Summit, a virtual event, targeted at DevOps, platform architects and developers.
      </p>
      <p className="summit-hero-p2">
        The summit is offered at no cost, and will include keynotes from those leading the open source eBPF community including eBPF power-users as well as user lightning talks. Participants will have a chance to ask questions to the speakers and chat with peers on a Slack forum. We’re inviting eBPF users, contributors and community members to participate in this virtual gathering.
      </p>
    </div>
  </div>
);

const About = () => (
  <div className="summit-about">
    <h2>About the eBPF Summit</h2>
    <p>eBPF is quickly becoming one of the most talked about technologies in our industry - enabling a new generation of networking, tracing, observability and security infrastructure. The eBPF Summit is targeted at users and potential users of this groundbreaking technology - both those looking at leveraging eBPF directly or via one of the projects leveraging eBPF (e.g. bpftrace, Cilium, Falco etc.).</p>
  </div>
);

const SpeakerCard = ({ avatarSrc, name, descriptions }) => (
  <div className="summit-speaker-card">
    <img src={avatarSrc} alt={name}/>
    <h3>{name}</h3>
    <div>
      {descriptions.map(description => <p>{description}</p>)}
    </div>
  </div>
);

const Speakers = () => (
  <div className="summit-speakers">
    <h2>Confirmed Keynote Speakers</h2>
    <div className="summit-speakers-container">
      {speakers.map(({ avatarSrc, name, descriptions }) => <SpeakerCard
        avatarSrc={avatarSrc}
        name={name}
        descriptions={descriptions}
      />)}
    </div>
  </div>
);

const UserTalks = () => (
  <div className="summit-user-talks">
    <h2>eBPF User Lightning Talks</h2>
    <p>
      Users are invited to submit talks describing how they are using eBPF and eBPF-based open source projects to solve real world problems. To be clear, you do not have to be writing raw eBPF programs yourself to speak, we expect many speakers to be leveraging eBPF via derivative projects (see list <a href="https://ebpf.io/projects">here</a>). Lightning talks will be 5 minutes in length (plus time for Q&A) and can be pre-recorded or delivered live based on the speaker’s preference. We do ask that regardless of the delivery that the speaker is present to answer questions and interact with the community.
    </p>
  </div>
);

const Dates = () => (
  <div className="summit-dates">
    <h2>Dates to Remember</h2>
    <div className="summit-dates-container">
      <h4>CFP Opens: </h4>
      <p>Wednesday, September 23</p>
      <h4>Registration opens:</h4>
      <p>Wednesday, September 23</p>
      <h4>CFP Closes: </h4>
      <p>Wednesday, October 14 at 11:59 <strong style={{fontWeight: 400}}>PDT</strong></p>
      <h4>CFP Notifications: </h4>
      <p>on or before Friday, October 16</p>
      <h4>Session Recordings Completed: </h4>
      <p>Sunday, October 25th at 11:59 <strong style={{fontWeight: 400}}>PDT</strong></p>
      <h4>Event Date:</h4>
      <p>October 28 and 29th, 2020,<br/>9am-12pm <strong style={{fontWeight: 400}}>PDT</strong> / 4pm-7pm <strong style={{fontWeight: 400}}>GMT</strong></p>
    </div>
  </div>
);

const Topics = () => (
  <div className="summit-topics">
    <h2>Suggested Topics</h2>
    <ul>
      <li>Using eBPF to troubleshoot application and system performance</li>
      <li>Applying eBPF to implement zero trust, runtime security, network policy</li>
      <li>Tackling infrastructure scalability challenges with eBPF</li>
      <li>Applying eBPF to networking and load-balancing</li>
      <li>Application profiling and tracing with eBPF</li>
      <li>System and application monitoring with eBPF</li>
      <li>Unlocking new levels of observability with eBPF</li>
      <li>Advancements in the eBPF core infrastructure and libraries</li>
      <li>eBPF community related topics</li>
    </ul>
  </div>
);

const Registration = () => (
  <div className="summit-registration">
    <h2>Registration</h2>
    <p>
      The summit is open to everyone free of charge. To sign up for the event, please fill out this <a className="summit-link" href="https://docs.google.com/forms/d/e/1FAIpQLSeWBrtQzSDxgFb2yMoa2tePapMibKeGaHLHDd70xNJzzVMX5g/viewform?embedded=true">Registration Form</a>. You will receive information on how to join the summit prior to the event.
    </p>
    <p>
     If you have any questions please ask them on <a href="https://cilium.herokuapp.com/" className="summit-link">the eBPF Slack</a>. There is a #ebpf-summit channel dedicated for this event.
    </p>
  </div>
);

const CallForPapers = () => (
  <Layout isBannerHidden isDesktopHeaderHidden>
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
      <HeaderDesktop />
      <Hero />
      <About />
      <Speakers />

      <div className="summit-columns">
        <div>
          <UserTalks />
          <Dates />
        </div>
        <div>
          <Topics />
          <Registration />
        </div>
      </div>
      <div className="summit-registration-buttons">
        <a
          className="summit-button summit-guest-button"
          href="https://docs.google.com/forms/d/e/1FAIpQLSeWBrtQzSDxgFb2yMoa2tePapMibKeGaHLHDd70xNJzzVMX5g/viewform?embedded=true"
        >
          Register
        </a>
        <a
          className="summit-button"
          href="https://docs.google.com/forms/d/e/1FAIpQLSeNUo-TrAVRAjMdjB62A48CtHarC1AexWZpTQskvTyNOoSqaw/viewform?embedded=true"
        >
          Submit Talk Proposal
        </a>
      </div>
    </div>
  </Layout>
);

export default CallForPapers;
