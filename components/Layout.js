import React from 'react';
import { Container } from 'semantic-ui-css';
import Header from './Header';

export default props => {
  return (
    <Container>
      <Header />
      {props.children}
    </Container>
  );
};