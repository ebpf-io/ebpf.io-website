import { useCallback, useEffect, useState } from 'react';
import useDebounce from 'react-use/lib/useDebounce';
import useWindowSize from 'react-use/lib/useWindowSize';

import debounce from 'utils/debounce';

const TABLET_WIDTH = 1024;

const getAnchors = (items) => {
  const anchors = [];
  items.forEach(({ url, items }) => {
    anchors.push(document.querySelector(url));
    if (items) {
      anchors.push(...getAnchors(items));
    }
  });

  return anchors;
};

const useTOC = (items) => {
  const [activeAnchor, setActiveAnchor] = useState(null);
  const [debouncedActiveAnchor, setDebouncedActiveAnchor] = useState(null);

  const [isTocVisible, setIsTocVisible] = useState(true); // for mobile only
  const { width } = useWindowSize();
  const isTabletWidth = width < TABLET_WIDTH;

  const handleScroll = useCallback(() => {
    const anchors = getAnchors(items);
    const activeAnchor = anchors.find((anchor) => {
      const { top } = anchor.getBoundingClientRect();
      return top >= 0 && top <= window.innerHeight;
    });
    if (activeAnchor) {
      setActiveAnchor(`#${activeAnchor.id}`);
    }
  }, [items]);

  useEffect(() => {
    const cb = debounce(handleScroll, 250);
    window.addEventListener('scroll', cb);
    return () => {
      window.removeEventListener('scroll', cb);
    };
  }, [handleScroll]);

  useDebounce(() => setDebouncedActiveAnchor(activeAnchor), 10, [activeAnchor]);

  const handleAnchorClick = (e, anchor) => {
    e.preventDefault();
    document.querySelector(anchor).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    // changing hash without default jumps to anchor
    // eslint-disable-next-line no-restricted-globals
    if (history.pushState) {
      // eslint-disable-next-line no-restricted-globals
      history.pushState(false, false, anchor);
    } else {
      // old browser support
      window.location.hash = anchor;
    }
  };

  const handleTocClick = () => {
    setIsTocVisible((prev) => !prev);
  };

  return {
    handleAnchorClick,
    debouncedActiveAnchor,
    handleTocClick,
    isTocVisible,
    isTabletWidth,
  };
};

export default useTOC;
