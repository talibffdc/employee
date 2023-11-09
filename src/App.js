
// import React, { useState } from "react";
// import employees from "./data";
// import EmployeeList from "./EmployeeList";

// function App() {
//   const [employeeData, setEmployeeData] = useState(employees);

//   const handleDelete = (id) => {
//     setEmployeeData(employeeData.filter((employee) => employee.id !== id));
//   };

//   return (
//     <div className="container mt-5">
//       <h1>Employee Management System</h1>
//       <button className="btn btn-primary mb-3">Add Employee</button>
//       <EmployeeList employees={employeeData} onDelete={handleDelete} />
//     </div>
//   );
// }

// export default App;





import React, { useState } from "react";
import employees from "./data";
import EmployeeList from "./EmployeeList";

function App() {
  const [employeeData, setEmployeeData] = useState(employees);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newEmployee, setNewEmployee] = useState({
    name: "",
    position: "",
    salary: 0,
  });

  const handleDelete = (id) => {
    setEmployeeData(employeeData.filter((employee) => employee.id !== id));
  };

  const handleAdd = () => {
    setShowAddForm(true);
  };

  const handleSave = () => {
    // Generate a unique ID for the new employee
    const newId = Math.max(...employeeData.map((employee) => employee.id)) + 1;
    setEmployeeData([...employeeData, { id: newId, ...newEmployee }]);
    setNewEmployee({ name: "", position: "", salary: 0 });
    setShowAddForm(false);
  };

  const handleUpdate = (updatedEmployee) => {
    const updatedData = employeeData.map((employee) =>
      employee.id === updatedEmployee.id ? updatedEmployee : employee
    );
    setEmployeeData(updatedData);
  };

  return (
    <div className="container mt-5">
      <h1>Employee Management System</h1>
      <button className="btn btn-primary mb-3" onClick={handleAdd}>
        Add Employee
      </button>
      {showAddForm && (
        <div className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">Add New Employee</h5>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                value={newEmployee.name}
                onChange={(e) => setNewEmployee({ ...newEmployee, name: e.target.value })}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Position"
                value={newEmployee.position}
                onChange={(e) => setNewEmployee({ ...newEmployee, position: e.target.value })}
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                className="form-control"
                placeholder="Salary"
                value={newEmployee.salary}
                onChange={(e) => setNewEmployee({ ...newEmployee, salary: parseFloat(e.target.value) })}
              />
            </div>
            <button className="btn btn-success" onClick={handleSave} >
              Save
            </button>
          </div>
        </div>
      )}
      <EmployeeList employees={employeeData} onDelete={handleDelete} onUpdate={handleUpdate}  />
    </div>
  );
}

export default App;
