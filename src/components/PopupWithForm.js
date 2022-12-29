import Popup from './Popup';
import {
  formInputSelector,
  popupButtonSubmitSelector,
  successSelector,
  popupButtonSuccessSelector,
  popupTitleSelector,
  errorTextSelector,
  formItemInputSelector,
  formItemTextareaSelector,
  popupContainerSelector,
  popupContainerOverflowHiddenClass,
  formItemTypeErrorClass,
  popupTitleHiddenClass,
  formHiddenClass,
  successVisibleClass,
  formLabelPlaceInputClass,
  formRequiredInputSelector,
} from '../utils/constants';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitHandlerForm, formSelector) {
    super(popupSelector);
    this._submitHandlerForm = submitHandlerForm;
    this._formElement = this._elementPopup.querySelector(formSelector);
    this._inputsList = Array.from(this._formElement.querySelectorAll(formInputSelector));
    this._buttonForm = this._formElement.querySelector(popupButtonSubmitSelector);
    this._success = this._elementPopup.querySelector(successSelector);
    this._successButton = this._success.querySelector(popupButtonSuccessSelector);
    this._popupTitle = this._elementPopup.querySelector(popupTitleSelector);
    this._formErrorList = this._formElement.querySelectorAll(errorTextSelector);
    this._formInputList = this._formElement.querySelectorAll(formInputSelector);
    this._formItemInputList = this._formElement.querySelectorAll(formItemInputSelector);
    this._formTextareaList = this._formElement.querySelectorAll(formItemTextareaSelector);
    this._popupContainer = this._elementPopup.querySelector(popupContainerSelector);
  }

  _getInputValues() {
    this._formValues = {};
    // eslint-disable-next-line no-return-assign
    this._inputsList.forEach((input) => this._formValues[input.name] = input.value);

    return this._formValues;
  }

  close() {
    super.close();
    this._formElement.reset();
    this._popupContainer.classList.remove(popupContainerOverflowHiddenClass);
    this._formErrorList.forEach((el) => {
      el.textContent = '';
    });
    this._formInputList.forEach((el) => {
      el.classList.remove(formItemTypeErrorClass);
    });
  }

  showBlockSuccess() {
    this._popupTitle.classList.add(popupTitleHiddenClass);
    this._formElement.classList.add(formHiddenClass);
    this._success.classList.add(successVisibleClass);
  }

  open() {
    super.open();
    this._popupTitle.classList.remove(popupTitleHiddenClass);
    this._formElement.classList.remove(formHiddenClass);
    this._success.classList.remove(successVisibleClass);
    this._buttonForm.setAttribute('disabled', true);
  }

  setEventListeners() {
    super.setEventListeners();

    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitHandlerForm(this._getInputValues());
      this._popupContainer.classList.add(popupContainerOverflowHiddenClass);
    });

    this._successButton.addEventListener('click', () => {
      this.close();
    });

    this._formItemInputList.forEach((el) => {
      el.addEventListener('focus', () => {
        el.parentElement.classList.remove(formLabelPlaceInputClass);
      });

      el.addEventListener('blur', () => {
        el.parentElement.classList.add(formLabelPlaceInputClass);
      });
    });

    this._formTextareaList.forEach((el) => {
      const spanElement = el.parentElement.querySelector(formRequiredInputSelector);

      el.addEventListener('focus', () => {
        spanElement.textContent = '';
      });

      el.addEventListener('blur', () => {
        spanElement.textContent = '*';
      });
    });
  }
}
