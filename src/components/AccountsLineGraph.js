import React, { Component } from 'react';
import Chart from 'chart.js'
import { throws } from 'assert';


export default class AccountsLineGraph extends Component {
    constructor(props) {
      super(props);
    }
    componentDidMount() {
      const node = this.node;
      var MyLineGraph = new Chart(node, {
          type: 'line',
          data: {
            datasets: [{
                data: this.props.account,
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)',
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                ],
                label: 'Active Accounts (x1000)',
    
                // This binds the dataset to the left y axis
                yAxisID: 'left-y-axis'
            }, {
                data: this.props.loss,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                ],
                label: 'Fraud Loss (x $1000)',
    
                // This binds the dataset to the right y axis
                yAxisID: 'right-y-axis',
            }],
            labels: this.props.date
        },
        options: {
            scales: {
                yAxes: [{
                    id: 'left-y-axis',
                    type: 'linear',
                    position: 'left'
                }, {
                    id: 'right-y-axis',
                    type: 'linear',
                    position: 'right'
                }]
            }
        }
      });
    }
    render() {
        console.log(this.props)
      return(
        <div>
          <canvas
            style={{width: 1000, height: 500}}
            ref={node => this.node = node}
          />
        </div>
      )
    }
    
  }
  