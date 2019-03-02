import React, { Component } from 'react';
import '../App.css';
import { Container, Row, Col, Navbar }  from 'react-bootstrap'
import Header from './Header.js';
import ActiveAccount from './ActiveAccount'


class App extends Component {
  constructor() {
    super()
    this.state = {
      activeAccounts: '191,590'
    }
  }
  render() {
    return (
      <div className="App">
        <div>
          <Header/>
        </div>
        <div className="sideNav">
          <Col className="col"lg={3} md={3}>
            <ActiveAccount active={this.state.activeAccounts}/>
          </Col>
          <Col className="col"lg={3} md={3}>
            add the date range component here
          </Col>
          <Col className="col"lg={3} md={3}>
           add the from to date here
          </Col>
          <Col className="col"lg={3} md={3}>
            report botton
          </Col>
        </div>
      </div>
    );
  }
}

export default App;
