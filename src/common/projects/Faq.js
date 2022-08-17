import React from 'react';
import { TitleWithAnchor } from '../TitleWithAnchor';

const YouMaintain = () => (
  <ul className="projects-requirements-list">
    <li>
      If you are maintaining one of the listed projects and would like to adjust
      the content. Get in touch on <a href="/slack">Slack</a> or open a pull
      request directly.
    </li>
  </ul>
);

const HowToList = () => (
  <ol className="projects-how-to-list">
    <li>
      Make sure that the project is meeting the requirements to be listed. See
      below.
    </li>
    <li>
      Open a <a href="https://github.com/cilium/ebpf.io">pull request</a> and
      provide the required information. Use one of the already listed projects
      as a template. The ordering of applications is based on the number of
      Github stars (high to low), updated on a quaterly basis.
    </li>
    <li>
      The pull request will be reviewed by the community and merged by one of
      the maintainers. If you have any questions, feel free to ask on{" "}
      <a href="/slack">Slack</a>.
    </li>
  </ol>
);

const EmergingRequirementsList = () => (
  <ul className="projects-requirements-list">
    <li>
      The project must be open source. All source code must be licensed under an
      open source license. Any documentation must be licensed under an open
      license.
    </li>
    <li>
      The project must be using eBPF as its underlying core technology, in other
      words, a project would lose its purpose if the eBPF parts are removed.
    </li>
    <li>
      The project must be open to collaboration and have a governance model
      following open-source best-practices.
    </li>
  </ul>
);

const MajorRequirementsList = () => (
  <ul className="projects-requirements-list">
    <li>The project must have more than 50 contributors.</li>
    <li>The project must be actively maintained.</li>
    <li>
      The project must be used in production-like environments with a
      significant amount of users. Since this information may not be easily
      discoverable from a link to the project, such information should be
      included in the pull request description.
    </li>
  </ul>
);

export const FAQ = () => (
  <div className="projects-container">
    <TitleWithAnchor anchor="faq" headerClassName="projects-title faq-title">
      Frequently Asked Questions
    </TitleWithAnchor>
    <h3>Are these projects under the eBPF Foundation?</h3>
    <ul>
      <li>This page lists a number of open source projects that use eBPF as the
	underlying core technology. These projects are <b>not</b> under
	the <a href="https://www.ebpf.foundation">eBPF Foundation</a> but are
	listed here as a survey of the eBPF project landscape today.</li>
    </ul>
    <h3>Add your project</h3>
    <HowToList />
    <h3>Are you maintaining a listed project?</h3>
    <YouMaintain />
    <h3>Requirements for a project to be listed</h3>
    <p>
      Projects can be listed on this page as "Major" or "Emerging". The
      requirements for being listed as "Emerging" are:
    </p>
    <EmergingRequirementsList />
    <p>
      In order to be listed as a "Major" project, a project must meet all of
      the requirements above, plus:
    </p>
    <MajorRequirementsList />
  </div>
)
