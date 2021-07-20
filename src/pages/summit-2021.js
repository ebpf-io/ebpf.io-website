import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import cn from "classnames";
import Helmet from "react-helmet";
import { Link } from "gatsby";
import Carousel from "nuka-carousel";
import ModalVideo from "react-modal-video";
import { useLocation } from '@reach/router';
import queryString from 'query-string';
import "../stylesheets/index.scss";
import "../../node_modules/react-modal-video/scss/modal-video.scss";
const pageMetaTitle = 'eBPF Summit 2021'
const pageMetaDescription = 'Register now for the eBPF Summit 2021, Aug 18-19, 2021, a free virtual event for DevOps, SRE, SecOps, and developers.'
const speakers = [
  {
    card: {
      avatarSrc: require("../assets/summit-2021/jaana.jpg"),
      id: "jbd",
      name: "Jaana Dogan",
      description: "Principal Engineer, AWS",
    },

    about: {
    }
  },
  {
    card: {
      avatarSrc: require("../assets/summit-2021/brendan_2017.jpeg"),
      id: "brendan-gregg",
      name: "Brendan Gregg",
      description: "Author of “BPF Performance Tools“, Lead Performance Engineer, Netflix"
    },

    about: {
    }
  },
  {
    card: {
      avatarSrc: require("../assets/summit-2020/liz-rice.jpg"),
      id: "liz-rice",
      name: "Liz Rice",
      description: "Chief Open Source Officer, Isovalent",
    },

    about: {
    }
  },
  {
    card: {
      avatarSrc: require("../assets/summit-2020/daniel-borkmann.jpg"),
      id: "daniel-borkmann",
      name: "Daniel Borkmann",
      description: "Co-Creator eBPF, Kernel Developer, Isovalent"
    },

    about: {
    }
  },
  {
    card: {
      avatarSrc: require("../assets/summit-2020/tabitha-sable.jpg"),
      id: "tabitha-sable",
      name: "Tabitha Sable",
      description: "Kubernetes SIG Security co-chair, Systems Security Engineer, Datadog"
    },

    about: {
    }
  },
  {
    card: {
      avatarSrc: require("../assets/summit-2021/davethaler_2011.jpeg"),
      id: "dave-thaler",
      name: "Dave Thaler",
      description: "Partner Software Architect, Microsoft",
    },

    about: {
    }
  },
]

const Info = () => (
  <div className="summit-info">
    <Link to="/" className="link">
      <img alt="eBPF logo" className="logo" src={require("../assets/summit-2021/eBPF-logo.png")} />
    </Link>
  </div>
);

const Hero = () => (
  <header
    className="summit-hero"

    style={{
      '--background-image': `URL("${require("../assets/summit-2021/hero-background.svg")}")`,
      '--background-image-mobile': `URL("${require("../assets/summit-2021/hero-background-mobile.svg")}")`,
    }}
  >
    <div className="wrapper">
      <h1 className="title">
        <img alt="eBPF" className="logo" src={require("../assets/summit-2021/eBPF-logo-white.svg")} />
        {' '}
        Summit
      </h1>

      <div className="meta">
        {<span className="item">August 18-19th, 2021</span>}
      </div>

      <p className="description">
        eBPF Summit, a virtual event, targeted at DevOps, SecOps, platform architects, and developers is open for registration.
      </p>

      <p className="description">
        Interested in speaking at eBPF Summit? The <a target="_blank" href="https://sessionize.com/ebpf-summit-2021/">Call For Papers</a> for lightning talks is open until July 23!
      </p>

      <div className="space" />

      <div className="buttons">
        <a
          className="button type--register"
          href="#register"
        >
          Register
        </a>

        <a
          className="button type--join"
          href="/slack"
        >
          Join eBPF Summit Slack
        </a>
      </div>
    </div>
  </header>
);

