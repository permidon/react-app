import {formatDate} from 'helpers/date';

export const posts = [
  {
    id: 'post-1',
    title: 'Post 1',
    image: {
      src: 'http://tinyurl.com/ycqrjkq5',
      alt: 'First post image'
    },
    meta: {
      createdAt: formatDate('20171110'),
      likesCounter: 2
    }
  },
  {
    id: 'post-2',
    title: 'Post 2',
    txt: 'Лишь утратив всё до конца, мы обретаем свободу.',
    meta: {
      author: 'Tyler Durden ',
      likesCounter: 4
    }
  },
  {
    id: 'post-3',
    title: 'Post 3',
    image: {
      src: 'http://tinyurl.com/y7x3bkka'
    },
    txt: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris \
      nisi ut aliquip ex ea commodo consequat.',
    meta: {
      updatedAt: formatDate('20171111'),
      likesCounter: 1
    }
  },
];
