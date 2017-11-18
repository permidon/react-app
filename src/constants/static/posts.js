import {formatDate} from 'helpers/date';

export const posts = [
  {
    id: 'post-1',
    title: 'Post 1',
    image: {
      src: 'https://orig00.deviantart.net/5073/f/2009/220/c/e/spongebob_7_150x150_png_by_somemilk.png',
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
      src: 'https://orig00.deviantart.net/1d75/f/2009/220/b/0/spongebob_4_150x150_png_by_somemilk.png'
    },
    txt: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    meta: {
      updatedAt: formatDate('20171111'),
      likesCounter: 1
    }
  },
];
