import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import Sidebar from './Sidebar';
import { Row, Col, Breadcrumb, BreadcrumbItem, Card, CardImg, CardText, CardBlock, CardTitle, CardSubtitle, Button, ListGroup, ListGroupItem } from 'reactstrap';

export default class PostTemplate extends Component {
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

 
        <hr/>
        <Row>
          <Col md="8">
            <h2 className="h2 text-center">Change Wordpress user password with Sequel Pro</h2>
            <small className="text-muted small">Andrew - 3 days ago</small>
            <hr />
            <p >
              Please take a <code>look at</code> <Link to='/docs'>usage</Link> page. Quinoa cray taxidermy, cardigan fam godard occupy hoodie asymmetrical 8-bit man bun poutine pug. Kogi leggings hot chicken glossier, viral flannel microdosing poutine farm-to-table. Mustache actually food truck, letterpress kickstarter 90's hella street art vape woke disrupt selfies blue bottle tote bag fap. Small batch glossier fashion axe, prism tote bag vegan vexillologist gluten-free microdosing plaid lumbersexual raw denim blue bottle live-edge. Photo booth gentrify heirloom, actually farm-to-table pinterest trust fund XOXO leggings shabby chic scenester. Echo park cardigan gluten-free chartreuse, tumeric typewriter YOLO poke banjo tote bag. Master cleanse marfa chillwave health goth hexagon mustache, hashtag prism leggings.
            </p>
            <div className="list-group">
                <div className="d-flex w-100 justify-content-between list-group-item list-group-item-action">
                  <h5 className="mb-1 h5">List group item heading</h5>
                  <small className="text-muted small">√</small>
                  <p className="mb-1 p">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                  <small className="text-muted small">Donec id elit non mi porta.</small>
                </div>
            </div>       
            <div className="list-group">
                <div className="d-flex w-100 justify-content-between list-group-item list-group-item-action">
                  <h5 className="mb-1 h5">List group item heading</h5>
                  <small className="text-muted small">√</small>
                  <p className="mb-1 p">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                  <small className="text-muted small">Donec id elit non mi porta.</small>
                </div>
            </div>       
            <div className="list-group">
                <div className="d-flex w-100 justify-content-between list-group-item list-group-item-action">
                  <h5 className="mb-1 h5">List group item heading</h5>
                  <small className="text-muted small">√</small>
                  <p className="mb-1 p">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                  <small className="text-muted small">Donec id elit non mi porta.</small>
                </div>
            </div>       
            <div className="list-group">
                <div className="d-flex w-100 justify-content-between list-group-item list-group-item-action">
                  <h5 className="mb-1 h5">List group item heading</h5>
                  <small className="text-muted small">√</small>
                  <p className="mb-1 p">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                  <small className="text-muted small">Donec id elit non mi porta.</small>
                </div>
            </div>       
            <div className="list-group">
                <div className="d-flex w-100 justify-content-between list-group-item list-group-item-action">
                  <h5 className="mb-1 h5">List group item heading</h5>
                  <small className="text-muted small">√</small>
                  <p className="mb-1 p">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                  <small className="text-muted small">Donec id elit non mi porta.</small>
                </div>
            </div>            
          </Col>
          <Sidebar />
        </Row>    
    </div>;
  }

}
