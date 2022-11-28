import './index.css';
import Typed from 'typed.js';
import { learningSubtitles } from '../utils/initial-data';

// Learning section typing
// eslint-disable-next-line no-unused-vars
const typed = new Typed('.learning__title-span', {
  strings: learningSubtitles,
  typeSpeed: 80,
  backSpeed: 40,
  loop: true,
  backDelay: 1000,
});

// Conditions section slider
(() => {
  const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return rect.top <= 0 && rect.bottom > document.documentElement.clientHeight;
  };

  const wheelHandler = (evt) => {
    const containerInViewPort = Array.from(document.querySelectorAll('.conditions__container')).filter((container) => isElementInViewport(container))[0];

    if (!containerInViewPort) {
      return;
    }

    const isPlaceHolderBelowTop = containerInViewPort.offsetTop
    < document.documentElement.scrollTop;
    const isPlaceHolderBelowBottom = containerInViewPort.offsetTop
    + containerInViewPort.offsetHeight > document.documentElement.scrollTop;
    const canScrollHorizontally = isPlaceHolderBelowTop && isPlaceHolderBelowBottom;

    if (canScrollHorizontally) containerInViewPort.querySelector('.conditions__slider').scrollLeft += evt.deltaY;
  };

  const bindEvents = () => {
    window.addEventListener('wheel', wheelHandler);
  };

  const setStickyContainersSize = () => {
    document.querySelectorAll('.conditions__container').forEach((container) => {
      const stikyContainerHeight = container.querySelector('.conditions__slider').scrollWidth;
      container.setAttribute('style', `height: ${stikyContainerHeight}px`);
    });
  };

  const init = () => {
    setStickyContainersSize();
    bindEvents();
  };

  init();
})();
