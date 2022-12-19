export default class FaqItem {
    constructor(data, selector) {
      this._data = data;
      this._selector = selector;
      this._element = this._getElement();
      this._question = this._element.querySelector('.faq__question-text-main');
      this._answer = this._element.querySelector('.faq__question-text');
      this._btn = this._element.querySelector('.faq__question-button');
    }
  
    _getElement() {
      const elementTemplate = document.querySelector(this._selector).content;
      const elementCard = elementTemplate.querySelector('.faq__question-block').cloneNode(true);
      return elementCard;
    }
  
    _handleBtnClick() {
      const faq = document.querySelector('.faq');
      const faqAnswers = faq.querySelectorAll('.faq__question-text');
      const faqBtns = faq.querySelectorAll('.faq__question-button');

      if (this._btn.classList.contains('faq__question-button_active')) {
        faqAnswers.forEach((item) => item.classList.remove('faq__question-text_active'));
        faqBtns.forEach((item) => item.classList.remove('faq__question-button_active'));
      } else {
        faqAnswers.forEach((item) => item.classList.remove('faq__question-text_active'));
        faqBtns.forEach((item) => item.classList.remove('faq__question-button_active'));
        this._answer.classList.add('faq__question-text_active');
        this._btn.classList.add('faq__question-button_active');
      }
    }
  
    _setEventListeners() {
      this._btn.addEventListener('click', () => this._handleBtnClick());
      this._question.addEventListener('click', () => this._handleBtnClick());
    }
  
    generate() {
      this._question.textContent = this._data.question;
      this._answer.textContent = this._data.answer;
    
      this._setEventListeners();
  
      return this._element;
    }
  }
  