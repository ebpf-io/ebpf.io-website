import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import cn from "classnames";
import Helmet from "react-helmet";
import { Link } from "gatsby";
import Carousel from "nuka-carousel";
import ModalVideo from "react-modal-video";
import { useLocation } from '@reach/router';
import queryString from 'query-string';
import "../stylesheets/index.scss";
import "../../node_modules/react-modal-video/scss/modal-video.scss";
const pageMetaTitle = 'eBPF Summit 2020'
const pageMetaDescription = 'Registration is now open for the inaugural eBPF Summit, a virtual event, targeted at DevOps, SecOps, platform architects, and developers. To be held October 28-29, 2020.'
const speakers = [
  {
    card: {
      avatarSrc: require("../assets/summit-2020/alexey-starovoitov.jpg"),
      id: "alexey-starovoitov",
      name: "Alexei Starovoitov",
      description: "Co-maintainer eBPF, Facebook"
    },

    about: {
      title: "Safe Programs. The Foundation of BPF",

      description: [
        <>Everything runs in the cloud. The cloud is built on the linux kernel.</>,
        <>Extending the linux kernel is not an easy task: One mistake and the monolithic kernel will crash taking down the cloud. When bugs are finally fixed the reboot of the large cloud will take a long time.</>,
        <>BPF is the kernel programming model that lets developers extend the kernel safely and add features to the live system without reboot.</>,
        <>The verifier ensures safety of the BPF programs, but it's not just the verifier.</>,
        <>The accelerating trend in the BPF universe is BPF Type Format and its use in safe argument matching, pointer dereferences, exception tables, and program portability from 64-bit x86 to 32-bit arm. Safety is a foundation.</>,
      ]
    }
  },
  {
    card: {
      avatarSrc: require("../assets/summit-2020/brendan-gregg.jpg"),
      id: "brendan-gregg",
      name: "Brendan Gregg",
      description: "Author of “BPF Performance Tools“, Lead Performance Engineer, Netflix"
    },

    about: {
      title: "Performance Wins with BPF: Getting Started",
      description: [<></>]
    }
  },
  {
    card: {
      avatarSrc: require("../assets/summit-2020/daniel-borkmann.jpg"),
      id: "daniel-borkmann",
      name: "Daniel Borkmann",
      description: "Co-maintainer eBPF, Isovalent"
    },

    about: {
      title: "BPF as a Fundamentally Better Dataplane",

      description: [
        <>BPF is seeing a rapid pace of development in the Linux kernel and tremendous adoption and growth in the user space landscape. Use cases often span the networking, tracing and security space, but their boundaries are blurred and do reach beyond these subsystems. This talk provides a deep dive on why BPF is a fundamental shift compared to more traditional kernel subsystems and why it is the best tool for the job in terms of performance, scalability, and operations in the age of containerization. We'll also dive into a few examples of recent kernel advancements from the BPF subsystem.</>,
      ]
    }
  },
  {
    card: {
      avatarSrc: require("../assets/summit-2020/kris-nova.jpg"),
      id: "kris-nova",
      name: "Kris Nóva",
      description: "Software Engineer & Open Source Advocate"
    },

    about: {
      title: "Kernel tracing in production with Falco",

       description: [
        <>Join Kris Nóva as we look at how Falco uses eBPF for kernel tracing. The constraints of running Kubernetes in GKE left the Falco project without the ability to run a kernel module. See how we dynamically load a BPF probe at runtime bypass this constraint.</>,
      ]
    }
  },
  {
    card: {
      avatarSrc: require("../assets/summit-2020/kp-singh.jpg"),
      id: "kp-singh",
      name: "KP Singh",
      description: "Kernel Runtime Security, Google"
    },

    about: {
      title: "Security Auditing and Enforcement using eBPF",

      description: [
        <>The BPF Linux Security Module unleashes the power of eBPF to the world of Linux Security by providing a unified interface for access control and auditing. The talk goes through the motivations behind developing a BPF based LSM, showcases some of the ways in which it is used at Google and provides some insights and updates on upcoming features that users can leverage.</>,
      ]
    }
  },
  {
    card: {
      avatarSrc: require("../assets/summit-2020/laurent-bernaille.jpg"),
      id: "laurent-bernaille",
      name: "Laurent Bernaille",
      description: "Staff Engineer, Datadog"
    },

    about: {
      title: "Our eBPF Journey at Datadog",

      description: [
        <>As large-scale Kubernetes end-users, Datadog has grown through many technical challenges of running thousands of nodes and tens of thousands of pods. eBPF has been key to scaling our networking, and promises further improvements. Additionally, eBPF is providing the means to build new capabilities in our products. Laurent and Tabitha will share some of this history, thoughts on Datadog's current utilization of eBPF, and hopes for the future.</>,
      ]
    }
  },
  {
    card: {
      avatarSrc: require("../assets/summit-2020/liz-rice.jpg"),
      id: "liz-rice",
      name: "Liz Rice",
      description: "VP, Open Source Engineering, Aqua"
    },

    about: {
      title: "A Beginner’s Guide to eBPF Programming",

      description: [
        <>You’ve heard about eBPF as an exciting technology that opens up a world of new observability, security and networking capabilities. But how do you write eBPF programs? In this talk Liz will show you how to get started so you can run your own custom code in the Linux kernel - or even if you don’t plan to write eBPF yourself, it will help you understand how the technology works.</>,
      ]
    }
  },
  {
    card: {
      avatarSrc: require("../assets/summit-2020/tabitha-sable.jpg"),
      id: "tabitha-sable",
      name: "Tabitha Sable",
      description: "Systems Security Engineer, Datadog"
    },

    about: {
      title: "Our eBPF Journey at Datadog",

      description: [
        <>As large-scale Kubernetes end-users, Datadog has grown through many technical challenges of running thousands of nodes and tens of thousands of pods. eBPF has been key to scaling our networking, and promises further improvements. Additionally, eBPF is providing the means to build new capabilities in our products. Laurent and Tabitha will share some of this history, thoughts on Datadog's current utilization of eBPF, and hopes for the future.</>,
      ]
    }
  },
  {
    card: {
      avatarSrc: require("../assets/summit-2020/tomas-graf.jpg"),
      id: "tomas-graf",
      name: "Thomas Graf",
      description: "Co-creator of the Cilium Project, Isovalent"
    },
    about: {
      title: "The Future of eBPF-based Networking and Security",

      description: [
        <>The future of Networking and Security is based on eBPF. How will this new world look like? There is a massive potential of evolution in the infrastructure space ahead of us as we tap further into the powers of eBPF.  We'll explore what is already possible today and what is yet to come as eBPF-based projects continue to evolve and provide benefits to the ecosystem.</>,
      ]
    }
  },
  {
    card: {
      avatarSrc: require("../assets/summit-2020/zang-li.jpg"),
      id: "zang-li",
      name: "Zang Li",
      description: "Cilium Core Team Maintainer, Google"
    },

    about: {
      title: "Kubernetes Network Policy Logging with eBPF",

      description: [
        <>In Kubernetes, micro-segmentation is achieved through network policy which specifies how pods are allowed to communicate with one another.  Policy visibility is a key requirement for many Kubernetes customers who use network policy to secure their cluster.  In this talk, Zang will show how Google built Kubernetes network policy logging with eBPF and how the policy visibility is achieved efficiently.</>
      ]
    }
  },
]

