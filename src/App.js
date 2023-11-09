
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
//       <EmployeeList employees={employeeData} onDelete={handleDelete} onUpdate={handleUpdate}  />
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
    <>
      <div className="container mt-5">
        <h1>Employee Management System</h1>
        <button className="btn btn-primary mb-3" onClick={handleAdd}  data-bs-toggle="modal" data-bs-target="#exampleModal">
          Add New Employee
        </button>

        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
          
        
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">

        <input className="form-control my-2" placeholder=" Name" type="text" value={newEmployee.name} onChange={(e) => setNewEmployee({ ...newEmployee, name: e.target.value })} />
        <input className="form-control my-2" placeholder=" Position" type="text" value={newEmployee.position}
                  onChange={(e) => setNewEmployee({ ...newEmployee, position: e.target.value })}/>
        <input className="form-control my-2" placeholder=" Salary" type="text" value={newEmployee.salary} onChange={(e) => setNewEmployee({ ...newEmployee, salary: parseFloat(e.target.value) })}/>
                  

      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button className="btn btn-success" data-bs-dismiss="modal" onClick={handleSave} >
                Save
              </button>
      </div>
    </div>
  </div>
</div>

      <EmployeeList employees={employeeData} onDelete={handleDelete} onUpdate={handleUpdate}  />
    </div>
    </>
  );
}

export default App;
