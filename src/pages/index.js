/* eslint-disable no-undef */
import './index.scss';
import SuccessStoryCard from '../components/SuccessStoryCard';
import SuccessStoryVideo from '../components/SuccessStoryVideo';
import Section from '../components/Section';
import PopupWithVideo from '../components/PopupWithVideo';
import { successStoriesText, successStoriesVideo } from '../utils/initial-data';

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

const popupWithVideo = new PopupWithVideo('#video-popup');
popupWithVideo.setEventListeners();

const createSuccessStoryVideo = (data) => {
  const videoList = new Section(
    {
      items: data,
      // eslint-disable-next-line arrow-parens
      renderer: item => {
        const handleClickVideo = () => {
          popupWithVideo.open(item);
        };
        const elementVideo = new SuccessStoryVideo(item, '.success-story-video', '#template-success-story-video', handleClickVideo);
        return elementVideo.generateElementCard();
      },
    },
    '.success-stories__video-list',
  );
  videoList.renderItems();
  return videoList;
};

createSuccessStoryVideo(successStoriesVideo);
