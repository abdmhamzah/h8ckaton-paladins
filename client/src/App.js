import React from 'react';
import { Dashboard, FormAdd, Chart } from './pages';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from "react-bootstrap";
import SideNav from "./components/SideNav";
import './css/nav.css'
import {styles} from './css';
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import TableView from './components/table'
//       <TableView></TableView>

const routes = [
  {
    exact: true,
    path: '/',
    children: <Dashboard/>
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
      <Provider store={store}>
          <Container fluid>
            <Row>
                <Col xs={2} id="sidebar-wrapper">      
                  <SideNav />
                </Col>
                <Col xs={10} id="page-content-wrapper" style={styles.content}>
                  <AppRouter />
                </Col> 
            </Row>
        </Container>
      </Provider>
    </Router>

  );
}

export default App;
