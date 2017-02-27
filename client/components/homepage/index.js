import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import Navigation from '../Nav'
import { example, p, link } from './styles';
import { Button } from 'reactstrap';

export default class Homepage extends Component {
  /*eslint-disable */
  static onEnter({store, nextState, replaceState, callback}) {
    // Load here any data.
    callback(); // this call is important, don't forget it
  }
  /*eslint-enable */

  render() {
    return <div>
      <Helmet
        title='Home page'
        meta={[
          {
            property: 'og:title',
            content: 'wisdom.fyi - wisdom for your information'
          }
        ]} />
      <Navigation />
      <h1 className={example}>
        Hot Reloadable <br />
        Golang + React + Redux + Css-Modules
        <br />Isomorphic Starter Kit</h1>
      <Button>Button!</Button>
      <br />
      <p className={p}>
        Please take a look at <Link className={link} to='/docs'>usage</Link> page.
      </p>
    </div>;
  }

}
