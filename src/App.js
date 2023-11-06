// src/App.js

import React, { useState } from "react";
import employees from "./data";
import EmployeeList from "./EmployeeList";

function App() {
  const [employeeData, setEmployeeData] = useState(employees);

  const handleDelete = (id) => {
    setEmployeeData(employeeData.filter((employee) => employee.id !== id));
  };

  return (
    <div className="container mt-5">
      <h1>Employee Management System</h1>
      <button className="btn btn-primary mb-3">Add Employee</button>
      <EmployeeList employees={employeeData} onDelete={handleDelete} />
    </div>
  );
}

export default App;
