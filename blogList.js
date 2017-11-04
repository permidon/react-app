const items = [
  {
    src: 'https://orig00.deviantart.net/5073/f/2009/220/c/e/spongebob_7_150x150_png_by_somemilk.png',
    metadata: {
      createdAt: moment().subtract(12, 'days').subtract(3, 'hours').subtract(14, 'minutes').subtract(23, 'seconds').format('MMMM Do YYYY, h:mm:ss a'),
    }
  },
  {
    str: 'Лишь утратив всё до конца, мы обретаем свободу.',
    metadata: {
      author: 'Tyler Durden ',
      likes: 30
    },
  },
  {
    src: 'https://orig00.deviantart.net/1d75/f/2009/220/b/0/spongebob_4_150x150_png_by_somemilk.png',
    str: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
];

class BlogList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items };
  }
  render() {
    return React.createElement('ul',
      {null},
      _.map(
        this.state.items,
        (item, key) => (
          React.createElement('li', { key }, React.createElement( BlogItem, item ))
        )
      )
    )
  }
};

ReactDOM.render(
  React.createElement(BlogList),
  document.getElementById('app')
);
