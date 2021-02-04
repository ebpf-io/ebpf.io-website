import React from "react";
import Helmet from "react-helmet";

export default function () {
  const pageMetaTitle = 'eBPF - Introduction, Tutorials & Community Resources'
  const pageMetaDescription = 'eBPF is a revolutionary technology that can run sandboxed programs in the Linux kernel without changing kernel source code or loading a kernel module.'

  return <Helmet
    title={pageMetaTitle}

    meta={[
      {name: "keywords", content: "ebpf, bpf, xdp, introduction, tutorial, documentation, deep dive, community"},
      {name: "type", property: "og:type", content: "website"},
      {name: "url", property: "og:url", content: "https://ebpf.io/"},
      {name: "title", property: "og:title", content: pageMetaTitle},
      {name: "description", property: "og:description", content: pageMetaDescription},
      {name: "image", property: "og:image", content: 'https://ebpf.io' + require("../../assets/ogimage.png")},
      {name: "twitter:card", content: "summary_large_image"},
      {name: "twitter:url", content: "https://ebpf.io/"},
      {name: "twitter:title", content: pageMetaTitle},
      {name: "twitter:description", content: pageMetaDescription},
      {name: "twitter:image", content: 'https://ebpf.io' + require("../../assets/ogimage.png")},
    ]}
  />
};
