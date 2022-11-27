// ------- ИМПОРТЫ -------
import './index.scss';

// ------- ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ -------
// ------- vacancies -------
const vacancies = document.querySelector('.vacancies');
const vacancieNameBtn = vacancies.querySelectorAll('.vacancies__name');
const vacancieEduItems = vacancies.querySelectorAll('.vacancies__btn-menu');
const vacancieEduItemDesign = vacancies.querySelector('#disign');
const vacancieEduItemProgramming = vacancies.querySelector('#programming');
const vacancieEduItemAnalitics = vacancies.querySelector('#analitics');
const vacancieEduItemMarketing = vacancies.querySelector('#marketing');
const vacancieEduItemManagement = vacancies.querySelector('#management');
const vacancieProphItems = vacancies.querySelectorAll('.vacancies__proph-btn-menu');
const vacancieProphSensey = vacancies.querySelector('#sensey');
const vacancieProphReviewer = vacancies.querySelector('#reviewer');


// ------- КОД -------

// ------- vacancies -------
vacancieNameBtn.forEach(btn => {
  btn.addEventListener('click', function handleClick(event) {
    const vacItem = btn.closest('.vacancies__gallery-item')
    const vacDescription = vacItem.querySelector('.vacancies__description');
    vacDescription.classList.toggle('vacancies__description_active');
  });
});

const activateVacanciesEducationItem = (menuItems, menuItemElement) => {
  menuItems.forEach((item) => item.classList.remove('vacancies__btn-menu_active'));
  menuItemElement.classList.add('vacancies__btn-menu_active');
}

const handleVacanciesEducationItemClick = (evt) => {
  activateVacanciesEducationItem(vacancieEduItems, evt.target);
}

const activateVacanciesProphItem = (menuItems, menuItemElement) => {
  menuItems.forEach((item) => item.classList.remove('vacancies__proph-btn-menu_active'));
  menuItemElement.classList.add('vacancies__proph-btn-menu_active');
}

const handleVacanciesProphItemClick = (evt) => {
  activateVacanciesProphItem(vacancieProphItems, evt.target);
}

vacancieEduItemDesign.addEventListener('click', handleVacanciesEducationItemClick);
vacancieEduItemProgramming.addEventListener('click', handleVacanciesEducationItemClick);
vacancieEduItemAnalitics.addEventListener('click', handleVacanciesEducationItemClick);
vacancieEduItemMarketing.addEventListener('click', handleVacanciesEducationItemClick);
vacancieEduItemManagement.addEventListener('click', handleVacanciesEducationItemClick);
vacancieProphSensey.addEventListener('click', handleVacanciesProphItemClick);
vacancieProphReviewer.addEventListener('click', handleVacanciesProphItemClick);