const agenda = [
  {
    title: "Day 1:",

    schedule: [
      {
        time: <>09:00 - 09:15</>,
        title: <>Welcome</>,
      },

      {
        time: "09:15 - 09:35",
        title: <><i>A Beginner’s Guide to eBPF Programming</i><br/>Liz&nbsp;Rice</>,

        description: <>
          <p>You’ve heard about eBPF as an exciting technology that opens up a world of new observability, security and networking capabilities. But how do you write eBPF programs? In this talk Liz will show you how to get started so you can run your own custom code in the Linux kernel - or even if you don’t plan to write eBPF yourself, it will help you understand how the technology works.</p>
        </>
      },

      {
        time: "09:35 - 09:55",
        title: <><i>BPF as a Fundamentally Better Dataplane</i><br/>Daniel&nbsp;Borkmann</>,

        description: <>
          <p>BPF is seeing a rapid pace of development in the Linux kernel and tremendous adoption and growth in the user space landscape. Use cases often span the networking, tracing and security space, but their boundaries are blurred and do reach beyond these subsystems. This talk provides a deep dive on why BPF is a fundamental shift compared to more traditional kernel subsystems and why it is the best tool for the job in terms of performance, scalability, and operations in the age of containerization. We'll also dive into a few examples of recent kernel advancements from the BPF subsystem.</p>
        </>,
      },

      {
        time: "09:55 - 10:00",
        title: <>Break</>,
      },

      {
        time: "10:00 - 10:20",
        title: <><i>Our eBPF Journey at Datadog</i><br/>Laurent&nbsp;Bernaille and Tabitha&nbsp;Sable</>,

        description: <>
          <p>As large-scale Kubernetes end-users, Datadog has grown through many technical challenges of running thousands of nodes and tens of thousands of pods. eBPF has been key to scaling our networking, and promises further improvements. Additionally, eBPF is providing the means to build new capabilities in our products. Laurent and Tabitha will share some of this history, thoughts on Datadog's current utilization of eBPF, and hopes for the future.</p>
        </>
      },

      {
        time: "10:20 - 10:40",
        title: <><i>Security Auditing and Enforcement using eBPF</i><br/>KP&nbsp;Singh</>,

        description: <>
          <p>The BPF Linux Security Module unleashes the power of eBPF to the world of Linux Security by providing a unified interface for access control and auditing. The talk goes through the motivations behind developing a BPF based LSM, showcases some of the ways in which it is used at Google and provides some insights and updates on upcoming features that users can leverage.</p>
        </>,
      },

      {
        time: "10:40 - 10:45",
        title: <>Break</>,
      },

      {
        time: "10:45 - 12:05",
        title: <>Lightning talks <Link className="link" to="#lightning-talks">see below</Link></>,
      },

      {
        time: "12:05 - 12:15",
        title: <>Closing comments</>,
      },
    ]
  },

  {
    title: "Day 2:",

    schedule: [
      {
        time: <>09:00 - 09:10</>,
        title: <>Welcome</>,
      },

      {
        time: "09:10 - 09:30",
        title: <><i>Safe Programs. The Foundation of BPF</i><br/>Alexei&nbsp;Starovoitov</>,

        description: <>
          <p>Everything runs in the cloud. The cloud is built on the linux kernel.</p>
          <p>Extending the linux kernel is not an easy task: One mistake and the monolithic kernel will crash taking down the cloud. When bugs are finally fixed the reboot of the large cloud will take a long time.</p>
          <p>BPF is the kernel programming model that lets developers extend the kernel safely and add features to the live system without reboot.</p>
          <p>The verifier ensures safety of the BPF programs, but it's not just the verifier.</p>
          <p>The accelerating trend in the BPF universe is BPF Type Format and its use in safe argument matching, pointer dereferences, exception tables, and program portability from 64-bit x86 to 32-bit arm. Safety is a foundation.</p>
        </>
      },

      {
        time: "09:30 - 09:50",
        title: <><i>Kernel tracing in production with Falco</i><br/>Kris&nbsp;Nova</>,
      },

      {
        time: "09:50 - 09:55",
        title: <>Break</>,
      },

      {
        time: "09:55 - 10:15",
        title: <><i>Performance Wins with BPF: Getting Started</i><br/>Brendan&nbsp;Gregg</>,
      },

      {
        time: "10:15 - 10:35",
        title: <><i>Kubernetes Network Policy Logging with eBPF</i><br/>Zang&nbsp;Li</>,

        description: <>
          <p>In Kubernetes, micro-segmentation is achieved through network policy which specifies how pods are allowed to communicate with one another. Policy visibility is a key requirement for many Kubernetes customers who use network policy to secure their cluster. In this talk, Zang will show how Google built Kubernetes network policy logging with eBPF and how the policy visibility is achieved efficiently.</p>
        </>
      },

      {
        time: "10:35 - 10:55",
        title: <><i>The Future of eBPF-based Networking and Security</i><br/>Thomas&nbsp;Graf</>,

        description: <>
          <p>The future of Networking and Security is based on eBPF. How will this new world look like? There is a massive potential of evolution in the infrastructure space ahead of us as we tap further into the powers of eBPF. We'll explore what is already possible today and what is yet to come as eBPF-based projects continue to evolve and provide benefits to the ecosystem.</p>
        </>
      },

      {
        time: "10:55 - 11:00",
        title: <>Break</>,
      },

      {
        time: "11:00 - 12:15",
        title: <>Lightning talks <Link className="link" to="#lightning-talks">see below</Link></>,
      },

      {
        time: "12:15 - 12:30",
        title: <>Closing comments</>,
      },
    ]
  }
]

