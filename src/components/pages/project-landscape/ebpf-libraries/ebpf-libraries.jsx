import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import AnchorHeading from 'components/shared/anchor-heading';
import Link from 'components/shared/link';
import slugifyCategory from 'utils/slugify-category';

import { defaultLanguage } from '../../../../../config/languages';

import ayaLogo from './images/aya-logo.png';
import CPlusPlusIcon from './images/cplusplus-logo.svg';
import ebpfLogo from './images/ebpf-logo.png';
import GoIcon from './images/go-logo.svg';
import libbpfLogo from './images/libbpf-logo.png';
import libbpfgoLogo from './images/libbpfgo-logo.png';
import RustIcon from './images/rust-logo.svg';

const title = {
  en: 'eBPF Libraries',
  'fr-fr': 'Bibliothèques eBPF',
  pt: 'Bibliotecas eBPF',
  'pt-br': 'Bibliotecas eBPF',
  'it-it': 'Librerie eBPF',
  'zh-cn': 'eBPF 库',
  sw: 'Maktaba za eBPF',
  'zh-tw': 'eBPF 函式庫'
};

const items = [
  {
    name: 'C++',
    icon: {
      src: CPlusPlusIcon,
      width: 35,
      height: 40,
    },
    list: [
      {
        name: 'libbpf',
        linkUrl: 'https://github.com/libbpf/libbpf',
        logo: libbpfLogo,
        description:
          'is a C/C++ based library which is maintained as part of the upstream Linux kernel. It contains an eBPF loader which takes over processing LLVM generated eBPF ELF files for loading into the kernel. libbpf received a major boost in capabilities and sophistication and closed many existing gaps with BCC as a library. It also supports important features not available in BCC such as global variables and BPF skeletons.',
      },
    ],
  },
  {
    name: 'Golang',
    icon: {
      src: GoIcon,
      width: 76,
      height: 40,
    },
    list: [
      {
        name: 'eBPF',
        linkUrl: 'https://github.com/cilium/ebpf',
        logo: ebpfLogo,
        description:
          'is designed as a pure Go library that provides utilities for loading, compiling, and debugging eBPF programs. It has minimal external dependencies and is intended to be used in long running processes.',
      },
      {
        name: 'libbpfgo',
        linkUrl: 'https://github.com/aquasecurity/libbpfgo',
        logo: libbpfgoLogo,
        description:
          'is a Go wrapper around libbpf. It supports BPF CO-RE and its goal is to be a complete implementation of libbpf APIs. It uses CGo to call into linked versions of libbpf.',
      },
    ],
  },
  {
    name: 'Rust',
    icon: {
      src: RustIcon,
      width: 40,
      height: 40,
    },
    list: [
      {
        name: 'aya',
        linkUrl: 'https://github.com/aya-rs/aya',
        logo: ayaLogo,
        description:
          'is an eBPF library built with a focus on operability and developer experience. It allows for both eBPF programs and their userspace programs to be written in Rust.',
      },
      {
        name: 'libbpf-rs',
        linkUrl: 'https://github.com/libbpf/libbpf-rs',
        description: `is a safe, idiomatic, and opinionated wrapper API around libbpf written in Rust. libbpf-rs, together with libbpf-cargo (libbpf cargo plugin) allows to write 'compile once run everywhere' (CO-RE) eBPF programs.`,
      },
    ],
  },
];

const Heading = AnchorHeading('h2');

const EbpfLibraries = ({ lang }) => {
  const slug = slugifyCategory(title.en);

  return (
    <section className="libraries safe-paddings pt-32 lg:pt-28 md:pt-20" id={slug}>
      <div className="container">
        <div className="rounded-lg bg-secondary-yellow-light p-16 lg:p-12 md:px-8 sm:px-5">
          <Heading
            className="heading-9xl mx-auto inline-block font-bold leading-dense tracking-wide"
            id={slug}
          >
            {title[lang]}
          </Heading>
          <ul className="mt-10 grid grid-cols-12 gap-7 lg:gap-6 md:mt-8">
            {items.map(({ name, icon, list }, index) => (
              <li
                className="col-span-4 flex flex-col overflow-hidden rounded bg-white md:col-span-full"
                key={index}
              >
                <div className="flex items-center justify-center bg-black bg-infrastructure-item-gradient py-6">
                  <img {...icon} className="h-10" loading="lazy" />
                  <h3 className="heading-6xl ml-3.5 border-l border-white border-opacity-50 pl-3.5 font-semibold leading-none tracking-wide text-white">
                    {name}
                  </h3>
                </div>
                <ul className="flex grow flex-col gap-y-6 rounded-b border-b border-l border-r border-[#F7F3D4] p-7 pb-6 lg:p-6 md:p-5">
                  {list.map(({ logo, name, linkUrl, description }, index) => (
                    <li
                      className={clsx(
                        'flex flex-col gap-y-3.5',
                        index + 1 < list.length && 'border-b border-dashed border-gray-80 pb-6'
                      )}
                      key={index}
                    >
                      {logo && (
                        <img
                          src={logo}
                          className="h-14"
                          width={144}
                          height={56}
                          loading="lazy"
                          alt={name}
                        />
                      )}
                      <p>
                        <Link
                          className="w-fit font-medium after:hidden"
                          to={linkUrl}
                          target="_blank"
                          theme="black"
                          rel="noopener noreferrer"
                        >
                          {name}
                        </Link>{' '}
                        {description}
                      </p>
                    </li>
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

EbpfLibraries.propTypes = {
  lang: PropTypes.string,
};

EbpfLibraries.defaultProps = {
  lang: defaultLanguage,
};

export default EbpfLibraries;
