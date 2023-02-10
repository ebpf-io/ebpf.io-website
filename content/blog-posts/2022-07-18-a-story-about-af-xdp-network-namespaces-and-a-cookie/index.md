---
date: '2022-07-18T17:00:00.000Z'
title: 'A story about AF_XDP, network namespaces and a cookie'
description: 'A crash in a development version of flowtrackd (the daemon that powers our Advanced TCP Protection) highlighted the fact that libxdp (and specifically the AF_XDP part) was not Linux network namespace aware. This blogpost describes the debugging journey to find the bug, as well as a fix.'
ogImage: ogimage.png
externalUrl: 'https://blog.cloudflare.com/a-story-about-af-xdp-network-namespaces-and-a-cookie/'
categories:
  - Technology
---

{{preview}}

A crash in a development version of flowtrackd (the daemon that powers our Advanced TCP Protection) highlighted the fact that libxdp (and specifically the AF_XDP part) was not Linux network namespace aware. This blogpost describes the debugging journey to find the bug, as well as a fix.

{{/preview}}
