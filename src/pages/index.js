// IMPORTS:
import './index.css';
import Typed from 'typed.js';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SuccessStoryCard from '../components/SuccessStoryCard';
import SuccessStoryVideo from '../components/SuccessStoryVideo';
import Section from '../components/Section';
import FormValidator from '../components/FormValidator';
import PopupWithVideo from '../components/PopupWithVideo';
import {
  renderElementsToDOM,
  generateMenu,
  generateFaq,
  popupWithForm,
} from '../utils/utils';
import {
  learningTitles,
  conditionsCards,
  successStoriesText,
  successStoriesVideo,
  faqData,
  vacanciesProphData,
} from '../utils/initial-data';
import {
  faqContainer,
  vacanciesEduMenu,
  notFoundVacBtn,
  videoElement,
  cardLinePlaceFirstTop,
  cardLinePlaceFirstTopParent,
  cardLinePlaceSecondTop,
  cardLinePlaceSecondTopParent,
  cardLinePlaceSecondBottom,
  cardLinePlaceSecondBottomParent,
  configFormValidator,
  dutiesBorderTapClass,
  dutiesTitleTapClass,
  dutiesTapClass,
  dutiesTaskListSelector,
  positionList,
  dutiesTaskListTapClass,
  dutiesBorderSelector,
  dutiesTitleSelector,
  dutiesTaskTapClass,
  dutiesTaskSelector,
  advantageList,
  advantagesCardTapClass,
  advantageCardMobileVisebleClass,
  advantagesRotateSelector,
  advantagesCardMobileSelector,
  advantageRotateTapClass,
  advantageCardHidden,
  positionSelector,
  cardLineHoveredClass,
  successStoryTextSelector,
  successStoryTextTemplateId,
  successStoriesTextListSelector,
  videoPopupId,
  successStoryVideoSelector,
  successStoryVideoTemplateId,
  successStoriesVideoListSelector,
} from '../utils/constants';

// FUNCTIONS:

// --------------------- Common Functions ---------------------

function createSection(dataArray, creationFunction, containerSelector) {
  const сardsList = new Section(
    {
      items: dataArray,
      renderer: creationFunction,
    },
    containerSelector,
  );
  сardsList.renderItems();

  return сardsList;
}

// --------------------- Learning Section Functions ---------------------

// Learning section typing text message
// eslint-disable-next-line no-unused-vars
const typed = new Typed('.learning__title-span', {
  strings: learningTitles,
  typeSpeed: 40,
  backSpeed: 30,
  loop: true,
  backDelay: 1000,
});

// --------------------- Conditions Section Functions ---------------------

// Creation of conditions-card element
function createConditionsCard(cardData) {
  const { title, image, text } = cardData;
  const cardElement = document
    .querySelector('#conditions-card')
    .content.querySelector('.conditions__slide')
    .cloneNode(true);
  const [firstPart, ...rest] = title.split(' ');

  cardElement.querySelector('.conditions__card-title_side_left').textContent = firstPart;
  cardElement.querySelector('.conditions__card-title_side_right').textContent = rest.join(' ');
  cardElement.querySelector(
    '.conditions__card-image',
  ).style.backgroundImage = `url(${image})`;
  cardElement.querySelector('.conditions__card-text').textContent = text;

  return cardElement;
}

createSection(conditionsCards, createConditionsCard, '.conditions__slider');

// Conditions section scroller
gsap.registerPlugin(ScrollTrigger);

const cards = gsap.utils.toArray('.conditions__slide');

gsap.to(cards, {
  xPercent: -100 * (cards.length - 2),
  ease: 'none',
  scrollTrigger: {
    trigger: '.conditions',
    start: 'top top',
    pin: true,
    scrub: true,
    snap: false,
    // eslint-disable-next-line prefer-template
    end: () => '+=' + document.querySelector('.conditions__slider').offsetWidth,
  },
});

// Regular expression for youtube url-adress
const parseURL = (link) => {
  const regexp = /https:\/\/www\.youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/i;
  const url = link.href;
  const match = url.match(regexp);

  return match[1];
};

// Generate URL by id
function generateURL(id) {
  const query = '?rel=0&showinfo=0&autoplay=1';

  return `https://www.youtube.com/embed/${id}${query}`;
}

// Create iframe by id
const createIframe = (id) => {
  const iframe = document.createElement('iframe');

  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('src', generateURL(id));
  iframe.classList.add('video__iframe');

  return iframe;
};

// Insert video by click on icon
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

// -------- faq --------
renderElementsToDOM(faqData, faqContainer, generateFaq);

// ------- success stories -------
const createSuccessStoryCard = (data) => {
  const сardsList = new Section(
    {
      items: data,
      renderer: (item) => {
        const elementCard = new SuccessStoryCard(
          item,
          successStoryTextSelector,
          successStoryTextTemplateId,
          data,
        );

        return elementCard.generateElementCard();
      },
    },
    successStoriesTextListSelector,
  );
  сardsList.renderItems();

  return сardsList;
};

createSuccessStoryCard(successStoriesText);

const popupWithVideo = new PopupWithVideo(videoPopupId);
popupWithVideo.setEventListeners();

const createSuccessStoryVideo = (data) => {
  const videoList = new Section(
    {
      items: data,
      renderer: (item) => {
        const handleClickVideo = () => {
          popupWithVideo.open(item);
        };
        const elementVideo = new SuccessStoryVideo(
          item,
          successStoryVideoSelector,
          successStoryVideoTemplateId,
          handleClickVideo,
        );
        return elementVideo.generateElementCard();
      },
    },
    successStoriesVideoListSelector,
  );
  videoList.renderItems();
  return videoList;
};

