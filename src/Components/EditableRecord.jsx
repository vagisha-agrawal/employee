import React from "react";
import { Container, Row, Form, InputGroup, Button } from "react-bootstrap";

import designation from "../Constant";

function EditableRecord() {
  console.log("editable row");

  return (
    <tr>
      <td></td>
      <td>
        <InputGroup className="mb-3">
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
          <Form.Control
            type="number"
            placeholder="your salary"
            aria-label="number"
            name="salary"
          />
        </InputGroup>
      </td>
      <td>
        <InputGroup className="mb-3">
          <Form.Select aria-label="Default select example" name="designation">
            {designation.map((option) => (
              <option key={option.id} value={option.id}>
                {option.value}
              </option>
            ))}
          </Form.Select>
        </InputGroup>
      </td>

      {/* <Row className="justify-content-center">
          <div className="col-md-3 col-sm-12 col-lg-1">
          <Button
          value={btnValue}
          variant="primary"
          onClick={this.handleSubmit.bind(this)}
          >
          {btnValue}
          </Button>
          </div>
          <div className="col-md-3 col-sm-12 col-lg-1">
          <Button variant="primary" onClick={this.handleReset}>
          Reset
          </Button>
          </div>
        </Row> */}
    </tr>
  );
}

export default EditableRecord;
