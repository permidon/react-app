import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const Text = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className={classNames('ui field', { error })}>
    <label>{label}</label>
    <input className="ui input" {...input} type={type} />
    {touched && error && (
      <div className="ui red label">{error}</div>
    )}
    {touched && warning && (
      <div className="ui yellow label">{warning}</div>
    )}
  </div>
);

Text.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.object,
};

export const TextArea = ({ input, label, meta: { touched, error, warning } }) => (
  <div className={classNames('ui field', { error })}>
    <label>{label}</label>
    <textarea className="ui input" {...input} />
    {touched && error && (
      <div className="ui red label">{error}</div>
    )}
    {touched && warning && (
      <div className="ui yellow label">{warning}</div>
    )}
  </div>
);

TextArea.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  meta: PropTypes.object,
};
