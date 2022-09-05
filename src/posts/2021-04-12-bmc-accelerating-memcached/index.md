---
date: "2021-04-12T17:00:00.000Z"
title: "BMC: Accelerating Memcached using Safe In-kernel Caching and Pre-stack Processing"
ogImage: ogimage.png
externalUrl: "https://pchaigno.github.io/ebpf/2021/04/12/bmc-accelerating-memcached-using-bpf-and-xdp.html"
categories:
  - Technology
---

{{preview}}

Tomorrow, Yoann Ghigoff et al. will present their paper BMC: Accelerating Memcached using Safe In-kernel Caching and Pre-stack Processing at NSDI 2021. In this paper, the authors propose to speed up Memcached using eBPF by implementing a transparent, first-level cache at the XDP hook. It’s not everyday we see BPF being used on application protocols!

{{/preview}}
