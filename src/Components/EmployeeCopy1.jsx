import React, { Component } from "react";
import { Container, Row, Form, InputGroup, Button } from "react-bootstrap";
// import { confirmAlert } from "react-confirm-alert";
// import '../node_modules/react-confirm-alert/src/react-confirm-alert.css';

import ListEmpComp from "./ListEmpCompFunc";
import designation from "../Constant";

export default class Emp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emp: [],
      user: {
        id: 1,
        fname: "Vagisha",
        lname: "agrawal",
        email: "abc@gmail.com",
        mobile: "11",
        salary: "11",
        designation: "2",
        desigValue: "",
      },
      listEmp: false,
      addEmp: true,
      btnValue: "Submit",
    };
  }

  handleChange = ({ target }) => {
    this.setState({
      user: { ...this.state.user, [target.name]: target.value },
    });
  };

  handleSubmit = () => {
    const emp = this.state.emp.slice(0);

    //2nd Method
    // this.setState({user:{...this.state.user,id:user.id+1}})

    // console.log("in Submit, parent component emp table:  ", emp);

    //1st Method
    let userObj = { ...this.state.user };
    userObj.id = userObj.id + 1;
    this.setState({ user: userObj,btnValue:"Submit" });

    this.storing();
  };

  storing = () => {
    let { emp, user } = this.state;
    emp.push({ ...user });
    this.setState({ emp: this.state.emp });
  };

  handleUpdate = (e, index) => {
    let { emp } = this.state;
    let value = e.target.value;
    let record = emp[index];

    if (value === "Update") {
      this.setState({
        addEmp: true,
        listEmp: false,
        user: emp[index],
        btnValue: "Update"
      });
    }
    console.log("in Update, parent component emp table:  ", emp[index]);
    // this.setState({})

    this.storing();
  };

  handleDelete = (index) => {
    console.log(index);
    let { emp } = this.state;

    // if (window.confirm("Do you want to delete this record?")) {
    let deleteEmp = emp;
    deleteEmp.splice(index, 1);

    /* console.log("new variable of array for deleting: ",deleteEmp)
      console.log("original variable of array: ",emp) */

    this.setState({ emp: deleteEmp });
    /* } else {
      this.setState({ emp });
    } */
  };

  handleReset = () => {
    let { user } = this.state;
    this.setState({
      user: {
        id: user.id,
        fname: "Vagisha",
        lname: "agrawal",
        email: "abc@",
        mobile: "11",
        salary: "11",
        designation: "2",
      },
    });
  };

  toggle(e) {
    let value = e.target.value;
    // let { addEmp, listEmp } = this.state;
    if (value === "Add Employee") {
      this.setState({ addEmp: true, listEmp: false });
    } else if (value === "Show Table") {
      this.setState({ addEmp: false, listEmp: true });
    }
  }

  /* toggle(e) {
    let value = e.target.value;
    value === "Show Table" &&
      this.setState({ addEmp: this.state.listEmp, listEmp: this.state.addEmp });
  } */

  render() {
    let { user, listEmp, addEmp, emp, btnValue } = this.state;

    return (
      <div>
        <Container>
          <Row className="mt-5">
            <div className="col-sm-2 col-md-3 col-sm-12">
              <Button
                onClick={(e) => this.toggle(e)}
                value="Add Employee"
                variant="primary"
                size="lg"
              >
                Add Employee
              </Button>
            </div>
            <div className="col-sm-2 col-md-3 col-sm-12">
              <Button
                size="lg"
                onClick={(e) => this.toggle(e)}
                variant="primary"
                value="Show Table"
              >
                Show Table
              </Button>
            </div>
          </Row>

          {addEmp && (
            <Row className="mt-5">
              <Form>
                <InputGroup className="mb-3">
                  <InputGroup.Text>First and Last name</InputGroup.Text>
                  <Form.Control
                    name="fname"
                    aria-label="First name"
                    value={user.fname}
                    placeholder="First Name"
                    onChange={this.handleChange}
                  />
                  <Form.Control
                    aria-label="Last name"
                    name="lname"
                    value={user.lname}
                    onChange={this.handleChange}
                    placeholder="Last Name"
                  />
                </InputGroup>

                <InputGroup className="mb-3">
                  <InputGroup.Text>Email address</InputGroup.Text>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="name@example.com"
                    aria-label="Email"
                    value={user.email}
                    onChange={this.handleChange}
                  />
                </InputGroup>

                <InputGroup className="mb-3">
                  <InputGroup.Text>Mobile Number</InputGroup.Text>
                  <Form.Control
                    type="number"
                    placeholder="your phone Number"
                    aria-label="number"
                    value={user.mobile}
                    name="mobile"
                    onChange={this.handleChange}
                  />
                </InputGroup>

                <InputGroup className="mb-3">
                  <InputGroup.Text>Your Salary</InputGroup.Text>
                  <Form.Control
                    type="number"
                    placeholder="your salary"
                    aria-label="number"
                    value={user.salary}
                    name="salary"
                    onChange={this.handleChange}
                  />
                </InputGroup>

                <InputGroup className="mb-3">
                  <InputGroup.Text>Designation</InputGroup.Text>
                  <Form.Select
                    aria-label="Default select example"
                    value={user.designation}
                    name="designation"
                    onChange={this.handleChange}
                  >
                    {designation.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.value}
                      </option>
                    ))}
                  </Form.Select>
                </InputGroup>
                <Row className="justify-content-center">
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
                </Row>
              </Form>
            </Row>
          )}

          {listEmp && (
            <ListEmpComp
              empl={emp}
              deleteMe={this.handleDelete}
              updateMe={this.handleUpdate}
            ></ListEmpComp>
          )}
        </Container>
      </div>
    );
  }
}
