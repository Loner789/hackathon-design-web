export default class VacancyItem {
  constructor(data, selector) {
    this._data = data;
    this._selector = selector;
    this._element = this._getElement();
    this._vacName = this._element.querySelector('.vacancies__name');
    this._vacDescription = this._element.querySelector('.vacancies__description');
    this._vacArrow = this._element.querySelector('.vacancies__gallery-arrow');
    this._salary = this._element.querySelector('.vacancies__salary');
    this._workTime = this._element.querySelector('.vacancies__work-time');
  }

  _getElement() {
    const elementTemplate = document.querySelector(this._selector).content;
    const elementCard = elementTemplate.querySelector('.vacancies__gallery-item').cloneNode(true);

    return elementCard;
  }

  _pushBtn() {
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

  _setEventListeners() {
    this._vacName.addEventListener('click', () => {this._pushBtn()});
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
