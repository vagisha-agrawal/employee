import React, { Fragment, useEffect, useState } from "react";
import { Form } from "react-bootstrap";

import designation from "../Constant";
import ReadOnlyRecords from "./readOnlyRecords";
import EditableRecord from "./EditableRecord";

function ListEmpComp2(props) {
  let tableHeader = [
    "#",
    "Full Name",
    "Email",
    "Mobile Number",
    "Salary",
    "Designation",
    "Action",
  ];
  const [employee, setEmployee] = useState(props.empl);
  const [editEmployeeId, setEditEmployeeId] = useState(null);

  const handleEditClick=(e,employee)=>{
    setEditEmployeeId(employee.id)
  }

  /*  employee.map((option) => {
    console.log(option.designation);
    option.designation = designation.find(
      (element) => (
        (element.id === option.designation).value,
        console.log("elements:----", element.id === option.designation)
      )
    );
  });
 */
  employee.map((a, b, c) =>
    designation.find((x, y, z) => {
      x.id === a.designation
        ? (a.desigValue = x.value)
        : console.log("ID chacking: ", a.desigValue);
    })
  );

  console.log("Employee List: ", employee);

  return (
    <>
      <Form>
        <table className="table mt-5">
          <thead>
            <tr>
              {tableHeader.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>

          {employee.length !== 0 ? (
            <tbody>
              {employee.map((option, index) => (
                <Fragment>
                  {editEmployeeId === employee.id ? (
                    <ReadOnlyRecords option={option} index={index} handleEditClick={handleEditClick}/>
                  ) : (
                    <EditableRecord />
                  )}
                </Fragment>
              ))}
            </tbody>
          ) : (
            <tfoot>
              <tr>
                <td colSpan={tableHeader.length}>No Results are Found</td>
              </tr>
            </tfoot>
          )}
        </table>
      </Form>
    </>
  );
}

export default ListEmpComp2;
