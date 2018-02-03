import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { Button, Segment, Header, Container } from 'semantic-ui-react';

import Link from 'components/elements/link';
import { rootPath, newPostPath, contactsPath } from 'helpers/routes';

const MainLayout = ({children}) => (
  <Container>
    <Logo />
    <GoBackButton />
    {children}
    <Footer />
  </Container>
);

MainLayout.propTypes = {
  children: PropTypes.node
};

const GoBackButton = withRouter(
  ({ history }) => (
    <Button onClick={history.goBack}>Назад</Button>
  )
);

const Logo = () => (
  <Segment>
    <Header>
      <div className="ui horizontal list" >
        <Link className="item home" to={rootPath()}>Thinknetica Blog </Link>
        <Link className="item" to={newPostPath()}>New Post</Link>
        <Link className="item" to={contactsPath()}>Contacts</Link>
      </div>
    </Header>
  </Segment>
);

const Footer = () => (
  <Segment>
    Powered by React Course.
  </Segment>
);

export default MainLayout;
