const DOM = React.DOM;

const Image = ({ src, width, height, alt }) => {
  return DOM.img({ src, width, height, alt })
};

ReactDOM.render(
  React.createElement(Image, {
   src: 'https://cdn1.iconfinder.com/data/icons/UltraBuuf/128/kitty.png', 
   width: 128, 
   height: 128,
   alt: 'Kitti'
  }),
  document.getElementById('image')
);
