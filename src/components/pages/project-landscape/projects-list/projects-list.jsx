import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { useState, useEffect, useCallback } from 'react';

import AnchorHeading from 'components/shared/anchor-heading';
import slugifyCategory from 'utils/slugify-category';

import ProjectCard from '../project-card';

const createViewModeManager = () => {
  let viewMode = 'grid';
  const listeners = new Set();

  const subscribe = (callback) => {
    listeners.add(callback);

    return () => {
      listeners.delete(callback);
    };
  };

  const setViewMode = (newMode) => {
    if (viewMode === newMode) return;

    viewMode = newMode;

    listeners.forEach((listener) => {
      try {
        listener(newMode);
      } catch (error) {
        console.error('Error in view mode listener:', error);
      }
    });
  };

  const getCurrentViewMode = () => viewMode;

  return {
    subscribe,
    setViewMode,
    getCurrentViewMode,
  };
};

const viewModeManager = createViewModeManager();

if (typeof window !== 'undefined') {
  window.getGlobalViewMode = () => viewModeManager.getCurrentViewMode();
  window.setGlobalViewMode = (mode) => viewModeManager.setViewMode(mode);
}

const ProjectsList = ({ className, titleTag: Tag, title, description, items }) => {
  const slug = slugifyCategory(title);
  const Heading = AnchorHeading(Tag);

  const [viewMode, setViewMode] = useState(() =>
    typeof window !== 'undefined' ? viewModeManager.getCurrentViewMode() : 'grid'
  );
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const handleGlobalViewModeChange = useCallback((newMode) => {
    if (window.innerWidth >= 1024) {
      setViewMode(newMode);
    }
  }, []);

  useEffect(() => {
    const updateScreenSize = () => {
      const isLarge = window.innerWidth >= 1024;
      setIsLargeScreen(isLarge);

      if (isLarge) {
        setViewMode(viewModeManager.getCurrentViewMode());
      } else {
        setViewMode('card');
      }
    };

    updateScreenSize();

    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 50);

    const unsubscribe = viewModeManager.subscribe(handleGlobalViewModeChange);

    window.addEventListener('resize', updateScreenSize);

    return () => {
      clearTimeout(contentTimer);
      window.removeEventListener('resize', updateScreenSize);
      unsubscribe();
    };
  }, [handleGlobalViewModeChange]);

  const handleViewModeChange = useCallback(
    (newMode) => {
      if (isLargeScreen) {
        viewModeManager.setViewMode(newMode);
        console.log('View mode changed globally to:', newMode);
      }
    },
    [isLargeScreen]
  );

  return (
    <section className={clsx('projects safe-paddings', className)} id={slug}>
      <div className="container-sm">
        <div className="mx-auto max-w-[446px] text-center">
          <Heading className="heading-8xl inline-flex font-semibold leading-dense" id={slug}>
            {title}
          </Heading>
          {description && <p className="mt-3.5">{description}</p>}
        </div>

        {/* View mode toggle - only show on large screens */}
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
              disabled={!isLargeScreen}
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
              disabled={!isLargeScreen}
              onClick={() => handleViewModeChange('card')}
            >
              Show as Card
            </button>
          </div>
        </div>
      </div>

      {/* Projects content */}
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
