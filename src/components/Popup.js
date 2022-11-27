export default class Popup {
  constructor(popupSelector) {
    this._elementPopup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  _handleEscClose = (evt) => {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  open() {
    this._elementPopup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._elementPopup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  setEventListeners() {
    this._elementPopup.addEventListener('click', evt => {
      if (evt.target.classList.contains('popup_opened')) {
        this.close();
      }
      if (evt.target.classList.contains('button-close')) {
        this.close();
      }
    });
  }
}
