import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

function Demo(props) {
  const [addEmp, setAddEmp] = useState(true);
  const [listEmp, setListEmp] = useState(false);
  const [emp, setEmp] = useState([]);

  return (
    <>
      <Button
        onClick={() => {
          setAddEmp(true);
          setListEmp(false);
        }}
      >
        Add Emp
      </Button>
      <Button
        onClick={() => {
          setAddEmp(false);
          setListEmp(true);
        }}
      >
        List Emp
      </Button>

      <div>{addEmp && <h3>Add </h3>}</div>
      <div>{listEmp && <h3>List </h3>}</div>
    </>
  );
}

function ParentDemo(props) {
  const [test, setTest] = useState([1, 2, 3]);

  return (
    <div>
      Hello
      <div>
        <ChildDemo test={test} />
      </div>
    </div>
  );
}

function ChildDemo(props) {
  let test = props.test;
  test = [4, 5, 6];

  return (
    <div>
      {test.map((v, index) => (
        <p key={index}>{v}</p>
      ))}
    </div>
  );
}

export default Demo;

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
