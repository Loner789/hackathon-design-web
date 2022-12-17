import VacancyMenuItem from '../components/VacancyMenuItem';
import VacancyProphItem from '../components/VacancyProphItem';
import VacancyItem from '../components/VacancyItem';
import { renderElementsToDOM } from '../utils/utils';
import {
    vacanciesProphMenuData,
    vacanciesData,
  } from '../utils/vacancies-data';

const generateProph = (card) => new VacancyProphItem(card, '#template-vacancies-proph-menu-item').generate();

const generateVacancy = (card) => new VacancyItem(card, '#template-vacancies-galary-item').generate();

const generateMenu = (card) => new VacancyMenuItem(card, '#template-vacancies-proph-item', renderElementsToDOM, generateProph, generateVacancy, vacanciesProphMenuData, vacanciesData).generate();

export {
    generateMenu,
    generateProph,
    generateVacancy,
}
