import React, { Component } from 'react';
import '../App.css';
import { Row, Col }  from 'react-bootstrap';
import {mockData} from '../mockData/data'
import Header from './Header.js';
import ActiveAccount from './ActiveAccount'
import DateRange from './DateRange'


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
        <Header/>
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
            <Col 
              xs={{span: 12, order: 2}} 
              sm={{span: 12, order: 2}} 
              md={{span: 2, order: 1}} 
              lg={{span: 2, order: 1}}
            >
              <DateRange fromRange={this.state.fraudLossByMonth[18].date} toRange={this.state.fraudLossByMonth[0].date} />
            </Col>
            <Col className="col" 
              lg={10} md={10} 
              sm={12} 
              xs={{order: 1, span: 12}}
            >
              <div >
                This is the data graph
              </div>
            </Col>
          </Row>

          <Row>
            <Col className="col"lg={2} md={2}>
             number of days
            </Col>
          </Row>

          <Row>
            <Col className="col"lg={2} md={2}>
              report botton
            </Col>
          </Row>
      </div>
    );
  }
}

export default App;
