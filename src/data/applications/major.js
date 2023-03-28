const majorApplications = [
  {
    logoUrl: 'https://github.com/iovisor/bcc',
    name: 'bcc',
    logoName: 'bccLogo',
    title: 'Toolkit and library for efficient BPF-based kernel tracing',
    description: `BCC is a toolkit for creating efficient kernel
    tracing and manipulation programs built upon eBPF, and includes
    several useful command-line tools and examples. BCC eases writing of
    eBPF programs for kernel instrumentation in C, includes a wrapper
    around LLVM, and front-ends in Python and Lua. It also provides a
    high-level library for direct integration into applications.`,
    urls: [{ label: 'GitHub', url: 'https://github.com/iovisor/bcc' }],
  },
  {
    logoUrl: 'https://github.com/cilium/cilium',
    name: 'Cilium',
    logoName: 'ciliumLogo',
    title: 'eBPF-based Networking, Security, and Observability',
    description: `Cilium is an open source project that provides
    eBPF-powered networking, security and observability. It has been
    specifically designed from the ground up to bring the advantages of
    eBPF to the world of Kubernetes and to address the new scalability,
    security and visibility requirements of container workloads.`,
    urls: [
      { label: 'GitHub', url: 'https://github.com/cilium/cilium' },
      { label: 'Website', url: 'https://cilium.io' },
    ],
  },
  {
    logoUrl: 'https://github.com/iovisor/bpftrace',
    name: 'bpftrace',
    logoName: 'bpftraceLogo',
    title: 'High-level tracing language for Linux eBPF',
    description: `bpftrace is a high-level tracing language for Linux eBPF. Its
    language is inspired by awk and C, and predecessor tracers such as
    DTrace and SystemTap. bpftrace uses LLVM as a backend to compile
    scripts to eBPF bytecode and makes use of BCC as a library for
    interacting with the Linux eBPF subsystem as well as existing Linux
    tracing capabilities and attachment points.`,
    urls: [
      { label: 'GitHub', url: 'https://github.com/iovisor/bpftrace' },
      { label: 'Website', url: 'https://bpftrace.org/' },
    ],
  },
  {
    logoUrl: 'https://github.com/falcosecurity/falco',
    name: 'Falco',
    logoName: 'falcoLogo',
    title: 'Cloud Native Runtime Security',
    description: `Falco is a behavioral activity monitor designed to detect anomalous
    activity in applications. Falco audits a system at the Linux kernel
    layer with the help of eBPF. It enriches gathered data with other
    input streams such as container runtime metrics and Kubernetes
    metrics, and allows to continuously monitor and detect container,
    application, host, and network activity.`,
    urls: [
      { label: 'GitHub', url: 'https://github.com/falcosecurity/falco' },
      { label: 'Website', url: 'https://falco.org/' },
    ],
  },
  {
    logoUrl: 'https://github.com/facebookincubator/katran',
    name: 'Katran',
    logoName: 'katranLogo',
    title: 'A high performance layer 4 load balancer',
    description: `Katran is a C++ library and eBPF program to build a high-performance
    layer 4 load balancing forwarding plane. Katran leverages the XDP
    infrastructure from the Linux kernel to provide an in-kernel
    facility for fast packet processing. Its performance scales linearly
    with the number of NIC's receive queues and it uses RSS friendly
    encapsulation for forwarding to L7 load balancers.`,
    urls: [
      { label: 'GitHub', url: 'https://github.com/facebookincubator/katran' },
      {
        label: 'Website',
        url: 'https://engineering.fb.com/open-source/open-sourcing-katran-a-scalable-network-load-balancer/',
      },
    ],
  },
  {
    logoUrl: 'https://github.com/pixie-io/pixie',
    name: 'Pixie',
    logoName: 'pixieLogo',
    title: 'Scriptable observability for Kubernetes',
    description: `Pixie is an open source observability tool for Kubernetes
    applications. Pixie uses eBPF to automatically capture telemetry
    data without the need for manual instrumentation. Developers can use
    Pixie to view the high-level state of their cluster (service maps,
    cluster resources, application traffic) and also drill down into
    more detailed views (pod state, flame graphs, individual full body
    application requests).`,
    urls: [
      { label: 'GitHub', url: 'https://github.com/pixie-io/pixie' },
      { label: 'Website', url: 'https://px.dev' },
    ],
  },
  {
    logoUrl: 'https://github.com/projectcalico/calico',
    name: 'Calico',
    logoName: 'calicoLogo',
    title: 'Pluggable eBPF-based networking and security for containers and Kubernetes',
    description: `Calico Open Source is designed to simplify, scale, and secure container 
    and Kubernetes networks. Calico's eBPF dataplane utilizes the power, speed, and efficiency 
    of eBPF programs to deliver networking, load-balancing, and in-kernel security 
    enforcement for your environment.`,
    urls: [
      { label: 'GitHub', url: 'https://github.com/projectcalico/calico' },
      { label: 'Website', url: 'https://tigera.io/project-calico' },
    ],
  },
];

export default majorApplications;
