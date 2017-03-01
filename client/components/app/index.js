import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Navigation from '../Nav';
import Footer from '../Footer';
import { Container } from 'reactstrap';

export default class App extends Component {

  render() {
    return <div>
      <Helmet title='Go + React + Redux = rocks!' />
      <Navigation />
      <Container>
      	{this.props.children}
      </Container>
      <Footer />
    </div>;
  }

}
