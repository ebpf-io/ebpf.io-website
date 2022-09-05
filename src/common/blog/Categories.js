import React from 'react';
import { Link } from 'gatsby';

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


const Categories = ({ categories }) => (
  <div className='categories-wrapper'>
    <h2 className='categories-heading'>Categories</h2>
    <ul className='categories-item-list'>
      {categories.map((category) => {
        const isCategoryAll = category === '*';
        const Icon = icons[category];
        return (
            <li className='categories-item' key={category}>
              <Link
                className='categories-button'
                activeClassName='active-category'
                to={blogFilterToSlug(category)}
              >
                <Icon className='categories-icon'/>
                <span>{isCategoryAll ? 'All posts' : category}</span>
              </Link>
            </li>
        );
      })}
    </ul>
  </div>
);


export default Categories;