createSuccessStoryVideo(successStoriesVideo);

// ------- vacancies -------
renderElementsToDOM(vacanciesProphData, vacanciesEduMenu, generateMenu);

// EVENT LISTENERS:
// Animation of the advantage
cardLinePlaceFirstTopParent.addEventListener('mousemove', () => {
  cardLinePlaceFirstTop.classList.add(cardLineHoveredClass);
});
cardLinePlaceFirstTopParent.addEventListener('mouseout', () => {
  cardLinePlaceFirstTop.classList.remove(cardLineHoveredClass);
});

cardLinePlaceSecondTopParent.addEventListener('mousemove', () => {
  cardLinePlaceSecondTop.classList.add(cardLineHoveredClass);
});
cardLinePlaceSecondTopParent.addEventListener('mouseout', () => {
  cardLinePlaceSecondTop.classList.remove(cardLineHoveredClass);
});

cardLinePlaceSecondBottomParent.addEventListener('mousemove', () => {
  cardLinePlaceSecondBottom.classList.add(cardLineHoveredClass);
});
cardLinePlaceSecondBottomParent.addEventListener('mouseout', () => {
  cardLinePlaceSecondBottom.classList.remove(cardLineHoveredClass);
});

popupWithForm.setEventListeners();

/* to open popup */
notFoundVacBtn.addEventListener('click', () => {
  popupWithForm.open();
});

const FormInPopupValidator = new FormValidator(configFormValidator, '#form');
FormInPopupValidator.enableValidation();

// -------- duties --------
positionList.forEach((el) => {
  if (window.innerWidth < 768) {
    el.addEventListener('click', (evt) => {
      // eslint-disable-next-line prefer-destructuring
      const target = evt.target;
      const cardPosition = target.parentElement.closest(positionSelector)
        ? target.parentElement.closest(positionSelector) : el;
      const borderElement = cardPosition.querySelector(dutiesBorderSelector);
      const title = cardPosition.querySelector(dutiesTitleSelector);
      const taskListElement = cardPosition.querySelector(
        dutiesTaskListSelector,
      );
      const taskList = cardPosition.querySelectorAll(dutiesTaskSelector);

      if (cardPosition.closest(`.${dutiesTapClass}`)) {
        borderElement.classList.remove(dutiesBorderTapClass);
        title.classList.remove(dutiesTitleTapClass);
        cardPosition.classList.remove(dutiesTapClass);
        taskListElement.classList.remove(dutiesTaskListTapClass);
        taskList.forEach((element) => element.classList.remove(dutiesTaskTapClass));
      } else {
        borderElement.classList.add(dutiesBorderTapClass);
        title.classList.add(dutiesTitleTapClass);
        cardPosition.classList.add(dutiesTapClass);
        taskListElement.classList.add(dutiesTaskListTapClass);
        taskList.forEach((element) => element.classList.add(dutiesTaskTapClass));
      }
    });
  }
});

// -------- advantages --------
advantageList.forEach((card) => {
  card.addEventListener('click', (evt) => {
    if (window.innerWidth < 970 && window.innerWidth >= 600) {
      // eslint-disable-next-line prefer-destructuring
      const target = evt.target;
      const rotate = target.querySelector(advantagesRotateSelector);
      const cardMobile = target.querySelector(advantagesCardMobileSelector);
      const id = target.getAttribute('id');

      advantageList.forEach((el) => {
        if (id !== el.getAttribute('id')) {
          const rotateEl = el.querySelector(advantagesRotateSelector);
          const cardMobileEl = el.querySelector(advantagesCardMobileSelector);
          rotateEl.classList.remove(advantageRotateTapClass);
          cardMobileEl.classList.remove(advantageCardMobileVisebleClass);

          el.classList.remove(advantagesCardTapClass);
        }
      });

      if (target.closest(`.${advantagesCardTapClass}`)) {
        target.classList.remove(advantagesCardTapClass);
        rotate.classList.remove(advantageRotateTapClass);
        cardMobile.classList.remove(advantageCardMobileVisebleClass);
      } else {
        target.classList.add(advantagesCardTapClass);
        rotate.classList.add(advantageRotateTapClass);
        cardMobile.classList.add(advantageCardMobileVisebleClass);
      }
    }

    if (window.innerWidth < 600) {
      // eslint-disable-next-line prefer-destructuring
      const target = evt.target;
      const rotate = target.querySelector(advantagesRotateSelector);
      const cardMobile = target.querySelector(advantagesCardMobileSelector);
      const id = target.getAttribute('id');

      if (id < 4) {
        advantageList.forEach((el) => {
          if (el.getAttribute('id') < 4 && id !== el.getAttribute('id')) {
            el.classList.add(advantageCardHidden);
          }
        });
      }

      if (id > 3) {
        advantageList.forEach((el) => {
          if (el.getAttribute('id') > 3 && id !== el.getAttribute('id')) {
            el.classList.add(advantageCardHidden);
          }
        });
      }

      if (target.closest(`.${advantagesCardTapClass}`)) {
        target.classList.remove(advantagesCardTapClass);
        rotate.classList.remove(advantageRotateTapClass);
        cardMobile.classList.remove(advantageCardMobileVisebleClass);
        advantageList.forEach((el) => el.classList.remove(advantageCardHidden));
      } else {
        target.classList.add(advantagesCardTapClass);
        rotate.classList.add(advantageRotateTapClass);
        cardMobile.classList.add(advantageCardMobileVisebleClass);
      }
    }
  });
});
