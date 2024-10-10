---
path: '/blog/ebpf-summit-wrapup'
date: '2024-10-09T10:00:00.000Z'
title: 'Reflecting on the eBPF Summit 2024: A Recap of Innovation and Community'
description: 'A Recap of the recently concluded eBPF Summit 2024'
ogImage: ogimage.jpg
categories:
  - Comnmunity
---

The [eBPF Summit 2024](https://ebpf.io/summit-2024/) has just concluded, and what an incredible event it was! Bringing together over **2,000 attendees** from more than **1000+ different companies** around the globe.

This year's summit showcased the latest advancements and use cases in eBPF, highlighting how the technology is transforming various industries. For instance, attendees learned about **Confluent's multi-cloud journey to Cilium**, where eBPF and Cilium played a crucial role in optimizing their networking solutions across different cloud providers and ByteDance shared **how they embraced Netkit across a million servers**, demonstrating the improvement of eBPF for networking in large-scale environments. The event was packed with insightful talks like these and vibrant community engagement, all of which showcase the incredible growth and enthusiasm surrounding eBPF.

At the event this year, our exceptional hosts, Liz Rice and Duffie Cooley, guided us through the event with their signature enthusiasm and expertise. Their seamless navigation of discussions and sessions kept the energy high and the content engaging. Liz and Duffie, your contributions were invaluable, and we can't thank you enough for making the summit such a success.

For those who missed any of the sessions or simply want to revisit the wealth of knowledge shared, all talks are now available on our [YouTube channel](https://www.youtube.com/playlist?list=PLDg_GiBbAx-m7yn_FYcc41PNrgtxlISBK). Dive back in to absorb the insights and innovations presented by our amazing lineup of speakers.

We also launched the eBPF Summit 2024 Capture the Flag contest! The challenge was designed to test your skills and deepen your understanding of eBPF in a fun, interactive way. Ready to take the challenge? Give it a shot here: [eBPF Summit 2024 CTF](https://isogo.to/ctf2024).

<iframe width="755" height="415" src="https://www.youtube.com/embed/PQNDsdP27Hw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## The Keynotes At The Summit

For this year's keynote, we were privileged to hear from some of the industry's leading minds from SAP, Isovalent at Cisco, and Netflix.

### What would the world look like without eBPF by Shweta Saraf (Netflix)

[See on Youtube](https://www.youtube.com/watch?v=Pkz65BJHN2M&list=PLDg_GiBbAx-m7yn_FYcc41PNrgtxlISBK&index=2)

The opening keynote, titled “What Would the World Look Like Without eBPF” by **Shweta Saraf from Netflix**, took us on a thought-provoking journey. Shweta asked us to imagine the challenges of a world without eBPF, highlighting the inefficiencies that would plague modern computing systems. She explained that without eBPF, we would be stuck in the “kernel patching nightmare,” where long debugging cycles and resource-heavy tools like **tcpdump** and **strace** would dominate. These legacy methods would lead to high operational costs and inefficiencies in managing performance bottlenecks at scale.

Shweta went on to emphasize the immense value eBPF brings to the industry by providing visibility and control at a lower system resource cost. She specifically mentioned its impact on security in microservice-based architectures. Without eBPF, debugging firewall issues at scale would be much slower, clunkier, and prone to security breaches. This talk made it clear that eBPF has revolutionized the industry by enabling faster iteration, improved performance, and enhanced security, especially in cloud native environments where large-scale, distributed systems like Netflix’s infrastructure require real-time observability and control.

### Looking Ahead: The eBPF Innovation Roadmap by Thomas Graf (Isovalent at Cisco)

[See on Youtube](https://www.youtube.com/watch?v=oVoW5BUBRJk&list=PLDg_GiBbAx-m7yn_FYcc41PNrgtxlISBK&index=3)

Next up, **Thomas Graf from Isovalent** presented “Looking Ahead: The eBPF Innovation Roadmap.” He highlighted how eBPF has revolutionized the Linux kernel by enabling rapid innovation through dynamically loaded code, allowing developers to implement changes much faster than traditional development processes. This flexibility has unlocked a wave of advancements in networking, security, and observability.

Thomas also discussed the exciting expansion of eBPF to Windows, which will bring cross-platform compatibility, enabling enterprises to standardize eBPF-based tools across both Linux and Windows environments. This will be a significant step forward for companies operating in diverse infrastructure setups.

As the eBPF ecosystem grows, he emphasized the importance of compatibility and interoperability between tools to ensure seamless integration as more solutions emerge. He also noted the potential for eBPF to support the growing demand for AI workloads and specialized hardware like GPUs and DPUs, ensuring that eBPF remains a key enabler of infrastructure innovation.

One of the most exciting prospects is the idea of “eBPF distributed intelligence,” where eBPF could enable intelligent decisions to be made directly at the data source, reducing the need for extensive data transfer and storage. This could dramatically improve the efficiency and responsiveness of observability and security tools.

### Writing a Linux scheduler in Java with eBPF by Johannes Bechberger (SAP)

[See on youtube](https://www.youtube.com/watch?v=JWwX3uCEPO8&list=PLDg_GiBbAx-m7yn_FYcc41PNrgtxlISBK&index=23)

The final keynote was delivered by **Johannes Bechberger from SAP**, who presented an intriguing talk on “Writing a Linux Scheduler in Java with eBPF.” Johannes demonstrated how eBPF can be used to write a Linux scheduler in Java, showcasing the flexibility and power of the technology. He explained the core concept of scheduling—managing multiple processes across CPUs—and how schedulers decide which process runs on which CPU at any given time. Traditionally, writing schedulers involves using C, but Johannes introduced how developers can utilize eBPF to implement schedulers in Java.

What makes this significant is the potential for ease of experimentation. By using eBPF with Java, developers can now rapidly prototype and deploy custom schedulers without needing to restart their systems. This opens up new possibilities for customized scheduling policies tailored to specific workloads, making it possible to optimize performance for unique scenarios. Johannes highlighted that while existing Linux schedulers work well for most use cases, they may not always be the best fit for certain applications. With eBPF, developers can now fine-tune scheduling behavior based on domain-specific knowledge.

For the industry, this talk showcases eBPF’s growing versatility. The ability to write **custom schedulers in Java** shows how eBPF can be leveraged not just for networking and security but also for core system functions like process scheduling. This could lead to more **efficient system performance** across a range of applications, from cloud services to enterprise environments, where specialized scheduling policies can offer significant performance gains

## The Talks At The Summit

Besides the key notes, there was a great selection of talks, each one ranging between 5-10 minutes in length and full of useful information for the eBPF community. Here's a quick list of the presenters and topics:

- Nick Zavaritsky (emnify) - [We write our applications in ebpf: A Tale From a Telekom Operator](https://www.youtube.com/watch?v=uw8-BTn2p7M&list=PLDg_GiBbAx-m7yn_FYcc41PNrgtxlISBK&index=4)
- Nikhil Malik (NetLOX) - [End-to-End SCTP Multihoming with eBPF](https://www.youtube.com/watch?v=wCblBBO0qRc&list=PLDg_GiBbAx-m7yn_FYcc41PNrgtxlISBK&index=5)
- Nimisha Mehta & Alvaro Aleman (Confluent) - [Confluent's Multi-Cloud Journey to Cilium](https://www.youtube.com/watch?v=8QPntqQmUbo&list=PLDg_GiBbAx-m7yn_FYcc41PNrgtxlISBK&index=6)
- Chen Tang & Feng Zhou (Byte Dance) - [Embracing Netkit Across a Million Servers, What Should We Do?](https://www.youtube.com/watch?v=0w788CqTp0c&list=PLDg_GiBbAx-m7yn_FYcc41PNrgtxlISBK&index=7)
- Hemnath Malla (Datadog) - [Implementing Networking QoS for Containers with eBPF and Cilium](https://www.youtube.com/watch?v=2EAPo0Bgws8&list=PLDg_GiBbAx-m7yn_FYcc41PNrgtxlISBK&index=8)
- Ashish Kashinath & Tim Baer (Aviatrix) - [Adaptive Routing with eBPF](https://www.youtube.com/watch?v=1ey52p7Ak6E&list=PLDg_GiBbAx-m7yn_FYcc41PNrgtxlISBK&index=9)
- Tanel Poder (PoderC) - [Tracking, Not Tracing, Linux Thread Activity For Complete System Visibility](https://www.youtube.com/watch?v=ImOOLwGyj-w&list=PLDg_GiBbAx-m7yn_FYcc41PNrgtxlISBK&index=10)
- Florian Lehner (Elastic) - [Continuous Profiling with Open Telemetry](https://www.youtube.com/watch?v=Q3y1UgigcCA&list=PLDg_GiBbAx-m7yn_FYcc41PNrgtxlISBK&index=11)
- Anubhab Majumdar & Vamsi Kalapala (Microsoft) - [Optimizing eBPF Programs for Advanced Observability](https://www.youtube.com/watch?v=zSPBSekqvHI&list=PLDg_GiBbAx-m7yn_FYcc41PNrgtxlISBK&index=12)
- Yusheng Zheng - [bpftime: Userspace eBPF Runtime for Network and Observability](https://www.youtube.com/watch?v=YZbCBaTTkeE&list=PLDg_GiBbAx-m7yn_FYcc41PNrgtxlISBK&index=13)
- Scott Gerring (Datadog) - [Break all the things: eBPF as an agent of chaos](https://www.youtube.com/watch?v=_5Zabryx0nE&list=PLDg_GiBbAx-m7yn_FYcc41PNrgtxlISBK&index=14)
- B10c - [Monitoring Bitcoin P2P network attacks and anomalies with eBPF and USDT tracepoints](https://www.youtube.com/watch?v=MQ8drkp-sHY&list=PLDg_GiBbAx-m7yn_FYcc41PNrgtxlISBK&index=15)
- Reinhard Kugler (SBA Research) - [Securing Containers on Embedded Platforms Using eBPF](https://www.youtube.com/watch?v=iP6hbSdMR0g&list=PLDg_GiBbAx-m7yn_FYcc41PNrgtxlISBK&index=16)
- Jack Kelly & James Callaghan (Control Plane )- [Demystifying eBPF Security](https://www.youtube.com/watch?v=89yDydIJBcU&list=PLDg_GiBbAx-m7yn_FYcc41PNrgtxlISBK&index=17)
- Alan Maguire (Oracle) - bysyscall - [Exploring Using eBPF to Bypass System Calls](https://www.youtube.com/watch?v=DdhGhvYr9sA&list=PLDg_GiBbAx-m7yn_FYcc41PNrgtxlISBK&index=18)
- Chris Tarazi (Isovalent at Cisco) - [Primer on eBPF map batch operations](https://www.youtube.com/watch?v=hKkVjiAUSfw&list=PLDg_GiBbAx-m7yn_FYcc41PNrgtxlISBK&index=19)
- Nathaniel Theis (NCC Group) - [Security Assessment of the eBPF Verifier](https://www.youtube.com/watch?v=qaj-1a8lgeA&list=PLDg_GiBbAx-m7yn_FYcc41PNrgtxlISBK&index=20)
- Soo Yee Lim - [Towards Secure Kernel Extensibility With eBPF](https://www.youtube.com/watch?v=B1-41oTXeS8&list=PLDg_GiBbAx-m7yn_FYcc41PNrgtxlISBK&index=21)
- Juan José López Jaimez (Google) - [Lessons From The Buzz](https://www.youtube.com/watch?v=iMEjhl0V_Rw&list=PLDg_GiBbAx-m7yn_FYcc41PNrgtxlISBK&index=22)

## Looking Ahead: eBPF Summit 2025

A heartfelt thank you goes out to everyone who made the eBPF Summit 2024 such a success. Whether you were an attendee, speaker, sponsor, or volunteer, your passion and dedication to the eBPF community continue to fuel the innovation and collaboration that drive this technology forward. What’s most exciting about this year’s summit is how the talks not only showcased eBPF’s current capabilities but also pointed to where the future is headed.

The keynotes and sessions left us with a clear sense that the eBPF ecosystem is only going to grow. Shweta Saraf’s keynote reminded us how deeply integrated eBPF has become in modern infrastructure, and Thomas Graf outlined exciting advancements, including eBPF’s expansion to Windows and the potential for cross-platform compatibility. Meanwhile, Johannes Bechberger’s exploration of custom Linux schedulers in Java opened up new avenues for experimentation and innovation.

These talks have set the stage for even greater advancements in 2025. We can expect more developments in cross-platform tooling, expanded use cases for AI and specialized hardware, and the continued evolution of eBPF’s role in security, observability, and networking. The enthusiasm and collaboration within this community suggest that the next summit will unveil more groundbreaking work that will push the boundaries of what’s possible with eBPF. We can’t wait to see what 2025 will bring!

As we look ahead, we're already gearing up for the **eBPF Summit 2025**. Plans are underway to bring you even more cutting-edge content from the eBPF community. Stay tuned for updates and announcements—we can't wait to see you next year!
