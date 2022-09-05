---
date: "2021-03-22T17:00:00.000Z"
title: "The Cost of BPF Tail Calls"
ogImage: ogimage.png
externalUrl: "https://pchaigno.github.io/ebpf/2021/03/22/cost-bpf-tail-calls.html"
categories:
  - Technology
---

{{preview}}

For an upcoming blog post, I wanted to measure the cost of BPF tail calls. Tail calls allow you to jump from one BPF program to another. Their overhead varied a lot in recent kernels, with a first increase caused by Spectre mitigations and a decrease thanks to improvements in Linux 5.5.

{{/preview}}
