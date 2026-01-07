import React from 'react';

import ConnectingIcon from 'components/pages/summit-2024/information/images/connecting.inline.svg';
import SharingIcon from 'components/pages/summit-2024/information/images/sharing.inline.svg';
import TrendingIcon from 'components/pages/summit-2024/information/images/trending.inline.svg';
import Hero from 'components/pages/summit-2025/hero';
import Judges from 'components/pages/summit-2025/judges/judges';
import LastYear from 'components/pages/summit-2025/last-year/last-year';
import PrizesPanel from 'components/pages/summit-2025/prizes-panel/prizes-panel';
import SummitLayout from 'components/pages/summit-2025/summit-layout/summit-layout';
import Button from 'components/shared/button';
import SEO from 'components/shared/seo';
import {
  navigation,
  devpostUrl,
  devpostGalleryUrl,
  slackUrl,
} from 'data/shared/summit-2025-navigation';
import DevPostIcon from 'icons/devpost.inline.svg';
import SlackIcon from 'icons/slack.inline.svg';

const ogImage = '/images/social-preview-ebpf-summit.jpg';

const judges = [
  { name: 'Liz Rice', position: 'Chief of Open Source, Isovalent at Cisco' },
  {
    name: 'Daniel Borkman',
    position: 'Distinguished Software Engineer, Isovalent at Cisco and eBPF and Cilium Creator',
  },
  { name: 'Bill Mulligan', position: 'Community Pollinator, Isovalent at Cisco' },
  { name: 'Dylan Reimerink', position: 'Senior Software Engineer, Isovalent at Cisco' },
  { name: 'Duffie Cooley', position: 'CTO Field, Isovalent at Cisco' },
  {
    name: 'John Fastabend',
    position: 'Principal Director, Isovalent at Cisco and Tetragon Creator',
  },
  { name: 'Joe Stringer', position: 'Principal Engineer, Isovalent at Cisco' },
  { name: 'Constanze b. Roedig', position: 'Independent Researcher and eBPF expert' },
  { name: 'Nimisha Mehta', position: 'Senior Software Engineer, Confluent' },
  { name: 'Neha Aggarwal', position: 'Principal Software Engineer Manager, Microsoft' },
  {
    name: 'Teodor (Janez) Podobnik',
    position: 'SRE, Prewave and creator of ebpf chirmp newsletter',
  },
];

const tracks = [
  {
    emoji: '🧩',
    title: 'Tools & Projects Using eBPF or Contributing to Cilium',
    description:
      "Build or enhance tools using eBPF that aren't based on Isovalent projects. Make direct contributions to Cilium, Tetragon, Hubble, or related tooling and docs.",
  },
  {
    emoji: '🔍',
    title: 'Using Cilium Technologies in Original Ways',
    description:
      'Use Cilium technologies in creative or practical scenarios to solve real problems.',
  },
  {
    emoji: '🌱',
    title: 'eBPF Starter Track (Beginner-Friendly)',
    description:
      'A low-pressure track for newcomers to learn, experiment, and share beginner-level eBPF or Cilium work.',
  },
];

// Hackathon edition content for 2025
const hero = {
  date: 'October <strong>6</strong> – November <strong>30</strong>, 2025',
  title: 'eBPF Summit 2025: Hackathon Edition',
  time: 'Remote, async, open to all skill levels',
  description: '<p>A global open source hackathon to build, explore, and contribute with eBPF.</p>',
  ctaButtons: [
    {
      title: 'View Project Gallery',
      url: devpostGalleryUrl,
      theme: 'orange',
      iconName: 'devpost',
      target: '_blank',
    },
    { title: 'Join the Slack', url: slackUrl, theme: 'gray', iconName: 'slack', target: '_blank' },
  ],
  illustrationUrl: '/images/hackathon-hero.png',
  rootClassName: 'pb-24 lg:pb-16',
};

