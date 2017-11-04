const { DOM, PropTypes } = React;

const { bind } = _;

const Image = ({ src, width, height, alt }) => (
  DOM.img({ src, width, height, alt })
);

Image.propTypes = {
  src: PropTypes.string,
  width: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),
  height: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),
  alt: PropTypes.string
};

Image.defaultProps = {
  src: "https://cdn0.iconfinder.com/data/icons/building-signage-01/204/icon_nocamera-128.png",
  width: 128,
  height: 128,
  alt: "Default post image"
};
