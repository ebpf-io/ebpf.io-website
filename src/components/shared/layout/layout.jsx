import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Footer from 'components/shared/footer';
import Header from 'components/shared/header';
import MobileMenu from 'components/shared/mobile-menu';
import TopBanner from 'components/shared/top-banner';

const headerMenu = [
  {
    text: 'Learn',
    items: [
      {
        text: 'What is eBPF?',
        to: '/what-is-ebpf',
      },
      {
        text: 'Get Started',
        to: '/get-started',
      },
      {
        text: 'Case Studies',
        to: '/case-studies',
      },
    ],
  },
  {
    text: 'Project Landscape',
    items: [
      {
        text: 'Applications',
        to: '/applications',
      },
      {
        text: 'Infrastructure',
        to: '/infrastructure',
      },
    ],
  },

  {
    text: 'Events',
    items: [
      {
        text: 'Overview',
        to: '/events?eventtype=Conference',
      },
      {
        text: 'eBPF Summit',
        to: '/events?conference=eBPF%20Summit',
      },
      {
        text: 'eBPF Track (LPC)',
        to: '/events?conference=eBPF%20Track%20%28LPC%29',
      },
      {
        text: 'bpfconf (LSF/MM/BPF)',
        to: '/events?conference=bpfconf%20%28LSF%2FMM%2FBPF%29',
      },
      {
        text: 'BPF Meetups at IETF',
        to: '/events?conference=BPF%20Meetups%20at%20IETF',
      },
    ],
  },
  {
    text: 'Community',
    items: [
      {
        text: 'Slack',
        to: 'https://ebpf.io/slack',
      },
      {
        text: 'Stack Overflow',
        to: 'https://stackoverflow.com/questions/tagged/ebpf+or+bpf+or+xdp-bpf+or+xdp-ebpf+or+bcc-bpf+or+libbpf+or+bpftrace',
        target: '_blank',
      },
      {
        text: 'r/eBPF',
        to: 'https://www.reddit.com/r/eBPF/',
        target: '_blank',
      },
      {
        text: 'Wikipedia',
        to: 'https://en.wikipedia.org/wiki/EBPF',
        target: '_blank',
      },
      {
        text: 'eCHO',
        to: 'https://github.com/isovalent/eCHO',
        target: '_blank',
      },
      {
        text: 'Newsletter',
        to: '/newsletter',
      },
      {
        text: 'Contribute',
        to: '/contribute',
      },
    ],
  },
  {
    text: 'Blog',
    to: '/blog',
  },
  {
    text: 'Events',
    to: '/events',
  },
  {
    text: 'Foundation',
    to: 'https://ebpf.foundation/',
  },
];

const Layout = ({ children, headerWithFullWidthBottomBorder }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleHeaderBurgerClick = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <TopBanner />
      <div className="relative flex min-h-screen flex-col">
        <Header
          items={headerMenu}
          isMobileMenuOpen={isMobileMenuOpen}
          fullWidthBottomBorder={headerWithFullWidthBottomBorder}
          onBurgerClick={handleHeaderBurgerClick}
        />
        <main className="flex-grow">{children}</main>
        <Footer />
        <MobileMenu isOpen={isMobileMenuOpen} items={headerMenu} />
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  headerWithFullWidthBottomBorder: PropTypes.bool,
};

Layout.defaultProps = {
  headerWithFullWidthBottomBorder: false,
};

export default Layout;
