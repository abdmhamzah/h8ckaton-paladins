import React from 'react';
import { Dashboard, FormAdd, Chart } from './pages';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from "react-bootstrap";
import SideNav from "./components/SideNav";
import './css/nav.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const routes = [
  {
    exact: true,
    path: '/',
    children: <Dashboard/>
  },
  {
    path: '/add',
    children: <FormAdd/>
  },
  {
    path: '/chart',
    children: <Chart/>
  },
];

export const AppRouter = () => (
  <Switch>
    {routes.map((route) => <Route key={route} {...route} />)}
  </Switch>
);

function App() {
  return (
    <Router>
      {/* <Provider store={store}> */}
        {/* <div className="container">
          <AppRouter />
        </div> */}
        <Container fluid>
          <Row>
              <Col xs={2} id="sidebar-wrapper">      
                <SideNav />
              </Col>
              <Col  xs={10} id="page-content-wrapper">
                <AppRouter />
              </Col> 
          </Row>
      </Container>
    </Router>
  );
}

export default App;