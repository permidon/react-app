import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm, stopSubmit } from 'redux-form';

import { editPost } from 'actions/editPost';
import { Text, TextArea } from 'components/widgets/blog/elements/fields';

const PostForm = ({ handleSubmit, pristine, submitting, reset }) => (
  <div>
    <h1>Edit post</h1>

    <form onSubmit={handleSubmit} className="ui form" >
      <Field component={TextArea} label="Text" name="txt" />
      <Field component={Text} label="Updated at" name="updatedAt" type="text" />
      <Field component={Text} label="Author" name="author" type="text" />

      {!(pristine || submitting) && <button
        className="ui button"
        onClick={reset}>
        Clear
      </button>}
      <input type="submit" className="ui button primary" value="Save" />
    </form>
  </div>
);

PostForm.propTypes = {
  handleSubmit: PropTypes.func,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
  reset: PropTypes.func,
};

export default reduxForm({
  form: 'postForm',
  onSubmit: (values, dispatch) => {
    dispatch(editPost(values)).catch((error) => {
      dispatch(stopSubmit('postForm', error.response.body));
    });
  },
})(PostForm);
