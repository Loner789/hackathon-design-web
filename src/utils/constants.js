// CONSTANTS:
export const faq = document.querySelector('.faq');
export const faqContainer = faq.querySelector('.faq__container');
export const faqBtn = faq.querySelectorAll('.faq__question-button');
export const faqAnswers = faq.querySelectorAll('.faq__question-text');
export const faqQuestions = faq.querySelectorAll('.faq__question-text-main');
export const vacancies = document.querySelector('.vacancies');
export const vacancieNameBtn = vacancies.querySelectorAll('.vacancies__name');
export const vacancieEduItems = vacancies.querySelectorAll('.vacancies__btn-menu');
export const vacanciesMenuItems = vacancies.querySelectorAll('.vacancies__menu-item');
export const vacanciesDescriptionItems = vacancies.querySelectorAll(
  '.vacancies__description',
);
export const vacancieEduItemDesign = vacancies.querySelector('#disign');
export const vacancieEduItemProgramming = vacancies.querySelector('#programming');
export const vacancieEduItemAnalitics = vacancies.querySelector('#analitics');
export const vacancieEduItemMarketing = vacancies.querySelector('#marketing');
export const vacancieEduItemManagement = vacancies.querySelector('#management');
export const vacancieProphItems = vacancies.querySelectorAll(
  '.vacancies__proph-btn-menu',
);
export const vacancieProphSensey = vacancies.querySelector('#sensey');
export const vacancieProphReviewer = vacancies.querySelector('#reviewer');
export const vacancieSenseyGallary = vacancies.querySelector(
  '#sensey-gallary',
);
export const vacancieReviewerGallary = vacancies.querySelector(
  '#reviewer-gallary',
);
export const vacanciesGallaries = vacancies.querySelectorAll('.vacancies__gallery');
export const vacanciesNoVac = vacancies.querySelector('#no-vac-available');
export const vacanciesNotFound = vacancies.querySelector('#vac-notfound');
export const vacanciesShareBtns = vacancies.querySelectorAll('.vacancies__share-btn');
export const vacGalleryArrows = vacancies.querySelectorAll('.vacancies__gallery-arrow');
export const vacanciesPopupShareEmptyCode = '';
export const vacanciesPopupShareFullCode = '<nav class="vacancies__popup-list"><div id="copyLink" class="vacancies__popup-link-wrapper"><div class="vacancies__popup-copy-icon"></div><a rel="nofollow" class="vacancies__popup-link">Скопировать ссылку</a></div><div class="vacancies__popup-link-wrapper"><div class="vacancies__popup-telegram-icon"></div><a href="#" target="_blank" rel="nofollow" class="vacancies__popup-link">Telegram</a></div><div class="vacancies__popup-link-wrapper"><div class="vacancies__popup-vk-icon"></div><a href="#" target="_blank" rel="nofollow" class="vacancies__popup-link">Вконтакте</a></div><div class="vacancies__popup-link-wrapper"><div class="vacancies__popup-twitter-icon"></div><a href="#" target="_blank" rel="nofollow" class="vacancies__popup-link">Twitter</a></div></nav>';
export const vacanciesBtnMenuArrows = vacancies.querySelectorAll('.vacancies__btn-menu-arrow');
export const vacanciesEduMenu = vacancies.querySelector('.vacancies__education-menu');
export const vacanciesProphMenu = vacancies.querySelector('.vacancies__prophecy-menu');
export const vacanciesSendBtns = vacancies.querySelectorAll('.vacancies__send-btn');
export const notFoundVacBtn = document.querySelector('.vacancies__notfound-vac-btn');
export const videoElement = document.querySelector('.video');
export const cardLinePlaceFirstTop = document.querySelector(
  '.card__line_place__first-top',
);
export const cardLinePlaceFirstTopParent = cardLinePlaceFirstTop.parentNode;
export const cardLinePlaceSecondTop = document.querySelector(
  '.card__line_place__second-top',
);
export const cardLinePlaceSecondTopParent = cardLinePlaceSecondTop.parentNode;
export const cardLinePlaceSecondBottom = document.querySelector(
  '.card__line_place__second-bottom',
);
export const cardLinePlaceSecondBottomParent = cardLinePlaceSecondBottom.parentNode;

