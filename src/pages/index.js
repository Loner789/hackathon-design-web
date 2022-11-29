/* eslint-disable no-undef */
import './index.scss';
import SuccessStoryCard from '../components/SuccessStoryCard';
import SuccessStoryVideo from '../components/SuccessStoryVideo';
import Section from '../components/Section';
import { successStoriesText, successStoriesVideo } from '../utils/initial-data';

/* const buttonArrowRight = document.querySelector('.button-arrow-right');
const buttonArrowLeft = document.querySelector('.button-arrow-left'); */

const createSuccessStoryCard = (data) => {
  const сardsList = new Section(
    {
      items: data,
      // eslint-disable-next-line arrow-parens
      renderer: item => {
        const elementCard = new SuccessStoryCard(item, '.success-story-text', '#template-success-story-text');
        return elementCard.generateElementCard();
      },
    },
    '.success-stories__text-list',
  );
  сardsList.renderItems();
  return сardsList;
};

createSuccessStoryCard(successStoriesText);

const createSuccessStoryVideo = (data) => {
  const videoList = new Section(
    {
      items: data,
      // eslint-disable-next-line arrow-parens
      renderer: item => {
        const elementVideo = new SuccessStoryVideo(item, '.success-story-video', '#template-success-story-video');
        return elementVideo.generateElementCard();
      },
    },
    '.success-stories__video-list',
  );
  videoList.renderItems();
  return videoList;
};

createSuccessStoryVideo(successStoriesVideo);

/* const addAnimationToImg = (nextCard) => {
  const img = nextCard.querySelector('.success-story-text__photo');
  if (!img.classList.contains('success-story-text__photo_animation')) {
    img.classList.add('success-story-text__photo_animation');
  }
}; */
/*
const handleClickOnArrowRight = () => {
  const visibleCard = document.querySelector('.success-story-text_visible');
  const currentId = Number(visibleCard.getAttribute('id'));
  const nextId = currentId + 1;
  const nextCard = document.getElementById(nextId);
  buttonArrowLeft.removeAttribute('disabled');
  addAnimationToImg(nextCard);

  if (nextId < successStoriesText.length) {
    visibleCard.classList.remove('success-story-text_visible');
    nextCard.classList.add('success-story-text_visible');
  }

  if (nextId === successStoriesText.length - 1) buttonArrowRight.setAttribute('disabled', true);
};

const handleClickOnArrowLeft = () => {
  const visibleCard = document.querySelector('.success-story-text_visible');
  const currentId = Number(visibleCard.getAttribute('id'));
  const nextId = currentId - 1;
  const nextCard = document.getElementById(nextId);
  buttonArrowRight.removeAttribute('disabled');
  addAnimationToImg(nextCard);

  if (nextId >= 0) {
    visibleCard.classList.remove('success-story-text_visible');
    nextCard.classList.add('success-story-text_visible');
  }

  if (nextId < 0) buttonArrowLeft.setAttribute('disabled', true);
};

buttonArrowRight.addEventListener('click', handleClickOnArrowRight);
buttonArrowLeft.addEventListener('click', handleClickOnArrowLeft); */
