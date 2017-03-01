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
        <h1 className="display-3">Login</h1>


      <Form>
        <FormGroup row>
          <Label for="exampleEmail" sm={2}>Email</Label>
          <Col sm={10}>
            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="examplePassword" sm={2}>Password</Label>
          <Col sm={10}>
            <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
          </Col>
        </FormGroup>
        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button>Submit</Button>
          </Col>
        </FormGroup>
      </Form>
      </Jumbotron>
    </div>      
    );
  }
}