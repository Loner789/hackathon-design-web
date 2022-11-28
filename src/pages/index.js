import './index.scss';
import SuccessStoryCard from '../components/SuccessStoryCard';
import SuccessStoryVideo from '../components/SuccessStoryVideo';
import Section from '../components/Section';
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
