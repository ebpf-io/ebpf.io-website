import { Link, navigate } from "gatsby";
import "prismjs/themes/prism.css";
import PropTypes from "prop-types";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import Helmet from "react-helmet";
import "./footer.scss";
import "./header.scss";
import "./index.css";
import "./menu-icon.scss";

import logo from "../assets/logo.png";
import SlackIcon from "../assets/slack.inline.svg";
import RedditIcon from "../assets/reddit.inline.svg";
import StackOverFlowIcon from "../assets/stackoverflow.inline.svg";
import TwitterIcon from "../assets/twitter.inline.svg";
import GitIcon from "../assets/git.inline.svg";

const languages = [
  {
    code: "/",
    name: "English",
  },
  {
    code: "/fr-fr/",
    name: "Français",
  },
  {
    code: "/zh-cn/",
    name: "简体中文",
  },
].sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1));

const getLanguageName = (languageCode) => {
  return !languageCode
    ? ""
    : languages.find(({ code }) => code === languageCode).name;
};

const footerItems = [
  {
    title: "Get started",
    items: [
      { name: "What is eBPF?", linkUrl: "/what-is-ebpf" },
      {
        name: "eBPF Tech Talks",
        linkUrl:
          "https://www.youtube.com/playlist?list=PLDg_GiBbAx-lJRPROcSadWaI_5sZ_kfpi",
        target: "_blank",
      },
    ],
  },
  {
    title: "Project landscape",
    items: [
      { name: "Applications", linkUrl: "/applications" },
      { name: "Infrastructure", linkUrl: "/infrastructure" },
    ],
  },
  {
    title: "About",
    items: [
      { name: "Blog", linkUrl: "/blog" },
      {
        name: "Newsletter",
        linkUrl: "https://cilium.io/newsletter/",
        target: "_blank",
      },
      { name: "Contribute", linkUrl: "/contribute" },
    ],
  },
];

const footerIcons = [
  { icon: TwitterIcon, linkUrl: "https://twitter.com/eBPFsummit" },
  { icon: GitIcon, linkUrl: "https://git.kernel.org/?q=BPF+Group" },
  { icon: SlackIcon, linkUrl: "https://ebpf.io/slack" },
  {
    icon: StackOverFlowIcon,
    linkUrl: "https://stackoverflow.com/questions/tagged/ebpf",
  },
  { icon: RedditIcon, linkUrl: "https://www.reddit.com/r/eBPF/" },
];

const InfoDisclaimer = () => (
  <div className='introDisclaimer'>
    <img
      src='/images/bg-1.png'
      className='introDisclaimer-image image-right'
      alt=''
      aria-hidden
    />
    <img
      src='/images/bg-2.png'
      className='introDisclaimer-image image-left'
      alt=''
      aria-hidden
    />
    <img
      src='/images/bg-1-md.png'
      className='introDisclaimer-image-md image-right'
      alt=''
      aria-hidden
    />
    <img
      src='/images/bg-2-md.png'
      className='introDisclaimer-image-md image-left'
      alt=''
      aria-hidden
    />
    <div className='text-wrapper'>
      <strong>eBPF summit 2022&nbsp;</strong> <span>(28-29 September)</span>
    </div>
    <a
      className='introDisclaimer-button'
      href='https://www.ebpf.io/summit-2022'
    >
      Register Now!
    </a>
  </div>
);

