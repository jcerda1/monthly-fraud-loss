import React, { Component } from 'react';
import '../App.css';
import { Row, Col }  from 'react-bootstrap';
import {mockData} from '../mockData/data';
import Header from './Header.js';
import ActiveAccount from './ActiveAccount';
import DateRange from './DateRange';
import DaysRange from './DaysRange';
import ReportButton from './ReportButton';
import LossChart from './LossChart';
import AccountsLineGraph from './AccountsLineGraph';

class App extends Component {
  constructor() {
    super()
    this.state = {
      activeAccounts:  mockData[18].activeAccounts,
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
            <Col lg={5} md={5} sm={4} xs={12}>
              <LossChart 
                type={"bar"}
                loss={this.state.fraudLossByMonth.map(entry => parseInt(entry.fraudLoss.slice(1, -3)))}            
                date={this.state.fraudLossByMonth.map(entry => entry.date).slice(0,6)} 
                title={"Loss Before RippleShot"}
              />
            </Col>
            <Col lg={5} md={5} sm={4} xs={12}> 
              <LossChart 
                type={"bar"} 
                date={this.state.fraudLossByMonth.map(entry => entry.date).slice(6)} 
                loss={this.state.fraudLossByMonth.map(entry => parseInt(entry.fraudLoss.slice(1, -3)))}
                title={"Loss After RippleShot"}
              />
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
                fromRange={this.state.fraudLossByMonth[0].date} 
                toRange={this.state.fraudLossByMonth[18].date} 
              />
            </Col>
            <Col 
              lg={10} md={10} 
              sm={12} 
              xs={{order: 1, span: 12}}
            >
              <AccountsLineGraph
                account={this.state.fraudLossByMonth.map(entry => parseInt(entry.activeAccounts.slice(0,3)))}
                loss={this.state.fraudLossByMonth.map(entry => parseInt(entry.fraudLoss.slice(1, -3)))}
                date={this.state.fraudLossByMonth.map(entry => entry.date)} 
              />
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
