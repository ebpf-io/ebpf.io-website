import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

import AnchorHeading from 'components/shared/anchor-heading';
import slugifyCategory from 'utils/slugify-category';

import ProjectCard from '../project-card';

const ProjectsList = ({ className, titleTag: Tag, title, description, items }) => {
  const slug = slugifyCategory(title);
  const Heading = AnchorHeading(Tag);

  const [viewMode, setViewMode] = useState('grid');
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const largeScreen = window.innerWidth >= 1024;
    setIsLargeScreen(largeScreen);

    if (largeScreen) {
      setViewMode('grid');
    } else {
      setViewMode('card');
    }
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 50);

    const handleResize = () => {
      const isLarge = window.innerWidth >= 1024;
      setIsLargeScreen(isLarge);
      if (!isLarge) {
        setViewMode('card');
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleViewModeChange = (newMode) => {
    if (isLargeScreen) {
      setViewMode(newMode);
    }
  };

  return (
    <section className={clsx('projects safe-paddings', className)} id={slug}>
      <div className="container-sm">
        <div className="mx-auto max-w-[446px] text-center">
          <Heading className="heading-8xl inline-flex font-semibold leading-dense" id={slug}>
            {title}
          </Heading>
          {description && <p className="mt-3.5">{description}</p>}
        </div>

        <div
          className={clsx(
            'mt-8 flex justify-center transition-opacity duration-200',
            showContent && isLargeScreen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          )}
        >
          <div className="flex rounded-lg border border-gray-80 overflow-hidden">
            <button
              type="button"
              className={clsx(
                'px-6 py-2 text-sm font-medium transition-all duration-200',
                viewMode === 'grid'
                  ? 'bg-primary-yellow text-gray-900 shadow-sm'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-800'
              )}
              onClick={() => handleViewModeChange('grid')}
            >
              Show as Grid
            </button>
            <button
              type="button"
              className={clsx(
                'px-6 py-2 text-sm font-medium transition-all duration-200',
                viewMode === 'card'
                  ? 'bg-primary-yellow text-gray-900 shadow-sm'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-800'
              )}
              onClick={() => handleViewModeChange('card')}
            >
              Show as Card
            </button>
          </div>
        </div>
      </div>

      <div
        className={clsx(
          'transition-opacity duration-200',
          showContent ? 'opacity-100' : 'opacity-0'
        )}
      >
        {isLargeScreen && viewMode === 'grid' ? (
          <div className="container mt-12 md:mt-10">
            <div className="grid grid-cols-4 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {items.map((item, index) => (
                <ProjectCard key={index} {...item} viewMode="grid" />
              ))}
            </div>
          </div>
        ) : (
          <div className="container-sm">
            <ul
              className={clsx(
                'divide-y divide-dashed divide-gray-80 border-y border-dashed border-gray-80',
                isLargeScreen ? 'mt-12 md:mt-10' : 'mt-8'
              )}
            >
              {items.map((item, index) => (
                <ProjectCard key={index} {...item} viewMode="card" />
              ))}
            </ul>
          </div>
        )}
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
        PropTypes.shape({ label: PropTypes.string.isRequired, url: PropTypes.string.isRequired })
      ),
    })
  ).isRequired,
};

ProjectsList.defaultProps = { className: null, titleTag: 'h2', description: null };

export default ProjectsList;
