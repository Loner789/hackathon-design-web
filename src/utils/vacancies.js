import VacancyItem from './VacancyItem';

const generateVacancy = (card) => new VacancyItem(card, '#projects-template').generate();

export default generateVacancy;
