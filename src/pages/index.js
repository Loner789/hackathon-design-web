import './index.css';
import Typed from 'typed.js';
import { learningSubtitles } from '../utils/initial-data';

// eslint-disable-next-line no-unused-vars
const typed = new Typed('.learning__title-span', {
  strings: learningSubtitles,
  typeSpeed: 80,
  backSpeed: 40,
  loop: true,
  backDelay: 1000,
});