const HeaderDesktop = ({ language, hasLanguage, setLanguage }) => {
  const [isConferencesMenuShown, setIsConferencesMenuShown] = useState(false);
  const [isCommunityMenuShown, setIsCommunityMenuShown] = useState(false);

  return (
    <header className='header desktop'>
      <Link to={language} className='menu-logo-link'>
        <img className='menu-logo' src={logo} width='122px' height='42px' />
      </Link>
      <nav className='header-nav'>
        <Link to='/what-is-ebpf'>What is eBPF?</Link>
        <Link to='/blog'>Blog</Link>
        <Link to='/projects'>Project Landscape</Link>
        <span className='select'>
          <button
            className='button'
            onClick={() => setIsConferencesMenuShown(!isConferencesMenuShown)}
            type='button'
          >
            Conferences
            <div
              className={`triangle${isConferencesMenuShown ? " is-shown" : ""}`}
            />
          </button>
          <span className={`list${isConferencesMenuShown ? " is-shown" : ""}`}>
            <strong>eBPF Summit</strong>
            <a
              target='_blank'
              className='link'
              href='https://ebpf.io/summit-2022/'
            >
              2022 CFP
            </a>
            <Link className='link' to='/summit-2021'>
              2021
            </Link>
            <Link className='link' to='/summit-2020'>
              2020
            </Link>
            <strong>Cloud Native eBPF Day</strong>
            <a
              target='_blank'
              className='link'
              href='https://events.linuxfoundation.org/cloud-native-ebpf-day-north-america/program/cfp/'
            >
              2022 (NA) CFP
            </a>
            <a
              target='_blank'
              className='link'
              href='https://events.linuxfoundation.org/cloud-native-ebpf-day-europe/program/schedule/'
            >
              2022 (EU)
            </a>
            <a
              target='_blank'
              className='link'
              href='https://events.linuxfoundation.org/archive/2021/cloud-native-ebpf-day-north-america/program/schedule/'
            >
              2021 (NA)
            </a>
            <strong>eBPF Track (LPC)</strong>
            <a
              target='_blank'
              className='link'
              href='https://lore.kernel.org/bpf/cd33ca74-aec9-ff57-97d5-55d8b908b0ba@iogearbox.net/'
            >
              2022 CFP
            </a>
            <a
              target='_blank'
              className='link'
              href='https://linuxplumbersconf.org/event/11/sessions/120/#all'
            >
              2021
            </a>
            <a
              target='_blank'
              className='link'
              href='https://linuxplumbersconf.org/event/7/sessions/91/#all'
            >
              2020
            </a>
            <a
              target='_blank'
              className='link'
              href='https://linuxplumbersconf.org/event/4/sessions/62/#20190911'
            >
              2019
            </a>
            <a
              target='_blank'
              className='link'
              href='http://vger.kernel.org/lpc-bpf2018.html'
            >
              2018
            </a>
            <a
              target='_blank'
              className='link'
              href='https://blog.linuxplumbersconf.org/2017/ocw/events/LPC2017/schedule.html#day_2017_09_15'
            >
              2017
            </a>
            <strong>bpfconf (LSF/MM/BPF)</strong>
            <a
              target='_blank'
              className='link'
              href='http://vger.kernel.org/bpfconf2022.html'
            >
              2022
            </a>
            <a
              target='_blank'
              className='link'
              href='http://vger.kernel.org/bpfconf2019.html'
            >
              2019
            </a>
          </span>
        </span>
        <a href='https://www.ebpf.foundation'>Foundation</a>
        <span className='select'>
          <button
            className='button'
            onClick={() => setIsCommunityMenuShown(!isCommunityMenuShown)}
            type='button'
          >
            Community
            <span
              className={`triangle${isCommunityMenuShown ? " is-shown" : ""}`}
            />
          </button>
          <span className={`list${isCommunityMenuShown ? " is-shown" : ""}`}>
            <Link className='menu-item' to='/slack'>
              Slack
            </Link>
            <a
              target='_blank'
              className='menu-item'
              href='https://stackoverflow.com/questions/tagged/ebpf'
            >
              Stack Overflow
            </a>
            <a
              target='_blank'
              className='menu-item'
              href='https://www.reddit.com/r/eBPF/'
            >
              r/eBPF
            </a>
            <a
              target='_blank'
              className='menu-item'
              href='https://cilium.io/newsletter/'
            >
              Newsletter
            </a>

            <Link className='menu-item' to='/contribute'>
              Contributing
            </Link>
          </span>
        </span>
      </nav>
    </header>
  );
};

