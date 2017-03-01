import React, { Component } from 'react';
import { Row, Col, Breadcrumb, BreadcrumbItem, Card, CardImg, CardText, CardBlock, CardTitle, CardSubtitle, Button, ListGroup, ListGroupItem } from 'reactstrap';
import { setConfig } from '../actions';


export default class Sidebar extends React.Component {


  render() {
    return (
          <Col md="4">
            <Card>
              <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
              <CardBlock>
                <CardTitle className="h3">Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button>Button</Button>
              </CardBlock>
            </Card>
            <hr />
            <ListGroup>
              <ListGroupItem>Cras justo odCras justo odCras justo odCras justo odCras justo odio</ListGroupItem>
              <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
              <ListGroupItem>Morbi leo risus</ListGroupItem>
              <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
              <ListGroupItem>Vestibulum at eros</ListGroupItem>
            </ListGroup>            
          </Col>    
    );
  }
}