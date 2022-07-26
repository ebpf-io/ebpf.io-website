import React from 'react';

import { TitleWithAnchor } from '../TitleWithAnchor';
import websiteIcon from './assets/website-icon.svg';
import githubIcon from './assets/github-icon.svg';
import mailingListIcon from './assets/mailing-list-icon.svg';
import gitTreesIcon from './assets/git-trees-icon.svg';
import ciIcon from  './assets/ci-icon.svg';
import patchesIcon from './assets/patches-icon.svg';
import docsIcon from './assets/docs-icon.svg';
import officeHoursIcon from './assets/office-hours-icon.svg';
import slackChannelIcon from './assets/slack-channel-icon.svg';
import cn from 'classnames';

const icons = {
  Website: websiteIcon,
  GitHub: githubIcon,
  'Mailing list': mailingListIcon,
  'Git trees': gitTreesIcon,
  CI: ciIcon,
  Patches: patchesIcon,
  Docs: docsIcon,
  'Office hours': officeHoursIcon,
  'Slack channel': slackChannelIcon,
}

export const ProjectCard = ({ name, logo, logoUrl, title, description, urls, majorUrls, emergingUrls, logoSize = 'md' }) => (
  <li className="project-box" key={name}>
    <div className="project-aside">
      <TitleWithAnchor
        headerClassName="project-major-title projects-common-title"
        headerTag="h3"
      >
        {name}
      </TitleWithAnchor>
     {logoUrl ? <a
        href={logoUrl}
        target="_blank"
        className={cn("project-logo", `project-logo-${logoSize}`)}
      >
        <img src={logo} />
      </a> : <div className={cn("project-logo", `project-logo-${logoSize}`)}>
        <img src={logo} />
      </div>}
      {title && <div className="project-minor-title">
        {title}
      </div>}
    </div>
    <div className="project-body">
     {(majorUrls || emergingUrls) && <div className='project-urls'>
       {majorUrls && <span>
          <span>Major:</span>{" "}
          {majorUrls.map(({label, url}, index) => (
            <a className='project-url' href={url} key={index} target="_blank">
              <b>{label}</b>
            </a>
          ))}
        </span>}
        {emergingUrls && <span>
        <span>Emerging:</span>{" "}
          {emergingUrls.map(({label, url}, index) => (
            <a className='project-url' href={url} key={index} target="_blank">
              <b>{label}</b>
            </a>
          ))}
        </span>}
      </div>}
      <div className='project-description' dangerouslySetInnerHTML={{__html: description}}></div>
      {urls && <div className="project-links-container">
        {urls.map(({label, url}, index) => (
          <a
            className="project-link"
            href={url}
            target="_blank"
            key={index}
          >
            <img src={icons[label]}/>
            <b>{label}</b>
          </a>
        ))}
      </div>}
    </div>
  </li>
);