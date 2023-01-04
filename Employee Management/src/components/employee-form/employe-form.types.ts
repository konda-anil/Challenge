import { Employee, EmployeeType } from "../../features";

export interface EmployeeFormProps {
  data: Employee,
  formActionHandler: (data: Employee, action: EmployeeFormActionType) => void
}

export enum EmployeeFormActionType {
  NameChange,
  EmailChange,
  AadharChange,
  PANChange,
  DateOfJoiningChange,
  EmployeeTypeChange,
  PopulateDate,
  Save,
  Cancel
}

export interface EmployeeFormAction {
  type: EmployeeFormActionType,
  payload: string | EmployeeType | EmployeeEditFrom;
}

export interface FormField { 
  error?: string
  value : string | number | EmployeeType;
}

export interface EmployeeEditFrom {
  name: FormField,
  id: FormField,
  emailId: FormField,
  aadharNumber: FormField,
  panNumber: FormField,
  employeeType: FormField,
  joiningDate: FormField,
}