// Update last year section to point to resources instead of YouTube CTA
const lastYear = {
  title: 'Highlights from Past Events',
  description:
    'Looking for inspiration? Explore talks, demos, and case studies from previous eBPF Summit editions.',
  link: {
    url: '/resources',
    title: 'Resources',
  },
  items: [
    { number: '2024', unit: 'Summit', textColor: 'black', numberColor: 'orange' },
    { number: '2023', unit: 'Summit', textColor: 'white', numberColor: 'white' },
    { number: 'Labs', unit: 'and Docs', textColor: 'white', numberColor: 'orange' },
    { number: 'Books', unit: 'and Guides', textColor: 'black', numberColor: 'orange' },
  ],
};

const Summit2025 = () => (
  <SummitLayout navigation={navigation} devpostUrl={devpostUrl}>
    <Hero {...hero} />
    {/* Section 3: About */}
    <section id="about" className="mt-16 md:mt-10">
      <div className="container">
        <h2 className="heading-9xl text-center font-bold leading-none">About the Hackathon</h2>
        <div className="mt-5 text-center text-xl leading-normal md:mt-3">
          <p>
            eBPF Summit: Hackathon Edition invites developers, tinkerers, and open source
            enthusiasts from all backgrounds to get hands-on with this cutting-edge kernel
            technology that&apos;s being used to build the future of cloud native networking,
            observability, and security.
          </p>
        </div>
        <div className="mt-14 mb-14 grid grid-cols-3 gap-6 md:grid-cols-1">
          <article className="flex flex-col items-start rounded-lg border border-gray-94 p-8 lg:p-6">
            <ConnectingIcon className="h-auto w-14 shrink-0" />
            <h3 className="mt-2 text-2xl font-bold leading-tight">Connecting Contributors</h3>
            <p className="mt-2.5 text-lg leading-normal">
              The hackathon brings together eBPF developers, operators, advocates, and first-time
              contributors from around the world — to collaborate, build, and learn from each other.
            </p>
          </article>
          <article className="flex flex-col items-start rounded-lg border border-gray-94 p-8 lg:p-6">
            <SharingIcon className="h-auto w-14 shrink-0" />
            <h3 className="mt-2 text-2xl font-bold leading-tight">Building in the Open</h3>
            <p className="mt-2.5 text-lg leading-normal">
              From early ideas to production-ready tools, this event is about making progress in
              public — with support, feedback, and community energy.
            </p>
          </article>
          <article className="flex flex-col items-start rounded-lg border border-gray-94 p-8 lg:p-6">
            <TrendingIcon className="h-auto w-14 shrink-0" />
            <h3 className="mt-2 text-2xl font-bold leading-tight">Expanding Use Cases</h3>
            <p className="mt-2.5 text-lg leading-normal">
              Explore how eBPF powers the next generation of security, networking, and observability
              — and help push its boundaries by trying new integrations, policies, and workflows.
            </p>
          </article>
        </div>

        {/* About eBPF Summit section */}
        <div className="mt-16">
          <h2 className="heading-9xl text-center font-bold leading-none">About eBPF Summit</h2>
          <div className="mt-5 text-center text-xl leading-normal md:mt-3">
            <p>
              Since 2020, eBPF Summit has gathered the eBPF community together for a virtual summit
              that explores and celebrates the open source eBPF ecosystem. With everything from deep
              dives to hands-on challenges, eBPF Summit brings together everyone building, using, or
              interested in using eBPF as a platform. This year we&apos;re doing something different
              by hosting this eBPF Hackathon!
            </p>
          </div>
          <div className="mt-6 text-center">
            <Button
              className="rounded-lg px-6"
              size="sm"
              theme="orange"
              to="https://isovalent.com/blog/post/ebpf-summit-hackathon-edition-2025/"
              target="_blank"
            >
              Read the recap blog post
            </Button>
          </div>
        </div>
      </div>
    </section>

    {/* Section: Winners */}
    <section className="mt-16">
      <div className="container">
        <h2 className="heading-9xl text-center font-bold leading-none">
          🥇 And the Winners are... 🥁
        </h2>
        <div className="mt-8 text-center text-xl leading-normal">
          <p>
            Without further ado, let&apos;s announce the winning entries from the three Hackathon
            categories:
          </p>
        </div>

        {/* Winner 1: eBPF Starter Track */}
        <div className="mt-12">
          <div className="rounded-xl border border-[#FFD08A] bg-gradient-to-r from-[#FFF0D9] to-[#FFE3B3] px-10 py-12 shadow-sm md:px-6">
            <h3 className="text-2xl font-bold mb-6">eBPF Starter Track for Beginners</h3>
            <div className="grid grid-cols-2 gap-8 items-start md:grid-cols-1">
              <div className="relative pb-[56.25%]">
                <iframe
                  className="absolute left-0 top-0 h-full w-full rounded-lg"
                  src="https://www.youtube.com/embed/3Z7UYZ7sJTU"
                  frameBorder="0"
                  width={592}
                  height={333}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  title="SCX_MUS - Mostly Unfair Scheduler"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <div className="flex flex-col justify-center">
                <h4 className="text-2xl font-bold mb-4">
                  <a
                    href="https://devpost.com/software/scx_mus-mostly-unfair-scheduler"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    SCX_MUS - Mostly Unfair Scheduler
                  </a>
                </h4>
                <p className="text-lg leading-normal mb-6">
                  A custom Linux scheduler that uses the <code>sched_ext</code> framework to
                  prioritise containers in Kubernetes. The project provides a simple CLI that
                  selects a container, extracts its <code>cgroup</code> ID and stores it in a BPF
                  map. Judges highlighted how impressive it is to see a group of newcomers tackle
                  such a complex program type:{' '}
                  <em>
                    sched_ext is one of the more complicated program types to write … it&apos;s a
                    great example of eBPF super‑powers.
                  </em>
                </p>
                <Button
                  className="flex items-center gap-3 rounded-lg px-7 py-4 text-base font-extrabold w-fit"
                  theme="orange"
                  to="https://devpost.com/software/scx_mus-mostly-unfair-scheduler"
                  target="_blank"
                >
                  <DevPostIcon className="h-5 w-5" />
                  View Project on DevPost
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Winner 2: Using eBPF Track */}
        <div className="mt-12">
          <div className="rounded-xl border border-[#FFD08A] bg-gradient-to-r from-[#FFF0D9] to-[#FFE3B3] px-10 py-12 shadow-sm md:px-6">
            <h3 className="text-2xl font-bold mb-6">Using eBPF Track</h3>
            <div className="grid grid-cols-2 gap-8 items-start md:grid-cols-1">
              <div className="relative pb-[56.25%]">
                <iframe
                  className="absolute left-0 top-0 h-full w-full rounded-lg"
                  src="https://www.youtube.com/embed/Xr3l-eGaY7c"
                  frameBorder="0"
                  width={592}
                  height={333}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  title="xgotop: Realtime Go Runtime Visualizer"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <div className="flex flex-col justify-center">
                <h4 className="text-2xl font-bold mb-4">
                  <a
                    href="https://devpost.com/software/xgotop-go-runtime-observer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    xgotop: Realtime Go Runtime Visualizer
                  </a>
                </h4>
                <p className="text-lg leading-normal mb-6">
                  A lean but powerful profiler that instruments the Go runtime to visualise
                  goroutines and memory allocations in real time. With sub‑microsecond overhead and
                  a polished UI, xgotop was dubbed <em>pprof on steroids</em> by one judge, who also
                  praised the clear architecture diagrams and demo.
                </p>
                <Button
                  className="flex items-center gap-3 rounded-lg px-7 py-4 text-base font-extrabold w-fit"
                  theme="orange"
                  to="https://devpost.com/software/xgotop-go-runtime-observer"
                  target="_blank"
                >
                  <DevPostIcon className="h-5 w-5" />
                  View Project on DevPost
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Winner 3: Cilium Technologies Track */}
        <div className="mt-12">
          <div className="rounded-xl border border-[#FFD08A] bg-gradient-to-r from-[#FFF0D9] to-[#FFE3B3] px-10 py-12 shadow-sm md:px-6">
            <h3 className="text-2xl font-bold mb-6">Cilium Technologies Track</h3>
            <div className="grid grid-cols-2 gap-8 items-start md:grid-cols-1">
              <div className="relative pb-[56.25%]">
                <iframe
                  className="absolute left-0 top-0 h-full w-full rounded-lg"
                  src="https://www.youtube.com/embed/fPq9QCR0M5E"
                  frameBorder="0"
                  width={592}
                  height={333}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  title="Goya"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <div className="flex flex-col justify-center">
                <h4 className="text-2xl font-bold mb-4">
                  <a
                    href="https://devpost.com/software/test-tngojh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Goya
                  </a>
                </h4>
                <p className="text-lg leading-normal mb-6">
                  A proof‑of‑concept framework that blends the Rust‑based Aya framework for kernel
                  space with Cilium&apos;s Go libraries for user space. It offers a template for
                  developers who want to write eBPF kernel code in Rust, while still benefitting
                  from the ergonomics of Go for their user space code. Judges appreciated the niche
                  appeal:{' '}
                  <em>
                    If anyone ever wanted to do Go + Rust, this is a really good starting point.
                  </em>
                </p>
                <Button
                  className="flex items-center gap-3 rounded-lg px-7 py-4 text-base font-extrabold w-fit"
                  theme="orange"
                  to="https://devpost.com/software/test-tngojh"
                  target="_blank"
                >
                  <DevPostIcon className="h-5 w-5" />
                  View Project on DevPost
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Section: eCHO Episode 199 */}
    <section className="mt-16">
      <div className="container">
        <div className="rounded-xl border border-[#FFD08A] bg-gradient-to-r from-[#FFF0D9] to-[#FFE3B3] px-10 py-12 shadow-sm md:px-6">
          <h2 className="heading-9xl text-center font-bold leading-none">
            eCHO Episode 199: Hackathon Recap
          </h2>
          <div className="mt-8 text-center text-xl leading-normal">
            <p>
              Watch the eCHO Episode 199 where judges <strong>Constanze b. Roedig</strong> and{' '}
              <strong>Teodor (Janez) Podobnik</strong> share insights into the judging process and
              showcase the winning projects. We highlight the winners and the best submissions from
              each track.
            </p>
          </div>
          <div className="mt-8">
            <div className="relative pb-[56.25%] max-w-4xl mx-auto">
              <iframe
                className="absolute left-0 top-0 h-full w-full rounded-lg"
                src="https://www.youtube.com/embed/CFEqXwOoB-k"
                frameBorder="0"
                width={592}
                height={333}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                title="eCHO Episode 199: eBPF Summit Hackathon Edition"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Section: Project Gallery */}
    <section className="mt-16">
      <div className="container">
        <div className="rounded-xl border border-[#FFD08A] bg-gradient-to-r from-[#FFF0D9] to-[#FFE3B3] px-10 py-12 shadow-sm md:px-6">
          <h2 className="heading-9xl text-center font-bold leading-none">Explore the Projects</h2>
          <div className="mt-8 grid grid-cols-2 gap-10 md:grid-cols-1 md:gap-6">
            <div className="space-y-4">
              <p className="text-lg">
                Submissions for the eBPF Summit 2025: Hackathon Edition are now closed. We received{' '}
                <strong>42 incredible projects</strong> across all three tracks showcasing
                innovation in eBPF and Cilium technologies!
              </p>
              <p className="text-lg">
                Over the course of four weeks, more than <strong>500 participants</strong> from
                around the world joined the challenge. Explore all the amazing projects in the
                gallery below!
              </p>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 md:mt-2">
              <Button
                className="flex items-center gap-3 rounded-lg px-7 py-4 text-base font-extrabold"
                theme="orange"
                to={devpostGalleryUrl}
                target="_blank"
              >
                <DevPostIcon className="h-5 w-5" />
                View Project Gallery
              </Button>
              <Button
                className="flex items-center gap-3 rounded-lg px-7 py-4 text-base font-extrabold"
                theme="gray"
                to={slackUrl}
                target="_blank"
              >
                <SlackIcon className="h-5 w-5" />
                Join the Slack
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Section: Participant Quotes */}
    <section className="mt-16">
      <div className="container">
        <h2 className="heading-9xl text-center font-bold leading-none">What Participants Say</h2>
        <div className="mt-12 grid grid-cols-3 gap-8 md:grid-cols-1">
          <blockquote className="flex flex-col rounded-lg border border-gray-94 bg-white p-8 shadow-sm">
            <div className="mb-4 text-4xl leading-none text-primary-orange">&ldquo;</div>
            <p className="flex-grow text-lg leading-relaxed italic">
              Great experience! The hackathon motivated me to build something real instead of just
              reading docs.
            </p>
          </blockquote>
          <blockquote className="flex flex-col rounded-lg border border-gray-94 bg-white p-8 shadow-sm">
            <div className="mb-4 text-4xl leading-none text-primary-orange">&ldquo;</div>
            <p className="flex-grow text-lg leading-relaxed italic">
              All good, I love the idea this year to do something practical. I would never have done
              this project otherwise.
            </p>
          </blockquote>
          <blockquote className="flex flex-col rounded-lg border border-gray-94 bg-white p-8 shadow-sm">
            <div className="mb-4 text-4xl leading-none text-primary-orange">&ldquo;</div>
            <p className="flex-grow text-lg leading-relaxed italic">
              This hackathon was a great way to explore the Cilium ecosystem. The challenge
              structure encouraged building something practical, and the documentation and examples
              were helpful. I enjoyed the open-ended creative format and would love to see more
              beginner-friendly policy and datapath walkthroughs in future events.
            </p>
          </blockquote>
        </div>
      </div>
    </section>

    {/* Section 4: Tracks */}
    <section id="tracks" className="mt-12">
      <div className="container">
        <h2 className="heading-9xl text-center font-bold leading-none">Tracks</h2>
        <div className="mt-6 grid grid-cols-3 gap-6 md:grid-cols-1">
          {tracks.map(({ emoji, title, description }, index) => (
            <div className="rounded-lg border border-gray-94 p-6" key={index}>
              <div className="text-3xl" aria-hidden>
                {emoji}
              </div>
              <h3 className="mt-2 text-xl font-bold">{title}</h3>
              <p className="mt-2">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Section 5: Prizes */}
    <section id="prizes" className="mt-16">
      <div className="container">
        <PrizesPanel />
      </div>
    </section>

    {/* Section 6: Judges */}
    <div id="judges" className="mt-12">
      <Judges title="Judges" items={judges} />
    </div>

    <style>{`
      #last-year-summit ul li:last-child span:first-child {
        font-size: 3rem;
      }
      @media (max-width: 1024px) {
        #last-year-summit ul li:last-child span:first-child {
          font-size: 2.25rem;
        }
      }
      @media (max-width: 768px) {
        #last-year-summit ul li:last-child span:first-child {
          font-size: 1.875rem;
        }
      }
    `}</style>
    <LastYear {...lastYear} />
  </SummitLayout>
);

// eslint-disable-next-line react/prop-types
export const Head = ({ location: { pathname } }) => {
  const pageMetadata = {
    title: 'eBPF Summit 2025: Hackathon Edition',
    description:
      'Join the eBPF Summit 2025: Hackathon Edition — a global open source hackathon running Oct 13 – Nov 30, 2025.',
    image: ogImage,
    pathname,
  };
  return <SEO {...pageMetadata} />;
};

export default Summit2025;
