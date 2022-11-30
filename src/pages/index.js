// ------- ИМПОРТЫ -------

// ------- ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ -------
// ------- vacancies -------
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
const vacGalleryArrows = vacancies.querySelectorAll('.vacancies__gallery-arrow');


// ------- КОД -------

// ------- vacancies -------
vacancieNameBtn.forEach(btn => {
  btn.addEventListener('click', function handleClick(evt) {
    const vacItem = btn.closest('.vacancies__gallery-item')
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
  vacancieNameBtn.forEach((item) => item.classList.remove('vacancies__name_active'));
  vacGalleryArrows.forEach((item) => item.classList.remove('vacancies__gallery-arrow_active'));
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
  vacancieNameBtn.forEach((item) => item.classList.remove('vacancies__name_active'));
  vacGalleryArrows.forEach((item) => item.classList.remove('vacancies__gallery-arrow_active'));
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
  vacancieNameBtn.forEach((item) => item.classList.remove('vacancies__name_active'));
  vacGalleryArrows.forEach((item) => item.classList.remove('vacancies__gallery-arrow_active'));
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
  vacancieNameBtn.forEach((item) => item.classList.remove('vacancies__name_active'));
  vacGalleryArrows.forEach((item) => item.classList.remove('vacancies__gallery-arrow_active'));
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
  vacancieNameBtn.forEach((item) => item.classList.remove('vacancies__name_active'));
  vacGalleryArrows.forEach((item) => item.classList.remove('vacancies__gallery-arrow_active'));
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
