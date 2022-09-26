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
import CaptialOne from "../assets/case-studies/capital-one.svg";
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
      " uses eBPF for security auditing, packet processing, and performance monitoring in its data centers",
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
    logo: CaptialOne,
    description: [
      "Captial One",
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
    description: ["Apple", " uses eBPF for edge cloud load balancing"],
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

const CaseCard = () => (
  <div className="case-studies-card">
    <div className="card-logo">
      <svg
        width="105"
        height="34"
        viewBox="0 0 105 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.8066 0H14.7314C17.9421 0.0699066 21.1005 1.36318 23.3689 3.65262C22.5313 4.50897 21.6763 5.33038 20.8562 6.18673C19.5824 5.03327 18.0468 4.14196 16.3716 3.82738C13.8938 3.30309 11.224 3.77495 9.14751 5.19056C6.87907 6.67608 5.3435 9.19271 5.01196 11.8841C4.64552 14.5406 5.39585 17.3368 7.12336 19.3991C8.78107 21.4089 11.3113 22.6672 13.9287 22.7546C16.3716 22.8944 18.9193 22.1429 20.6991 20.4302C22.0951 19.2243 22.7407 17.3893 22.9501 15.6066C20.0535 15.6066 17.1569 15.6241 14.2602 15.6066V12.0065H26.4575C27.0857 15.8688 26.1783 20.2205 23.2468 22.9818C21.2924 24.9392 18.5877 26.0926 15.8307 26.3198C13.1609 26.582 10.4039 26.0752 8.03074 24.7819C5.18646 23.2614 2.91801 20.6923 1.80124 17.6689C0.75426 14.8901 0.736811 11.7443 1.71399 8.94804C2.60392 6.39645 4.31398 4.14196 6.51263 2.56907C8.62403 1.01365 11.1891 0.15729 13.8066 0Z"
          fill="#3780FF"
        />
        <path
          d="M83.7754 0.909183H87.5096V25.8658C86.2707 25.8658 85.0143 25.8833 83.7754 25.8483C83.7928 17.5469 83.7754 9.22806 83.7754 0.909183Z"
          fill="#38B137"
        />
        <path
          d="M34.7631 9.55933C37.0664 9.12241 39.5617 9.61176 41.4637 10.9924C43.1912 12.2158 44.3952 14.1382 44.7617 16.2354C45.2328 18.6647 44.6395 21.3211 43.0691 23.2435C41.3765 25.3932 38.602 26.5466 35.8973 26.3719C33.4194 26.232 31.0114 24.9912 29.5456 22.9639C27.8879 20.7269 27.4866 17.651 28.394 15.0295C29.3013 12.2158 31.8664 10.0662 34.7631 9.55933ZM35.2866 12.8799C34.3443 13.1246 33.4718 13.6663 32.8436 14.4353C31.151 16.4626 31.2557 19.7657 33.1228 21.6532C34.1872 22.7367 35.7926 23.2435 37.2758 22.9464C38.6543 22.7018 39.8583 21.7755 40.5214 20.5521C41.6731 18.4724 41.3416 15.6062 39.5792 13.9809C38.4449 12.9323 36.7872 12.4954 35.2866 12.8799Z"
          fill="#FA3913"
        />
        <path
          d="M53.2615 9.55964C55.8964 9.05281 58.7756 9.78683 60.7474 11.6394C63.9581 14.523 64.3071 19.9233 61.5675 23.2438C59.9098 25.341 57.2225 26.4945 54.5702 26.3722C52.04 26.3023 49.5447 25.0439 48.0441 22.9642C46.3514 20.6748 45.985 17.529 46.9447 14.8551C47.9045 12.1287 50.4172 10.049 53.2615 9.55964ZM53.785 12.8802C52.8427 13.1249 51.9702 13.6666 51.342 14.4181C49.6669 16.4105 49.7367 19.6611 51.534 21.5661C52.5984 22.7021 54.2561 23.2613 55.7917 22.9467C57.1527 22.6846 58.3742 21.7758 59.0373 20.5524C60.1715 18.4552 59.84 15.5891 58.0601 13.9638C56.9259 12.9152 55.2682 12.4957 53.785 12.8802Z"
          fill="#FCBD06"
        />
        <path
          d="M68.9474 10.5728C70.9541 9.31453 73.6239 8.96499 75.7876 10.0485C76.4682 10.3456 77.0265 10.8525 77.5675 11.3593C77.5849 10.8874 77.5675 10.3981 77.5849 9.90873C78.7541 9.92621 79.9232 9.90873 81.1098 9.92621V25.3406C81.0923 27.665 80.499 30.1292 78.8239 31.8244C76.9916 33.6944 74.1823 34.2712 71.6521 33.8867C68.9474 33.4847 66.5917 31.5099 65.5447 29.0107C66.5917 28.5039 67.691 28.1019 68.7729 27.63C69.3836 29.0631 70.6226 30.2865 72.1756 30.5661C73.7286 30.8457 75.5259 30.4613 76.538 29.168C77.6198 27.8398 77.6198 26.0222 77.5675 24.3969C76.7648 25.1833 75.84 25.8824 74.7232 26.1445C72.2977 26.8261 69.6279 25.9872 67.7608 24.3444C65.8763 22.7016 64.7595 20.1675 64.8642 17.6509C64.9165 14.8022 66.5219 12.0584 68.9474 10.5728ZM72.5595 12.8099C71.495 12.9846 70.5004 13.5788 69.8199 14.4002C68.1796 16.3576 68.1796 19.4859 69.8373 21.4084C70.7796 22.5443 72.2977 23.1735 73.7635 23.0162C75.142 22.8764 76.4158 22.0026 77.0963 20.7967C78.248 18.7519 78.0561 15.9731 76.5031 14.1905C75.5433 13.0895 74.0078 12.5477 72.5595 12.8099Z"
          fill="#3780FF"
        />
        <path
          d="M91.9992 11.4653C94.0932 9.50792 97.3214 8.84381 100.009 9.87493C102.556 10.8361 104.179 13.2654 104.999 15.7646C101.213 17.3375 97.4435 18.8929 93.6569 20.4658C94.1804 21.4619 94.9831 22.3707 96.065 22.7377C97.5831 23.2795 99.3979 23.0873 100.672 22.0736C101.178 21.6891 101.579 21.1823 101.963 20.693C102.923 21.3396 103.882 21.9688 104.842 22.6154C103.481 24.6602 101.195 26.0933 98.7348 26.3204C96.0126 26.6525 93.116 25.6039 91.3536 23.4718C88.457 20.1162 88.7362 14.4888 91.9992 11.4653ZM93.8663 14.6985C93.2731 15.5548 93.0288 16.6034 93.0462 17.6346C95.5764 16.586 98.1066 15.5374 100.637 14.4713C100.218 13.4926 99.2059 12.8984 98.1764 12.7411C96.5187 12.444 94.7912 13.3353 93.8663 14.6985Z"
          fill="#FA3913"
        />
      </svg>
    </div>
    <div className="card-info">
      <p className="card-description">
        <strong>Google</strong> uses eBPF for security auditing, packet
        processing, and performance monitoring
      </p>
      <div className="card-links">
        <a className="card-link" href="#">
          Video 1
        </a>
        <a className="card-link" href="#">
          Video 2
        </a>
        <a className="card-link" href="#">
          Video 3
        </a>
      </div>
    </div>
  </div>
);

const Page = () => (
  <Layout>
    <Helmet title="" />
    <div className="page-projects">
      <div className="project-content-wrapper">
        <h1 className="projects-title faq-title">eBPF Case Studies</h1>
        <p className="case-studies-description">
          Here are some of the organizations that are using eBPF in production.
          If you’re using eBPF and aren’t on this list, please submit a pull
          request” PR should link to the page on github once it is created
        </p>
        <div className="case-studies-wrapper">
          <CaseCard />
          <CaseCard />
          <CaseCard />
        </div>
      </div>
    </div>
  </Layout>
);

export default Page;
