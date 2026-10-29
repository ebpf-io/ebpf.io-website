---
date: '2026-10-29T17:00:00.000Z'
title: 'Cloudflare’s eBPF Replatforming Part 5: Tips for Operating eBPF at Scale'
description: 'The fifth instalment chronicling Cloudflare’s journey with eBPF, looking at the deployment mechanics and operational safeguards required to run eBPF safely in production.'
path: "/blog/cloudflare-replatforming-5"
ogImage: ogimage5.png
categories:
  - Technology
---

By Cloudflare Engineering

> This series chronicles Cloudflare's eight-year journey with eBPF from a specialized DDoS tool to the programmable backbone of their global network. It covers everything from contributing to the Linux kernel and technical challenges to business ROI to advice and operational strategies for other companies adopting eBPF.

In previous blogs, we examined how Cloudflare utilizes eBPF for everything from bypassing legacy socket API constraints to implementing distributed XDP mitigation pipelines and BPF LSM security policies. However, managing BPF objects on a local test machine is vastly different from operationalizing them across a global fleet of over 330 locations.

This blog shifts the focus to deployment mechanics and operational safeguards required to run eBPF safely in production. Safely deploying eBPF programs across this global fleet relies on multiple interlocking layers including the kernel's eBPF verifier as a first gate, exhaustive pre-production testing, a multi-day staged rollout through progressively larger traffic tiers, feature flags for decoupling feature activation from binary deployment, atomic program replacement via bpf_link, graceful reload mechanisms that preserve the data plane during upgrades, pinned BPF maps that survive daemon crashes, and configuration management for location-specific logic.

## The BPF Verifier as First Safety Gate

Every loaded eBPF program must pass the kernel's BPF verifier before it can execute. The verifier provides hard guarantees that no traditional deployment process can:

- No invalid memory accesses: The verifier statically analyzes every code path and rejects programs that could dereference a NULL pointer or access out-of-bounds memory.
- No infinite loops: The verifier detects and rejects programs with non-terminating loops.
- Stack size enforcement: BPF programs are limited to 512 bytes of stack (less for programs using BPF_MAP_TYPE_PROG_ARRAY tail calls). Programs exceeding this are rejected at load time.

This means a class of bugs that would crash traditional kernel modules, NULL dereferences, buffer overflows, infinite loops. are structurally impossible for loaded eBPF programs. The verifier rejection happens during testing and at deployment time on each server.

## Pre-Production Testing

Before any eBPF change reaches production traffic, it undergoes exhaustive testing including:

- Virtual machine load testing: For complex issues like race conditions, Cloudflare creates virtualized test environments where virtual machines undergo continuous load testing. This is aimed at catching or reproducing rare race conditions.
- VET (Verification and Exhaustive Testing): Changes pass through Cloudflare's dedicated pre-production testing environment before reaching any live traffic.

## Staged Rollout via Release Manager

The primary deployment vehicle for userspace eBPF daemons is Cloudflare's Release Manager system. Updates are first deployed to canary data centers that serve live customer traffic but are distinct from the main fleet. Key properties include:

- Multi-day deployment pace with mandatory wait periods between rollout stages
- Multiple approvals required before each stage progresses
- Canary-first: Canary locations receive updates only after internal environments have successfully tested them. This allows engineers to detect issues before they impact the global network.
- The "Soak and Observe" Pattern: At each stage, engineers monitor dashboards, metrics, and logs for the specific service including packet drops, CPU usage, rule compilation errors, and program loading errors. Each stage has a mandatory minimum soak time before proceeding (longer for high-risk changes).

## Feature Gates: Decoupling Feature Activation from Binary Deployment

For major eBPF feature changes, Cloudflare uses feature gates, essentially feature flags managed through the release system that control whether a feature is active on a given server, independent of which binary version is deployed. This allows a new binary to be rolled out fleet-wide with the feature disabled, then activated incrementally.

## Atomic Upgrades via bpf_link

For critical components like Tubular, the deployment process is designed to be unattended and fail-safe. A failure during the release process must leave the previous version running, not break connectivity.

Cloudflare uses bpf_link to attach programs to hooks. To upgrade a program, the new program is loaded into the kernel and then the existing link is updated to point to the new program. This operation is atomic, ensuring that traffic is handled by either the old or the new program, with no period where packets are dropped. The deployment tool also verifies the "tag" (a hash of instructions) of the running program to ensure it is replacing the expected version. If the tags don't match, the tool aborts the update to prevent inconsistencies.

## Graceful Reload: Zero-Downtime Binary Upgrades

Userspace daemons use a [tableflip-based](https://blog.cloudflare.com/graceful-upgrades-in-go/) graceful reload mechanism where a child process replaces the parent without interrupting the data plane. This ensures that upgrading the userspace management daemon does not affect the running eBPF programs or cause packet loss.

## Pinned BPF Maps: Crash Resilience

Userspace services use pinned BPF maps on the bpffs filesystem (/sys/fs/bpf/, /run/xdpd/bpffs/) to survive daemon crashes and control plane outages. The state (e.g., active socket bindings, forwarding tables) is stored in eBPF maps pinned to the filesystem, decoupling the lifetime of the data from the userspace management process.

If the userspace deployment tool crashes or is restarted, the eBPF program in the kernel continues running undisturbed using the persisted state. Without pinned maps, a userspace service crash during a control plane outage would leave the physical server receiving traffic with no XDP/BPF pipeline, and packets would either be dropped or (worse) all delivered locally.

## Configuration Management

Deploying to hundreds of locations requires handling location-specific rules (e.g., different DDoS rules for different regions). Rather than compiling separate binaries per location, Cloudflare compiles a single master eBPF program with configurable code paths. Before loading the program into the kernel at a specific location, the configuration is applied to enable or disable specific logic paths. A single binary serves the entire fleet with per-location customization.

## Conclusion

Operating eBPF in a massive, globally distributed environment requires treating eBPF programs and maps with the same rigor as traditional kernel upgrades, but executing them with the speed of user-space deployment cadences. The operational patterns detailed here like relying on the verifier's static analysis, executing atomic swaps via bpf_link, and persisting state via the BPF filesystem fundamentally decouple the data plane's execution from user-space daemon lifecycles.
By ensuring that a user-space crash or a rolled-back release does not interrupt active socket bindings or XDP packet processing, administrators can safely deploy kernel-level logic continuously without risking partitions. Building this deployment machinery was a multi-year, iterative engineering effort. In the sixth blog, we will examine the actual return on this technical investment, quantifying how moving the network edge into the kernel has paid off in concrete business, operational, and scaling metrics.

## Catch up on the series so far

- In [part 1](https://ebpf.io/blog/cloudflare-replatforming-1/), we covered why Cloudflare bet on eBPF as a platform rather than a collection of point solutions.
- In [part 2](https://ebpf.io/blog/cloudflare-replatforming-2/), we looked at the places where standard Linux networking APIs couldn't support Cloudflare's requirements, and what the team built to fill those gaps.
- In [part 3](https://ebpf.io/blog/cloudflare-replatforming-3/), we covered the architectural shifts and upstreaming efforts required to build Cloudflare’s eBPF-based network data path.
- In [part 4](https://ebpf.io/blog/cloudflare-replatforming-4/), we looked at how Cloudflare leveraged eBPF to improve its operational posture, including rebuilding observability from the ground up.
