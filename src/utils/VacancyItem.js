export default class VacancyItem {
  constructor(data, selector) {
    this._data = data;
    this._selector = selector;

    this._toggleSize = this._toggleSize.bind(this);
  }

  _getElement() {
    this._element = document
      .querySelector(this._selector)
      .content
      .querySelector('.vacancies__gallery-item')
      .cloneNode(true);
  }

  _toggleSize() {
    this._element.classList.toggle('project_extended');
  }

  _setEventListeners() {
    const sizeButton = this._element.querySelector('.project__btn-extend');
    sizeButton.addEventListener('click', this._toggleSize);
  }

  generate() {
    this._getElement();
    this._setEventListeners();

    const name = this._element.querySelector('.vacancies__name');
    name.textContent = this._data.name;
    name.id = this._data.id;

    const salary = this._element.querySelector('.vacancies__salary');
    salary.textContent = this._data.salary;

    const workTime = this._element.querySelector('.vacancies__work-time');
    workTime.textContent = this._data.time;

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

    return this._element;
  }
}
