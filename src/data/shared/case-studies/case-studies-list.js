import Akita from './logos/akita.inline.svg';
import Alibaba from './logos/alibaba.inline.svg';
import Android from './logos/android.inline.svg';
import AntGroup from './logos/ant-group.inline.svg';
import Apple from './logos/apple.inline.svg';
import Aqua from './logos/aqua.inline.svg';
import Bell from './logos/bell.inline.svg';
import Bytedance from './logos/byte-dance.inline.svg';
import CapitalOne from './logos/capital-one.inline.svg';
import Cloudflare from './logos/cloudflare.inline.svg';
import CoreTech from './logos/coretech.inline.svg';
import Cruise from './logos/cruise.inline.svg';
import Cycode from './logos/cycode.inline.svg';
import Datadog from './logos/datadog.inline.svg';
import DigitalOcean from './logos/digital-ocean.inline.svg';
import DoorDash from './logos/doordash.inline.svg';
import Exein from './logos/exein.inline.svg';
import F5 from './logos/f5.inline.svg';
import Global from './logos/global.inline.svg';
import Google from './logos/google.inline.svg';
import Ikea from './logos/ikea.inline.svg';
import Kodem from './logos/kodemsec.inline.svg';
import LineCoporation from './logos/line-corp.inline.svg';
import LinkedIn from './logos/linkedin.inline.svg';
import Meta from './logos/meta.inline.svg';
import Microsoft from './logos/microsoft.inline.svg';
import Netflix from './logos/netflix.inline.svg';
import NYT from './logos/nyt.inline.svg';
import Palantir from './logos/palantir.inline.svg';
import Redhat from './logos/redhat.inline.svg';
import Samsung from './logos/samsung.inline.svg';
import SentinelOne from './logos/sentinelone.inline.svg';
import Seznam from './logos/seznam.inline.svg';
import Shopify from './logos/shopify.inline.svg';
import Sky from './logos/sky.inline.svg';
import Sysdig from './logos/sysdig.inline.svg';
import Trip from './logos/trip.inline.svg';
import Walmart from './logos/walmart.inline.svg';
import Wildlife from './logos/wildlife.inline.svg';
import Wiz from './logos/wiz.inline.svg';
import Yahoo from './logos/yahoo.inline.svg';

