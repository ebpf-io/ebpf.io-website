import { StaticImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';

import AnchorHeading from 'components/shared/anchor-heading';
import Link from 'components/shared/link/link';
import slugifyCategory from 'utils/slugify-category';

import alazLogo from './logos/alaz.svg';
import bccLogo from './logos/bcc.svg';
import beylaLogo from './logos/beyla.png';
import blixtLogo from './logos/blixt.png';
import bpfmanLogo from './logos/bpfman.svg';
import bpftoolLogo from './logos/bpftool.svg';
import bpftopLogo from './logos/bpftop.png';
import bumblebeeLogo from './logos/bumblebee.svg';
import calicoLogo from './logos/calico.svg';
import carettaLogo from './logos/caretta.svg';
import ciliumLogo from './logos/cilium-with-text.svg';
import corootLogo from './logos/coroot.svg';
import daeLogo from './logos/dae.png';
import ebpfForWindowsLogo from './logos/ebpf-windows.svg';
import ecaptureLogo from './logos/ecapture.svg';
import falcoLogo from './logos/falco.svg';
import gccLogo from './logos/gcc.svg';
import hbpfLogo from './logos/hbpf.svg';
import hubbleLogo from './logos/hubble.svg';
import ingressNodeFirewallLogo from './logos/infw.jpg';
import katranLogo from './logos/katran.svg';
import keplerLogo from './logos/kepler.gif';
import kubeArmorLogo from './logos/kubearmor.svg';
import kubectlTraceLogo from './logos/kubectl_trace.svg';
import kubescapeLogo from './logos/kubeskape.png';
import kubeskoopLogo from './logos/kubeskoop.svg';
import kyanosLogo from './logos/kyanos.png';
import l3afLogo from './logos/l3af.svg';
import linuxLogo from './logos/linux.svg';
import llvmLogo from './logos/llvm.svg';
import merbridgeLogo from './logos/merbridge.svg';
import netobservLogo from './logos/netobserv.svg';
import otelLogo from './logos/opentelemetry.svg';
import vc5Logo from './logos/vc5.svg';
import parcaLogo from './logos/parca.svg';
import pcapplusplusLogo from './logos/pcapplusplus.svg';
import pixieLogo from './logos/pixie.svg';
import plyLogo from './logos/ply.svg';
import pyroscopeLogo from './logos/pyroscope.svg';
import rbpfLogo from './logos/rbpf.svg';
import retinaLogo from './logos/retina.svg';
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
  kubescapeLogo,
  l3afLogo,
  merbridgeLogo,
  netobservLogo,
  pyroscopeLogo,
  parcaLogo,
  keplerLogo,
  bpfmanLogo,
  blixtLogo,
  daeLogo,
  sysinternalsLogo,
  carettaLogo,
  linuxLogo,
  llvmLogo,
  ebpfForWindowsLogo,
  otelLogo,
  vc5Logo,
  hbpfLogo,
  gccLogo,
  rbpfLogo,
  retinaLogo,
  bpftoolLogo,
  corootLogo,
  alazLogo,
  tetragonLogo: (
    <StaticImage
      src="./logos/tetragon.svg"
      alt="Tetragon"
      loading="lazy"
      width={116}
      height={116}
    />
  ),
  loxiLBLogo: (
    <StaticImage src="./logos/loxilb.png" alt="Loxi LB" loading="lazy" width={116} height={116} />
  ),
  pwruLogo: (
    <StaticImage src="./logos/pwru.png" alt="pwru" loading="lazy" width={116} height={116} />
  ),
  wachyLogo: (
    <StaticImage src="./logos/wachy.png" alt="wachy" loading="lazy" width={116} height={116} />
  ),
  skywalkingLogo: (
    <StaticImage
      src="./logos/skywalking.png"
      alt="SkyWalking"
      loading="lazy"
      width={116}
      height={116}
    />
  ),
  pulsarLogo: (
    <StaticImage src="./logos/pulsar.png" alt="Pulsar" loading="lazy" width={116} height={116} />
  ),
  deepflowLogo: (
    <StaticImage
      src="./logos/deepflow.png"
      alt="DeepFlow"
      loading="lazy"
      width={116}
      height={116}
    />
  ),
  inspektorGadgetLogo: (
    <StaticImage
      src="./logos/inspektor_gadget.png"
      alt="Inspektor Gadget"
      loading="lazy"
      width={116}
      height={116}
    />
  ),
  bpftraceLogo: (
    <StaticImage
      src="./logos/bpftrace.png"
      alt="bpftrace"
      loading="lazy"
      width={116}
      height={116}
    />
  ),
  eunomiaLogo: (
    <StaticImage src="./logos/eunomia.png" alt="Eunomia" loading="lazy" width={116} height={116} />
  ),
  kindlingLogo: (
    <StaticImage
      src="./logos/kindling.png"
      alt="Kindling"
      loading="lazy"
      width={116}
      height={116}
    />
  ),
  odigosLogo: (
    <StaticImage src="./logos/odigos.svg" alt="Odigos" loading="lazy" width={116} height={116} />
  ),
  ingressNodeFirewallLogo,
  beylaLogo,
  pcapplusplusLogo,
  bpftopLogo,
  kubeskoopLogo,
  kflowLogo: (
    <StaticImage src="./logos/kflow.png" alt="kflow" loading="lazy" width={116} height={116} />
  ),
  kyanosLogo,
};

const Logo = ({ logo, name }) => {
  const isStaticImage = typeof logo === 'object';
  return isStaticImage ? (
    logo
  ) : (
    <img src={logo} alt={name} loading="lazy" width={116} height={116} />
  );
};

Logo.propTypes = {
  logo: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  name: PropTypes.string.isRequired,
};

const Heading = AnchorHeading('h3');

const ProjectCard = ({ name, logoName, logoUrl, title, description, urls }) => {
  const Tag = logoUrl ? Link : 'div';
  const logo = logos[logoName];
  const slug = slugifyCategory(name);

  return (
    <li
      className="flex items-start space-x-8 pb-10 pt-7 sm:flex-col sm:space-x-0 sm:pb-7 sm:pt-6"
      id={slug}
    >
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
        <Heading className="heading-6xl font-semibold" id={slug}>
          {name}
        </Heading>
        {title && <h4 className="mt-0.5 font-sans text-lg font-medium leading-snug">{title}</h4>}

        <p className="mt-2.5" dangerouslySetInnerHTML={{ __html: description }} />
        {urls && (
          <div className="mt-3.5 flex flex-wrap gap-x-5 gap-y-3.5">
            {urls.map(({ label, url }, index) => (
              <Link
                className="relative uppercase leading-none tracking-[0.03em] before:absolute before:-right-3 before:top-1/2 before:block before:h-1 before:w-1 before:-translate-y-1/2 before:rounded-full before:bg-gray-90 last:before:hidden"
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
