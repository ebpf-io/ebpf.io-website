import Alibaba from './logos/alibaba.inline.svg';
import Android from './logos/android.inline.svg';
import Apple from './logos/apple.inline.svg';
import Bell from './logos/bell.inline.svg';
import Bytedance from './logos/byte-dance.inline.svg';
import CapitalOne from './logos/capital-one.inline.svg';
import Cloudflare from './logos/cloudflare.inline.svg';
import Cruise from './logos/cruise.inline.svg';
import Datadog from './logos/datadog.inline.svg';
import DigitalOcean from './logos/digital-ocean.inline.svg';
import F5 from './logos/f5.inline.svg';
import Google from './logos/google.inline.svg';
import Ikea from './logos/ikea.inline.svg';
import LinkedIn from './logos/linkedin.inline.svg';
import Meta from './logos/meta.inline.svg';
import Netflix from './logos/netflix.inline.svg';
import NYT from './logos/nyt.inline.svg';
import Palantir from './logos/palantir.inline.svg';
import Seznam from './logos/seznam.inline.svg';
import Sky from './logos/sky.inline.svg';
import Trip from './logos/trip.inline.svg';
import Walmart from './logos/walmart.inline.svg';
import Wildlife from './logos/wildlife.inline.svg';
import Yahoo from './logos/yahoo.inline.svg';

