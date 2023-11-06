// src/EmployeeList.js

import React from "react";
import Employee from "./Employee";

function EmployeeList({ employees, onDelete }) {
  return (
    <div>
      {employees.map((employee) => (
        <Employee key={employee.id} employee={employee} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default EmployeeList;