export const popupSelector = '#popup-with-form';
export const formSelector = '.popup__form';
export const formId = '#form';
export const configFormValidator = {
  inputSelector: '.form__item',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'form__item_type_error',
  errorClass: 'form__error_active',
};
export const buttonCloseClass = 'button-close';
export const popupOpenedClass = 'popup_opened';
export const formInputSelector = '.form__item';
export const popupButtonSubmitSelector = '.popup__button_submit';
export const successSelector = '.success';
export const popupButtonSuccessSelector = '.popup__button_success';
export const popupTitleSelector = '.popup__title';
export const errorTextSelector = '.form__error-text';
export const formItemInputSelector = '.form__item_input';
export const formItemTextareaSelector = '.form__item_textarea';
export const popupContainerSelector = '.popup__container';
export const popupContainerOverflowHiddenClass = 'popup__container_overflow_hidden';
export const formItemTypeErrorClass = 'form__item_type_error';
export const popupTitleHiddenClass = 'popup__title_hidden';
export const formHiddenClass = 'form_hidden';
export const successVisibleClass = 'success_visible';
export const formLabelPlaceInputClass = 'form__label_place_input';
export const formRequiredInputSelector = '.form__required-input';
export const popupVideoClass = 'popup__video';

export const dutiesBorderTapClass = 'position__border_tap';
export const dutiesTitleTapClass = 'position__title_tap';
export const dutiesTapClass = 'position_tap';
export const dutiesTaskListTapClass = 'position__list-of-tasks_tap';
export const dutiesBorderSelector = '.position__border';
export const dutiesTitleSelector = '.position__title';
export const dutiesTaskListSelector = '.position__list-of-tasks';
export const dutiesTaskTapClass = 'position__task_tap';
export const dutiesTaskSelector = '.position__task';
export const positionSelector = '.position';
export const positionList = document.querySelectorAll('.position');

export const advantagesCardTapClass = 'card_tap';
export const advantageCardMobileVisebleClass = 'card__mobile_visible';
export const advantagesRotateSelector = '.card__rotate';
export const advantagesCardMobileSelector = '.card__mobile';
export const advantageRotateTapClass = 'card__rotate_tap';
export const advantageCardHidden = 'card_hidden';
export const advantageList = document.querySelectorAll('.card');
export const cardLineHoveredClass = 'card__line_hovered';

export const successStoryMobileSelector = '.success-story-mobile';
export const successStoryTitleSelector = '.success-story-title';
export const successStorySubtitleSelector = '.success-story-subtitle';
export const successStoryMobileTextSelector = '.success-story-mobile__text';
export const successStoryTextParagraphClass = 'success-story-text__paragraph';
export const successStoryTextContentHiddenClass = 'success-story-text__content_hidden';
export const successStoryTextBottomLineHiddenClass = 'success-story-text__bottom-line_hidden';
export const successStoryTextPhotoMobileClass = 'success-story-text__photo_mobile';
export const successStoryTextHiddenClass = 'success-story-text_hidden';
export const successStoryTextContentSelector = '.success-story-text__content';
export const successStoryTextBottomLineSelector = '.success-story-text__bottom-line';
export const successStoryTextPhotoSelector = '.success-story-text__photo';
export const successStoryTextTextSelector = '.success-story-text__text';
export const successStoryTextSelector = '.success-story-text';
export const successStoryTextTemplateId = '#template-success-story-text';
export const successStoriesTextListSelector = '.success-stories__text-list';
export const videoPopupId = '#video-popup';
export const successStoryVideoSelector = '.success-story-video';
export const successStoryVideoTemplateId = '#template-success-story-video';
export const successStoriesVideoListSelector = '.success-stories__video-list';
export const videoStoryImageSelector = '.video-story__image';
export const videoStorySelector = '.video-story';
export const videoStoryLinkSelector = '.video-story__link';
export const videoButtonSelector = '.video-button';
