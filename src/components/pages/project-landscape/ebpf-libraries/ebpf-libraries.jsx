import React from 'react';

import AnchorHeading from 'components/shared/anchor-heading';
import slugifyCategory from 'utils/slugify-category';

import CPlusPlusIcon from './images/cplusplus.inline.svg';
import GoIcon from './images/go.inline.svg';
import RustIcon from './images/rust.inline.svg';

const title = 'eBPF Libraries';

const items = [
  {
    name: 'Golang',
    icon: GoIcon,
    list: [
      '<a href="https://github.com/cilium/ebpf" target="_blank" rel="noopener noreferrer">eBPF</a> is designed as a pure Go library that provides utilities for loading, compiling, and debugging eBPF programs. It has minimal external dependencies and is intended to be used in long running processes.',
      '<a href="https://github.com/aquasecurity/libbpfgo" target="_blank" rel="noopener noreferrer">libbpfgo</a> is a Go wrapper around libbpf. It supports BPF CO-RE and its goal is to be a complete implementation of libbpf APIs. It uses CGo to call into linked versions of libbpf.',
    ],
  },
  {
    name: 'C++',
    icon: CPlusPlusIcon,
    list: [
      '<a href="https://github.com/libbpf/libbpf" target="_blank" rel="noopener noreferrer">libbpf</a> is a C/C++ based library which is maintained as part of the upstream Linux kernel. It contains an eBPF loader which takes over processing LLVM generated eBPF ELF files for loading into the kernel. libbpf received a major boost in capabilities and sophistication and closed many existing gaps with BCC as a library. It also supports important features not available in BCC such as global variables and BPF skeletons.',
    ],
  },
  {
    name: 'Rust',
    icon: RustIcon,
    list: [
      `<a href="https://github.com/libbpf/libbpf-rs" target="_blank" rel="noopener noreferrer">libbpf-rs</a> is a safe, idiomatic, and opinionated wrapper API around libbpf written in Rust. libbpf-rs, together with libbpf-cargo (libbpf cargo plugin) allows to write 'compile once run everywhere' (CO-RE) eBPF programs.`,
      '<a href="https://github.com/redsift/redbpf" target="_blank" rel="noopener noreferrer">redbpf</a> is a Rust eBPF toolchain that contains a collection of Rust libraries to work with eBPF programs.',
      '<a href="https://github.com/aya-rs/aya" target="_blank" rel="noopener noreferrer">aya</a> is an eBPF library built with a focus on operability and developer experience. It allows for both eBPF programs and their userspace programs to be written in Rust.',
    ],
  },
];

const Heading = AnchorHeading('h2');

const EbpfLibraries = () => {
  const slug = slugifyCategory(title);

  return (
    <section className="libraries safe-paddings pt-32 lg:pt-28 md:pt-20" id={slug}>
      <div className="container">
        <div className="rounded-lg border border-secondary-blue-1 bg-secondary-blue-1-light p-16 lg:p-12 md:px-8">
          <div className="w-full text-center">
            <Heading
              className="heading-9xl inline-flex text-center font-bold leading-dense"
              id={slug}
            >
              {title}
            </Heading>
          </div>
          <ul className="mt-12 flex divide-x divide-dashed divide-secondary-blue-2 divide-opacity-30 lg:mt-10 md:mt-8 md:flex-col md:divide-x-0 md:divide-y">
            {items.map(({ name, icon: Icon, list }, index) => (
              <li
                className="flex-1 px-8 first:pl-0 last:pr-0 lg:px-6 md:px-0 md:py-6 md:first:pt-0 md:last:pb-0"
                key={index}
              >
                <div className="flex items-center">
                  <Icon className="h-11 w-auto pr-4" />
                  <h3 className="heading-6xl border-l border-secondary-blue-2 pl-4 font-semibold leading-none">
                    {name}
                  </h3>
                </div>
                <ul className="mt-7 lg:mt-6 md:mt-5">
                  {list.map((item, index) => (
                    <li
                      className="with-primary-blue-link mt-4 first:mt-0"
                      key={index}
                      dangerouslySetInnerHTML={{ __html: item }}
                    />
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default EbpfLibraries;
