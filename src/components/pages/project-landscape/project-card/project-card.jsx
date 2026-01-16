import { StaticImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

import AnchorHeading from 'components/shared/anchor-heading';
import Link from 'components/shared/link/link';
import slugifyCategory from 'utils/slugify-category';

import alazLogo from './logos/alaz.svg';
import bccLogo from './logos/bcc.svg';
import beylaLogo from './logos/beyla.png';
import bombiniLogo from './logos/bombini.png';
import bpfilterLogo from './logos/bpfilter.svg';
import bpfireLogo from './logos/bpfire.png';
import bpfmanLogo from './logos/bpfman.svg';
import bpftoolLogo from './logos/bpftool.svg';
import bpftopLogo from './logos/bpftop.png';
import bpftraceLogo from './logos/bpftrace.png';
import bumblebeeLogo from './logos/bumblebee.svg';
import calicoLogo from './logos/calico.svg';
import carettaLogo from './logos/caretta.svg';
import ciliumLogo from './logos/cilium-with-text.svg';
import corootLogo from './logos/coroot.svg';
import daeLogo from './logos/dae.png';
import deepflowLogo from './logos/deepflow.png';
import ebpfForWindowsLogo from './logos/ebpf-windows.svg';
import ebpfcatLogo from './logos/ebpfcat.svg';
import ecaptureLogo from './logos/ecapture.svg';
import eunomiaLogo from './logos/eunomia.png';
import falcoLogo from './logos/falco.svg';
import gccLogo from './logos/gcc.svg';
import gthulhuLogo from './logos/gthulhu.svg';
import hbpfLogo from './logos/hbpf.svg';
import huatuoLogo from './logos/huatuo.jpg';
import hubbleLogo from './logos/hubble.svg';
import ingressNodeFirewallLogo from './logos/infw.jpg';
import inspektorGadgetLogo from './logos/inspektor_gadget.png';
import katranLogo from './logos/katran.svg';
import keplerLogo from './logos/kepler.gif';
import kflowLogo from './logos/kflow.png';
import kindlingLogo from './logos/kindling.png';
import kubeArmorLogo from './logos/kubearmor.svg';
import kubectlTraceLogo from './logos/kubectl_trace.svg';
import kubescapeLogo from './logos/kubescape.png';
import kubeskoopLogo from './logos/kubeskoop.svg';
import kyanosLogo from './logos/kyanos.png';
import l3afLogo from './logos/l3af.svg';
import linuxLogo from './logos/linux.svg';
import llvmLogo from './logos/llvm.svg';
import loxiLBLogo from './logos/loxilb.png';
import merbridgeLogo from './logos/merbridge.svg';
import netobservLogo from './logos/netobserv.svg';
import odigosLogo from './logos/odigos.svg';
import otelLogo from './logos/opentelemetry.svg';
import oryxLogo from './logos/oryx.svg';
import parcaLogo from './logos/parca.svg';
import pcapplusplusLogo from './logos/pcapplusplus.svg';
import pixieLogo from './logos/pixie.svg';
import plyLogo from './logos/ply.svg';
import pulsarLogo from './logos/pulsar.png';
import pwruLogo from './logos/pwru.png';
import pyroscopeLogo from './logos/pyroscope.svg';
import qtapLogo from './logos/qpoint.png';
import rbpfLogo from './logos/rbpf.svg';
import retinaLogo from './logos/retina.svg';
import skywalkingLogo from './logos/skywalking.png';
import sysinternalsLogo from './logos/sysinternals.svg';
import tetragonLogo from './logos/tetragon.svg';
import traceeLogo from './logos/tracee.svg';
import trayceLogo from './logos/trayce.svg';
import vc5Logo from './logos/vc5.svg';
import wachyLogo from './logos/wachy.png';

// Global hover modal manager
const createHoverModalManager = () => {
  let activeCardId = null;
  const listeners = new Set();

  const subscribe = (callback) => {
    listeners.add(callback);
    return () => listeners.delete(callback);
  };

  const setActiveCard = (cardId) => {
    if (activeCardId === cardId) return;
    activeCardId = cardId;
    listeners.forEach((listener) => {
      try {
        listener(cardId);
      } catch (error) {
        console.error('Error in hover modal listener:', error);
      }
    });
  };

  const getActiveCard = () => activeCardId;

  return { subscribe, setActiveCard, getActiveCard };
};

const hoverModalManager = createHoverModalManager();
const logos = {
  alazLogo,
  bccLogo,
  beylaLogo,
  bombiniLogo,
  bpfilterLogo,
  bpfmanLogo,
  bpftoolLogo,
  bpftopLogo,
  bpftraceLogo,
  bumblebeeLogo,
  calicoLogo,
  carettaLogo,
  ciliumLogo,
  corootLogo,
  daeLogo,
  deepflowLogo,
  ebpfcatLogo,
  ebpfForWindowsLogo,
  ecaptureLogo,
  eunomiaLogo,
  falcoLogo,
  gccLogo,
  hbpfLogo,
  hubbleLogo,
  huatuoLogo,
  ingressNodeFirewallLogo,
  inspektorGadgetLogo,
  katranLogo,
  keplerLogo,
  kflowLogo,
  kindlingLogo,
  kubeArmorLogo,
  kubectlTraceLogo,
  kubescapeLogo,
  kubeskoopLogo,
  kyanosLogo,
  l3afLogo,
  linuxLogo,
  llvmLogo,
  loxiLBLogo,
  merbridgeLogo,
  netobservLogo,
  odigosLogo,
  oryxLogo,
  otelLogo,
  parcaLogo,
  pcapplusplusLogo,
  pixieLogo,
  plyLogo,
  pulsarLogo,
  pwruLogo,
  pyroscopeLogo,
  qtapLogo,
  rbpfLogo,
  retinaLogo,
  skywalkingLogo,
  sysinternalsLogo,
  tetragonLogo,
  traceeLogo,
  trayceLogo,
  gthulhuLogo,
  vc5Logo,
  wachyLogo,
  bpftoolLogo,
  corootLogo,
  alazLogo,
  qtapLogo,
  bpfilterLogo,
  bpfireLogo,
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

const Logo = ({ logo, name, viewMode }) => {
  const isStaticImage = typeof logo === 'object';
  const size = viewMode === 'grid' ? { width: 64, height: 64 } : { width: 116, height: 116 };

  return isStaticImage ? (
    React.cloneElement(logo, {
      width: size.width,
      height: size.height,
    })
  ) : (
    <img src={logo} alt={name} loading="lazy" width={size.width} height={size.height} />
  );
};

Logo.propTypes = {
  logo: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  name: PropTypes.string.isRequired,
  viewMode: PropTypes.oneOf(['grid', 'card']),
};

Logo.defaultProps = {
  viewMode: 'grid',
};

// Helper function to get icon for different link types
const getLinkIcon = (label) => {
  const lowerLabel = label.toLowerCase();

  if (lowerLabel.includes('github')) {
    return (
      <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  if (
    lowerLabel.includes('website') ||
    lowerLabel.includes('site') ||
    lowerLabel.includes('home')
  ) {
    return (
      <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
        />
      </svg>
    );
  }

  if (lowerLabel.includes('doc') || lowerLabel.includes('documentation')) {
    return (
      <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    );
  }

  if (lowerLabel.includes('download') || lowerLabel.includes('release')) {
    return (
      <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    );
  }

  // Default external link icon
  return (
    <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  );
};

// ProjectModal Component
const ProjectModal = ({ project, onClose }) => {
  const logo = logos[project.logoName];

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const handleClickOutside = (e) => {
      if (e.target.classList.contains('modal-backdrop')) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('click', handleClickOutside);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  const renderLogo = () => {
    const isStaticImage = typeof logo === 'object';

    if (isStaticImage) {
      return React.cloneElement(logo, {
        width: 80,
        height: 80,
      });
    }

    return logo ? (
      <img src={logo} alt={project.name} loading="lazy" width={80} height={80} />
    ) : (
      <></>
    );
  };

  return (
    <div
      className="modal-backdrop fixed inset-0 bg-black/70 backdrop-blur-md z-[9999] flex items-center justify-center p-4"
      style={{ zIndex: 9999 }}
    >
      <div className="bg-white rounded-3xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden animate-in zoom-in-95 duration-300 relative z-[10000]">
        {/* Header */}
        <div className="flex items-start justify-between p-10 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
          <div className="flex items-start space-x-8">
            <div className="shrink-0 p-2 bg-white rounded-2xl shadow-sm">{renderLogo()}</div>
            <div className="min-w-0 flex-1">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
                {project.name}
              </h2>
              {project.title && (
                <p className="text-xl text-gray-600 font-medium leading-relaxed mb-4">
                  {project.title}
                </p>
              )}
            </div>
          </div>
          <button
            className="p-3 hover:bg-red-50 hover:text-red-600 rounded-xl transition-all duration-200 shrink-0 text-gray-400"
            aria-label="Close modal"
            onClick={onClose}
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-10 overflow-y-auto max-h-[60vh]">
          <div className="space-y-10">
            {/* Description */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <svg
                  className="w-6 h-6 mr-3 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                About
              </h3>
              <div
                className="text-gray-700 leading-relaxed prose prose-lg max-w-none text-lg"
                dangerouslySetInnerHTML={{ __html: project.description }}
              />
            </div>

            {/* Links */}
            {project.urls && project.urls.length > 0 && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13.213 9.787a3.391 3.391 0 0 0-4.795 0l-3.425 3.426a3.39 3.39 0 0 0 4.795 4.794l.321-.304m-.321-4.49a3.39 3.39 0 0 0 4.795 0l3.424-3.426a3.39 3.39 0 0 0-4.794-4.795l-1.028.961"
                    />
                  </svg>
                  Resources
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {project.urls.map(({ label, url }, index) => (
                    <Link
                      key={index}
                      to={url}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center space-x-4 p-5 border-2 border-gray-200 hover:border-blue-400 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-100/50 hover:scale-105 hover:-translate-y-1 transform"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300">
                        {getLinkIcon(label)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors duration-300 text-lg">
                          {label}
                        </span>
                      </div>
                      <svg
                        className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

ProjectModal.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    logoName: PropTypes.string,
    logoUrl: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string.isRequired,
    urls: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      })
    ),
    githubStars: PropTypes.number,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

const Heading = AnchorHeading('h3');

const ProjectCard = ({
  name,
  logoName,
  logoUrl,
  title,
  description,
  urls,
  viewMode,
  githubStars,
}) => {
  const logo = logos[logoName];
  const slug = slugifyCategory(name);
  const cardId = `${name}-${slug}`; // this is a unique identifier for card item to isolate their behaviours
  const projectData = { name, logoName, logoUrl, title, description, urls, githubStars };
  const [showModal, setShowModal] = useState(false);
  const [showHoverModal, setShowHoverModal] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    const unsubscribe = hoverModalManager.subscribe((activeCardId) => {
      setShowHoverModal(activeCardId === cardId);
    });

    return unsubscribe;
  }, [cardId]);

  const handleProjectClick = () => {
    if (isLargeScreen) {
      hoverModalManager.setActiveCard(null);
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleMouseEnter = () => {
    if (isLargeScreen && !showModal) {
      hoverModalManager.setActiveCard(cardId);
    }
  };

  const handleHoverModalMouseLeave = () => {
    hoverModalManager.setActiveCard(null);
  };

  if (viewMode === 'grid') {
    return (
      <>
        <div
          className="group relative bg-white border border-dashed border-gray-80 rounded-lg p-4 hover:shadow-lg transition-all duration-200 cursor-pointer h-40 flex flex-col"
          id={slug}
          onClick={handleProjectClick}
          onMouseEnter={handleMouseEnter}
        >
          <div className="text-center flex-1 flex flex-col justify-between">
            <div className="flex-1 flex flex-col justify-center items-center">
              {logo ? (
                <div className="mb-2 flex justify-center items-center h-16 w-16">
                  <Logo logo={logo} name={name} viewMode="grid" />
                </div>
              ) : (
                <div className="w-16 h-16 bg-gray-100 rounded-lg mx-auto mb-2" />
              )}
            </div>
            <div className="mt-auto">
              <h3 className="font-semibold text-sm text-gray-900 mb-1 line-clamp-2 leading-tight">
                {name}
              </h3>
              {title && (
                <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">{title}</p>
              )}
            </div>
          </div>

          {/* Hover Modal */}
          {isLargeScreen && showHoverModal && !showModal && (
            <div
              className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 bg-white border border-gray-200 rounded-xl shadow-xl z-[10001] w-80"
              onMouseLeave={handleHoverModalMouseLeave}
            >
              <div className="p-5">
                <div className="flex items-start space-x-4 mb-4">
                  {logo ? (
                    <div className="shrink-0 w-12 h-12">
                      {typeof logo === 'object' ? (
                        React.cloneElement(logo, { width: 48, height: 48 })
                      ) : (
                        <img src={logo} alt={name} width={48} height={48} className="rounded-lg" />
                      )}
                    </div>
                  ) : (
                    <div className="w-12 h-12 bg-gray-100 rounded-lg shrink-0" />
                  )}
                  <div className="min-w-0 flex-1">
                    <h4 className="font-bold text-lg text-gray-900 mb-1">{name}</h4>
                    {title && (
                      <p className="text-sm text-gray-600 font-medium leading-relaxed">{title}</p>
                    )}
                  </div>
                </div>

                <div className="mb-4">
                  <div
                    className="text-sm text-gray-700 leading-relaxed line-clamp-3"
                    dangerouslySetInnerHTML={{
                      __html:
                        description?.substring(0, 150) + (description?.length > 150 ? '...' : ''),
                    }}
                  />
                </div>

                {/* Resource Icons */}
                {urls && urls.length > 0 && (
                  <div className="mb-4">
                    <div className="flex items-center space-x-2">
                      {urls.map(({ label, url }, index) => (
                        <Link
                          key={index}
                          to={url}
                          target="_blank"
                          rel="noreferrer"
                          className="group p-2 hover:bg-yellow-100 rounded-lg transition-all duration-200 hover:scale-110"
                          title={label}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <div className="group-hover:text-yellow-600 transition-colors duration-200">
                            {getLinkIcon(label)}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-b-6 border-transparent border-b-white" />
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-b-6 border-transparent border-b-gray-200 translate-y-px" />
            </div>
          )}
        </div>

        {showModal && isLargeScreen && (
          <ProjectModal project={projectData} onClose={handleCloseModal} />
        )}
      </>
    );
  }

  return (
    <>
      <li
        className="flex items-start space-x-8 pb-10 pt-7 sm:flex-col sm:space-x-0 sm:pb-7 sm:pt-6 cursor-pointer transition-colors duration-200 rounded-lg"
        id={slug}
        onClick={handleProjectClick}
      >
        {logo ? (
          <div className="mb-4 w-full max-w-[116px] shrink-0 sm:max-w-[90px] xs:max-w-[80px]">
            <Logo logo={logo} name={name} viewMode="card" />
          </div>
        ) : (
          <div className="w-full max-w-[116px] shrink-0 sm:max-w-[90px]">
            <div className="w-full h-[116px] bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center" />
          </div>
        )}
        <div className="flex-1 min-w-0">
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
                  onClick={(e) => e.stopPropagation()}
                >
                  {label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </li>

      {showModal && isLargeScreen && (
        <ProjectModal project={projectData} onClose={handleCloseModal} />
      )}
    </>
  );
};

ProjectCard.propTypes = {
  name: PropTypes.string.isRequired,
  logoName: PropTypes.string,
  logoUrl: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string.isRequired,
  urls: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
  viewMode: PropTypes.oneOf(['grid', 'card']),
  githubStars: PropTypes.number,
};

ProjectCard.defaultProps = {
  logoUrl: null,
  logoName: null,
  title: null,
  urls: null,
  viewMode: 'card',
  githubStars: null,
};

export default ProjectCard;
