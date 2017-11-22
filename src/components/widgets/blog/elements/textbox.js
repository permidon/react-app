import DOM from 'react-dom-factories';
import PropTypes from 'prop-types';

const TextBox = (props) => (
  DOM.span({}, props.children)
);

TextBox.propTypes = {
  children: PropTypes.string
};

TextBox.defaultProps = {
  children: 'Будущее, с какого-то момента, будет в некоторой степени \
  отличаться от настоящего. Есть много исторических анекдотов и поучительных \
  историй, доказывающих эту теорию. Вот и все — теперь вы экономист.'
};

export default TextBox;
