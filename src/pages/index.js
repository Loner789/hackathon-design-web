// IMPORTS:
import './index.css';
import Typed from 'typed.js';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SuccessStoryCard from '../components/SuccessStoryCard';
import SuccessStoryVideo from '../components/SuccessStoryVideo';
import Section from '../components/Section';
import PopupWithForm from '../components/PopupWithForm';
import FormValidator from '../components/FormValidator';
import PopupWithVideo from '../components/PopupWithVideo';
import {
  learningTitles,
  conditionsCards,
  successStoriesText,
  successStoriesVideo,
} from '../utils/initial-data';
import {
  scroller,
  faqBtn,
  vacancieNameBtn,
  vacancieEduItems,
  vacanciesDescriptionItems,
  vacancieEduItemDesign,
  vacancieEduItemProgramming,
  vacancieEduItemAnalitics,
  vacancieEduItemMarketing,
  vacancieEduItemManagement,
  vacancieProphItems,
  vacancieProphSensey,
  vacancieProphReviewer,
  vacancieSenseyGallaryProg,
  vacancieReviewerGallaryProg,
  vacancieSenseyGallaryAnalitics,
  vacancieReviewerGallaryAnalitics,
  vacanciesGallaries,
  vacanciesNoVac,
  vacanciesNotFound,
  vacanciesShareBtns,
  vacanciesPopupShare,
  vacanciesCopyBtn,
  vacanciesCopyLink,
  videoElement,
  cardLinePlaceFirstTop,
  cardLinePlaceFirstTopParent,
  cardLinePlaceSecondTop,
  cardLinePlaceSecondTopParent,
  cardLinePlaceSecondBottom,
  cardLinePlaceSecondBottomParent,
  popupSelector,
  formSelector,
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
} from '../utils/constants';

// FUNCTIONS:
// Learning section typing
// eslint-disable-next-line no-unused-vars
const typed = new Typed('.learning__title-span', {
  strings: learningTitles,
  typeSpeed: 40,
  backSpeed: 30,
  loop: true,
  backDelay: 1000,
});

// Creation of conditions-card element
function createConditionsCard(cardData) {
  const { title, image, text } = cardData;
  const cardElement = document
    .querySelector('#conditions-card')
    .content.querySelector('.conditions__slide')
    .cloneNode(true);
  const [firstPart, secondPart] = title.split(' ');

  cardElement.querySelector(
    '.conditions__card-title_side_left',
  ).textContent = firstPart;
  cardElement.querySelector(
    '.conditions__card-title_side_right',
  ).textContent = secondPart;
  cardElement.querySelector(
    '.conditions__card-image',
  ).style.backgroundImage = `url(${image})`;
  cardElement.querySelector('.conditions__card-text').textContent = text;

  return cardElement;
}

// Render function
function renderItems(item, block) {
  block.append(item);
}

// Inserting data from the initial arrays
function loadInitialData(data, createFunction, node) {
  data.forEach((item) => {
    const element = createFunction(item);
    renderItems(element, node);
  });
}

loadInitialData(conditionsCards, createConditionsCard, scroller);

// Conditions section scroller
gsap.registerPlugin(ScrollTrigger);

const cards = gsap.utils.toArray('.conditions__slide');

gsap.to(cards, {
  xPercent: -100 * (cards.length - 1),
  ease: 'none',
  scrollTrigger: {
    trigger: '.conditions',
    start: 'top top',
    pin: true,
    scrub: true,
    snap: 1 / (cards.length - 1),
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

// ------- faq -------
faqBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    const qblock = btn.closest('.faq__question-block');
    const faqAnswer = qblock.querySelector('.faq__question-text');

    btn.classList.toggle('faq__question-button_active');
    faqAnswer.classList.toggle('faq__question-text_active');
  });
});

const createSuccessStoryCard = (data) => {
  const сardsList = new Section(
    {
      items: data,
      renderer: (item) => {
        const elementCard = new SuccessStoryCard(
          item,
          '.success-story-text',
          '#template-success-story-text',
        );

        return elementCard.generateElementCard();
      },
    },
    '.success-stories__text-list',
  );
  сardsList.renderItems();

  return сardsList;
};

createSuccessStoryCard(successStoriesText);

const popupWithVideo = new PopupWithVideo('#video-popup');
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
          '.success-story-video',
          '#template-success-story-video',
          handleClickVideo,
        );
        return elementVideo.generateElementCard();
      },
    },
    '.success-stories__video-list',
  );
  videoList.renderItems();
  return videoList;
};

createSuccessStoryVideo(successStoriesVideo);

