import React, { Component } from "react";
import { Container, Row, Form, InputGroup, Button } from "react-bootstrap";
// import { confirmAlert } from "react-confirm-alert";
// import '../node_modules/react-confirm-alert/src/react-confirm-alert.css';

import ListEmpComp from "./ListEmpCompFunc";
import designation from "../Constant";

const Email = new RegExp("^([A-z]{1,}[0-9]{0,})+@+[a-z]{3,}.+[a-z]{2,3}$");
const Number = new RegExp("^([7||8||9]+[0-9]{9})$");
const Fname = new RegExp("(^[A-z]{3,15}$)");
const Lname = new RegExp("(^[A-z]{3,10}$)");
const Salary = new RegExp("^(([2-7]+[0-9]{4})|80000)$");

export default class Emp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emp: [],
      user: {
        id: 0,
        fname: "Vagisha",
        lname: "agrawal",
        email: "abc@gmail.com",
        mobile: "9876543289",
        salary: "80000",
        designation: "2",
        desigValue: "",
      },
      listEmp: false,
      addEmp: true,
      btnValue: "Submit",
      fnameError: "",
      lnameError: "",
      nameError: "",
      emailError: "",
      mobileError: "",
      salaryError: "",
    };
  }

  getRandom = () => Math.floor(Math.random() * 90000) + 10000;

  handleChange = ({ target }) => {
    this.setState({
      user: { ...this.state.user, [target.name]: target.value },
    });
  };

  handleValidation = () => {
    let { fname, lname, email, mobile, salary } = this.state.user;

    if (!Lname.test(lname)) {
      this.setState({ lnameError: "* Lastname is not valid", fnameError: "" });
    } else if (!Fname.test(fname)) {
      this.setState({ fnameError: "* Firstname is not valid", lnameError: "" });
    } else if (!Email.test(email)) {
      this.setState({
        emailError: "* Format should be xyz@example.com",
      });
    } else if (!Number.test(mobile)) {
      this.setState({
        mobileError:
          "* Mobile number length should be 10 and should be start from digit 7, 8 or 9",
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
    let { fname, lname } = this.state.user;
    this.setState({
      nameError: "",
      emailError: "",
      mobileError: "",
      salaryError: "",
    });

    //2nd Method
    // this.setState({user:{...this.state.user,id:user.id+1}})

    // if (this.handleValidation()) {
    if (btnValue === "Submit") {
      let userObj = { ...this.state.user };
      userObj.id = this.getRandom();
      userObj.fname = fname.charAt(0).toUpperCase() + fname.slice(1);
      userObj.lname = lname.charAt(0).toUpperCase() + lname.slice(1);
      console.log("userObj.id: ", userObj.id);
      user.id = userObj.id;
      user.fname = userObj.fname;
      emp.push({ ...user });
      this.setState({ emp });

      console.log("user: ", user);
    } else {
      let empIndex = emp.findIndex((option) => option.id === user.id);
      emp[empIndex] = user;
      this.setState({ btnValue: "Submit" });
      this.toggle("list");
    }
    // }
  };

  handleUpdate = (e, index) => {
    let { emp } = this.state;
    let value = e.target.value;

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
    let { emp } = this.state;

    if (window.confirm("Do you want to delete this record?")) {
      let deleteEmp = emp.splice(0);
      deleteEmp.splice(index, 1);
      console.log("in delete, ", emp);
      console.log("in delete, ", deleteEmp);
      this.setState({ emp: deleteEmp });
    } else {
      this.setState({ emp });
    }
  };

  handleReset = () => {
    let { user } = this.state;
    this.setState({
      user: {
        id: user.id,
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

  render() {
    let { user, listEmp, addEmp, emp, btnValue } = this.state;

    return (
      <div>
        <Container>
          <Row className="mt-5">
            <div className="col-sm-2 col-md-3 col-sm-12">
              <Button
                onClick={() => this.toggle()}
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
                onClick={() => this.toggle("list")}
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
                    required
                  />

                  <Form.Control
                    aria-label="Last name"
                    name="lname"
                    value={user.lname}
                    onChange={this.handleChange}
                    required
                    placeholder="Last Name"
                  />
                </InputGroup>

                <p
                  className="text-danger font-weight-bold"
                  style={{ fontSize: "20px" }}
                >
                  <b>
                    {this.state.lnameError}
                    {this.state.fnameError}
                  </b>{" "}
                </p>

                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">
                      Email
                    </span>
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="name@example.com"
                    aria-label="Email"
                    pattern="([A-z]{1,}[0-9]{0,})+@+[a-z]{3,}.+[a-z]{2,3}"
                    value={user.email}
                    onChange={this.handleChange}
                    className="form-control"
                  />
                  
                </div>

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
                    required
                  />
                  <span
                    className="text-danger font-weight-bold"
                    style={{ fontSize: "20px" }}
                  >
                    <b>{this.state.mobileError}</b>
                  </span>
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
                    required
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
                    required
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
