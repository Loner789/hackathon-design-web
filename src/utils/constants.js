// CONSTANTS:
const scroller = document.querySelector('.conditions__slider');
const faq = document.querySelector('.faq');
const faqBtn = faq.querySelectorAll('.faq__question-button');
const faqAnswers = faq.querySelectorAll('.faq__question-text');
const faqQuestions = faq.querySelectorAll('.faq__question-text-main');
const vacancies = document.querySelector('.vacancies');
const vacancieNameBtn = vacancies.querySelectorAll('.vacancies__name');
const vacancieEduItems = vacancies.querySelectorAll('.vacancies__btn-menu');
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
const vacancieSenseyGallaryProg = vacancies.querySelector(
  '#sensey-gallary-prog',
);
const vacancieReviewerGallaryProg = vacancies.querySelector(
  '#reviewer-gallary-prog',
);
const vacancieSenseyGallaryAnalitics = vacancies.querySelector(
  '#sensey-gallary-analitics',
);
const vacancieReviewerGallaryAnalitics = vacancies.querySelector(
  '#reviewer-gallary-analitics',
);
const vacanciesGallaries = vacancies.querySelectorAll('.vacancies__gallery');
const vacanciesNoVac = vacancies.querySelector('#no-vac-available');
const vacanciesNotFound = vacancies.querySelector('#vac-notfound');
const vacanciesShareBtns = vacancies.querySelectorAll('.vacancies__share-btn');
const vacGalleryArrows = vacancies.querySelectorAll('.vacancies__gallery-arrow');
const vacanciesPopupShareEmptyCode = '';
const vacanciesPopupShareFullCode = '<nav class="vacancies__popup-list"><div id="copyLink" class="vacancies__popup-link-wrapper"><div class="vacancies__popup-copy-icon"></div><a rel="nofollow" class="vacancies__popup-link">Скопировать ссылку</a></div><div class="vacancies__popup-link-wrapper"><div class="vacancies__popup-telegram-icon"></div><a href="#" target="_blank" rel="nofollow" class="vacancies__popup-link">Telegram</a></div><div class="vacancies__popup-link-wrapper"><div class="vacancies__popup-vk-icon"></div><a href="#" target="_blank" rel="nofollow" class="vacancies__popup-link">Вконтакте</a></div><div class="vacancies__popup-link-wrapper"><div class="vacancies__popup-twitter-icon"></div><a href="#" target="_blank" rel="nofollow" class="vacancies__popup-link">Twitter</a></div></nav>';

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
  faqAnswers,
  faqQuestions,
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
  vacGalleryArrows,
  vacanciesPopupShareEmptyCode,
  vacanciesPopupShareFullCode,
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
};
