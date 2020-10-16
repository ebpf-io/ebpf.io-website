import React, { useCallback, useEffect, useState } from "react";
import cn from 'classnames'
import Helmet from "react-helmet";
import { Link } from 'gatsby'
import Carousel from 'nuka-carousel'
const pageMetaTitle = 'eBPF Summit 2020 - Call For Proposals'
const pageMetaDescription = 'We’re excited to announce that the call for proposals is now open for the inaugural eBPF Summit, a virtual event, to be held October 28-29, 2020'
const speakers = [
  {
    card: {
      avatarSrc: require("../assets/summit-2020/alexey-starovoitov.png"),
      name: "Alexei Starovoitov",
      description: "Co-maintainer eBPF, Facebook"
    }
  },
  {
    card: {
      avatarSrc: require("../assets/summit-2020/brendan-gregg.png"),
      name: "Brendan Gregg",
      description: "Author of “BPF Performance Tools“, Lead Performance Engineer, Netflix"
    }
  },
  {
    card: {
      avatarSrc: require("../assets/summit-2020/daniel-borkmann.png"),
      name: "Daniel Borkmann",
      description: "Co-maintainer eBPF, Isovalent"
    },

    about: {
      title: "BPF as a fundamentally better dataplane",

      description: [
        <>BPF is seeing a rapid pace of development in the Linux kernel and tremendous adoption and growth in the user space landscape. Use cases often span the networking, tracing and security space, but their boundaries are blurred and do reach beyond these subsystems. This talk provides a deep dive on why BPF is a fundamental shift compared to more traditional kernel subsystems and why it is the best tool for the job in terms of performance, scalability, and operations in the age of containerization. We'll also dive into a few examples of recent kernel advancements from the BPF subsystem.</>
      ]
    }
  },
  {
    card: {
      avatarSrc: require("../assets/summit-2020/david-miller.png"),
      name: "David Miller",
      description: "Linux Kernel Networking Maintainer, Red Hat"
    }
  },
  {
    card: {
      avatarSrc: require("../assets/summit-2020/kris-nova.png"),
      name: "Kris Nova",
      description: "Chief Open Source Advocate, Sysdig"
    }
  },
  {
    card: {
      avatarSrc: require("../assets/summit-2020/kp-singh.png"),
      name: "KP Singh",
      description: "Kernel Runtime Security, Google"
    },

    about: {
      title: "Security Auditing and Enforcement using eBPF",

      description: [
        <>The BPF Linux Security Module unleashes the power of eBPF to the world of Linux Security by providing a unified interface for access control and auditing. The talk goes through the motivations behind developing a BPF based LSM, showcases some of the ways in which it is used at Google and provides some insights and updates on upcoming features that users can leverage.</>
      ]
    }
  },
  {
    card: {
      avatarSrc: require("../assets/summit-2020/laurent-bernaille.png"),
      name: "Laurent Bernaille",
      description: "Staff Engineer, Datadog"
    },

    about: {
      title: "Our eBPF Journey at Datadog",

      description: [
        <>Standardizing on eBPF for container networking history of what we did (limitations of iptables load balancing /limitations of ipvs load balancing / limitations of iptables for security)<br />eBPF performance solves these limitations<br />eBPF load balancing and security == cilium</>,
        <>Continuing to leverage eBPF in the future extending the type of rules redirecting traffic to sidecars probable other use-cases outside of containers</>,
        <>We also use eBPF more and more in the Datadog product<br />Network Performance Monitoring Security agent and File integrity Monitoring</>
      ]
    }
  },
  {
    card: {
      avatarSrc: require("../assets/summit-2020/liz-rice.png"),
      name: "Liz Rice",
      description: "VP, Open Source Engineering, Aqua"
    },

    about: {
      title: "A beginner’s guide to eBPF programming",

      description: [
        <>You’ve heard about eBPF as an exciting technology that opens up a world of new observability, security and networking capabilities. But how do you write eBPF programs? In this talk Liz will show you how to get started so you can run your own custom code in the Linux kernel - or even if you don’t plan to write eBPF yourself, it will help you understand how the technology works.</>
      ]
    }
  },
  {
    card: {
      avatarSrc: require("../assets/summit-2020/tabitha-sable.png"),
      name: "Tabitha Sable",
      description: "Systems Security Engineer, Datadog"
    },

    about: {
      title: "Our eBPF Journey at Datadog",

      description: [
        <>Standardizing on eBPF for container networking history of what we did (limitations of iptables load balancing /limitations of ipvs load balancing / limitations of iptables for security)<br />eBPF performance solves these limitations<br />eBPF load balancing and security == cilium</>,
        <>Continuing to leverage eBPF in the future extending the type of rules redirecting traffic to sidecars probable other use-cases outside of containers</>,
        <>We also use eBPF more and more in the Datadog product (probably only 2 slides)<br />Network Performance Monitoring Security agent and File integrity Monitoring</>
      ]
    }
  },
  {
    card: {
      avatarSrc: require("../assets/summit-2020/tomas-graf.png"),
      name: "Thomas Graf",
      description: "Co-founder of the Cilium Project, Isovalent"
    }
  },
  {
    card: {
      avatarSrc: require("../assets/summit-2020/zang-li.png"),
      name: "Zang Li",
      description: "Cilium Core Team Maintainer, Google"
    },

    about: {
      title: "Kubernetes Network Policy Logging with eBPF",

      description: [
        <>In Kubernetes, micro-segmentation is achieved through network policies which specify how pods are allowed to communicate with one another. This is a must for the security-conscious customers, such as financial institutions. However, being able to enforce the policy alone is not enough. Customers want to have more visibility on what traffic is denied, what traffic is allowed and by which policy for auditing, monitoring and troubleshooting purposes. In this talk, we will show how to build Kubernetes network policy logging with eBPF and Cilium. The power of eBPF allows us not only to enforce the network policies on the connections in the kernel, but also to pass the connection information as well as the policy decisions made to the user space. We can then process the information asynchronously in the user space, such as correlating the policy actions to pod, namespace and policy names. Due to the ephemeral nature of IP addresses in Kubernetes, these annotations are needed to generate meaningful logs to users. With eBPF, we are able to achieve this policy enforcement visibility with the minimal impact on the system's computing resources.</>
      ]
    }
  },
]

