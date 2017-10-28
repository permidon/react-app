const DOM = React.DOM;

const TextBox = ({ str }) => (
  DOM.span(null, str)  
);

ReactDOM.render(
  React.createElement(TextBox, {
   str: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }),
  document.getElementById('textbox')
);
