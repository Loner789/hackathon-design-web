import './index.scss';

import PopupWithForm from '../components/PopupWithForm.js';

import { popupSelector, formSelector } from '../utils/constants';

const submitHandlerForm = (data) => {
  console.log(data);
};

const popupWithForm = new PopupWithForm(popupSelector, submitHandlerForm, formSelector);
popupWithForm.setEventListeners();
