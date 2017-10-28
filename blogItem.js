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

ReactDOM.render(
  React.createElement( BlogItem, { 
    src: "https://orig00.deviantart.net/5073/f/2009/220/c/e/spongebob_7_150x150_png_by_somemilk.png",
    str: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }),
  document.getElementById('item-1')
);

ReactDOM.render(
  React.createElement( BlogItem, { 
    src: "https://orig00.deviantart.net/92ae/f/2009/230/4/1/spongebob_9_150x150_png_by_somemilk.png",
    str: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }),
  document.getElementById('item-2')
);

ReactDOM.render(
  React.createElement( BlogItem, { 
    src: "https://orig00.deviantart.net/1d75/f/2009/220/b/0/spongebob_4_150x150_png_by_somemilk.png",
    str: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }),
  document.getElementById('item-3')
);
