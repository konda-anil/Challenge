import { TableHeader, TableActionType } from './../../components/table/table.types';

export const header: TableHeader[] = [
  {
    name: '#ID',
    propName: 'id',
  },
  {
    name: 'Name',
    propName: 'name',
  },
  {
    name: 'Email ID',
    propName: 'emailId',
  },
  {
    name: 'Aadhar Number',
    propName: 'aadharNumber',
  },
  {
    name: 'PAN Number',
    propName: 'panNumber',
  },
  {
    name: 'Employee Type',
    propName: 'employeeType',
  },
  {
    name: 'Joining Date',
    propName: 'joiningDate',
  },
  {
    name: 'Edit',
    propName: TableActionType.Edit,
  },
  {
    name: 'Modal Edit',
    propName: TableActionType.ModalEdit,
  }
]