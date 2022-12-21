import VacancyMenuItem from '../components/VacancyMenuItem';
import VacancyProphItem from '../components/VacancyProphItem';
import VacancyItem from '../components/VacancyItem';
import FaqItem from '../components/FaqItem';
import PopupWithForm from '../components/PopupWithForm';
import {
    vacanciesProphMenuData,
    vacanciesProphData,
} from '../utils/initial-data';
import {
    vacanciesPopupShareFullCode,
    vacanciesPopupShareEmptyCode,
    popupSelector,
    formSelector,
} from '../utils/constants';

// --------RENDERER--------
const renderElementsToDOM = (data, containerElement, generateElementFunc) => (
    data.forEach((item) => containerElement.append(generateElementFunc(item)))
);

// --------POPUP WITH FORM--------
function submitHandlerForm(data) {
    // eslint-disable-next-line
    console.log(data);
  
    /* on successful submission */
    popupWithForm.showBlockSuccess();
}
const popupWithForm = new PopupWithForm(popupSelector, submitHandlerForm, formSelector);

// --------VACANCIES--------
const generateVacancy = (card) => new VacancyItem(card, '#template-vacancies-galary-item', popupWithForm, vacanciesPopupShareFullCode, vacanciesPopupShareEmptyCode).generate();
const generateProph = (card) => new VacancyProphItem(card, '#template-vacancies-proph-menu-item', renderElementsToDOM, generateVacancy, vacanciesProphData).generate();
const generateMenu = (card) => new VacancyMenuItem(card, '#template-vacancies-proph-item', renderElementsToDOM, generateProph, generateVacancy, vacanciesProphMenuData, vacanciesProphData).generate();

// --------FAQ--------
const generateFaq = (card) => new FaqItem(card, '#template-faq').generate();
  
export {
    renderElementsToDOM,
    generateMenu,
    generateFaq,
    popupWithForm,
}