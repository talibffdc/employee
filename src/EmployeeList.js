import React from "react";
import Employee from "./Employee";

function EmployeeList({ employees, onDelete }) {
  return (
    <div>
        <Employee onDelete={onDelete} employees={employees}/>
        
    </div>
  );
}

export default EmployeeList;