const SpeakerCard = ({ avatarSrc, name, description, aboutTitle, aboutDescription, id, idx, isSelected, setSelectedCardIdx, showVideo, slidesLink }) => {
  const hasPopupContent = aboutTitle && aboutDescription.length > 0

  const toggleSelectedCardIdx = useCallback(
    () => setSelectedCardIdx(isSelected || !hasPopupContent ? null : idx),
    [hasPopupContent, isSelected, idx]
  )

  const resetSelectedCardIdx = useCallback(
    () => setSelectedCardIdx(null),
    [isSelected, idx]
  )

  const cardRef = useRef(null)
  const location = useLocation()

  useEffect(
    () => {
      const cardElement = cardRef.current

      if(!cardElement || !location) {
        return
      }

      const {speaker} = queryString.parse(location.search);

      if(speaker === id) {
        if(hasPopupContent) {
          setSelectedCardIdx(idx)
        }

        cardElement.scrollIntoView()
      }
    },

    [hasPopupContent, id, idx, location],
  )

  const showVideoAndClosePopup = useCallback(
    () => {
      if(!!showVideo) {
        resetSelectedCardIdx()
        showVideo()
      }
    },

    [showVideo, resetSelectedCardIdx],
  )

  return <div className="summit-speaker-card">
    <div className={cn('section', {'is-selectable': hasPopupContent, 'is-selected': isSelected})} onClick={toggleSelectedCardIdx} ref={cardRef}>
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
      <h4 className={cn('title', {'link': !!showVideo})} onClick={showVideoAndClosePopup}>{aboutTitle}</h4>
      {aboutDescription.map((description, idx) => <p className="description" key={idx}>{description}</p>)}

      <div className="video-slides-container">
        {!!showVideo && <button className="download-link video-button" onClick={showVideoAndClosePopup}>
          <img alt="Show video icon" src={require('../assets/youtube-icon.svg')} width={18} />
          Watch full replay
        </button>}

        {!!slidesLink && <a className="download-link" href={slidesLink}>
          <img
            alt="PDF download icon"
            src={require('../assets/pdf-file.svg')}
            width={18}
          />

          View slides
        </a>}
      </div>

      <button aria-label="Close" className="button" onClick={resetSelectedCardIdx} type="button">
        <img alt="Close" aria-hidden className="icon" src={require("../assets/summit-2020/icon-close.svg")} />
      </button>
    </div>}
  </div>
};

const Keynotes = () => {
  const [selectedCardIdx, setSelectedCardIdx] = useState(null)
  const [modalVideo, setModalVideo] = useState(null)
  const closeModalVideo = useCallback(() => setModalVideo(null), [])
  const showModalVideo = useCallback(video => setModalVideo(video), [])

  return <div className="summit-keynotes">
    <div className="wrapper">
      <h2 className="title" id="featured-speakers">Featured Speakers</h2>

      <div className="list">
        {speakers.map(({ card, about }, idx) => <SpeakerCard
          avatarSrc={card.avatarSrc}
          name={card.name}
          description={card.description}
          aboutTitle={about?.title}
          aboutDescription={about?.description}
          key={idx}
          id={card.id}
          idx={idx}
          isSelected={idx === selectedCardIdx}
          setSelectedCardIdx={setSelectedCardIdx}
          showVideo={!!about.videoId ? () => showModalVideo(about.videoId) : null}
          slidesLink={about?.slidesLink}
        />)}
      </div>
    </div>

    <ModalVideo channel='youtube' isOpen={modalVideo !== null} videoId={modalVideo} onClose={closeModalVideo} />
  </div>
};

const Agenda = () => {
  return <div
    id="agenda"
    className="summit-agenda"

    style={{
      '--background-image': `URL("${require("../assets/summit-2020/agenda-background.svg")}")`,
      '--background-image-mobile': `URL("${require("../assets/summit-2020/agenda-background-mobile.svg")}")`,
    }}
  >
    <div className="wrapper">
      <h2 className="title">Agenda</h2>

      <p className="note">Coming soon!</p>

    </div>
  </div>
};

const About1 = () => (
  <div className="summit-about">
    <div className="wrapper" style={{textAlign: 'center', 'padding-bottom': '30px'}}>
      <h2 className="title" id="information">Information</h2>
      <p className="description">
        Back by popular demand, we’re excited to announce the eBPF Summit 2021. eBPF is quickly becoming one of the most talked about technologies in our industry - enabling a new generation of networking, observability and security tools. The eBPF Summit brings together end-user and the eBPF developer community for two days of exciting content all around eBPF. Just like last year, we will hear from both end-users sharing their experience using eBPF as well as developers actively working on eBPF and eBPF projects.
      </p>
      <h2 className="title" id="topics">Topics</h2>
    <div style={{'overflow': 'hidden', textAlign: 'left', 'padding-bottom': '0px'}}>
      <div style={{'width': '50%', 'float': 'left'}}>
      <ul>
	<li>Introduction &amp; Getting Started with eBPF</li>
	<li>Observing, Tracing, and Debugging Applications with eBPF</li>
	<li>eBPF-based Networking, Load-Balancing, &amp; Network Security</li>
        <li>Performance Troubleshooting with eBPF</li>
        <li>Securing Systems, CI/CD pipelines, Networks, ... with eBPF</li>
      </ul>
      </div>
      <div style={{'width': '50%', 'overflow': 'hidden'}}>
      <ul>
        <li>eBPF-based Observability &amp; Monitoring</li>
	<li>Runtimes, Kernel Implementations, & eBPF Libraries</li>
	<li>How to write eBPF programs in higher-level Languages</li>
        <li>eBPF Projects (bpftrace, Cilium, Falco, ...)</li>
        <li>Future &amp; Outlook of eBPF</li>
        <li>Troubleshooting Networking Issues with eBPF</li>
	<li>And much more...</li>
      </ul>
      </div>
      </div>
    </div>
  </div>
);

