import React, { Component } from 'react';


export default class Footer extends React.Component {


  render() {
    return (
      <footer className="footer" style={{height: '60px', lineHeight: '60px'}}>
        <div className="container">
          <span className="text-muted">Place sticky footer content here.</span>
        </div>
      </footer>  
    );
  }
}

  