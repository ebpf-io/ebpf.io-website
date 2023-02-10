---
date: '2021-05-25T17:00:00.000Z'
title: 'BPF tips & tricks: the guide to bpf_trace_printk() and bpf_printk()'
description: "Any non-trivial BPF program always needs some amount of debugging to get it working correctly. Unfortunately, there isn't a BPF debugger yet, so the next best thing is to sprinkle printf()-like statements around and see what's going on in the BPF program. BPF equivalent of printf() is the bpf_trace_printk() helper. In this blog post we'll look at how to use it, what are its limitations, and how to work around them."
externalUrl: 'https://nakryiko.com/posts/bpf-tips-printk/'
categories:
  - Technology
---

{{preview}}

Any non-trivial BPF program always needs some amount of debugging to get it working correctly. Unfortunately, there isn't a BPF debugger yet, so the next best thing is to sprinkle printf()-like statements around and see what's going on in the BPF program. BPF equivalent of printf() is the bpf_trace_printk() helper. In this blog post we'll look at how to use it, what are its limitations, and how to work around them.

{{/preview}}
