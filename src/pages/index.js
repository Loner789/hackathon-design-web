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
  faqAnswers,
  faqQuestions,
  vacancieNameBtn,
  vacancieEduItems,
  vacanciesMenuItems,
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
  vacGalleryArrows,
  vacanciesPopupShareEmptyCode,
  vacanciesPopupShareFullCode,
  vacanciesBtnMenuArrows,
  vacanciesEduMenu,
  vacanciesSendBtns,
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
  advantageList,
  advantagesCardTapClass,
  advantageCardMobileVisebleClass,
  advantagesRotateSelector,
  advantagesCardMobileSelector,
  advantageRotateTapClass,
  advantageCardHidden,
  positionSelector,
  formId,
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
  const [firstPart, ...rest] = title.split(' ');

  cardElement.querySelector(
    '.conditions__card-title_side_left',
  ).textContent = firstPart;
  cardElement.querySelector(
    '.conditions__card-title_side_right',
  ).textContent = rest.join(' ');
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
  xPercent: -100 * (cards.length - 2),
  ease: 'none',
  scrollTrigger: {
    trigger: '.conditions',
    start: 'top top',
    pin: true,
    scrub: true,
    snap: 1 / (cards.length - 1),
    // eslint-disable-next-line prefer-template
    end: () => '+=' + (document.querySelector('.conditions__slider').offsetWidth),
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
faqBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    const qblock = btn.closest('.faq__question-block');
    const faqAnswer = qblock.querySelector('.faq__question-text');
    const faqCloseBtn = qblock.querySelector('.faq__question-button');

    if (faqCloseBtn.classList.contains('faq__question-button_active')) {
      faqAnswers.forEach((item) => item.classList.remove('faq__question-text_active'));
      faqBtn.forEach((item) => item.classList.remove('faq__question-button_active'));
    } else {
      faqAnswers.forEach((item) => item.classList.remove('faq__question-text_active'));
      faqBtn.forEach((item) => item.classList.remove('faq__question-button_active'));
      faqAnswer.classList.add('faq__question-text_active');
      faqCloseBtn.classList.add('faq__question-button_active');
    }
  });
});

faqQuestions.forEach((btn) => {
  btn.addEventListener('click', () => {
    const qblock = btn.closest('.faq__question-block');
    const faqAnswer = qblock.querySelector('.faq__question-text');
    const faqCloseBtn = qblock.querySelector('.faq__question-button');

    if (faqCloseBtn.classList.contains('faq__question-button_active')) {
      faqAnswers.forEach((item) => item.classList.remove('faq__question-text_active'));
      faqBtn.forEach((item) => item.classList.remove('faq__question-button_active'));
    } else {
      faqAnswers.forEach((item) => item.classList.remove('faq__question-text_active'));
      faqBtn.forEach((item) => item.classList.remove('faq__question-button_active'));
      faqAnswer.classList.add('faq__question-text_active');
      faqCloseBtn.classList.add('faq__question-button_active');
    }
  });
});

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
vacancieNameBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    const vacItem = btn.closest('.vacancies__gallery-item');
    const vacDescription = vacItem.querySelector('.vacancies__description');
    const vacName = vacItem.querySelector('.vacancies__name');
    const vacArrow = vacItem.querySelector('.vacancies__gallery-arrow');

    vacancieNameBtn.forEach((item) => item.classList.remove('vacancies__name_active'));
    vacGalleryArrows.forEach((item) => item.classList.remove('vacancies__gallery-arrow_active'));
    if (vacName.classList.contains('vacancies__name_active')) {
      vacName.classList.remove('vacancies__name_active');
      vacArrow.classList.remove('vacancies__gallery-arrow_active');
    } else {
      vacName.classList.add('vacancies__name_active');
      vacArrow.classList.add('vacancies__gallery-arrow_active');
    }
    if (vacDescription.classList.contains('vacancies__description_active')) {
      vacanciesDescriptionItems.forEach((item) => item.classList.remove('vacancies__description_active'));
      vacName.classList.remove('vacancies__name_active');
      vacArrow.classList.remove('vacancies__gallery-arrow_active');
    } else {
      vacanciesDescriptionItems.forEach((item) => item.classList.remove('vacancies__description_active'));
      vacDescription.classList.add('vacancies__description_active');
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
  vacanciesDescriptionItems.forEach((item) => item.classList.remove('vacancies__description_active'));
  vacancieNameBtn.forEach((item) => item.classList.remove('vacancies__name_active'));
  vacGalleryArrows.forEach((item) => item.classList.remove('vacancies__gallery-arrow_active'));
  if (vacancieEduItemProgramming.classList.contains('vacancies__btn-menu_active')) {
    vacancieSenseyGallaryProg.classList.add('vacancies__gallery_active');
  } else {
    vacancieSenseyGallaryAnalitics.classList.add('vacancies__gallery_active');
  }
};