const lightningTalks = [
  {
    title: "Using BCC and bpftrace with Performance Co-Pilot",
    name: "Andreas Gerstmayr",
    organization: "Red Hat",
    videoId: "hm5ygaJh5iw",
  },

  {
    title: "Containers and BPF: twagent Story",
    name: "Andrey Ignatov",
    organization: "Facebook"
  },

  {
    title: "Zero Instrumentation Monitoring with Your First Steps in eBPF",
    name: "Beatriz Martínez",
    organization: "Isovalent",
    videoId: "nDWmTU5iOpE",
  },

  {
    title: "Building a Secure and Maintainable PaaS",
    name: "Bradley Whitfield",
    organization: "Capital One",
    videoId: "k12N5lq1Gas",
  },

  {
    title: "eBPF at Adobe",
    name: "Brandon Cook",
    organization: "Adobe",
    videoId: "ike2IDC9xtw",
  },

  {
    title: "How and When You Should Measure CPU Overhead of eBPF Programs",
    name: "Bryce Kahle",
    organization: "Datadog",
    videoId: "W5gG-Svh_bg",
  },

  {
    title: "Building a Behavioral Knowledge Graph using eBPF",
    name: "Dinesh Venkatesan + Aditi Bhatnagar",
    organization: "Microsoft"
  },

  {
    title: "Can eBPF Save Us from the Data Deluge? A Case for File Filtering in eBPF",
    name: "Giulia Frascaria",
    organization: "Vrije Universiteit Amsterdam",
    videoId: "OwxCwSyP2N4",
  },

  {
    title: "Tracing and Detecting Malware using eBPF",
    name: "Itay Shakury",
    organization: "Aqua Security"
  },

  {
    title: "Steering Connections to Sockets with BPF Socket Lookup Hook",
    name: "Jakub Sitnicki",
    organization: "Cloudflare",
    videoId: "Hw1yRAmNz28",
  },

  {
    title: "Building rbperf, a Ruby BPF Profiler",
    name: "Javier Honduvilla Coto",
    organization: "Facebook"
  },

  {
    title: "Enabling eBPF Super Powers on ARM64 with Cilium",
    name: "Jianlin Lv",
    organization: "Arm",
    videoId: "hdUywxvsYKI",
  },

  {
    title: "How to Ship BPF with Your Go project",
    name: "Lorenz Bauer",
    organization: "Cloudflare"
  },

  {
    title: "Debugging the eBPF Virtual Machine",
    name: "Lorenzo Fontana",
    organization: "Sysdig",
    videoId: "m03dIt2i7CQ",
  },

  {
    title: "Traffic Control the Rabbit with Rust using RedBPF",
    name: "Lou Xun",
    organization: "CCP Games"
  },

  {
    title: "Global Gaming Infrastructure with Cilium",
    name: "Luan Guimarães",
    organization: "Wildlife Studios"
  },

  {
    title: "Implementation of Hardware Breakpoint in BCC",
    name: "Manali Shukla",
    organization: "Cisco",
    videoId: "C3rfcZMiWvo",
  },

  {
    title: "North-South Load Balancing of Kubernetes Services with eBPF/XDP",
    name: "Martynas Pumputis",
    organization: "Isovalent",
    videoId: "GNePX4Sw6uA",
  },

  {
    title: "Identity Aware Threat Detection and Network Monitoring by using eBPF",
    name: "Natalia Reka Ivanko",
    organization: "Isovalent",
    videoId: "wkFQ1H0GI88",
  },

  {
    title: "Scaling a Multi-Tenant k8s Cluster in a Telco",
    name: "Pablo Moncada",
    organization: "MasMovil",
    videoId: "o6kNhmuOeMY",
  },

  {
    title: "The Tale of Smokey and the Crypto Bandits",
    name: "Ramiro Berrelleza",
    organization: "Okteto",
    videoId: "KP0yWWzMN70",
  },

  {
    title: "Securing Kubernetes Clusters with DevSecOps and GitLab",
    name: "Sam White",
    organization: "GitLab",
    videoId: "adelo4XyNf0",
  },
  {
    title: "From Managed Kubernetes to App Platform: 1.5 Years of Cilium Usage at DigitalOcean",
    name: "Timo Reimann",
    organization: "DigitalOcean",
  },

  {
    title: "Past, Present, and Future of Cilium and Hubble at Palantir",
    name: "Vlad Ungureanu",
    organization: "Palantir"
  },

  {
    title: "bpfbox: Simple Precise Process Confinement with KRSI and eBPF",
    name: "William Findlay",
    organization: "Carleton University",
    videoId: "GZ7qutLXDY4",
  },

  {
    title: "eBPF at LINE's Private Cloud",
    name: "Yutaro Hayakawa",
    organization: "LINE Corporation",
    videoId: "yiQ9muH8IGg",
  },

  {
    title: "Debugging Go in Prod using eBPF",
    name: "Zain Asgar",
    organization: "Pixie",
    videoId: "IGLs_Om6DG8",
  },
]

