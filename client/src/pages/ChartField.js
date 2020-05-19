import React from "react";
import { styles } from "../css";
import { Row, Col } from "react-bootstrap";
import { Bar, Pie, Line } from "react-chartjs-2";
import { useSelector } from "react-redux";

export default function ChartField() {
  const { plans } = useSelector((state) => state);

  const state = {
    labels: Object.keys(groupExpensePlans("debit")),
    datasets: [
      {
        label: "Debit",
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 1,
        data: Object.values(groupExpensePlans("debit")),
      },
    ],
  };

  const state2 = {
    labels: Object.keys(groupExpensePlans("credit")),
    datasets: [
      {
        backgroundColor: [
          "#EC6C85",
          "#F3A454",
          "#FACE6C",
          "#6ABFC0",
          "#5A9FD6",
        ],
        hoverBackgroundColor: [
          "#E53E65",
          "#EC8729",
          "#EFB339",
          "#32B5B0",
          "#3089C6",
        ],
        data: Object.values(groupExpensePlans("credit")),
      },
    ],
  };

  const state3 = {
    labels: Object.keys(groupPlansByType()),
    datasets: [
      {
        label: "Debit vs Credit",
        fill: false,
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 1,
        data: Object.values(groupPlansByType()),
      },
    ],
  };

  function groupExpensePlans(type = "debit") {
    return plans.reduce((prev, plan, index) => {
      if (String(plan.type).toLowerCase() === String(type).toLowerCase()) {
        if (!prev[plan.category]) prev[plan.category] = 0;
        prev[plan.category] += Number(plan.amount);
      }
      return prev;
    }, {});
  }

  function groupPlansByType() {
    return plans.reduce(
      (prev, plan, index) => {
        if (!prev[plan.type]) prev[plan.type] = 0;
        prev[plan.type] += Number(plan.amount);
        return prev;
      },
      { Debit: 0, Credit: 0 }
    );
  }

  return (
    <>
      <h3>Chart</h3>
      <hr style={styles.hrBot} />
      <Row style={styles.contentTable}>
        <Col lg={6}>
          <div>
            <Line
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
                  yAxes: [
                    {
                      ticks: {
                        beginAtZero: true,
                      },
                    },
                  ],
                },
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
            <Bar
              data={state3}
              options={{
                title: {
                  display: true,
                  text: "Debit vs Credit",
                  fontSize: 20,
                },
                legend: {
                  display: false,
                  position: "right",
                },
                scales: {
                  yAxes: [
                    {
                      ticks: {
                        beginAtZero: true,
                      },
                    },
                  ],
                },
              }}
            />
          </div>
        </Col>
      </Row>
    </>
  );
}
