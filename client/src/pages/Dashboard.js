import React from 'react';
import { styles } from '../css';
import { Row, Col } from "react-bootstrap";
import TableView from '../components/table'

export default function Dashboard(){
    return (
        <>
            <h3>Dashboard</h3>
            <hr style={styles.hrBot}/>
            <Row style={styles.contentTable}>
                <TableView></TableView>
            </Row>
        </>
    )
}