import Popup from './Popup';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitHandlerForm, formSelector) {
    super(popupSelector);
    this._submitHandlerForm = submitHandlerForm;
    this._formElement = this._elementPopup.querySelector(formSelector);
    this._inputsList = Array.from(this._formElement.querySelectorAll('.form__item'));
    this._buttonForm = this._formElement.querySelector('.form__button');
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
  }

  setEventListeners() {
    super.setEventListeners();

    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitHandlerForm(this._getInputValues());
    });
  }
}
