const TextBox = ({ str }) => (
  DOM.span(
    {style: { display: 'inline-block' }},
    str)  
);

TextBox.propTypes = {
  str: PropTypes.string
};

TextBox.defaultProps = {
  str: "Будущее, с какого-то момента, будет в некоторой степени отличаться от настоящего. Есть много исторических анекдотов и поучительных историй, доказывающих эту теорию. Вот и все — теперь вы экономист."
};
