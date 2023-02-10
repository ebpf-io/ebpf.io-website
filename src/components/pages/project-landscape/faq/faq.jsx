import React from 'react';

const Requirements = () => (
  <>
    <p>
      Projects can be listed on this page as "Major" or "Emerging". The requirements for being
      listed as "Emerging" are:
    </p>
    <ul>
      <li>
        The project must be open source. All source code must be licensed under an open source
        license. Any documentation must be licensed under an open license.
      </li>
      <li>
        The project must be using eBPF as its underlying core technology, in other words, a project
        would lose its purpose if the eBPF parts are removed.
      </li>
      <li>
        The project must be open to collaboration and have a governance model following open-source
        best-practices.
      </li>
    </ul>
    <p>
      In order to be listed as a "Major" project, a project must meet all of the requirements above,
      plus:
    </p>
    <ul>
      <li>The project must have more than 50 contributors.</li>
      <li>The project must be actively maintained.</li>
      <li>
        The project must be used in production-like environments with a significant amount of users.
        Since this information may not be easily discoverable from a link to the project, such
        information should be included in the pull request description.
      </li>
    </ul>
  </>
);

const items = [
  {
    question: 'Are these projects under the eBPF Foundation?',
    answer:
      '<ul><li>This page lists a number of open source projects that use eBPF as the underlying core technology. These projects are not under the <a href="https://www.ebpf.foundation/">eBPF Foundation</a> but are listed here as a survey of the eBPF project landscape today.</li></ul>',
  },
  {
    question: 'Add your project',
    answer:
      '<ol><li>Make sure that the project is meeting the requirements to be listed. See below.</li><li>Open a <a href="https://github.com/ebpf-io/ebpf.io" target="_blank" rel="noopener noreferrer">pull request</a> and provide the required information. Use one of the already listed projects as a template. The ordering of applications is based on the number of Github stars (high to low), updated on a quarterly basis.</li><li>The pull request will be reviewed by the community and merged by one of the maintainers. If you have any questions, feel free to ask on <a href="https://ebpf.io/slack">Slack</a>.</li></ol>',
  },
  {
    question: 'Are you maintaining a listed project?',
    answer:
      '<ul><li>If you are maintaining one of the listed projects and would like to adjust the content. Get in touch on <a href="https://ebpf.io/slack">Slack</a> or open a pull request directly.</li></ul>',
  },
  {
    question: 'Requirements for a project to be listed',
    answer: Requirements,
  },
];

const FAQ = () => (
  <section className="faq safe-paddings my-32 lg:my-28 md:my-20">
    <div className="container-sm">
      <h2 className="heading-8xl text-center font-bold leading-dense">
        Frequently Asked Questions
      </h2>
      <ul>
        {items.map(({ question, answer }, index) => {
          const Answer = answer;
          return (
            <li className="mt-12 first:mt-14 md:mt-10 md:first:mt-10" key={index}>
              <h3 className="font-sans text-3xl font-semibold leading-tight lg:text-2xl md:text-xl">
                {question}
              </h3>
              <div className="md:prose-md prose prose-xl mt-6 prose-p:!leading-normal hover:prose-a:text-gray-40 hover:prose-a:transition hover:prose-a:duration-200 prose-ol:!pl-6 prose-ul:!pl-5 prose-li:!leading-normal prose-li:marker:font-light prose-li:marker:text-black lg:prose-lg">
                {typeof answer === 'string' ? (
                  <div dangerouslySetInnerHTML={{ __html: answer }} />
                ) : (
                  <Answer />
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  </section>
);

export default FAQ;