const HeaderMobile = ({ language }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = useCallback(
    () => setIsOpen(!isOpen),
    [isOpen, setIsOpen]
  );
  const [isConferencesMenuShown, setIsConferencesMenuShown] = useState(false);
  const [isCommunityMenuShown, setIsCommunityMenuShown] = useState(false);

  return (
    <div className='header mobile'>
      <div className='row'>
        <Link to={language} className='headerLogoLink'>
          <img className='headerLogo' src={logo} width='109px' height='38px' />
        </Link>
        <div className={`menu-icon ${isOpen && "open"}`} onClick={toggleIsOpen}>
          <span />
          <span />
          <span />
        </div>
      </div>
      {isOpen && (
        <nav className='header-nav'>
          <Link to='/what-is-ebpf'>What is eBPF?</Link>
          <Link to='/blog'>Blog</Link>
          <Link to='/projects'>Project Landscape</Link>
          <span className='select'>
            <button
              className='button'
              onClick={() => setIsConferencesMenuShown(!isConferencesMenuShown)}
              type='button'
            >
              Conferences{" "}
              <span
                className={`triangle${
                  isConferencesMenuShown ? " is-shown" : ""
                }`}
              />
            </button>
            <span
              className={`list${isConferencesMenuShown ? " is-shown" : ""}`}
            >
              <strong>eBPF Summit</strong>
              <a
                target='_blank'
                className='link'
                href='https://ebpf.io/summit-2022/'
              >
                2022 CFP
              </a>
              <Link className='link' to='/summit-2021'>
                2021
              </Link>
              <Link className='link' to='/summit-2020'>
                2020
              </Link>
              <strong>Cloud Native eBPF Day</strong>
              <a
                target='_blank'
                className='link'
                href='https://events.linuxfoundation.org/cloud-native-ebpf-day-north-america/program/cfp/'
              >
                2022 (NA) CFP
              </a>
              <a
                target='_blank'
                className='link'
                href='https://events.linuxfoundation.org/cloud-native-ebpf-day-europe/program/schedule/'
              >
                2022 (EU)
              </a>
              <a
                target='_blank'
                className='link'
                href='https://events.linuxfoundation.org/archive/2021/cloud-native-ebpf-day-north-america/program/schedule/'
              >
                2021 (NA)
              </a>
              <strong>eBPF Track (LPC)</strong>
              <a
                target='_blank'
                className='link'
                href='https://lore.kernel.org/bpf/cd33ca74-aec9-ff57-97d5-55d8b908b0ba@iogearbox.net/'
              >
                2022 CFP
              </a>
              <a
                target='_blank'
                className='link'
                href='https://linuxplumbersconf.org/event/11/sessions/120/#all'
              >
                2021
              </a>
              <a
                target='_blank'
                className='link'
                href='https://linuxplumbersconf.org/event/7/sessions/91/#all'
              >
                2020
              </a>
              <a
                target='_blank'
                className='link'
                href='https://linuxplumbersconf.org/event/4/sessions/62/#20190911'
              >
                2019
              </a>
              <a
                target='_blank'
                className='link'
                href='http://vger.kernel.org/lpc-bpf2018.html'
              >
                2018
              </a>
              <a
                target='_blank'
                className='link'
                href='https://blog.linuxplumbersconf.org/2017/ocw/events/LPC2017/schedule.html#day_2017_09_15'
              >
                2017
              </a>
              <strong>bpfconf (LSF/MM/BPF)</strong>
              <a
                target='_blank'
                className='link'
                href='http://vger.kernel.org/bpfconf2022.html'
              >
                2022
              </a>
              <a
                target='_blank'
                className='link'
                href='http://vger.kernel.org/bpfconf2019.html'
              >
                2019
              </a>
            </span>
          </span>
          <a href='/slack'>Slack</a>
          <a href='https://www.ebpf.foundation'>Foundation</a>
          <span className='select'>
            <button
              className='button'
              onClick={() => setIsCommunityMenuShown(!isCommunityMenuShown)}
              type='button'
            >
              Community
              <span
                className={`triangle${isCommunityMenuShown ? " is-shown" : ""}`}
              />
            </button>
            <span className={`list${isCommunityMenuShown ? " is-shown" : ""}`}>
              <Link className='menu-item' to='/slack'>
                Slack
              </Link>
              <a
                target='_blank'
                className='menu-item'
                href='https://stackoverflow.com/questions/tagged/ebpf'
              >
                Stack Overflow
              </a>
              <a
                target='_blank'
                className='menu-item'
                href='https://www.reddit.com/r/eBPF/'
              >
                r/eBPF
              </a>
              <a
                target='_blank'
                className='menu-item'
                href='https://cilium.io/newsletter/'
              >
                Newsletter
              </a>

              <Link className='menu-item' to='/contribute'>
                Contributing
              </Link>
            </span>
          </span>
        </nav>
      )}
    </div>
  );
};

