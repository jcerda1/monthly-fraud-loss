import React, { Component } from 'react';
import '../App.css';
import { Row, Col }  from 'react-bootstrap';
import {mockData} from '../mockData/data';
import Header from './Header.js';
import ActiveAccount from './ActiveAccount';
import DateRange from './DateRange';
import DaysRange from './DaysRange';
import ReportButton from './ReportButton';

class App extends Component {
  constructor() {
    super()
    this.state = {
      activeAccounts:  mockData[0].activeAccounts,
      fraudLossByMonth: mockData,
    }
  }
  render() {
    return (
      <div className="App">
        <Header/>
          <Row>
            <Col className="col" lg={2} md={2} sm={4} xs={12}>
              <ActiveAccount active={this.state.activeAccounts}/>
            </Col>
            <Col className="col" lg={5} md={5} sm={4} xs={12}>
              <div style={{minHeight: '100px', height: '300px', }}>
                This is where a graph will be before rippleshot
              </div>
            </Col>
            <Col className="col" lg={5} md={5} sm={4} xs={12}> 
              <div style={{minHeight: '100px', height: '300px', }}>
                This is where a graph will be after rippleshot
              </div>
              
            </Col>
          </Row>

          <Row>
            <Col 
              className="col"
              xs={{span: 12, order: 2}} 
              sm={{span: 12, order: 2}} 
              md={{span: 2, order: 1}} 
              lg={{span: 2, order: 1}}
            >
              <DateRange 
                fromRange={this.state.fraudLossByMonth[18].date} 
                toRange={this.state.fraudLossByMonth[0].date} 
              />
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
               <DaysRange/>
            </Col>
          </Row>

          <Row>
            <Col className="col" lg={2} md={2}>
              <ReportButton variant={"dark"} value={'Generate Report'}/>
            </Col>
          </Row>
      </div>
    );
  }
}

export default App;
