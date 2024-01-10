const auxiliaryLibraries = [
  {
    name: 'libxdp',
    title: 'Utilities for use with XDP',
    description:
      'libxdp is an XDP-specific library that sits on top of libbpf and implements a couple of XDP features: it supports loading of multiple programs to run in sequence on the same interface, and it contains helper functions for configuring AF_XDP sockets as well as reading and writing packets from these sockets.',
    urls: [{ label: 'GitHub', url: 'https://github.com/xdp-project/xdp-tools' }],
  },
  {
    logoUrl: 'https://github.com/seladb/PcapPlusPlus',
    name: 'PcapPlusPlus',
    logoName: 'pcapplusplusLogo',
    title: 'C++ library for capturing, parsing and crafting network packets',
    description: `PcapPlusPlus is a multi-platform C++ library for capturing, parsing and crafting network packets.
    It is designed to be efficient, powerful and easy to use.
    PcapPlusPlus enables capturing and sending network packets through a variaty of packet processing engines,
    one of them is eBPF AF_XDP sockets.
    It features an easy-to-use C++ interface for creating AF_XDP sockets, making it easy to send and receive packets through them.`,
    urls: [
      { label: 'GitHub', url: 'https://github.com/seladb/PcapPlusPlus' },
      { label: 'Website', url: 'https://pcapplusplus.github.io/' },
      {
        label: 'Learn more',
        url: 'https://pcapplusplus.github.io/docs/next/features#af_xdp-support-beta',
      },
    ],
  },
];

export default auxiliaryLibraries;
