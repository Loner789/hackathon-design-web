// CONSTANTS:
const scroller = document.querySelector('.conditions__slider');
const faq = document.querySelector('.faq');
const faqBtn = faq.querySelectorAll('.faq__question-button');
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
const vacanciesPopupShare = vacancies.querySelector('.vacancies__popup-share');
const vacanciesCopyBtn = vacanciesPopupShare.querySelector(
  '.vacancies__popup-copy-icon',
);
const vacanciesCopyLink = vacanciesPopupShare.querySelector('#copyLink');
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

export {
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
  vacanciesCopyBtn,
  vacanciesCopyLink,
  videoElement,
  cardLinePlaceFirstTop,
  cardLinePlaceFirstTopParent,
  cardLinePlaceSecondTop,
  cardLinePlaceSecondTopParent,
  cardLinePlaceSecondBottom,
  cardLinePlaceSecondBottomParent,
};
