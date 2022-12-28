// TODO
// - send cv button

export default class VacancyItem {
  constructor(data, selector, popupWithForm, vacanciesPopupShareFullCode, vacanciesPopupShareEmptyCode) {
    this._data = data;
    this._selector = selector;
    this._popupWithForm = popupWithForm;
    this._vacanciesPopupShareFullCode = vacanciesPopupShareFullCode;
    this._vacanciesPopupShareEmptyCode = vacanciesPopupShareEmptyCode;
    this._element = this._getElement();
    this._vacName = this._element.querySelector('.vacancies__name');
    this._vacDescription = this._element.querySelector('.vacancies__description');
    this._vacArrow = this._element.querySelector('.vacancies__gallery-arrow');
    this._salary = this._element.querySelector('.vacancies__salary');
    this._workTime = this._element.querySelector('.vacancies__work-time');
    this._shareBtn = this._element.querySelector('.vacancies__share-btn');
    this._vacGalWrap = this._element.querySelector('.vacancies__gallery-wrapper_share');
    this._vacPopupShare = this._vacGalWrap.querySelector('.vacancies__popup-share');
    this._sendCVBtn = this._element.querySelector('.vacancies__send-btn');
  }

  _getElement() {
    const elementTemplate = document.querySelector(this._selector).content;
    const elementCard = elementTemplate.querySelector('.vacancies__gallery-item').cloneNode(true);

    return elementCard;
  }

  // Метод копирования текста в буфер обмена
  _copy() {
    const url = document.location.href;
    navigator.clipboard.writeText(url);
  }

  // Событие при нажатии на конкретную вакансию
  _handleBtnClick() {
      const vacanciesDescriptionItems = document.querySelectorAll('.vacancies__description');
      const vacancieNameBtn = document.querySelectorAll('.vacancies__name');
      const vacGalleryArrows = document.querySelectorAll('.vacancies__gallery-arrow');
      
    if (this._vacName.classList.contains('vacancies__name_active')) {
      vacancieNameBtn.forEach((item) => item.classList.remove('vacancies__name_active'));
      vacGalleryArrows.forEach((item) => item.classList.remove('vacancies__gallery-arrow_active'));
      vacanciesDescriptionItems.forEach((item) => item.classList.remove('vacancies__description_active'));
    } else {
      vacancieNameBtn.forEach((item) => item.classList.remove('vacancies__name_active'));
      vacGalleryArrows.forEach((item) => item.classList.remove('vacancies__gallery-arrow_active'));
      vacanciesDescriptionItems.forEach((item) => item.classList.remove('vacancies__description_active'));
      this._vacName.classList.add('vacancies__name_active');
      this._vacArrow.classList.add('vacancies__gallery-arrow_active');
      this._vacDescription.classList.add('vacancies__description_active');
    }
  }

  // Событие при нажатии на кнопку "поделиться"
  _handleShareBtnClick() {
    const vacanciesShareBtns = document.querySelectorAll('.vacancies__share-btn'); 
  
    if (!this._shareBtn.classList.contains('vacancies__share-btn_active')) {
      vacanciesShareBtns.forEach((item) => item.classList.remove('vacancies__share-btn_active'));
      this._shareBtn.classList.add('vacancies__share-btn_active');
      if (!this._vacPopupShare.classList.contains('vacancies__popup-share_active')) {
        this._vacPopupShare.innerHTML = this._vacanciesPopupShareFullCode;
        const vacanciesCopyBtn = this._vacGalWrap.querySelector('.vacancies__popup-copy-icon');
        const vacanciesPopupLink = this._vacGalWrap.querySelector('.vacancies__popup-link');
        const handleCopyShareBtnClick = () => {
          vacanciesCopyBtn.classList.add('vacancies__popup-copy-icon_done');
          vacanciesPopupLink.classList.add('vacancies__popup-link_active');
          this._copy();
        };
        const vacanciesCopyLink = this._vacGalWrap.querySelector('#copyLink');
        vacanciesCopyLink.addEventListener('click', handleCopyShareBtnClick);
        this._vacPopupShare.classList.add('vacancies__popup-share_active');
        document.addEventListener('mousedown', (evt) => {
          if (!evt.target.classList.contains('vacancies__popup-share')
          && !evt.target.classList.contains('vacancies__popup-list')
          && !evt.target.classList.contains('vacancies__popup-link-wrapper')
          && !evt.target.classList.contains('vacancies__popup-copy-icon')
          && !evt.target.classList.contains('vacancies__popup-link')
          && !evt.target.classList.contains('vacancies__share-btn')) {
            vacanciesCopyLink.removeEventListener('click', handleCopyShareBtnClick);
            this._vacPopupShare.classList.remove('vacancies__popup-share_active');
            vacanciesCopyBtn.classList.remove('vacancies__popup-copy-icon_done');
            vacanciesPopupLink.classList.remove('vacancies__popup-link_active');
            this._shareBtn.classList.remove('vacancies__share-btn_active');
            this._vacPopupShare.innerHTML = this._vacanciesPopupShareEmptyCode;
          }
        });
      } else {
        this._shareBtn.classList.remove('vacancies__share-btn_active');
        this._vacPopupShare.innerHTML = this._vacanciesPopupShareEmptyCode;
      }
    } else {
      vacanciesShareBtns.forEach((item) => item.classList.remove('vacancies__share-btn_active'));
      this._vacPopupShare.classList.remove('vacancies__popup-share_active');
      this._vacPopupShare.innerHTML = this._vacanciesPopupShareEmptyCode;
    }
  
  }

  _setEventListeners() {
    this._vacName.addEventListener('click', () => this._handleBtnClick());
    this._shareBtn.addEventListener('click', () => this._handleShareBtnClick());
    this._sendCVBtn.addEventListener('click', () => this._popupWithForm.open());
    this._vacArrow.addEventListener('click', () => this._handleBtnClick());
  }

  generate() {
    this._vacName.textContent = this._data.name;
    this._vacName.id = this._data.id;

    this._salary.textContent = this._data.salary;
    
    this._workTime.textContent = this._data.time;

    const reqListUl = this._element.querySelector('.vacancies__req-list');
    const reqListLi = this._data.reqListItem;
    for(let i = 0; i < reqListLi.length; i++) {
      const newItem = document.createElement('li');
      newItem.textContent = reqListLi[i];
      newItem.classList.add('vacancies__req-item');
      reqListUl.appendChild(newItem);
    }

    const todoListUl = this._element.querySelector('.vacancies__todo-list');
    const todoListLi = this._data.todoListItem;
    for(let i = 0; i < todoListLi.length; i++) {
      const newItem = document.createElement('li');
      newItem.textContent = todoListLi[i];
      newItem.classList.add('vacancies__req-item');
      todoListUl.appendChild(newItem);
    }

    this._setEventListeners();

    return this._element;
  }
}
