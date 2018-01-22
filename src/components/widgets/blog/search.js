import React from 'react';
import PropTypes from 'prop-types';

import { Button, Form } from 'semantic-ui-react';

class Search extends React.Component {
  constructor() {
    super();
    this.state = { search: '' };
  }

  setSearch(e) {
    e.preventDefault();
    this.setState({search: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const search = this.props.search;
    return search(this.state.search);
  }

  render() {
    return (
      <Form>
        <div className="ui action input" style={{marginTop: '25px'}} >
          <input
            type="text"
            placeholder="Type something..."
            className="form-control"
            onChange={ this.setSearch.bind(this) }/>
          <Button onClick={ this.handleSubmit.bind(this) }>Search</Button>
        </div>
      </Form>
    );
  }
}

Search.propTypes = {
  search: PropTypes.func
};

export default Search;
