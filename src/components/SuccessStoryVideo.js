export default class SuccessStoryVideo {
  constructor(data, cardSelector, elementTemplateSelector) {
    this._name = data.name;
    this._img = data.img;
    this._cardSelector = cardSelector;
    this._elementTemplateSelector = elementTemplateSelector;
    this._id = data._id;
    this._card = data;
    this._position = data.position;
    this._video = data.video;
  }

  _getElementCard() {
    // eslint-disable-next-line
    const elementTemplate = document.querySelector(this._elementTemplateSelector).content;
    const elementCard = elementTemplate.querySelector(this._cardSelector).cloneNode(true);

    return elementCard;
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
    iframe.classList.add('video-story__iframe');

    return iframe;
  }

  _setupVideo() {
    const id = this._getVideoId();

    this._elementVideo.addEventListener('click', () => {
      const iframe = this._createIframe(id);

      this._elementLinkVideo.remove();
      this._elementVideoButton.remove();
      this._elementVideo.appendChild(iframe);
    });

    this._elementLinkVideo.removeAttribute('href');
  }

  generateElementCard() {
    this._element = this._getElementCard();
    this._elementImg = this._element.querySelector('.video-story__image');
    this._elementTitle = this._element.querySelector('.success-story-title');
    this._elementSubtitle = this._element.querySelector('.success-story-subtitle');
    this._elementVideo = this._element.querySelector('.video-story');
    this._elementLinkVideo = this._element.querySelector('.video-story__link');
    this._elementVideoButton = this._element.querySelector('.video-button');

    this._elementImg.src = this._img;
    this._elementImg.alt = `Обложка видео ${this._name}`;
    this._elementTitle.textContent = this._name;
    this._elementSubtitle.textContent = this._position;
    this._elementLinkVideo.href = this._video;
    this._setupVideo();

    return this._element;
  }
}
