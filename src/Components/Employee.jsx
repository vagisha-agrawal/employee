import React, { Component } from "react";
import { Container, Row, Form, InputGroup, Button } from "react-bootstrap";
// import { confirmAlert } from "react-confirm-alert";
// import '../node_modules/react-confirm-alert/src/react-confirm-alert.css';

import "../index.css";

import ListEmpComp from "./ListEmpCompFunc";
import designation from "../Constant";

// Email
/**
 * Alphabets, numbers, _, -
 * Must start with alphabets, same after @ and . sign
 */
const Email = /^[A-Za-z]+[\w-]+@[\w-]+.[\w-]{2,4}$/g; // W
const Number = new RegExp("^([789]{1}[0-9]{9})$", "g");
const Fname = new RegExp("^([A-Za-z]{3,})$", "g");
const Lname = new RegExp("^([A-Za-z]{3,})$", "g");
const Salary = new RegExp("^(([2-7]{1}[0-9]{4})|80000)$", "g");

export default class Emp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emp: [],
      user: {
        id: 0,
        fname: "Vagisha",
        lname: "Agrawal",
        email: "abc_123@gmail.com",
        mobile: "9876543289",
        salary: "80000",
        designation: "2",
        desigValue: "",
      },
      alert: "",
      alertToggle: false,
      listEmp: false,
      addEmp: true,
      btnValue: "Submit",
      error: {
        emailError: "",
        mobileError: "",
        salaryError: "",
        alertUpdate: false,
      },
    };
  }

  getRandom = () => Math.floor(Math.random() * 90000) + 10000;

  handleChange = ({ target }) => {
    console.log(">target", target.name);
    if (
      target.name === "fname" &&
      !(target.value && Fname.test(target.value))
    ) {
      return;
    }

    if (
      target.name === "lname" &&
      !(target.value && Lname.test(target.value))
    ) {
      return;
    }

    this.setState({
      user: { ...this.state.user, [target.name]: target.value },
    });
  };

  handleValidation = () => {
    let { email, mobile, salary } = this.state.user;

    if (!Email.test(email)) {
      this.setState({
        emailError: "* Format should be xyz@example.com",
      });
    } else if (!Number.test(mobile)) {
      this.setState({
        mobileError: "* Mobile number should be start from digit 7, 8 or 9",
      });
    } else if (mobile.length !== 10) {
      this.setState({
        mobileError: "* Mobile number length should be 10",
      });
    } else if (!Salary.test(salary)) {
      this.setState({ salaryError: "* Salary should be between 20K to 80K" });
    } else {
      return true;
    }
  };

  handleSubmit = () => {
    const emp = this.state.emp;

    let { btnValue, user } = this.state;
    this.setState({
      emailError: "",
      mobileError: "",
      salaryError: "",
    });

    if (this.handleValidation()) {
      if (btnValue === "Submit") {
        let userObj = { ...this.state.user };

        userObj.id = this.getRandom();
        userObj.fname =
          user.fname.charAt(0).toUpperCase() + user.fname.slice(1);
        userObj.lname =
          user.lname.charAt(0).toUpperCase() + user.lname.slice(1);

        let designated = designation.findIndex(
          (element) => element.id === user.designation
        );
        userObj.desigValue = designation[designated].value;
        console.log("designation", userObj.desigValue);

        user.id = userObj.id;
        user.fname = userObj.fname;
        user.lname = userObj.lname;
        user.desigValue = userObj.desigValue;

        emp.push({ ...user });
        this.setState({ emp, alertToggle: true });

        setTimeout(() => {
          this.setState({ alertToggle: false });
        }, 3000);
        // this.handleReset();
      } else {
        let designated = designation.findIndex(
          (element) => element.id === user.designation
        );
        user.desigValue = designation[designated].value;

        let empIndex = emp.findIndex((option) => option.id === user.id);
        emp[empIndex] = user;
        this.setState({ btnValue: "Submit", alertUpdate: true });
        setTimeout(() => {
          this.setState({ alertUpdate: false });
          this.toggle("list");
        }, 3000);
      }
    }
  };

  handleUpdate = (e, index) => {
    let { emp } = this.state;
    let value = e.target.value;

    /// TODOS: Didn't get this code

    if (value === "Update") {
      this.setState({
        getUpdate: emp.index,
        user: emp[index],
        btnValue: "Update",
      });
      this.toggle();
    }

    console.log("in Update, what we are storing in user:   ", this.state.user);
  };

  handleDelete = (index) => {
    console.log(index);
    if (window.confirm("Do you want to delete this record?")) {
      let { emp } = this.state;
      let deleteEmp = emp.splice(0);
      deleteEmp.splice(index, 1);
      this.setState({ emp: deleteEmp });
    }
  };

  handleReset = () => {
    this.setState({
      user: {
        id: this.getRandom(),
        fname: "",
        lname: "",
        email: "",
        mobile: "",
        salary: "",
        designation: "2",
      },
    });
  };

  toggle(btn = "add") {
    this.setState({ addEmp: btn === "add", listEmp: btn === "list" });
  }

  handleBlur = () => {
    this.setState({ alertToggle: false });
  };

  render() {
    let { user, listEmp, addEmp, emp, btnValue, alertToggle, alertUpdate } =
      this.state;

    return (
      <div>
        <Container>
          <Row className="mt-5">
            <div className="col-sm-2 col-md-3 col-sm-12 button_add">
              <Button
                onClick={() => this.toggle()}
                value="Add Employee"
                variant="primary"
                size="lg"
              >
                Add Employee
              </Button>
            </div>
            <div className="col-sm-2 col-md-3 col-sm-12 button_list">
              <Button
                size="lg"
                onClick={() => this.toggle("list")}
                variant="primary"
                value="Show Table"
              >
                Show Table
              </Button>
            </div>
          </Row>

          {alertToggle && (
            <div className="alert alert-success mt-4" role="alert">
              <b className="text-dark">Your form is submitted properly</b>
            </div>
          )}
          {alertUpdate && (
            <div className="alert alert-success mt-4" role="alert">
              <b className="text-dark">Form updation is success</b>
            </div>
          )}

          {addEmp && (
            <Row className="mt-5">
              <h1 className="my-3">Add your Employees</h1>
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

                {/*  <p
                  className="text-danger font-weight-bold"
                  style={{ fontSize: "20px" }}
                >
                  <b>
                    {this.state.Error}
                    
                  </b>{" "}
                </p> */}

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
                <p
                  className="text-danger font-weight-bold"
                  style={{ fontSize: "20px" }}
                >
                  <b>{this.state.emailError}</b>{" "}
                </p>

                <InputGroup className="mb-3">
                  <InputGroup.Text>Mobile Number</InputGroup.Text>&nbsp;
                  <InputGroup.Text>+91</InputGroup.Text>
                  <Form.Control
                    type="number"
                    placeholder="your phone Number"
                    aria-label="number"
                    value={user.mobile}
                    name="mobile"
                    onChange={this.handleChange}
                  />
                  <span
                    className="text-danger font-weight-bold"
                    style={{ fontSize: "20px" }}
                  >
                    <b>{this.state.mobileError}</b>
                  </span>
                </InputGroup>
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="Check this switch"
                />
              

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
                  <span
                    className="text-danger font-weight-bold"
                    style={{ fontSize: "20px" }}
                  >
                    <b>{this.state.salaryError}</b>
                  </span>
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
                  <div className="col-md-3 col-sm-12 col-lg-1 submit">
                    <Button
                      value={btnValue}
                      variant="primary"
                      onClick={this.handleSubmit.bind(this)}
                    >
                      {btnValue}
                    </Button>
                  </div>
                  <div className="col-md-3 col-sm-12 col-lg-1 reset">
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
