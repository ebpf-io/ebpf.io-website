import Helmet from "react-helmet";
import Layout from "../layouts";
import React from "react";

import "../stylesheets/index.scss";
import Google from "../assets/case-studies/google.inline.svg";
import Netflix from "../assets/case-studies/netflix.inline.svg";
import Cloudflare from "../assets/case-studies/cloudflare.inline.svg";
import Meta from "../assets/case-studies/meta.inline.svg";
import Ikea from "../assets/case-studies/ikea.inline.svg";
import Android from "../assets/case-studies/android.inline.svg";
import Datadog from "../assets/case-studies/datadog.inline.svg";
import Alibaba from "../assets/case-studies/alibaba.inline.svg";
import Seznam from "../assets/case-studies/seznam.inline.svg";
import Trip from "../assets/case-studies/trip.inline.svg";
import Bell from "../assets/case-studies/bell.inline.svg";
import Wildlife from "../assets/case-studies/wildlife.inline.svg";
import CapitalOne from "../assets/case-studies/capital-one.inline.svg";
import Sky from "../assets/case-studies/sky.inline.svg";
import Apple from "../assets/case-studies/apple.inline.svg";
import Walmart from "../assets/case-studies/walmart.inline.svg";
import Palantir from "../assets/case-studies/palantir.inline.svg";
import Cruise from "../assets/case-studies/cruise.inline.svg";
import DigitalOcean from "../assets/case-studies/digital-ocean.inline.svg";
import Yahoo from "../assets/case-studies/yahoo.inline.svg";
import Bytedance from "../assets/case-studies/byte-dance.inline.svg";
import F5 from "../assets/case-studies/f5.inline.svg";

