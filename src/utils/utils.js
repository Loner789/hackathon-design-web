import VacancyMenuItem from '../components/VacancyMenuItem';
import VacancyProphItem from '../components/VacancyProphItem';
import VacancyItem from '../components/VacancyItem';
import FaqItem from '../components/FaqItem';
import PopupWithForm from '../components/PopupWithForm';
import { vacanciesProphMenuData, vacanciesProphData } from './initial-data';
import {
  vacanciesPopupShareFullCode,
  vacanciesPopupShareEmptyCode,
  popupSelector,
  formSelector,
} from './constants';

// --------RENDERER--------
const renderElementsToDOM = (data, containerElement, generateElementFunc) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  data.forEach((item) => containerElement.append(generateElementFunc(item)));

// --------POPUP WITH FORM--------
function submitHandlerForm(data) {
  // eslint-disable-next-line
  console.log(data);

  /* on successful submission */
  // eslint-disable-next-line no-use-before-define
  popupWithForm.showBlockSuccess();
}
const popupWithForm = new PopupWithForm(
  popupSelector,
  submitHandlerForm,
  formSelector,
);

// --------VACANCIES--------
const generateVacancy = (card) => new VacancyItem(
  card,
  '#template-vacancies-galary-item',
  popupWithForm,
  vacanciesPopupShareFullCode,
  vacanciesPopupShareEmptyCode,
).generate();
const generateProph = (card) => new VacancyProphItem(
  card,
  '#template-vacancies-proph-menu-item',
  renderElementsToDOM,
  generateVacancy,
  vacanciesProphData,
).generate();
const generateMenu = (card) => new VacancyMenuItem(
  card,
  '#template-vacancies-proph-item',
  renderElementsToDOM,
  generateProph,
  generateVacancy,
  vacanciesProphMenuData,
  vacanciesProphData,
).generate();

// --------FAQ--------
const generateFaq = (card) => new FaqItem(card, '#template-faq').generate();

// --------CONDITIONS--------
// Creation of conditions-card element
function createConditionsCard(cardData) {
  const { title, image, text } = cardData;
  const cardElement = document
    .querySelector('#conditions-card')
    .content.querySelector('.conditions__slide')
    .cloneNode(true);
  const [firstPart, ...rest] = title.split(' ');

  cardElement.querySelector('.conditions__card-title_side_left').textContent = firstPart;
  cardElement.querySelector('.conditions__card-title_side_right').textContent = rest.join(' ');
  cardElement.querySelector(
    '.conditions__card-image',
  ).style.backgroundImage = `url(${image})`;
  cardElement.querySelector('.conditions__card-text').textContent = text;

  return cardElement;
}

export {
  renderElementsToDOM, generateMenu, generateFaq, popupWithForm, createConditionsCard,
};