const caseStudiesData = [
  {
    title: 'Google',
    logo: Google,
    description:
      '<strong>Google</strong> uses eBPF for security auditing, packet processing, and performance monitoring.',
    links: [
      {
        text: 'Video 1',
        to: 'https://www.youtube.com/watch?v=URm_q9ylxBk',
      },
      {
        text: 'Video 2',
        to: 'https://www.youtube.com/watch?v=XFJw37Vwzcc&t=657s',
      },
      {
        text: 'Talk 1',
        to: 'https://legacy.netdevconf.info/0x14/session.html?talk-replacing-HTB-with-EDT-and-BPF',
      },
      {
        text: 'Talk 2',
        to: 'https://lpc.events/event/11/contributions/954/',
      },
    ],
  },
  {
    title: 'Netflix',
    logo: Netflix,
    description: '<strong>Netflix</strong> uses eBPF at scale for network insights.',
    links: [
      {
        text: 'Blog',
        to: 'https://netflixtechblog.com/how-netflix-uses-ebpf-flow-logs-at-scale-for-network-insight-e3ea997dca96',
      },
    ],
  },
  {
    title: 'Android',
    logo: Android,
    description:
      '<strong>Android</strong> uses eBPF to monitor network usage, power, and memory profiling.',
    links: [
      {
        text: 'Docs',
        to: 'https://source.android.com/docs/core/architecture/kernel/bpf',
      },
    ],
  },
  {
    title: 'Ikea',
    logo: Ikea,
    description:
      '<strong>Ikea</strong> eBPF through Cilium for networking and load balancing in their private cloud.',
    links: [
      {
        text: 'Video',
        to: 'https://www.youtube.com/watch?v=sg-F_R-ZVNc',
      },
    ],
  },
  {
    title: 'Apple',
    logo: Apple,
    description: '<strong>Apple</strong> uses eBPF through Falco for kernel security monitoring.',
    links: [
      {
        text: 'Video',
        to: 'https://www.youtube.com/watch?v=ZBlJSr6XkN8',
      },
    ],
  },
  {
    title: 'Cloudflare',
    logo: Cloudflare,
    description:
      '<strong>Cloudflare</strong> uses eBPF for network security, performance monitoring, and network observability.',
    links: [
      {
        text: 'Blog',
        to: 'https://blog.cloudflare.com/tag/ebpf/',
      },
      {
        text: 'Talk',
        to: 'https://legacy.netdevconf.info/0x13/session.html?talk-XDP-based-DDoS-mitigation',
      },
    ],
  },
  {
    title: 'Meta',
    logo: Meta,
    description:
      '<strong>Meta</strong> uses eBPF to process and load balance every packet coming into their data centers',
    links: [
      {
        text: 'Video',
        to: 'https://www.youtube.com/watch?v=ZYBXZFKPS28',
      },
      {
        text: 'Blog 1',
        to: 'https://engineering.fb.com/2018/05/22/open-source/open-sourcing-katran-a-scalable-network-load-balancer/',
      },
      {
        text: 'Blog 2',
        to: 'https://engineering.fb.com/2018/10/30/open-source/linux/',
      },
      {
        text: 'Talk 1',
        to: 'https://lpc.events/event/16/contributions/1363/',
      },
      {
        text: 'Talk 2',
        to: 'https://lpc.events/event/11/contributions/950/',
      },
    ],
  },
  {
    title: 'Datadog',
    logo: Datadog,
    description:
      '<strong>Datadog</strong> uses eBPF for networking and security in their SaaS product',
    links: [
      {
        text: 'Video',
        to: 'https://datadogon.datadoghq.com/episodes/datadog-on-ebpf/',
      },
    ],
  },
  {
    title: 'Alibaba',
    logo: Alibaba,
    description:
      '<strong>Alibaba</strong> uses eBPF through Cilium to provide networking in their cloud',
    links: [
      {
        text: 'Blog',
        to: 'https://www.alibabacloud.com/blog/how-does-alibaba-cloud-build-high-performance-cloud-native-pod-networks-in-production-environments_596590',
      },
    ],
  },
  {
    title: 'Seznam',
    logo: Seznam,
    description: '<strong>Seznam</strong> uses eBPF for load balancing',
    links: [
      {
        text: 'Blog',
        to: 'https://cilium.io/blog/2022/04/12/cilium-standalone-L4LB-XDP/',
      },
    ],
  },
  {
    title: 'Trip.com',
    logo: Trip,
    description: '<strong>Trip.com</strong> uses eBPF for load balancing',
    links: [
      {
        text: 'Blog',
        to: 'https://cilium.io/blog/2020/02/05/how-trip-com-uses-cilium/',
      },
    ],
  },
  {
    title: 'Bell',
    logo: Bell,
    description: '<strong>Bell</strong> Canada uses eBPF to moderize telco networking with SRv6',
    links: [
      {
        text: 'Video 1',
        to: 'https://www.youtube.com/watch?v=fNtG0iHYne4',
      },
      {
        text: 'Video 2',
        to: 'https://www.youtube.com/watch?v=vJaOKGWiyvU',
      },
    ],
  },
  {
    title: 'Wildlife Studios',
    logo: Wildlife,
    description:
      '<strong>Wildlife Studios</strong> uses eBPF through Cilium for high performance game networking',
    links: [
      {
        text: 'Blog',
        to: 'https://cilium.io/blog/2020/09/03/wildlife-studios-multi-cluster-gaming-platform',
      },
    ],
  },
  {
    title: 'Capital One',
    logo: CapitalOne,
    description: '<strong>Capital One</strong> uses eBPF to secure their cloud infrastructure',
    links: [
      {
        text: 'Video',
        to: 'https://www.youtube.com/watch?v=hwOpCKBaJ-w&ab_channel=eBPFSummit',
      },
    ],
  },
  {
    title: 'Sky',
    logo: Sky,
    description: '<strong>Sky</strong> uses eBPF through Cilium for cloud networking',
    links: [
      {
        text: 'Video',
        to: 'https://www.youtube.com/watch?v=u-4naOMfs_w',
      },
    ],
  },

  {
    title: 'Walmart',
    logo: Walmart,
    description: '<strong>Walmart</strong> uses eBPF for edge cloud load balancing',
    links: [
      {
        text: 'Video 1',
        to: 'https://youtu.be/Fu4L8ewcO70',
      },
      {
        text: 'Video 2',
        to: 'https://youtu.be/thmAcyix8FM',
      },
    ],
  },
  {
    title: 'Palantir',
    logo: Palantir,
    description: '<strong>Palantir</strong> uses eBPF to debug networking problems',
    links: [
      {
        text: 'Video',
        to: 'https://youtu.be/0RDp1IPxbg0',
      },
    ],
  },
  {
    title: 'Cruise',
    logo: Cruise,
    description: '<strong>Cruise</strong> uses eBPF to monitor GPU performance',
    links: [
      {
        text: 'Video',
        to: 'https://youtu.be/7bdy2AkRjqE',
      },
    ],
  },
  {
    title: 'Digital Ocean',
    logo: DigitalOcean,
    description: '<strong>Digital Ocean</strong> uses eBPF to monitor GPU performance',
    links: [
      {
        text: 'Video',
        to: 'https://youtu.be/gcHxfhDT-I4',
      },
    ],
  },
  {
    title: 'Yahoo',
    logo: Yahoo,
    description: '<strong>Yahoo</strong> uses eBPF for load balancing and performance analysis',
    links: [
      {
        text: 'Video 1',
        to: 'https://youtu.be/-C86fBMcp5Q',
      },
      {
        text: 'Video 2',
        to: 'https://www.usenix.org/conference/lisa21/presentation/jones-zachary',
      },
    ],
  },
  {
    title: 'Bytedance',
    logo: Bytedance,
    description: '<strong>Bytedance</strong> uses eBPF for system tracing',
    links: [
      {
        text: 'Blog',
        to: 'https://inf.news/en/tech/3313635d67f796ae38e7ef64061bc7c4.html',
      },
    ],
  },
  {
    title: 'F5',
    logo: F5,
    description: '<strong>F5</strong> BIG-IP integration with Cilium VTEP feature',
    links: [
      {
        text: 'Video',
        to: 'https://youtu.be/EfmdjrQLFFg',
      },
      {
        text: 'Guide',
        to: 'https://github.com/f5devcentral/f5-ci-docs/blob/master/docs/cilium/cilium-bigip-info.rst',
      },
    ],
  },
  {
    title: 'LinkedIn',
    logo: LinkedIn,
    description: '<strong>LinkedIn</strong> uses eBPF for Infrastructure Observability',
    links: [
      {
        text: 'Blog',
        to: 'https://engineering.linkedin.com/blog/2022/skyfall--ebpf-agent-for-infrastructure-observability',
      },
    ],
  },
  {
    title: 'The New York Times',
    logo: NYT,
    description: '<strong>The New York Times</strong> uses eBPF for networking',
    links: [
      {
        text: 'Video',
        to: 'https://www.youtube.com/watch?v=qmrHONqsV2M&ab_channel=CNCF%5BCloudNativeComputingFoundation%5D',
      },
    ],
  },
];

export default caseStudiesData;
