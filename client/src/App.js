import React from "react";
import { Dashboard, ChartField } from "./pages";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import SideNav from "./components/SideNav";
import './css/nav.css'
import {styles} from './css';
import { Provider } from 'react-redux'
import {store, persistor} from './store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

const routes = [
  {
    exact: true,
    path: "/",
    children: <Dashboard />,
  },
  {
    path: "/chart",
    children: <ChartField />,
  },
];

export const AppRouter = () => (
  <Switch>
    {routes.map((route) => (
      <Route key={route} {...route} />
    ))}
  </Switch>
);

function App() {
  return (
    <Router>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
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
        </PersistGate>
      </Provider>
    </Router>
  );
}

export default App;
