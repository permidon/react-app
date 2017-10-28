const DOM = React.DOM;

const Image = ({ src, width, height, alt }) => (
  DOM.img({ src, width, height, alt })
);

const TextBox = ({ str }) => (
  DOM.span(
    {style: { display: 'inline-block' }},
    str)  
);

const BlogItem = ({ src, str }) => (
  DOM.div(
    {style: { background: 'lightgreen' } },
    React.createElement( Image, {
      src: src,
      width: 128,
      height: 128,
      alt: "post logo"
    }),
    React.createElement( TextBox, {
      str: str
    })
  )
);

const items = [
  {
    src: 'https://orig00.deviantart.net/5073/f/2009/220/c/e/spongebob_7_150x150_png_by_somemilk.png',
    str: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    src: 'https://orig00.deviantart.net/92ae/f/2009/230/4/1/spongebob_9_150x150_png_by_somemilk.png',
    str: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
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
          React.createElement('li', { key }, React.createElement( BlogItem, { 
            src: item.src,
            str: item.str
          }))
        )
      )
    )
  }
};

ReactDOM.render(
  React.createElement(BlogList),
  document.getElementById('bloglist')
);
