
import React from "react";

function Employee({ employee, onDelete }) {
  function onUpdate(id){

    
    
  }
  
  return (
    <>
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

        <button
          className="btn btn-danger mx-2"
          onClick={() => onUpdate(employee.id)
          }
          data-bs-toggle="modal" data-bs-target="#exampleModal">
        
          Update
        </button>




      </div>
      
    </div>



<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
          
        
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">

        <input className="form-control my-2" placeholder="Change Name" type="text"/>
        <input className="form-control my-2" placeholder="Change Position" type="text"/>
        <input className="form-control my-2" placeholder="Change Salary" type="text"/>

      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

</>
  );
}

export default Employee;