const About2 = () => (
  <div className="summit-about">
    <div className="wrapper" style={{textAlign: 'center', 'padding-bottom': '30px'}}>
      <h2 className="title" id="last-year">Last year's eBPF Summit</h2>
      <p className="description">
        <a href="https://ebpf.io/summit-2020">eBPF Summit 2020</a> featured <b>2940 Registrations</b>, <b>2 Days</b>, <b>10 Keynotes</b>, <b>28 talks</b>, and <b>28 companies</b>. Many different perspectives were covered from kernel maintainers working on eBPF implementation, through projects using eBPF technology to create next-generation tools, through to end users sharing their experiences of leveraging this awesome new set of capabilities.
      </p>

    </div>
  </div>
);

const About3 = () => (
  <div className="summit-about">
    <div className="wrapper" style={{'content': '""', 'clear': 'both', 'display': 'table', 'margin': 'auto', 'display': 'block', 'padding': '0px'}}>
      <div style={{'float': 'left', 'padding': '5px'}}><img style={{'max-width': '400px', height: 'auto'}} src={require("../assets/summit-2021/2020_10.png")} /></div>
      <div style={{'float': 'left', 'padding': '5px'}}><img style={{'max-width': '400px', height: 'auto'}} src={require("../assets/summit-2021/2020_2.png")} /></div>
      <div style={{'float': 'left', 'padding': '5px'}}><img style={{'max-width': '400px', height: 'auto'}} src={require("../assets/summit-2021/2020_3.png")} /></div>
    </div>
    <div className="wrapper" style={{'content': '""', 'clear': 'both', 'display': 'table', 'margin': 'auto', 'display': 'block', 'padding': '0px'}}>
      <div style={{'float': 'left', 'padding': '5px'}}><img style={{'max-width': '400px', height: 'auto'}} src={require("../assets/summit-2021/2020_1.png")} /></div>
      <div style={{'float': 'left', 'padding': '5px'}}><img style={{'max-width': '400px', height: 'auto'}} src={require("../assets/summit-2021/2020_11.png")} /></div>
      <div style={{'float': 'left', 'padding': '5px'}}><img style={{'max-width': '400px', height: 'auto'}} src={require("../assets/summit-2021/2020_4.png")} /></div>
    </div>
  </div>
);

const Registration = () => (
  <div className="summit-about">
    <div className="wrapper" style={{textAlign: 'center'}}>
      <h2 className="title" id="registration">Registration</h2>
      <a name="register" />
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfZRsMmxxjoQK2Fo0nhyrQt25AEkq0mpTPQfOAAe6h5oVljWQ/viewform?embedded=true" width="840" height="2454" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
    </div>
  </div>
);


const Footer = () => (
  <footer className="summit-footer">
    <div className="wrapper">
      <Link to="/" className="link">
        <img alt="eBPF logo" className="logo" src={require("../assets/summit-2021/eBPF-logo-gray.svg")} />
      </Link>
    </div>
  </footer>
);

const CallForPapers = () => (
  <div className="summit-page-wrapper">
    <Helmet
      htmlAttributes={{
        class: 'smooth-scroll'
      }}
      title={pageMetaTitle}
      link={[
        {href: "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap", rel: "stylesheet"},
      ]}
      meta={[
        {name: "name", content: "eBPF"},
        {name: "keywords", content: "ebpf, bpf, summit, conference, event"},
        {property: "og:type", name: "type", content: "website"},
        {property: "og:url", name: "url", content: "https://ebpf.io/summit-2021/"},
        {property: "og:title", name: "title", content: pageMetaTitle},
        {property: "og:description", name: "description", content: pageMetaDescription},
        {property: "og:image", name: "image", content: 'https://ebpf.io' + require("../assets/summit-2021/summit_logo.png")},
        {name: "twitter:card", content: "summary_large_image"},
        {name: "twitter:url", content: "https://ebpf.io/summit-2021/"},
        {name: "twitter:title", content: pageMetaTitle},
        {name: "twitter:description", content: pageMetaDescription},
        {name: "twitter:image", content: 'https://ebpf.io' + require("../assets/summit-2021/summit_logo.png")},
      ]}
    />
    <Info />
    <Hero />
    <Keynotes />
    <Agenda />
    <About1 />
    <About2 />
    <About3 />
    <Registration />
    <Footer />
  </div>
);

export default CallForPapers;
