// CONSTANTS:
const scroller = document.querySelector('.conditions__slider');
const faq = document.querySelector('.faq');
const faqContainer = faq.querySelector('.faq__container');
const faqBtn = faq.querySelectorAll('.faq__question-button');
const faqAnswers = faq.querySelectorAll('.faq__question-text');
const faqQuestions = faq.querySelectorAll('.faq__question-text-main');
const vacancies = document.querySelector('.vacancies');
const vacancieNameBtn = vacancies.querySelectorAll('.vacancies__name');
const vacancieEduItems = vacancies.querySelectorAll('.vacancies__btn-menu');
const vacanciesMenuItems = vacancies.querySelectorAll('.vacancies__menu-item');
const vacanciesDescriptionItems = vacancies.querySelectorAll(
  '.vacancies__description',
);
const vacancieEduItemDesign = vacancies.querySelector('#disign');
const vacancieEduItemProgramming = vacancies.querySelector('#programming');
const vacancieEduItemAnalitics = vacancies.querySelector('#analitics');
const vacancieEduItemMarketing = vacancies.querySelector('#marketing');
const vacancieEduItemManagement = vacancies.querySelector('#management');
const vacancieProphItems = vacancies.querySelectorAll(
  '.vacancies__proph-btn-menu',
);
const vacancieProphSensey = vacancies.querySelector('#sensey');
const vacancieProphReviewer = vacancies.querySelector('#reviewer');
const vacancieSenseyGallary = vacancies.querySelector(
  '#sensey-gallary',
);
const vacancieReviewerGallary = vacancies.querySelector(
  '#reviewer-gallary',
);
const vacanciesGallaries = vacancies.querySelectorAll('.vacancies__gallery');
const vacanciesNoVac = vacancies.querySelector('#no-vac-available');
const vacanciesNotFound = vacancies.querySelector('#vac-notfound');
const vacanciesShareBtns = vacancies.querySelectorAll('.vacancies__share-btn');
const vacGalleryArrows = vacancies.querySelectorAll('.vacancies__gallery-arrow');
const vacanciesPopupShareEmptyCode = '';
const vacanciesPopupShareFullCode = '<nav class="vacancies__popup-list"><div id="copyLink" class="vacancies__popup-link-wrapper"><div class="vacancies__popup-copy-icon"></div><a rel="nofollow" class="vacancies__popup-link">Скопировать ссылку</a></div><div class="vacancies__popup-link-wrapper"><div class="vacancies__popup-telegram-icon"></div><a href="#" target="_blank" rel="nofollow" class="vacancies__popup-link">Telegram</a></div><div class="vacancies__popup-link-wrapper"><div class="vacancies__popup-vk-icon"></div><a href="#" target="_blank" rel="nofollow" class="vacancies__popup-link">Вконтакте</a></div><div class="vacancies__popup-link-wrapper"><div class="vacancies__popup-twitter-icon"></div><a href="#" target="_blank" rel="nofollow" class="vacancies__popup-link">Twitter</a></div></nav>';
const vacanciesBtnMenuArrows = vacancies.querySelectorAll('.vacancies__btn-menu-arrow');
const vacanciesEduMenu = vacancies.querySelector('.vacancies__education-menu');
const vacanciesProphMenu = vacancies.querySelector('.vacancies__prophecy-menu');
const vacanciesSendBtns = vacancies.querySelectorAll('.vacancies__send-btn');
const videoElement = document.querySelector('.video');
const cardLinePlaceFirstTop = document.querySelector(
  '.card__line_place__first-top',
);
const cardLinePlaceFirstTopParent = cardLinePlaceFirstTop.parentNode;
const cardLinePlaceSecondTop = document.querySelector(
  '.card__line_place__second-top',
);
const cardLinePlaceSecondTopParent = cardLinePlaceSecondTop.parentNode;
const cardLinePlaceSecondBottom = document.querySelector(
  '.card__line_place__second-bottom',
);
const cardLinePlaceSecondBottomParent = cardLinePlaceSecondBottom.parentNode;

const popupSelector = '#popup-with-form';
const formSelector = '.popup__form';
const dutiesBorderTapClass = 'position__border_tap';
const dutiesTitleTapClass = 'position__title_tap';
const dutiesTapClass = 'position_tap';
const dutiesTaskListTapClass = 'position__list-of-tasks_tap';
const dutiesBorderSelector = '.position__border';
const dutiesTitleSelector = '.position__title';
const dutiesTaskListSelector = '.position__list-of-tasks';
const dutiesTaskTapClass = 'position__task_tap';
const dutiesTaskSelector = '.position__task';

const positionList = document.querySelectorAll('.position');
const advantagesCardTapClass = 'card_tap';
const advantageCardMobileVisebleClass = 'card__mobile_visible';
const advantagesRotateSelector = '.card__rotate';
const advantagesCardMobileSelector = '.card__mobile';
const advantageRotateTapClass = 'card__rotate_tap';
const advantageCardHidden = 'card_hidden';

const advantageList = document.querySelectorAll('.card');

const configFormValidator = {
  inputSelector: '.form__item',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'form__item_type_error',
  errorClass: 'form__error_active',
};

export {
  scroller,
  faqBtn,
  faqContainer,
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
  vacancieSenseyGallary,
  vacancieReviewerGallary,
  vacanciesGallaries,
  vacanciesNoVac,
  vacanciesNotFound,
  vacanciesShareBtns,
  vacGalleryArrows,
  vacanciesPopupShareEmptyCode,
  vacanciesPopupShareFullCode,
  vacanciesBtnMenuArrows,
  vacanciesEduMenu,
  vacanciesProphMenu,
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
};
