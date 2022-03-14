import React from "react";

function readOnlyRecords({ option, index, handleEditClick }) {
  return (
    <tr key={index}>
      <td>{option.id}</td>
      <td>
        {option.fname} {option.lname}
      </td>
      <td>{option.email}</td>
      <td>{option.mobile}</td>
      <td>{option.salary}</td>
      <td>{option.desigValue}</td>
      <td>
        <button className="btn" onClick={(e)=>handleEditClick(e,option)}>
          Edit
        </button>
      </td>
    </tr>
  );
}

export default readOnlyRecords;
