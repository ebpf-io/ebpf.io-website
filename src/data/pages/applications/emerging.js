const emergingApplications = [
  {
    logoUrl: 'https://github.com/pyroscope-io/pyroscope',
    name: 'Pyroscope',
    logoName: 'pyroscopeLogo',
    title: 'Continuous Profiling Platform',
    description: `Pyroscope is an open source project centered around
    continuous profiling, particularly in a Kubernetes context.
    It leverages eBPF as its core technology along with a custom storage engine
    to offer system-wide continuous profiling with minimal overhead
    as well as efficient storage and querying capabilities.
    We support Linux 4.9 and up thanks to CO-RE and libbpf.
    `,
    urls: [
      { label: 'GitHub', url: 'https://github.com/pyroscope-io/pyroscope' },
      { label: 'Website', url: 'https://pyroscope.io/' },
    ],
    githubStars: 10400,
  },
  {
    logoUrl: 'https://github.com/gojue/ecapture',
    name: 'eCapture',
    logoName: 'ecaptureLogo',
    title: 'SSL/TLS capture tool using eBPF',
    description: `eCapture is a Go language-written tool that can capture HTTPS/TLS
    plaintext without a CA certificate. It supports TLS encryption libraries such as
    openssl, boringssl, gnutls, and nspr. It can run on x86_64 CPU architectures with
    Linux kernel 4.18 or higher, and aarch64 CPU architectures with Linux/Android
    kernel 5.5 or higher, supporting both CO-RE and non-CO-RE modes without BTF.`,
    urls: [
      { label: 'GitHub', url: 'https://github.com/gojue/ecapture' },
      { label: 'Website', url: 'https://ecapture.cc/' },
    ],
    githubStars: 14000,
  },
  {
    logoUrl: 'https://github.com/coroot/coroot',
    name: 'coroot',
    logoName: 'corootLogo',
    title: 'Zero-instrumentation observability',
    description: `Coroot is an open-source eBPF-based observability tool that turns telemetry
  data into actionable insights, helping you identify and resolve application issues quickly.`,
    urls: [
      { label: 'GitHub', url: 'https://github.com/coroot/coroot' },
      { label: 'Website', url: 'https://coroot.com/' },
    ],
    githubStars: 5700,
  },
  {
    logoUrl: 'https://github.com/cilium/hubble',
    name: 'Hubble',
    logoName: 'hubbleLogo',
    title: 'Network, Service & Security Observability for Kubernetes using eBPF',
    description: `Hubble is a fully distributed networking and security observability
    platform for cloud native workloads. It is built on top of Cilium
    and eBPF to enable deep visibility into the communication and
    behavior of services as well as the networking infrastructure in a
    completely transparent manner.`,
    urls: [
      { label: 'GitHub', url: 'https://github.com/cilium/hubble' },
      { label: 'Website', url: 'https://cilium.io/' },
    ],
    githubStars: 3700,
  },
  {
    logoUrl: 'https://github.com/aquasecurity/tracee',
    name: 'Tracee',
    logoName: 'traceeLogo',
    title: 'Linux Runtime Security and Forensics using eBPF',
    description: `Tracee uses eBPF technology to detect and filter operating system
    events, helping you expose security insights, detect suspicious
    behavior, and capture forensic indicators.`,
    urls: [{ label: 'GitHub', url: 'https://github.com/aquasecurity/tracee' }],
    githubStars: 3800,
  },

  {
    logoUrl: 'https://github.com/keyval-dev/odigos',
    name: 'Odigos',
    logoName: 'odigosLogo',
    title: 'Zero-code distributed tracing via eBPF',
    description: `Odigos is a zero-code distributed tracing solution that uses eBPF to automatically
    instrument any application, including automatic context propagation.
    Traces are produced in OpenTelemetry format and can be delivered to any compatible backend.`,
    urls: [
      { label: 'GitHub', url: 'https://github.com/keyval-dev/odigos' },
      { label: 'Website', url: 'https://odigos.io' },
    ],
    githubStars: 3400,
  },
  {
    logoUrl: 'https://github.com/cilium/pwru',
    name: 'pwru',
    logoName: 'pwruLogo',
    title: 'eBPF-based Linux kernel network packet tracer',
    description:
      'pwru is an eBPF-based tool for tracing network packets in the Linux kernel with advanced filtering capabilities. It allows fine-grained introspection of kernel state to facilitate debugging network connectivity issues.',
    urls: [{ label: 'GitHub', url: 'https://github.com/cilium/pwru' }],
    githubStars: 3200,
  },

  {
    logoUrl: 'https://github.com/deepflowys/deepflow',
    name: 'DeepFlow',
    logoName: 'deepflowLogo',
    title: 'Highly Automated Observability Platform powered by eBPF',
    description: `DeepFlow is a highly automated observability platform built for cloud native developers. Based on eBPF, DeepFlow innovatively implements an automated distributed tracing mechanism: AutoTracing. Microservice processes, service mesh sidecars, and network interfaces along the way are included as tracing spans, for every distributed transaction, without any code instrumentation. DeepFlow can automatically generate golden RED metrics for any process in cloud native environment.`,
    urls: [
      { label: 'GitHub', url: 'https://github.com/deepflowys/deepflow' },
      { label: 'Website', url: 'https://deepflow.yunshan.net/community.html' },
    ],
    githubStars: 3200,
  },
  {
    logoUrl: 'https://github.com/iovisor/kubectl-trace',
    name: 'kubectl trace',
    logoName: 'kubectlTraceLogo',
    title: 'Schedule bpftrace programs on your Kubernetes cluster',
    description: `kubectl-trace is a kubectl plugin that allows for scheduling the
    execution of bpftrace(8) programs in Kubernetes clusters.
    kubectl-trace does not require installation of any components
    directly onto a Kubernetes cluster in order to execute bpftrace
    programs. When pointed to a cluster, it schedules a temporary job
    called trace-runner that executes bpftrace.`,
    urls: [{ label: 'GitHub', url: 'https://github.com/iovisor/kubectl-trace' }],
    githubStars: 2100,
  },
  {
    logoUrl: 'https://github.com/daeuniverse/dae',
    name: 'dae',
    logoName: 'daeLogo',
    title: 'Linux high-performance transparent proxy solution',
    description: `dae, means goose, is a high-performance transparent proxy solution. To enhance traffic split performance as much as possible, dae employs the transparent proxy and traffic split suite within the Linux kernel using eBPF. As a result, dae can enable direct traffic to bypass the proxy application's forwarding, facilitating genuine direct traffic passage. Through this remarkable feat, there is minimal performance loss and negligible additional resource consumption for direct traffic.`,
    urls: [{ label: 'GitHub', url: 'https://github.com/daeuniverse/dae' }],
    githubStars: 3800,
  },
  {
    logoUrl: 'https://github.com/microsoft/retina',
    name: 'Retina',
    logoName: 'retinaLogo',
    title: 'eBPF distributed networking observability tool for Kubernetes',
    description: `Retina is a cloud-agnostic, eBPF-based open source Kubernetes network observability platform providing a centralized hub for monitoring application and network health and security. Retina collects customizable telemetry, which can be exported to multiple storage options and visualized in a variety of ways.`,
    urls: [
      { label: 'GitHub', url: 'https://github.com/microsoft/retina' },
      { label: 'Website', url: 'https://retina.sh' },
    ],
    githubStars: 2900,
  },
  {
    logoUrl: 'https://github.com/hengyoush/kyanos',
    name: 'kyanos',
    logoName: 'kyanosLogo',
    title: 'eBPF based networking analysis command line tool',
    description: `Kyanos uses eBPF to collect network traffic events 
    at both the application layer and the kernel. From these eBPF events, 
    it visualizes the time consumption of network data in the kernel and 
    calculates various aggregated metrics on the network flow, making 
    troubleshooting more efficient.`,
    urls: [
      { label: 'GitHub', url: 'https://github.com/hengyoush/kyanos' },
      { label: 'Website', url: 'https://kyanos.io' },
    ],
    githubStars: 4000,
  },
  {
    logoUrl: 'https://github.com/kinvolk/inspektor-gadget',
    name: 'Inspektor Gadget',
    logoName: 'inspektorGadgetLogo',
    title: 'Introspecting and debugging Kubernetes applications using eBPF "gadgets"',
    description: `Inspektor Gadget is a collection of tools (or gadgets) to
    debug and inspect Kubernetes resources and applications. It manages the
    packaging, deployment and execution of eBPF programs in a Kubernetes
    cluster, including many based on BCC tools, as well as some developed
    specifically for use in Inspektor Gadget. It automatically maps low-level
    kernel primitives to high-level Kubernetes resources, making it easier and
    quicker to find the relevant information.`,
    urls: [
      { label: 'GitHub', url: 'https://github.com/kinvolk/inspektor-gadget' },
      { label: 'Website', url: 'https://www.inspektor-gadget.io/' },
    ],
    githubStars: 2400,
  },
  {
    logoUrl: 'https://github.com/Sysinternals/SysmonForLinux',
    name: 'Sysinternals Sysmon for Linux',
    logoName: 'sysinternalsLogo',
    title: 'Security Observability',
    description: `Sysmon for Linux is a tool that monitors and logs system activity including process lifetime, network
    connections, file system writes, and more. Sysmon works across reboots and supports advanced filtering to help identify
    malicious activity as well as how intruders and malware operate on your network.`,
    urls: [{ label: 'GitHub', url: 'https://github.com/Sysinternals/SysmonForLinux' }],
    githubStars: 1800,
  },
  {
    logoUrl: 'https://github.com/groundcover-com/caretta',
    name: 'Caretta',
    logoName: 'carettaLogo',
    title: 'eBPF based Kubernetes service map',
    description: `Caretta is a Kubernetes service map that uses eBPF to trace network traffic between pods.
    It can be used to visualize the network traffic between services in a Kubernetes cluster,
    and gain additional insights into the network traffic and the relationships between services.`,
    urls: [{ label: 'GitHub', url: 'https://github.com/groundcover-com/caretta' }],
    githubStars: 1900,
  },
  {
    logoUrl: 'https://github.com/solo-io/bumblebee',
    name: 'BumbleBee',
    logoName: 'bumblebeeLogo',
    title: 'OCI compliant eBPF tooling',
    description: `BumbleBee simplifies building eBPF tools and allows you to package,
    distribute, and run eBPF programs using OCI images. It allows you to
    just focus on the eBPF portion of your code and BumbleBee automates
    away the boilerplate, including the userspace code.`,
    urls: [
      { label: 'GitHub', url: 'https://github.com/solo-io/bumblebee' },
      { label: 'Website', url: 'https://bumblebee.io/' },
    ],
    githubStars: 1300,
  },
  {
    logoUrl: 'https://github.com/kubearmor/KubeArmor',
    name: 'KubeArmor',
    logoName: 'kubeArmorLogo',
    title: 'Container-aware Runtime Security Enforcement System',
    description: `KubeArmor is a container-aware runtime security enforcement system
    that restricts the behavior (such as process execution, file access,
    networking operation, and resource utilization) of containers at the
    system level, using LSMs and eBPF.`,
    urls: [
      { label: 'GitHub', url: 'https://github.com/kubearmor/KubeArmor' },
      { label: 'Website', url: 'https://kubearmor.com' },
    ],
    githubStars: 1700,
  },
  {
    logoUrl: 'https://github.com/grafana/beyla',
    name: 'Beyla',
    logoName: 'beylaLogo',
    title: 'Zero-code automatic instrumentation with eBPF and OpenTelemetry',
    description: `Beyla is a vendor agnostic, OpenTelemetry and Prometheus application auto-instrumentation tool,
    which lets you easily get started with Application Observability. eBPF is used to automatically inspect
    application executables and the OS networking layer, allowing us to capture essential application observability
    events for HTTP/S and gRPC services. From these captured eBPF events, we produce OpenTelemetry web transaction
    trace spans and Rate-Errors-Duration (RED) metrics. As with most eBPF tools, all data capture and instrumentation
    occurs without any modifications to your application code or configuration.`,
    urls: [
      { label: 'GitHub', url: 'https://github.com/grafana/beyla' },
      { label: 'Website', url: 'https://grafana.com/oss/beyla-ebpf/' },
    ],
    githubStars: 1600,
  },
  {
    logoUrl: 'https://github.com/iovisor/ply',
    name: 'ply',
    logoName: 'plyLogo',
    title: 'A dynamic tracer for Linux',
    description: `ply is a dynamic tracer for Linux which is built upon eBPF. It has
    been designed with embedded systems in mind, is written in C and all
    that ply needs to run is libc and a modern Linux kernel with eBPF
    support, meaning, it does not depend on LLVM for its program
    generation. It has a C-like syntax for writing scripts and is
    heavily inspired by awk(1) and dtrace(1).`,
    urls: [
      { label: 'GitHub', url: 'https://github.com/iovisor/ply' },
      { label: 'Website', url: 'https://wkz.github.io/ply/' },
    ],
    githubStars: 996,
  },
  {
    logoUrl: 'https://github.com/sustainable-computing-io/kepler',
    name: 'Kepler',
    logoName: 'keplerLogo',
    title: 'Kubernetes-based Efficient Power Level Exporter',
    description: `Kepler (Kubernetes-based Efficient Power Level Exporter) is a Prometheus exporter.
    It uses eBPF to probe CPU performance counters and Linux kernel tracepoints.
    These data and stats from cgroup and sysfs are fed into ML models to estimate energy consumption by Pods.`,
    urls: [
      {
        label: 'GitHub',
        url: 'https://github.com/sustainable-computing-io/kepler',
      },
      { label: 'Website', url: 'https://sustainable-computing.io' },
    ],
    githubStars: 1300,
  },
  {
    logoUrl: 'https://github.com/Exein-io/pulsar',
    name: 'Pulsar',
    logoName: 'pulsarLogo',
    title: 'A modular runtime security framework for the IoT',
    description: `Pulsar is an event-driven framework for monitoring the activity
    of Linux devices. It allows you to collect runtime activity events from
    the Linux kernel through its modules and evaluate each event against your own
    set of security policies. Powered by eBPF and written in Rust, Pulsar is
    lightweight and safe by design.`,
    urls: [
      { label: 'GitHub', url: 'https://github.com/Exein-io/pulsar' },
      { label: 'Website', url: 'https://pulsar.sh/' },
    ],
    githubStars: 993,
  },
  {
    logoUrl: 'https://github.com/merbridge/merbridge',
    name: 'Merbridge',
    logoName: 'merbridgeLogo',
    title: 'Use eBPF to speed up your Service Mesh like crossing an Einstein-Rosen Bridge',
    description: `Merbridge is designed to make traffic interception and forwarding more efficient for service mesh. With Merbridge, developers can use eBPF instead of iptables to accelerate their service mesh without any additional operations or code changes. Currently, Merbridge already supports Istio, Linkerd, and Kuma.`,
    urls: [
      { label: 'GitHub', url: 'https://github.com/merbridge/merbridge' },
      { label: 'Website', url: 'https://merbridge.io/' },
    ],
    githubStars: 771,
  },
  {
    logoUrl: 'https://github.com/kindlingproject/kindling',
    name: 'Kindling',
    logoName: 'kindlingLogo',
    title: 'eBPF-based Cloud Native Monitoring & Profiling Tool',
    description: `Kindling is a monitoring tool that aims to help users understand the execution behavior of programs from kernel space to user space to pinpoint the root cause of critical incidents. It can obtain L4/L7 network performance metrics and build service maps. Kindling implements a mechanism, Trace Profiling, that can display how each trace is executing on-CPU with thread-level flame graph, and how it is slowed down by off-CPU events with related metrics.`,
    urls: [
      { label: 'GitHub', url: 'https://github.com/kindlingproject/kindling' },
      { label: 'Website', url: 'http://kindling.harmonycloud.cn' },
    ],
    githubStars: 1000,
  },
  {
    logoUrl: 'https://github.com/rubrikinc/wachy',
    name: 'wachy',
    logoName: 'wachyLogo',
    title: 'UI for interactive eBPF-based userspace performance debugging',
    description: `Wachy is a profiler that uses eBPF to trace arbitrary compiled binaries and functions at runtime. It aims to make eBPF uprobe-based debugging much easier to use by displaying traces in a UI next to the source code, and allowing interactive drilldown analysis.`,
    urls: [
      { label: 'GitHub', url: 'https://github.com/rubrikinc/wachy' },
      { label: 'Website', url: 'https://rubrikinc.github.io/wachy/' },
    ],
    githubStars: 564,
  },

  {
    logoUrl: 'https://github.com/getanteon/alaz',
    name: 'Alaz',
    logoName: 'alazLogo',
    title: 'Effortless, Low-Overhead, eBPF-based Kubernetes Monitoring',
    description: `Alaz is an open source Anteon eBPF agent that can inspect and collect Kubernetes service traffic
    without the need for code instrumentation, sidecars, or service restarts.
    Alaz uses eBPF to create a Service Map that helps identify golden signals and problems like high latencies, 5xx errors, zombie services, slow HTTP requests, and SQL queries.`,
    urls: [{ label: 'GitHub', url: 'https://github.com/getanteon/alaz' }],
  },
  {
    logoUrl: 'https://github.com/eunomia-bpf/eunomia-bpf',
    name: 'eunomia-bpf',
    logoName: 'eunomiaLogo',
    title: 'eBPF programs in a WASM module or JSON',
    description: `Eunomia-bpf is a dynamic loading library, based on libbpf, and a compiler toolchain.
    Eunomia-bpf simplifies building eBPF tools and allows you to package, distribute,
    and run eBPF programs in JSON format or as a WASM module. With eunomia-bpf, you can write kernel eBPF code
    and automatically expose your data from the kernel and interact with eBPF program in user space with a WASM runtime.`,
    urls: [
      { label: 'GitHub', url: 'https://github.com/eunomia-bpf/eunomia-bpf' },
      { label: 'Website', url: 'https://eunomia.dev/' },
    ],
  },
  {
    logoUrl: 'https://github.com/alibaba/kubeskoop',
    name: 'KubeSkoop',
    logoName: 'kubeskoopLogo',
    title: 'Network monitoring & diagnosis suite for Kubernetes',
    description: `KubeSkoop is a toolset designed to assist users in monitoring and diagnosing network-related
    issues within Kubernetes environments. It uses eBPF to provide pod-level kernel metrics and anomaly events, enabling
    users quickly detect and solve network issues in their Kubernetes clusters.`,
    urls: [
      { label: 'Github', url: 'https://github.com/alibaba/kubeskoop' },
      { label: 'Website', url: 'https://kubeskoop.io' },
    ],
    githubStars: 678,
  },
  {
    logoUrl: 'https://github.com/l3af-project',
    name: 'L3AF',
    logoName: 'l3afLogo',
    title: 'Complete lifecycle management of eBPF programs',
    description: `L3AF is a platform to launch and manage eBPF programs in distributed
    environments. L3AF empowers users to compose multiple eBPF programs
    together to solve unique problems in different environments. Using
    the APIs provided by L3AF, these eBPF programs can be reconfigured,
    updated, inspected, and reordered on-the-fly. L3AF also provides
    configurable metrics for the eBPF programs it has launched.`,
    urls: [
      { label: 'GitHub', url: 'https://github.com/l3af-project' },
      { label: 'Website', url: 'https://l3af.io' },
    ],
    githubStars: 726,
  },
  {
    logoUrl: 'https://skywalking.apache.org/',
    name: 'Apache SkyWalking',
    logoName: 'skywalkingLogo',
    title: 'APM, Application Performance Monitoring System',
    description: `Apache SkyWalking is an application performance monitor tool for distributed systems,
    especially designed for microservices, cloud native and container-based (Kubernetes) architectures.
    SkyWalking Rover is an agent in the SkyWalking ecosystem, as a metrics collector and profiler
    powered by eBPF to diagnose CPU, I/O and L4/L7(TLS) network performance. Also, Rover provides add-on events for
    spans in the distributed tracing.`,
    urls: [
      { label: 'GitHub', url: 'https://github.com/apache/skywalking-rover' },
      { label: 'Website', url: 'https://skywalking.apache.org/' },
    ],
    githubStars: 216,
  },
  {
    logoUrl: 'https://github.com/loxilb-io/loxilb',
    name: 'LoxiLB',
    logoName: 'loxiLBLogo',
    title: 'eBPF based cloud-native load-balancer for 5G Edge',
    description: `LoxiLB is an open-source cloud-native "external" service load-balancer for cloud-native 5G/edge workloads written from scratch using eBPF as its core-engine and based on Go Language. LoxiLB turns Kubernetes network load balancing for 5G/Edge services into high speed, flexible and programmable LB services.`,
    urls: [
      { label: 'GitHub', url: 'https://github.com/loxilb-io/loxilb' },
      { label: 'Website', url: 'https://www.loxilb.io/' },
    ],
    githubStars: 1600,
  },
  {
    logoUrl: 'https://github.com/bpfman/bpfman',
    name: 'bpfman',
    logoName: 'bpfmanLogo',
    title: 'System manager and Kubernetes operator for eBPF programs',
    description: `bpfman is a software stack that aims to make it easy to load,
    unload, modify and monitor eBPF programs whether on a single host, or in a
    Kubernetes cluster. It provides insights into how eBPF is utilized on a system,
    includes a built-in program loader that supports program cooperation for XDP
    and TC programs, and manages the eBPF filesystem, facilitating the deployment
    of eBPF applications without requiring additional privileges`,
    urls: [
      { label: 'GitHub', url: 'https://github.com/bpfman/bpfman' },
      { label: 'Website', url: 'https://bpfman.io' },
    ],
    githubStars: 593,
  },
  {
    logoUrl: 'https://github.com/kong/blixt',
    name: 'blixt',
    logoName: 'blixtLogo',
    title: 'Layer 4 Kubernetes load-balancer',
    description: `Blixt is a layer 4 load-balancer for Kubernetes. It has a control-plane
    implemented using Gateway API and a data-plane built using eBPF and Rust.`,
    urls: [{ label: 'GitHub', url: 'https://github.com/kong/blixt' }],
    githubStars: 397,
  },
  {
    logoUrl: 'https://github.com/netobserv/netobserv-ebpf-agent',
    name: 'netobserv',
    logoName: 'netobservLogo',
    title: 'Flow based observability platform',
    description: `NetObserv eBPF agent empowers the collection of essential network metrics,
    including the tracking of network flow statistics. It conducts in-depth DNS latency analysis for DNS over UDP and TCP,
    allowing for the measurement of the time it takes for DNS requests to be processed.
    Additionally, it calculates TCP round trip latency on a per-flow basis, aiding in the identification of latency-related
    issues within TCP connections.
    The agent also provides insights into packet drops, offering protocol-specific drop metrics along with the reasons for packet drops.
    Furthermore, NetObserv eBPF offers filter-based capabilities for capturing raw network packets,
    enabling administrators to focus on specific network events or issues of interest.
    These captured packets are stored in the widely supported .pcap format,
    facilitating easy post-analysis and compatibility with various network analysis tools.`,
    urls: [{ label: 'GitHub', url: 'https://github.com/netobserv/netobserv-ebpf-agent' }],
    githubStars: 157,
  },
  {
    logoUrl: 'https://github.com/openshift/ingress-node-firewall',
    name: 'ingress-node-firewall',
    logoName: 'ingressNodeFirewallLogo',
    title: 'Statless Ingress Node Firewall',
    description: `The Ingress node firewall is orchestrated by a Kubernetes operator designed to provision stateless
    firewall rules at the node level. The stateless Ingress node firewall is achieved through the utilization of an eBPF
     XDP kernel plugin.`,
    urls: [{ label: 'GitHub', url: 'https://github.com/openshift/ingress-node-firewall' }],
    githubStars: 52,
  },
  {
    logoUrl: 'https://github.com/Netflix/bpftop',
    name: 'bpftop',
    logoName: 'bpftopLogo',
    title: 'Real-time eBPF Program Monitoring and Performance Statistics',
    description: `bpftop provides a dynamic real-time view of running eBPF programs. It displays the average runtime, 
    events per second, and estimated total CPU % for each program. It also provides graphical views of these statistics over time. 
    This tool minimizes overhead by enabling performance statistics only while it is active.`,
    urls: [{ label: 'GitHub', url: 'https://github.com/Netflix/bpftop' }],
    githubStars: 2400,
  },
  {
    logoUrl: 'https://github.com/tarsal-oss/kflowd',
    name: 'kflow',
    logoName: 'kflowLogo',
    title: 'Process Monitoring on Linux Endpoints via eBPF',
    description: ` kflow is an open source project that implements Process
    Monitoring on Linux Endpoints for File System, TCP, and UDP Networking
    Events via the eBPF Subsystem.
    kflow is built with libbpf+CO-RE and runs on Linux kernels 5.10+.
    `,
    urls: [
      { label: 'GitHub', url: 'https://github.com/tarsal-oss/kflowd' },
      { label: 'Website', url: 'https://tarsal.co/kflow/' },
    ],
    githubStars: 58,
  },
  {
    logoUrl: 'https://github.com/open-telemetry/opentelemetry-ebpf-profiler',
    name: 'OpenTelemetry eBPF Profiler',
    logoName: 'otelLogo',
    title: 'Whole-system, cross-language continuous profiler for Linux',
    description: `The Open Telemetry eBPF-based continuous profiler offers comprehensive, low-overhead whole-system profiling for
    Linux systems. It supports a wide range of programming languages, including native code without debug symbols, and provides
    deep insights into application behavior. By leveraging the experimental OTel profiling signals, this project empowers developers
    to identify performance bottlenecks and optimize their applications efficiently.`,
    urls: [
      { label: 'GitHub', url: 'https://github.com/open-telemetry/opentelemetry-ebpf-profiler' },
    ],
    githubStars: 2700,
  },
  {
    logoUrl: 'https://github.com/davidcoles/vc5',
    name: 'vc5',
    logoName: 'vc5Logo',
    title: 'Layer 4 load balancer for Linux',
    description: `vc5 is an XDP based Direct Server Return (DSR) layer 4 load balancer with a use case in replacing
    hardware appliances. Service health checks and BGP-based Route Health Injection (RHI) are built in. A web console,
    JSON stats endpoint, Prometheus metrics, logging with Elasticsearch, and alerting with webhooks are included.`,
    urls: [{ label: 'GitHub', url: 'https://github.com/davidcoles/vc5' }],
    githubStars: 83,
  },
];

export default emergingApplications;
