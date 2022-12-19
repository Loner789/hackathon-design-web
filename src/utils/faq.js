import FaqItem from '../components/FaqItem';

const generateFaq = (card) => new FaqItem(card, '#template-faq').generate();

export {
    generateFaq,
}
