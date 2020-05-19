import React, { useState, useEffect } from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "../css/nav.css";
import logo from "../assets/029-purse.png";
import { useSelector } from 'react-redux';

export default function Side() {
  const { plans } = useSelector(state => state);
  const [assets, setAssets] = useState('');

  function convertToRupiah(angka) {
    return Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(angka);
  }

  useEffect(() => {
    setAssets(plans.reduce((prev, plan) => {
      switch (String(plan.type).toLowerCase()) {
        case 'debit':
          prev += Number(plan.amount);
          break;
        case 'credit':
          prev -= Number(plan.amount);
          break;
      }
      return prev;
    }, 0));
  }, [plans])

  return (
    <>
      <Nav className="d-none d-md-block sidebar" activeKey="/home">
        <div className="sidebar-sticky"></div>
        <div className="imgLogo">
          <img src={logo} className="img-fluid" alt="logo" />
        </div>
        <div className="total-assets">
          <div className="total-assets-title">Assets</div>
          <div className="total-assets-amount" style={{color: assets < 0 ? '#ff0000' : null }}>
            {convertToRupiah(assets)}
          </div>
        </div>
        <Nav.Item>
          <LinkContainer to="/">
            <Nav.Link>Dashboard</Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item>
          <LinkContainer to="/chart">
            <Nav.Link>Chart</Nav.Link>
          </LinkContainer>
        </Nav.Item>
      </Nav>
    </>
  );
}
