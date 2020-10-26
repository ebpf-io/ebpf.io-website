import { Link } from "gatsby";
import "prismjs/themes/prism.css";
import PropTypes from "prop-types";
import React from "react";
import Helmet from "react-helmet";
import "./footer.scss";
import "./header.scss";
import "./index.css";
import "./menu-icon.scss";

const InfoDisclaimer = () => (
  <div className="introDisclaimer">
    <strong>eBPF Summit 2020 - Virtual - Oct 28-29, 2020</strong> - Registration now open. <a href="/summit-2020" style={{color: '#947927'}}>Click here</a>.
  </div>
)

const HeaderDesktop = () => (
  <div className="header desktop">
    <Link to="/" className="headerLogoLink">
      <img className="headerLogo" src={require("../assets/logo.png")} />
    </Link>
    <nav className="headerNav">
      <Link to="/what-is-ebpf">What is eBPF?</Link>
      <Link to="/projects">Projects</Link>
      <a href="/slack">Slack</a>
      <Link to="/contribute">Contribute</Link>
      <a href="https://www.cilium.io">
        <img src={require("../assets/cilium_logo.png")} height="50px" />
      </a>
    </nav>
  </div>
);

class HeaderMobile extends React.Component {
  state = {
    opened: false,
  };

  onMenuIconClick = () =>
    this.setState((prevState) => ({
      opened: !prevState.opened,
    }));

  render() {
    const { opened } = this.state;
    return (
      <div className="header mobile">
        <div className="row">
          <Link to="/" className="headerLogoLink">
            <img className="headerLogo" src={require("../assets/logo.png")} />
          </Link>
          <div
            className={`menu-icon ${opened && "open"}`}
            onClick={this.onMenuIconClick}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        {opened && (
          <nav className="headerNav">
            <Link to="/what-is-ebpf">What is eBPF?</Link>
            <Link to="/projects">Projects</Link>
            <a href="/slack">Slack</a>
            <Link to="/contribute">Contribute</Link>
            <a href="https://www.cilium.io">
              <img src={require("../assets/cilium_logo.png")} height="50px" />
            </a>
          </nav>
        )}
      </div>
    );
  }
}

const FooterDesktop = () => (
  <div className="footer desktop">
    <div className="section">
      <div className="items">
        <Link to="/what-is-ebpf" className="item">
          What is eBPF?
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

const TemplateWrapper = ({ children, isBannerHidden, isDesktopHeaderHidden }) => (
  <div>
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
    {!isBannerHidden && <InfoDisclaimer />}
    {!isDesktopHeaderHidden && <HeaderDesktop />}
    <HeaderMobile />
    <div>{children}</div>
    <FooterDesktop />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