const FooterDesktop = ({ path, language, hasLanguage, setLanguage }) => {
  const [isLangMenuShown, setIsLangMenuShown] = useState(false);

  const isIndexPage = path === "/" || path === "/fr-fr/" || path === "/zh-cn/";

  const setLang = useCallback(
    (lang) => {
      setLanguage(lang);
      setIsLangMenuShown(false);
    },
    [setLanguage, setIsLangMenuShown]
  );

  const languageButtons = [];
  for (let l of languages) {
    languageButtons.push(
      <button
        key={l.name}
        className={`button${language === l.code ? " selected" : ""}`}
        onClick={() => setLang(`${l.code}`)}
        type='button'
      >
        {l.name}
      </button>
    );
  }

  return (
    <footer>
      <div className='footer-container desktop'>
        <div className='footer-items'>
          <Link to={language} className='menu-logo--link'>
            <img className='menu-logo' src={logo} width='122px' height='42px' />
          </Link>
          <div className='items-container'>
            {footerItems.map(({ title, items }, index) => (
              <ul className='items-list' key={index}>
                <span className='item-title'>{title}</span>
                {items.map(({ name, linkUrl, target }, index) => (
                  <li className='item-link' key={index}>
                    <Link to={linkUrl} target={target || ""}>
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <div className='social-container'>
            {footerIcons.map(({ icon: Icon, linkUrl }, index) => (
              <a
                className='social-link'
                target='_blank'
                key={index}
                href={linkUrl}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
        <div className='footer-bottom'>
          <div className='legal-container'>
            <span className='legal-item'>© 2022 eBPF</span>
            <Link to='/' className='legal-item'>
              Terms of Service
            </Link>
            <Link to='/' className='legal-item'>
              Privacy Policy
            </Link>
          </div>
          {hasLanguage && (
            <div className='language-select'>
              <button
                className='button'
                onClick={() => setIsLangMenuShown(!isLangMenuShown)}
                type='button'
              >
                {getLanguageName(language)}
                <span
                  className={`triangle${isLangMenuShown ? " is-shown" : ""}`}
                />
              </button>
              <span className={`list${isLangMenuShown ? " is-shown" : ""}`}>
                {languageButtons}
              </span>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};

const TemplateWrapper = ({ children, isDesktopHeaderHidden, path }) => {
  const hasLanguage = useMemo(() => {
    if (typeof window === "undefined") {
      return;
    }

    return (
      window.location.pathname === "/" ||
      window.location.pathname.includes("/fr-fr/") ||
      window.location.pathname.includes("/zh-cn/")
    );
  }, []);

  const [language, setLanguage] = useState("/");

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const mainPage =
      window.location.pathname === "/" ||
      window.location.pathname.includes("/fr-fr/") ||
      window.location.pathname.includes("/zh-cn/");

    if (mainPage) {
      if (window.location.pathname.includes("/fr-fr/")) {
        localStorage.setItem("language", "/fr-fr/");
        setLanguage("/fr-fr/");
      } else if (window.location.pathname.includes("/zh-cn/")) {
        localStorage.setItem("language", "/zh-cn/");
        setLanguage("/zh-cn/");
      } else {
        localStorage.setItem("language", "/");
        setLanguage("/");
      }
    }

    if (!mainPage) {
      setLanguage(localStorage.getItem("language") || "/");
    }
  }, []);

  const setLang = (lang) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
    navigate(window.location.pathname.replace(language, lang));
  };

  return (
    <div className='page'>
      <Helmet
        title='eBPF'
        link={[
          {
            href: "https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500;700;900&display=swap",
            rel: "stylesheet",
          },
        ]}
        meta={[
          {
            name: "name",
            content: "eBPF",
          },
          {
            name: "description",
            content:
              "eBPF is a revolutionary technology that can run sandboxed programs in the Linux kernel without changing kernel source code or loading a kernel module.",
          },
        ]}
      />
      <InfoDisclaimer />
      {!isDesktopHeaderHidden && <HeaderDesktop language={language} />}
      <HeaderMobile language={language} />
      <main>{children}</main>
      <FooterDesktop
        path={path}
        language={language}
        hasLanguage={hasLanguage}
        setLanguage={setLang}
      />
    </div>
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.node,
};

export default TemplateWrapper;
