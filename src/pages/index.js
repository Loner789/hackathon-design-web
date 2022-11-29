/* eslint-disable no-undef */
import './index.scss';

const videoElement = document.querySelector('.video');
const advantages = document.querySelector('.advantages');
const cardAdvantagesList = advantages.querySelectorAll('.card')

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

cardAdvantagesList.forEach((el) => {
  /* const classList = el.classList;

  console.log(classList) */

  el.addEventListener('mouseover', (evt) => {
    // eslint-disable-next-line prefer-destructuring
    const target = evt.target;
    const text = target.querySelector('.card__text');
    const description = target.querySelector('.card__description');

    //console.log(text)

    target.classList.add('card_hover-over');
    text.classList.add('card__text_hidden');
    description.classList.add('card__description_visible');



    //console.log(target)
  });

  el.addEventListener('mouseout', (evt) => {
    // eslint-disable-next-line prefer-destructuring
    const target = evt.target;
    const text = target.querySelector('.card__text');
    const description = target.querySelector('.card__description');

    //console.log(text)

    target.classList.remove('card_hover-over');
    target.classList.remove('card_hover-out');
    text.classList.remove('card__text_hidden');
    description.classList.remove('card__description_visible');



    //console.log(target)
  });
});
