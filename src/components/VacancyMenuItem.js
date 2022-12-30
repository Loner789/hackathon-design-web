export default class VacancyMenuItem {
    constructor(data, selector, renderElementsToDOM, generateProph, generateVacancy, vacanciesProphMenuData, vacanciesProphData) {
      this._data = data;
      this._id = this._data.id;
      this._selector = selector;
      this._renderElementsToDOM = renderElementsToDOM;
      this._generateProph = generateProph;
      this._generateVacancy = generateVacancy;
      this._vacanciesProphMenuData = vacanciesProphMenuData;
      this._vacanciesProphData = vacanciesProphData;
      this._element = this._getElement();
      this._itemName = this._element.querySelector('.vacancies__btn-menu');
      this._menuArrow = this._element.querySelector('.vacancies__btn-menu-arrow');
    }
  
    _getElement() {
      const elementTemplate = document.querySelector(this._selector).content;
      const elementCard = elementTemplate.querySelector('.vacancies__menu-item').cloneNode(true);
  
      return elementCard;
    }
  
    // Рендер исходных данных вакансии конкретной специальности
    _setActiveClass() {
      const vacanciesProphMenu = document.querySelector('.vacancies__prophecy-menu');
      const vacancieSenseyGallary = document.querySelector('#sensey-gallary');

      if (this._id === 'programming') {
        this._itemName.classList.add('vacancies__btn-menu_active');
        this._element.classList.add('vacancies__menu-item_visible');
        this._renderElementsToDOM(this._vacanciesProphMenuData, vacanciesProphMenu, this._generateProph)
        const index = this._vacanciesProphData.findIndex(item => item.id === this._id);
        this._renderElementsToDOM(this._vacanciesProphData[index].data.sensey.data, vacancieSenseyGallary, this._generateVacancy)
      }
    }

    // Событие при нажатии на стрелку специальности на экране 320px
    _handleMenuArrowClick() {
      const vacanciesMenuItems = vacancies.querySelectorAll('.vacancies__menu-item');
      const vacanciesEduMenu = vacancies.querySelector('.vacancies__education-menu');
      const vacanciesBtnMenuArrows = vacancies.querySelectorAll('.vacancies__btn-menu-arrow');

      vacanciesMenuItems.forEach((item) => item.classList.add('vacancies__menu-item_visible'));
      vacanciesEduMenu.classList.add('vacancies__education-menu_active');
      vacanciesBtnMenuArrows.forEach((item) => item.classList.add('vacancies__btn-menu-arrow_hidden'));
    }

    // Событие при нажатии на конкретную специальность
    _handleBtnClick(evt) {
      const target = evt.target;
      const id = target.id;
      const index = this._vacanciesProphData.findIndex(item => item.id === id);
      const vacancies = document.querySelector('.vacancies');
      const vacancieSenseyGallary = vacancies.querySelector('#sensey-gallary');
      const vacSenseyItems = vacancieSenseyGallary.querySelectorAll('.vacancies__gallery-item');
      const vacancieReviewerGallary = vacancies.querySelector('#reviewer-gallary');
      const vacReviewerItems =vacancieReviewerGallary.querySelectorAll('.vacancies__gallery-item');
      const vacanciesNoVac = vacancies.querySelector('#no-vac-available');
      const vacanciesNotFound = vacancies.querySelector('#vac-notfound');
      const vacancieEduItems = vacancies.querySelectorAll('.vacancies__btn-menu');
      const vacanciesMenuItems = vacancies.querySelectorAll('.vacancies__menu-item');
      const vacanciesGallaries = vacancies.querySelectorAll('.vacancies__gallery');
      const vacanciesEduMenu = vacancies.querySelector('.vacancies__education-menu');
      const vacancieProphItems = vacancies.querySelectorAll('.vacancies__proph-btn-menu');
      const vacanciesDescriptionItems = vacancies.querySelectorAll('.vacancies__description');
      const vacancieNameBtn = vacancies.querySelectorAll('.vacancies__name');
      const vacGalleryArrows = vacancies.querySelectorAll('.vacancies__gallery-arrow');
      const vacanciesBtnMenuArrows = vacancies.querySelectorAll('.vacancies__btn-menu-arrow');

      // Удаление активных классов специальностей, ролей и данных специальности
      vacancieEduItems.forEach((item) => item.classList.remove('vacancies__btn-menu_active'));
      vacanciesMenuItems.forEach((item) => item.classList.remove('vacancies__menu-item_visible'));
      vacanciesGallaries.forEach((item) => item.classList.remove('vacancies__gallery_active'));
      // vacanciesEduMenu.classList.remove('vacancies__education-menu_active');
      vacancieProphItems.forEach((item) => item.classList.remove('vacancies__proph-btn-menu_active'));
      vacanciesDescriptionItems.forEach((item) => item.classList.remove('vacancies__description_active'));
      vacancieNameBtn.forEach((item) => item.classList.remove('vacancies__name_active'));
      vacGalleryArrows.forEach((item) => item.classList.remove('vacancies__gallery-arrow_active'));
      vacanciesNoVac.classList.remove('vacancies__novac-wrapper_active');
      vacanciesNotFound.classList.add('vacancies__gallery-wrapper_hide');

      // Добавление активных классов выбранной специальности
      this._itemName.classList.add('vacancies__btn-menu_active');
      this._element.classList.add('vacancies__menu-item_visible');
      vacancieSenseyGallary.classList.add('vacancies__gallery_active');       
      
      // Добавление активного класса роли наставника
      const vacanciesProphMenu = vacancies.querySelector('.vacancies__prophecy-menu');
      const vacancieProphSensey = vacanciesProphMenu.querySelector('#sensey');
      vacancieProphSensey.classList.add('vacancies__proph-btn-menu_active');

      // Удаление прежних данных рендера
      vacSenseyItems.forEach((item) => item.remove());
      vacReviewerItems.forEach((item) => item.remove());

      // Проверка наличия вакансий по специальности по каждой роли
      // Рендер данных вакансии конкретной специальности
      if (this._vacanciesProphData[index].data.sensey.data.length > 1) {
        this._renderElementsToDOM(this._vacanciesProphData[index].data.sensey.data, vacancieSenseyGallary, this._generateVacancy);
        vacanciesNotFound.classList.remove('vacancies__gallery-wrapper_hide');
        } else {
        if (this._vacanciesProphData[index].data.reviewer.data.length > 1) {
          this._renderElementsToDOM(this._vacanciesProphData[index].data.reviewer.data, vacancieReviewerGallary, this._generateVacancy);
          vacanciesNotFound.classList.remove('vacancies__gallery-wrapper_hide');
        } else {
          vacanciesNoVac.classList.add('vacancies__novac-wrapper_active');
          vacanciesNotFound.classList.add('vacancies__gallery-wrapper_hide');
        }
      }

      if (document.documentElement.clientWidth <= 530) {
        if (!vacanciesEduMenu.classList.contains('vacancies__education-menu_active')) {
          vacanciesEduMenu.classList.add('vacancies__education-menu_active');
          vacanciesMenuItems.forEach((item) => item.classList.add('vacancies__menu-item_visible'));
          vacanciesBtnMenuArrows.forEach((item) => item.classList.add('vacancies__btn-menu-arrow_hidden'));
        } else {
          vacanciesEduMenu.classList.remove('vacancies__education-menu_active');
          vacanciesMenuItems.forEach((item) => item.classList.remove('vacancies__menu-item_visible'));
          this._element.classList.add('vacancies__menu-item_visible');
          vacanciesBtnMenuArrows.forEach((item) => item.classList.remove('vacancies__btn-menu-arrow_hidden'));
        }
      }
    }
  
    _setEventListeners() {
      this._itemName.addEventListener('click', (evt) => this._handleBtnClick(evt));
      this._menuArrow.addEventListener('click', () => this._handleMenuArrowClick());
    }
  
    generate() {
      this._itemName.textContent = this._data.name;
      this._itemName.id = this._data.id;
    
      this._setActiveClass();
      this._setEventListeners();
  
      return this._element;
    }
  }
  