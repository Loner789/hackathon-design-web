import './index.scss';

import PopupWithForm from '../components/PopupWithForm.js';
import FormValidator from '../components/FormValidator';

import {
  popupSelector,
  formSelector,
  configFormValidator,
} from '../utils/constants';

const submitHandlerForm = (data) => {
  console.log(data);
};

const popupWithForm = new PopupWithForm(popupSelector, submitHandlerForm, formSelector);
popupWithForm.setEventListeners();

const FormInPopupValidator = new FormValidator(configFormValidator, '#form');
FormInPopupValidator.enableValidation();
