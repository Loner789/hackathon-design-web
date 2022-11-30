// ------- ИМПОРТЫ -------
import './index.scss';
import SuccessStoryCard from '../components/SuccessStoryCard';
import SuccessStoryVideo from '../components/SuccessStoryVideo';
import Section from '../components/Section';
import PopupWithVideo from '../components/PopupWithVideo';
import { successStoriesText, successStoriesVideo } from '../utils/initial-data';

// ------- ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ -------
// ------- faq -------
const faq = document.querySelector('.faq');
const faqBtn = faq.querySelectorAll('.faq__question-button');
const vacancies = document.querySelector('.vacancies');
const vacancieNameBtn = vacancies.querySelectorAll('.vacancies__name');
const vacancieEduItems = vacancies.querySelectorAll('.vacancies__btn-menu');
const vacanciesDescriptionItems = vacancies.querySelectorAll('.vacancies__description');
const vacancieEduItemDesign = vacancies.querySelector('#disign');
const vacancieEduItemProgramming = vacancies.querySelector('#programming');
const vacancieEduItemAnalitics = vacancies.querySelector('#analitics');
const vacancieEduItemMarketing = vacancies.querySelector('#marketing');
const vacancieEduItemManagement = vacancies.querySelector('#management');
const vacancieProphItems = vacancies.querySelectorAll('.vacancies__proph-btn-menu');
const vacancieProphSensey = vacancies.querySelector('#sensey');
const vacancieProphReviewer = vacancies.querySelector('#reviewer');
const vacancieSenseyGallaryProg = vacancies.querySelector('#sensey-gallary-prog');
const vacancieReviewerGallaryProg = vacancies.querySelector('#reviewer-gallary-prog');
const vacancieSenseyGallaryAnalitics = vacancies.querySelector('#sensey-gallary-analitics');
const vacancieReviewerGallaryAnalitics = vacancies.querySelector('#reviewer-gallary-analitics');
const vacanciesGallaries = vacancies.querySelectorAll('.vacancies__gallery');
const vacanciesNoVac = vacancies.querySelector('#no-vac-available');
const vacanciesNotFound = vacancies.querySelector('#vac-notfound');
const vacanciesShareBtns = vacancies.querySelectorAll('.vacancies__share-btn');
const vacanciesPopupShare = vacancies.querySelector('.vacancies__popup-share');
const vacanciesCopyBtn = vacanciesPopupShare.querySelector('.vacancies__popup-copy-icon');
const vacanciesCopyLink = vacanciesPopupShare.querySelector('#copyLink');

// ------- КОД -------

// ------- faq -------
faqBtn.forEach(btn => {
  btn.addEventListener('click', function handleClick(event) {
    const qblock = btn.closest('.faq__question-block')
    const faqAnswer = qblock.querySelector('.faq__question-text');
    btn.classList.toggle('faq__question-button_active');
    faqAnswer.classList.toggle('faq__question-text_active');
  });
});

