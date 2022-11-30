// ------- ИМПОРТЫ -------

// ------- ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ -------
// ------- faq -------
const faq = document.querySelector('.faq');
const faqBtn = faq.querySelectorAll('.faq__question-button');
const faqAnswers = faq.querySelectorAll('.faq__question-text');
const faqQuestions = faq.querySelectorAll('.faq__question-text-main');

// ------- КОД -------

// ------- faq -------
faqBtn.forEach(btn => {
  btn.addEventListener('click', function handleClick() {
    const qblock = btn.closest('.faq__question-block')
    const faqAnswer = qblock.querySelector('.faq__question-text');
    const faqCloseBtn = qblock.querySelector('.faq__question-button');

    if (faqCloseBtn.classList.contains('faq__question-button_active')) {
      faqAnswers.forEach((item) => item.classList.remove('faq__question-text_active'));
      faqBtn.forEach((item) => item.classList.remove('faq__question-button_active'));
    } else {
      faqAnswers.forEach((item) => item.classList.remove('faq__question-text_active'));
      faqBtn.forEach((item) => item.classList.remove('faq__question-button_active'));
      faqAnswer.classList.add('faq__question-text_active');
      faqCloseBtn.classList.add('faq__question-button_active');
    }
  });
});

faqQuestions.forEach(btn => {
  btn.addEventListener('click', function handleClick() {
    const qblock = btn.closest('.faq__question-block')
    const faqAnswer = qblock.querySelector('.faq__question-text');
    const faqCloseBtn = qblock.querySelector('.faq__question-button');

    if (faqCloseBtn.classList.contains('faq__question-button_active')) {
      faqAnswers.forEach((item) => item.classList.remove('faq__question-text_active'));
      faqBtn.forEach((item) => item.classList.remove('faq__question-button_active'));
    } else {
      faqAnswers.forEach((item) => item.classList.remove('faq__question-text_active'));
      faqBtn.forEach((item) => item.classList.remove('faq__question-button_active'));
      faqAnswer.classList.add('faq__question-text_active');
      faqCloseBtn.classList.add('faq__question-button_active');
    }
  });
});