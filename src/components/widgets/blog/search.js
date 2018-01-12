import React from 'react';
import PropTypes from 'prop-types';

import { Form } from 'semantic-ui-react';

class Search extends React.Component {
  constructor() {
    super();
    this.state = { search: '' };
  }

  handleSearch(e) {
    e.preventDefault();
    this.setState({search: e.currentTarget.value});
    const search = this.props.search;
    return search(this.state.search);
  }

  render() {
    return (
      <Form>
        <input
          style={{marginTop: '25px'}}
          type="text"
          placeholder="Search"
          className="form-control"
          onChange={ this.handleSearch.bind(this) }/>
      </Form>
    );
  }
}

Search.propTypes = {
  search: PropTypes.func
};

export default Search;
