export default class SuccessStoryCard {
  constructor(data, cardSelector, elementTemplateSelector) {
    this._name = data.name;
    this._img = data.img;
    this._cardSelector = cardSelector;
    this._elementTemplateSelector = elementTemplateSelector;
    this._id = data.id;
    this._card = data;
    this._text = data.text;
    this._position = data.position;
  }

  _getElementCard() {
    // eslint-disable-next-line
    const elementTemplate = document.querySelector(this._elementTemplateSelector).content;
    const elementCard = elementTemplate.querySelector(this._cardSelector).cloneNode(true);

    return elementCard;
  }

  _getListOfParagraphs(elementText) {
    this._text.forEach((el) => {
      // eslint-disable-next-line no-undef
      const paragraph = document.createElement('li');
      paragraph.textContent = el;
      paragraph.classList.add('success-story-text__paragraph');
      elementText.append(paragraph);
    });
  }

  _setHiddenClass() {
    if (this._id === 0) this._elementTextContent.classList.remove('success-story-text__content_hidden');
  }

  _setEventListeners() {
    this._elementImg.addEventListener('click', (evt) => {
      // eslint-disable-next-line
      const target = evt.target;
      const container = target.parentNode;
      const id = container.getAttribute('id');
      // eslint-disable-next-line
      const textContentlist = document.querySelectorAll('.success-story-text__content');

      textContentlist.forEach((el) => {
        const elId = el.parentNode.getAttribute('id');

        if (elId === id) {
          el.classList.remove('success-story-text__content_hidden');
        } else {
          el.classList.add('success-story-text__content_hidden');
        }
      });
    });
  }

  generateElementCard() {
    this._element = this._getElementCard();
    this._elementImg = this._element.querySelector('.success-story-text__photo');
    this._elementTitle = this._element.querySelector('.success-story-title');
    this._elementSubtitle = this._element.querySelector('.success-story-subtitle');
    this._elementText = this._element.querySelector('.success-story-text__text');
    this._elementTextContent = this._element.querySelector('.success-story-text__content');

    this._element.setAttribute('id', this._id);
    this._elementImg.src = this._img;
    this._elementImg.alt = this._name;
    this._elementTitle.textContent = this._name;
    this._elementSubtitle.textContent = this._position;
    this._getListOfParagraphs(this._elementText);
    this._setHiddenClass();
    this._setEventListeners();

    return this._element;
  }
}
