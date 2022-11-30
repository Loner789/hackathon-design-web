import './index.scss';
import PopupWithForm from '../components/PopupWithForm.js';
import FormValidator from '../components/FormValidator';
import {
  popupSelector,
  formSelector,
  configFormValidator,
} from '../utils/constants';
/* button for the oppening popup */
const button = document.querySelector('.button');

const popupWithForm = new PopupWithForm(popupSelector, submitHandlerForm, formSelector);
popupWithForm.setEventListeners();

/* to open popup */
button.addEventListener('click', () => {
  popupWithForm.open();
});

const FormInPopupValidator = new FormValidator(configFormValidator, '#form');
FormInPopupValidator.enableValidation();

function submitHandlerForm(data) {
  console.log(data);

  /* on successful submission */
  popupWithForm.showBlockSuccess();
};