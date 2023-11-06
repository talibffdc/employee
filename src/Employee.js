
import React from "react";

function Employee({ employee, onDelete }) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{employee.name}</h5>
        <p className="card-text">Position: {employee.position}</p>
        <p className="card-text">Salary: {employee.salary}</p>
        <button
          className="btn btn-danger"
          onClick={() => onDelete(employee.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Employee;
