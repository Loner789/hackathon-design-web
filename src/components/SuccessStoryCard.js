export default class SuccessStoryCard {
  constructor(data, cardSelector, elementTemplateSelector, personList) {
    this._name = data.name;
    this._img = data.img;
    this._cardSelector = cardSelector;
    this._elementTemplateSelector = elementTemplateSelector;
    this._id = data.id;
    this._card = data;
    this._text = data.text;
    this._position = data.position;
    this._imgMobile = data.imgMobile;
    this._textContentMobile = document.querySelector('.success-story-mobile');
    this._titleMobile = this._textContentMobile.querySelector('.success-story-title');
    this._subTitleMobile = this._textContentMobile.querySelector('.success-story-subtitle');
    this._textMobile = this._textContentMobile.querySelector('.success-story-mobile__text');
    this._data = personList;
  }

  _getElementCard() {
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
    if (this._id === 0) {
      this._elementTextContent.classList.remove('success-story-text__content_hidden');
      this._bottomLine.classList.remove('success-story-text__bottom-line_hidden');
    }
  }

  _setEventListeners() {
    this._elementImg.addEventListener('click', (evt) => {
      // eslint-disable-next-line
      const target = evt.target;
      const container = target.parentNode;
      const id = container.getAttribute('id');
      const textContentList = document.querySelectorAll('.success-story-text__content');

      textContentList.forEach((el) => {
        // eslint-disable-next-line no-shadow
        const container = el.parentNode;
        const elId = container.getAttribute('id');
        const bottomLine = container.querySelector('.success-story-text__bottom-line');

        if (elId === id) {
          el.classList.remove('success-story-text__content_hidden');
          bottomLine.classList.remove('success-story-text__bottom-line_hidden');
        //  container.classList.add('success-story-text_border');
        } else {
          el.classList.add('success-story-text__content_hidden');
          bottomLine.classList.add('success-story-text__bottom-line_hidden');
        }
      });
    });

    if (document.documentElement.clientWidth <= 1010) {
      this._elementImg.addEventListener('click', (evt) => {
        // eslint-disable-next-line
        const target = evt.target;
        if (target.closest('.success-story-text__photo_mobile')) return;
        const currentImg = document.querySelector('.success-story-text__photo_mobile');
        const currentPerson = currentImg.alt;

        target.classList.add('success-story-text__photo_mobile');
        currentImg.classList.remove('success-story-text__photo_mobile');
        this._elementImg.src = this._imgMobile;
        this._elementImg.alt = this._name;
        this._titleMobile.textContent = this._name;
        this._subTitleMobile.textContent = this._position;
        this._textMobile.textContent = '';
        this._text.forEach((el) => {
          const paragraph = document.createElement('li');
          paragraph.textContent = el;
          this._textMobile.append(paragraph);
        });
        this._data.forEach((el) => {
          if (currentPerson === el.name) {
            currentImg.src = el.img;
          }
        });
      });
    }
  }

  generateElementCard() {
    this._element = this._getElementCard();
    this._elementImg = this._element.querySelector('.success-story-text__photo');
    this._elementTitle = this._element.querySelector('.success-story-title');
    this._elementSubtitle = this._element.querySelector('.success-story-subtitle');
    this._elementText = this._element.querySelector('.success-story-text__text');
    this._elementTextContent = this._element.querySelector('.success-story-text__content');
    this._bottomLine = this._element.querySelector('.success-story-text__bottom-line');

    this._element.setAttribute('id', this._id);
    this._elementImg.src = this._img;
    this._elementImg.alt = this._name;
    this._elementTitle.textContent = this._name;
    this._elementSubtitle.textContent = this._position;
    this._getListOfParagraphs(this._elementText);
    this._setHiddenClass();
    this._setEventListeners();

    if (document.documentElement.clientWidth <= 1010) {
      if (!this._imgMobile) this._element.classList.add('success-story-text_hidden');
      if (this._id === 0) {
        this._elementImg.classList.add('success-story-text__photo_mobile');
        this._elementImg.src = this._imgMobile;
        this._elementImg.alt = this._name;
        this._titleMobile.textContent = this._name;
        this._subTitleMobile.textContent = this._position;
        this._getListOfParagraphs(this._textMobile);
      }
    }

    return this._element;
  }
}
