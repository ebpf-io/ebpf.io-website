import Layout from "../layouts";
import React from "react";
import { Link } from "gatsby";

const CallForPapers = () => (
  <Layout>
    <div className="page-wrapper">
      <img className="main-logo" src={require("../assets/logo-big.png")} />
      <h1 style={{textAlign: 'center'}}>
        eBPF Summit
        <br />
        Oct 28-29th
        <br />
        Call For Papers
      </h1>
      <p>
        We’re excited to announce that the call for papers is now open for the inaugural eBPF Summit,
        a virtual event, targeted at DevOps, platform architects and developers, to be held October 28-29,
        2020. The summit is offered at no cost, and will include keynotes from those leading
        the open source eBPF community and from eBPF power-users like Netflix, Facebook, Datadog,
        and Google as well as user lightning talks. Participants will have a chance to ask questions
        of the speakers and chat with peers on a Slack forum. We’re inviting eBPF users,
        contributors and community members to participate in this gathering.
      </p>
      <h2>About the eBPF Summit:</h2>
      <p>
        eBPF is quickly becoming one of the most talked about technologies in our industry - enabling
        a new generation of networking, tracing, observability and security. The eBPF Summit is targeted
        at users and potential users of this groundbreaking technology - both those looking at
        leveraging eBPF directly and via one of the projects leveraging eBPF (e.g. BPFTrace, Cilium,
        Falco etc.).
      </p>
      <p>Confirmed keynote speakers include:</p>
      <ul>
        <li>Brendan Gregg (Author of “BPF Performance Tools“, Lead performance engineer, Netflix)</li>
        <li>Zang Li (Cilium Core team Maintainer, Google)</li>
        <li>Alexei Starovoitov (Co-Maintainer eBPF, Facebook)</li>
        <li>Kris Nova (Chief Open Source Advocate, Sysdig)</li>
        <li>David Miller (Linux Kernel Networking Maintainer, RedHat)</li>
        <li>Daniel Borkmann (Co-maintainter eBPF, Isovalent)</li>
        <li>Liz Rice (VP, Open Source Engineering, Aqua)</li>
        <li>Laurent Bernaille (Staff Engineer at Datadog)</li>
        <li>Thomas Graf (Co-founder of the Cilium project, Isovalent)</li>
      </ul>
      <h2>eBPF User Lightning Talks:</h2>
      <p>
        Users are invited to submit talks describing
        how they are using eBPF and eBPF-based open
        source projects to solve real world problems. To be clear, you do not have to be writing
        raw eBPF programs yourself to speak, we expect many speakers to be leveraging eBPF via derivative
        projects (see list here: <Link to="/projects" className="main-button">https://ebpf.io/projects</Link>
        ). Lightning talks will be 5 minutes in length (plus time for Q&A) and can be pre-recorded or
        delivered live based on the speaker’s preference. We do ask that regardless of the delivery
        that the speaker is present to answer questions and interact with the community.
      </p>
      <h2>Suggested Topics:</h2>
      <ul>
        <li>Using eBPF to troubleshoot application and system performance</li>
        <li>Applying eBPF to implement zero trust, runtime security, network policy</li>
        <li>Tackling infrastructure scalability challenges with eBPF</li>
        <li>Applying eBPF to networking and load-balancing</li>
        <li>Application profiling and tracing with eBPF</li>
        <li>System and application monitoring with eBPF</li>
        <li>Unlocking new levels of observability with eBPF</li>
        <li>Advancements in the eBPF runtime</li>
        <li>eBPF community related topics</li>
      </ul>
      <h2>Registration:</h2>
      <p>
        The summit is open to everyone free of charge. To sign up for the event, please fill out this <a href="https://docs.google.com/forms/d/e/1FAIpQLSeWBrtQzSDxgFb2yMoa2tePapMibKeGaHLHDd70xNJzzVMX5g/viewform?embedded=true">registration form</a>.
        You will receive information on how to join the summit prior to the event.
      </p>
      <h2>Dates to Remember:</h2>
      <ul>
        <li>CFP Opens: Wednesday, September 23</li>
        <li>CFP Closes: Wednesday, October 14 at 11:59 PDT</li>
        <li>Registration opens: Wednesday, September 23</li>
        <li>CFP Notifications: on or before Friday, October 16</li>
        <li>Session Recordings Completed: Sunday, October 25th at 11:59 PDT</li>
        <li>Event Date: October 28 and 29th, 2020, 9am-12pm PDT; 4pm-7pm GMT</li>
      </ul>
      <p>
        If you have any questions, please contact <a href="mailto:neela@isovalent.com">neela@isovalent.com</a>
      </p>
    </div>

    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLSeNUo-TrAVRAjMdjB62A48CtHarC1AexWZpTQskvTyNOoSqaw/viewform?embedded=true"
      width="100%"
      height="1590"
      frameBorder="0"
      marginHeight="0"
      marginWidth="0"
      style={{marginTop: 48}}
    >Loading…</iframe>
  </Layout>
);

export default CallForPapers;
