import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Navigation from '../Nav';

export default class App extends Component {

  render() {
    return <div>
      <Helmet title='Go + React + Redux = rocks!' />
      <Navigation />
      {this.props.children}
    </div>;
  }

}
