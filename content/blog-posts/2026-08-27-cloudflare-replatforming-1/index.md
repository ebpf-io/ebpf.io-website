---
date: '2026-08-27T17:00:00.000Z'
title: 'Cloudflare’s eBPF Replatforming Part 1: The eBPF Pivot – From Hardware Lock-in to Programmable Networking'
description: 'Chronicling Cloudflare’s eight-year journey with eBPF, starting with the move from hardware to the eBPF ecosystem'
path: "/blog/cloudflare-replatforming-1"
ogImage: ogimage.png
categories:
  - Technology
---

By Cloudflare Engineering

>This series chronicles Cloudflare's eight-year journey with eBPF from a specialized DDoS tool to the programmable backbone of their global network. It covers everything from contributing to the Linux kernel and technical challenges to business ROI to advice and operational strategies for other companies adopting eBPF.

Cloudflare began exploring eBPF/XDP in late 2016, with prototyping for load balancing starting mid-2017. Our first production deployment was in November 2018, when we launched XDP-based packet filtering (l4drop) for L3/L4 DDoS mitigation. This replaced our previous kernel-bypass solution that was tied to a specific NIC vendor.

Cloudflare's investment in eBPF was driven by a convergence of hardware constraints, performance requirements, and the need to eliminate accumulated technical debt. This is how we arrived at the decision to replatform, why we decided to center around eBPF, and where we use the technology today.

## The Catalyst: Breaking Free from Hardware Lock-in

The immediate trigger to look at eBPF was our previous DDoS mitigation solution, which relied on a proprietary RDMA stack for kernel bypass packet processing. This created a single-vendor dependency. When we started deploying ARM-based servers and newer NICs for our 25G network upgrade, we hit a wall. These platforms were incompatible with the proprietary stack.

We needed a vendor-agnostic solution. eBPF, specifically XDP (eXpress Data Path), gave us exactly that. It works with any NIC that supports XDP in the driver and allowed us to diversify our hardware suppliers without rewriting our packet processing logic.

## XDP: Performance Without Compromise

We needed to drop packets at rates exceeding 10 million packets per second during DDoS attacks while minimizing CPU overhead. Full kernel bypass solutions like DPDK exist, but they require dedicating the entire network card to a single application. They also break standard Linux tools like ssh and tcpdump and prevent running multiple applications on the same server.

XDP gave us a "partial kernel bypass". eBPF programs run at the earliest possible point in the network stack, directly in the NIC driver, achieving near-line-rate packet processing with minimal CPU overhead (around 10% during massive attacks), while still retaining the full Linux ecosystem tooling.

## Replacing Technical Debt

During the growth of Cloudflare, we had accumulated significant workarounds over the years and were looking for ways to reduce our technical debt including:

- **BIND_TO_PREFIX**: A custom kernel patch we maintained ourselves with no upstream acceptance
- **TPROXY**: Complex to set up and maintain, with subtle interactions with the network stack
- **Tens of thousands of IP bindings** in our DNS resolver leading to massive socket overhead just for DDoS protection

eBPF allowed us to replace all of these with cleaner, more maintainable solutions.
 
## Why an eBPF Based Platform Approach?

The decision to use eBPF across our entire stack rather than as point solutions came down to architectural reality and operational efficiency.

**Mutual Exclusivity**: XDP and kernel bypass are incompatible. You cannot run both simultaneously. When we chose XDP for our L4 load balancer (Unimog), we were forced to migrate DDoS mitigation to XDP as well. This wasn't a disadvantage; it was an opportunity to unify.

**Service Multiplexing**: We run dozens of services on each edge server: nginx, DNS resolvers, Spectrum, WARP, and more. The traditional BSD socket model of "one socket per port" simply doesn't work at our scale. We need different applications sharing port 80 or 53, and for Spectrum, we need access to all port numbers. BPF socket dispatch (via the sk_lookup hook we contributed upstream) enables this dynamic routing without service restarts.

**Composability**: eBPF programs can be chained using tail calls. A single XDP hook can run DDoS mitigation, then load balancing, then connection tracking, all as modular, independently deployable programs. Buying into eBPF as a platform allowed us to extract additional value with each new feature we needed.

**Unified Operations**: One platform means one deployment mechanism, consistent configuration distribution, unified Prometheus metrics, and common debugging tools. Point solutions would fragment operations across different systems with different deployment, monitoring, and debugging approaches.

## Where We Use eBPF Today

Cloudflare utilizes eBPF at six distinct layers:

- **DDoS Mitigation (XDP)**: L4Drop replaces our previous kernel-bypass solution, dropping volumetric attacks at the driver level
- **Load Balancing (XDP)**: Unimog handles ECMP routing and fine-grained server load balancing
- **Socket Dispatch (sk_lookup)**: Tubular steers traffic dynamically to services sharing IPs and ports
- **Firewalling**: Magic Firewall uses eBPF for deep packet inspection where static nftables rules fall short
- **Observability**: ebpf_exporter generates kernel-level histograms with low overhead
- **Reliability**: udpgrm enables graceful restarts for UDP protocols like QUIC

## Betting on the eBPF Ecosystem for Cloudflare's Platform

The alternative to an eBPF platform was maintaining multiple incompatible point solutions, each with its own hardware dependencies, operational quirks, and integration challenges. As our hardware diversified, performance requirements grew, and edge services multiplied, that approach became untenable.

eBPF gave us a unified, vendor-agnostic, high-performance foundation that lets us program the operating system itself to handle our scale. The kernel verifier ensures safety where we can deploy complex logic changes on the fly without risking system crashes. That flexibility is critical when every edge server runs the entire software stack and must adapt to traffic changes instantly.

In the next parts of the series, we will walk through how betting on eBPF as a platform has paid off both technically and for the business bottom line, and the challenges faced along the way.
