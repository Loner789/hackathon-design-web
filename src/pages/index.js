/* eslint-disable no-undef */
import './index.scss';

const videoElement = document.querySelector('.video');

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
    video.appendChild(iframe);
  });

  linkVideo.removeAttribute('href');
};

setupVideo(videoElement);
