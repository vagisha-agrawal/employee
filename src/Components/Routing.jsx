import { Link } from "react-router-dom";
import React from "react";

function Routing() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/Employee">Invoices</Link>
        </li>
        <li>
          <Link to="/ListEmpCompFunc">Expenses</Link>
        </li>
      </ul>
    </div>
  );
}

export default Routing;
