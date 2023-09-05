const emergingInfrastructure = [
  {
    logoUrl: 'https://github.com/microsoft/ebpf-for-windows',
    name: 'eBPF for Windows',
    logoName: 'ebpfForWindowsLogo',
    title: 'eBPF Runtime',
    description: `The eBPF for Windows project is a work-in-progress that allows using
    existing eBPF toolchains and APIs familiar in the eBPF ecosystem to
    be used on top of Windows. That is, this project takes existing eBPF
    projects as submodules and adds the layer in between to make them
    run on top of Windows.`,
    urls: [
      { label: 'GitHub', url: 'https://github.com/microsoft/ebpf-for-windows' },
      { label: 'Website', url: 'https://microsoft.github.io/ebpf-for-windows/' },
      {
        label: 'Office hours',
        url: 'https://github.com/microsoft/ebpf-for-windows/discussions/427',
      },
      { label: 'Slack channel', url: 'https://cilium.slack.com/archives/C0210QTK2MV' },
    ],
  },
  {
    name: 'uBPF',
    title: 'Userspace eBPF Runtime',
    description: `An eBPF runtime that permits execution of
    eBPF programs in user mode, with support for an interpreter as well as JIT
    compilation of eBPF programs on x86-64 and ARM64 architectures. This project
    supports running on Windows, macOS, and Linux platforms.`,
    urls: [{ label: 'GitHub', url: 'https://github.com/iovisor/ubpf' }],
  },
  {
    logoUrl: 'https://github.com/qmonnet/rbpf/',
    name: 'rbpf',
    logoName: 'rbpfLogo',
    title: 'User Space eBPF Runtime',
    description: `Running in user space, rbpf provides a cross-platform eBPF
    interpreter and a JIT-compiler for x86-64, implemented in Rust. It was
    initially a port of uBPF to Rust.`,
    urls: [
      { label: 'GitHub', url: 'https://github.com/qmonnet/rbpf/' },
      { label: 'Crate', url: 'https://crates.io/crates/rbpf' },
      { label: 'Docs', url: 'https://docs.rs/rbpf/latest/rbpf/' },
    ],
  },
  {
    logoUrl: 'https://github.com/rprinz08/hBPF',
    name: 'hBPF',
    logoName: 'hbpfLogo',
    title: 'eBPF in Hardware',
    description: `An extended Berkley Packet Filter CPU implemented in hardware on
    FPGA. In contrast to classic HDL languages like Verilog or VHDL,
    Migen/LiteX (both based on Python) where used. Supports custom
    extensions to 'call' opcode and includes full test suite for each
    opcode for included emulator and simulator as well as for included
    hardware targets.`,
    urls: [
      { label: 'GitHub', url: 'https://github.com/rprinz08/hBPF' },
      { label: 'Website', url: 'https://www.min.at/hbpf/' },
    ],
  },
  {
    name: 'PREVAIL',
    title: 'eBPF Verifier',
    description: `A polynomial-time eBPF verifier supporting bounded loops  based on abstract interpretation.`,
    urls: [{ label: 'GitHub', url: 'https://github.com/vbpf/ebpf-verifier' }],
  },
  {
    name: 'BPF Conformance',
    title: 'eBPF Conformance Testing Framework',
    description: `A conformance testing framework for eBPF runtime implementations. It
    provides a set of tests that can be used to verify that an eBPF
    implementation is compliant with the eBPF specification.`,
    urls: [{ label: 'GitHub', url: 'https://github.com/Alan-Jowett/bpf_conformance' }],
  },
];

export default emergingInfrastructure;
