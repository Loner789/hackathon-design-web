export default class VacancyProphItem {
    constructor(data, selector, renderElementsToDOM, generateVacancy, vacanciesProphData) {
      this._data = data;
      this._id = this._data.id;
      this._selector = selector;
      this._renderElementsToDOM = renderElementsToDOM;
      this._generateVacancy = generateVacancy;
      this._vacanciesProphData = vacanciesProphData;
      this._element = this._getElement();
      this._itemName = this._element.querySelector('.vacancies__proph-btn-menu');
    }
  
    _getElement() {
      const elementTemplate = document.querySelector(this._selector).content;
      const elementCard = elementTemplate.querySelector('.vacancies__prophecy-item').cloneNode(true);
  
      return elementCard;
    }
  
    // Рендер исходных данных вакансии конкретной специальности
    _setActiveClass() {
      if (this._id === 'sensey') {
        this._itemName.classList.add('vacancies__proph-btn-menu_active');
      }
    }
  
    _handleBtnClick(evt) {
      const target = evt.target;
      const prophId = target.id;
      const vacancies = document.querySelector('.vacancies');
      const activeSpeciality = vacancies.querySelector('.vacancies__btn-menu_active');
      const actId = activeSpeciality.id;
      const index = this._vacanciesProphData.findIndex(item => item.id === actId);
      const vacanciesGallaries = vacancies.querySelectorAll('.vacancies__gallery');
      const vacancieProphItems = vacancies.querySelectorAll('.vacancies__proph-btn-menu');
      const vacanciesDescriptionItems = vacancies.querySelectorAll('.vacancies__description');
      const vacancieNameBtn = vacancies.querySelectorAll('.vacancies__name');
      const vacGalleryArrows = vacancies.querySelectorAll('.vacancies__gallery-arrow');
      const vacancieSenseyGallary = vacancies.querySelector('#sensey-gallary');
      const vacSenseyItems = vacancieSenseyGallary.querySelectorAll('.vacancies__gallery-item');
      const vacancieReviewerGallary = vacancies.querySelector('#reviewer-gallary');
      const vacReviewerItems =vacancieReviewerGallary.querySelectorAll('.vacancies__gallery-item');
      const vacanciesNoVac = vacancies.querySelector('#no-vac-available');
      const vacanciesNotFound = vacancies.querySelector('#vac-notfound');

      // Удаление активных классов специальностей, ролей и данных специальности
      vacancieProphItems.forEach((item) => item.classList.remove('vacancies__proph-btn-menu_active'));
      vacanciesGallaries.forEach((item) => item.classList.remove('vacancies__gallery_active'));
      vacanciesDescriptionItems.forEach((item) => item.classList.remove('vacancies__description_active'));
      vacancieNameBtn.forEach((item) => item.classList.remove('vacancies__name_active'));
      vacGalleryArrows.forEach((item) => item.classList.remove('vacancies__gallery-arrow_active'));

      // Добавление активного класса роли
      this._itemName.classList.add('vacancies__proph-btn-menu_active');
    
      // Удаление прежних данных рендера
      vacSenseyItems.forEach((item) => item.remove());
      vacReviewerItems.forEach((item) => item.remove());

      // Проверка наличия вакансий по специальности по каждой роли
      // Рендер данных вакансии конкретной специальности и роли
      if (prophId === 'sensey') {
        if (this._vacanciesProphData[index].data.sensey.data.length > 1) {
          this._renderElementsToDOM(this._vacanciesProphData[index].data.sensey.data, vacancieSenseyGallary, this._generateVacancy);
          vacancieSenseyGallary.classList.add('vacancies__gallery_active');  
          vacanciesNotFound.classList.remove('vacancies__gallery-wrapper_hide');
        } else {
          vacanciesNoVac.classList.add('vacancies__novac-wrapper_active');
          vacanciesNotFound.classList.add('vacancies__gallery-wrapper_hide');
        }
      } else {
        if (this._vacanciesProphData[index].data.reviewer.data.length > 1) {
          this._renderElementsToDOM(this._vacanciesProphData[index].data.reviewer.data, vacancieReviewerGallary, this._generateVacancy);
          vacancieReviewerGallary.classList.add('vacancies__gallery_active'); 
          vacanciesNotFound.classList.remove('vacancies__gallery-wrapper_hide');
        } else {
          vacanciesNoVac.classList.add('vacancies__novac-wrapper_active');
          vacanciesNotFound.classList.add('vacancies__gallery-wrapper_hide');
        }
      }
    }
  
    _setEventListeners() {
      this._itemName.addEventListener('click', (evt) => this._handleBtnClick(evt));
    }
  
    generate() {
      this._itemName.textContent = this._data.name;
      this._itemName.id = this._data.id;
    
      this._setActiveClass();
      this._setEventListeners();
  
      return this._element;
    }
  }
  