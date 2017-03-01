import React, { Component } from 'react';
import { Col, Button, Form, Jumbotron, FormGroup, Label, Input, FormText } from 'reactstrap';
import { setConfig } from '../actions';


export default class Login extends React.Component {

  /*eslint-disable */
  static onEnter({store, nextState, replaceState, callback}) {
    // Load here any data.
    callback(); // this call is important, don't forget it
  }
  /*eslint-enable */

  render() {
    return (
    <div>
      <Jumbotron>
        <h1 className="display-4 text-center">Login</h1>
      <Form>
        <FormGroup row>
          <Col sm={12}>
            <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col sm={12}>
            <Input type="password" name="password" id="examplePassword" placeholder="Password" />
          </Col>
        </FormGroup>
        <FormGroup check row>
          <Col sm={{ size: 12 }}>
            <Button block>Login</Button>
          </Col>
        </FormGroup>
      </Form>
      </Jumbotron>
    </div>      
    );
  }
}