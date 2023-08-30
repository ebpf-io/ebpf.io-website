import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import AnchorHeading from 'components/shared/anchor-heading';
import slugifyCategory from 'utils/slugify-category';

import ProjectCard from '../project-card';

const ProjectsList = ({ className, titleTag: Tag, title, description, items }) => {
  const slug = slugifyCategory(title);
  const Heading = AnchorHeading(Tag);

  return (
    <section className={clsx('projects safe-paddings', className)} id={slug}>
      <div className="container-sm">
        <div className="mx-auto max-w-[446px] text-center">
          <Heading className="heading-8xl inline-flex font-semibold leading-dense" id={slug}>
            {title}
          </Heading>
          {description && <p className="mt-3.5">{description}</p>}
        </div>
        <ul className="mt-12 divide-y divide-dashed divide-gray-80 border-y border-dashed border-gray-80 md:mt-10">
          {items.map((item, index) => (
            <ProjectCard key={index} {...item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

ProjectsList.propTypes = {
  className: PropTypes.string,
  titleTag: PropTypes.oneOf(['h1', 'h2', 'h3']),
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      logoName: PropTypes.string,
      logoUrl: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string.isRequired,
      urls: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string.isRequired,
          url: PropTypes.string.isRequired,
        })
      ),
    })
  ).isRequired,
};

ProjectsList.defaultProps = {
  className: null,
  titleTag: 'h2',
  description: null,
};

export default ProjectsList;
