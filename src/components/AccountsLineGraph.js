import React, { Component } from 'react';
import Chart from 'chart.js'



export default class AccountsLineGraph extends Component {
    componentDidMount() {
      const node = this.node;
      var lineGraph = new Chart(node, {
          type: 'line',
          data: {
            datasets: [{
                data: this.props.account,
                backgroundColor: [
                    'rgba(54, 162, 235, 0.5)',
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
            },
            title: {
                display: true,
                text: 'Active Accounts and Fraud Loss',
                fontColor: '#ffffff'
            },
        }
      });
    }
    render() {
      return(
        <div>
          <canvas
            className="canvas"
            ref={node => this.node = node}
          />
        </div>
      )
    }
  };
  