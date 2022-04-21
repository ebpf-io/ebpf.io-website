import { Link, navigate } from "gatsby";
import "prismjs/themes/prism.css";
import PropTypes from "prop-types";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import Helmet from "react-helmet";
import "./footer.scss";
import "./header.scss";
import "./index.css";
import "./menu-icon.scss";

const languages = [
  {
    code: '/',
    name: 'English',
  },
  {
    code: '/fr-fr/',
    name: 'Français',
  },
  {
    code: '/zh-cn/',
    name: '简体中文',
  },
].sort( (a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1 );

const getLanguageName = (languageCode) => {
  return !languageCode ? '' :
        languages.find( ({code}) => code === languageCode ).name;
};

const InfoDisclaimer = () => (
  <div className="introDisclaimer">
    <strong>eBPF Summit 2021 videos are available: </strong> <a target="_blank" href="https://www.youtube.com/c/eBPFCiliumCommunity" style={{color: '#947927'}}>Watch Now!</a>
  </div>
)

const HeaderDesktop = ({ language, hasLanguage, setLanguage }) => {
  const [isLangMenuShown, setIsLangMenuShown] = useState(false)
  const [isConferencesMenuShown, setIsConferencesMenuShown] = useState(false)

  const setLang = useCallback(lang => {
    setLanguage(lang)
    setIsLangMenuShown(false)
  }, [setLanguage, setIsLangMenuShown])

  const languageButtons = [];
  for (let l of languages) {
    languageButtons.push(<button key={l.name} className={`button${language === l.code ? ' selected' : ''}`} onClick={() => setLang(`${l.code}`)} type="button">{l.name}</button>);
  }

  return <div className="header desktop">
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
      <Link to="/projects">Project Landscape</Link>
      <span className="languageSelect">
        <button className="button" onClick={() => setIsConferencesMenuShown(!isConferencesMenuShown)} type="button">Conferences <span className="triangle">▾</span></button>
        <span className={`list${isConferencesMenuShown ? ' is-shown' : ''}`}>
          <strong>eBPF Summit</strong>
          <Link className="link" to="/summit-2021">2021</Link>
          <Link className="link" to="/summit-2020">2020</Link>
          <strong>Cloud Native eBPF Day</strong>
          <a target="_blank" className="link" href="https://events.linuxfoundation.org/cloud-native-ebpf-day-europe/program/cfp/">2022 CFP</a>
          <a target="_blank" className="link" href="https://events.linuxfoundation.org/cloud-native-ebpf-day-north-america/program/schedule/">2021</a>
          <strong>eBPF Track (LPC)</strong>
          <a target="_blank" className="link" href="https://linuxplumbersconf.org/event/11/sessions/120/#all">2021</a>
          <a target="_blank" className="link" href="https://linuxplumbersconf.org/event/7/sessions/91/#all">2020</a>
          <a target="_blank" className="link" href="https://linuxplumbersconf.org/event/4/sessions/62/#20190911">2019</a>
          <a target="_blank" className="link" href="http://vger.kernel.org/lpc-bpf2018.html">2018</a>
          <a target="_blank" className="link" href="https://blog.linuxplumbersconf.org/2017/ocw/events/LPC2017/schedule.html#day_2017_09_15">2017</a>
          <strong>bpfconf (LSF/MM/BPF)</strong>
          <a target="_blank" className="link" href="https://lore.kernel.org/bpf/YfGnDRM%2FPe4jzbSr@localhost.localdomain/">2022 CFP</a>
          <a target="_blank" className="link" href="https://lore.kernel.org/bpf/60997079.1c69fb81.77f3f.a045@mx.google.com/"><s>2021</s></a>
          <a target="_blank" className="link" href="http://vger.kernel.org/bpfconf2019.html">2019</a>
        </span>
      </span>
      <a href="/slack">Slack</a>
      {hasLanguage && <span className="languageSelect">
        <button className="button" onClick={() => setIsLangMenuShown(!isLangMenuShown)} type="button">{getLanguageName(language)} <span className="triangle">▾</span></button>
        <span className={`list${isLangMenuShown ? ' is-shown' : ''}`}>
          {languageButtons}
        </span>
      </span>}
    </nav>
  </div>
};

const HeaderMobile = ({ language, hasLanguage, setLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = useCallback(() => setIsOpen(!isOpen), [isOpen, setIsOpen]);
  const [isLangMenuShown, setIsLangMenuShown] = useState(false);
  const [isConferencesMenuShown, setIsConferencesMenuShown] = useState(false);
  const [isAboutMenuShown, setIsAboutMenuShown] = useState(false);

  const setLang = useCallback(lang => {
    setLanguage(lang)
    setIsLangMenuShown(false)
  }, [setLanguage, setIsLangMenuShown])

  const languageButtons = [];
  for (let l of languages) {
    languageButtons.push(<button key={l.name} className={`button${language === l.code ? ' selected' : ''}`} onClick={() => setLang(`${l.code}`)} type="button">{l.name}</button>);
  }

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
          <Link to="/projects">Project Landscape</Link>
          <span className="languageSelect">
            <button className="button" onClick={() => setIsConferencesMenuShown(!isConferencesMenuShown)} type="button">Conferences <span className="triangle">▾</span></button>
            <span className={`list${isConferencesMenuShown ? ' is-shown' : ''}`}>
              <strong>eBPF Summit</strong>
              <Link className="link" to="/summit-2021">2021</Link>
              <Link className="link" to="/summit-2020">2020</Link>
              <strong>eBPF Track (LPC)</strong>
              <a target="_blank" className="link" href="https://lore.kernel.org/bpf/6d225920-9ecc-ef24-2bf8-848ca86c7fb0@iogearbox.net/">2021</a>
              <a target="_blank" className="link" href="https://linuxplumbersconf.org/event/7/sessions/91/#all">2020</a>
              <a target="_blank" className="link" href="https://linuxplumbersconf.org/event/4/sessions/62/#20190911">2019</a>
              <a target="_blank" className="link" href="http://vger.kernel.org/lpc-bpf2018.html">2018</a>
              <a target="_blank" className="link" href="https://blog.linuxplumbersconf.org/2017/ocw/events/LPC2017/schedule.html#day_2017_09_15">2017</a>
              <strong>bpfconf (LSF/MM/BPF)</strong>
              <a target="_blank" className="link" href="https://lore.kernel.org/bpf/60997079.1c69fb81.77f3f.a045@mx.google.com/">2021</a>
              <a target="_blank" className="link" href="http://vger.kernel.org/bpfconf2019.html">2019</a>
            </span>
          </span>
          <a href="/slack">Slack</a>
          {hasLanguage && <span className="languageSelect">
            <button className="button" onClick={() => setIsLangMenuShown(!isLangMenuShown)} type="button">{getLanguageName(language)} <span className="triangle">▾</span></button>
            <span className={`list${isLangMenuShown ? ' is-shown' : ''}`}>
              {languageButtons}
            </span>
          </span>}
        </nav>
      )}
    </div>
  );
}