const caseStudiesData = {
  en: [
    {
      title: 'Google',
      logo: Google,
      description:
        '<strong>Google</strong> uses eBPF for security auditing, packet processing, and performance monitoring',
      links: [
        {
          text: 'Video',
          to: 'https://www.youtube.com/watch?v=XFJw37Vwzcc&t=657s',
        },
        {
          text: 'Talk',
          to: 'https://legacy.netdevconf.info/0x14/session.html?talk-replacing-HTB-with-EDT-and-BPF',
        },
      ],
    },
    {
      title: 'Netflix',
      logo: Netflix,
      description: '<strong>Netflix</strong> uses eBPF at scale for network insights',
      links: [
        {
          text: 'Blog',
          to: 'https://netflixtechblog.com/how-netflix-uses-ebpf-flow-logs-at-scale-for-network-insight-e3ea997dca96',
        },
        {
          text: 'Video',
          to: 'https://www.youtube.com/watch?v=16slh29iN1g',
        },
      ],
    },
    {
      title: 'Android',
      logo: Android,
      description:
        '<strong>Android</strong> uses eBPF to monitor network usage, power, and memory profiling',
      links: [
        {
          text: 'Docs',
          to: 'https://source.android.com/docs/core/architecture/kernel/bpf',
        },
      ],
    },
    {
      title: 'S&P Global',
      logo: Global,
      description:
        '<strong>S&P Global</strong> uses eBPF through Cilium for networking across multiple clouds and on-prem',
      links: [
        {
          text: 'Video',
          to: 'https://www.youtube.com/watch?v=6CZ_SSTqb4g',
        },
      ],
    },
    {
      title: 'Shopify',
      logo: Shopify,
      description: '<strong>Shopify</strong> uses eBPF through Falco for intrusion detection',
      links: [
        {
          text: 'Video',
          to: 'https://www.youtube.com/watch?v=6pVci31Mb6Q',
        },
      ],
    },
    {
      title: 'Cloudflare',
      logo: Cloudflare,
      description:
        '<strong>Cloudflare</strong> uses eBPF for network security, performance monitoring, and network observability',
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
      title: 'Microsoft',
      logo: Microsoft,
      description:
        '<strong>Microsot</strong> uses eBPF to enhance the observability and inspection of processes within Kubernetes',
      links: [
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=ilcYXPDSgu8&list=PLj6h78yzYM2Pm5nF_GmNQHMyt9CUZr2uQ&index=5',
        },
      ],
    },
    {
      title: 'Samsung',
      logo: Samsung,
      description: '<strong>Samsung</strong> uses eBPF in their android devices for networking',
      links: [
        {
          text: 'Talk',
          to: 'https://www.youtube.com/live/EViAho-6qoc?t=5220&si=shsfjYQ5X5lnL5cL',
        },
      ],
    },
    {
      title: 'Ikea',
      logo: Ikea,
      description:
        '<strong>Ikea</strong> uses eBPF through Cilium for networking and load balancing in their private cloud',
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
      description: '<strong>Apple</strong> uses eBPF through Falco for kernel security monitoring',
      links: [
        {
          text: 'Video',
          to: 'https://www.youtube.com/watch?v=ZBlJSr6XkN8',
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
          text: 'Blog',
          to: 'https://engineering.fb.com/2018/05/22/open-source/open-sourcing-katran-a-scalable-network-load-balancer/',
        },
        {
          text: 'Talk',
          to: 'https://lpc.events/event/16/contributions/1363/',
        },
      ],
    },
    {
      title: 'DoorDash',
      logo: DoorDash,
      description:
        '<strong>DoorDash</strong> uses eBPF through BPFAgent for kernel level monitoring',
      links: [
        {
          text: 'Blog',
          to: 'https://doordash.engineering/2023/08/15/bpfagent-ebpf-for-monitoring-at-doordash/',
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
        {
          text: 'Blog',
          to: 'https://www.datadoghq.com/blog/network-performance-monitoring/',
        },
        {
          text: 'Talk',
          to: ' https://www.youtube.com/watch?v=6nlv_VCsjpQ',
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
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=Z4qxd5yYoP4',
        },
      ],
    },
    {
      title: 'Red Hat',
      logo: Redhat,
      description:
        '<strong>Red Hat</strong> uses eBPF at scale for load balancing and tracing in their private cloud',
      links: [
        {
          text: 'Talk',
          to: 'https://youtu.be/xxRAppnmirY?si=OSxhLJ8S1B2-Z-9T',
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
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=xwjZF3alO7g',
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
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=NIsU4I950l4',
        },
      ],
    },
    {
      title: 'Bell',
      logo: Bell,
      description: '<strong>Bell</strong> Canada uses eBPF to moderize telco networking with SRv6',
      links: [
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=fNtG0iHYne4',
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
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=_1t3bXzptP0',
        },
      ],
    },
    {
      title: 'Capital One',
      logo: CapitalOne,
      description: '<strong>Capital One</strong> uses eBPF to secure their cloud infrastructure',
      links: [
        {
          text: 'Talk',
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
          text: 'Talk',
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
          text: 'Talk',
          to: 'https://youtu.be/thmAcyix8FM',
        },
        {
          text: 'Blog',
          to: 'https://medium.com/walmartglobaltech/introducing-walmarts-l3af-project-how-do-we-use-ebpf-to-provide-network-visibility-in-a-8b9ae4d26200',
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
          text: 'Talk',
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
          text: 'Video',
          to: 'https://youtu.be/-C86fBMcp5Q',
        },
        {
          text: 'Talk',
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
    {
      title: 'SentinelOne',
      logo: SentinelOne,
      description:
        '<strong>SentinelOne</strong> uses eBPF to detect and to respond to runtime threats like ransomware and zero-day exploits in real time.',
      links: [
        {
          text: 'Blog',
          to: 'https://www.sentinelone.com/blog/the-advantages-of-ebpf-for-cwpp-applications/',
        },
      ],
    },
    {
      title: 'Aqua Security',
      logo: Aqua,
      description:
        '<strong>Aqua Security</strong> uses eBPF to handle runtime detection and forensics',
      links: [
        {
          text: 'Blog',
          to: 'https://blog.aquasec.com/linux-vulnerabilitie-tracee',
        },
      ],
    },
    {
      title: 'Akita',
      logo: Akita,
      description: '<strong>Akita</strong> uses eBPF at scale for API observability',
      links: [
        {
          text: 'Docs',
          to: 'https://docs.akita.software/docs/how-akita-works#what-makes-akita-different',
        },
      ],
    },
    {
      title: 'Line Coporation',
      logo: LineCoporation,
      description:
        '<strong>Line Corporation</strong> uses eBPF at scale for load balancing and tracing in their private cloud',
      links: [
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=cxfVpBYlol4',
        },
      ],
    },
    {
      title: 'Exein',
      logo: Exein,
      description:
        '<strong>Exein</strong> uses eBPF in their open source runtime security framework for IoT',
      links: [
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=vmRQXRit-sY&list=PLDg_GiBbAx-mAwr1P5H4xFEn7X-qWZ2V_&index=16',
        },
      ],
    },
    {
      title: 'Ant Group',
      logo: AntGroup,
      description:
        '<strong>Ant Group</strong> uses eBPF in their cloud native security platform for vulnerability live-patching, and system anomaly detection',
      links: [
        {
          text: 'Talk',
          to: 'https://youtu.be/TXlxgDvxcoY?si=lvC1HqNl4jXNyfD0',
        },
      ],
    },
    {
      title: 'Sysdig',
      logo: Sysdig,
      description:
        '<strong>Sysdig</strong> uses eBPF to enable high-performance system call tracing, facilitate container-aware troubleshooting, conduct security auditing, and provide rich insights and data from the kernel',
      links: [
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=BxoKztfHnYY&list=PLDg_GiBbAx-mAwr1P5H4xFEn7X-qWZ2V_&index=28',
        },
        {
          text: 'Blog',
          to: 'https://sysdig.com/blog/sysdig-and-falco-now-powered-by-ebpf/',
        },
      ],
    },
    {
      title: 'Kodem',
      logo: Kodem,
      description:
        '<strong>Kodem</strong> uses eBPF for application visibilty and runtime intelligence',
      links: [
        {
          text: 'Blog',
          to: 'https://kodemsec.webflow.io/resources/deep-visibility-with-ebpf',
        },
      ],
    },
    {
      title: 'Cycode',
      logo: Cycode,
      description: '<strong>Cycode</strong> uses eBPF for CI/CD security',
      links: [
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=pcBGRFvSrvY',
        },
        {
          text: 'Blog',
          to: 'https://cycode.com/blog/introducing-cimon-build-hardening/',
        },
      ],
    },
    {
      title: 'Wiz',
      logo: Wiz,
      description:
        '<strong>Wiz</strong> uses eBPF to provide real-time threat detection and monitoring within cloud workloads',
      links: [
        {
          text: 'Blog',
          to: 'https://www.wiz.io/blog/wiz-expands-platform-with-the-runtime-sensor-to-provide-unified-cloud-security',
        },
      ],
    },
    {
      title: 'Core Tech',
      logo: CoreTech,
      description:
        '<strong>Core Tech</strong> uses eBPF to filter out unwanted traffic and mitigate DDos attacks ',
      links: [
        {
          text: 'Blog',
          to: 'https://www.linkedin.com/pulse/coretechnologys-how-drop-1-tbps-ddos-traffic-coretechnolgys-rayif/',
        },
      ],
    },
  ],
  'fr-fr': [
    {
      title: 'Google',
      logo: Google,
      description:
        '<strong>Google</strong> utilise eBPF pour des audits sécurité, du traitement de paquets ainsi que le monitoring de performance',
      links: [
        {
          text: 'Video',
          to: 'https://www.youtube.com/watch?v=XFJw37Vwzcc&t=657s',
        },
        {
          text: 'Talk',
          to: 'https://legacy.netdevconf.info/0x14/session.html?talk-replacing-HTB-with-EDT-and-BPF',
        },
      ],
    },
    {
      title: 'Netflix',
      logo: Netflix,
      description:
        '<strong>Netflix</strong> utilise eBPF à grande échelle pour obtenir des informations sur le réseau',
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
        '<strong>Android</strong> utilise eBPF pour surveiller l’utilisation du réseau, pour l’alimentation et le profilage de la mémoire',
      links: [
        {
          text: 'Docs',
          to: 'https://source.android.com/docs/core/architecture/kernel/bpf',
        },
      ],
    },
    {
      title: 'S&P Global',
      logo: Global,
      description:
        '<strong>S&P Global</strong> utilise eBPF via Cilium pour la mise en réseau à travers plusieurs clouds et sur site.',
      links: [
        {
          text: 'Video',
          to: 'https://www.youtube.com/watch?v=6CZ_SSTqb4g',
        },
      ],
    },
    {
      title: 'Shopify',
      logo: Shopify,
      description:
        '<strong>Shopify</strong> utilise eBPF via Falco pour la détection des intrusions',
      links: [
        {
          text: 'Video',
          to: 'https://www.youtube.com/watch?v=6pVci31Mb6Q',
        },
      ],
    },
    {
      title: 'Cloudflare',
      logo: Cloudflare,
      description:
        '<strong>Cloudflare</strong> utilise eBPF pour la sécurisation du réseau, la surveillance des performances et l’observabilité du réseau',
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
      title: 'Microsoft',
      logo: Microsoft,
      description:
        '<strong>Microsot</strong> uses eBPF to enhance the observability and inspection of processes within Kubernetes',
      links: [
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=ilcYXPDSgu8&list=PLj6h78yzYM2Pm5nF_GmNQHMyt9CUZr2uQ&index=5',
        },
      ],
    },
    {
      title: 'Samsung',
      logo: Samsung,
      description: '<strong>Samsung</strong> uses eBPF in their android devices for networking',
      links: [
        {
          text: 'Talk',
          to: 'https://www.youtube.com/live/EViAho-6qoc?t=5220&si=shsfjYQ5X5lnL5cL',
        },
      ],
    },
    {
      title: 'Ikea',
      logo: Ikea,
      description:
        '<strong>Ikea</strong> uses eBPF through Cilium for networking and load balancing in their private cloud',
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
      description: '<strong>Apple</strong> uses eBPF through Falco for kernel security monitoring',
      links: [
        {
          text: 'Video',
          to: 'https://www.youtube.com/watch?v=ZBlJSr6XkN8',
        },
      ],
    },
    {
      title: 'DoorDash',
      logo: DoorDash,
      description:
        '<strong>DoorDash</strong> uses eBPF through BPFAgent for kernel level monitoring',
      links: [
        {
          text: 'Blog',
          to: 'https://doordash.engineering/2023/08/15/bpfagent-ebpf-for-monitoring-at-doordash/',
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
          text: 'Blog',
          to: 'https://engineering.fb.com/2018/05/22/open-source/open-sourcing-katran-a-scalable-network-load-balancer/',
        },
        {
          text: 'Talk',
          to: 'https://lpc.events/event/16/contributions/1363/',
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
        {
          text: 'Blog',
          to: 'https://www.datadoghq.com/blog/network-performance-monitoring/',
        },
        {
          text: 'Talk',
          to: ' https://www.youtube.com/watch?v=6nlv_VCsjpQ',
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
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=Z4qxd5yYoP4',
        },
      ],
    },
    {
      title: 'Red Hat',
      logo: Redhat,
      description:
        '<strong>Red Hat</strong> uses eBPF at scale for load balancing and tracing in their private cloud',
      links: [
        {
          text: 'Talk',
          to: 'https://youtu.be/xxRAppnmirY?si=OSxhLJ8S1B2-Z-9T',
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
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=xwjZF3alO7g',
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
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=NIsU4I950l4',
        },
      ],
    },
    {
      title: 'Bell',
      logo: Bell,
      description: '<strong>Bell</strong> Canada uses eBPF to moderize telco networking with SRv6',
      links: [
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=fNtG0iHYne4',
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
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=_1t3bXzptP0',
        },
      ],
    },
    {
      title: 'Capital One',
      logo: CapitalOne,
      description: '<strong>Capital One</strong> uses eBPF to secure their cloud infrastructure',
      links: [
        {
          text: 'Talk',
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
          text: 'Talk',
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
          text: 'Talk',
          to: 'https://youtu.be/thmAcyix8FM',
        },
        {
          text: 'Blog',
          to: 'https://medium.com/walmartglobaltech/introducing-walmarts-l3af-project-how-do-we-use-ebpf-to-provide-network-visibility-in-a-8b9ae4d26200',
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
          text: 'Talk',
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
          text: 'Video',
          to: 'https://youtu.be/-C86fBMcp5Q',
        },
        {
          text: 'Talk',
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
    {
      title: 'SentinelOne',
      logo: SentinelOne,
      description:
        '<strong>SentinelOne</strong> uses eBPF to detect and to respond to runtime threats like ransomware and zero-day exploits in real time',
      links: [
        {
          text: 'Blog',
          to: 'https://www.sentinelone.com/blog/the-advantages-of-ebpf-for-cwpp-applications/',
        },
      ],
    },
    {
      title: 'Aqua Security',
      logo: Aqua,
      description:
        '<strong>Aqua Security</strong> uses eBPF to handle runtime detection and forensics',
      links: [
        {
          text: 'Talk',
          to: 'https://youtu.be/BF42-cl-8B0?si=FM6Mp2PfewzX7BnS',
        },
      ],
    },
    {
      title: 'Akita',
      logo: Akita,
      description: '<strong>Akita</strong> uses eBPF at scale for API observability.',
      links: [
        {
          text: 'Docs',
          to: 'https://docs.akita.software/docs/how-akita-works#what-makes-akita-different',
        },
      ],
    },
    {
      title: 'Line Coporation',
      logo: LineCoporation,
      description:
        '<strong>Line Corporation</strong> uses eBPF at scale for load balancing and tracing in their private cloud',
      links: [
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=cxfVpBYlol4',
        },
      ],
    },
    {
      title: 'Exein',
      logo: Exein,
      description:
        '<strong>Exein</strong> uses eBPF in their open source runtime security framework for IoT',
      links: [
        {
          text: 'Talk',
          to: 'https://youtu.be/vmRQXRit-sY?si=WurbrS-lNCEsDWGS',
        },
      ],
    },
    {
      title: 'Ant Group',
      logo: AntGroup,
      description:
        '<strong>Ant Group</strong> uses eBPF in their cloud native security paltform for vulnerability live-patching, and system anomaly detection',
      links: [
        {
          text: 'Talk',
          to: 'https://youtu.be/TXlxgDvxcoY?si=iAsbxdWJLlt2p9SV',
        },
      ],
    },
    {
      title: 'Sysdig',
      logo: Sysdig,
      description:
        '<strong>Sysdig</strong> uses eBPF to enable high-performance system call tracing, facilitate container-aware troubleshooting, conduct security auditing, and provide rich insights and data from the kernel',
      links: [
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=BxoKztfHnYY&list=PLDg_GiBbAx-mAwr1P5H4xFEn7X-qWZ2V_&index=28',
        },
        {
          text: 'Blog',
          to: 'https://sysdig.com/blog/sysdig-and-falco-now-powered-by-ebpf/',
        },
      ],
    },
    {
      title: 'Kodem',
      logo: Kodem,
      description:
        '<strong>Kodem</strong> uses eBPF for application visibilty and runtime intelligence',
      links: [
        {
          text: 'Blog',
          to: 'https://kodemsec.webflow.io/resources/deep-visibility-with-ebpf',
        },
      ],
    },
    {
      title: 'Cycode',
      logo: Cycode,
      description: '<strong>Cycode</strong> uses eBPF for CI/CD security',
      links: [
        {
          text: 'Talk',
          to: 'https://www.youtube.com/watch?v=pcBGRFvSrvY',
        },
        {
          text: 'Blog',
          to: 'https://cycode.com/blog/introducing-cimon-build-hardening/',
        },
      ],
    },
    {
      title: 'Wiz',
      logo: Wiz,
      description:
        '<strong>Wiz</strong> uses eBPF to provide real-time threat detection and monitoring within cloud workloads',
      links: [
        {
          text: 'Blog',
          to: 'https://www.wiz.io/blog/wiz-expands-platform-with-the-runtime-sensor-to-provide-unified-cloud-security',
        },
      ],
    },
    {
      title: 'Core Tech',
      logo: CoreTech,
      description:
        '<strong>Core Tech</strong> uses eBPF to filter out unwanted traffic and mitigate DDos attacks ',
      links: [
        {
          text: 'Blog',
          to: 'https://www.linkedin.com/pulse/coretechnologys-how-drop-1-tbps-ddos-traffic-coretechnolgys-rayif/',
        },
      ],
    },
  ],
  'pt-br': [
    {
      title: 'Google',
      logo: Google,
      description:
        'O <strong>Google</strong> usa o eBPF para auditoria de segurança, processamento de pacotes e monitoramento de desempenho.',
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
      description: 'A <strong>Netflix</strong> usa o eBPF em escala para insights de rede.',
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
        'O <strong>Android</strong> usa o eBPF para monitorar o uso de rede, consumo de energia e perfil de memória.',
      links: [
        {
          text: 'Docs',
          to: 'https://source.android.com/docs/core/architecture/kernel/bpf',
        },
      ],
    },
    {
      title: 'S&P Global',
      logo: Global,
      description:
        'A <strong>S&P Global</strong> usa o eBPF através do Cilium para redes em várias nuvens e localmente.',
      links: [
        {
          text: 'Video',
          to: 'https://www.youtube.com/watch?v=6CZ_SSTqb4g',
        },
      ],
    },
    {
      title: 'Shopify',
      logo: Shopify,
      description:
        'O <strong>Shopify</strong> usa o eBPF através do Falco para detecção de intrusões.',
      links: [
        {
          text: 'Video',
          to: 'https://www.youtube.com/watch?v=6pVci31Mb6Q',
        },
      ],
    },
    {
      title: 'Cloudflare',
      logo: Cloudflare,
      description:
        'A <strong>Cloudflare</strong> utiliza o eBPF para segurança de rede, monitoramento de desempenho e observabilidade de rede.',
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
      title: 'Ikea',
      logo: Ikea,
      description:
        '<strong>Ikea</strong> uses eBPF through Cilium for networking and load balancing in their private cloud.',
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
    {
      title: 'SentinelOne',
      logo: SentinelOne,
      description:
        '<strong>SentinelOne</strong> uses eBPF to detect and to respond to runtime threats like ransomware and zero-day exploits in real time.',
      links: [
        {
          text: 'Blog',
          to: 'https://www.sentinelone.com/blog/the-advantages-of-ebpf-for-cwpp-applications/',
        },
      ],
    },
    {
      title: 'Akita',
      logo: Akita,
      description: '<strong>Akita</strong> uses eBPF at scale for API observability.',
      links: [
        {
          text: 'Docs',
          to: 'https://docs.akita.software/docs/how-akita-works#what-makes-akita-different',
        },
      ],
    },
    {
      title: 'Core Tech',
      logo: CoreTech,
      description:
        '<strong>Core Tech</strong> uses eBPF to filter out unwanted traffic and mitigate DDos attacks ',
      links: [
        {
          text: 'Blog',
          to: 'https://www.linkedin.com/pulse/coretechnologys-how-drop-1-tbps-ddos-traffic-coretechnolgys-rayif/',
        },
      ],
    },
  ],
  'it-it': [
    {
      title: 'Google',
      logo: Google,
      description:
        '<strong>Google</strong> usa eBPF per l’auditing di sicurezza, l’elaborazione dei pacchetti di rete, e il monitoraggio delle performance.',
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
      description:
        '<strong>Netflix</strong> usa eBPF su larga scala per ottenere informazioni sulla rete.',
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
        '<strong>Android</strong> usa eBPF per il monitoraggio dell’uso della rete, dell’energia e la profilazione della memoria.',
      links: [
        {
          text: 'Docs',
          to: 'https://source.android.com/docs/core/architecture/kernel/bpf',
        },
      ],
    },
    {
      title: 'S&P Global',
      logo: Global,
      description:
        '<strong>S&P Global</strong> usa eBPF attraverso Cilium per il networking su molteplici cloud e on-prem.',
      links: [
        {
          text: 'Video',
          to: 'https://www.youtube.com/watch?v=6CZ_SSTqb4g',
        },
      ],
    },
    {
      title: 'Shopify',
      logo: Shopify,
      description:
        '<strong>Shopify</strong> usa eBPF attraverso Falco per il rilevamento delle intrusioni.',
      links: [
        {
          text: 'Video',
          to: 'https://www.youtube.com/watch?v=6pVci31Mb6Q',
        },
      ],
    },
    {
      title: 'Cloudflare',
      logo: Cloudflare,
      description:
        '<strong>Cloudflare</strong> usa eBPF per la sicurezza di rete, monitoraggio delle prestazioni e l’osservabilità della rete.',
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
      title: 'Ikea',
      logo: Ikea,
      description:
        '<strong>Ikea</strong> usa eBPF attraverso Cilium per il networking e il bilanciamento del carico nel proprio cloud privato.',
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
      description:
        '<strong>Apple</strong> usa eBPF attraverso Falco per monitorare la sicurezza del kernel.',
      links: [
        {
          text: 'Video',
          to: 'https://www.youtube.com/watch?v=ZBlJSr6XkN8',
        },
      ],
    },
    {
      title: 'Meta',
      logo: Meta,
      description:
        '<strong>Meta</strong> usa eBPF per elaborare e bilanciare il carico di ogni pacchetto di rete che arriva nei loro data center',
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
        '<strong>Datadog</strong> usa eBPF per la rete e la sicurezza del proprio prodotto SaaS',
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
        '<strong>Alibaba</strong> usa eBPF attraverso Cilium per fornire la rete nel proprio cloud',
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
      description: '<strong>Seznam</strong> usa eBPF per il bilanciamento del carico',
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
      description: '<strong>Trip.com</strong> usa eBPF per il bilanciamento del carico',
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
      description: '<strong>Bell</strong> Canada usa eBPF per modernizzare la rete telco con SRv6',
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
        '<strong>Wildlife Studios</strong> usa eBPF attraverso Cilium per il high performance game networking',
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
      description:
        '<strong>Capital One</strong> usa eBPF per proteggere la propria infrastruttura cloud',
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
      description: '<strong>Sky</strong> usa eBPF tramite Cilium per la rete del cloud',
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
      description:
        '<strong>Walmart</strong> usa eBPF per il bilanciamento del carico dell’edge cloud',
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
      description: '<strong>Palantir</strong> usa eBPF per il debug dei problemi di rete',
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
      description: '<strong>Cruise</strong> usa eBPF per monitorare le prestazioni della GPU',
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
      description:
        '<strong>Digital Ocean</strong> usa eBPF per monitorare le prestazioni della GPU',
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
      description:
        '<strong>Yahoo</strong> usa eBPF per il bilanciamento del carico e l’analisi delle prestazioni',
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
      description: '<strong>Bytedance</strong> usa eBPF per il tracciamento del sistema',
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
      description: '<strong>F5</strong> integra BIG-IP con la funzione VTEP di Cilium',
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
      description: '<strong>LinkedIn</strong> usa eBPF per l’osservabilità dell’infrastruttura',
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
      description: '<strong>The New York Times</strong> usa eBPF per la rete.',
      links: [
        {
          text: 'Video',
          to: 'https://www.youtube.com/watch?v=qmrHONqsV2M&ab_channel=CNCF%5BCloudNativeComputingFoundation%5D',
        },
      ],
    },
    {
      title: 'SentinelOne',
      logo: SentinelOne,
      description:
        '<strong>SentinelOne</strong> usa eBPF per rilevare e rispondere in tempo reale a minacce runtime come ransomware e zero-day exploits.',
      links: [
        {
          text: 'Blog',
          to: 'https://www.sentinelone.com/blog/the-advantages-of-ebpf-for-cwpp-applications/',
        },
      ],
    },
    {
      title: 'Akita',
      logo: Akita,
      description: '<strong>Akita</strong> usa eBPF su larga scala per l’osservabilità delle API.',
      links: [
        {
          text: 'Docs',
          to: 'https://docs.akita.software/docs/how-akita-works#what-makes-akita-different',
        },
      ],
    },
    {
      title: 'Core Tech',
      logo: CoreTech,
      description:
        '<strong>Core Tech</strong> uses eBPF to filter out unwanted traffic and mitigate DDos attacks ',
      links: [
        {
          text: 'Blog',
          to: 'https://www.linkedin.com/pulse/coretechnologys-how-drop-1-tbps-ddos-traffic-coretechnolgys-rayif/',
        },
      ],
    },
  ],
};

export default caseStudiesData;
