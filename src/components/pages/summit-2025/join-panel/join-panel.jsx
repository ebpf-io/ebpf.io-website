import PropTypes from 'prop-types';
import React from 'react';

import Button from 'components/shared/button';
import GradientPanel from 'components/shared/gradient-panel/gradient-panel';
import DevPostIcon from 'icons/devpost.inline.svg';
import SlackIcon from 'icons/slack.inline.svg';

const JoinPanel = ({ devpostUrl, slackUrl }) => (
  <GradientPanel
    title="Join the Hackathon"
    subtitle="Jump in now — pick a track, build in the open, and ship your submission."
  >
    <div className="grid grid-cols-2 gap-10 md:grid-cols-1 md:gap-6">
      <ol className="space-y-4">
        <li className="flex items-start gap-4">
          <span className="mt-1 inline-flex h-8 w-8 flex-none items-center justify-center rounded-full bg-black text-white font-bold">
            1
          </span>
          <p className="text-lg">
            Sign up on{' '}
            <a className="font-bold underline" href={devpostUrl} target="_blank" rel="noreferrer">
              DevPost
            </a>
          </p>
        </li>
        <li className="flex items-start gap-4">
          <span className="mt-1 inline-flex h-8 w-8 flex-none items-center justify-center rounded-full bg-black text-white font-bold">
            2
          </span>
          <p className="text-lg">Choose your track and start building</p>
        </li>
        <li className="flex items-start gap-4">
          <span className="mt-1 inline-flex h-8 w-8 flex-none items-center justify-center rounded-full bg-black text-white font-bold">
            3
          </span>
          <p className="text-lg">
            Submit your project by <strong>November 30, 2025</strong>
          </p>
        </li>
        <li className="flex items-start gap-4">
          <span className="mt-1 inline-flex h-8 w-8 flex-none items-center justify-center rounded-full bg-black text-white font-bold">
            4
          </span>
          <p className="text-lg">
            Join Slack <code>#ebpf-summit</code> for help or team-matching
          </p>
        </li>
      </ol>

      <div className="flex flex-col items-center justify-center gap-4 md:mt-2">
        <Button
          className="flex items-center gap-3 rounded-lg px-7 py-4 text-base font-extrabold"
          theme="orange"
          to={devpostUrl}
          target="_blank"
        >
          <DevPostIcon className="h-5 w-5" />
          Join on DevPost
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
        <p className="mt-1 text-center text-sm text-gray-700">
          Workshops and office hours available throughout the event.
        </p>
      </div>
    </div>
  </GradientPanel>
);

JoinPanel.propTypes = {
  devpostUrl: PropTypes.string.isRequired,
  slackUrl: PropTypes.string.isRequired,
};

export default JoinPanel;