// ------- vacancies -------
vacancieNameBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    const vacItem = btn.closest('.vacancies__gallery-item');
    const vacDescription = vacItem.querySelector('.vacancies__description');
    if (vacDescription.classList.contains('vacancies__description_active')) {
      vacanciesDescriptionItems.forEach((item) => item.classList.remove('vacancies__description_active'));
    } else {
      vacanciesDescriptionItems.forEach((item) => item.classList.remove('vacancies__description_active'));
      vacDescription.classList.add('vacancies__description_active');
    }
  });
});

vacanciesShareBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    if (
      !vacanciesPopupShare.classList.contains('vacancies__popup-share_active')
    ) {
      vacanciesPopupShare.classList.add('vacancies__popup-share_active');
      document.addEventListener('mousedown', (evt) => {
        if (
          !evt.target.classList.contains('vacancies__popup-share')
           && !evt.target.classList.contains('vacancies__popup-list')
           && !evt.target.classList.contains('vacancies__popup-link-wrapper')
           && !evt.target.classList.contains('vacancies__popup-copy-icon')
           && !evt.target.classList.contains('vacancies__popup-link')
        ) {
          vacanciesPopupShare.classList.remove('vacancies__popup-share_active');
          vacanciesCopyBtn.classList.remove('vacancies__popup-copy-icon_done');
        }
      });
    } else {
      vacanciesPopupShare.classList.remove('vacancies__popup-share_active');
      vacanciesCopyBtn.classList.remove('vacancies__popup-copy-icon_done');
    }
  });
});

const activateVacanciesProphItem = (menuItems, menuItemElement) => {
  menuItems.forEach((item) => item.classList.remove('vacancies__proph-btn-menu_active'));
  vacanciesGallaries.forEach((item) => item.classList.remove('vacancies__gallery_active'));
  menuItemElement.classList.add('vacancies__proph-btn-menu_active');
};

const handleVacSenseyProphItemClick = (evt) => {
  activateVacanciesProphItem(vacancieProphItems, evt.target);
  if (
    vacancieEduItemProgramming.classList.contains('vacancies__btn-menu_active')
  ) {
    vacancieSenseyGallaryProg.classList.add('vacancies__gallery_active');
  } else {
    vacancieSenseyGallaryAnalitics.classList.add('vacancies__gallery_active');
  }
};

const handleVacReviewerProphItemClick = (evt) => {
  activateVacanciesProphItem(vacancieProphItems, evt.target);
  if (
    vacancieEduItemProgramming.classList.contains('vacancies__btn-menu_active')
  ) {
    vacancieReviewerGallaryProg.classList.add('vacancies__gallery_active');
  } else {
    vacancieReviewerGallaryAnalitics.classList.add('vacancies__gallery_active');
  }
};

const activateVacanciesEducationItem = (menuItems, menuItemElement) => {
  menuItems.forEach((item) => item.classList.remove('vacancies__btn-menu_active'));
  menuItemElement.classList.add('vacancies__btn-menu_active');
};

const handleDesignBtnClick = (evt) => {
  activateVacanciesEducationItem(vacancieEduItems, evt.target);
  vacancieProphItems.forEach((item) => (item.disabled = true));
  vacanciesGallaries.forEach((item) => item.classList.remove('vacancies__gallery_active'));
  vacancieProphItems.forEach((item) => item.classList.remove('vacancies__proph-btn-menu_active'));
  vacancieProphSensey.classList.add('vacancies__proph-btn-menu_active');
  vacanciesNoVac.classList.add('vacancies__novac-wrapper_active');
  vacanciesNotFound.classList.add('vacancies__gallery-wrapper_hide');
  vacanciesDescriptionItems.forEach((item) => item.classList.remove('vacancies__description_active'));
};

const handleProgrammingBtnClick = (evt) => {
  activateVacanciesEducationItem(vacancieEduItems, evt.target);
  vacancieProphItems.forEach((item) => (item.disabled = false));
  vacancieProphItems.forEach((item) => item.classList.remove('vacancies__proph-btn-menu_active'));
  vacanciesGallaries.forEach((item) => item.classList.remove('vacancies__gallery_active'));
  vacancieProphSensey.classList.add('vacancies__proph-btn-menu_active');
  vacancieSenseyGallaryProg.classList.add('vacancies__gallery_active');
  vacanciesNoVac.classList.remove('vacancies__novac-wrapper_active');
  vacanciesNotFound.classList.remove('vacancies__gallery-wrapper_hide');
  vacanciesDescriptionItems.forEach((item) => item.classList.remove('vacancies__description_active'));
};

const handleAnaliticsBtnClick = (evt) => {
  activateVacanciesEducationItem(vacancieEduItems, evt.target);
  vacancieProphItems.forEach((item) => (item.disabled = false));
  vacancieProphItems.forEach((item) => item.classList.remove('vacancies__proph-btn-menu_active'));
  vacanciesGallaries.forEach((item) => item.classList.remove('vacancies__gallery_active'));
  vacancieProphSensey.classList.add('vacancies__proph-btn-menu_active');
  vacancieSenseyGallaryAnalitics.classList.add('vacancies__gallery_active');
  vacanciesNoVac.classList.remove('vacancies__novac-wrapper_active');
  vacanciesNotFound.classList.remove('vacancies__gallery-wrapper_hide');
  vacanciesDescriptionItems.forEach((item) => item.classList.remove('vacancies__description_active'));
};

