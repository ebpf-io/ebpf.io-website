import cn from "classnames";
import React, { useCallback, useState } from 'react';
import { navigate } from 'gatsby';

import blogFilterToSlug from '../../utils/blog-filter-to-slug';

import AllPostsIcon from './assets/all.inline.svg';
import ReleaseIcon from './assets/release.inline.svg';
import UpdateIcon from './assets/update.inline.svg';
import HowToIcon from './assets/how-to.inline.svg';
import TechnologyIcon from  './assets/technology.inline.svg';
import CommunityIcon from  './assets/community.inline.svg';

const icons = {
  '*': AllPostsIcon,
  Release: ReleaseIcon,
  Update: UpdateIcon,
  'How-To': HowToIcon,
  Technology: TechnologyIcon,
  Community: CommunityIcon,
}


const Categories = ({ categories }) => {

  const [currentCategory, setCurrentCategory] = useState('*');

  const handleCategoryClick = useCallback(
    (category) => (event) => {
      event.preventDefault();
      const href = blogFilterToSlug(category);
      navigate(href, {
        state: { preventScroll: true },
      });
      setCurrentCategory(category)
    },
    []
  );

  return (
    <div className='categories-wrapper'>
      <h2 className='categories-heading'>Categories</h2>
      <ul className='categories-item-list'>
        {categories.map((category) => {
          const isActiveElement = currentCategory === category;
          const isCategoryAll = category === '*';
          const Icon = icons[category];
          return (
              <li className='categories-item' key={category}>
                <button
                  className={cn('categories-button', isActiveElement && 'active-category')}
                  onClick={handleCategoryClick(category)}
                >
                  <Icon className={cn('categories-icon', isActiveElement && 'active-category')}/>
                  <span>{isCategoryAll ? 'All posts' : category}</span>
                </button>
              </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
