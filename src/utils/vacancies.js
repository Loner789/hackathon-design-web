import VacancyItem from './VacancyItem';

const generateVacancy = (card) => new VacancyItem(card, '#template-vacancies-galary-item').generate();

export default generateVacancy;
