import React, { Component } from 'react';
import '../App.css';
import { Container, Row, Col, Navbar }  from 'react-bootstrap';
import {mockData} from '../mockData/data'
import Header from './Header.js';
import ActiveAccount from './ActiveAccount'


class App extends Component {
  constructor() {
    super()
    this.state = {
      activeAccounts:  mockData[0].activeAccounts,
      fraudLossByMonth: mockData,
    }
  }
  render() {
    console.log(this)
    return (
      <div className="App">
        <div>
          <Header/>
        </div>
        <div className="sideNav">
      
          <Row>
            <Col className="col" lg={2} md={2} sm={12} xs={12}>
              <ActiveAccount active={this.state.activeAccounts}/>
            </Col>
            <Col className="col" lg={5} md={5} sm={12} xs={12}>
              This is where a graph will be before rippleshot
            </Col>
            <Col className="col" lg={5} md={5} sm={12} xs={12}> 
              This is where a graph will be after rippleshot
            </Col>
          </Row>

          <Row>
            <Col className="col" xs={{span: 12, order: 2}} sm={{span: 12, order: 2}} md={{span: 2, order: 1}} lg={{span: 2, order: 1}}>
              <div style={{height: '150px'}}>
                add the date range component here
              </div>
            </Col>
            <Col className="col" lg={10} md={10} sm={12} xs={{order: 1, span: 12}}>
              <div >
                This is the data graph
              </div>
            </Col>
          </Row>

          <Row>
            <Col className="col"lg={2} md={2}>
             add the from to date here
            </Col>
          </Row>

          <Row>
            <Col className="col"lg={2} md={2}>
              report botton
            </Col>
          </Row>

        </div>
      </div>
    );
  }
}

export default App;