const handleVacReviewerProphItemClick = (evt) => {
  activateVacanciesProphItem(vacancieProphItems, evt.target);
  vacanciesDescriptionItems.forEach((item) => item.classList.remove('vacancies__description_active'));
  vacancieNameBtn.forEach((item) => item.classList.remove('vacancies__name_active'));
  vacGalleryArrows.forEach((item) => item.classList.remove('vacancies__gallery-arrow_active'));
  if (vacancieEduItemProgramming.classList.contains('vacancies__btn-menu_active')) {
    vacancieReviewerGallaryProg.classList.add('vacancies__gallery_active');
  } else {
    vacancieReviewerGallaryAnalitics.classList.add('vacancies__gallery_active');
  }
};

const activateVacanciesEducationItem = (menuItems, menuItemElement) => {
  menuItems.forEach((item) => item.classList.remove('vacancies__btn-menu_active'));
  vacanciesMenuItems.forEach((item) => item.classList.remove('vacancies__menu-item_visible'));
  menuItemElement.classList.add('vacancies__btn-menu_active');
  const vacEdMenuItem = menuItemElement.closest('.vacancies__menu-item');
  vacEdMenuItem.classList.add('vacancies__menu-item_visible');
  vacanciesEduMenu.classList.remove('vacancies__education-menu_active');
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
  vacancieNameBtn.forEach((item) => item.classList.remove('vacancies__name_active'));
  vacGalleryArrows.forEach((item) => item.classList.remove('vacancies__gallery-arrow_active'));
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
  vacancieNameBtn.forEach((item) => item.classList.remove('vacancies__name_active'));
  vacGalleryArrows.forEach((item) => item.classList.remove('vacancies__gallery-arrow_active'));
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
  vacancieNameBtn.forEach((item) => item.classList.remove('vacancies__name_active'));
  vacGalleryArrows.forEach((item) => item.classList.remove('vacancies__gallery-arrow_active'));
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
  vacancieNameBtn.forEach((item) => item.classList.remove('vacancies__name_active'));
  vacGalleryArrows.forEach((item) => item.classList.remove('vacancies__gallery-arrow_active'));
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
  vacancieNameBtn.forEach((item) => item.classList.remove('vacancies__name_active'));
  vacGalleryArrows.forEach((item) => item.classList.remove('vacancies__gallery-arrow_active'));
};

function copy() {
  const url = document.location.href;
  navigator.clipboard.writeText(url);
}

vacanciesShareBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const vacGalWrap = btn.closest('.vacancies__gallery-wrapper');
    const vacPopupShare = vacGalWrap.querySelector('.vacancies__popup-share');

    if (!btn.classList.contains('vacancies__share-btn_active')) {
      vacanciesShareBtns.forEach((item) => item.classList.remove('vacancies__share-btn_active'));
      btn.classList.add('vacancies__share-btn_active');
      if (!vacPopupShare.classList.contains('vacancies__popup-share_active')) {
        vacPopupShare.innerHTML = vacanciesPopupShareFullCode;
        const vacanciesCopyBtn = vacGalWrap.querySelector('.vacancies__popup-copy-icon');
        const vacanciesPopupLink = vacGalWrap.querySelector('.vacancies__popup-link');
        const handleCopyShareBtnClick = () => {
          vacanciesCopyBtn.classList.add('vacancies__popup-copy-icon_done');
          vacanciesPopupLink.classList.add('vacancies__popup-link_active');
          copy();
        };

        const vacanciesCopyLink = vacGalWrap.querySelector('#copyLink');
        vacanciesCopyLink.addEventListener('click', handleCopyShareBtnClick);
        vacPopupShare.classList.add('vacancies__popup-share_active');
        document.addEventListener('mousedown', (evt) => {
          if (!evt.target.classList.contains('vacancies__popup-share')
          && !evt.target.classList.contains('vacancies__popup-list')
          && !evt.target.classList.contains('vacancies__popup-link-wrapper')
          && !evt.target.classList.contains('vacancies__popup-copy-icon')
          && !evt.target.classList.contains('vacancies__popup-link')
          && !evt.target.classList.contains('vacancies__share-btn')) {
            vacanciesCopyLink.removeEventListener('click', handleCopyShareBtnClick);
            vacPopupShare.classList.remove('vacancies__popup-share_active');
            vacanciesCopyBtn.classList.remove('vacancies__popup-copy-icon_done');
            vacanciesPopupLink.classList.remove('vacancies__popup-link_active');
            btn.classList.remove('vacancies__share-btn_active');
            vacPopupShare.innerHTML = vacanciesPopupShareEmptyCode;
          }
        });
      } else {
        btn.classList.remove('vacancies__share-btn_active');
        vacPopupShare.innerHTML = vacanciesPopupShareEmptyCode;
      }
    } else {
      vacanciesShareBtns.forEach((item) => item.classList.remove('vacancies__share-btn_active'));
      vacPopupShare.classList.remove('vacancies__popup-share_active');
      vacPopupShare.innerHTML = vacanciesPopupShareEmptyCode;
    }
  });
});

vacanciesBtnMenuArrows.forEach((btn) => {
  btn.addEventListener('click', () => {
    vacanciesMenuItems.forEach((item) => item.classList.add('vacancies__menu-item_visible'));
    vacanciesEduMenu.classList.add('vacancies__education-menu_active');
  });
});

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

// Vacancies listeners
vacancieEduItemDesign.addEventListener('click', handleDesignBtnClick);
vacancieEduItemProgramming.addEventListener('click', handleProgrammingBtnClick);
vacancieEduItemAnalitics.addEventListener('click', handleAnaliticsBtnClick);
vacancieEduItemMarketing.addEventListener('click', handleMarketingBtnClick);
vacancieEduItemManagement.addEventListener('click', handleManagementBtnClick);
vacancieProphSensey.addEventListener('click', handleVacSenseyProphItemClick);
vacancieProphReviewer.addEventListener('click', handleVacReviewerProphItemClick);

/* button for the oppening popup */
const button = document.querySelector('.vacancies__notfound-vac-btn');

// eslint-disable-next-line no-use-before-define
const popupWithForm = new PopupWithForm(popupSelector, submitHandlerForm, formSelector);
popupWithForm.setEventListeners();

/* to open popup */
button.addEventListener('click', () => {
  popupWithForm.open();
});

vacanciesSendBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    popupWithForm.open();
  });
});

const FormInPopupValidator = new FormValidator(configFormValidator, formId);
FormInPopupValidator.enableValidation();

function submitHandlerForm(data) {
  // eslint-disable-next-line
  console.log(data);

  /* on successful submission */
  popupWithForm.showBlockSuccess();
}

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
      const taskListElement = cardPosition.querySelector(dutiesTaskListSelector);
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
