import React from 'react';
import PropTypes from 'prop-types';

import { Form } from 'semantic-ui-react';

const PostsSearch = (props) => (
  <Form>
    <input
      style={{marginTop: '25px'}}
      type="text"
      placeholder="Search"
      className="form-control"
      onChange={props.search}/>
  </Form>
);

PostsSearch.propTypes = {
  search: PropTypes.func
};

export default PostsSearch;
