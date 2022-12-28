import {
  successStoryMobileSelector,
  successStoryTitleSelector,
  successStorySubtitleSelector,
  successStoryMobileTextSelector,
  successStoryTextParagraphClass,
  successStoryTextContentHiddenClass,
  successStoryTextBottomLineHiddenClass,
  successStoryTextPhotoMobileClass,
  successStoryTextHiddenClass,
  successStoryTextContentSelector,
  successStoryTextBottomLineSelector,
  successStoryTextPhotoSelector,
  successStoryTextTextSelector,
} from '../utils/constants';

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
    this._textContentMobile = document.querySelector(successStoryMobileSelector);
    this._titleMobile = this._textContentMobile.querySelector(successStoryTitleSelector);
    this._subTitleMobile = this._textContentMobile.querySelector(successStorySubtitleSelector);
    this._textMobile = this._textContentMobile.querySelector(successStoryMobileTextSelector);
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
      paragraph.classList.add(successStoryTextParagraphClass);
      elementText.append(paragraph);
    });
  }

  _setHiddenClass() {
    if (this._id === 0) {
      this._elementTextContent.classList.remove(successStoryTextContentHiddenClass);
      this._bottomLine.classList.remove(successStoryTextBottomLineHiddenClass);
    }
  }

  _addMobileContent() {
    const listImg = document.querySelectorAll(`.${successStoryTextPhotoMobileClass}`);

    if (!this._imgMobile) this._element.classList.add(successStoryTextHiddenClass);
    if (this._id === 0 && listImg.length === 0) {
      this._elementImg.classList.add(successStoryTextPhotoMobileClass);
      this._elementImg.src = this._imgMobile;
      this._elementImg.alt = this._name;
      this._titleMobile.textContent = this._name;
      this._subTitleMobile.textContent = this._position;
      this._textMobile.textContent = '';
      this._getListOfParagraphs(this._textMobile);
    }
  }

  // eslint-disable-next-line class-methods-use-this
  _addCardDesktop() {
    const cardList = document.querySelectorAll(`.${successStoryTextHiddenClass}`);
    const mobilePhoto = this._element.querySelector(`.${successStoryTextPhotoMobileClass}`);

    cardList.forEach((el) => {
      el.classList.remove(successStoryTextHiddenClass);
    });
    if (mobilePhoto) mobilePhoto.classList.remove(successStoryTextPhotoMobileClass);
  }

  _setEventListeners() {
    this._elementImg.addEventListener('click', (evt) => {
      if (window.innerWidth <= 1010) {
        // eslint-disable-next-line
        const target = evt.target;
        if (target.closest(`.${successStoryTextPhotoMobileClass}`)) return;
        const currentImg = document.querySelector(`.${successStoryTextPhotoMobileClass}`);
        if (!currentImg) return;
        const currentPerson = currentImg.alt;

        target.classList.add(successStoryTextPhotoMobileClass);
        currentImg.classList.remove(successStoryTextPhotoMobileClass);
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
      } else {
        // eslint-disable-next-line
        const target = evt.target;
        const container = target.parentNode;
        const id = container.getAttribute('id');
        const textContentList = document.querySelectorAll(successStoryTextContentSelector);

        textContentList.forEach((el) => {
          // eslint-disable-next-line no-shadow
          const container = el.parentNode;
          const elId = container.getAttribute('id');
          const bottomLine = container.querySelector(successStoryTextBottomLineSelector);

          if (elId === id) {
            el.classList.remove(successStoryTextContentHiddenClass);
            bottomLine.classList.remove(successStoryTextBottomLineHiddenClass);
          } else {
            el.classList.add(successStoryTextContentHiddenClass);
            bottomLine.classList.add(successStoryTextBottomLineHiddenClass);
          }
        });
      }
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth <= 1010) {
        this._addMobileContent();
      } else {
        this._elementImg.src = this._img;
        this._addCardDesktop();
      }
    });
  }

  generateElementCard() {
    this._element = this._getElementCard();
    this._elementImg = this._element.querySelector(successStoryTextPhotoSelector);
    this._elementTitle = this._element.querySelector(successStoryTitleSelector);
    this._elementSubtitle = this._element.querySelector(successStorySubtitleSelector);
    this._elementText = this._element.querySelector(successStoryTextTextSelector);
    this._elementTextContent = this._element.querySelector(successStoryTextContentSelector);
    this._bottomLine = this._element.querySelector(successStoryTextBottomLineSelector);

    this._element.setAttribute('id', this._id);
    this._elementImg.src = this._img;
    this._elementImg.alt = this._name;
    this._elementTitle.textContent = this._name;
    this._elementSubtitle.textContent = this._position;
    this._getListOfParagraphs(this._elementText);
    this._setHiddenClass();
    this._setEventListeners();

    if (document.documentElement.clientWidth <= 1010) {
      this._addMobileContent();
    } else {
      this._elementImg.src = this._img;
      this._addCardDesktop();
    }

    return this._element;
  }
}
