const auxiliaryLibraries = [
  {
    name: 'libxdp',
    title: 'Utilities for use with XDP',
    description:
      'libxdp is an XDP-specific library that sits on top of libbpf and implements a couple of XDP features: it supports loading of multiple programs to run in sequence on the same interface, and it contains helper functions for configuring AF_XDP sockets as well as reading and writing packets from these sockets.',
    urls: [{ label: 'GitHub', url: 'https://github.com/xdp-project/xdp-tools' }],
  },
];

export default auxiliaryLibraries;
