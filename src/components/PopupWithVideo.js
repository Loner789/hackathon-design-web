import Popup from './Popup.js';

export default class PopupWithVideo extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._videoContainer = this._elementPopup.querySelector('.popup__container');
  }

  _getVideoId() {
    const regexp = /https:\/\/www\.youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/i;
    const match = this._video.match(regexp);

    return match[1];
  }

  // eslint-disable-next-line class-methods-use-this
  _generateURL(id) {
    const query = '?rel=0&showinfo=0&autoplay=1';

    return `https://www.youtube.com/embed/${id}${query}`;
  }

  _createIframe(id) {
    // eslint-disable-next-line no-undef
    const iframe = document.createElement('iframe');

    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('allow', 'autoplay');
    iframe.setAttribute('src', this._generateURL(id));
    iframe.classList.add('popup__video');

    return iframe;
  }

  _setupVideo() {
    const id = this._getVideoId();
    const iframe = this._createIframe(id);
    this._videoContainer.appendChild(iframe);
  }

  open(data) {
    super.open();
    this._video = data.video;
    this._setupVideo();
  }

  close() {
    super.close();
    const iframe = this._elementPopup.querySelector('.popup__video');
    this._videoContainer.removeChild(iframe);
  }
}
