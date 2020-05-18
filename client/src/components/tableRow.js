import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { setPlans } from '../store/actions/planActions'


function Row(props) {
    const { plan, isForm } = props
    const isEdit = (isForm == 'edit')

    const [date, setDate] = useState(plan ? plan.date : '')
    const [type, setType] = useState(plan ? plan.type : '')
    const [category, setCategory] = useState(plan ? plan.category : '')
    const [description, setDescription] = useState(plan ? plan.description : '')
    const [amount, setAmount] = useState(plan ? plan.amount : '')

    const { plans, id } = useSelector(state => state)
    const dispatch = useDispatch()

    function ResetForm() {
        setDate('')
        setType('')
        setCategory('')
        setDescription('')
        setAmount('')
    }


    function Submit() {
        if (isForm == 'edit') {
            let newPlan = { date, type, category, description, amount, id }
            let payload = [...plans]
            let idx = payload.findIndex(data => data.id == plan.id)
            payload.splice(idx, 1, newPlan)
            dispatch(setPlans(payload))
            props.hideEdit()
        } else {
            let newPlan = { date, type, category, description, amount, id }
            let payload = [...plans, newPlan]
            dispatch(setPlans(payload))
            ResetForm()
        }
    }

    function deletePlan() {
        let payload = [...plans]
        let idx = payload.findIndex(data => data.id == plan.id)
        payload.splice(idx, 1)
        dispatch(setPlans(payload))
    }



    if (!isForm) {
        return <tr>
            <td>{plan.date}</td>
            <td>{plan.type}</td>
            <td>{plan.category}</td>
            <td>{plan.description}</td>
            <td>{plan.amount}</td>
            <td><Button onClick={() => props.showEdit(plan.id)}>Edit</Button><Button onClick={deletePlan}>Delete</Button></td>
        </tr>
    }

    return (


        <tr>
            <th> <Form.Control placeholder="Date" value={date} onChange={(e) => setDate(e.target.value)} /></th>
            <th> <Form.Control placeholder="Type" value={type} onChange={(e) => setType(e.target.value)} /></th>
            <th> <Form.Control placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} /></th>
            <th> <Form.Control placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} /></th>
            <th> <Form.Control placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} /></th>
            <th> <Button onClick={Submit}>{isEdit ? 'Update' : 'Add'}</Button></th>
        </tr>


    );
}

export default Row;