const slides = [
  {
    name: 'Lou Xun',
    title: 'CCP Games',

    description: <>
      <ul>
        <li>Differences in some network related BPF programs</li>
        <li>Extend RedBPF to support building tc_cls_act BPF programs</li>
        <li>Build a stateful BPF program using maps</li>
        <li>Test things out and drawbacks...</li>
      </ul>
    </>,

    popupTitle: 'Traffic Control the Rabbit with Rust using RedBPF',

    popupDescription: <>
      <ul>
        <li>Differences in some network related BPF programs</li>
        <li>Extend RedBPF to support building tc_cls_act BPF programs</li>
        <li>Build a stateful BPF program using maps</li>
        <li>Test things out and drawbacks</li>
        <li>Future plans to help make RedBPF a generic BPF compiler</li>
      </ul>
    </>
  },
  {
    name: 'Javier Honduvilla Coto',
    title: 'Facebook',

    description: <>
      <p>In this session we will cover the design an implementation of a Ruby profiler & tracer that runs in the BPF runtime. We will go through what advantages – such as being low-overhead and requiring no code modification – and tradeoffs a BPF profiler offers…</p>
    </>,

    popupTitle: 'Building rbperf, a Ruby BPF Profiler',

    popupDescription: <>
      <p>In this session we will cover the design an implementation of a Ruby profiler & tracer that runs in the BPF runtime. We will go through what advantages – such as being low-overhead and requiring no code modification – and tradeoffs a BPF profiler offers.</p>
      <p>We will describe some tips and tricks to overcome some of the limitations of the in-kernel BPF VM, especially important in very deep stacks, and how BPF can help in increasing the observability of complex applications written in high level languages through continuous profiling, even in production.</p>
    </>
  },
  {
    name: 'Lorenz Bauer',
    title: 'Cloudflare',

    description: <>
      <p>You've written some incredibly sophisticated BPF, and it works on your laptop. Now what? I'll show you how to use bpf2go to embed your BPF in a Go binary for maximum ease of use.</p>
    </>,

    popupTitle: 'How to Ship BPF with Your Go Project',
  },
  {
    name: 'Jianlin Lv',
    title: 'Arm',

    description: <>
      <p>Cilium has been widely used in modern Cloud Native developing. This talk will introduce the status of Cilium on the Arm64 platform and its future work; we're excited to start the journey of Cilium Arm64 support in Cilium v1.8: fixed compilation and runtime...</p>
    </>,

    popupTitle: 'Enabling eBPF Super Powers on ARM64 with Cilium',

    popupDescription: <>
      <p>Cilium has been widely used in modern Cloud Native developing. This talk will introduce the status of Cilium on the Arm64 platform and its future work; we're excited to start the journey of Cilium Arm64 support in Cilium v1.8: fixed compilation and runtime issues and added new jobs in Travis CI to run on the Arm64 platform. the Cilium team has initiated work to build images that support multi-CPU architecture; they will be available soon as regular image snapshots.</p>
    </>
  },
  {
    name: 'Natalia Reka Ivanko',
    title: 'Isovalent',

    description: <>
      <p>Traditional network-layer tools based on only IP addresses and ports are severely limited when it comes to threat detection and incident investigation in cloud-native environments like Kubernetes. They are facing with the challenge that workloads are containerized...</p>
    </>,

    popupTitle: 'Identity Aware Threat Detection and Network Monitoring by using eBPF',

    popupDescription: <>
      <p>Traditional network-layer tools based on only IP addresses and ports are severely limited when it comes to threat detection and incident investigation in cloud-native environments like Kubernetes. They are facing with the challenge that workloads are containerized, bundled together and IP addresses are frequently reassigned between them, providing no meaningful identity anymore.</p>
      <p>By leveraging Cilium and eBPF, Security Teams can extract deep identity and API-aware data (services, pods, containers etc) concerning all network connectivity within a Kubernetes environment and can export these data into existing log correlating tools (Splunk, ELK etc) to get more efficient threat detection.</p>
      <p>By using the extracted data from eBPF, one can detect a connection to a suspicious external IP or to sensitive CIDRs within the cluster coming from a specific workload. One can monitor the exact applications that are receiving traffic from the Internet and monitor all outbound connections as well.</p>
    </>
  },
  {
    name: 'Andreas Gerstmayr',
    title: 'Red Hat',

    description: <>
      <p>In this lightning talk I will present how to integrate custom BCC tools and bpftrace scripts to gather eBPF metrics and integrate them into the Performance Co-Pilot performance analysis toolkit. By integrating them into PCP, users can configure logging, alerting...</p>
    </>,

    popupTitle: 'Using BCC and bpftrace with Performance Co-Pilot',

    popupDescription: <>
      <p>In this lightning talk I will present how to integrate custom BCC tools and bpftrace scripts to gather eBPF metrics and integrate them into the Performance Co-Pilot performance analysis toolkit. By integrating them into PCP, users can configure logging, alerting, visualizations (in Grafana, using graphs, heatmaps and tables) and much more, based on metrics exported with BCC and bpftrace.</p>
    </>
  },
  {
    name: 'Giulia Frascaria',
    title: 'Vrije Universiteit Amsterdam',

    description: <>
      <p>eBPF was born for networking, and it shows! The ability to access, modify and drop in-flight packets is just one of the many eBPF superpowers. But how are packet operations different from file I/O, and why is it relevant to answer this question now?...</p>
    </>,

    popupTitle: 'Can eBPF Save Us from the Data Deluge? A Case for File Filtering in eBPF',

    popupDescription: <>
      <p>eBPF was born for networking, and it shows! The ability to access, modify and drop in-flight packets is just one of the many eBPF superpowers. But how are packet operations different from file I/O, and why is it relevant to answer this question now?</p>
      <p>In this talk we'll look at the potential use cases of allowing users to implement file filters in eBPF. Can eBPF file filters be the DoS mitigation in this world of Big Data? Data movement in datacenter networks is becoming expensive and too slow, if compared to the skyrocketing throughput of modern storage technologies. File filters in eBPF could mitigate this bottleneck by greatly reducing the transfer size, and I'll prove that with a prototype implementation!</p>
    </>
  },
  {
    name: 'Lorenzo Fontana',
    title: 'Sysdig',

    description: <>
      <p>While working with eBPF it can happen that after successfully compiling your program you find yourself in a situation where the program can't be loaded in the kernel and bpf_prog_load just result in an error. The error can be either a verifier error or... </p>
    </>,

    popupTitle: 'Debugging the eBPF Virtual Machine',

    popupDescription: <>
      <p>While working with eBPF it can happen that after successfully compiling your program you find yourself in a situation where the program can't be loaded in the kernel and bpf_prog_load just result in an error. The error can be either a verifier error or even an initialization error (e.g a bad argument on a map). In both cases when that happens we always find ourselves with a very few options, either searching on the internet or trying to debug the program. In this talk, I will cover how, given the described scenario, I approach the debugging of a faulty eBPF program by instrumenting the Virtual Machine itself.</p>
    </>
  },
  {
    name: 'Pablo Moncada',
    title: 'MasMovil',

    description: <>
      <p>MasMovil is the fourth telecom provider in Spain with 10M customers and also provides communication to more than 700 local telco providers as a wholesale service.</p>
      <p>A cloud native stack is orchestrated by Kubernetes using Google’s GKE managed service with...</p>
    </>,

    popupTitle: 'Scaling a Multi-Tenant k8s Cluster in a Telco',

    popupDescription: <>
      <p>MasMovil is the fourth telecom provider in Spain with 10M customers and also provides communication to more than 700 local telco providers as a wholesale service.</p>
      <p>A cloud native stack is orchestrated by Kubernetes using Google’s GKE managed service with more than 7,000 pods.</p>
      <p>The spine of the stack leverages Kafka (Strimzi) as a communication bus and Istio as an authentication and observability platform.</p>
      <p>How can eBPF and Cilium take our platform to the next level?</p>
      <p>In a a multi-tenant cluster we need to take into consideration 3 main points:</p>

      <ul>
        <li>Security</li>
        <li>Scalability</li>
        <li>Costs</li>
      </ul>

      <p>From a security point of view Kubernetes and Istio are not suitable for all applications as L7 security is not enough and we require an advanced CNI that allows us to define network policies, audit them and be cost-effective.</p>
      <p>Having Istio’s sidecar injected into all our PODs have an increase of 10% of RAM on average and in some low memory consuming applications this can be up to 100% increase</p>
    </>
  },
  {
    name: 'Jakub Sitnicki',
    title: 'Cloudflare',

    description: <>
      <p>In Linux v5.9 we have introduced a new type of BPF hook for attaching BPF programs to L4 socket lookup, specifically to listening socket lookup for TCP, and to unconnected socket lookup for UDP.</p>
      <p>The user-provided BPF socket lookup program looks at the pac...</p>
    </>,

    popupTitle: 'Steering Connections to Sockets with BPF Socket Lookup Hook',

    popupDescription: <>
      <p>In Linux v5.9 we have introduced a new type of BPF hook for attaching BPF programs to L4 socket lookup, specifically to listening socket lookup for TCP, and to unconnected socket lookup for UDP.</p>
      <p>The user-provided BPF socket lookup program looks at the packet 4-tuple and selects the socket that will receive the packet. Such a mechanism allows users to create setups that beyond what bind() API can express. Connections can be steered to sockets according to any scheme the user is able to program with BPF, such as “binding” an IP subnet or a port range to a socket.</p>
      <p>The talk will go over:</p>

      <ul>
        <li>the steps to configure BPF socket lookup,</li>
        <li>operation of BPF socket lookup program,</li>
        <li>how to make network services work with BPF socket lookup.</li>
      </ul>
    </>
  },
  {
    name: 'Beatriz Martínez',
    title: 'Isovalent',

    description: <>
      <p>After years working with cloud environments, having seen born microservices architectures, DevOps paradigm, and recent observability with the era of applications instrumentation, you know eBPF is the next big thing and you’ve heard it all: performance opti...</p>
    </>,

    popupTitle: 'Zero Instrumentation Monitoring with Your First Steps in eBPF',

    popupDescription: <>
      <p>After years working with cloud environments, having seen born microservices architectures, DevOps paradigm, and recent observability with the era of applications instrumentation, you know eBPF is the next big thing and you’ve heard it all: performance optimizations, security, and networking benefits you want to bring to your environments. You are already looking into what tools out there you could bring to your platform teams, but don’t quite yet understand how this really works and you are one of those that really like to understand how the technology you are using works under the hood.</p>
      <p>If that sounds familiar to you, this lightning session will guide you through with a hands-on example covering a use case to monitor applications without editing or instrumenting them. Interact with the demo and get your country on the map!</p>
      <p>Want to know more and what this is about? don’t miss it!</p>
    </>
  },
  {
    name: 'Vlad Ungureanu',
    title: 'Palantir',

    description: <>
      <p>In this talk, Vlad will present the reasons Palantir choose Cilium as their CNI plugin for their ephemeral Kubernetes infrastructure, how their InfoSec team uses Hubble for monitoring workloads, and their future plans for injecting authentication material...</p>
    </>,

    popupTitle: 'Past, Present, and Future of Cilium and Hubble at Palantir',

    popupDescription: <>
      <p>In this talk, Vlad will present the reasons Palantir choose Cilium as their CNI plugin for their ephemeral Kubernetes infrastructure, how their InfoSec team uses Hubble for monitoring workloads, and their future plans for injecting authentication material at the network layer for workloads using Cilium.</p>
    </>
  },
  {
    name: 'William Findlay',
    title: 'Carleton University',

    description: <>
      <p>eBPF is transitioning from an in-kernel monitoring engine to a powerful platform for the development of complex services. In the security space, the Linux 5.8 addition of the KRSI framework is a prime example of this paradigm shift, enabling users to write...</p>
    </>,

    popupTitle: 'bpfbox: Simple Precise Process Confinement with KRSI and eBPF',

    popupDescription: <>
      <p>eBPF is transitioning from an in-kernel monitoring engine to a powerful platform for the development of complex services. In the security space, the Linux 5.8 addition of the KRSI framework is a prime example of this paradigm shift, enabling users to write and enforce dynamic security policy using BPF LSM programs. We are interested in exploring how eBPF and KRSI can be used to reshape the way security decisions are made in Linux, taking advantage of eBPF's flexibility, safety, and cross-layer observability. In this talk, we present bpfbox, a novel process confinement mechanism using an in-kernel enforcement engine written in eBPF. bpfbox translates a simple policy language into predicates that can be enforced using KRSI's LSM programs. We take advantage of several BPF program types to integrate both userspace and kernelspace system behaviour into the policy language.</p>
    </>
  },
  {
    name: 'Itay Shakury',
    title: 'Aqua Security',

    description: <>
      <p>In this talk we present how we use eBPF to trace container images in a sandbox, in order to detect malicious behavior that might appear later at runtime. We will present an open source tool that we have built for that task, and how we analyze the system le...</p>
    </>,

    popupTitle: 'Tracing and Detecting Malware using eBPF',

    popupDescription: <>
      <p>In this talk we present how we use eBPF to trace container images in a sandbox, in order to detect malicious behavior that might appear later at runtime. We will present an open source tool that we have built for that task, and how we analyze the system level activity to produce applicative security insights.</p>
    </>
  },
  {
    name: 'Ramiro Berrelleza',
    title: 'Okteto',

    description: <>
      <p>Okteto Cloud is a developer platform, powered by Kubernetes. The biggest benefit that our users get from our platform is the ability to easily deploy any type of workload with one click. A group of Crypto Bandits discovered us, and decided to set up camp o...</p>
    </>,

    popupTitle: 'The Tale of Smokey and the Crypto Bandits',

    popupDescription: <>
      <p>Okteto Cloud is a developer platform, powered by Kubernetes. The biggest benefit that our users get from our platform is the ability to easily deploy any type of workload with one click. A group of Crypto Bandits discovered us, and decided to set up camp on our platform and use it to mine crypto coins. What's worse, they used our ""source to deploy"" feature to push their instructions to a Github repo, for more people to join their merry gang. A gold rush started…</p>
      <p>In this talk, the Okteto Team will talk about how they were able to leverage Falco and eBPF to detect and repel abuse across our entire fleet of Kubernetes clusters. We'll share details about our experiments and current Falco implementation, how abusing Falco rules can bring a cluster down, and how we managed to find a balance between repealing a gang of crypto-bandits and keeping our systems online, while ensuring that our good citizens were oblivious about the whole thing.</p>
    </>
  },
  {
    name: 'Bryce Kahle',
    title: 'Datadog',

    description: <>
      <p>Datadog deploys eBPF code to our agents at scale. Our customers expect a minimal CPU footprint across releases. Join us to discover how we measure eBPF CPU overhead across multiple platforms and operating systems. You’ll see a demo Go library, demonstratin...</p>
    </>,

    popupTitle: 'How and When You Should Measure CPU Overhead of eBPF Programs',

    popupDescription: <>
      <p>Datadog deploys eBPF code to our agents at scale. Our customers expect a minimal CPU footprint across releases. Join us to discover how we measure eBPF CPU overhead across multiple platforms and operating systems. You’ll see a demo Go library, demonstrating how we benchmark our eBPF code, ensuring we don’t introduce performance regressions.</p>
    </>
  },
  {
    name: 'Andrey Ignatov',
    title: 'Facebook',

    description: <>
      <p>twagent is a daemon that runs on every Facebook server and manages Facebook containers.</p>
      <p>BPF, and more specifically cgroup-bpf, has been in heavy use by twagent for 2.5 years providing solutions for use-cases such as container IP assignment, topology-aware...</p>
    </>,

    popupTitle: 'Containers and BPF: twagent Story',

    popupDescription: <>
      <p>twagent is a daemon that runs on every Facebook server and manages Facebook containers.</p>
      <p>BPF, and more specifically cgroup-bpf, has been in heavy use by twagent for 2.5 years providing solutions for use-cases such as container IP assignment, topology-aware network counters, container firewall, transparent TLS, network faults injection, sysctl access control and many others. These use-cases have been driving implementation of multiple new kernel features. At the same time growing BPF infra provided many challenges from user space code unification and testing to solving operational problems and monitoring.</p>
      <p>This talk provides a brief overview of BPF usage in containerized environment on twagent example.</p>
    </>
  },
  {
    name: 'Manali Shukla',
    title: 'Cisco',

    description: <>
      <p>Hardware breakpoint is an interesting feature, known as memory breakpoint provides an elegant mechanism to monitor memory access or instruction executions.  Such monitoring is vital in debugging the system for data corruption. It can be used to understand...</p>
    </>,

    popupTitle: 'Implementation of Hardware Breakpoint in BCC',

    popupDescription: <>
      <p>Hardware breakpoint is an interesting feature, known as memory breakpoint provides an elegant mechanism to monitor memory access or instruction executions. Such monitoring is vital in debugging the system for data corruption. It can be used to understand memory access patterns and fine-tune the system for optimal performance. This mechanism is provided by hardware breakpoint registers in several processors. The biggest convenience of using the hardware debug registers is that it causes no alteration in normal execution of kernel  when used, and have no runtime impact.</p>
      <p>BCC is a toolkit used to create frontend programs which can be used to perform kernel and user level tracing. Though BCC uses kprobe, uprobes etc. to do the tracing, it doesn't incorporate hardware breakpoint functionality available in kernel.  So, we are proposing to implement hardware breakpoint infra for BCC,  which can be used to watch symbols and provides other hardware breakpoint functionalities breakpoints.</p>
    </>
  },
  {
    name: 'Martynas Pumputis',
    title: 'Isovalent',

    description: <>
      <p>Kubernetes service load balancing has relied far too long on netfilter and iptables - two technologies which carry legacy accumulated over 20 years of development grounded in a more traditional networking environment that is typically far smaller...</p>
    </>,

    popupTitle: 'North-South Load Balancing of Kubernetes Services with eBPF/XDP',

    popupDescription: <>
      <p>Kubernetes service load balancing has relied far too long on netfilter and iptables - two technologies which carry legacy accumulated over 20 years of development grounded in a more traditional networking environment that is typically far smaller and more static than your average Kubernetes cluster. In this talk, the audience will learn how Cilium leverages eBPF/XDP to replace both to implement load balancing of Kubernetes services. The implementation not only improves scalability of service load balancing, but also brings new features, such as DSR or consistent hashing.</p>
    </>
  },
  {
    name: 'Yutaro Hayakawa',
    title: 'LINE Corporation',

    description: <>
      <p>LINE is one of the most famous messaging services in Asian countries like Japan, Taiwan, Thailand, and Indonesia, accommodating 185 million global MAU and 3Tbps+ network traffic in total.</p>
      <p>In this talk, we'll introduce two topics regarding eBPF at LINE's OpenStack-based private cloud infrastructure...</p>
    </>,

    popupTitle: 'eBPF at LINE\'s Private Cloud',

    popupDescription: <>
      <p>LINE is one of the most famous messaging services in Asian countries like Japan, Taiwan, Thailand, and Indonesia, accommodating 185 million global MAU and 3Tbps+ network traffic in total.</p>
      <p>In this talk, we'll introduce two topics regarding eBPF at LINE's OpenStack-based private cloud infrastructure.</p>
      <p>The first use case is the XDP-based L4 load balancer we have developed since 2016. It is already becoming one of the fundamental features of our service. We'll introduce our scale, deployment, and integration with other cloud components.</p>
      <p>As a second use case, we'll introduce a brand new tracing tool called ipftrace (https://github.com/YutaroHayakawa/ipftrace2) we develop to investigate the complicated Linux kernel network datapath bahevior. We have applied this tool to investigate the strange performance degradation of our SRv6 + VRF based hypervisor network and found the bug in TSO/GSO handling. Through this effort, we've got significant performance gain.</p>
    </>
  },
  {
    name: 'Dinesh Venkatesan + Aditi Bhatnagar',
    title: 'Microsoft',

    description: <>
      <p>In this talk, we will use BPF to trap the data produced by the system events generated by execution of binaries and process them to build information and represent the information contextually to build a Knowledge graph. Knowledge Graph brings the ability...</p>
    </>,

    popupTitle: 'Building a Behavioral Knowledge Graph using eBPF',

    popupDescription: <>
      <p>In this talk, we will use BPF to trap the data produced by the system events generated by execution of binaries and process them to build information and represent the information contextually to build a Knowledge graph. Knowledge Graph brings the ability to create applied context aware solutions to create heuristics. In this talk, we will demonstrate a Proof-Of-Concept that maps the execution of an executable or set of executables (such as adversary simulation) into a Knowledge Graph. This graph can then be used as a central artefact to produce explainable intelligence about the adversary simulation activities and automatically guide a heuristic decision-making process.</p>
      <p>We will also talk about how the same approach can be utilized in</p>

      <ol>
        <li>Similarity analysis</li>
        <li>Dis-similarity analysis</li>
        <li>Identifying behaviors to map into MITRE ATT&CK Tactic and techniques.</li>
      </ol>

      <p>The advanced use cases of this approach can also aid in creating a fuzzing framework to test executables for vulnerabilities.</p>
    </>
  },
  {
    name: 'Sam White',
    title: 'GitLab',

    description: <>
      <p>Learn how to leverage GitLab's integrations with Cilium and Falco to harden your Kubernetes cluster and protect against security threats.</p>
    </>,

    popupTitle: 'Securing Kubernetes Clusters with DevSecOps and GitLab',
  },
  {
    name: 'Bradley Whitfield',
    title: 'Capital One',

    description: <>
      <p>When we were building our Kubernetes based Platform as a Service for multiple teams, we had to ensure that our platform aligned with our company's security policies, could scale to meet our customer base, minimized additional overhead, and continued to dri...</p>
    </>,

    popupTitle: 'Building a Secure and Maintainable PaaS',

    popupDescription: <>
      <p>When we were building our Kubernetes based Platform as a Service for multiple teams, we had to ensure that our platform aligned with our company's security policies, could scale to meet our customer base, minimized additional overhead, and continued to drive developer velocity. This talk will cover how the eBPF-based solution Cilium and Hubble help us solved these problems and some of the additional benefits we gained.</p>
    </>
  },
]

