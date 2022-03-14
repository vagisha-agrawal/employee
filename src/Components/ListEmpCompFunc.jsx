import React from "react";
import "../index.css";



function ListEmpComp({ empl, deleteMe, updateMe }) {
  let tableHeader = [
    "#",
    "Full Name",
    "Email",
    "Mobile Number",
    "Salary",
    "Designation",
    "Action",
  ];

  const employee = [...empl];
  
  console.log(">empl", empl);

  

  return (
    <>
      <h1 className="my-3">Employees list</h1>

      <table className="table mt-5 table-hover">
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
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  {option.fname} {option.lname}
                </td>
                <td>{option.email}</td>
                <td>{option.mobile}</td>
                <td>{option.salary}</td>
                <td>{option.desigValue}</td>
                <td>
                  <button
                    className="btn btn-danger delete"
                    onClick={(e) => {
                      deleteMe(index);
                    }}
                  >
                    Delete
                  </button>
                  <button
                    className=" btn btn-primary update"
                    onClick={(e) => {
                      updateMe(e, index);
                    }}
                    value="Update"
                  >
                    Update
                  </button>
                </td>
              </tr>
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
    </>
  );
}

export default ListEmpComp;

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
