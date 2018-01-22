import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { Button, Segment, Header, Container } from 'semantic-ui-react';

import Link from 'components/elements/link';
import { rootPath, contactsPath } from 'helpers/routes';

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
      <Link to={rootPath()}>Thinknetica Blog </Link>
      |
      <Link to={contactsPath()}> Contacts</Link>
    </Header>
  </Segment>
);

const Footer = () => (
  <Segment>
    Powered by React Course.
  </Segment>
);

export default MainLayout;
