import React from 'react';
import PropTypes from 'prop-types';

import { Button, Segment, Header, Container } from 'semantic-ui-react';

import Link from 'components/elements/link';

import history from 'helpers/history';

const MainLayout = ({children}) => (
  <Container>
    <Logo />
    <GoBackButton />
    {children}
    <Footer />
  </Container>
);

MainLayout.PropTypes = {
  children: PropTypes.node
};
const GoBackButton = () => (
  <Button onClick={() => history.goBack()}>Назад</Button>
);

const Logo = () => (
  <Segment>
    <Header>
      <Link to='/'>Thinknetica Blog</Link>
    </Header>
  </Segment>
);

const Footer = () => (
  <Segment>
    Powered by React Course.
  </Segment>
);

export default MainLayout;

