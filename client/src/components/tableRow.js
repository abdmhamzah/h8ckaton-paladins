import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { setPlans } from "../store/actions/planActions";
import { styles } from "../css";
import Swal from "sweetalert2";

const Toast = Swal.mixin({
  toast: true,
  position: "top",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  onOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

function Row(props) {
  const { plan, isForm } = props;
  const isEdit = isForm === "edit";

  const [date, setDate] = useState(plan ? plan.date : "");
  const [type, setType] = useState(plan ? plan.type : "");
  const [category, setCategory] = useState(plan ? plan.category : "");
  const [description, setDescription] = useState(plan ? plan.description : "");
  const [amount, setAmount] = useState(plan ? plan.amount : "");

  const { plans, id } = useSelector((state) => state);
  const dispatch = useDispatch();

  function ResetForm() {
    setDate("");
    setType("");
    setCategory("");
    setDescription("");
    setAmount("");
  }

  function Submit() {
    if (date === "" || date === undefined) {
      Toast.fire({
        icon: "error",
        title: "Date must be filled",
      });
    } else if (type === "" || type === undefined) {
      Toast.fire({
        icon: "error",
        title: "Type must be filled",
      });
    } else if (category === "" || category === undefined) {
      Toast.fire({
        icon: "error",
        title: "Category must be filled",
      });
    } else if (description === "" || description === undefined) {
      Toast.fire({
        icon: "error",
        title: "Description must be filled",
      });
    } else if (amount === "" || amount === undefined) {
      Toast.fire({
        icon: "error",
        title: "Amount must be filled",
      });
    } else if (!Number(amount)) {
      Toast.fire({
        icon: "error",
        title: "Amount must be a Number",
      });
    } else {
      if (isForm === "edit") {
        let newPlan = { date, type, category, description, amount, id };
        let payload = [...plans];
        let idx = payload.findIndex((data) => data.id === plan.id);
        payload.splice(idx, 1, newPlan);
        Toast.fire({
          icon: "success",
          title: "Plan Successfully Edited",
        });
        dispatch(setPlans(payload));
        props.hideEdit();
      } else {
        let newPlan = { date, type, category, description, amount, id };
        let payload = [...plans, newPlan];
        dispatch(setPlans(payload));
        Toast.fire({
          icon: "success",
          title: "New Plan Successfully Added",
        });
        ResetForm();
      }
    }
  }

  function deletePlan() {
    let payload = [...plans];
    let idx = payload.findIndex((data) => data.id === plan.id);
    payload.splice(idx, 1);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.value) {
        dispatch(setPlans(payload));
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  }

  function convertToRupiah(angka) {
    var rupiah = "";
    var angkarev = angka.toString().split("").reverse().join("");
    for (var i = 0; i < angkarev.length; i++)
      if (i % 3 === 0) rupiah += angkarev.substr(i, 3) + ".";
    return (
      "Rp. " +
      rupiah
        .split("", rupiah.length - 1)
        .reverse()
        .join("")
    );
  }

  if (!isForm) {
    return (
      <tr>
        <td>{plan.date}</td>
        <td>{plan.type}</td>
        <td>{plan.category}</td>
        <td>{plan.description}</td>
        <td>{convertToRupiah(plan.amount)}</td>
        <td>
          <div style={styles.actionBtn}>
            <Button
              onClick={() => props.showEdit(plan.id)}
              style={styles.btnEdit}
            >
              Edit
            </Button>
            <Button onClick={deletePlan} style={styles.btnEdit}>
              Delete
            </Button>
          </div>
        </td>
      </tr>
    );
  }

  return (
    <tr>
      <th>
        {" "}
        <Form.Control
          placeholder="Date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </th>
      <th>
        {" "}
        <Form.Control
          placeholder="Type"
          as="select"
          value={type}
          onChange={(e) => setType(e.target.value)}
          style={styles.selectType}
        >
            <option>Debit</option>
            <option>Credit</option>
        </Form.Control>
      </th>
      <th>
        {" "}
        <Form.Control
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </th>
      <th>
        {" "}
        <Form.Control
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </th>
      <th>
        {" "}
        <Form.Control
          placeholder="Amount"
          type="number"
          min="0"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </th>
      <th>
        {" "}
        <Button onClick={Submit}>{isEdit ? "Update" : "Add"}</Button>
      </th>
    </tr>
  );
}

export default Row;