const Info = () => (
  <div className="summit-info">
    <Link to="/" className="link">
      <img alt="eBPF logo" className="logo" src={require("../assets/summit-2020/eBPF-logo.png")} />
    </Link>
  </div>
);

const Hero = () => (
  <header
    className="summit-hero"

    style={{
      '--background-image': `URL("${require("../assets/summit-2020/hero-background.svg")}")`,
      '--background-image-mobile': `URL("${require("../assets/summit-2020/hero-background-mobile.svg")}")`,
    }}
  >
    <div className="wrapper">
      <h1 className="title">
        <img alt="eBPF" className="logo" src={require("../assets/summit-2020/eBPF-logo-white.svg")} />
        {' '}
        Summit
      </h1>

      <div className="meta">
        <span className="item">October 28-29th, 2020</span>
        <hr className="divider" />
        <span className="item">A Free Virtual Event</span>
      </div>

      <p className="description">
        Registration is now open for the inaugural eBPF Summit, a virtual event, targeted at DevOps, SecOps, platform architects, and developers.
      </p>

      <div className="space" />

      <div className="buttons">
        <a
          className="button type--register"
          href="https://docs.google.com/forms/d/e/1FAIpQLSeWBrtQzSDxgFb2yMoa2tePapMibKeGaHLHDd70xNJzzVMX5g/viewform?embedded=true"
        >
          Register
        </a>

        <a
          className="button type--join"
          href="/slack"
        >
          Join eBPF Summit Slack
        </a>
      </div>
    </div>
  </header>
);

