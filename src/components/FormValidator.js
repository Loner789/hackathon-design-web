export default class FormValidator {
  constructor(config, formSelector) {
    this._formSelector = formSelector;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    /* ToDo: check linter */
    this._formElement = document.querySelector(this._formSelector);
    this._inputsList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
  }

  _getInputElementError(inputElement) {
    return this._formElement.querySelector(`.form__${inputElement.id}-error`);
  }

  _showInputError(inputElement) {
    inputElement.classList.add(this._inputErrorClass);
    this._inputElement.textContent = inputElement.validationMessage;
    this._inputElement.classList.add(this._errorClass);
  }

  _hideInputError(inputElement) {
    inputElement.classList.remove(this._inputErrorClass);
    this._inputElement.classList.remove(this._errorClass);
    this._inputElement.textContent = '';
  }

  _isValid(inputElement) {
    this._inputElement = this._getInputElementError(inputElement);

    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _hideError(inputElement) {
    this._getInputElementError(inputElement).textContent = '';
  }

  _resetInputForm() {
    if (this._formElement) {
      this._formElement.reset();
      this._inputsList.forEach((inputElement) => {
        inputElement.classList.remove(this._inputErrorClass);
      });
    }
  }

  _setEventListenersToInputs() {
    this._inputsList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._isValid(inputElement);
        this._toggleButtonState();
      });
    });
  }

  _hasInvalidInput() {
    return this._inputsList.some((inputElement) => !inputElement.validity.valid);
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._buttonElement.classList.add(this._inactiveButtonClass);
      this._buttonElement.setAttribute('disabled', 'disabled');
    } else {
      this._buttonElement.classList.remove(this._inactiveButtonClass);
      this._buttonElement.removeAttribute('disabled');
    }
  }

  resetValidation() {
    this._toggleButtonState();
    this._inputsList.forEach((inputElement) => {
      this._hideError(inputElement);
      inputElement.classList.remove(this._inputErrorClass);
    });
  }

  enableValidation() {
    this._setEventListenersToInputs();
  }
}
