import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { setPlans } from '../store/actions/planActions'


function Row(props) {
    const { plan, isForm } = props

    const [date, setDate] = useState(plan ? plan.date : '')
    const [type, setType] = useState(plan ? plan.type : '')
    const [category, setCategory] = useState(plan ? plan.category : '')
    const [description, setDescription] = useState(plan ? plan.description : '')
    const [amount, setAmount] = useState(plan ? plan.amount : '')

    const { plans, id } = useSelector(state => state)
    const dispatch = useDispatch()





    function Submit() {
        if (isForm == 'edit') {

        } else {
            console.log('add')
            let newPlan = { date, type, category, description, amount, id }
            let payload = [...plans, newPlan]
            dispatch(setPlans(payload))
        }
    }

    return (
        <div>
            <p>test
                {date} {type}, {category}.{description},{amount} test
                {JSON.stringify(plans)}
            </p>



            <tr>
                <th> <Form.Control placeholder="Date" value={date} onChange={(e) => setDate(e.target.value)} /></th>
                <th> <Form.Control placeholder="Type" value={type} onChange={(e) => setType(e.target.value)} /></th>
                <th> <Form.Control placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} /></th>
                <th> <Form.Control placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} /></th>
                <th> <Form.Control placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} /></th>
                <th> <Button onClick={Submit}>Add/Edit</Button></th>
            </tr>
        </div>

    );
}

export default Row;
