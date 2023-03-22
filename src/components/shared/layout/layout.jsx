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
            target: '_blank',
          },
          {
            text: '2022 (EU)',
            to: 'https://events.linuxfoundation.org/cloud-native-ebpf-day-europe/program/schedule/',
            target: '_blank',
          },
          {
            text: '2021 (NA)',
            to: 'https://events.linuxfoundation.org/archive/2021/cloud-native-ebpf-day-north-america/program/schedule/',
            target: '_blank',
          },
        ],
      },
      {
        text: 'eBPF Track (LPC)',
        items: [
          {
            text: '2022',
            to: 'https://lpc.events/event/16/sessions/131/#all',
            target: '_blank',
          },
          {
            text: '2021',
            to: 'https://linuxplumbersconf.org/event/11/sessions/120/#all',
            target: '_blank',
          },
          {
            text: '2020',
            to: 'https://linuxplumbersconf.org/event/7/sessions/91/#all',
            target: '_blank',
          },
          {
            text: '2019',
            to: 'https://linuxplumbersconf.org/event/4/sessions/62/#20190911',
            target: '_blank',
          },
          {
            text: '2018',
            to: 'http://vger.kernel.org/lpc-bpf2018.html',
            target: '_blank',
          },
          {
            text: '2017',
            to: 'https://blog.linuxplumbersconf.org/2017/ocw/events/LPC2017/schedule.html#day_2017_09_15',
            target: '_blank',
          },
        ],
      },
      {
        text: 'bpfconf (LSF/MM/BPF)',
        items: [
          {
            text: '2023 (CFP)',
            to: 'https://lore.kernel.org/bpf/Y7hDVliKq+PzY1yY@localhost.localdomain/',
            target: '_blank',
          },
          {
            text: '2022',
            to: 'http://vger.kernel.org/bpfconf2022.html',
            target: '_blank',
          },
          {
            text: '2019',
            to: 'http://vger.kernel.org/bpfconf2019.html',
            target: '_blank',
          },
        ],
      },
      {
        text: 'BPF Meetups at IETF',
        items: [
          {
            text: '2023 (IETF 116)',
            to: 'https://datatracker.ietf.org/group/bpf/meetings/',
            target: '_blank',
          },
          {
            text: '2022 (IETF 115)',
            to: 'https://lore.kernel.org/bpf/DM4PR21MB3440837AE8F54F8E6EA5D475A3119@DM4PR21MB3440.namprd21.prod.outlook.com/',
            target: '_blank',
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
        target: '_blank',
      },
      {
        text: 'r/eBPF',
        to: 'https://www.reddit.com/r/eBPF/',
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
