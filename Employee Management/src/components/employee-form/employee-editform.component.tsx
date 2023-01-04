import React, { useEffect, useState } from 'react';
import {
  EmployeeType,
  EmployeeSchema,
} from '../../features/employee/employee.types';
import { useEmployeeForm } from '../../hooks';
import { fromZodError, ValidationError } from 'zod-validation-error';
import { EmployeeFormActionType, EmployeeFormProps } from './employe-form.types';


export const EmployeeForm = ({
  data,
  formActionHandler
}: EmployeeFormProps) => {

  const [ formData, formValue, isValid , dispatch ] = useEmployeeForm(data);

  const handleSave = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    e.preventDefault();
    if (isValid) {
      formActionHandler(formValue, EmployeeFormActionType.Save);
    }
  };

  return (<div>
    <form className="row g-3">
      <div className="col-md-2">
        <label className="form-label">ID</label>
        <input 
          className={`form-control ${formData.id.error ? 'is-invalid': 'is-valid'}`}
          disabled
          value={formData.id.value}
          type="text"
        />
        <div className="invalid-feedback">
          { formData.id.error }
        </div>
      </div>

      <div className="col-md-5">
        <label className="form-label">Name</label>
        <input
          className={`form-control ${formData.name.error ? 'is-invalid': 'is-valid'}`}
          type="text"
          value={formData.name.value}
          onChange={(e) => dispatch({ 
            type: EmployeeFormActionType.NameChange,
            payload: e.target.value 
          })}
        />
        <div className="invalid-feedback">
          { formData.name.error }
        </div>
      </div>
      <div className="col-md-5">
        <label className="form-label">Email ID</label>
        <input
          className={`form-control ${formData.emailId.error ? 'is-invalid': 'is-valid'}`}
          value={formData.emailId.value}
          onChange={(e) => dispatch({ 
            type: EmployeeFormActionType.EmailChange,
            payload: e.target.value 
          })}
          type="text"
        />
        <div className="invalid-feedback">
          { formData.emailId.error }
        </div>
      </div>
      <div className="col-md-4">
        <label className="form-label">Aadhar Number</label>
        <input
          className={`form-control ${formData.aadharNumber.error ? 'is-invalid': 'is-valid'}`}
          type="text" 
          value={formData.aadharNumber.value}
          onChange={(e) => dispatch({ 
            type: EmployeeFormActionType.AadharChange,
            payload: e.target.value 
          })}
        />
        <div className="invalid-feedback">
          { formData.aadharNumber.error }
        </div>
      </div>
      <div className="col-md-4">
        <label className="form-label">PAN Number</label>
        <input 
          className={`form-control ${formData.panNumber.error ? 'is-invalid': 'is-valid'}`}
          type="text"
          value={formData.panNumber.value}
          onChange={(e) => dispatch({ 
            type: EmployeeFormActionType.PANChange,
            payload: e.target.value 
          })}
        />
        <div className="invalid-feedback">
          { formData.panNumber.error }
        </div>
      </div>
      <div className="col-md-4">
        <label className="form-label">Employee Type</label>
        <select 
          className={`form-control ${formData.employeeType.error ? 'is-invalid': 'is-valid'}`}
          onChange={(e) => dispatch({ 
            type: EmployeeFormActionType.EmployeeTypeChange,
            payload: e.target.value 
          })}
          aria-label="Default select example"
          value={formData.employeeType.value}
        >
          <option
            value={EmployeeType.FullTime}
          >
            Full-Time
          </option>
          <option
            value={EmployeeType.PartTime}
          >
            Part-Time
          </option>
        </select>

        <div className="invalid-feedback">
          { formData.employeeType.error }
        </div>
      </div>
      <div className="col-md-3">
        <label className="form-label">Joining Date</label>
        <input
          className={`form-control ${formData.joiningDate.error ? 'is-invalid': 'is-valid'}`}
          type="text"
          placeholder='DD-MM-YYYY'
          value={formData.joiningDate.value}
          onChange={(e) => dispatch({ 
            type: EmployeeFormActionType.DateOfJoiningChange,
            payload: e.target.value 
          })}
        />
        <div className="invalid-feedback">
          { formData.joiningDate.error }
        </div>
      </div>
      <div className="col-12s">
        <button 
          onClick={handleSave} 
          type="button"
          className="btn btn-primary"
          disabled={!isValid}
          >
            Save
          </button>
          &nbsp;&nbsp;&nbsp;
        <button 
          onClick={(e) => {
            e.preventDefault();
            formActionHandler(formValue, EmployeeFormActionType.Cancel)
          }} 
          type="button"
          className="btn btn-secondary"
          >
            Cancel
        </button>
      </div>
    </form>
    <br/>
  </div>)
}