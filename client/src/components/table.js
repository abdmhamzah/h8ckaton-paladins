import React, { useState } from 'react';
import Row from './tableRow'
import { Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'


function TableView() {
    const { plans } = useSelector(state => state)

    const [editId, setEditId] = useState(false)



    function showEdit(id) {
        setEditId(id)
    }

    function hideEdit() {
        setEditId(false)
    }

    return (
        <div>
            <Table>
                <thead>
                    <tr><th>Add Item</th></tr>
                    <Row isForm={'add'} />
                    <tr>
                        <th> Date</th>
                        <th> Type</th>
                        <th> Category</th>
                        <th> Description</th>
                        <th> Amount</th>
                        <th> Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {plans.map(plan => {
                        return <Row key={plan.id} plan={plan} showEdit={(id) => showEdit(id)} hideEdit={() => hideEdit()} isForm={editId == plan.id ? 'edit' : false} ></Row>
                    })}


                </tbody>
            </Table>
        </div>
    );
}

export default TableView;
