import VacancyMenuItem from '../components/VacancyMenuItem';
import VacancyProphItem from '../components/VacancyProphItem';
import VacancyItem from '../components/VacancyItem';

const generateProph = (card) => new VacancyProphItem(card, '#template-vacancies-proph-menu-item').generate();

const generateVacancy = (card) => new VacancyItem(card, '#template-vacancies-galary-item').generate();

const generateMenu = (card) => new VacancyMenuItem(card, '#template-vacancies-proph-item').generate();

export {
    generateMenu,
    generateProph,
    generateVacancy,
}
