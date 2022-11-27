// ------- ИМПОРТЫ -------

// ------- ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ -------
// ------- faq -------
const faq = document.querySelector('.faq');
const faqBtn = faq.querySelectorAll('.faq__question-button');

// ------- КОД -------

// ------- faq -------
faqBtn.forEach(btn => {
  btn.addEventListener('click', function handleClick(event) {
    const qblock = btn.closest('.faq__question-block')
    const faqAnswer = qblock.querySelector('.faq__question-text');
    btn.classList.toggle('faq__question-button_active');
    faqAnswer.classList.toggle('faq__question-text_active');
  });
});
