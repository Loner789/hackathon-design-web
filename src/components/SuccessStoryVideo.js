import {
  videoStoryImageSelector,
  successStoryTitleSelector,
  successStorySubtitleSelector,
  videoStorySelector,
  videoStoryLinkSelector,
  videoButtonSelector,
} from '../utils/constants';

export default class SuccessStoryVideo {
  constructor(data, cardSelector, elementTemplateSelector, handleClickVideo) {
    this._name = data.name;
    this._img = data.img;
    this._cardSelector = cardSelector;
    this._elementTemplateSelector = elementTemplateSelector;
    this._id = data._id;
    this._card = data;
    this._position = data.position;
    this._video = data.video;
    this._handleClickVideo = handleClickVideo;
  }

  _getElementCard() {
    // eslint-disable-next-line
    const elementTemplate = document.querySelector(this._elementTemplateSelector).content;
    const elementCard = elementTemplate.querySelector(this._cardSelector).cloneNode(true);

    return elementCard;
  }

  _setEventLesteners() {
    this._elementVideo.addEventListener('click', () => {
      this._handleClickVideo();
      this._elementLinkVideo.removeAttribute('href');
    });
  }

  generateElementCard() {
    this._element = this._getElementCard();
    this._elementImg = this._element.querySelector(videoStoryImageSelector);
    this._elementTitle = this._element.querySelector(successStoryTitleSelector);
    this._elementSubtitle = this._element.querySelector(successStorySubtitleSelector);
    this._elementVideo = this._element.querySelector(videoStorySelector);
    this._elementLinkVideo = this._element.querySelector(videoStoryLinkSelector);
    this._elementVideoButton = this._element.querySelector(videoButtonSelector);

    this._elementImg.src = this._img;
    this._elementImg.alt = `Обложка видео ${this._name}`;
    this._elementTitle.textContent = this._name;
    this._elementSubtitle.textContent = this._position;
    this._elementLinkVideo.href = this._video;
    this._setEventLesteners();

    return this._element;
  }
}
