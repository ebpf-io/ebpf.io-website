---
date: "2018-08-31T17:00:00.000Z"
title: "Lifetime of BPF objects"
externalUrl: "https://facebookmicrosites.github.io/bpf/blog/2018/08/31/object-lifetime.html"
categories:
  - Technology
---

{{preview}}

The BPF verifier guarantees that program itself is safe for the kernel to execute, but in order to use BPF as a whole safely and surprise free the users need to understand the lifetime of BPF programs and maps. This post covers these details in depth.

{{/preview}}
