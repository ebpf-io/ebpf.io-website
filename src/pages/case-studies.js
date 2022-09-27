import Helmet from "react-helmet";
import Layout from "../layouts";
import React from "react";

import "../stylesheets/index.scss";
import Google from "../assets/case-studies/google.svg";
import Netflix from "../assets/case-studies/netflix.svg";
import Cloudflare from "../assets/case-studies/cloudflare.svg";
import Meta from "../assets/case-studies/meta.svg";
import Ikea from "../assets/case-studies/ikea.svg";
import Android from "../assets/case-studies/android.svg";
import Datadog from "../assets/case-studies/datadog.svg";
import Alibaba from "../assets/case-studies/alibaba.svg";
import Seznam from "../assets/case-studies/seznam.svg";
import Trip from "../assets/case-studies/trip.svg";
import Bell from "../assets/case-studies/bell.svg";
import Wildlife from "../assets/case-studies/wildlife.svg";
import CapitalOne from "../assets/case-studies/capital-one.svg";
import Sky from "../assets/case-studies/sky.svg";
import Apple from "../assets/case-studies/apple.svg";
import Walmart from "../assets/case-studies/walmart.svg";
import Palantir from "../assets/case-studies/palantir.svg";
import Cruise from "../assets/case-studies/cruise.svg";
import DigitalOcean from "../assets/case-studies/digital-ocean.svg";
import Yahoo from "../assets/case-studies/yahoo.svg";
import Bytedance from "../assets/case-studies/byte-dance.svg";
import F5 from "../assets/case-studies/f5.svg";

const cardsData = [
  {
    logo: Google,
    description: [
      "Google",
      " uses eBPF for security auditing, packet processing, and performance monitoring",
    ],
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
    logo: Netflix,
    description: ["Netflix", " uses eBPF at scale for network insights"],
    links: [
      {
        name: "Blog",
        href: "https://netflixtechblog.com/how-netflix-uses-ebpf-flow-logs-at-scale-for-network-insight-e3ea997dca96 https://youtu.be/bGAVrtb_tFs",
      },
    ],
  },
  {
    logo: Cloudflare,
    description: [
      "Cloudflare",
      " uses eBPF through XDP for DDoS mitigation and load balancing",
    ],
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
    logo: Meta,
    description: [
      "Meta",
      " uses eBPF to process and load balance every packet coming into their data centers",
    ],
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
    logo: Ikea,
    description: [
      "Ikea",
      " uses eBPF through Cilium for networking and load balancing in their private cloud",
    ],
    links: [
      {
        name: "Video",
        href: "https://www.youtube.com/watch?v=sg-F_R-ZVNc",
      },
    ],
  },
  {
    logo: Android,
    description: [
      "Android",
      " uses eBPF to monitor network usage, power, and memory profiling",
    ],
    links: [
      {
        name: "Docs",
        href: "https://source.android.com/docs/core/architecture/kernel/bpf",
      },
    ],
  },
  {
    logo: Datadog,
    description: [
      "Datadog",
      " uses eBPF for networking and security in their SaaS product",
    ],
    links: [
      {
        name: "Video",
        href: "https://datadogon.datadoghq.com/episodes/datadog-on-ebpf/",
      },
    ],
  },
  {
    logo: Alibaba,
    description: [
      "Alibaba",
      " uses eBPF through Cilium to provide networking in their cloud",
    ],
    links: [
      {
        name: "Blog",
        href: "https://www.alibabacloud.com/blog/how-does-alibaba-cloud-build-high-performance-cloud-native-pod-networks-in-production-environments_596590",
      },
    ],
  },
  {
    logo: Seznam,
    description: ["Seznam", " uses eBPF for load balancing"],
    links: [
      {
        name: "Blog",
        href: "https://cilium.io/blog/2022/04/12/cilium-standalone-L4LB-XDP/",
      },
    ],
  },
  {
    logo: Trip,
    description: ["Trip.com", " uses eBPF for load balancing"],
    links: [
      {
        name: "Blog",
        href: "https://cilium.io/blog/2020/02/05/how-trip-com-uses-cilium/",
      },
    ],
  },
  {
    logo: Bell,
    description: [
      "Bell",
      " Canada uses eBPF to moderize telco networking with SRv6",
    ],
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
    logo: Wildlife,
    description: [
      "Wildlife Studios",
      " uses eBPF through Cilium for high performance game networking",
    ],
    links: [
      {
        name: "Blog",
        href: "https://cilium.io/blog/2020/09/03/wildlife-studios-multi-cluster-gaming-platform",
      },
    ],
  },
  {
    logo: CapitalOne,
    description: [
      "Capital One",
      " uses eBPF to secure their cloud infrastructure",
    ],
    links: [
      {
        name: "Video",
        href: "https://www.youtube.com/watch?v=hwOpCKBaJ-w&ab_channel=eBPFSummit",
      },
    ],
  },
  {
    logo: Sky,
    description: ["Sky", " uses eBPF through Cilium for cloud networking"],
    links: [
      {
        name: "Video",
        href: "https://www.youtube.com/watch?v=u-4naOMfs_w",
      },
    ],
  },
  {
    logo: Apple,
    description: [
      "Apple",
      " uses eBPF through Falco for kernel security monitoring",
    ],
    links: [
      {
        name: "Video",
        href: "https://www.youtube.com/watch?v=ZBlJSr6XkN8",
      },
    ],
  },
  {
    logo: Walmart,
    description: ["Walmart", " uses eBPF for edge cloud load balancing"],
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
    logo: Palantir,
    description: ["Palantir", " uses eBPF to debug networking problems"],
    links: [
      {
        name: "Video",
        href: "https://youtu.be/0RDp1IPxbg0",
      },
    ],
  },
  {
    logo: Cruise,
    description: ["Cruise", " uses eBPF to monitor GPU performance"],
    links: [
      {
        name: "Video",
        href: "https://youtu.be/7bdy2AkRjqE",
      },
    ],
  },
  {
    logo: DigitalOcean,
    description: ["Digital Ocean", " uses eBPF to monitor GPU performance"],
    links: [
      {
        name: "Video",
        href: "https://youtu.be/gcHxfhDT-I4",
      },
    ],
  },
  {
    logo: Yahoo,
    description: [
      "Yahoo",
      " uses eBPF for load balancing and performance analysis",
    ],
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
    logo: Bytedance,
    description: ["Bytedance", " uses eBPF for system tracing"],
    links: [
      {
        name: "Blog",
        href: "https://inf.news/en/tech/3313635d67f796ae38e7ef64061bc7c4.html",
      },
    ],
  },
  {
    logo: F5,
    description: ["F5", " BIG-IP integration with Cilium VTEP feature"],
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

const CaseCard = ({ logo, description, links }) => (
  <div className="case-studies-card">
    <div className="card-logo">
      <img src={logo} />
    </div>
    <div className="card-info">
      <p className="card-description">
        {description.map((item, i) =>
          i === 0 ? <strong>{item}</strong> : <>{item}</>
        )}
      </p>
      <div className="card-links">
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
