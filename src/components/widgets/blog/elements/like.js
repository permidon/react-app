import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'semantic-ui-react';

const Like = ({ id, addLike, likesCounter }) => {
  return (
    <div>
      <p><span>Likes: {likesCounter} <Button onClick={() => addLike(id)}>
        <i className="fa fa-thumbs-o-up" aria-hidden="true"></i></Button>
      </span></p>
    </div>
  );
};

Like.defaultProps = {
  likesCounter: 0
};

Like.propTypes = {
  likesCounter: PropTypes.number
};

export default Like;
