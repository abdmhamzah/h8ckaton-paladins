import React from 'react';
import Row from './tableRow'
import { Table, Form, Button } from 'react-bootstrap'



function TableView(props) {
    const { plans } = props

    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th> Date</th>
                        <th> Type</th>
                        <th> Category</th>
                        <th> Description</th>
                        <th> Amount</th>
                        <th>0|X</th>
                    </tr>
                    <Row isForm={true} />
                </thead>

                <tbody>

                    <tr>
                        <td> Date</td>
                        <td> Type</td>
                        <td> Category</td>
                        <td> Description</td>
                        <td> Amount</td>
                        <td>0|X</td>
                    </tr>
                    {/* <Row /> */}
                </tbody>
            </Table>
        </div>
    );
}

export default TableView;
