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
const pageMetaDescription = 'Pre-registration is now open for the eBPF Summit 2021, a virtual event, targeted at DevOps, SecOps, platform architects, and developers. To be held August 18-19, 2021.'

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
        eBPF Summit, a virtual event, targeted at DevOps, SecOps, platform architects, and developers is open for pre-registration. We will open the Call For Papers (CFP) soon.<br/>
      </p>

      <div className="space" />

    </div>
  </header>
);

const Registration = () => (
  <div className="summit-about">
    <div className="wrapper" style={{textAlign: 'center'}}>
      <a name="register" />
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeCoqMgOKVBwbDkQQWmfoYq34ElS16T_hc5mHAP8vO8lQP--A/viewform?embedded=true" width="640" height="583" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
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
        {property: "og:image", name: "image", content: 'https://ebpf.io' + require("../assets/summit-2021/ogimage.png")},
        {name: "twitter:card", content: "summary_large_image"},
        {name: "twitter:url", content: "https://ebpf.io/summit-2021/"},
        {name: "twitter:title", content: pageMetaTitle},
        {name: "twitter:description", content: pageMetaDescription},
        {name: "twitter:image", content: 'https://ebpf.io' + require("../assets/summit_logo.png")},
      ]}
    />
    <Info />
    <Hero />
    <Registration />
    <Footer />
  </div>
);

export default CallForPapers;
