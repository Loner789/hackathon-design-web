import VacancyMenuItem from '../components/VacancyMenuItem';
import VacancyProphItem from '../components/VacancyProphItem';
import VacancyItem from '../components/VacancyItem';
import FaqItem from '../components/FaqItem';
import {
    vacanciesProphMenuData,
    vacanciesProphData,
} from '../utils/initial-data';
import {
    vacanciesPopupShareFullCode,
    vacanciesPopupShareEmptyCode,
} from '../utils/constants';

// --------RENDERER--------
const renderElementsToDOM = (data, containerElement, generateElementFunc) => (
    data.forEach((item) => containerElement.append(generateElementFunc(item)))
);

// --------VACANCIES--------
const generateVacancy = (card) => new VacancyItem(card, '#template-vacancies-galary-item', vacanciesPopupShareFullCode, vacanciesPopupShareEmptyCode).generate();
const generateProph = (card) => new VacancyProphItem(card, '#template-vacancies-proph-menu-item', renderElementsToDOM, generateVacancy, vacanciesProphData).generate();
const generateMenu = (card) => new VacancyMenuItem(card, '#template-vacancies-proph-item', renderElementsToDOM, generateProph, generateVacancy, vacanciesProphMenuData, vacanciesProphData).generate();

// --------FAQ--------
const generateFaq = (card) => new FaqItem(card, '#template-faq').generate();
  
export {
    renderElementsToDOM,
    generateMenu,
    generateFaq,
}