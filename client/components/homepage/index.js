import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import Navigation from '../Nav'
import Sidebar from '../Sidebar'
import { example, p, link } from './styles';
import { Row, Col, Breadcrumb, BreadcrumbItem, Card, CardImg, CardText, CardBlock, CardTitle, CardSubtitle, Button, ListGroup, ListGroupItem } from 'reactstrap';

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

 
        <hr/>
<div className="card-columns">
  <div className="card">
    <img className="card-img-top img-fluid" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap"/>
    <div className="card-block">
      <h4 className="card-title">Card title that wraps to a new line</h4>
      <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
  </div>
  <div className="card p-3">
    <blockquote className="card-block card-blockquote">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      <footer>
        <small className="text-muted">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </small>
      </footer>
    </blockquote>
  </div>
  <div className="card">
    <img className="card-img-top img-fluid" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap"/>
    <div className="card-block">
      <h4 className="card-title">Card title</h4>
      <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div className="card card-inverse card-primary p-3 text-center">
    <blockquote className="card-blockquote">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
      <footer>
        <small>
          Someone famous in <cite title="Source Title">Source Title</cite>
        </small>
      </footer>
    </blockquote>
  </div>
  <div className="card text-center">
    <div className="card-block">
      <h4 className="card-title">Card title</h4>
      <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div className="card">
    <img className="card-img img-fluid" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image"/>
  </div>
  <div className="card p-3 text-right">
    <blockquote className="card-blockquote">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      <footer>
        <small className="text-muted">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </small>
      </footer>
    </blockquote>
  </div>
  <div className="card">
    <div className="card-block">
      <h4 className="card-title">Card title</h4>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>

        <hr/>
        <Row>
          <Col md="8">
            <h2 className="h2 text-center">Change Wordpress user password with Sequel Pro</h2>
            <small className="text-muted small">Andrew - 3 days ago</small>
            <hr />
            <p className={p}>
              Please take a <code>look at</code> <Link className={link} to='/docs'>usage</Link> page. Quinoa cray taxidermy, cardigan fam godard occupy hoodie asymmetrical 8-bit man bun poutine pug. Kogi leggings hot chicken glossier, viral flannel microdosing poutine farm-to-table. Mustache actually food truck, letterpress kickstarter 90's hella street art vape woke disrupt selfies blue bottle tote bag fap. Small batch glossier fashion axe, prism tote bag vegan vexillologist gluten-free microdosing plaid lumbersexual raw denim blue bottle live-edge. Photo booth gentrify heirloom, actually farm-to-table pinterest trust fund XOXO leggings shabby chic scenester. Echo park cardigan gluten-free chartreuse, tumeric typewriter YOLO poke banjo tote bag. Master cleanse marfa chillwave health goth hexagon mustache, hashtag prism leggings.
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