const FooterDesktop = ({path}) => {
  const isIndexPage = path === '/' || path === '/fr-fr/' || path === '/zh-cn/';
  return (
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
          Project Landscape
        </Link>
        <Link to="/contribute" className="item">
          Contribute
        </Link>
      </div>
      {isIndexPage && 
        <div className="copyright">
          <p>Copyright © 2021 The Linux Foundation® . All rights reserved.</p> 
          <p>The Linux Foundation has registered trademarks and uses trademarks. For a list of trademarks of The Linux Foundation, please see our <a href="https://www.linuxfoundation.org/trademark-usage" target="_blank" rel="noopener noreferrer">Trademark Usage</a> page. Linux is a registered trademark of Linus Torvalds. <a href="https://www.linuxfoundation.org/privacy" target="_blank" rel="noopener noreferrer">Privacy
          Policy</a> and <a href="https://www.linuxfoundation.org/terms" target="_blank" rel="noopener noreferrer">Terms of Use</a>.</p>
        </div>
      }
    </div>
  </div>
);
  }

const TemplateWrapper = ({ children, isDesktopHeaderHidden, path }) => {
  const hasLanguage = useMemo(
    () => {
      if(typeof window === 'undefined') {
        return;
      }

      return window.location.pathname === '/' ||
            window.location.pathname.includes('/fr-fr/') ||
            window.location.pathname.includes('/zh-cn/');
    },

    [],
  );

  const [language, setLanguage] = useState('/');

  useEffect(
    () => {
      if(typeof window === 'undefined') {
        return;
      }

      const mainPage = window.location.pathname === '/' ||
            window.location.pathname.includes('/fr-fr/') ||
            window.location.pathname.includes('/zh-cn/');

      if(mainPage) {
          if (window.location.pathname.includes('/fr-fr/')) {
              localStorage.setItem('language', '/fr-fr/');
              setLanguage('/fr-fr/');
          } else if (window.location.pathname.includes('/zh-cn/')) {
              localStorage.setItem('language', '/zh-cn/');
              setLanguage('/zh-cn/');
          } else {
              localStorage.setItem('language', '/');
              setLanguage('/');
          }
      }

      if(!mainPage) {
        setLanguage(localStorage.getItem('language') || '/');
      }
    },

    [],
  );

  const setLang = lang => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
    navigate(window.location.pathname.replace(language, lang));
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
    <FooterDesktop path={path} />
  </div>
};

TemplateWrapper.propTypes = {
  children: PropTypes.node,
};

export default TemplateWrapper;
