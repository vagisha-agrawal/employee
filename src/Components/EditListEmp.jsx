import React from "react";
import { Container, Row, Form, InputGroup, Button } from "react-bootstrap";
import designation from "../Constant";

function editListEmp({ option, index }) {
  return (
    <tr>
      
      <td>
        <InputGroup className="mb-3">
          <InputGroup.Text>First and Last name</InputGroup.Text>
          <Form.Control
            name="fname"
            aria-label="First name"
            placeholder="First Name"
          />
          <Form.Control
            aria-label="Last name"
            name="lname"
            placeholder="Last Name"
          />
        </InputGroup>
      </td>
      <td>
        <InputGroup className="mb-3">
          <InputGroup.Text>Email address</InputGroup.Text>
          <Form.Control
            type="email"
            name="email"
            placeholder="name@example.com"
            aria-label="Email"
          />
        </InputGroup>
      </td>
      <td>
        <InputGroup className="mb-3">
          <InputGroup.Text>Mobile Number</InputGroup.Text>
          <Form.Control
            type="number"
            placeholder="your phone Number"
            aria-label="number"
            name="mobile"
          />
        </InputGroup>
      </td>
      <td>
        <InputGroup className="mb-3">
          <InputGroup.Text>Your Salary</InputGroup.Text>
          <Form.Control
            type="number"
            placeholder="your salary"
            aria-label="number"
            name="salary"
          />
        </InputGroup>
      </td>
      <td><InputGroup className="mb-3">
                  <InputGroup.Text>Designation</InputGroup.Text>
                  <Form.Select
                    aria-label="Default select example"                   
                    name="designation"                    
                  >
                    {designation.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.value}
                      </option>
                    ))}
                  </Form.Select>
                </InputGroup></td>
      {/*  <td>
                  <button
                    className="btn btn-danger"
                    onClick={(e) => {
                      props.deleteMe(index);
                    }}
                  >
                    Delete
                  </button>
                  <button
                    className=" btn btn-primary"
                    onClick={(e) => {
                      props.updateMe(index);
                    }}
                  >
                    Update
                  </button>
                </td> */}
    </tr>
  );
}

export default editListEmp;
