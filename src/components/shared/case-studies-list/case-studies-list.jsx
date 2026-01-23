import clsx from 'clsx';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import PropTypes from 'prop-types';
import React from 'react';

import Link from 'components/shared/link';

import Akita from './logos/akita.inline.svg';
import Akto from './logos/akto.inline.svg';
import Alibaba from './logos/alibaba.inline.svg';
import Android from './logos/android.inline.svg';
import AntGroup from './logos/ant-group.inline.svg';
import Apple from './logos/apple.inline.svg';
import Aqua from './logos/aqua.inline.svg';
import ArvanCloud from './logos/arvancloud.inline.svg';
import Attribute from './logos/attribute.inline.svg';
import AurvaLogo from './logos/aurva.inline.svg';
import Bell from './logos/bell.inline.svg';
import Bytedance from './logos/byte-dance.inline.svg';
import Canopus from './logos/canopus.inline.svg';
import CapitalOne from './logos/capital-one.inline.svg';
import Cloudflare from './logos/cloudflare.inline.svg';
import CoreTech from './logos/coretech.inline.svg';
import Cruise from './logos/cruise.inline.svg';
import Cycode from './logos/cycode.inline.svg';
import Datadog from './logos/datadog.inline.svg';
import DigitalOcean from './logos/digital-ocean.inline.svg';
import DoorDash from './logos/doordash.inline.svg';
import Exein from './logos/exein.inline.svg';
import F5 from './logos/f5.inline.svg';
import FlowSecurity from './logos/flowsecurity.inline.svg';
import Global from './logos/global.inline.svg';
import Google from './logos/google.inline.svg';
import Groundcover from './logos/groundcover.inline.svg';
import Helios from './logos/helios.inline.svg';
import Ikea from './logos/ikea.inline.svg';
import Isovalent from './logos/isovalent.inline.svg';
import Kodem from './logos/kodemsec.inline.svg';
import Levo from './logos/levo.inline.svg';
import LineCoporation from './logos/line-corp.inline.svg';
import LinkedIn from './logos/linkedin.inline.svg';
import Meta from './logos/meta.inline.svg';
import Metoro from './logos/metoro.inline.svg';
import Microsoft from './logos/microsoft.inline.svg';
import Netflix from './logos/netflix.inline.svg';
import NYT from './logos/nyt.inline.svg';
import Odigos from './logos/odigos.inline.svg';
import Oligo from './logos/oligosecurity.inline.svg';
import Palantir from './logos/palantir.inline.svg';
import PolarSignals from './logos/polarsignals.inline.svg';
import ProtectAI from './logos/protectai.inline.svg';
import Qpoint from './logos/qpoint.inline.svg';
import RADSecurity from './logos/rad-security.inline.svg';
import RakutenLogo from './logos/rakuten.inline.svg';
import Redhat from './logos/redhat.inline.svg';
import Samsung from './logos/samsung.inline.svg';
import SentinelOne from './logos/sentinelone.inline.svg';
import Seznam from './logos/seznam.inline.svg';
import Shopify from './logos/shopify.inline.svg';
import Sky from './logos/sky.inline.svg';
import Sysdig from './logos/sysdig.inline.svg';
import Threatx from './logos/threatX.inline.svg';
import Traceable from './logos/traceable.inline.svg';
import Trip from './logos/trip.inline.svg';
import Upwind from './logos/upwind.inline.svg';
import Walmart from './logos/walmart.inline.svg';
import Wikimedia from './logos/wikimedia.inline.svg';
import Wildlife from './logos/wildlife.inline.svg';
import Wiz from './logos/wiz.inline.svg';
import Yahoo from './logos/yahoo.inline.svg';

const logos = {
  akita: Akita,
  akto: Akto,
  alibaba: Alibaba,
  android: Android,
  'ant group': AntGroup,
  apple: Apple,
  'aqua security': Aqua,
  arvancloud: ArvanCloud,
  attribute: Attribute,
  aurva: AurvaLogo,
  bell: Bell,
  bytedance: Bytedance,
  canopus: Canopus,
  'capital one': CapitalOne,
  cloudflare: Cloudflare,
  'core tech': CoreTech,
  cruise: Cruise,
  cycode: Cycode,
  datadog: Datadog,
  'digital ocean': DigitalOcean,
  doordash: DoorDash,
  exein: Exein,
  f5: F5,
  flowsecurity: FlowSecurity,
  google: Google,
  groundcover: Groundcover,
  helios: Helios,
  ikea: Ikea,
  isovalent: Isovalent,
  kodem: Kodem,
  levo: Levo,
  'line coporation': LineCoporation,
  linkedin: LinkedIn,
  meta: Meta,
  metoro: Metoro,
  microsoft: Microsoft,
  netflix: Netflix,
  'the new york times': NYT,
  odigos: Odigos,
  'oligo security': Oligo,
  palantir: Palantir,
  'polar signals': PolarSignals,
  protectai: ProtectAI,
  qpoint: Qpoint,
  'rad security': RADSecurity,
  'red hat': Redhat,
  's&p global': Global,
  samsung: Samsung,
  sentinelone: SentinelOne,
  seznam: Seznam,
  shopify: Shopify,
  sky: Sky,
  sysdig: Sysdig,
  threatx: Threatx,
  traceable: Traceable,
  'trip.com': Trip,
  'upwind security': Upwind,
  walmart: Walmart,
  wikimedia: Wikimedia,
  'wildlife studios': Wildlife,
  wiz: Wiz,
  yahoo: Yahoo,
  'rakuten mobile': RakutenLogo,
};

const CaseStudiesList = ({ className, items, linkUrl, linkText }) => {
  const { t } = useTranslation();

  return (
    <>
      <ul className={clsx('grid-gap grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1', className)}>
        {items.map(({ title, description, links }, index) => {
          const Logo = logos[title.toLowerCase()];

          return (
            <li
              className="flex flex-col self-stretch rounded-lg border border-gray-90 bg-white p-8"
              key={index}
            >
              <div className="max-w-full">
                <span className="sr-only">{t(title)}</span>
                {Logo && <Logo className="h-10 w-auto max-w-full md:h-9" />}
              </div>

              <p
                className="mb-8 mt-6 text-lg leading-normal lg:mb-5 lg:text-base [&_strong]:font-bold"
                dangerouslySetInnerHTML={{ __html: t(description) }}
              />
              <ul className="mt-auto flex flex-wrap gap-x-4 gap-y-4 border-t border-dashed border-gray-90 pt-7 sm:pt-6">
                {links.map(({ text, to }, index) => (
                  <li
                    className="relative text-sm font-semibold uppercase leading-none tracking-wider before:absolute before:-right-2.5 before:top-1/2 before:block before:h-1 before:w-1 before:-translate-y-1/2 before:rounded-full before:bg-gray-90 last:before:hidden lg:text-[13px]"
                    key={index}
                  >
                    <Link theme="black" target="_blank" rel="noreferrer noopener" to={to}>
                      {t(text)}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
      {linkText && linkUrl && (
        <Link
          className="mt-10 lg:mt-8 sm:mt-10"
          theme="black-primary-yellow"
          size="lg"
          to={linkUrl}
        >
          {linkText}
        </Link>
      )}
    </>
  );
};

CaseStudiesList.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      logo: PropTypes.func,
      description: PropTypes.string,
      links: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string,
          to: PropTypes.string,
        })
      ),
    })
  ).isRequired,
  linkUrl: PropTypes.string,
  linkText: PropTypes.string,
};

CaseStudiesList.defaultProps = {
  className: null,
  linkText: null,
  linkUrl: null,
};

export default CaseStudiesList;
