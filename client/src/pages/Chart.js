import React from 'react';
import { styles } from '../css';
import { Row, Col } from "react-bootstrap";

export default function Chart(){
    return (
        <>
            <h3>Chart</h3>
            <hr style={styles.hrBot}/>
            <Row style={styles.contentTable}>
                <p>test</p>
            </Row>
        </>
    )
}