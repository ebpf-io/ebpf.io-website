import Helmet from "react-helmet";
import Layout from "../layouts";
import React from "react";

import "../stylesheets/index.scss";

const pageMetaTitle = 'How to contribute to eBPF'
const pageMetaDescription = 'Want to learn how to contribute to eBPF? Learn how to get started contributing to eBPF projects.'

const Title = () => <div className="contribute-title">How to Contribute to eBPF</div>;

const Section = ({
  text,
  title
}) => (
  <div className="contribute-section">
    <div className="contribute-section-content">
      {title && <div className="contribute-section-title">{title}</div>}
      <div className="contribute-section-text">{text}</div>
    </div>
  </div>
);

const Page = () => (
  <Layout>
    <div className="page-wrapper page-contribute">
      <Helmet
        title={pageMetaTitle}

        meta={[
          {name: "keywords", content: "ebpf, bpf, contribute, getting started, community"},
          {name: "type", property: "og:type", content: "website"},
          {name: "url", property: "og:url", content: "https://ebpf.io/contribute/"},
          {name: "title", property: "og:title", content: pageMetaTitle},
          {name: "description", property: "og:description", content: pageMetaDescription},
          {name: "image", property: "og:image", content: 'https://ebpf.io' + require("../assets/ogimage.png")},
          {name: "twitter:card", content: "summary_large_image"},
          {name: "twitter:url", content: "https://ebpf.io/"},
          {name: "twitter:title", content: pageMetaTitle},
          {name: "twitter:description", content: pageMetaDescription},
          {name: "twitter:image", content: 'https://ebpf.io' + require("../assets/ogimage.png")},
        ]}
      />
      <Title />
      <p>
        eBPF consists of many communities including the eBPF runtime in the Linux
        kernel, various development SDKs and libraries, a series of large
        projects using eBPF, and a wide set of smaller projects and tools. There
        are therefore many ways to contribute to the eBPF community and get
        involved. The following list of ideas can serve as a starting point on
        how you can get involved and contribute to the community.
      </p>

      <h2>Contribute to the eBPF runtime in the Linux kernel</h2>
      <p>
        The Linux kernel community is maintaining separate <a
        href="https://git.kernel.org/?q=BPF+Group">Git trees</a> for the eBPF
        subsystem to manage all developer contributions. The trees are maintained by:
      </p>
      <ul>
        <li>Alexei Starovoitov, Facebook</li>
        <li>Daniel Borkmann, Cilium/Isovalent</li>
      </ul>
      <p>
        Working on the eBPF runtime can be incredibly rewarding as it builds the
        foundation for software being written that runs on millions of systems
        and devices. Work includes a wide range of topics from adding support
        to additional hooks, adding new program types, improvements to the eBPF
        verifier, adding JIT support for additional CPU architectures, extending
        the set of BPF helpers, adding new test cases to BPF's test infrastructure,
        or improvements to bpftool and libbpf. See <a href="/projects#kernel">Linux
        kernel eBPF runtime</a> for additional details.
      </p>

      <h2>Contribute to an eBPF project</h2>
      <p>
        The list of eBPF-based projects is long and growing. It will be simple to
        find a project that sparks interest. Check out the <a
        href="/projects">list of eBPF projects</a> to see an overview of all
        projects.
      </p>
      <p>
        Many of the listed eBPF projects maintain a list of <code>good-first-issue</code>-labeled
        tasks which are scoped to not require extensive project specific knowledge and
        provide a great opportunity to get hands-on quickly.
      </p>

      <h2>Contribute to the eBPF development toolchains</h2>
      <p>
        Even though the Linux kernel provides minimal libraries and APIs to use
        eBPF directly, the majority of projects leverage an eBPF development
        toolchain to simplify use of eBPF and share common code among other
        projects.
      </p>
      <p>
        Check out <a href="/what-is-ebpf#toolchains">eBPF development
        toolchains</a> for a frequently updated list of projects in this space.
        You will find information on how to get involved on each project website
        directly.
      </p>

      <h2>Contribute to ebpf.io</h2>
      <p>
        Do you have a writing talent? Are you good with diagrams? The content of the
        ebpf.io website is licensed under a <a
        href="https://creativecommons.org/licenses/by/4.0/">Creative Commons
        Attribution 4.0 International License</a>. If you want to get involved,
        visit the <a href="https://github.com/cilium/ebpf.io">GitHub
        repository</a>.  Make sure to also join the <a
        href="/slack">#ebpf Slack channel</a> to get in
        touch with the team working on the documentation.  Share what you have
        learned by improving the documentation or write additional tutorials.
      </p>

    </div>
  </Layout>
);

export default Page;