const createSuccessStoryCard = (data) => {
  const сardsList = new Section(
    {
      items: data,
      // eslint-disable-next-line arrow-parens
      renderer: item => {
        const elementCard = new SuccessStoryCard(item, '.success-story-text', '#template-success-story-text');
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
      // eslint-disable-next-line arrow-parens
      renderer: item => {
        const handleClickVideo = () => {
          popupWithVideo.open(item);
        };
        const elementVideo = new SuccessStoryVideo(item, '.success-story-video', '#template-success-story-video', handleClickVideo);
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
vacancieNameBtn.forEach(btn => {
  btn.addEventListener('click', function handleClick(event) {
    const vacItem = btn.closest('.vacancies__gallery-item')
    const vacDescription = vacItem.querySelector('.vacancies__description');
    if (vacDescription.classList.contains('vacancies__description_active')) {
      vacanciesDescriptionItems.forEach((item) => item.classList.remove('vacancies__description_active'));
    } else {
      vacanciesDescriptionItems.forEach((item) => item.classList.remove('vacancies__description_active'));
      vacDescription.classList.add('vacancies__description_active');
    }
  });
});

vacanciesShareBtns.forEach(btn => {
  btn.addEventListener('click', function handleClick(evt) {
    if (!vacanciesPopupShare.classList.contains('vacancies__popup-share_active')) {
      vacanciesPopupShare.classList.add('vacancies__popup-share_active');
      document.addEventListener("mousedown", (evt) => {
        if (!evt.target.classList.contains('vacancies__popup-share') &&
        !evt.target.classList.contains('vacancies__popup-list') &&
        !evt.target.classList.contains('vacancies__popup-link-wrapper') &&
        !evt.target.classList.contains('vacancies__popup-copy-icon') &&
        !evt.target.classList.contains('vacancies__popup-link')) {
          vacanciesPopupShare.classList.remove('vacancies__popup-share_active');
          vacanciesCopyBtn.classList.remove('vacancies__popup-copy-icon_done');
        }})
    } else {
      vacanciesPopupShare.classList.remove('vacancies__popup-share_active');
      vacanciesCopyBtn.classList.remove('vacancies__popup-copy-icon_done');
    }
  })
})

const activateVacanciesProphItem = (menuItems, menuItemElement) => {
  menuItems.forEach((item) => item.classList.remove('vacancies__proph-btn-menu_active'));
  vacanciesGallaries.forEach((item) => item.classList.remove('vacancies__gallery_active'));
  menuItemElement.classList.add('vacancies__proph-btn-menu_active');
}

const handleVacSenseyProphItemClick = (evt) => {
  activateVacanciesProphItem(vacancieProphItems, evt.target);
  if (vacancieEduItemProgramming.classList.contains('vacancies__btn-menu_active')) {
    vacancieSenseyGallaryProg.classList.add('vacancies__gallery_active');
  } else {
    vacancieSenseyGallaryAnalitics.classList.add('vacancies__gallery_active');
  }
}

const handleVacReviewerProphItemClick = (evt) => {
  activateVacanciesProphItem(vacancieProphItems, evt.target);
  if (vacancieEduItemProgramming.classList.contains('vacancies__btn-menu_active')) {
    vacancieReviewerGallaryProg.classList.add('vacancies__gallery_active');
  } else {
    vacancieReviewerGallaryAnalitics.classList.add('vacancies__gallery_active');
  }
}

const activateVacanciesEducationItem = (menuItems, menuItemElement) => {
  menuItems.forEach((item) => item.classList.remove('vacancies__btn-menu_active'));
  menuItemElement.classList.add('vacancies__btn-menu_active');
}

const handleDesignBtnClick = (evt) => {
  activateVacanciesEducationItem(vacancieEduItems, evt.target);
  vacancieProphItems.forEach((item) => item.disabled = true);
  vacanciesGallaries.forEach((item) => item.classList.remove('vacancies__gallery_active'));
  vacancieProphItems.forEach((item) => item.classList.remove('vacancies__proph-btn-menu_active'));
  vacancieProphSensey.classList.add('vacancies__proph-btn-menu_active');
  vacanciesNoVac.classList.add('vacancies__novac-wrapper_active');
  vacanciesNotFound.classList.add('vacancies__gallery-wrapper_hide');
  vacanciesDescriptionItems.forEach((item) => item.classList.remove('vacancies__description_active'));
}

const handleProgrammingBtnClick = (evt) => {
  activateVacanciesEducationItem(vacancieEduItems, evt.target);
  vacancieProphItems.forEach((item) => item.disabled = false);
  vacancieProphItems.forEach((item) => item.classList.remove('vacancies__proph-btn-menu_active'));
  vacanciesGallaries.forEach((item) => item.classList.remove('vacancies__gallery_active'));
  vacancieProphSensey.classList.add('vacancies__proph-btn-menu_active');
  vacancieSenseyGallaryProg.classList.add('vacancies__gallery_active');
  vacanciesNoVac.classList.remove('vacancies__novac-wrapper_active');
  vacanciesNotFound.classList.remove('vacancies__gallery-wrapper_hide');
  vacanciesDescriptionItems.forEach((item) => item.classList.remove('vacancies__description_active'));
}

const handleAnaliticsBtnClick = (evt) => {
  activateVacanciesEducationItem(vacancieEduItems, evt.target);
  vacancieProphItems.forEach((item) => item.disabled = false);
  vacancieProphItems.forEach((item) => item.classList.remove('vacancies__proph-btn-menu_active'));
  vacanciesGallaries.forEach((item) => item.classList.remove('vacancies__gallery_active'));
  vacancieProphSensey.classList.add('vacancies__proph-btn-menu_active');
  vacancieSenseyGallaryAnalitics.classList.add('vacancies__gallery_active');
  vacanciesNoVac.classList.remove('vacancies__novac-wrapper_active');
  vacanciesNotFound.classList.remove('vacancies__gallery-wrapper_hide');
  vacanciesDescriptionItems.forEach((item) => item.classList.remove('vacancies__description_active'));
}

const handleMarketingBtnClick = (evt) => {
  activateVacanciesEducationItem(vacancieEduItems, evt.target);
  vacancieProphItems.forEach((item) => item.disabled = true);
  vacanciesGallaries.forEach((item) => item.classList.remove('vacancies__gallery_active'));
  vacancieProphItems.forEach((item) => item.classList.remove('vacancies__proph-btn-menu_active'));
  vacancieProphSensey.classList.add('vacancies__proph-btn-menu_active');
  vacanciesNoVac.classList.add('vacancies__novac-wrapper_active');
  vacanciesNotFound.classList.add('vacancies__gallery-wrapper_hide');
  vacanciesDescriptionItems.forEach((item) => item.classList.remove('vacancies__description_active'));
}

const handleManagementBtnClick = (evt) => {
  activateVacanciesEducationItem(vacancieEduItems, evt.target);
  vacancieProphItems.forEach((item) => item.disabled = true);
  vacanciesGallaries.forEach((item) => item.classList.remove('vacancies__gallery_active'));
  vacancieProphItems.forEach((item) => item.classList.remove('vacancies__proph-btn-menu_active'));
  vacancieProphSensey.classList.add('vacancies__proph-btn-menu_active');
  vacanciesNoVac.classList.add('vacancies__novac-wrapper_active');
  vacanciesNotFound.classList.add('vacancies__gallery-wrapper_hide');
  vacanciesDescriptionItems.forEach((item) => item.classList.remove('vacancies__description_active'));
}

const handleCopyShareBtnClick = () => {
  vacanciesCopyBtn.classList.add('vacancies__popup-copy-icon_done');
}

vacancieEduItemDesign.addEventListener('click', handleDesignBtnClick);
vacancieEduItemProgramming.addEventListener('click', handleProgrammingBtnClick);
vacancieEduItemAnalitics.addEventListener('click', handleAnaliticsBtnClick);
vacancieEduItemMarketing.addEventListener('click', handleMarketingBtnClick);
vacancieEduItemManagement.addEventListener('click', handleManagementBtnClick);
vacancieProphSensey.addEventListener('click', handleVacSenseyProphItemClick);
vacancieProphReviewer.addEventListener('click', handleVacReviewerProphItemClick);
vacanciesCopyLink.addEventListener('click', handleCopyShareBtnClick);