const handleMarketingBtnClick = (evt) => {
  activateVacanciesEducationItem(vacancieEduItems, evt.target);
  vacancieProphItems.forEach((item) => (item.disabled = true));
  vacanciesGallaries.forEach((item) => item.classList.remove('vacancies__gallery_active'));
  vacancieProphItems.forEach((item) => item.classList.remove('vacancies__proph-btn-menu_active'));
  vacancieProphSensey.classList.add('vacancies__proph-btn-menu_active');
  vacanciesNoVac.classList.add('vacancies__novac-wrapper_active');
  vacanciesNotFound.classList.add('vacancies__gallery-wrapper_hide');
  vacanciesDescriptionItems.forEach((item) => item.classList.remove('vacancies__description_active'));
};

const handleManagementBtnClick = (evt) => {
  activateVacanciesEducationItem(vacancieEduItems, evt.target);
  vacancieProphItems.forEach((item) => (item.disabled = true));
  vacanciesGallaries.forEach((item) => item.classList.remove('vacancies__gallery_active'));
  vacancieProphItems.forEach((item) => item.classList.remove('vacancies__proph-btn-menu_active'));
  vacancieProphSensey.classList.add('vacancies__proph-btn-menu_active');
  vacanciesNoVac.classList.add('vacancies__novac-wrapper_active');
  vacanciesNotFound.classList.add('vacancies__gallery-wrapper_hide');
  vacanciesDescriptionItems.forEach((item) => item.classList.remove('vacancies__description_active'));
};

const handleCopyShareBtnClick = () => {
  vacanciesCopyBtn.classList.add('vacancies__popup-copy-icon_done');
};

// EVENT LISTENERS:
// Animation of the advantage
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

// Vacancies listeners
vacancieEduItemDesign.addEventListener('click', handleDesignBtnClick);
vacancieEduItemProgramming.addEventListener('click', handleProgrammingBtnClick);
vacancieEduItemAnalitics.addEventListener('click', handleAnaliticsBtnClick);
vacancieEduItemMarketing.addEventListener('click', handleMarketingBtnClick);
vacancieEduItemManagement.addEventListener('click', handleManagementBtnClick);
vacancieProphSensey.addEventListener('click', handleVacSenseyProphItemClick);
vacancieProphReviewer.addEventListener('click', handleVacReviewerProphItemClick);
vacanciesCopyLink.addEventListener('click', handleCopyShareBtnClick);

/* button for the oppening popup */
const button = document.querySelector('.vacancies__notfound-vac-btn');

const popupWithForm = new PopupWithForm(popupSelector, submitHandlerForm, formSelector);
popupWithForm.setEventListeners();

/* to open popup */
button.addEventListener('click', () => {
  popupWithForm.open();
});

const FormInPopupValidator = new FormValidator(configFormValidator, '#form');
FormInPopupValidator.enableValidation();

function submitHandlerForm(data) {
  console.log(data);

  /* on successful submission */
  popupWithForm.showBlockSuccess();
};

const clientScreenWidth = () => document.documentElement.clientWidth;

positionList.forEach((el) => {
  const screenWidth = clientScreenWidth();

  if (screenWidth < 768) {
    el.addEventListener('click', (evt) => {
      // eslint-disable-next-line prefer-destructuring
      const target = evt.target;
      const cardPosition = target.parentElement.closest('.position')
        ? target.parentElement.closest('.position') : el;
      const borderElement = cardPosition.querySelector(dutiesBorderSelector);
      const title = cardPosition.querySelector(dutiesTitleSelector);
      const taskListElement = cardPosition.querySelector(dutiesTaskListSelector);
      const taskList = cardPosition.querySelectorAll(dutiesTaskSelector);

      if (cardPosition.closest(`.${dutiesTapClass}`)) {
        borderElement.classList.remove(dutiesBorderTapClass);
        title.classList.remove(dutiesTitleTapClass);
        cardPosition.classList.remove(dutiesTapClass);
        taskListElement.classList.remove(dutiesTaskListTapClass);
        taskList.forEach((el) => el.classList.remove(dutiesTaskTapClass));
      } else {
        borderElement.classList.add(dutiesBorderTapClass);
        title.classList.add(dutiesTitleTapClass);
        cardPosition.classList.add(dutiesTapClass);
        taskListElement.classList.add(dutiesTaskListTapClass);
        taskList.forEach((el) => el.classList.add(dutiesTaskTapClass));
      }
    });
  }
});
