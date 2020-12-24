import { Link, navigate } from "gatsby";
import "prismjs/themes/prism.css";
import PropTypes from "prop-types";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import Helmet from "react-helmet";
import "./footer.scss";
import "./header.scss";
import "./index.css";
import "./menu-icon.scss";

const InfoDisclaimer = () => (
  <div className="introDisclaimer">
    <strong>eBPF Summit keynote and lightning talk videos are available.</strong> <a href="/summit-2020" style={{color: '#947927'}}>Watch Now!</a>
  </div>
)

const HeaderDesktop = ({ language, hasLanguage, setLanguage }) => (
  <div className="header desktop">
    <Link
      to={language}
      className="headerLogoLink"
    >
      <img
        className="headerLogo"
        src={require("../assets/logo.png")}
        width="109px"
        height="38px"
      />
    </Link>
    <nav className="headerNav">
      <Link to="/what-is-ebpf">What is eBPF?</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/projects">Projects</Link>
      <a href="/slack">Slack</a>
      <Link to="/contribute">Contribute</Link>
      {hasLanguage && <select className="languageSelect" value={language} onChange={setLanguage}>
        <option value="/">English</option>
        <option value="/zh-cn/">Chinese</option>
      </select>}
      <a href="https://www.cilium.io">
        <img
          src={require("../assets/cilium_logo.png")}
          width="46px"
          height="50px"
        />
      </a>
    </nav>
  </div>
);

const HeaderMobile = ({ language, hasLanguage, setLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = useCallback(() => setIsOpen(!isOpen), [isOpen, setIsOpen]);

  return (
    <div className="header mobile">
      <div className="row">
        <Link to={language} className="headerLogoLink">
          <img className="headerLogo" src={require("../assets/logo.png")} width="109px" height="38px" />
        </Link>
        <div
          className={`menu-icon ${isOpen && "open"}`}
          onClick={toggleIsOpen}
        >
          <span />
          <span />
          <span />
        </div>
      </div>
      {isOpen && (
        <nav className="headerNav">
          <Link to="/what-is-ebpf">What is eBPF?</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/projects">Projects</Link>
          <a href="/slack">Slack</a>
          <Link to="/contribute">Contribute</Link>
          {hasLanguage && <select className="languageSelect" value={language} onChange={setLanguage}>
            <option value="/">English</option>
            <option value="/zh-cn/">Chinese</option>
          </select>}
          <a href="https://www.cilium.io">
            <img src={require("../assets/cilium_logo.png")} height="50px" />
          </a>
        </nav>
      )}
    </div>
  );
}

const FooterDesktop = () => (
  <div className="footer desktop">
    <div className="section">
      <div className="items">
        <Link to="/what-is-ebpf" className="item">
          What is eBPF?
        </Link>
        <Link to="/blog" className="item">
          Blog
        </Link>
        <Link to="/projects" className="item">
          Projects
        </Link>
        <Link to="/contribute" className="item">
          Contribute
        </Link>
      </div>
    </div>
  </div>
);

const TemplateWrapper = ({ children, isDesktopHeaderHidden }) => {
  const hasLanguage = useMemo(
    () => {
      if(typeof window === 'undefined') {
        return;
      }

      return window.location.pathname === '/' || window.location.pathname.includes('/zh-cn/');
    },

    [],
  );

  const [language, setLanguage] = useState();

  useEffect(
    () => {
      if(typeof window === 'undefined') {
        return;
      }

      const mainPage = window.location.pathname === '/' || window.location.pathname.includes('/zh-cn/');

      if(mainPage) {
        localStorage.setItem('language', window.location.pathname.includes('/zh-cn/') ? '/zh-cn/' : '/');
        setLanguage(window.location.pathname.includes('/zh-cn/') ? '/zh-cn/' : '/');
      }

      if(!mainPage) {
        setLanguage(localStorage.getItem('language') || '/');
      }
    },

    [],
  );

  const setLang = event => {
    setLanguage(event.target.value);
    localStorage.setItem('language', event.target.value);
    navigate(window.location.pathname.replace(language, event.target.value));
  };

  return <div>
    <Helmet
      title="eBPF"
      link={[
        {
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500;700;900&display=swap",
          rel: "stylesheet"
        }
      ]}
      meta={[
        {
          name: "name",
          content: "eBPF",
        },
        {
          name: "description",
          content: "eBPF is a revolutionary technology that can run sandboxed programs in the Linux kernel without changing kernel source code or loading a kernel module.",
        },
      ]}
    />
    <InfoDisclaimer />
    {!isDesktopHeaderHidden && <HeaderDesktop language={language} hasLanguage={hasLanguage} setLanguage={setLang} />}
    <HeaderMobile language={language} hasLanguage={hasLanguage} setLanguage={setLang} />
    <div>{children}</div>
    <FooterDesktop />
  </div>
};

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
