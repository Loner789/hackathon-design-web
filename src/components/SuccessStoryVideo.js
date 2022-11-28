export default class SuccessStoryVideo {
  constructor(data, cardSelector, elementTemplateSelector) {
    this._name = data.name;
    this._img = data.img;
    this._cardSelector = cardSelector;
    this._elementTemplateSelector = elementTemplateSelector;
    this._id = data._id;
    this._card = data;
    this._position = data.position;
  }

  _getElementCard() {
    // eslint-disable-next-line
    const elementTemplate = document.querySelector(this._elementTemplateSelector).content;
    const elementCard = elementTemplate.querySelector(this._cardSelector).cloneNode(true);

    return elementCard;
  }

  generateElementCard() {
    this._element = this._getElementCard();
    this._elementImg = this._element.querySelector('.video-story__image');
    this._elementTitle = this._element.querySelector('.success-story-title');
    this._elementSubtitle = this._element.querySelector('.success-story-subtitle');

    this._elementImg.src = this._img;
    this._elementImg.alt = `Обложка видео ${this._name}`;
    this._elementTitle.textContent = this._name;
    this._elementSubtitle.textContent = this._position;

    return this._element;
  }
}
