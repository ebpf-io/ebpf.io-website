import { StaticImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';

import Link from 'components/shared/link/link';
import slugifyCategory from 'utils/slugify-category';

import bccLogo from './logos/bcc.svg';
import bumblebeeLogo from './logos/bumblebee.svg';
import calicoLogo from './logos/calico.svg';
import ciliumLogo from './logos/cilium-with-text.svg';
import ebpfForWindowsLogo from './logos/ebpf-windows.svg';
import ecaptureLogo from './logos/ecapture.svg';
import falcoLogo from './logos/falco.svg';
import gccLogo from './logos/gcc.svg';
import hbpfLogo from './logos/hbpf.svg';
import hubbleLogo from './logos/hubble.svg';
import katranLogo from './logos/katran.svg';
import keplerLogo from './logos/kepler.gif';
import kubeArmorLogo from './logos/kubearmor.svg';
import kubectlTraceLogo from './logos/kubectl_trace.svg';
import l3afLogo from './logos/l3af.svg';
import linuxLogo from './logos/linux.svg';
import llvmLogo from './logos/llvm.svg';
import merbridgeLogo from './logos/merbridge.svg';
import parcaLogo from './logos/parca.svg';
import pixieLogo from './logos/pixie.svg';
import plyLogo from './logos/ply.svg';
import pyroscopeLogo from './logos/pyroscope.svg';
import rbpfLogo from './logos/rbpf.svg';
import sysinternalsLogo from './logos/sysinternals.svg';
import traceeLogo from './logos/tracee.svg';

const logos = {
  bccLogo,
  ciliumLogo,
  falcoLogo,
  katranLogo,
  ecaptureLogo,
  pixieLogo,
  calicoLogo,
  hubbleLogo,
  kubectlTraceLogo,
  traceeLogo,
  bumblebeeLogo,
  plyLogo,
  kubeArmorLogo,
  l3afLogo,
  merbridgeLogo,
  pyroscopeLogo,
  parcaLogo,
  keplerLogo,
  sysinternalsLogo,
  linuxLogo,
  llvmLogo,
  ebpfForWindowsLogo,
  hbpfLogo,
  gccLogo,
  rbpfLogo,
  tetragonLogo: <StaticImage src="./logos/tetragon.png" alt="Tetragon" loading="lazy" />,
  loxiLBLogo: <StaticImage src="./logos/loxilb.png" alt="Loxi LB" loading="lazy" />,
  pwruLogo: <StaticImage src="./logos/pwru.png" alt="pwru" loading="lazy" />,
  wachyLogo: <StaticImage src="./logos/wachy.png" alt="wachy" loading="lazy" />,
  skywalkingLogo: <StaticImage src="./logos/skywalking.png" alt="SkyWalking" loading="lazy" />,
  pulsarLogo: <StaticImage src="./logos/pulsar.png" alt="Pulsar" loading="lazy" />,
  deepflowLogo: <StaticImage src="./logos/deepflow.png" alt="DeepFlow" loading="lazy" />,
  inspektorGadgetLogo: (
    <StaticImage src="./logos/inspektor_gadget.png" alt="Inspektor Gadget" loading="lazy" />
  ),
  bpftraceLogo: <StaticImage src="./logos/bpftrace.png" alt="bpftrace" loading="lazy" />,
  eunomiaLogo: <StaticImage src="./logos/eunomia.png" alt="Eunomia" loading="lazy" />,
  kindlingLogo: <StaticImage src="./logos/kindling.png" alt="Kindling" loading="lazy" />,
};

const Logo = ({ logo, name }) => {
  const isStaticImage = typeof logo === 'object';
  return isStaticImage ? logo : <img src={logo} alt={name} loading="lazy" />;
};

Logo.propTypes = {
  logo: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  name: PropTypes.string.isRequired,
};

const ProjectCard = ({ name, logoName, logoUrl, title, description, urls }) => {
  const Tag = logoUrl ? Link : 'div';
  const logo = logos[logoName];

  return (
    <li className="flex items-start space-x-8 pt-7 pb-10 sm:flex-col sm:space-x-0 sm:pt-6 sm:pb-7">
      {logo && logoUrl ? (
        <Tag
          className="mb-4 w-full max-w-[116px] shrink-0 sm:max-w-[90px] xs:max-w-[80px]"
          to={logoUrl}
          target="_blank"
        >
          <Logo logo={logo} name={name} />
        </Tag>
      ) : (
        <div className="w-full max-w-[116px] shrink-0 sm:max-w-[90px]" />
      )}
      <div>
        <h3 className="heading-6xl font-semibold" id={slugifyCategory(name)}>
          {name}
        </h3>
        {title && <h4 className="mt-0.5 font-sans text-lg font-medium leading-snug">{title}</h4>}

        <p className="mt-2.5" dangerouslySetInnerHTML={{ __html: description }} />
        {urls && (
          <div className="mt-3.5 flex flex-wrap gap-y-3.5 gap-x-5">
            {urls.map(({ label, url }, index) => (
              <Link
                className="relative uppercase leading-none tracking-[0.03em] before:absolute before:top-1/2 before:-right-3 before:block before:h-1 before:w-1 before:-translate-y-1/2 before:rounded-full before:bg-gray-90 last:before:hidden"
                size="sm"
                theme="black"
                to={url}
                target="_blank"
                rel="noreferrer"
                key={index}
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </li>
  );
};

ProjectCard.propTypes = {
  name: PropTypes.string.isRequired,
  logoName: PropTypes.string,
  logoUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  urls: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};

ProjectCard.defaultProps = {
  logoUrl: null,
  logoName: null,
};

export default ProjectCard;
