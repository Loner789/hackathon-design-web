/* eslint-disable no-undef */
import './index.scss';

const videoElement = document.querySelector('.video');
const cardLinePlaceFirstTop = document.querySelector('.card__line_place__first-top');
const cardLinePlaceFirstTopParent = cardLinePlaceFirstTop.parentNode;
const cardLinePlaceSecondTop = document.querySelector('.card__line_place__second-top');
const cardLinePlaceSecondTopParent = cardLinePlaceSecondTop.parentNode;
const cardLinePlaceSecondBottom = document.querySelector('.card__line_place__second-bottom');
const cardLinePlaceSecondBottomParent = cardLinePlaceSecondBottom.parentNode;

const parseURL = (link) => {
  const regexp = /https:\/\/www\.youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/i;
  const url = link.href;
  const match = url.match(regexp);

  return match[1];
};

function generateURL(id) {
  const query = '?rel=0&showinfo=0&autoplay=1';

  return `https://www.youtube.com/embed/${id}${query}`;
};

const createIframe = (id) => {
  const iframe = document.createElement('iframe');

  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('src', generateURL(id));
  iframe.classList.add('video__iframe');

  return iframe;
};

const setupVideo = (video) => {
  const linkVideo = video.querySelector('.video__link');
  const button = video.querySelector('.video-button');
  const id = parseURL(linkVideo);

  video.addEventListener('click', () => {
    const iframe = createIframe(id);

    linkVideo.remove();
    button.remove();
    video.innerHTML = '';
    video.appendChild(iframe);
  });

  linkVideo.removeAttribute('href');
};

setupVideo(videoElement);

/* animation of the advantage */
cardLinePlaceFirstTopParent.addEventListener('mousemove', () => {
  cardLinePlaceFirstTop.classList.add('card__line_hovered');
});
cardLinePlaceFirstTopParent.addEventListener('mouseout', () => {
  cardLinePlaceFirstTop.classList.remove('card__line_hovered');
});

cardLinePlaceSecondTopParent.addEventListener('mousemove', () => {
  cardLinePlaceSecondTop.classList.add('card__line_hovered');
});
cardLinePlaceSecondTopParent.addEventListener('mouseout', () => {
  cardLinePlaceSecondTop.classList.remove('card__line_hovered');
});

cardLinePlaceSecondBottomParent.addEventListener('mousemove', () => {
  cardLinePlaceSecondBottom.classList.add('card__line_hovered');
});
cardLinePlaceSecondBottomParent.addEventListener('mouseout', () => {
  cardLinePlaceSecondBottom.classList.remove('card__line_hovered');
});