const About = () => (
  <div className="summit-about">
    <div className="wrapper">
      <h2 className="title">How to join</h2>
      <p className="description">Streams start  9AM PDT / 4PM GMT / 5PM CET</p>
      <p className="description">The feedback from Day 1 was that video quality was better on the YouTube Stream vs. the Zoom stream for many attendees (Note that YouTube adds a small lag vs. Zoom).</p>
      <p className="description"><strong>YouTube Day 2 Stream:</strong> <a href="https://youtu.be/jw8tEPP6jwQ">https://youtu.be/jw8tEPP6jwQ</a><br /><strong>Zoom Day 2 Stream:</strong> <a href="https://us02web.zoom.us/j/87524264130">https://us02web.zoom.us/j/87524264130</a></p>
      <p className="description">Regardless of which option you choose, you will want to log onto the eBPF Summit Slack channel to participate in Q&A, polls and other fun. Note: If you missed some or all of Day 1, replay is available for 24hrs here:</p>
      <p className="description"><strong>Day 1 replay:</strong> <a href="https://youtu.be/1GSgyvn4N7E">https://youtu.be/1GSgyvn4N7E</a></p>
    </div>
  </div>
);

const SpeakerCard = ({ avatarSrc, name, description, aboutTitle, aboutDescription, id, idx, isSelected, setSelectedCardIdx }) => {
  const hasPopupContent = aboutTitle && aboutDescription.length > 0

  const toggleSelectedCardIdx = useCallback(
    () => setSelectedCardIdx(isSelected || !hasPopupContent ? null : idx),
    [hasPopupContent, isSelected, idx]
  )

  const resetSelectedCardIdx = useCallback(
    () => setSelectedCardIdx(null),
    [isSelected, idx]
  )

  const cardRef = useRef(null)
  const location = useLocation()

  useEffect(
    () => {
      const cardElement = cardRef.current

      if(!cardElement || !location) {
        return
      }

      const {speaker} = queryString.parse(location.search);

      if(speaker === id) {
        if(hasPopupContent) {
          setSelectedCardIdx(idx)
        }

        cardElement.scrollIntoView()
      }
    },

    [hasPopupContent, id, idx, location],
  )

  return <div className="summit-speaker-card">
    <div className={cn('section', {'is-selectable': hasPopupContent, 'is-selected': isSelected})} onClick={toggleSelectedCardIdx} ref={cardRef}>
      <div className="avatar">
        <img alt={name} className="image" src={avatarSrc} />
      </div>

      <div className="section">
        <h3 className="title">{name}</h3>
        <p className="description">{description}</p>
      </div>

      {!isSelected && hasPopupContent && <img alt="" aria-hidden className="corner" src={require("../assets/summit-2020/icon-corner.svg")} />}
    </div>

    {isSelected && <div className="popup">
      <h4 className="title">{aboutTitle}</h4>
      {aboutDescription.map((description, idx) => <p className="description" key={idx}>{description}</p>)}

      <button aria-label="Close" className="button" onClick={resetSelectedCardIdx} type="button">
        <img alt="Close" aria-hidden className="icon" src={require("../assets/summit-2020/icon-close.svg")} />
      </button>
    </div>}
  </div>
};

