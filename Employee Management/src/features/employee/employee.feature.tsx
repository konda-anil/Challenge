import React, { useState } from 'react';
import { data } from '../../assets/employee_data.json';
import { Employee } from './employee.types';
import {
  Table,
  TableActionType,
  EmployeeFormActionType,
  EmployeeForm,
  Modal,
} from './../../components';
import { header } from './constants';

export const EmployeeFeature = () => {

  const [employees, setEmployees] = useState<Employee[]>(data as Employee[]);

  const [editEmployee, setEditEmployee] = useState<Employee>();
  const [isModal, setModal] = useState<boolean>(false);

  const editActionHandler = (data: Employee, action: TableActionType): void => {
    switch(action) {
      case TableActionType.Edit:
        setModal(false);
        setEditEmployee({...data});
      break;
      case TableActionType.ModalEdit:
        setModal(true);
        setEditEmployee({...data});
      break;
      default:
        throw new Error("Invalid action");
    }
  }

  const formActionHandler = (data: Employee, action: EmployeeFormActionType): void => {
    switch(action) {
      case EmployeeFormActionType.Save:
        setModal(false);
        setEditEmployee(undefined);
        setEmployees(employees => {
          return employees.map(employee => employee.id === data.id ? data: employee);
        });
      break;
      case EmployeeFormActionType.Cancel:
        setModal(false);
        setEditEmployee(undefined);
      break;
      default:
        throw new Error(`Invalid action: ${action}`);
    }
  }

  return <div className='container'>
    <br/>
    <Table
      header={header}
      data={employees}
      actionHandler={editActionHandler}
    />
    <br/>
    {
      editEmployee && !isModal 
      ? <EmployeeForm 
        data={editEmployee}
        formActionHandler={formActionHandler}
        />
      : false
    }

    <Modal show={isModal}>
      {
        editEmployee ? (
        <EmployeeForm 
          data={editEmployee}
          formActionHandler={formActionHandler}
          />
        ): false
      }
    </Modal>

    
</div>
}