const slides = [
  {
    title: 'Pablo Moncada',
    subtitle: 'MasMovil',

    description: <>
      <p>MasMovil is the fourth telecom provider in Spain with 10M customers and also provides communication to more than 700 local telco providers as a wholesale service.</p>
      <p>A cloud native stack is orchestrated by Kubernetes using Google’s GKE managed service with more than 7,000 pods and 2,500 services using a total of 1,600 CPU and 6TB RAM among 300 nodes powered by microservices written in Go and Vertx and open source third parties…</p>
    </>,

    popupTitle: '',
    popupDescriptipn: ''
  },
  {
    title: 'Pablo Chico de Guzman / Ramiro Berrelleza',
    subtitle: 'Okteto',

    description: <>
      <p>Okteto Cloud is a developer platform, powered by Kubernetes. The biggest benefit that our users get from our platform is the ability to easily deploy any type of workload with one click. A group of Crypto Bandits discovered us and decided to set up camp on our platform and use it to mine crypto coins. What's worse, they decided to push their instructions to a Github repo, for more people to join them. A gold rush started…</p>
    </>,

    popupTitle: '',
    popupDescriptipn: ''
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

    style={{
      '--background-image': `URL("${require("../assets/summit-2020/hero-background.svg")}")`,
      '--background-image-mobile': `URL("${require("../assets/summit-2020/hero-background-mobile.svg")}")`,
    }}
  >
    <div className="wrapper">
      <h1 className="title">
        <img alt="eBPF" className="logo" src={require("../assets/summit-2020/eBPF-logo-white.svg")} />
        {' '}
        Summit
      </h1>

      <div className="meta">
        <span className="item">October 28-29th, 2020</span>
        <hr className="divider" />
        <span className="item">A Free Virtual Event</span>
      </div>

      <p className="description">
        Registration is now open for the inaugural eBPF Summit, a virtual event, targeted at DevOps, platform architects and developers.
      </p>

      <div className="space" />

      <div className="buttons">
        <a
          className="button type--register"
          href="https://docs.google.com/forms/d/e/1FAIpQLSeWBrtQzSDxgFb2yMoa2tePapMibKeGaHLHDd70xNJzzVMX5g/viewform?embedded=true"
        >
          Register
        </a>

        <a
          className="button type--join"
          href="https://cilium.herokuapp.com"
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
      <h2 className="title">eBPF Summit</h2>
      <p className="description">eBPF is quickly becoming one of the most talked about technologies in our industry - enabling a new generation of networking, tracing, observability and security infrastructure. The eBPF Summit is targeted at users and potential users of this groundbreaking technology - both those looking at leveraging eBPF directly or via one of the projects leveraging eBPF (e.g. bpftrace, Cilium, Falco etc.).</p>
    </div>
  </div>
);

const SpeakerCard = ({ avatarSrc, name, description, aboutTitle, aboutDescription, idx, isSelected, setSelectedCardIdx }) => {
  const hasPopupContent = aboutTitle && aboutDescription.length > 0

  const toggleSelectedCardIdx = useCallback(
    () => setSelectedCardIdx(isSelected || !hasPopupContent ? null : idx),
    [hasPopupContent, isSelected, idx]
  )

  const resetSelectedCardIdx = useCallback(
    () => setSelectedCardIdx(null),
    [isSelected, idx]
  )

  return <div className="summit-speaker-card">
    <div className={cn('section', {'is-selectable': hasPopupContent, 'is-selected': isSelected})} onClick={toggleSelectedCardIdx}>
      <div className="avatar">
        <img alt={name} className="image" src={avatarSrc} />
      </div>

      <div className="section">
        <h3 className="title">{name}</h3>
        <p className="description">{description}</p>
      </div>

      {!isSelected && hasPopupContent && <img alt="" aria-hidden className="corner" src={require("../assets/summit-2020/icon-corner.svg")} />}
    </div>

    {isSelected && <div className="popup">
      <h4 className="title">{aboutTitle}</h4>
      {aboutDescription.map((description, idx) => <p className="description" key={idx}>{description}</p>)}

      <button aria-label="Close" className="button" onClick={resetSelectedCardIdx} type="button">
        <img alt="Close" aria-hidden className="icon" src={require("../assets/summit-2020/icon-close.svg")} />
      </button>
    </div>}
  </div>
};

const Keynotes = () => {
  const [selectedCardIdx, setSelectedCardIdx] = useState(null)

  return <div className="summit-keynotes">
    <div className="wrapper">
      <h2 className="title">Keynotes & Abstracts</h2>

      <div className="list">
        {speakers.map(({ card, about }, idx) => <SpeakerCard
          avatarSrc={card.avatarSrc}
          name={card.name}
          description={card.description}
          aboutTitle={about?.title}
          aboutDescription={about?.description}
          key={idx}
          idx={idx}
          isSelected={idx === selectedCardIdx}
          setSelectedCardIdx={setSelectedCardIdx}
        />)}
      </div>
    </div>
  </div>
};

const Agenda = () => (
  <div
    className="summit-agenda"

    style={{
      '--background-image': `URL("${require("../assets/summit-2020/agenda-background.svg")}")`,
      '--background-image-mobile': `URL("${require("../assets/summit-2020/agenda-background-mobile.svg")}")`,
    }}
  >
    <div className="wrapper">
      <h2 className="title">Agenda</h2>

      <div className="list">
        <section className="section">
          <h3 className="title">Day 1:</h3>

          <div className="list">
            <dl className="row">
              <dt className="time">09:05 - 09:10</dt>
              <dd className="description">Welcome: 5 min</dd>
            </dl>

            <dl className="row">
              <dt className="time">09:10 - 09:30</dt>
              <dd className="description">Liz Rice workshop</dd>
            </dl>

            <dl className="row">
              <dt className="time">09:30 - 09:50</dt>
              <dd className="description">Daniel Borkmann</dd>
            </dl>

            <dl className="row">
              <dt className="time">09:50 - 09:55</dt>
              <dd className="description">Break</dd>
            </dl>

            <dl className="row">
              <dt className="time">09:55 - 10:20</dt>
              <dd className="description">Laurent Bernaille / Tabitha Sable</dd>
            </dl>

            <dl className="row">
              <dt className="time">10:20 - 10:40</dt>
              <dd className="description">KP Singh</dd>
            </dl>

            <dl className="row">
              <dt className="time">10:40 - 11:00</dt>
              <dd className="description">David Miller</dd>
            </dl>

            <dl className="row">
              <dt className="time">11:00 - 11:05</dt>
              <dd className="description">Break</dd>
            </dl>

            <dl className="row">
              <dt className="time">11:05 - 12:20</dt>
              <dd className="description">Lightning talks (14 talks @ 5 min talk= 70min + 5 min logistics)</dd>
            </dl>

            <dl className="row">
              <dt className="time">12:20 - 12:30</dt>
              <dd className="description">Closing Comments</dd>
            </dl>
          </div>
        </section>

        <section className="section">
          <h3 className="title">Day 2:</h3>

          <div className="list">
            <dl className="row">
              <dt className="time">09:05 - 09:10</dt>
              <dd className="description">Welcome: 5 min</dd>
            </dl>

            <dl className="row">
              <dt className="time">09:10 - 09:30</dt>
              <dd className="description">Alexei Starovoitov</dd>
            </dl>

            <dl className="row">
              <dt className="time">09:30 - 09:50</dt>
              <dd className="description">Kris Nova (panel if cancel)</dd>
            </dl>

            <dl className="row">
              <dt className="time">09:50 - 09:55</dt>
              <dd className="description">Break</dd>
            </dl>

            <dl className="row">
              <dt className="time">09:55 - 10:15</dt>
              <dd className="description">Brendan Gregg</dd>
            </dl>

            <dl className="row">
              <dt className="time">10:15 - 10:35</dt>
              <dd className="description">Zang Li</dd>
            </dl>

            <dl className="row">
              <dt className="time">10:35 - 10:55</dt>
              <dd className="description">Thomas Graf</dd>
            </dl>

            <dl className="row">
              <dt className="time">10:55 - 11:00</dt>
              <dd className="description">Break</dd>
            </dl>

            <dl className="row">
              <dt className="time">11:00 - 12:15</dt>
              <dd className="description">Lightning talks (14 talks, 5 min Q&A = 70min + 5 min logistics)</dd>
            </dl>

            <dl className="row">
              <dt className="time">12:15 - 12:30</dt>
              <dd className="description">Closing Comments</dd>
            </dl>
          </div>
        </section>
      </div>
    </div>
  </div>
);

const Slide = ({ title, subtitle, description }) => {
  return <div className="slide">
    <h3 className="slide-title">{ title }</h3>
    <h4 className="slide-subtitle">{ subtitle }</h4>
    <p className="slide-description">{ description }</p>
  </div>
}

const LightningTalks = () => {
  const [slideIndex, setSlideIndex] = useState(0)

  return <div
    className="summit-lightning-talks"
    style={{background: `URL(${require('../assets/summit-2020/lightning-talks-bg.png')}), linear-gradient(90deg, #C1C1C1 -0.82%, #F3F3F3 98.52%)`}}
  >
    <div className="wrapper">
      <h2 className="title">Lightning Talks</h2>

      <Carousel
        className="carousel"
        heightMode="max"
        initialSlideHeight={500}
        slideIndex={slideIndex}
        afterSlide={slideIndex => setSlideIndex(slideIndex)}
        renderBottomCenterControls={null}

        renderCenterLeftControls={({ previousSlide }) => <img
          alt="Prev slider"
          className="slider-prev"
          onClick={previousSlide}
          src={require('../assets/summit-2020/slider-prev.svg')}
        />}

        renderCenterRightControls={({ nextSlide }) => <img
          alt="Next slider"
          className="slider-next"
          onClick={nextSlide}
          src={require("../assets/summit-2020/slider-next.svg")}
        />}

        wrapAround
      >
        {slides.map((slide, idx) => <Slide
          description={slide.description}
          key={idx}
          title={slide.title}
          subtitle={slide.subtitle}
        />)}
      </Carousel>

      <a
        className="button"
        href="https://docs.google.com/forms/d/e/1FAIpQLSeWBrtQzSDxgFb2yMoa2tePapMibKeGaHLHDd70xNJzzVMX5g/viewform?embedded=true"
      >
        Register
      </a>
    </div>
  </div>
};

const Footer = () => (
  <footer className="summit-footer">
    <div className="wrapper">
      <Link to="/" className="link">
        <img alt="eBPF logo" className="logo" src={require("../assets/summit-2020/eBPF-logo-gray.svg")} />
      </Link>

      <p className="copyright">Copyright ©2020 eBPF</p>

      <div className="share-list">
        <a className="link" href="https://cilium.herokuapp.com" title="Slack">
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
      link={[
        {href: "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap", rel: "stylesheet"},
      ]}
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
    <LightningTalks />
    <Footer />
  </div>
);

export default CallForPapers;
