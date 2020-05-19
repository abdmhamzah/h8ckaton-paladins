import React, { useEffect } from "react";
import { styles } from "../css";
import { Row, Col } from "react-bootstrap";
import { Bar, Pie, Line } from "react-chartjs-2";
import { useSelector } from "react-redux";

export default function ChartField() {
  const { plans } = useSelector(state => state);

  // let labels = ["January", "February", "March", "April", "May"];
  // let data = [65, 59, 80, 81, 56];

  const state = {
    labels: Object.keys(groupExpensePlans('debit')),
    datasets: [
      {
        label: "Debit",
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: Object.values(groupExpensePlans('debit')),
      },
    ],
  };
  const state2 = {
    labels: Object.keys(groupExpensePlans('credit')),
    datasets: [
      {
        backgroundColor: [
          "#B21F00",
          "#C9DE00",
          "#2FDE00",
          "#00A6B4",
          "#6800B4",
        ],
        hoverBackgroundColor: [
          "#501800",
          "#4B5000",
          "#175000",
          "#003350",
          "#35014F",
        ],
        data: Object.values(groupExpensePlans('credit')),
      },
    ],
  };
  const state3 = {
    labels: Object.keys(groupPlansByType()),
    datasets: [
      {
        label: 'Debit vs Credit',
        fill: false,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: Object.values(groupPlansByType())
      }
    ]
  }

  function groupExpensePlans(type = 'debit') {
    return plans.reduce((prev, plan, index) => {
      if (String(plan.type).toLowerCase() === String(type).toLowerCase()) {
        if (!prev[plan.category]) prev[plan.category] = 0;
        prev[plan.category] += Number(plan.amount);
      }
      return prev;
    }, {});
  }

  function groupPlansByType() {
    return plans.reduce((prev, plan, index) => {
      if (!prev[plan.type]) prev[plan.type] = 0;
      prev[plan.type] += Number(plan.amount);
      return prev;
    }, {Debit: 0, Credit: 0});
  }

  // useEffect(() => {
  //   groupExpensePlans();
  // }, []);

  return (
    <>
      <h3>Chart</h3>
      <hr style={styles.hrBot} />
      <Row style={styles.contentTable}>
        <Col lg={6}>
          <div>
            <Bar
              data={state}
              options={{
                title: {
                  display: true,
                  text: "Debit per category",
                  fontSize: 20,
                },
                legend: {
                  display: false,
                  position: "right",
                },
                scales: {
                  yAxes: [{
                    ticks: {
                      beginAtZero: true
                    }
                  }]
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
                title: {
                  display: true,
                  text: "Credit per category",
                  fontSize: 20,
                },
                legend: {
                  display: true,
                  position: "right",
                },
              }}
            />
          </div>
        </Col>
        <Col lg={12}>
          <div>
            <Line
              data={state3}
              options={{
                title: {
                  display: true,
                  text: 'Debit vs Credit',
                  fontSize: 20
                },
                legend: {
                  display: false,
                  position: 'right'
                },
                scales: {
                  yAxes: [{
                    ticks: {
                      beginAtZero: true
                    }
                  }]
                }
              }}
            />
          </div>
        </Col>
      </Row>
    </>
  );
}
