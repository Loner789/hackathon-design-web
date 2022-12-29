import { buttonCloseClass, popupOpenedClass } from '../utils/constants';

export default class Popup {
  constructor(popupSelector) {
    this._elementPopup = document.querySelector(popupSelector);
    this._buttonClose = this._elementPopup.querySelector(`.${buttonCloseClass}`);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  // eslint-disable-next-line
  _handleEscClose = (evt) => {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  open() {
    this._elementPopup.classList.add(popupOpenedClass);
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._elementPopup.classList.remove(popupOpenedClass);
    document.removeEventListener('keydown', this._handleEscClose);
  }

  setEventListeners() {
    this._elementPopup.addEventListener('click', evt => {
      if (evt.target.classList.contains(popupOpenedClass)) {
        this.close();
      }
      if (evt.target.classList.contains(buttonCloseClass)) {
        this.close();
      }
    });

    this._buttonClose.addEventListener('click', () => {
      this.close();
    });
  }
}
