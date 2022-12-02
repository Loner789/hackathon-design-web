// IMPORTS:
import flash from '../images/flash-img.svg';
import book from '../images/book-img.svg';
import lamp from '../images/lamp-img.svg';
import person from '../images/person-img.svg';
import lemova190w from '../images/block6-lemova-190w.png';
import ignatiev190w from '../images/block6-ignatiev-190w.png';
import chechenev190w from '../images/block6-chechenev-190w.png';
import khrustaleva190w from '../images/block6-khrustaleva-190w.png';
import sulman610w from '../images/block6-sulman-610w.png';
import krestenko610w from '../images/block6-krestenko-610w.png';
import khrustalevamobile from '../images/block6-khrustaleva-mobile.png';
import ignatievmobile from '../images/block6-ignatiev-mobile.png';
import lemovamobile from '../images/block6-lemova-mobile.png';

// INITIAL DATA ARRAYS:
// texts for changable title of learning section
const learningTitles = [
  'Делитесь своими знаниями',
  'Развивайте мягкие навыки',
  'Управляйте своим графиком',
  'Делайте жизни других лучше',
  'Увеличьте месячный доход',
];

// cards for scroller
const conditionsCards = [
  {
    title: 'Спокойный онбординг',
    image: flash,
    text: 'Объясняем устройство процесса и рассказываем о взаимодействии с учебной платформой. Предоставляем доступ к материалам и гайдам.',
  },
  {
    title: 'Обучение наставников',
    image: book,
    text: 'Школа наставников — двухнедельный интенсив, где вы знакомитесь с другими преподавателями и учитесь лучшим образовательным практикам.',
  },
  {
    title: 'Мотивированные студенты',
    image: lamp,
    text: 'Каждый студент практикума проходит объемный вводный урок, чтобы познакомиться с профессией и сделать осознанный выбор учебного курса.',
  },
  {
    title: 'Поддержка от команды',
    image: person,
    text: 'Большое и дружное комьюнити наставников, ревьюеров и преподавателей всегда поддержит и ответит на все вопросы.',
  },
];

/* success-stories */
const successStoriesText = [
  {
    id: 0,
    name: 'Таня Хрусталева',
    img: khrustaleva190w,
    position: 'наставница на дизайн-факультете',
    text: [
      'Наставничество помогает влиять на будущее индустрии, параллельно развивая собственные навыки, отлично прокачивая soft skills.',
      'Школа наставников готовит педагогов так, чтобы они сумели научить студентов работать самостоятельно, отправляя на рынок реальных специалистов. Отработка различных ситуаций, способных возникнуть в процессе преподавания очень помогает в дальнейшей работе.',
    ],
    imgMobile: khrustalevamobile,
  },
  {
    id: 1,
    name: 'Кирилл Игнатьев',
    img: ignatiev190w,
    position: 'наставник на бэкенд-факультете (Python)',
    text: [
      'Сейчас работаю в Фейсбуке, переезд закончил, так что появилось время для дополнительных активностей. Хорошо, что теперь не только сотрудникам Яндекса можно участвовать! Мне нравится помогать другим людям в обучении и развитии. До этого всегда был наставником 1х1, с группой еще не работал. Так что это следующий этап. Кроме того, всегда лучше понимаешь что-то, если объяснишь другому.',
    ],
    imgMobile: ignatievmobile,
  },
  {
    id: 2,
    name: 'Анастасия Лемова',
    img: lemova190w,
    position: 'наставница на дизайн-факультете',
    text: [
      'Для меня важно, чтобы работа имела смысл и приносила удовольствие. Сейчас я вижу свою реализацию не в создании, а в передаче опыта. Меня очень раздражали многие методы преподавания в университете и всегда казалось, что лучше по-другому, в работе я много училась, занималась на курсах и поняла как именно можно делать лучше. Яндекс.Практикум — возможность применить это в жизни.',
    ],
    imgMobile: lemovamobile,
  },
  {
    id: 3,
    name: 'Максим Чечёнев',
    img: chechenev190w,
    position: 'наставник на веб-факультете',
    text: [
      'У меня накопилось много опыта и знаний, которыми я хочу делиться с теми, кто только начинает изучать веб-разработку. Когда сам начинал учиться не было онлайн курсов, тем более площадок с наставниками. Было сложнее понять, что действительно важно и нужно, а что нет.',
      'Считаю, что делясь знаниями, делаю мир чуть лучше, ведь если кому-то они будут полезны — это прекрасно.',
    ],
  },
];

/* success-video */
const successStoriesVideo = [
  {
    id: 0,
    name: 'Дмитрий Сульман',
    img: sulman610w,
    position: 'наставник на факультете маркетинга',
    video: 'https://www.youtube.com/watch?v=COaXBeiKezw',
  },
  {
    id: 1,
    name: 'Толя Крестенко',
    img: krestenko610w,
    position: 'наставник на Data Science',
    video: 'https://www.youtube.com/watch?v=COaXBeiKezw',
  },
];

export {
  learningTitles,
  conditionsCards,
  successStoriesText,
  successStoriesVideo,
};
