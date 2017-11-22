import DOM from 'react-dom-factories';
import PropTypes from 'prop-types';

const Image = ({ src, width, height, alt }) => (
  DOM.img({style: { float: 'left' }, src, width, height, alt })
);

Image.propTypes = {
  src: PropTypes.string,
  width: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),
  height: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),
  alt: PropTypes.string
};

Image.defaultProps = {
  src: 'http://tinyurl.com/ybrmbhey',
  width: 128,
  height: 128,
  alt: 'Default post image'
};

export default Image;
