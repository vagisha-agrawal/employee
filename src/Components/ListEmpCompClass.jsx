import React, { Component } from "react";

export default class ListEmpComp extends Component {
  tableHeader = [
    "#",
    "Full Name",
    "Email",
    "Mobile Number",
    "Salary",
    "Designation",
    "Action",
  ];

  constructor(props) {
    super(props);
    this.state = {
      employee: [],
    };
  }

  componentDidMount = () => {
    this.showData();
  };

  showData = () => {
    let { emp } = this.props;
    let { employee } = this.state;
    employee.push( emp );
    this.setState({ employee: emp });
    console.log(">employee", employee);
  };

  handleDelete = (e, index) => {
    let { employee } = this.state;
    employee.splice(index, 1);
    this.setState({ employee });
    // localStorage.setItem("employee", JSON.stringify(emp));
  };

  render() {
    // let { employee } = this.state;
    let employee = this.props.emp;
    console.log(employee);

    return (
      <>
        <table className="table mt-5">
          <thead>
            <tr>
              {this.tableHeader.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>

          {employee.length !== 0 ? (
            <tbody>
              {employee.map((option, index) => (
                <tr key={index}>
                  <td>{option.id}</td>
                  <td>
                    {option.fname} {option.lname}
                  </td>
                  <td>{option.email}</td>
                  <td>{option.mobile}</td>
                  <td>{option.salary}</td>
                  <td>{option.designation}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={(e) => this.handleDelete(e, index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          ) : (
            <tfoot>
              <tr>
                <td colSpan={this.tableHeader.length}>No Results are Found</td>
              </tr>
            </tfoot>
          )}
        </table>
      </>
    );
  }
}
