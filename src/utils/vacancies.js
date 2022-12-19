import VacancyMenuItem from '../components/VacancyMenuItem';
import VacancyProphItem from '../components/VacancyProphItem';
import VacancyItem from '../components/VacancyItem';
import { renderElementsToDOM } from '../utils/utils';
import {
    vacanciesProphMenuData,
    vacanciesProphData,
  } from '../utils/vacancies-data';

const generateVacancy = (card) => new VacancyItem(card, '#template-vacancies-galary-item').generate();
const generateProph = (card) => new VacancyProphItem(card, '#template-vacancies-proph-menu-item', renderElementsToDOM, generateVacancy, vacanciesProphData).generate();
const generateMenu = (card) => new VacancyMenuItem(card, '#template-vacancies-proph-item', renderElementsToDOM, generateProph, generateVacancy, vacanciesProphMenuData, vacanciesProphData).generate();

export {
    generateMenu,
    generateProph,
    generateVacancy,
}
