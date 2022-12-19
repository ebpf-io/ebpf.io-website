import React, { useState } from 'react';

import golangLogo from './assets/golang.svg';
import rustLogo from './assets/rust.svg';
import cppLogo from './assets/cpp.svg';
import cn from 'classnames';
import { TitleWithAnchor } from '../TitleWithAnchor';
import githubIcon from './assets/github-icon.svg';

const icons = {
  GitHub: githubIcon,
};

const ebpfLibraries = [
  {
    name: 'Golang',
    logo: golangLogo,
    libraries: [
      {
        label: 'Major',
        name: 'ebpf',
        description: '<a href="https://github.com/cilium/ebpf" target="_blank" rel="noreferrer noopener">eBPF</a> is designed as a pure Go library that provides utilities for loading, compiling, and debugging eBPF programs. It has minimal external dependencies and is intended to be used in long running processes.'
      },
      {
        label: 'Emerging',
        name: 'libbpfgo',
        description: '<a href="https://github.com/aquasecurity/libbpfgo" target="_blank" rel="noreferrer noopener">libbpfgo</a> is a Go wrapper around libbpf. It supports BPF CO-RE and its goal is to be a complete implementation of libbpf APIs. It uses CGo to call into linked versions of libbpf.'
      }
    ]
  },
  {
    name: 'C/C++',
    logo: cppLogo,
    libraries: [
      {
        label: 'Major',
        name: 'libbpf',
        description: '<a href="https://github.com/libbpf/libbpf" target="_blank" rel="noreferrer noopener">libbpf</a> is a C/C++ based library which is maintained as part of the upstream Linux kernel. It contains an eBPF loader which takes over processing LLVM generated eBPF ELF files for loading into the kernel. libbpf received a major boost in capabilities and sophistication and closed many existing gaps with BCC as a library. It also supports important features not available in BCC such as global variables and BPF skeletons.'
      },
    ]
  },
  {
    name: 'Rust',
    logo: rustLogo,
    libraries: [
      {
        label: 'Major',
        name: 'libbpf-rs',
        description: `<a href="https://github.com/libbpf/libbpf-rs" target="_blank" rel="noreferrer noopener">libbpf-rs</a> is a safe, idiomatic, and opinionated wrapper API around libbpf written in Rust. libbpf-rs, together with libbpf-cargo (libbpf cargo plugin) allows to write 'compile once run everywhere' (CO-RE) eBPF programs.`
      },
      {
        label: 'Major',
        name: 'redbpf',
        description: '<a href="https://github.com/redsift/redbpf" target="_blank" rel="noreferrer noopener">redbpf</a> is a Rust eBPF toolchain that contains a collection of Rust libraries to work with eBPF programs.'
      },
      {
        label: 'Emerging',
        name: 'aya',
        description: '<a href="https://github.com/aya-rs/aya" target="_blank" rel="noreferrer noopener">aya</a> is an eBPF library built with a focus on operability and developer experience. It allows for both eBPF programs and their userspace programs to be written in Rust.'
      }
    ]
  },
]

const auxiliaryLibraries = [
  {
    name: 'libxdp',
    title: 'Utilities for use with XDP',
    description: 'libxdp is an XDP-specific library that sits on top of libbpf and implements a couple of XDP features: it supports loading of multiple programs to run in sequence on the same interface, and it contains helper functions for configuring AF_XDP sockets as well as reading and writing packets from these sockets.',
    urls: [
      { label: 'GitHub', url: 'https://github.com/xdp-project/xdp-tools',},
    ],
  },
];

const LibraryItem = ({name, description, label, setSelected, selected, hasMultipleLibraries}) => {
  const handleClick = () => {
    setSelected({name, description});
  };

  return (
    <button
      type="button"
      className={cn("libraries-item-header", name === selected.name && hasMultipleLibraries && "active")}
      onClick={handleClick}
    >
      <span className="libraries-item-label">{label}</span>
      <span className="libraries-item-name">{name}</span>
    </button>
  )
}

const LibraryCard = ({name, logo, libraries}) => {
  const [selected, setSelected] = useState({name: libraries[0].name, description: libraries[0].description});
  const hasMultipleLibraries = libraries.length > 1;
  return ( 
    <li className='libraries-card'>
      <div className="libraries-logo-wrapper">
        <img className="libraries-logo" width={64} height={64} alt={name} src={logo}/>
        <span className="libraries-name">{name}</span>
      </div>
      <div className='libraries-items-wrapper'>
        <div className='libraries-items'>
          {libraries.map((item) => (
            <LibraryItem key={item.name} {...item} setSelected={setSelected} selected={selected} hasMultipleLibraries={hasMultipleLibraries}/>
          ))}
        </div>
        <div className='libraries-description' dangerouslySetInnerHTML={{__html: selected.description}}></div>
      </div>
    </li>
)} 

const AuxiliaryLibrariesCard = ({name, title, description, urls}) => {
  return (
<li className="auxiliary-libraries-box">
    <div className='auxiliary-libraries-header'>
      <TitleWithAnchor
        headerClassName="projects-common-title"
        headerTag="h3"
      >
        {name}
      </TitleWithAnchor>
        {title && <div className="project-minor-title">
          {title}
      </div>}
    </div>
    <div className='project-inner'>
      <div className={cn("auxiliary-libraries-body")}>
        <div className='project-description' dangerouslySetInnerHTML={{__html: description}}></div>
        {urls && <div className="project-links-container">
          {urls.map(({label, url}, index) => (
            <a
              className="project-link"
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
            >
              <img src={icons[label]} width={26} height={30}/>
              <b>{label}</b>
            </a>
          ))}
        </div>}
      </div>
    </div>
  </li>
  );
};

const Libraries = () => {
  return (
    <div className="libraries-container">
      <div className="libraries-inner">
        <TitleWithAnchor headerClassName="projects-title" className="projects-wrapper-title" >eBPF Libraries</TitleWithAnchor>
        <ul className='libraries-list'>
          {ebpfLibraries.map((item) => (
            <LibraryCard {...item} key={item.name}/>
          ))}
        </ul>
        <TitleWithAnchor headerClassName="projects-title" className="projects-wrapper-title" >eBPF Auxiliary Libraries</TitleWithAnchor>
        <ul>
          {auxiliaryLibraries.map((item, index) => (
            <AuxiliaryLibrariesCard {...item} key={index}/>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Libraries;
