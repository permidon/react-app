import React from 'react';
import ReactDOM from 'react-dom';

import { shallow } from 'enzyme';
import { Router } from 'react-router';
import { Provider } from 'react-redux';

import history from 'helpers/history';
import createStore from 'store';

import BlogItem from 'components/widgets/blog/blogitem';

describe('BlogItem', () => {
  it('should render BlogItem successfully', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={createStore()}>
        <Router history={history}>
          <BlogItem />
        </Router>
      </Provider>,
      div
    );
  });

  it('should render BlogItem content', () => {
    const props = {
      post: {
        title: 'Post X',
        txt: 'The things you own end up owning you',
      }
    };
    const blogItem = shallow(<BlogItem {...props} />);
    expect(blogItem.contains(props.post.title)).toEqual(true);
    expect(blogItem.contains(props.post.txt)).toEqual(true);
  });
});
