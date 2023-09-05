const majorInfrastructure = [
  {
    logoUrl: 'https://www.kernel.org/',
    name: 'Linux Kernel',
    logoName: 'linuxLogo',
    title: 'eBPF Runtime',
    description: `The Linux kernel contains the eBPF runtime required to run eBPF
    programs. It implements the bpf(2) system call for interacting with
    programs, maps, BTF and various attachment points where eBPF
    programs can be executed from. The kernel contains a eBPF verifier
    in order to check programs for safety and a JIT compiler to
    translate programs to native machine code. User space tooling such
    as bpftool and libbpf are also maintained as part of the upstream
    kernel.`,
    urls: [
      { label: 'Git trees', url: 'https://git.kernel.org/?q=BPF+Group' },
      { label: 'Website', url: 'https://www.kernel.org/' },
      {
        label: 'Patches',
        url: 'https://patchwork.kernel.org/project/netdevbpf/list/?delegate=121173',
      },
      { label: 'Mailing list', url: 'https://lore.kernel.org/bpf/' },
      {
        label: 'Office hours',
        url: 'https://docs.google.com/spreadsheets/d/1LfrDXZ9-fdhvPEp_LHkxAMYyxxpwBXjywWa0AejEveU/edit#gid=0',
      },
      { label: 'CI', url: 'https://github.com/kernel-patches/bpf/pulls' },
      { label: 'Docs', url: 'https://www.kernel.org/doc/html/latest/bpf/' },
    ],
  },
  {
    logoUrl: 'https://llvm.org/',
    name: 'LLVM Compiler',
    logoName: 'llvmLogo',
    title: 'eBPF Backend',
    description: `The LLVM compiler infrastructure contains the eBPF backend required
    to translate programs written in a C-like syntax to eBPF
    instructions. LLVM generates eBPF ELF files which contain program
    code, map descriptions, relocation information and BTF meta data.
    These ELF files contain all necessary information for eBPF loaders
    such as libbpf to prepare and load programs into the Linux kernel.
    The LLVM project also contains additional developer tools such as an
    eBPF object file disassembler.`,
    urls: [
      { label: 'GitHub', url: 'https://github.com/llvm/llvm-project/' },
      { label: 'Website', url: 'https://llvm.org/' },
      { label: 'Compiler Explorer', url: 'https://godbolt.org/z/7PqG8sWhM' },
      { label: 'Bugtracker', url: 'https://github.com/llvm/llvm-project/labels/backend:BPF' },
      { label: 'Patches', url: 'https://reviews.llvm.org/search/query/ABG0ZPUPkDGb/#R' },
    ],
  },
  {
    logoUrl: 'https://gcc.gnu.org/',
    name: 'GCC Compiler',
    logoName: 'gccLogo',
    title: 'eBPF Backend',
    description: `The GCC compiler comes with an eBPF backend starting from GCC 10. Up to that point, LLVM has been the only compiler which supports generating eBPF ELF files. The GCC port is roughly equivalent to the LLVM eBPF support. There are some missing bits of functionality but the GCC community is working to close these gaps over time. GCC also contains eBPF binutils as well as eBPF gdb support for debugging of eBPF code that is traditionally consumed by the Linux kernel. Included as part of this is an eBPF simulator for gdb.`,
    urls: [
      { label: 'Git repo', url: 'https://gcc.gnu.org/git.html' },
      { label: 'Website', url: 'https://gcc.gnu.org/' },
      { label: 'Compiler Explorer', url: 'https://godbolt.org/z/4MdMWc9e3' },
      { label: 'Bugtracker', url: 'https://gcc.gnu.org/bugzilla/' },
      { label: 'Mailing list', url: 'https://gcc.gnu.org/lists.html' },
      { label: 'Docs', url: 'https://gcc.gnu.org/onlinedocs/gcc/eBPF-Options.html' },
    ],
  },
];

export default majorInfrastructure;
