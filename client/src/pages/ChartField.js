import React from 'react';
import { styles } from '../css';
import { Row, Col } from "react-bootstrap";
import { Bar, Pie } from 'react-chartjs-2';

export default function ChartField(){
    let labels = ['January', 'February', 'March',
    'April', 'May'];
    let data = [65, 59, 80, 81, 56];

    const state = {
        labels: labels,
        datasets: [
          {
            label: 'Rainfall',
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: data
          }
        ]
    }
    const state2 = {
        labels: labels,
        datasets: [
          {
            label: 'Rainfall',
            backgroundColor: [
              '#B21F00',
              '#C9DE00',
              '#2FDE00',
              '#00A6B4',
              '#6800B4'
            ],
            hoverBackgroundColor: [
            '#501800',
            '#4B5000',
            '#175000',
            '#003350',
            '#35014F'
            ],
            data: data
          }
        ]
      }
    
    return (
        <>
            <h3>Chart</h3>
            <hr style={styles.hrBot}/>
            <Row style={styles.contentTable}>
                <Col lg={6}>
                    <div>
                        <Bar
                        data={state}
                        options={{
                            title:{
                            display:true,
                            text:'Average Rainfall per month',
                            fontSize:20
                            },
                            legend:{
                            display:true,
                            position:'right'
                            }
                        }}
                        />
                    </div>
                </Col>
                <Col lg={6}>
                    <div>
                        <Pie
                            data={state2}
                            options={{
                            title:{
                                display:true,
                                text:'Average Rainfall per month',
                                fontSize:20
                            },
                            legend:{
                                display:true,
                                position:'right'
                            }
                            }}
                        />
                    </div>
                </Col>
            </Row>
        </>
    )
}