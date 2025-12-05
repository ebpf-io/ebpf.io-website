import React from 'react';

import ConnectingIcon from 'components/pages/summit-2024/information/images/connecting.inline.svg';
import SharingIcon from 'components/pages/summit-2024/information/images/sharing.inline.svg';
import TrendingIcon from 'components/pages/summit-2024/information/images/trending.inline.svg';
import LastYear from 'components/pages/summit-2024/last-year';
import Hero from 'components/pages/summit-2025/hero';
import JoinPanel from 'components/pages/summit-2025/join-panel/join-panel';
import Judges from 'components/pages/summit-2025/judges/judges';
import PrizesPanel from 'components/pages/summit-2025/prizes-panel/prizes-panel';
import SummitLayout from 'components/pages/summit-2025/summit-layout/summit-layout';
import Button from 'components/shared/button';
import SEO from 'components/shared/seo';
import { navigation, devpostUrl, slackUrl } from 'data/shared/summit-2025-navigation';

const ogImage = '/images/social-preview-ebpf-summit.jpg';

// Hackathon edition content for 2025
const hero = {
  date: 'October <strong>6</strong> – November <strong>30</strong>, 2025',
  title: 'eBPF Summit 2025: Hackathon Edition',
  time: 'Remote, async, open to all skill levels',
  description: '<p>A global open source hackathon to build, explore, and contribute with eBPF.</p>',
  ctaButtons: [
    {
      title: 'Join on DevPost',
      url: devpostUrl,
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
            <Button className="rounded-lg px-6" size="sm" theme="orange" to="/blog" target="_blank">
              Read the blog post announcement
            </Button>
          </div>
        </div>

        <div className="mt-12">
          <div className="rounded-lg bg-[#FFF0D9] p-6 md:p-5">
            <h3 className="text-center text-2xl font-bold tracking-wide">Schedule at a glance</h3>
            <div className="mt-6 space-y-3">
              <div className="grid grid-cols-2 gap-3 md:grid-cols-1">
                <div className="rounded bg-white px-3 py-2 font-bold shadow-sm">
                  Registration Period
                </div>
                <div className="rounded bg-white px-3 py-2 text-gray-1 shadow-sm md:mt-2">
                  Open now
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 md:grid-cols-1">
                <div className="rounded bg-white px-3 py-2 font-bold shadow-sm">
                  Submission Period
                </div>
                <div className="rounded bg-white px-3 py-2 text-gray-1 shadow-sm md:mt-2">
                  Monday, 13 October – Sunday, 30 November
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 md:grid-cols-1">
                <div className="rounded bg-white px-3 py-2 font-bold shadow-sm">Judging Period</div>
                <div className="rounded bg-white px-3 py-2 text-gray-1 shadow-sm md:mt-2">
                  Monday, 1 December – Monday, 15 December
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 md:grid-cols-1">
                <div className="rounded bg-white px-3 py-2 font-bold shadow-sm">
                  Winners Announcement
                </div>
                <div className="rounded bg-white px-3 py-2 text-gray-1 shadow-sm md:mt-2">
                  Around Wednesday, 17 December
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center">
          <Button
            className="rounded-lg px-6"
            size="sm"
            theme="orange"
            to={devpostUrl}
            target="_blank"
          >
            Full details & examples on DevPost
          </Button>
        </div>
      </div>
    </section>

    {/* Section 4: Tracks */}
    <section id="tracks" className="mt-12">
      <div className="container">
        <h2 className="heading-9xl text-center font-bold leading-none">Tracks</h2>
        <div className="mt-6 grid grid-cols-3 gap-6 md:grid-cols-1">
          <div className="rounded-lg border border-gray-94 p-6">
            <div className="text-3xl" aria-hidden>
              🧩
            </div>
            <h3 className="mt-2 text-xl font-bold">
              Tools & Projects Using eBPF or Contributing to Cilium
            </h3>
            <p className="mt-2">
              Build or enhance tools using eBPF that aren&apos;t based on Isovalent projects. Make
              direct contributions to Cilium, Tetragon, Hubble, or related tooling and docs.
            </p>
          </div>
          <div className="rounded-lg border border-gray-94 p-6">
            <div className="text-3xl" aria-hidden>
              🔍
            </div>
            <h3 className="mt-2 text-xl font-bold">Using Cilium Technologies in Original Ways</h3>
            <p className="mt-2">
              Use Cilium technologies in creative or practical scenarios to solve real problems.
            </p>
          </div>
          <div className="rounded-lg border border-gray-94 p-6">
            <div className="text-3xl" aria-hidden>
              🌱
            </div>
            <h3 className="mt-2 text-xl font-bold">eBPF Starter Track (Beginner-Friendly)</h3>
            <p className="mt-2">
              A low-pressure track for newcomers to learn, experiment, and share beginner-level eBPF
              or Cilium work.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Section 5: Prizes */}
    <section id="prizes" className="mt-16">
      <div className="container">
        <PrizesPanel />
      </div>
    </section>

    {/* Section 6: Join */}
    <section id="join" className="mt-16">
      <div className="container">
        <JoinPanel devpostUrl={devpostUrl} slackUrl={slackUrl} />
      </div>
    </section>

    {/* Section 7: Judges */}
    <div id="judges" className="mt-12">
      <Judges
        title="Judges"
        items={[
          { name: 'Liz Rice', position: 'Chief of Open Source, Isovalent at Cisco' },
          {
            name: 'Daniel Borkman',
            position:
              'Distinguished Software Engineer, Isovalent at Cisco and eBPF and Cilium Creator',
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
        ]}
      />
    </div>

    {/* Section 8: Highlights & Resources */}
    {/* <section id="resources" className="mt-12">
      <div className="container">
        <h2 className="heading-9xl text-center font-bold leading-none">Highlights from Past Events and Resources</h2>
        <p className="mt-4 text-center">Looking for inspiration?</p>
        <ul className="mt-6 grid grid-cols-2 gap-6 md:grid-cols-1">
          <li><a className="font-bold underline" href="/summit-2024/">eBPF Summit 2024 →</a></li>
          <li><a className="font-bold underline" href="/summit-2023/">eBPF Summit 2023 →</a></li>
          <li><a className="font-bold underline" href="/resources">Resources</a></li>
          <li><a className="font-bold underline" href={slackUrl} target="_blank" rel="noreferrer">Join the Slack →</a></li>
        </ul>
      </div>
    </section> */}
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
