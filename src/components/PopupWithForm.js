import Popup from './Popup';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitHandlerForm, formSelector) {
    super(popupSelector);
    this._submitHandlerForm = submitHandlerForm;
    this._formElement = this._elementPopup.querySelector(formSelector);
    this._inputsList = Array.from(this._formElement.querySelectorAll('.form__item'));
    this._buttonForm = this._formElement.querySelector('.popup__button');
    this._success = this._elementPopup.querySelector('.success');
    this._successButton = this._success.querySelector('.popup__button');
    this._popupTitle = this._elementPopup.querySelector('.popup__title');
    this._formErrorList = this._formElement.querySelectorAll('.error-text');
    this._formInputList = this._formElement.querySelectorAll('.form__item');
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
    this._formErrorList.forEach((el) => {
      el.textContent = '';
    });
    this._formInputList.forEach((el) => {
      el.classList.remove('form__item_type_error');
    });
  }

  showBlockSuccess() {
    this._popupTitle.classList.add('popup__title_hidden');
    this._formElement.classList.add('form_hidden');
    this._success.classList.add('success_visible');
  }

  open() {
    super.open();
    this._popupTitle.classList.remove('popup__title_hidden');
    this._formElement.classList.remove('form_hidden');
    this._success.classList.remove('success_visible');
    this._buttonForm.setAttribute('disabled', true);
  }

  setEventListeners() {
    super.setEventListeners();

    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitHandlerForm(this._getInputValues());
    });

    this._successButton.addEventListener('click', () => {
      this.close();
    });
  }
}