const cardsData = [
  {
    Logo: Google,
    description:
      "<strong>Google</strong> uses eBPF for security auditing, packet processing, and performance monitoring",
    links: [
      {
        name: "Video 1",
        href: "https://www.youtube.com/watch?v=URm_q9ylxBk",
      },
      {
        name: "Video 2",
        href: "https://www.youtube.com/watch?v=XFJw37Vwzcc&t=657s",
      },
      {
        name: "Talk 1",
        href: "https://legacy.netdevconf.info/0x14/session.html?talk-replacing-HTB-with-EDT-and-BPF",
      },
      {
        name: "Talk 2",
        href: "https://lpc.events/event/11/contributions/954/",
      },
    ],
  },
  {
    Logo: Netflix,
    description:
      "<strong>Netflix</strong> uses eBPF at scale for network insights",
    links: [
      {
        name: "Blog",
        href: "https://netflixtechblog.com/how-netflix-uses-ebpf-flow-logs-at-scale-for-network-insight-e3ea997dca96 https://youtu.be/bGAVrtb_tFs",
      },
    ],
  },
  {
    Logo: Cloudflare,
    description:
      "<strong>Cloudflare</strong> uses eBPF through XDP for DDoS mitigation and load balancing",
    links: [
      {
        name: "Blog",
        href: "https://blog.cloudflare.com/tag/ebpf/",
      },
      {
        name: "Talk",
        href: "https://legacy.netdevconf.info/0x13/session.html?talk-XDP-based-DDoS-mitigation",
      },
    ],
  },
  {
    Logo: Meta,
    description:
      "<strong>Meta</strong> uses eBPF to process and load balance every packet coming into their data centers",
    links: [
      {
        name: "Video",
        href: "https://www.youtube.com/watch?v=ZYBXZFKPS28",
      },
      {
        name: "Blog 1",
        href: "https://engineering.fb.com/2018/05/22/open-source/open-sourcing-katran-a-scalable-network-load-balancer/",
      },
      {
        name: "Blog 2",
        href: "https://engineering.fb.com/2018/10/30/open-source/linux/",
      },
      {
        name: "Talk 1",
        href: "https://lpc.events/event/16/contributions/1363/",
      },
      {
        name: "Talk 2",
        href: "https://lpc.events/event/11/contributions/950/",
      },
    ],
  },
  {
    Logo: Ikea,
    description:
      "<strong>Ikea</strong> uses eBPF through Cilium for networking and load balancing in their private cloud",
    links: [
      {
        name: "Video",
        href: "https://www.youtube.com/watch?v=sg-F_R-ZVNc",
      },
    ],
  },
  {
    Logo: Android,
    description:
      "<strong>Android</strong> uses eBPF to monitor network usage, power, and memory profiling",
    links: [
      {
        name: "Docs",
        href: "https://source.android.com/docs/core/architecture/kernel/bpf",
      },
    ],
  },
  {
    Logo: Datadog,
    description:
      "<strong>Datadog</strong> uses eBPF for networking and security in their SaaS product",
    links: [
      {
        name: "Video",
        href: "https://datadogon.datadoghq.com/episodes/datadog-on-ebpf/",
      },
    ],
  },
  {
    Logo: Alibaba,
    description:
      "<strong>Alibaba</strong> uses eBPF through Cilium to provide networking in their cloud",
    links: [
      {
        name: "Blog",
        href: "https://www.alibabacloud.com/blog/how-does-alibaba-cloud-build-high-performance-cloud-native-pod-networks-in-production-environments_596590",
      },
    ],
  },
  {
    Logo: Seznam,
    description: "<strong>Seznam</strong> uses eBPF for load balancing",
    links: [
      {
        name: "Blog",
        href: "https://cilium.io/blog/2022/04/12/cilium-standalone-L4LB-XDP/",
      },
    ],
  },
  {
    Logo: Trip,
    description: "<strong>Trip.com</strong> uses eBPF for load balancing",
    links: [
      {
        name: "Blog",
        href: "https://cilium.io/blog/2020/02/05/how-trip-com-uses-cilium/",
      },
    ],
  },
  {
    Logo: Bell,
    description:
      "<strong>Bell</strong> Canada uses eBPF to moderize telco networking with SRv6",
    links: [
      {
        name: "Video 1",
        href: "https://www.youtube.com/watch?v=fNtG0iHYne4",
      },
      {
        name: "Video 2",
        href: "https://www.youtube.com/watch?v=vJaOKGWiyvU",
      },
    ],
  },
  {
    Logo: Wildlife,
    description:
      "<strong>Wildlife Studios</strong> uses eBPF through Cilium for high performance game networking",
    links: [
      {
        name: "Blog",
        href: "https://cilium.io/blog/2020/09/03/wildlife-studios-multi-cluster-gaming-platform",
      },
    ],
  },
  {
    Logo: CapitalOne,
    description:
      "<strong>Capital One</strong> uses eBPF to secure their cloud infrastructure",
    links: [
      {
        name: "Video",
        href: "https://www.youtube.com/watch?v=hwOpCKBaJ-w&ab_channel=eBPFSummit",
      },
    ],
  },
  {
    Logo: Sky,
    description:
      "<strong>Sky</strong> uses eBPF through Cilium for cloud networking",
    links: [
      {
        name: "Video",
        href: "https://www.youtube.com/watch?v=u-4naOMfs_w",
      },
    ],
  },
  {
    Logo: Apple,
    description:
      "<strong>Apple</strong> uses eBPF through Falco for kernel security monitoring",
    links: [
      {
        name: "Video",
        href: "https://www.youtube.com/watch?v=ZBlJSr6XkN8",
      },
    ],
  },
  {
    Logo: Walmart,
    description:
      "<strong>Walmart</strong> uses eBPF for edge cloud load balancing",
    links: [
      {
        name: "Video 1",
        href: "https://youtu.be/Fu4L8ewcO70",
      },
      {
        name: "Video 2",
        href: "https://youtu.be/thmAcyix8FM",
      },
    ],
  },
  {
    Logo: Palantir,
    description:
      "<strong>Palantir</strong> uses eBPF to debug networking problems",
    links: [
      {
        name: "Video",
        href: "https://youtu.be/0RDp1IPxbg0",
      },
    ],
  },
  {
    Logo: Cruise,
    description: "<strong>Cruise</strong> uses eBPF to monitor GPU performance",
    links: [
      {
        name: "Video",
        href: "https://youtu.be/7bdy2AkRjqE",
      },
    ],
  },
  {
    Logo: DigitalOcean,
    description:
      "<strong>Digital Ocean</strong> uses eBPF to monitor GPU performance",
    links: [
      {
        name: "Video",
        href: "https://youtu.be/gcHxfhDT-I4",
      },
    ],
  },
  {
    Logo: Yahoo,
    description:
      "<strong>Yahoo</strong> uses eBPF for load balancing and performance analysis",
    links: [
      {
        name: "Video 1",
        href: "https://youtu.be/-C86fBMcp5Q",
      },
      {
        name: "Video 2",
        href: "https://www.usenix.org/conference/lisa21/presentation/jones-zachary",
      },
    ],
  },
  {
    Logo: Bytedance,
    description: "<strong>Bytedance</strong> uses eBPF for system tracing",
    links: [
      {
        name: "Blog",
        href: "https://inf.news/en/tech/3313635d67f796ae38e7ef64061bc7c4.html",
      },
    ],
  },
  {
    Logo: F5,
    description:
      "<strong>F5</strong> BIG-IP integration with Cilium VTEP feature",
    links: [
      {
        name: "Video",
        href: "https://youtu.be/EfmdjrQLFFg",
      },
      {
        name: "Guide",
        href: "https://github.com/f5devcentral/f5-ci-docs/blob/master/docs/cilium/cilium-bigip-info.rst",
      },
    ],
  },
];

const CaseCard = ({ Logo, description, links }) => (
  <div className="case-studies-card">
    <div className="card-logo">
      <Logo />
    </div>
    <div className="card-info">
      <p
        className="card-description"
        dangerouslySetInnerHTML={{ __html: description }}
      />
      <div className="card-links">
        <div className="links-shift">
          {links.map((item) => (
            <a
              className="card-link"
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Page = () => (
  <Layout>
    <Helmet title="" />
    <div className="page-projects">
      <div className="project-content-wrapper">
        <h1 className="case-studies-title">eBPF Case Studies</h1>
        <p className="case-studies-description">
          Here are some of the organizations that are using eBPF in production.
          If you’re using eBPF and aren’t on this list, please submit a pull
          request. PR should link to the page on github once it is created.
        </p>
        <div className="case-studies-wrapper">
          {cardsData.map((item, i) => (
            <CaseCard key={i} {...item} />
          ))}
        </div>
      </div>
    </div>
  </Layout>
);

export default Page;