const Keynotes = () => {
  const [selectedCardIdx, setSelectedCardIdx] = useState(null)

  return <div className="summit-keynotes">
    <div className="wrapper">
      <h2 className="title">Keynotes & Abstracts</h2>

      <div className="list">
        {speakers.map(({ card, about }, idx) => <SpeakerCard
          avatarSrc={card.avatarSrc}
          name={card.name}
          description={card.description}
          aboutTitle={about?.title}
          aboutDescription={about?.description}
          key={idx}
          id={card.id}
          idx={idx}
          isSelected={idx === selectedCardIdx}
          setSelectedCardIdx={setSelectedCardIdx}
        />)}
      </div>
    </div>
  </div>
};

const AgendaItemPopup = ({ description, hidePopup }) => {
  const popupRef = useRef(null)

  useEffect(
    () => {
      const popupElement = popupRef.current

      if(typeof document === 'undefined' || !popupElement) {
        return
      }

      const handleClickOutside = event => {
        if(!popupElement.contains(event.target)) {
          hidePopup()
        }
      }

      document.addEventListener('click', handleClickOutside, true)

      return () => {
        document.removeEventListener('click', handleClickOutside, true)
      }
    },

    [],
  )

  return <div className="popup" ref={popupRef}>
    <div className="description">{description}</div>

    <button aria-label="Close" className="button" onClick={hidePopup} type="button">
      <img alt="Close" aria-hidden className="icon" src={require("../assets/summit-2020/icon-close.svg")} />
    </button>
  </div>
}

const AgendaItem = ({ description, time, title }) => {
  const [isPopupShown, setIsPopupShown] = useState(false)
  const showPopup = useCallback(() => setIsPopupShown(true), [])
  const hidePopup = useCallback(() => setIsPopupShown(false), [])

  return <dl className="row" >
    <dt className="time">{time}</dt>

    <dd className="description">
      {title}

      {description && <>
        <div
          className="more-button"
          onClick={showPopup}
          style={{transform: isPopupShown ? 'rotate(180deg)' : ''}}
        >
          {isPopupShown && <div className="triangle" />}
        </div>

        {isPopupShown && <AgendaItemPopup description={description} hidePopup={hidePopup} />}
      </>}
    </dd>
  </dl>
}

const Agenda = () => (
  <div
    id="agenda"
    className="summit-agenda"

    style={{
      '--background-image': `URL("${require("../assets/summit-2020/agenda-background.svg")}")`,
      '--background-image-mobile': `URL("${require("../assets/summit-2020/agenda-background-mobile.svg")}")`,
    }}
  >
    <div className="wrapper">
      <h2 className="title">Agenda</h2>
      <p className="note">All times are in PDT time zone</p>

      <div className="list">
        {agenda.map(( item, idx ) => <section className="section" key={idx}>
          <h3 className="title">{item.title}</h3>

          <div className="list">
            {item.schedule.map(({ description, time, title }, idx) => <AgendaItem
              description={description}
              key={idx}
              time={time}
              title={title}
            />)}
          </div>
        </section>)}
      </div>
    </div>
  </div>
);

