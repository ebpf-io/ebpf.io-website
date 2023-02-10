import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Footer from 'components/shared/footer';
import Header from 'components/shared/header';
import MobileMenu from 'components/shared/mobile-menu';
import TopBanner from 'components/shared/top-banner';

const headerMenu = [
  {
    text: 'What is eBPF?',
    to: '/what-is-ebpf',
  },
  {
    text: 'Blog',
    to: '/blog',
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
    text: 'Conferences',
    items: [
      {
        text: 'eBPF Summit',
        items: [
          {
            text: '2022',
            to: '/summit-2022.html',
          },
          {
            text: '2021',
            to: '/summit-2021.html',
          },
          {
            text: '2020',
            to: '/summit-2020.html',
          },
        ],
      },
      {
        text: 'Cloud Native eBPF Day',
        items: [
          {
            text: '2022 (NA)',
            to: 'https://events.linuxfoundation.org/cloud-native-ebpf-day-north-america/program/schedule/',
          },
          {
            text: '2022 (EU)',
            to: 'https://events.linuxfoundation.org/cloud-native-ebpf-day-europe/program/schedule/',
          },
          {
            text: '2021 (NA)',
            to: 'https://events.linuxfoundation.org/archive/2021/cloud-native-ebpf-day-north-america/program/schedule/',
          },
        ],
      },
      {
        text: 'eBPF Track (LPC)',
        items: [
          {
            text: '2022',
            to: 'https://lpc.events/event/16/sessions/131/#all',
          },
          {
            text: '2021',
            to: 'https://linuxplumbersconf.org/event/11/sessions/120/#all',
          },
          {
            text: '2020',
            to: 'https://linuxplumbersconf.org/event/7/sessions/91/#all',
          },
          {
            text: '2019',
            to: 'https://linuxplumbersconf.org/event/4/sessions/62/#20190911',
          },
          {
            text: '2018',
            to: 'http://vger.kernel.org/lpc-bpf2018.html',
          },
          {
            text: '2017',
            to: 'https://blog.linuxplumbersconf.org/2017/ocw/events/LPC2017/schedule.html#day_2017_09_15',
          },
        ],
      },
      {
        text: 'bpfconf (LSF/MM/BPF)',
        items: [
          {
            text: '2022',
            to: 'http://vger.kernel.org/bpfconf2022.html',
          },
          {
            text: '2019',
            to: 'http://vger.kernel.org/bpfconf2019.html',
          },
        ],
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
      },
      {
        text: 'r/eBPF',
        to: 'https://www.reddit.com/r/eBPF/',
      },
      {
        text: 'eCHO',
        to: 'https://github.com/isovalent/eCHO',
      },
      {
        text: 'Case Studies',
        to: '/case-studies',
      },
      {
        text: 'Contribute',
        to: '/contribute',
      },
      {
        text: 'Newsletter',
        to: '/newsletter',
      },
    ],
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
    <div className="flex min-h-screen flex-col">
      <TopBanner />
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