const LightningTalksSchedule = () => {
  const [modalVideo, setModalVideo] = useState(null)
  const closeModalVideo = useCallback(() => setModalVideo(null), [])
  const showModalVideo = useCallback(video => setModalVideo(video), [])

  return <div
    className="summit-lightning-talks-schedule"
    id="lightning-talks"
  >
    <div className="wrapper">
      <h2 className="title">Lightning Talks</h2>

      <div className="table">
        <div
          className="captions"
          aria-hidden
        >
          <div className="cell"><span>Title <span className="prompt">*click to see video preview</span></span></div>
          <div className="cell">Speaker</div>
        </div>

        {lightningTalks.map(({ title, name, organization, videoId }, idx) => <div
          className="row"
          key={idx}
        >
          <div className="cell" onClick={!!videoId ? () => showModalVideo(videoId) : null}>
            <span className="caption">Title</span>
            <span className={cn({'link': !!videoId})}>{title}</span>
          </div>

          <div className="cell">
            <span className="caption">Speaker</span>
            {name}, {organization}
          </div>
        </div>)}
      </div>
    </div>

    <ModalVideo channel='youtube' isOpen={modalVideo !== null} videoId={modalVideo} onClose={closeModalVideo} />
  </div>
}

const CaruselSlide = ({ showPopup, isPopupShown, name, popupTitle, title, description, hasPopup }) => {
  return <div className="slide" onClick={hasPopup ? showPopup : null}>
    <h3 className="slide-title">{ name }</h3>
    <h4 className="slide-subtitle">{ title }</h4>
    <h4 className="slide-subtitle">{ popupTitle }</h4>

    <div className="slide-description">
      { description }

      {hasPopup && <div
        className="more-button"
        style={{transform: isPopupShown ? 'rotate(180deg)' : ''}}
      />}
    </div>
  </div>
}

const CaruselPopup = ({ close, slideIndex }) => {
  const popupRef = useRef(null)

  // Prevent body scroll when modal is opened
  useLayoutEffect(
    () => {
      if(typeof window === 'undefined' || document.documentElement.clientWidth > 1024) {
        return
      }

      document.body.style.paddingRight = `${window.innerWidth - document.documentElement.clientWidth}px`
      document.body.style.overflow = 'hidden'

      return () => {
        document.body.style.overflow = ''
        document.body.style.paddingRight = ''
      }
    },

    [],
  )

  useEffect(
    () => {
      const popupElement = popupRef.current

      if(typeof document === 'undefined' || !popupElement) {
        return
      }

      const handleClickOutside = event => {
        if(!popupElement.contains(event.target)) {
          close()
        }
      }

      document.addEventListener('click', handleClickOutside, true)

      return () => {
        document.removeEventListener('click', handleClickOutside, true)
      }
    },

    [],
  )

  return <div className="popup" ref={popupRef}>
    <button className="close-button" onClick={close} />
    <h5 className="title">{ slides[slideIndex].popupTitle }</h5>

    <div className="description">
      {slides[slideIndex].popupDescription}
    </div>

    <div className="triangle" />
  </div>
}

const Carusel = () => {
  const [slideIndex, setSlideIndex] = useState(0)
  const [isPopupShown, setIsPopupShown] = useState(false)
  const showPopup = useCallback(() => setIsPopupShown(true), [])
  const hidePopup = useCallback(() => setIsPopupShown(false), [])

  return <div
    className="summit-carusel"
    style={{background: `URL(${require('../assets/summit-2020/lightning-talks-bg.png')}), linear-gradient(90deg, #C1C1C1 -0.82%, #F3F3F3 98.52%)`}}
  >
    <div className="wrapper">
      <h2 className="title">Lightning Talk Abstracts</h2>

      <Carousel
        beforeSlide={hidePopup}
        className="carousel"
        heightMode="max"
        initialSlideHeight={500}
        slideIndex={slideIndex}
        afterSlide={slideIndex => setSlideIndex(slideIndex)}
        renderBottomCenterControls={null}

        renderCenterLeftControls={({ previousSlide }) => <img
          alt="Prev slider"
          className="slider-prev"
          onClick={previousSlide}
          src={require('../assets/summit-2020/slider-prev.svg')}
        />}

        renderCenterRightControls={({ nextSlide }) => <img
          alt="Next slider"
          className="slider-next"
          onClick={nextSlide}
          src={require("../assets/summit-2020/slider-next.svg")}
        />}

        wrapAround
      >
        {slides.map((slide, idx) => <CaruselSlide
          description={slide.description}
          key={idx}
          name={slide.name}
          title={slide.title}
          popupTitle={slide.popupTitle}
          showPopup={showPopup}
          isPopupShown={isPopupShown}
          hasPopup={!!slide.popupDescription}
        />)}
      </Carousel>

      <a
        className="button"
        href="https://docs.google.com/forms/d/e/1FAIpQLSeWBrtQzSDxgFb2yMoa2tePapMibKeGaHLHDd70xNJzzVMX5g/viewform?embedded=true"
      >
        Register
      </a>

      {isPopupShown && <CaruselPopup close={hidePopup} slideIndex={slideIndex} />}
    </div>
  </div>
};

const Footer = () => (
  <footer className="summit-footer">
    <div className="wrapper">
      <Link to="/" className="link">
        <img alt="eBPF logo" className="logo" src={require("../assets/summit-2020/eBPF-logo-gray.svg")} />
      </Link>
    </div>
  </footer>
);

const CallForPapers = () => (
  <div className="summit-page-wrapper">
    <Helmet
      htmlAttributes={{
        class: 'smooth-scroll'
      }}
      title={pageMetaTitle}
      link={[
        {href: "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap", rel: "stylesheet"},
      ]}
      meta={[
        {name: "name", content: "eBPF"},
        {name: "keywords", content: "ebpf, bpf, summit, conference, event"},
        {property: "og:type", name: "type", content: "website"},
        {property: "og:url", name: "url", content: "https://ebpf.io/summit-2020/"},
        {property: "og:title", name: "title", content: pageMetaTitle},
        {property: "og:description", name: "description", content: pageMetaDescription},
        {property: "og:image", name: "image", content: 'https://ebpf.io' + require("../assets/summit_logo.png")},
        {name: "twitter:card", content: "summary_large_image"},
        {name: "twitter:url", content: "https://ebpf.io/summit-2020/"},
        {name: "twitter:title", content: pageMetaTitle},
        {name: "twitter:description", content: pageMetaDescription},
        {name: "twitter:image", content: 'https://ebpf.io' + require("../assets/summit_logo.png")},
      ]}
    />
    <Info />
    <Hero />
    <About />
    <Keynotes />
    <Agenda />
    <LightningTalksSchedule />
    <Carusel />
    <Footer />
  </div>
);

export default CallForPapers;
